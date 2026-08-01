#!/usr/bin/env node
import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const casesPath = join(root, "skills", "urdu-voice-director", "evals", "benchmark-cases.json");
const casesText = readFileSync(casesPath, "utf8");
const suiteHash = createHash("sha256").update(casesText).digest("hex");
const packageVersion = JSON.parse(readFileSync(join(root, "package.json"), "utf8")).version;
const dimensions = [
  "meaning_fidelity",
  "social_fidelity",
  "spoken_naturalness",
  "imaginative_fidelity",
  "performance_usefulness",
  "oral_transfer",
  "pronunciation_safety",
  "consonant_risk_handling",
  "performance_direction_fit",
  "output_separation",
  "provider_validity",
  "restraint",
];

const fail = (message) => {
  console.error(message);
  process.exit(1);
};
const readJson = (path) => JSON.parse(readFileSync(resolve(path), "utf8"));
const hashJson = (value) => createHash("sha256").update(JSON.stringify(value)).digest("hex");
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
    "drama-dubbing",
    "audiobook-narration",
    "documentary-explainer",
    "animation-game-character",
    "news-reading",
    "public-speech",
    "religious-devotional",
    "poetry-recitation",
    "mushaira-performance",
  ]);
  const requiredRanges = new Set(["restrained", "grounded", "heightened"]);
  const requiredTreatments = new Set(["naturalistic", "stylized"]);
  const ids = new Set();
  if (data.schema_version !== 2) errors.push("schema_version must be 2");
  if (data.suite_version !== packageVersion) {
    errors.push(`suite_version must match package version ${packageVersion}`);
  }
  if (!Array.isArray(data.cases)) return ["cases must be an array"];
  for (const item of data.cases) {
    if (!item.id || ids.has(item.id)) errors.push(`invalid/duplicate id: ${item.id}`);
    ids.add(item.id);
    if (!requiredModes.has(item.mode)) errors.push(`${item.id}: invalid mode`);
    if (!requiredRanges.has(item.delivery_range)) {
      errors.push(`${item.id}: invalid delivery_range`);
    }
    if (!requiredTreatments.has(item.treatment)) {
      errors.push(`${item.id}: invalid treatment`);
    }
    for (const field of ["task", "context", "source"]) {
      if (typeof item[field] !== "string" || !item[field].trim()) errors.push(`${item.id}: ${field} is empty`);
    }
    for (const field of ["protected", "review", "references"]) {
      if (!Array.isArray(item[field]) || !item[field].length) errors.push(`${item.id}: ${field} is empty`);
    }
    if (item.source?.includes("\\n")) errors.push(`${item.id}: source contains a literal \\n sequence`);
    if ((item.pair_id && !item.comparison_axis) || (!item.pair_id && item.comparison_axis)) {
      errors.push(`${item.id}: pair_id and comparison_axis must appear together`);
    }
    if (item.comparison_axis && !["delivery_range", "treatment"].includes(item.comparison_axis)) {
      errors.push(`${item.id}: invalid comparison_axis`);
    }
  }
  for (const mode of requiredModes) {
    if (data.cases.filter((item) => item.mode === mode).length < 2) {
      errors.push(`need at least two ${mode} cases`);
    }
  }
  for (const range of requiredRanges) {
    const cases = data.cases.filter((item) => item.delivery_range === range);
    if (cases.length < 2 || new Set(cases.map((item) => item.mode)).size < 2) {
      errors.push(`need ${range} range in at least two cases and two forms`);
    }
  }
  for (const treatment of requiredTreatments) {
    const cases = data.cases.filter((item) => item.treatment === treatment);
    if (cases.length < 2 || new Set(cases.map((item) => item.mode)).size < 2) {
      errors.push(`need ${treatment} treatment in at least two cases and two forms`);
    }
  }
  const pairGroups = data.cases.filter((item) => item.pair_id).reduce((groups, item) => {
    groups[item.pair_id] ||= [];
    groups[item.pair_id].push(item);
    return groups;
  }, {});
  for (const [pairId, items] of Object.entries(pairGroups)) {
    if (items.length !== 2) {
      errors.push(`${pairId}: comparison pair must contain exactly two cases`);
      continue;
    }
    if (items[0].mode !== items[1].mode || items[0].source !== items[1].source) {
      errors.push(`${pairId}: comparison pair must keep form and source identical`);
    }
    if (items[0].comparison_axis !== items[1].comparison_axis) {
      errors.push(`${pairId}: comparison_axis differs inside pair`);
      continue;
    }
    if (items[0].comparison_axis === "delivery_range") {
      if (items[0].treatment !== items[1].treatment || items[0].delivery_range === items[1].delivery_range) {
        errors.push(`${pairId}: range pair must hold treatment constant and vary range`);
      }
    } else if (items[0].delivery_range !== items[1].delivery_range || items[0].treatment === items[1].treatment) {
      errors.push(`${pairId}: treatment pair must hold range constant and vary treatment`);
    }
  }
  for (const axis of ["delivery_range", "treatment"]) {
    if (!Object.values(pairGroups).some((items) => items[0]?.comparison_axis === axis)) {
      errors.push(`need at least one controlled ${axis} comparison pair`);
    }
  }
  return errors;
};

const validateRun = (run, label) => {
  if (!run || typeof run !== "object" || Array.isArray(run)) fail(`${label} must be an object`);
  for (const field of [
    "skill_version",
    "commit",
    "model",
    "surface",
    "prompt_id",
    "generation_settings",
    "date",
    "operator",
  ]) {
    const value = run[field];
    if (value === undefined || value === null || (typeof value === "string" && !value.trim())) {
      fail(`${label}.${field} is required`);
    }
  }
  if (typeof run.generation_settings !== "object" || Array.isArray(run.generation_settings)) {
    fail(`${label}.generation_settings must be an object`);
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(run.date)) {
    fail(`${label}.date must be YYYY-MM-DD`);
  }
};

if (command === "validate") {
  const data = readJson(casesPath);
  const errors = validateCases(data);
  if (errors.length) fail(`Benchmark validation failed:\n- ${errors.join("\n- ")}`);
  console.log(`Benchmark validation passed: ${data.cases.length} cases across 11 forms, 3 delivery ranges, and 2 treatments.`);
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
  validateRun(baseline.run, "baseline.run");
  validateRun(candidate.run, "candidate.run");
  const packet = {
    schema_version: 2,
    suite_version: suite.suite_version,
    suite_hash: suiteHash,
    blinded: true,
    dimensions,
    cases: [],
  };
  const runProvenanceHash = hashJson({
    baseline_run: baseline.run,
    candidate_run: candidate.run,
  });
  packet.run_provenance_hash = runProvenanceHash;
  const key = {
    schema_version: 2,
    suite_version: suite.suite_version,
    suite_hash: suiteHash,
    seed: options.seed,
    run_provenance_hash: runProvenanceHash,
    baseline_run: baseline.run,
    candidate_run: candidate.run,
    mapping: {},
  };
  for (const item of suite.cases) {
    const baselineOutput = baseline.outputs?.[item.id];
    const candidateOutput = candidate.outputs?.[item.id];
    if (typeof baselineOutput !== "string" || !baselineOutput.trim()) fail(`baseline output missing: ${item.id}`);
    if (typeof candidateOutput !== "string" || !candidateOutput.trim()) fail(`candidate output missing: ${item.id}`);
    const bit = createHash("sha256").update(`${options.seed}:${item.id}`).digest()[0] & 1;
    const a = bit ? candidateOutput : baselineOutput;
    const b = bit ? baselineOutput : candidateOutput;
    key.mapping[item.id] = bit
      ? { A: "candidate", B: "baseline" }
      : { A: "baseline", B: "candidate" };
    packet.cases.push({
      id: item.id,
      mode: item.mode,
      delivery_range: item.delivery_range,
      treatment: item.treatment,
      pair_id: item.pair_id || null,
      comparison_axis: item.comparison_axis || null,
      task: item.task,
      context: item.context,
      source: item.source,
      protected: item.protected,
      review: item.review,
      output_A: a,
      output_B: b,
    });
  }
  const packetHash = hashJson(packet);
  packet.packet_hash = packetHash;
  key.packet_hash = packetHash;
  writeJson(options.out, packet);
  writeJson(options.key, key);
  console.log(`Prepared ${packet.cases.length} blinded cases. Keep ${options.key} private from reviewers.`);
  process.exit(0);
}

if (command === "score") {
  for (const required of ["packet", "key", "reviews", "out"]) {
    if (!options[required]) fail(`score requires --${required}`);
  }
  if (options["allow-partial"] && options["allow-partial"] !== "true") {
    fail("--allow-partial accepts only true");
  }
  const allowPartial = options["allow-partial"] === "true";
  const packet = readJson(options.packet);
  const key = readJson(options.key);
  const reviewFile = readJson(options.reviews);
  for (const [label, value] of [["packet", packet], ["key", key], ["reviews", reviewFile]]) {
    if (value.schema_version !== 2) fail(`${label}.schema_version must be 2`);
    if (value.suite_version !== packet.suite_version) fail(`${label}.suite_version mismatch`);
    if (value.suite_hash !== packet.suite_hash) fail(`${label}.suite_hash mismatch`);
  }
  if (packet.suite_version !== packageVersion || packet.suite_hash !== suiteHash) {
    fail("packet does not match the installed benchmark suite");
  }
  if (packet.blinded !== true || JSON.stringify(packet.dimensions) !== JSON.stringify(dimensions)) {
    fail("packet blindness or dimension contract is invalid");
  }
  if (!/^[0-9a-f]{64}$/.test(packet.packet_hash || "")) fail("packet.packet_hash must be SHA-256");
  const { packet_hash: declaredPacketHash, ...packetBody } = packet;
  if (hashJson(packetBody) !== declaredPacketHash) fail("packet_hash does not match packet contents");
  if (key.packet_hash !== declaredPacketHash || reviewFile.packet_hash !== declaredPacketHash) {
    fail("packet/key/reviews packet_hash mismatch");
  }
  if (!Array.isArray(packet.cases) || !packet.cases.length) fail("packet.cases must be non-empty");
  if (!Array.isArray(reviewFile.reviews) || !reviewFile.reviews.length) fail("reviews must be non-empty");
  const suite = readJson(casesPath);
  const suiteErrors = validateCases(suite);
  if (suiteErrors.length) fail(`Installed benchmark cases invalid:\n- ${suiteErrors.join("\n- ")}`);
  const caseIds = new Set(packet.cases.map((item) => item.id));
  if (caseIds.size !== packet.cases.length) fail("packet contains duplicate case IDs");
  if (packet.cases.length !== suite.cases.length) fail("packet case count differs from installed suite");
  const packetById = new Map(packet.cases.map((item) => [item.id, item]));
  for (const expected of suite.cases) {
    const actual = packetById.get(expected.id);
    if (!actual) fail(`packet missing installed case: ${expected.id}`);
    for (const field of [
      "mode",
      "delivery_range",
      "treatment",
      "task",
      "context",
      "source",
    ]) {
      if (actual[field] !== expected[field]) fail(`${expected.id}: packet ${field} differs from installed suite`);
    }
    for (const field of ["protected", "review"]) {
      if (JSON.stringify(actual[field]) !== JSON.stringify(expected[field])) {
        fail(`${expected.id}: packet ${field} differs from installed suite`);
      }
    }
    if (actual.pair_id !== (expected.pair_id || null)
      || actual.comparison_axis !== (expected.comparison_axis || null)) {
      fail(`${expected.id}: packet controlled-pair metadata differs from installed suite`);
    }
    if (typeof actual.output_A !== "string" || !actual.output_A.trim()
      || typeof actual.output_B !== "string" || !actual.output_B.trim()) {
      fail(`${expected.id}: packet outputs must be non-empty strings`);
    }
  }
  validateRun(key.baseline_run, "key.baseline_run");
  validateRun(key.candidate_run, "key.candidate_run");
  const expectedProvenanceHash = hashJson({
    baseline_run: key.baseline_run,
    candidate_run: key.candidate_run,
  });
  if (packet.run_provenance_hash !== expectedProvenanceHash
    || key.run_provenance_hash !== expectedProvenanceHash) {
    fail("packet/key run provenance mismatch");
  }
  if (typeof key.seed !== "string" || !key.seed) fail("key.seed must be a non-empty string");
  if (!key.mapping || typeof key.mapping !== "object" || Array.isArray(key.mapping)
    || Object.keys(key.mapping).length !== packet.cases.length) {
    fail("key mapping must contain exactly one entry per packet case");
  }
  for (const item of packet.cases) {
    const bit = createHash("sha256").update(`${key.seed}:${item.id}`).digest()[0] & 1;
    const expectedMapping = bit
      ? { A: "candidate", B: "baseline" }
      : { A: "baseline", B: "candidate" };
    if (JSON.stringify(key.mapping[item.id]) !== JSON.stringify(expectedMapping)) {
      fail(`${item.id}: key mapping does not match its seed`);
    }
  }
  const rows = [];
  const seenReviews = new Set();
  const makeBucket = () => {
    const bucket = {
      baseline: { preferences: 0, hard_failures: 0, reviewed_outputs: 0, scores: {}, score_stats: {} },
      candidate: { preferences: 0, hard_failures: 0, reviewed_outputs: 0, scores: {}, score_stats: {} },
      ties: 0,
      both_unacceptable: 0,
      preference_rates: {},
    };
    for (const version of ["baseline", "candidate"]) {
      for (const dimension of dimensions) bucket[version].scores[dimension] = [];
    }
    return bucket;
  };
  const summary = makeBucket();
  const perMode = {};
  const perRange = {};
  const perTreatment = {};
  for (const review of reviewFile.reviews) {
    if (typeof review.reviewer !== "string" || !review.reviewer.trim() || !caseIds.has(review.case_id)) {
      fail(`invalid review identity/case: ${review.case_id}`);
    }
    const reviewIdentity = `${review.reviewer.trim()}\u0000${review.case_id}`;
    if (seenReviews.has(reviewIdentity)) fail(`duplicate reviewer/case row: ${review.case_id}`);
    seenReviews.add(reviewIdentity);
    if (!Number.isInteger(review.confidence) || review.confidence < 1 || review.confidence > 5) {
      fail(`${review.case_id}: confidence must be an integer from 1 to 5`);
    }
    const mapping = key.mapping[review.case_id];
    if (!mapping || new Set([mapping.A, mapping.B]).size !== 2
      || ![mapping.A, mapping.B].every((value) => ["baseline", "candidate"].includes(value))) {
      fail(`key mapping invalid for case: ${review.case_id}`);
    }
    const packetCase = packet.cases.find((item) => item.id === review.case_id);
    const mode = packetCase?.mode;
    const deliveryRange = packetCase?.delivery_range;
    const treatment = packetCase?.treatment;
    if (!mode || !deliveryRange || !treatment) fail(`packet missing case metadata: ${review.case_id}`);
    perMode[mode] ||= makeBucket();
    perRange[deliveryRange] ||= makeBucket();
    perTreatment[treatment] ||= makeBucket();
    const buckets = [summary, perMode[mode], perRange[deliveryRange], perTreatment[treatment]];
    for (const label of ["A", "B"]) {
      const version = mapping[label];
      const hard = review.hard_fail?.[label];
      if (!Array.isArray(hard)) fail(`${review.case_id}: hard_fail.${label} must be an array`);
      if (!hard.every((item) => typeof item === "string" && item.trim())) {
        fail(`${review.case_id}: hard_fail.${label} entries must be non-empty strings`);
      }
      for (const bucket of buckets) {
        bucket[version].reviewed_outputs += 1;
        bucket[version].hard_failures += hard.length > 0 ? 1 : 0;
      }
      const scores = review.scores?.[label];
      if (!scores || typeof scores !== "object" || Array.isArray(scores)) {
        fail(`${review.case_id}: scores.${label} must be an object`);
      }
      for (const unknown of Object.keys(scores).filter((dimension) => !dimensions.includes(dimension))) {
        fail(`${review.case_id}: unknown dimension ${unknown}`);
      }
      for (const dimension of dimensions) {
        if (!Object.hasOwn(scores, dimension)) fail(`${review.case_id}: scores.${label}.${dimension} is required`);
        const value = scores[dimension];
        if (value !== "N/A" && (!Number.isInteger(value) || value < 1 || value > 4)) {
          fail(`${review.case_id}: ${dimension} score must be 1–4 or N/A`);
        }
        if (value === "N/A") {
          const reason = review.score_reasons?.[label]?.[dimension];
          if (typeof reason !== "string" || !reason.trim()) {
            fail(`${review.case_id}: N/A ${label}.${dimension} requires score_reasons evidence`);
          }
        }
        if (value !== "N/A") {
          for (const bucket of buckets) bucket[version].scores[dimension].push(value);
        }
      }
    }
    const preference = review.preference;
    let resolvedPreference;
    for (const bucket of buckets) {
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
      delivery_range: deliveryRange,
      treatment,
      pair_id: packetCase.pair_id || null,
      comparison_axis: packetCase.comparison_axis || null,
      mapping,
      preference,
      resolved_preference: resolvedPreference,
      confidence: review.confidence,
      hard_fail: review.hard_fail,
      scores: review.scores,
      score_reasons: review.score_reasons || {},
      notes: review.notes || "",
    });
  }
  const median = (values) => {
    const sorted = [...values].sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);
    return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
  };
  for (const bucket of [summary, ...Object.values(perMode), ...Object.values(perRange), ...Object.values(perTreatment)]) {
    for (const version of ["baseline", "candidate"]) {
      for (const dimension of dimensions) {
        const values = bucket[version].scores[dimension];
        const mean = values.length
          ? Number((values.reduce((sum, value) => sum + value, 0) / values.length).toFixed(3))
          : null;
        bucket[version].score_stats[dimension] = {
          count: values.length,
          mean,
          median: values.length ? Number(median(values).toFixed(3)) : null,
        };
        bucket[version].scores[dimension] = mean;
      }
      bucket[version].hard_failure_rate = bucket[version].reviewed_outputs
        ? Number((bucket[version].hard_failures / bucket[version].reviewed_outputs).toFixed(3))
        : null;
    }
    const decisions = bucket.baseline.preferences + bucket.candidate.preferences + bucket.ties + bucket.both_unacceptable;
    bucket.preference_rates = {
      baseline: decisions ? Number((bucket.baseline.preferences / decisions).toFixed(3)) : null,
      candidate: decisions ? Number((bucket.candidate.preferences / decisions).toFixed(3)) : null,
      tie: decisions ? Number((bucket.ties / decisions).toFixed(3)) : null,
      both_unacceptable: decisions ? Number((bucket.both_unacceptable / decisions).toFixed(3)) : null,
    };
  }
  const reviewedByCase = rows.reduce((groups, row) => {
    groups[row.case_id] ||= [];
    groups[row.case_id].push(row);
    return groups;
  }, {});
  const reviewedCaseIds = Object.keys(reviewedByCase);
  const incompleteCases = packet.cases.filter((item) => {
    const reviewers = new Set((reviewedByCase[item.id] || []).map((row) => row.reviewer));
    return reviewers.size < 2;
  }).map((item) => item.id);
  if (!allowPartial && incompleteCases.length) {
    fail(`release scoring needs two distinct reviewers for every case; incomplete: ${incompleteCases.join(", ")}`);
  }
  const multiReviewCases = Object.values(reviewedByCase).filter(
    (items) => new Set(items.map((item) => item.reviewer)).size > 1,
  );
  const exactAgreementCases = multiReviewCases.filter(
    (items) => new Set(items.map((item) => item.resolved_preference)).size === 1,
  );
  const reviewerAgreement = {
    cases_with_multiple_reviews: multiReviewCases.length,
    exact_preference_agreement_rate: multiReviewCases.length
      ? Number((exactAgreementCases.length / multiReviewCases.length).toFixed(3))
      : null,
  };
  const regressions = [];
  for (const row of rows) {
    const baselineLabel = row.mapping.A === "baseline" ? "A" : "B";
    const candidateLabel = baselineLabel === "A" ? "B" : "A";
    for (const dimension of dimensions) {
      const baselineScore = row.scores[baselineLabel][dimension];
      const candidateScore = row.scores[candidateLabel][dimension];
      if (Number.isInteger(baselineScore) && Number.isInteger(candidateScore) && candidateScore < baselineScore) {
        regressions.push({
          case_id: row.case_id,
          reviewer: row.reviewer,
          dimension,
          delta: candidateScore - baselineScore,
        });
      }
    }
    const baselineHard = row.hard_fail[baselineLabel];
    const candidateHard = row.hard_fail[candidateLabel];
    if (!baselineHard.length && candidateHard.length) {
      regressions.push({
        case_id: row.case_id,
        reviewer: row.reviewer,
        dimension: "hard_gate",
        delta: null,
        evidence: candidateHard,
      });
    }
  }
  regressions.sort((a, b) => (a.delta ?? -99) - (b.delta ?? -99));
  const controlledPairs = rows.filter((row) => row.pair_id).reduce((groups, row) => {
    groups[row.pair_id] ||= {
      comparison_axis: row.comparison_axis,
      rows: [],
    };
    groups[row.pair_id].rows.push(row);
    return groups;
  }, {});
  writeJson(options.out, {
    schema_version: 2,
    suite_version: packet.suite_version,
    suite_hash: packet.suite_hash,
    review_count: rows.length,
    coverage: {
      expected_cases: packet.cases.length,
      reviewed_cases: reviewedCaseIds.length,
      cases_below_two_distinct_reviewers: incompleteCases,
      release_complete: incompleteCases.length === 0,
      exploratory_partial: allowPartial,
    },
    summary,
    per_mode: perMode,
    per_delivery_range_descriptive: perRange,
    per_treatment_descriptive: perTreatment,
    controlled_pairs: controlledPairs,
    reviewer_agreement: reviewerAgreement,
    worst_regressions: regressions.slice(0, 20),
    rows,
    caution: "Text aggregates for range and treatment are descriptive, not causal or audio evidence; inspect controlled pairs, hard gates, per-case rows, and reviewer disagreement.",
  });
  console.log(`Scored ${rows.length} reviews. Results written to ${options.out}.`);
  process.exit(0);
}

fail("Usage: benchmark.mjs validate | prepare --baseline … --candidate … --out … --key … --seed … | score --packet … --key … --reviews … --out … [--allow-partial true]");
