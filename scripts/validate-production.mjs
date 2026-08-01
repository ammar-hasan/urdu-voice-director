#!/usr/bin/env node
import { existsSync, readFileSync } from "node:fs";
import { extname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const LEVEL_ORDER = { error: 0, warning: 1 };
const AUDIO_TAG = /\[[^\]\n]+\]/g;
const ARABIC_WORD_THEN_IPA = /[\p{Script=Arabic}\u0600-\u06ff]+\s+\/[^/\n]+\//u;
const ELLIPSIS = /(?:\.{3,}|…)/;
const PAUSE_DIRECTION = /\b(?:pause|beat|hesitat|cut(?:s)?\s+(?:himself|herself|themself|itself)?\s*off|cutoff|trail(?:s|ing)?\s+(?:away|off)|interrupt)/i;
const IDENTITY_DIRECTION = /\b(?:young|old|boy|girl|child|elder|sibling|brother|sister|mother|father|aunt|uncle|grandmother|grandfather)\b/i;
const SUCCESS_CLAIM = /\b(?:fixed|verified|proved|proven|worked|correct(?:ly)?|stable fix)\b/i;
const ASR_TERM = /\b(?:ASR|Whisper|transcript(?:ion)?)\b/i;
const RELIGIOUS_ATTRIBUTION = /(?:فرماتے\s+ہیں|فرمایا|روایت|حدیث|رسول|نبی|امام\s+[\p{Script=Arabic}])/u;

const own = (object, key) => Object.prototype.hasOwnProperty.call(object ?? {}, key);
const array = (value) => (Array.isArray(value) ? value : value == null ? [] : [value]);
const text = (value) => (typeof value === "string" ? value : "");
const withoutTags = (value) => text(value).replace(AUDIO_TAG, "").replace(/\s+/g, " ").trim();
const hasAudioTag = (value) => /\[[^\]\n]+\]/.test(text(value));
const hasInlineIpa = (value) => /\/[^/\n]+\//.test(text(value));
const withoutArabicMarks = (value) =>
  text(value)
    .normalize("NFD")
    .replace(/[\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06ed]/g, "")
    .normalize("NFC");

const firstOwn = (object, keys) => {
  for (const key of keys) {
    if (own(object, key)) return { declared: true, value: object[key] };
  }
  return { declared: false, value: undefined };
};

const normalizeLoadedReferences = (config, noteTexts) => {
  const uvd = config.uvd ?? config.urduVoiceDirector ?? {};
  const direct = array(uvd.referencesLoaded ?? config.referencesLoaded)
    .flatMap((value) => text(value).split(/[;,]/))
    .map((value) => value.trim().replace(/^.*\//, ""))
    .filter(Boolean);
  const fromNotes = noteTexts.flatMap((note) =>
    [...note.matchAll(/^References loaded:\s*(.+)$/gim)].flatMap((match) =>
      match[1]
        .replace(/`/g, "")
        .split(/[;,]/)
        .map((value) => value.trim().replace(/^.*\//, ""))
        .filter(Boolean),
    ),
  );
  return [...new Set([...direct, ...fromNotes])];
};

const normalizeScenes = (config) => {
  if (Array.isArray(config.scenes)) return config.scenes;
  if (Array.isArray(config.segments)) return [{ id: config.id ?? "adapter", segments: config.segments }];
  if (Array.isArray(config.turns)) return [{ id: config.id ?? "adapter", turns: config.turns }];
  if (Array.isArray(config.vo)) return [{ id: config.id ?? "adapter", vo: config.vo }];
  return [];
};

const normalizeTurns = (config) =>
  normalizeScenes(config).flatMap((scene, sceneIndex) => {
    const entries = scene.vo ?? scene.segments ?? scene.turns ?? [];
    return array(entries).map((turn, turnIndex) => {
      const canonical = text(
        turn.text ?? turn.canonical ?? turn.canonicalText ?? turn.utterance,
      );
      const provider = text(
        turn.synthesisText
          ?? turn.providerText
          ?? turn.providerCopy
          ?? turn.payload?.text
          ?? canonical,
      );
      const explicitCaption = firstOwn(turn, ["caption", "captionText", "cleanCaption"]);
      return {
        scene,
        sceneIndex,
        sceneId: text(scene.id) || `scene-${sceneIndex + 1}`,
        turn,
        turnIndex,
        who: text(turn.who ?? turn.speaker ?? turn.voice),
        canonical,
        provider,
        caption: explicitCaption.declared ? text(explicitCaption.value) : canonical,
        hasExplicitCaption: explicitCaption.declared,
        location: `${text(scene.id) || `scene-${sceneIndex + 1}`}:turn-${turnIndex + 1}`,
      };
    });
  });

const runtimeDeclarations = (config, noteTexts) => {
  const uvd = config.uvd ?? config.urduVoiceDirector ?? {};
  const runtime = uvd.runtime ?? config.runtime ?? config.providerMetadata ?? {};
  const notes = noteTexts.join("\n").replace(/`/g, "");
  const voices = Object.values(config.voices ?? {}).filter(
    (voice) => voice && typeof voice === "object",
  );
  const declaredInVoices = (predicate) => voices.length > 0 && voices.every(predicate);
  const voiceOptions = (voice) => voice.providerOptions ?? voice.voiceSettings ?? {};
  return {
    provider: firstOwn(runtime, ["provider", "backend"]).declared
      || declaredInVoices((voice) => own(voice, "backend"))
      || /(?:^|\n)(?:[-*]\s*)?Provider(?: adapter)?(?:\s*\([^\n)]+\))?\s*:/i.test(notes),
    model: firstOwn(runtime, ["model", "modelId", "model_id"]).declared
      || declaredInVoices((voice) => firstOwn(voiceOptions(voice), ["model", "modelId", "model_id"]).declared)
      || /(?:^|\n)(?:[-*]\s*)?Model(?: ID)?\s*:/i.test(notes),
    surface: firstOwn(runtime, ["surface", "apiSurface", "endpoint"]).declared
      || /(?:Product\/API surface|API surface|Surface|Endpoint)\s*:|POST\s+\/v\d+\//i.test(notes),
    locale: firstOwn(runtime, ["locale", "accentTarget", "regionalAccent"]).declared
      || /(?:Locale|accent target|regional accent)\s*:/i.test(notes),
    voice: firstOwn(runtime, ["voice", "voiceId", "voice_id"]).declared
      || declaredInVoices((voice) => firstOwn(voice, ["speaker", "voice", "voiceId", "voice_id"]).declared)
      || /(?:^|\n)(?:[-*]\s*)?Voices?\s*:/i.test(notes),
    languageCode: firstOwn(runtime, ["languageCode", "language_code", "lang"]).declared
      || declaredInVoices((voice) => firstOwn(voice, ["languageCode", "language_code", "lang"]).declared)
      || /(?:language_code|language code)\s*(?:=|:)/i.test(notes),
    voiceSettings: firstOwn(runtime, ["voiceSettings", "voice_settings"]).declared
      || declaredInVoices((voice) => {
        const options = voiceOptions(voice);
        return ["stability", "similarityBoost", "similarity_boost", "style"].some((key) => own(options, key));
      })
      || /(?:voice settings|voice_settings|stability|similarity boost)\s*(?:=|:)/i.test(notes),
    seed: firstOwn(runtime, ["seed"]).declared
      || declaredInVoices((voice) => own(voiceOptions(voice), "seed"))
      || /(?:^|\n)(?:[-*]\s*)?Seed\s*:/i.test(notes),
    textNormalization: firstOwn(runtime, ["textNormalization", "text_normalization", "normalization"]).declared
      || /(?:text normalization|text-normalization|text_normalization)\s*:/i.test(notes),
    pronunciationDictionaries: firstOwn(runtime, [
      "pronunciationDictionaries",
      "pronunciation_dictionary_locators",
      "dictionaryLocators",
    ]).declared || /(?:pronunciation dictionar(?:y|ies)|dictionary locators?)\s*:/i.test(notes),
    outputFormat: firstOwn(runtime, ["outputFormat", "output_format"]).declared
      || /(?:output format|output_format)\s*(?:=|:)/i.test(notes),
  };
};

const hasCompletedListeningEvidence = (config) => {
  const uvd = config.uvd ?? config.urduVoiceDirector ?? {};
  return array(uvd.listeningTests ?? config.listeningTests).some((record) => {
    if (!record || typeof record !== "object") return false;
    const status = text(record.status ?? record.decision ?? record.result).toLowerCase();
    return Boolean(record.reviewer && record.date && status && !/pending|required|not run/.test(status));
  });
};

export const auditProductionAdapter = (config, { noteTexts = [] } = {}) => {
  const diagnostics = [];
  const report = (level, code, message, location = "adapter") => {
    diagnostics.push({ level, code, message, location });
  };
  if (!config || typeof config !== "object" || Array.isArray(config)) {
    report("error", "adapter.invalid-root", "The adapter root must be an object.");
    return diagnostics;
  }

  const uvd = config.uvd ?? config.urduVoiceDirector ?? {};
  const turns = normalizeTurns(config);
  const scenes = normalizeScenes(config);
  const timing = config.timing ?? {};
  const loadedReferences = normalizeLoadedReferences(config, noteTexts);
  const providerTurnCount = turns.filter(
    (turn) => turn.provider !== turn.canonical || hasAudioTag(turn.provider) || hasInlineIpa(turn.provider),
  ).length;
  const hasProviderTarget = providerTurnCount > 0 || Object.keys(config.voices ?? {}).length > 0 || Boolean(uvd.runtime);
  const hasPauseIssue = turns.some((turn) => ELLIPSIS.test(turn.canonical) || PAUSE_DIRECTION.test(turn.provider))
    || Number(timing.gapTurn ?? 0) > 0;
  const hasPronunciationIntervention = turns.some((turn) => {
    if (hasInlineIpa(turn.provider)) return true;
    return withoutArabicMarks(withoutTags(turn.provider)) === withoutArabicMarks(turn.canonical)
      && withoutTags(turn.provider) !== turn.canonical;
  });

  const requiredReferences = [
    ...(hasProviderTarget ? ["provider-capabilities.md"] : []),
    ...(hasPauseIssue ? ["hesitation-and-pauses.md"] : []),
    ...(hasPronunciationIntervention ? ["pronunciation.md"] : []),
  ];
  if (hasProviderTarget && loadedReferences.length === 0) {
    report(
      "error",
      "references.unrecorded",
      "No loaded-reference record was found. Add uvd.referencesLoaded or a `References loaded:` note.",
    );
  }
  for (const reference of requiredReferences) {
    if (!loadedReferences.some((item) => item.endsWith(reference))) {
      report("error", "references.required-missing", `Required reference was not recorded: ${reference}`);
    }
  }

  if (hasProviderTarget) {
    const runtime = runtimeDeclarations(config, noteTexts);
    const missing = Object.entries(runtime)
      .filter(([, declared]) => !declared)
      .map(([field]) => field);
    if (missing.length) {
      report(
        "error",
        "runtime.missing-fields",
        `Record each runtime field as sent, deliberately omitted, or unresolved: ${missing.join(", ")}.`,
      );
    }
  }

  if (turns.length === 0) {
    report("error", "adapter.no-turns", "No scenes/segments/turns containing spoken text were found.");
  }

  let taggedTurns = 0;
  let identityTagCount = 0;
  let directionTagCount = 0;
  for (const turn of turns) {
    if (!turn.canonical) {
      report("error", "canonical.missing", "Turn has no canonical spoken text.", turn.location);
      continue;
    }
    if (turn.hasExplicitCaption && turn.caption !== turn.canonical) {
      report("error", "caption.drift", "Caption differs from canonical spoken text.", turn.location);
    }
    if (hasAudioTag(turn.canonical) || hasInlineIpa(turn.canonical)) {
      report("error", "canonical.provider-leakage", "Canonical text contains provider direction or inline IPA.", turn.location);
    }
    if (hasAudioTag(turn.caption) || hasInlineIpa(turn.caption)) {
      report("error", "caption.provider-leakage", "Caption contains provider direction or inline IPA.", turn.location);
    }
    if (ARABIC_WORD_THEN_IPA.test(turn.provider)) {
      report(
        "error",
        "pronunciation.canonical-plus-ipa",
        "Provider text sends an Arabic-script token followed by inline IPA; replace the token at that locus instead of sending both.",
        turn.location,
      );
    }
    const tags = [...turn.provider.matchAll(AUDIO_TAG)].map((match) => match[0]);
    if (tags.length) taggedTurns += 1;
    directionTagCount += tags.length;
    for (const tag of tags) {
      const clauses = tag.slice(1, -1).split(",").map((part) => part.trim()).filter(Boolean);
      if (clauses.length >= 4) {
        report(
          "warning",
          "direction.dense-tag",
          `Audio tag contains ${clauses.length} comma-separated directions; prefer one concrete audible action.`,
          turn.location,
        );
      }
      if (IDENTITY_DIRECTION.test(tag)) identityTagCount += 1;
    }
    if (ELLIPSIS.test(turn.canonical) && PAUSE_DIRECTION.test(turn.provider)) {
      report(
        "warning",
        "pause.stacked-within-turn",
        "Ellipsis and an explicit pause/cutoff direction act on the same turn; test one mechanism at a time.",
        turn.location,
      );
    }
    if (ELLIPSIS.test(turn.canonical) && /\b(?:cutoff|cut(?:s)?\s+.*off|interrupt)/i.test(turn.provider)) {
      report(
        "warning",
        "pause.cutoff-ellipsis-mismatch",
        "The turn is directed as a cutoff/interruption but uses trailing-away ellipsis.",
        turn.location,
      );
    }
  }

  if (turns.length >= 3 && taggedTurns === turns.length) {
    report(
      "warning",
      "direction.every-turn-tagged",
      `All ${turns.length} turns contain audio tags; ordinary lines should remain untagged.`,
    );
  }

  const gapTurn = Number(timing.gapTurn ?? 0);
  for (const [sceneIndex] of scenes.entries()) {
    const sceneTurns = turns.filter((turn) => turn.sceneIndex === sceneIndex);
    for (let index = 1; index < sceneTurns.length; index += 1) {
      const previous = sceneTurns[index - 1];
      const current = sceneTurns[index];
      if (!previous.who || previous.who !== current.who) continue;
      if (gapTurn > 0) {
        report(
          "warning",
          "pause.same-speaker-turn-gap",
          `Adjacent ${previous.who} fragments receive gapTurn=${gapTurn}; keep a continuous thought in one utterance unless the split is required.`,
          current.sceneId,
        );
      }
      const mechanisms = [
        ELLIPSIS.test(previous.canonical) && "ellipsis",
        PAUSE_DIRECTION.test(previous.provider) && "audio direction",
        gapTurn > 0 && "turn gap",
      ].filter(Boolean);
      if (mechanisms.length >= 2) {
        report(
          "warning",
          "pause.stacked-boundary",
          `Same-speaker boundary stacks ${mechanisms.join(" + ")}; isolate one pause variable before combining controls.`,
          current.sceneId,
        );
      }
    }
  }

  const tail = Number(timing.tail ?? 0);
  if (Number.isFinite(tail) && tail > 1) {
    report(
      "warning",
      "pause.long-global-tail",
      `Every voiced scene receives tail=${tail}s; confirm this padding independently from provider and punctuation pauses.`,
    );
  }

  const pronunciationLedger = array(uvd.pronunciationLedger ?? config.pronunciationLedger);
  const noteHasPronunciationLedger = noteTexts.some(
    (note) => /^##\s+(?:Pronunciation ledger|Ambiguity sweep)/im.test(note),
  );
  if (hasPronunciationIntervention && pronunciationLedger.length === 0 && !noteHasPronunciationLedger) {
    report(
      "error",
      "pronunciation.ledger-missing",
      "Pronunciation controls are present but no canonical mapping/evidence ledger was supplied.",
    );
  }

  const evidenceText = [JSON.stringify(uvd.claims ?? []), ...noteTexts].join("\n");
  const hasListeningEvidence = hasCompletedListeningEvidence(config);
  if (ASR_TERM.test(evidenceText) && SUCCESS_CLAIM.test(evidenceText) && !hasListeningEvidence) {
    report(
      "error",
      "evidence.asr-as-verdict",
      "ASR/transcription is used with success language but no completed native listening record is present.",
    );
  } else if (SUCCESS_CLAIM.test(evidenceText) && !hasListeningEvidence) {
    report(
      "warning",
      "evidence.unbacked-success-claim",
      "Success language appears without a completed exact-voice native listening record.",
    );
  }

  const sourceFacts = array(uvd.sourceFacts ?? config.sourceFacts);
  const directionEvidence = array(uvd.directionEvidence ?? config.directionEvidence);
  if (identityTagCount > 0 && sourceFacts.length === 0) {
    report(
      "warning",
      "evidence.unsourced-identity",
      `${identityTagCount} tag(s) assert age, gender, or relationship without a source-facts record.`,
    );
  }
  if (directionTagCount > 0 && directionEvidence.length === 0) {
    report(
      "warning",
      "evidence.direction-untraced",
      "Audio directions are present without a source/brief evidence record; review emotions and audible events for invention.",
    );
  }
  if (turns.some((turn) => RELIGIOUS_ATTRIBUTION.test(turn.canonical))) {
    const claimRecords = array(uvd.claimsLedger ?? config.claimsLedger);
    const noteHasClaimsLedger = noteTexts.some(
      (note) => /^#\s+Claims ledger|^##\s+Claims/im.test(note),
    );
    if (claimRecords.length === 0 && !noteHasClaimsLedger) {
      report(
        "warning",
        "evidence.religious-attribution-untraced",
        "Religious attribution appears in canonical speech without a claims/source ledger.",
      );
    }
  }

  return diagnostics.sort((a, b) =>
    LEVEL_ORDER[a.level] - LEVEL_ORDER[b.level]
      || a.code.localeCompare(b.code)
      || a.location.localeCompare(b.location),
  );
};

export const loadProductionAdapter = async (path) => {
  const absolute = resolve(path);
  if (!existsSync(absolute)) throw new Error(`Adapter not found: ${absolute}`);
  if (extname(absolute).toLowerCase() === ".json") {
    return JSON.parse(readFileSync(absolute, "utf8"));
  }
  const module = await import(`${pathToFileURL(absolute).href}?audit=${Date.now()}`);
  return module.default ?? module.config ?? module;
};

const usage = () => {
  console.log("Usage: node scripts/validate-production.mjs <adapter.json|config.mjs> [--notes file.md] [--strict] [--json]");
};

const runCli = async () => {
  const args = process.argv.slice(2);
  let input = null;
  const notePaths = [];
  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    if (arg === "--notes") {
      const path = args[index + 1];
      if (!path) throw new Error("--notes requires a file path");
      notePaths.push(resolve(path));
      index += 1;
    } else if (!arg.startsWith("--") && input === null) {
      input = arg;
    } else if (!arg.startsWith("--")) {
      throw new Error(`Unexpected argument: ${arg}`);
    }
  }
  if (args.includes("--help") || args.includes("-h")) {
    usage();
    process.exit(0);
  }
  if (!input) {
    usage();
    process.exit(2);
  }
  const noteTexts = notePaths.map((path) => readFileSync(path, "utf8"));
  const config = await loadProductionAdapter(input);
  const diagnostics = auditProductionAdapter(config, { noteTexts });
  const errors = diagnostics.filter((item) => item.level === "error").length;
  const warnings = diagnostics.filter((item) => item.level === "warning").length;
  if (args.includes("--json")) {
    console.log(JSON.stringify({ input: resolve(input), errors, warnings, diagnostics }, null, 2));
  } else {
    console.log(`Production adapter audit: ${errors} error(s), ${warnings} warning(s)`);
    for (const item of diagnostics) {
      console.log(`${item.level.toUpperCase()} [${item.code}] ${item.location}: ${item.message}`);
    }
  }
  if (errors > 0 || (args.includes("--strict") && warnings > 0)) process.exit(1);
};

if (process.argv[1] && resolve(process.argv[1]) === resolve(fileURLToPath(import.meta.url))) {
  runCli().catch((error) => {
    console.error(error instanceof Error ? error.message : String(error));
    process.exit(2);
  });
}
