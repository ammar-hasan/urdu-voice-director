#!/usr/bin/env node
import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const casesPath = join(root, "skills", "urdu-voice-director", "evals", "benchmark-cases.json");
const dimensions = [
  "meaning_fidelity",
  "social_fidelity",
  "spoken_naturalness",
  "imaginative_fidelity",
  "performance_usefulness",
  "oral_transfer",
  "pronunciation_safety",
  "output_separation",
  "provider_validity",
  "restraint",
];

const fail = (message) => {
  console.error(message);
  process.exit(1);
};
const readJson = (path) => JSON.parse(readFileSync(resolve(path), "utf8"));
const writeJson = (path, value) => {
  const destination = resolve(path);
  mkdirSync(dirname(destination), { recursive: true });
  writeFileSync(destination, `${JSON.stringify(value, null, 2)}\n`);
};

const args = process.argv.slice(2);
const command = args.shift();
const options = {};
while (args.length) {
  const key = args.shift();
  if (!key.startsWith("--") || !args.length) fail(`Invalid argument: ${key}`);
  options[key.slice(2)] = args.shift();
}

const validateCases = (data) => {
  const errors = [];
  const requiredModes = new Set([
    "everyday-conversation",
    "fictional-dialogue",
    "audiobook-narration",
    "news-reading",
    "public-speech",
    "religious-devotional",
    "poetry-recitation",
    "mushaira-performance",
  ]);
  const ids = new Set();
  if (data.schema_version !== 1) errors.push("schema_version must be 1");
  if (!Array.isArray(data.cases)) return ["cases must be an array"];
  for (const item of data.cases) {
    if (!item.id || ids.has(item.id)) errors.push(`invalid/duplicate id: ${item.id}`);
    ids.add(item.id);
    if (!requiredModes.has(item.mode)) errors.push(`${item.id}: invalid mode`);
    for (const field of ["task", "context", "source"]) {
      if (typeof item[field] !== "string" || !item[field].trim()) errors.push(`${item.id}: ${field} is empty`);
    }
    for (const field of ["protected", "review", "references"]) {
      if (!Array.isArray(item[field]) || !item[field].length) errors.push(`${item.id}: ${field} is empty`);
    }
  }
  for (const mode of requiredModes) {
    if (data.cases.filter((item) => item.mode === mode).length < 2) {
      errors.push(`need at least two ${mode} cases`);
    }
  }
  return errors;
};

if (command === "validate") {
  const data = readJson(casesPath);
  const errors = validateCases(data);
  if (errors.length) fail(`Benchmark validation failed:\n- ${errors.join("\n- ")}`);
  console.log(`Benchmark validation passed: ${data.cases.length} cases across 8 performance modes.`);
  process.exit(0);
}

if (command === "prepare") {
  for (const required of ["baseline", "candidate", "out", "key", "seed"]) {
    if (!options[required]) fail(`prepare requires --${required}`);
  }
  const suite = readJson(casesPath);
  const errors = validateCases(suite);
  if (errors.length) fail(`Benchmark cases invalid:\n- ${errors.join("\n- ")}`);
  const baseline = readJson(options.baseline);
  const candidate = readJson(options.candidate);
  const packet = {
    schema_version: 1,
    suite_version: suite.suite_version,
    blinded: true,
    dimensions,
    cases: [],
  };
  const key = {
    schema_version: 1,
    suite_version: suite.suite_version,
    seed: options.seed,
    baseline_run: baseline.run || {},
    candidate_run: candidate.run || {},
    mapping: {},
  };
  for (const item of suite.cases) {
    const baselineOutput = baseline.outputs?.[item.id];
    const candidateOutput = candidate.outputs?.[item.id];
    if (typeof baselineOutput !== "string") fail(`baseline output missing: ${item.id}`);
    if (typeof candidateOutput !== "string") fail(`candidate output missing: ${item.id}`);
    const bit = createHash("sha256").update(`${options.seed}:${item.id}`).digest()[0] & 1;
    const a = bit ? candidateOutput : baselineOutput;
    const b = bit ? baselineOutput : candidateOutput;
    key.mapping[item.id] = bit
      ? { A: "candidate", B: "baseline" }
      : { A: "baseline", B: "candidate" };
    packet.cases.push({
      id: item.id,
      mode: item.mode,
      task: item.task,
      context: item.context,
      source: item.source,
      protected: item.protected,
      review: item.review,
      output_A: a,
      output_B: b,
    });
  }
  writeJson(options.out, packet);
  writeJson(options.key, key);
  console.log(`Prepared ${packet.cases.length} blinded cases. Keep ${options.key} private from reviewers.`);
  process.exit(0);
}

if (command === "score") {
  for (const required of ["packet", "key", "reviews", "out"]) {
    if (!options[required]) fail(`score requires --${required}`);
  }
  const packet = readJson(options.packet);
  const key = readJson(options.key);
  const reviewFile = readJson(options.reviews);
  const caseIds = new Set(packet.cases.map((item) => item.id));
  const rows = [];
  const makeBucket = () => {
    const bucket = {
      baseline: { preferences: 0, hard_failures: 0, scores: {} },
      candidate: { preferences: 0, hard_failures: 0, scores: {} },
      ties: 0,
      both_unacceptable: 0,
    };
    for (const version of ["baseline", "candidate"]) {
      for (const dimension of dimensions) bucket[version].scores[dimension] = [];
    }
    return bucket;
  };
  const summary = makeBucket();
  const perMode = {};
  for (const review of reviewFile.reviews || []) {
    if (!review.reviewer || !caseIds.has(review.case_id)) fail(`invalid review identity/case: ${review.case_id}`);
    const mapping = key.mapping[review.case_id];
    if (!mapping) fail(`key missing case: ${review.case_id}`);
    const mode = packet.cases.find((item) => item.id === review.case_id)?.mode;
    if (!mode) fail(`packet missing case metadata: ${review.case_id}`);
    perMode[mode] ||= makeBucket();
    for (const label of ["A", "B"]) {
      const version = mapping[label];
      const hard = review.hard_fail?.[label] || [];
      if (!Array.isArray(hard)) fail(`${review.case_id}: hard_fail.${label} must be an array`);
      for (const bucket of [summary, perMode[mode]]) {
        bucket[version].hard_failures += hard.length > 0 ? 1 : 0;
      }
      const scores = review.scores?.[label] || {};
      for (const [dimension, value] of Object.entries(scores)) {
        if (!dimensions.includes(dimension)) fail(`${review.case_id}: unknown dimension ${dimension}`);
        if (value !== "N/A" && (!Number.isInteger(value) || value < 1 || value > 4)) {
          fail(`${review.case_id}: ${dimension} score must be 1–4 or N/A`);
        }
        if (value !== "N/A") {
          summary[version].scores[dimension].push(value);
          perMode[mode][version].scores[dimension].push(value);
        }
      }
    }
    const preference = review.preference;
    let resolvedPreference;
    for (const bucket of [summary, perMode[mode]]) {
      if (preference === "tie") bucket.ties += 1;
      else if (preference === "both-unacceptable") bucket.both_unacceptable += 1;
      else if (preference === "A" || preference === "B") bucket[mapping[preference]].preferences += 1;
      else fail(`${review.case_id}: invalid preference ${preference}`);
    }
    if (preference === "A" || preference === "B") resolvedPreference = mapping[preference];
    else resolvedPreference = preference;
    rows.push({
      reviewer: review.reviewer,
      case_id: review.case_id,
      mode,
      mapping,
      preference,
      resolved_preference: resolvedPreference,
      confidence: review.confidence ?? null,
      notes: review.notes || "",
    });
  }
  for (const bucket of [summary, ...Object.values(perMode)]) {
    for (const version of ["baseline", "candidate"]) {
      for (const dimension of dimensions) {
        const values = bucket[version].scores[dimension];
        bucket[version].scores[dimension] = values.length
          ? Number((values.reduce((sum, value) => sum + value, 0) / values.length).toFixed(3))
          : null;
      }
    }
  }
  const reviewedByCase = rows.reduce((groups, row) => {
    groups[row.case_id] ||= [];
    groups[row.case_id].push(row);
    return groups;
  }, {});
  const multiReviewCases = Object.values(reviewedByCase).filter((items) => items.length > 1);
  const exactAgreementCases = multiReviewCases.filter(
    (items) => new Set(items.map((item) => item.resolved_preference)).size === 1,
  );
  const reviewerAgreement = {
    cases_with_multiple_reviews: multiReviewCases.length,
    exact_preference_agreement_rate: multiReviewCases.length
      ? Number((exactAgreementCases.length / multiReviewCases.length).toFixed(3))
      : null,
  };
  writeJson(options.out, {
    schema_version: 1,
    suite_version: packet.suite_version,
    review_count: rows.length,
    summary,
    per_mode: perMode,
    reviewer_agreement: reviewerAgreement,
    rows,
    caution: "Aggregate scores do not replace per-mode hard-gate and disagreement review.",
  });
  console.log(`Scored ${rows.length} reviews. Results written to ${options.out}.`);
  process.exit(0);
}

fail("Usage: benchmark.mjs validate | prepare --baseline … --candidate … --out … --key … --seed … | score --packet … --key … --reviews … --out …");
