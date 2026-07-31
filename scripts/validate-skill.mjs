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
  "Audiobook narration",
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

const blockAfter = (md, marker) => {
  const index = md.indexOf(marker);
  if (index === -1) return null;
  const match = md.slice(index).match(/```text\n([\s\S]*?)```/);
  return match?.[1]?.trim() ?? null;
};

const parseClean = (block, file) =>
  block.split("\n").filter(Boolean).map((line) => {
    const match = line.trim().match(/^(\S{1,24}):\s+(.+)$/);
    check(Boolean(match), `${file}: malformed clean turn: ${line}`);
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

const sampleFiles = readdirSync(samplesDir)
  .filter((name) => name.endsWith(".md") && name !== "README.md")
  .sort();
let midUtteranceTagCount = 0;
const midUtteranceTagFiles = new Set();
check(sampleFiles.includes("hero-line.md"), "samples/ must include hero-line.md");
check(sampleFiles.length >= 7, "samples/ must retain all seven documented scenes");
for (const file of sampleFiles) {
  const md = read(join(samplesDir, file));
  const cleanBlock = blockAfter(md, "## A. Clean spoken Urdu");
  const adapterBlock = blockAfter(md, "## D. Eleven v3 adapter");
  check(Boolean(cleanBlock), `${file}: missing clean artifact A`);
  check(Boolean(adapterBlock), `${file}: missing Eleven v3 adapter D`);
  check(/^Generated with skill version:\s*\S+/m.test(md), `${file}: missing skill-version provenance`);
  if (!cleanBlock || !adapterBlock) continue;
  check(!/[\[\]<>]/.test(cleanBlock), `${file}: clean artifact contains direction/markup delimiters`);
  const clean = parseClean(cleanBlock, file);
  const adapter = parseAdapter(adapterBlock, file);
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

const packageJson = JSON.parse(read(join(root, "package.json")));
const version = read(join(skillDir, "VERSION")).trim();
check(packageJson.version === version, "package.json and skill VERSION differ");
check(read(join(root, "README.md")).includes(`Current release: **${version}`), "README release differs from VERSION");
const changelog = read(join(skillDir, "CHANGELOG.md"));
check(
  changelog.includes(`## [${version}]`) || changelog.includes(`## ${version}`),
  "CHANGELOG lacks current VERSION heading",
);

const benchmarkPath = join(skillDir, "evals", "benchmark-cases.json");
check(existsSync(benchmarkPath), "evals/benchmark-cases.json is missing");
if (existsSync(benchmarkPath)) {
  const benchmark = JSON.parse(read(benchmarkPath));
  const requiredModes = [
    "everyday-conversation",
    "fictional-dialogue",
    "audiobook-narration",
    "news-reading",
    "public-speech",
    "religious-devotional",
    "poetry-recitation",
    "mushaira-performance",
  ];
  check(benchmark.schema_version === 1, "benchmark schema_version must be 1");
  check(Array.isArray(benchmark.cases), "benchmark cases must be an array");
  const ids = new Set();
  for (const item of benchmark.cases || []) {
    check(typeof item.id === "string" && item.id.length > 0, "benchmark case needs id");
    check(!ids.has(item.id), `duplicate benchmark id: ${item.id}`);
    ids.add(item.id);
    check(requiredModes.includes(item.mode), `${item.id}: unknown benchmark mode ${item.mode}`);
    check(typeof item.source === "string" && item.source.length > 0, `${item.id}: source is empty`);
    check(Array.isArray(item.protected) && item.protected.length > 0, `${item.id}: protected list is empty`);
    check(Array.isArray(item.review) && item.review.length > 0, `${item.id}: review list is empty`);
  }
  for (const mode of requiredModes) {
    check(
      (benchmark.cases || []).filter((item) => item.mode === mode).length >= 2,
      `benchmark needs at least two cases for ${mode}`,
    );
  }
}

if (failures.length) {
  console.error(`Skill validation failed (${failures.length}/${checks} checks):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Skill validation passed: ${checks} checks across ${sampleFiles.length} samples and ${expectedReferences.length} references.`);
