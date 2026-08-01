#!/usr/bin/env node
import {
  existsSync,
  readFileSync,
  readdirSync,
  statSync,
} from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const skillDir = join(root, "skills", "urdu-voice-director");
const referencesDir = join(skillDir, "references");
const samplesDir = join(root, "samples");
const failures = [];
let checks = 0;

const check = (condition, message) => {
  checks += 1;
  if (!condition) failures.push(message);
};

const read = (path) => readFileSync(path, "utf8");
const lines = (text) => text.replace(/\n$/, "").split("\n").length;

const walk = (dir) =>
  readdirSync(dir)
    .flatMap((name) => {
      const path = join(dir, name);
      return statSync(path).isDirectory() ? walk(path) : [path];
    })
    .sort();

const expectedReferences = [
  "conversational-prosody.md",
  "evaluation.md",
  "hesitation-and-pauses.md",
  "literary-dialogue.md",
  "poetry-and-recitation.md",
  "pronunciation.md",
  "provider-capabilities.md",
  "relationships-and-register.md",
  "spoken-urdu.md",
];

const actualReferences = readdirSync(referencesDir)
  .filter((name) => name.endsWith(".md"))
  .sort();
check(
  JSON.stringify(actualReferences) === JSON.stringify(expectedReferences),
  `references/ must contain exactly the nine routed files; found: ${actualReferences.join(", ")}`,
);

const skillPath = join(skillDir, "SKILL.md");
const skill = read(skillPath);
check(skill.startsWith("---\nname: urdu-voice-director\n"), "SKILL.md frontmatter name is invalid");
check(/^description:\s+\S.+$/m.test(skill), "SKILL.md needs a non-empty description");
check((skill.match(/^---$/gm) || []).length >= 2, "SKILL.md frontmatter is not closed");
check(lines(skill) <= 110, `SKILL.md is ${lines(skill)} lines; lean contract limit is 110`);
const skillDescription = skill.match(/^description:\s+(.+)$/m)?.[1] ?? "";
for (const trigger of [
  "children",
  "family",
  "education",
  "accessibility",
  "religious",
  "moral",
  "code-switch",
]) {
  check(
    skillDescription.toLowerCase().includes(trigger),
    `SKILL.md description is missing the ${trigger} trigger`,
  );
}
for (const phrase of [
  "Preserve the original meaning",
  "Preserve relationships, age, register, titles, religious wording, and code-switching",
  "Do not invent facts, motives, memories, or emotions",
  "Do not rewrite a line merely to show activity",
  "Keep clean spoken text separate",
  "Check the exact provider, model, surface, locale, and voice",
]) {
  check(skill.includes(phrase), `SKILL.md is missing contract phrase: ${phrase}`);
}
for (const mode of [
  "Everyday conversation",
  "Fictional dialogue",
  "Drama or dubbing",
  "Audiobook narration",
  "Documentary or explainer",
  "Animation or game character",
  "News reading",
  "Public speech",
  "Religious or devotional speech",
  "Poetry recitation",
  "Mushaira performance",
]) {
  check(skill.includes(mode), `SKILL.md does not route performance mode: ${mode}`);
}

for (const file of expectedReferences) {
  const text = read(join(referencesDir, file));
  check(/^# /m.test(text), `${file} needs a title`);
  check(/^## Sources|^## First-party sources/m.test(text), `${file} needs a source section`);
  check(/https:\/\/|http:\/\//.test(text), `${file} needs at least one source URL`);
}

const pronunciationReference = read(join(referencesDir, "pronunciation.md"));
const providerReference = read(join(referencesDir, "provider-capabilities.md"));
const performanceReference = read(join(referencesDir, "literary-dialogue.md"));
for (const phrase of [
  "Ambiguity-first diacritics",
  "ambiguity-marked candidate copy",
  "canonical baseline",
  "adopting every mark in production",
  "Protect consonant identity",
  "`ڑ` as `ر`",
  "`ٹ` as `ت`",
]) {
  check(pronunciationReference.includes(phrase), `pronunciation.md is missing: ${phrase}`);
}
for (const phrase of [
  "inline `/IPA/`",
  "pronunciation_dictionary_locators",
  "80–90% consistency",
  "`language_code`",
  "regional accent/locale",
  "`voice_settings`",
  "seed",
  "text-normalization",
]) {
  check(providerReference.includes(phrase), `provider-capabilities.md is missing: ${phrase}`);
}
for (const phrase of [
  "Restrained",
  "Grounded",
  "Heightened",
  "Naturalistic",
  "Stylized",
  "Stylization is not an intensity level",
  "performance hypothesis",
]) {
  check(
    performanceReference.toLowerCase().includes(phrase.toLowerCase()),
    `literary-dialogue.md is missing performance guidance: ${phrase}`,
  );
}

const markdownFiles = [
  ...walk(skillDir).filter((path) => path.endsWith(".md")),
  join(root, "README.md"),
  ...walk(join(root, "docs")).filter((path) => path.endsWith(".md")),
  ...walk(samplesDir).filter((path) => path.endsWith(".md")),
];
const linkPattern = /\[[^\]]+\]\(([^)]+)\)/g;
for (const file of markdownFiles) {
  const text = read(file);
  for (const match of text.matchAll(linkPattern)) {
    const target = match[1].trim().replace(/^<|>$/g, "").split("#")[0];
    if (!target || /^(?:https?:|mailto:)/.test(target)) continue;
    const decoded = decodeURIComponent(target);
    const destination = resolve(dirname(file), decoded);
    check(
      existsSync(destination),
      `${relative(root, file)} has a broken local link: ${match[1]}`,
    );
  }
}

const sectionAfter = (md, heading) => {
  const sectionLines = md.split(/\r?\n/);
  const start = sectionLines.findIndex((line) => line.trim() === heading);
  if (start === -1) return null;
  const next = sectionLines.findIndex(
    (line, index) => index > start && /^##\s+/.test(line),
  );
  return sectionLines.slice(start + 1, next === -1 ? undefined : next).join("\n");
};

const textBlockInSection = (md, heading) => {
  const section = sectionAfter(md, heading);
  if (section === null) return null;
  const match = section.match(/```text[ \t]*\n([\s\S]*?)```/);
  return match?.[1]?.trim() ?? null;
};

const parseLabeledTurns = (block, file, layer) =>
  block.split("\n").filter(Boolean).map((line) => {
    const match = line.trim().match(/^(\S{1,24}):\s+(.+)$/);
    check(Boolean(match), `${file}: malformed ${layer} turn: ${line}`);
    return match ? { speaker: match[1], text: match[2] } : { speaker: "", text: "" };
  });

const parseAdapter = (block, file) => {
  const turns = [];
  let speaker = null;
  for (const raw of block.split("\n")) {
    const line = raw.trim();
    if (!line) continue;
    const voice = line.match(/^Voice:\s*(.+)$/i);
    if (voice) {
      check(speaker === null, `${file}: consecutive Voice labels`);
      speaker = voice[1].trim();
      continue;
    }
    check(Boolean(speaker), `${file}: adapter text appears before Voice label`);
    if (speaker) turns.push({ speaker, text: line });
    speaker = null;
  }
  check(speaker === null, `${file}: trailing Voice label has no text`);
  return turns;
};

const stripProviderTags = (text) =>
  text.replace(/\[[^\]\n]+\]\s*/g, "").replace(/\s+/g, " ").trim();

const escapeRegex = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const parseSampleVoices = (preamble, file) => {
  const match = preamble.match(/^Sample voices:\s*(.+)$/m);
  check(Boolean(match), `${file}: missing Sample voices mapping`);
  if (!match) return [];
  return match[1].split(",").flatMap((entry) => {
    const parts = entry.split("=").map((part) => part.trim());
    const valid = parts.length === 2 && parts.every(Boolean);
    check(valid, `${file}: malformed Sample voices entry: ${entry.trim()}`);
    return valid ? [{ speaker: parts[0], voice: parts[1] }] : [];
  });
};

const sampleFiles = readdirSync(samplesDir)
  .filter((name) => name.endsWith(".md") && name !== "README.md")
  .sort();
let midUtteranceTagCount = 0;
const midUtteranceTagFiles = new Set();
check(sampleFiles.includes("hero-line.md"), "samples/ must include hero-line.md");
check(sampleFiles.length >= 7, "samples/ must retain all seven documented scenes");
for (const file of sampleFiles) {
  const md = read(join(samplesDir, file));
  const firstSection = md.search(/^##\s+/m);
  const preamble = md.slice(0, firstSection === -1 ? undefined : firstSection);
  const sourceBlock = textBlockInSection(md, "## Source");
  const cleanBlock = textBlockInSection(md, "## A. Clean spoken Urdu");
  const adapterSection = sectionAfter(md, "## D. Eleven v3 adapter");
  const adapterBlock = textBlockInSection(md, "## D. Eleven v3 adapter");
  check(Boolean(sourceBlock), `${file}: missing Source text block`);
  check(Boolean(cleanBlock), `${file}: missing clean artifact A`);
  check(Boolean(adapterBlock), `${file}: missing Eleven v3 adapter D`);
  check(/^Generated with skill version:\s*\S+/m.test(md), `${file}: missing skill-version provenance`);
  check(
    /^References loaded:\s*\S.+$/m.test(preamble),
    `${file}: missing top-level References loaded provenance`,
  );
  const sampleVoices = parseSampleVoices(preamble, file);
  const adapterMetadata = (adapterSection ?? "").split("```", 1)[0];
  const normalizedMetadata = adapterMetadata.replace(/`/g, "");
  check(
    /^Provider:\s*ElevenLabs\s*$/mi.test(normalizedMetadata),
    `${file}: Eleven v3 metadata must record Provider: ElevenLabs`,
  );
  check(
    /^Model ID:\s*eleven_v3\s*$/mi.test(normalizedMetadata),
    `${file}: Eleven v3 metadata must record model ID eleven_v3`,
  );
  check(
    normalizedMetadata.includes("POST /v1/text-to-speech/:voice_id"),
    `${file}: Eleven v3 metadata must record POST /v1/text-to-speech/:voice_id`,
  );
  check(
    normalizedMetadata.includes("output_format=mp3_44100_128"),
    `${file}: Eleven v3 metadata must record output_format=mp3_44100_128`,
  );
  const requestFields = normalizedMetadata.match(
    /^Request fields\s*\/\s*inline controls:\s*(.+)$/mi,
  )?.[1];
  check(
    Boolean(requestFields && /\btext\b/.test(requestFields) && /\bmodel_id\b/.test(requestFields)),
    `${file}: Eleven v3 metadata must record text and model_id request body fields`,
  );
  check(
    /\bno\s+language_code(?:\s+field)?\s+was\s+sent\b/i.test(normalizedMetadata)
      || /\bdid\s+not\s+send\s+language_code\b/i.test(normalizedMetadata),
    `${file}: Eleven v3 metadata must state that no language_code was sent`,
  );
  for (const voice of sampleVoices) {
    const recordedId = new RegExp(
      `${escapeRegex(voice.voice)}\\s*\\(\\s*[A-Za-z0-9]{20}\\s*\\)`,
    );
    check(
      recordedId.test(normalizedMetadata),
      `${file}: Eleven v3 metadata needs a 20-character ID for sample voice ${voice.voice}`,
    );
  }
  if (file === "emergency.md") {
    check(
      !/\bsiblings?\b/i.test(md),
      "emergency.md: must not assert a sibling relationship or register",
    );
  }
  if (!sourceBlock || !cleanBlock || !adapterBlock) continue;
  check(!/[\[\]<>]/.test(cleanBlock), `${file}: clean artifact contains direction/markup delimiters`);
  const source = parseLabeledTurns(sourceBlock, file, "Source");
  const clean = parseLabeledTurns(cleanBlock, file, "clean");
  const adapter = parseAdapter(adapterBlock, file);
  check(source.length === clean.length, `${file}: Source/A turn counts differ`);
  for (let i = 0; i < Math.min(source.length, clean.length); i += 1) {
    check(source[i].speaker === clean[i].speaker, `${file}: Source/A speaker differs at turn ${i + 1}`);
    check(source[i].text === clean[i].text, `${file}: A changes Source words at turn ${i + 1}`);
  }
  if (file === "kafan.md") {
    check(source.length === 4, "kafan.md: Source must contain exactly four turns");
    for (const phrase of [
      "دیکھ کر کیا کروں",
      "بے درد",
      "تو مجھ سے تو",
      "اسی کے ساتھ ہی",
    ]) {
      check(sourceBlock.includes(phrase), `kafan.md: Source must retain ${phrase}`);
    }
    check(
      !sourceBlock.includes("جا کر دیکھ تو، کیا حالت ہے اس کی"),
      "kafan.md: Source must exclude the later spliced جا کر دیکھ تو، کیا حالت ہے اس کی turn",
    );
  }
  check(clean.length === adapter.length, `${file}: A/D turn counts differ`);
  for (let i = 0; i < Math.min(clean.length, adapter.length); i += 1) {
    check(clean[i].speaker === adapter[i].speaker, `${file}: A/D speaker differs at turn ${i + 1}`);
    check(
      clean[i].text === stripProviderTags(adapter[i].text),
      `${file}: D changes canonical words at turn ${i + 1}`,
    );
    for (const tag of adapter[i].text.matchAll(/\[[^\]\n]+\]/g)) {
      if (tag.index > 0 && adapter[i].text.slice(0, tag.index).trim()) {
        midUtteranceTagCount += 1;
        midUtteranceTagFiles.add(file);
      }
    }
  }
}
check(
  midUtteranceTagCount >= 7,
  `sample suite needs substantive mid-utterance Eleven v3 coverage; found ${midUtteranceTagCount} tags`,
);
for (const file of ["hero-line.md", "poetry.md"]) {
  check(midUtteranceTagFiles.has(file), `${file}: needs at least one mid-utterance provider tag`);
}

const websiteData = read(join(root, "src", "data", "content.ts"));
check(
  !/\bsiblings?\b|\bbrother\s+and\s+sister\b/i.test(websiteData),
  "src/data/content.ts: emergency must not assert a sibling relationship",
);
check(
  !/\bforced\s+exit\b|\btwo\s+partners\b/i.test(websiteData),
  "src/data/content.ts: betrayal must not assert partners or a forced exit",
);
for (const phrase of [
  "مجھے وہاں ڈر لگتا ہے",
  "جا کر دیکھ تو، کیا حالت ہے اس کی",
]) {
  check(
    !websiteData.includes(phrase),
    `src/data/content.ts: Kafan must exclude the removed splice phrase ${phrase}`,
  );
}

const packageJson = JSON.parse(read(join(root, "package.json")));
const packageLock = JSON.parse(read(join(root, "package-lock.json")));
const version = read(join(skillDir, "VERSION")).trim();
check(/^\d+\.\d+\.\d+$/.test(version), `VERSION is not SemVer: ${version}`);
check(packageJson.version === version, "package.json and skill VERSION differ");
check(packageLock.version === version, "package-lock.json and skill VERSION differ");
check(packageLock.packages?.[""]?.version === version, "package-lock root package and skill VERSION differ");
const readme = read(join(root, "README.md"));
const app = read(join(root, "src", "App.tsx"));
const assessment = read(join(root, "docs", "research-assessment.md"));
const resultsManifest = read(join(skillDir, "evals", "results-manifest.md"));
check(readme.includes(`Current release: **${version}`), "README release differs from VERSION");
const changelog = read(join(skillDir, "CHANGELOG.md"));
check(changelog.includes("## [Unreleased]"), "CHANGELOG must retain an Unreleased heading");
check(
  new RegExp(`^## \\[${version.replace(/\./g, "\\.")}\\] - \\d{4}-\\d{2}-\\d{2}$`, "m").test(changelog),
  "CHANGELOG lacks the dated current VERSION heading",
);
check(app.includes(`v${version} · Structurally validated beta`), "website footer release differs from VERSION");
check(app.includes(`<dt>${lines(skill)}</dt>`), "website core-line count differs from SKILL.md");
check(app.includes("<dt>11</dt>"), "website must report 11 performance forms");
check(app.includes("<dt>26</dt>"), "website must report 26 executable benchmark cases");
const releaseSeries = version.split(".").slice(0, 2).join(".");
check(
  assessment.startsWith(`# Urdu Voice Director ${releaseSeries} release assessment`),
  "research assessment title differs from the current release series",
);
check(resultsManifest.includes(`| ${version} |`), "results manifest lacks a current release-status row");
check(resultsManifest.includes(`## Release ${version}`), "results manifest lacks a current release record");

const staticSuites = [
  ["text-eval-cases.md", "T", 57],
  ["provider-contract-cases.md", "P", 39],
  ["regression-suite.md", "R", 73],
];
for (const [file, prefix, expected] of staticSuites) {
  const suite = read(join(skillDir, "evals", file));
  const ids = [...suite.matchAll(new RegExp(`^### UVD-${prefix}(\\d+)\\b`, "gm"))]
    .map((match) => Number(match[1]));
  check(ids.length === expected, `${file} must contain ${expected} cases; found ${ids.length}`);
  check(Math.max(...ids) === expected, `${file} must end at UVD-${prefix}${expected}`);
}

const benchmarkPath = join(skillDir, "evals", "benchmark-cases.json");
check(existsSync(benchmarkPath), "evals/benchmark-cases.json is missing");
if (existsSync(benchmarkPath)) {
  const benchmark = JSON.parse(read(benchmarkPath));
  const requiredModes = [
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
  ];
  const requiredRanges = ["restrained", "grounded", "heightened"];
  const requiredTreatments = ["naturalistic", "stylized"];
  check(benchmark.schema_version === 2, "benchmark schema_version must be 2");
  check(benchmark.suite_version === version, "benchmark suite_version differs from VERSION");
  check(Array.isArray(benchmark.cases), "benchmark cases must be an array");
  check(benchmark.cases?.length === 26, `benchmark must contain 26 cases; found ${benchmark.cases?.length ?? 0}`);
  const ids = new Set();
  for (const item of benchmark.cases || []) {
    check(typeof item.id === "string" && item.id.length > 0, "benchmark case needs id");
    check(!ids.has(item.id), `duplicate benchmark id: ${item.id}`);
    ids.add(item.id);
    check(requiredModes.includes(item.mode), `${item.id}: unknown benchmark mode ${item.mode}`);
    check(requiredRanges.includes(item.delivery_range), `${item.id}: unknown delivery range ${item.delivery_range}`);
    check(requiredTreatments.includes(item.treatment), `${item.id}: unknown treatment ${item.treatment}`);
    check(typeof item.source === "string" && item.source.length > 0, `${item.id}: source is empty`);
    check(!item.source?.includes("\\n"), `${item.id}: source contains a literal \\n sequence`);
    check(Array.isArray(item.protected) && item.protected.length > 0, `${item.id}: protected list is empty`);
    check(Array.isArray(item.review) && item.review.length > 0, `${item.id}: review list is empty`);
    check(Array.isArray(item.references) && item.references.length > 0, `${item.id}: references list is empty`);
    for (const reference of item.references || []) {
      check(actualReferences.includes(reference), `${item.id}: unknown routed reference ${reference}`);
    }
    check(
      Boolean(item.pair_id) === Boolean(item.comparison_axis),
      `${item.id}: pair_id and comparison_axis must appear together`,
    );
  }
  for (const mode of requiredModes) {
    check(
      (benchmark.cases || []).filter((item) => item.mode === mode).length >= 2,
      `benchmark needs at least two cases for ${mode}`,
    );
  }
  for (const range of requiredRanges) {
    const cases = (benchmark.cases || []).filter((item) => item.delivery_range === range);
    check(
      cases.length >= 2 && new Set(cases.map((item) => item.mode)).size >= 2,
      `benchmark needs ${range} in at least two cases and two forms`,
    );
  }
  for (const treatment of requiredTreatments) {
    const cases = (benchmark.cases || []).filter((item) => item.treatment === treatment);
    check(
      cases.length >= 2 && new Set(cases.map((item) => item.mode)).size >= 2,
      `benchmark needs ${treatment} in at least two cases and two forms`,
    );
  }
  const pairs = (benchmark.cases || []).filter((item) => item.pair_id).reduce((groups, item) => {
    groups[item.pair_id] ||= [];
    groups[item.pair_id].push(item);
    return groups;
  }, {});
  for (const [pairId, pair] of Object.entries(pairs)) {
    check(pair.length === 2, `${pairId}: controlled pair must contain exactly two cases`);
    if (pair.length !== 2) continue;
    check(pair[0].source === pair[1].source, `${pairId}: controlled pair source differs`);
    check(pair[0].mode === pair[1].mode, `${pairId}: controlled pair form differs`);
    check(pair[0].comparison_axis === pair[1].comparison_axis, `${pairId}: comparison axis differs`);
    if (pair[0].comparison_axis === "delivery_range") {
      check(pair[0].treatment === pair[1].treatment, `${pairId}: treatment must stay fixed`);
      check(pair[0].delivery_range !== pair[1].delivery_range, `${pairId}: range must vary`);
    } else if (pair[0].comparison_axis === "treatment") {
      check(pair[0].delivery_range === pair[1].delivery_range, `${pairId}: range must stay fixed`);
      check(pair[0].treatment !== pair[1].treatment, `${pairId}: treatment must vary`);
    }
  }
  for (const axis of ["delivery_range", "treatment"]) {
    check(
      Object.values(pairs).some((pair) => pair[0]?.comparison_axis === axis),
      `benchmark needs a controlled ${axis} pair`,
    );
  }
}

if (failures.length) {
  console.error(`Skill validation failed (${failures.length}/${checks} checks):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Skill validation passed: ${checks} checks across ${sampleFiles.length} samples and ${expectedReferences.length} references.`);
