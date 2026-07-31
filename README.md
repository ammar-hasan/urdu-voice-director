# Urdu Voice Director

`urdu-voice-director` is an agent skill for natural, source-faithful Urdu speech and performance. It preserves meaning, relationship, age, register, titles, religious wording, and code-switching; separates clean speech from direction and TTS syntax; and refuses to invent inner life merely to make a line sound dramatic.

The core [`SKILL.md`](skills/urdu-voice-director/SKILL.md) is intentionally short. Detailed Urdu, literary, prosodic, poetic, pronunciation, provider, and evaluation knowledge lives in nine cited references that the model loads only when the task needs them.

Current release: **0.3.0 structurally validated beta**.

## Install

```bash
npx skills add ammar-hasan/urdu-voice-director
```

For a global, non-interactive Codex installation:

```bash
npx skills add ammar-hasan/urdu-voice-director \
  --skill urdu-voice-director \
  --global \
  --agent codex \
  --yes
```

Then ask:

```text
Use $urdu-voice-director to prepare this Urdu scene for spoken performance.
Preserve clean text, and add only source-supported direction.
```

For poetry:

```text
Use $urdu-voice-director to prepare this ghazal for a quiet reading and a
mushaira. Check metre, syllable length, izafat, qafiya, radif, pronunciation,
and lawful pause sites before adding direction.
```

## What it distinguishes

The skill treats these as different performance problems:

- everyday conversation;
- fictional dialogue;
- audiobook narration;
- news reading;
- public speech;
- religious or devotional speech;
- poetry recitation;
- mushaira performance.

Poetry is not routed through generic dramatic direction. Its reference covers `بحر`, `وزن`, short and long syllables, `قافیہ`, `ردیف`, izafat, ambiguous readings, lawful pause sites, and the difference between quiet, `تحت اللفظ`, `ترنم`, and mushaira performance.

## Selective reference architecture

```text
skills/urdu-voice-director/
  SKILL.md
  references/
    spoken-urdu.md
    relationships-and-register.md
    conversational-prosody.md
    hesitation-and-pauses.md
    literary-dialogue.md
    poetry-and-recitation.md
    pronunciation.md
    provider-capabilities.md
    evaluation.md
```

Research citations sit beside the guidance they support. They include Urdu intonation and focus studies, filled-pause research, Urdu literary and oral-performance scholarship, quantitative poetic metre and tarannum, Urdu TTS/corpus work, and dated first-party provider documentation.

## TTS adapters

The clean Urdu remains canonical. Rehearsal direction and provider controls are separate layers.

For Eleven v3, the current first-party guidance documents an open-ended audio-tag mechanism rather than a tiny fixed vocabulary. The skill can translate detailed, source-grounded rehearsal actions into concise v3 tags at turn start or mid-utterance, immediately around the beat they affect. Multiple tags may map distinct actions inside one turn. The mechanism and placement pattern are documented; the exact free-form phrase, scope, and behavior with a selected Urdu voice remain listening-test hypotheses.

Every provider adapter declares the exact provider, model, surface, locale, and voice—or marks a field unresolved. Support on one model never transfers silently to another.

## Evaluation and validators

```bash
npm run validate:skill
npm run benchmark:validate
npm test
```

The repository includes:

- executable structure, link, citation, release, sample-fidelity, and topology validation;
- 16 machine-readable benchmark cases covering all eight performance modes;
- deterministic blinded A/B packet preparation and scoring;
- hard gates and a ten-dimension rubric;
- a native-Urdu listening protocol and results ledger;
- legacy text, provider-contract, and regression specifications retained for coverage.

See the [evaluation reference](skills/urdu-voice-director/references/evaluation.md), [benchmark cases](skills/urdu-voice-director/evals/benchmark-cases.json), and [results manifest](skills/urdu-voice-director/evals/results-manifest.md).

Static checks do not prove naturalness, metre, pronunciation, or provider compliance. Those claims require executed generations and native listening with the exact voice.

## Samples and website

The [sample runs](samples/README.md) are regenerated from their own A/D artifacts rather than from text hidden in the script. The website compares clean Eleven v3 baselines with detailed adapters while preserving identical canonical words.

Run locally:

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

Website: https://ammar-hasan.github.io/urdu-voice-director/
