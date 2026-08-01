#!/usr/bin/env node
import assert from "node:assert/strict";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import {
  auditProductionAdapter,
  loadProductionAdapter,
} from "./validate-production.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const fixtures = join(root, "skills", "urdu-voice-director", "evals");
const valid = await loadProductionAdapter(join(fixtures, "production-adapter-valid.json"));
const invalid = await loadProductionAdapter(join(fixtures, "production-adapter-invalid.json"));

const validDiagnostics = auditProductionAdapter(valid);
assert.deepEqual(validDiagnostics, [], `valid fixture produced diagnostics:\n${JSON.stringify(validDiagnostics, null, 2)}`);

const invalidDiagnostics = auditProductionAdapter(invalid);
const codes = new Set(invalidDiagnostics.map((item) => item.code));
for (const code of [
  "references.unrecorded",
  "references.required-missing",
  "runtime.missing-fields",
  "caption.drift",
  "pronunciation.canonical-plus-ipa",
  "pronunciation.ledger-missing",
  "direction.every-turn-tagged",
  "direction.dense-tag",
  "pause.cutoff-ellipsis-mismatch",
  "pause.same-speaker-turn-gap",
  "pause.stacked-boundary",
  "pause.stacked-within-turn",
  "pause.long-global-tail",
  "evidence.asr-as-verdict",
  "evidence.unsourced-identity",
  "evidence.direction-untraced",
  "evidence.religious-attribution-untraced"
]) {
  assert(codes.has(code), `invalid fixture did not trigger ${code}`);
}

assert(invalidDiagnostics.some((item) => item.level === "error"), "invalid fixture needs at least one error");
assert(invalidDiagnostics.some((item) => item.level === "warning"), "invalid fixture needs at least one warning");

console.log(`Production validator passed: clean fixture accepted; invalid fixture triggered ${invalidDiagnostics.length} diagnostics.`);
