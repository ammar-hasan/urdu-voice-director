#!/usr/bin/env node
/**
 * Generate before/after Urdu voice samples for the marketing site.
 *
 * Source of truth: samples/<scene>.md — documented runs of the
 * urdu-voice-director skill. This script NEVER contains scene text itself:
 *   -before.mp3 = artifact A (## A. Clean spoken Urdu), sent flat
 *   -after.mp3  = artifact D (## D. Eleven v3 adapter), tags and all
 *
 * Dialogue scenes are synthesized PER TURN: each speaker gets their own
 * ElevenLabs voice from the md's `Sample voices:` mapping, and the turns are
 * stitched in order with ffmpeg. Speaker labels (A) and `Voice:` routing
 * labels (D) are metadata — never sent as spoken text.
 *
 * Key: ELEVENLABS_API_KEY or .elevenlabs-key (gitignored).
 * Voices resolve by library-name prefix (case-insensitive); pin ids with
 * ELEVEN_VOICE_OVERRIDES='Haseeb=id,Reva=id'.
 *
 * Validate source bundles without a provider call:
 *   node scripts/generate-samples.mjs --validate
 * Regenerate only the revised adapters, preserving baselines:
 *   node scripts/generate-samples.mjs --force-after
 * Existing files are otherwise skipped. See samples/README.md.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";
import { tmpdir } from "node:os";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const samplesDir = join(root, "samples");
const outDir = join(root, "public", "audio");
const MODEL = "eleven_v3";
const VALIDATE_ONLY = process.argv.includes("--validate");
const FORCE_AFTER = process.argv.includes("--force-after");

const keyFromFile = () => {
  const p = join(root, ".elevenlabs-key");
  return existsSync(p) ? readFileSync(p, "utf8").trim() : "";
};
const stripProviderTags = (text) =>
  text.replace(/\[[^\]\n]+\]\s*/g, "").replace(/\s+/g, " ").trim();

/** Extract the first ```text block after a `## …` heading containing `marker`. */
const blockAfter = (md, marker) => {
  const idx = md.indexOf(marker);
  if (idx === -1) throw new Error(`heading "${marker}" not found`);
  const m = md.slice(idx).match(/```text\n([\s\S]*?)```/);
  if (!m) throw new Error(`no \`\`\`text block after "${marker}"`);
  return m[1].trim();
};

/** Artifact A → ordered turns. Lines look like `احمد: text`. */
const parseCleanTurns = (block) =>
  block
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .map((line) => {
      const m = line.match(/^(\S{1,24}):\s+(.+)$/);
      if (!m) throw new Error(`clean turn missing speaker label: "${line}"`);
      return { speaker: m[1], text: m[2] };
    });

/** Artifact D → ordered turns. `Voice: name` routing line precedes each turn. */
const parseAdapterTurns = (block) => {
  const turns = [];
  let speaker = null;
  for (const raw of block.split("\n")) {
    const line = raw.trim();
    if (!line) continue;
    const v = line.match(/^Voice:\s*(.+)$/i);
    if (v) {
      speaker = v[1].trim();
      continue;
    }
    if (!speaker) throw new Error(`adapter text before any Voice: label: "${line}"`);
    turns.push({ speaker, text: line });
    speaker = null;
  }
  return turns;
};

/** `Sample voices: احمد=Haseeb, فاطمہ=Reva` → { احمد: "Haseeb", … } */
const parseVoiceMap = (md, file) => {
  const m = md.match(/^Sample voices:\s*(.+)$/m);
  if (!m) throw new Error(`${file}: missing "Sample voices:" mapping`);
  return Object.fromEntries(
    m[1].split(",").map((pair) => {
      const [speaker, voice] = pair.split("=").map((s) => s.trim());
      if (!speaker || !voice) throw new Error(`${file}: bad voice mapping "${pair}"`);
      return [speaker, voice];
    }),
  );
};

const scenes = readdirSync(samplesDir)
  .filter((f) => f.endsWith(".md") && f !== "README.md")
  .sort()
  .map((file) => {
    const md = readFileSync(join(samplesDir, file), "utf8");
    const voiceMap = parseVoiceMap(md, file);
    const clean = parseCleanTurns(blockAfter(md, "## A. Clean spoken Urdu"));
    const adapted = parseAdapterTurns(blockAfter(md, "## D. Eleven v3 adapter"));
    if (clean.map((t) => t.speaker).join() !== adapted.map((t) => t.speaker).join()) {
      throw new Error(`${file}: speaker sequence differs between A and D`);
    }
    if (clean.length !== adapted.length) {
      throw new Error(`${file}: turn count differs between A and D`);
    }
    for (let i = 0; i < clean.length; i += 1) {
      if (clean[i].text !== stripProviderTags(adapted[i].text)) {
        throw new Error(`${file}: adapter changes canonical words at turn ${i + 1}`);
      }
    }
    for (const t of clean) {
      if (!voiceMap[t.speaker]) {
        throw new Error(`${file}: no voice mapped for speaker ${t.speaker}`);
      }
    }
    return { name: file.replace(/\.md$/, ""), voiceMap, clean, adapted };
  });

if (!scenes.length) {
  console.error("No scenes found in samples/.");
  process.exit(1);
}
console.log(`Scenes: ${scenes.map((s) => s.name).join(", ")}`);
if (VALIDATE_ONLY) {
  console.log(`Validated ${scenes.length} sample bundles: A/D speakers, turns, and canonical words match.`);
  process.exit(0);
}

const API_KEY = process.env.ELEVENLABS_API_KEY || keyFromFile();
if (!API_KEY) {
  console.error("No API key found. Put it in .elevenlabs-key or set ELEVENLABS_API_KEY.");
  process.exit(1);
}

const api = (path, init = {}) =>
  fetch(`https://api.elevenlabs.io${path}`, {
    ...init,
    headers: {
      "xi-api-key": API_KEY,
      "Content-Type": "application/json",
      ...(init.headers || {}),
    },
  });

const overrides = Object.fromEntries(
  (process.env.ELEVEN_VOICE_OVERRIDES || "")
    .split(",")
    .filter(Boolean)
    .map((p) => p.split("=").map((s) => s.trim())),
);

const resolveVoices = async () => {
  const wanted = [...new Set(scenes.flatMap((s) => Object.values(s.voiceMap)))];
  const res = await api("/v1/voices");
  if (!res.ok) throw new Error(`voices list failed: ${res.status} ${await res.text()}`);
  const { voices } = await res.json();
  const ids = {};
  const missing = [];
  for (const name of wanted) {
    if (overrides[name]) {
      ids[name] = overrides[name];
      continue;
    }
    const hit =
      voices.find(
        (v) =>
          (v.name || "").split(/[\s-]/)[0].toLowerCase() === name.toLowerCase(),
      ) ||
      voices.find((v) =>
        (v.name || "").toLowerCase().startsWith(name.toLowerCase()),
      );
    if (hit) {
      ids[name] = hit.voice_id;
      console.log(`${name} → ${hit.name} (${hit.voice_id})`);
    } else {
      missing.push(name);
    }
  }
  if (missing.length) {
    console.error(
      `Voices not found in library: ${missing.join(", ")}\n` +
        `Available: ${voices.map((v) => v.name).join(" | ")}\n` +
        `Add them in ElevenLabs → Voices, or pin via ELEVEN_VOICE_OVERRIDES.`,
    );
  }
  return { ids, missing };
};

const synthTurn = async (voiceId, text) => {
  const res = await api(`/v1/text-to-speech/${voiceId}?output_format=mp3_44100_128`, {
    method: "POST",
    body: JSON.stringify({ text, model_id: MODEL }),
  });
  if (!res.ok) throw new Error(`TTS failed: ${res.status} ${await res.text()}`);
  return Buffer.from(await res.arrayBuffer());
};

const stitch = (segments, outFile) => {
  if (segments.length === 1) {
    writeFileSync(outFile, segments[0]);
    return;
  }
  const tmp = join(tmpdir(), `uvd-${Date.now()}`);
  mkdirSync(tmp, { recursive: true });
  try {
    const list = segments.map((buf, i) => {
      const p = join(tmp, `turn-${String(i).padStart(2, "0")}.mp3`);
      writeFileSync(p, buf);
      return `file '${p}'`;
    });
    const listFile = join(tmp, "list.txt");
    writeFileSync(listFile, list.join("\n"));
    execFileSync("ffmpeg", [
      "-y", "-f", "concat", "-safe", "0", "-i", listFile,
      "-c:a", "libmp3lame", "-b:a", "128k", outFile,
    ], { stdio: "pipe" });
  } finally {
    rmSync(tmp, { recursive: true, force: true });
  }
};

mkdirSync(outDir, { recursive: true });
const { ids: voiceIds, missing } = await resolveVoices();
let failures = 0;
for (const scene of scenes) {
  const sceneVoices = Object.values(scene.voiceMap);
  if (sceneVoices.some((v) => missing.includes(v))) {
    console.log(`  SKIP ${scene.name} (unresolved voice)`);
    failures++;
    continue;
  }
  for (const kind of ["before", "after"]) {
    const file = join(outDir, `${scene.name}-${kind}.mp3`);
    if (existsSync(file) && !(FORCE_AFTER && kind === "after")) {
      console.log(`  skip ${file} (exists)`);
      continue;
    }
    const turns = kind === "before" ? scene.clean : scene.adapted;
    const segments = [];
    for (const turn of turns) {
      segments.push(await synthTurn(voiceIds[scene.voiceMap[turn.speaker]], turn.text));
      await new Promise((r) => setTimeout(r, 350));
    }
    stitch(segments, file);
    console.log(`  wrote ${file} (${turns.length} turn${turns.length > 1 ? "s" : ""})`);
  }
}
if (failures) {
  console.error(`${failures} scene(s) skipped due to missing voices.`);
  process.exit(1);
}
console.log("Done.");
