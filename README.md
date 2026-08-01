# Urdu Voice Director

`urdu-voice-director` is an agent skill for natural, source-faithful Urdu speech and performance. It preserves meaning, relationship, age, register, titles, religious wording, and code-switching; separates clean speech from direction and TTS syntax; and refuses to invent inner life merely to make a line sound dramatic.

The core [`SKILL.md`](skills/urdu-voice-director/SKILL.md) is intentionally short. Detailed Urdu, literary, prosodic, poetic, pronunciation, provider, and evaluation knowledge lives in nine cited references that the model loads only when the task needs them.

Current release: **0.4.0 structurally validated beta**.

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
- drama and dubbing;
- audiobook narration;
- documentary and explainer narration;
- animation and game character voice;
- news reading;
- public speech;
- religious or devotional speech;
- poetry recitation;
- mushaira performance.

Each form also selects two independent production axes: a **restrained**, **grounded**, or **heightened** delivery range, and a **naturalistic** or **stylized** treatment. Stylization is not intensity: a performance may be restrained and stylized, or heightened and naturalistic. Grounded-naturalistic is the comparison baseline, not a command to suppress source-supported affect. A non-unique reading stays labeled as a performance hypothesis.

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

Pronunciation uses an ambiguity-first provider copy while captions stay canonical. Vowel marks resolve established ambiguous readings; they are not treated as fixes for consonant substitutions such as `ڑ`→`ر` or `ٹ`→`ت`. Current Eleven v3 adapters may test selective inline IPA or pronunciation dictionaries, always against the exact voice and a no-control baseline.

Every provider adapter declares the exact provider, model, surface, locale, and voice—or marks a field unresolved. Support on one model never transfers silently to another.

## Evaluation and validators

```bash
npm run validate:skill
npm run benchmark:validate
npm test
```

The repository includes:

- executable structure, link, source-presence, release, sample-fidelity, and topology validation;
- 26 machine-readable benchmark cases covering eleven performance forms, three delivery ranges, and two treatments, including same-source controlled pairs for both production axes;
- deterministic blinded A/B packet preparation, strict evidence validation, and per-form scoring with descriptive per-range/per-treatment summaries;
- hard gates and a twelve-dimension text rubric that does not claim audible realization;
- a native-Urdu listening protocol and results ledger;
- legacy text, provider-contract, and regression specifications retained for coverage.

See the [evaluation reference](skills/urdu-voice-director/references/evaluation.md), [benchmark cases](skills/urdu-voice-director/evals/benchmark-cases.json), and [results manifest](skills/urdu-voice-director/evals/results-manifest.md).

Static checks do not prove naturalness, metre, pronunciation, or provider compliance. Those claims require executed generations and native listening with the exact voice.

## Samples and website

The [sample runs](samples/README.md) were last regenerated under 0.3.0 from their own A/D artifacts rather than from text hidden in the script. Version 0.4.0 retains those seven MP3s as historical provider artifacts; it does not claim they were regenerated or native-listener validated for this release. The website compares their clean Eleven v3 baselines with detailed adapters while preserving identical canonical words.

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
