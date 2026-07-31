# Changelog

This skill uses Semantic Versioning:

- **MAJOR** — incompatible output-contract or interpretation changes.
- **MINOR** — new capabilities, references, provider adapters, or eval dimensions.
- **PATCH** — clarifications, corrected examples, source refreshes, and compatible provider-fact updates.

Provider documentation and listening observations must include an “as of” date. Record any provider capability change here even when the skill workflow remains compatible.

## [Unreleased]

### Corrected

- Independently regenerated all seven documented sample bundles—including the hero—with fresh-context skill runs that read the current `SKILL.md`, the canonical source, and only the relevant references.
- Removed unsupported age, relationship, and motive assumptions, stale scene descriptions, broad turn-level emotion tags, and forced pause language found by the independent pass.
- Replaced a spliced Kafan sample with a contiguous four-turn excerpt verified against the scanned Anjuman Taraqqi Urdu edition, and restored the narrator’s explicit delivery context.
- Replaced those adapters with source-supported detailed Eleven v3 cues placed at the precise mid-utterance beats they are intended to affect; preserved at least one untagged comparison turn where appropriate.
- Recorded the exact resolved voice IDs and actual request/output format for every Eleven v3 sample, re-synchronized the website lab from the accepted artifacts, regenerated all seven `*-after.mp3` clips, and re-rendered Kafan’s clean baseline after correcting its canonical source. Native-Urdu listening remains pending.
- Hardened sample validation to compare Source→A→D, require loaded-reference provenance and reproducible Eleven v3 metadata, and retain targeted regressions for the unsupported emergency relationship and Kafan splice.

### Research queue

- Execute the machine-readable 16-case mode-stratified benchmark and the legacy 20-scene contrastive set with blinded native Urdu reviewers across Pakistani and Indian contexts, plus more than one household, age group, and bilingual background.
- Run the eight-scene audio/ablation subset with current Eleven v3, OpenAI instruction-steered TTS, Google Gemini-TTS Urdu Preview, Azure `ur-PK`, Google Chirp 3 `ur-IN`, and the available Piper Urdu voices.
- Recheck whether Qwen3-TTS, XTTS-v2, or Chatterbox adds official Urdu support.
- Measure whether selective diacritics improve or harm pronunciation across provider and local voices.

## [0.3.0] - 2026-07-31

### Changed

- Reduced `SKILL.md` from 239 lines to a 72-line operating contract while retaining fidelity, relationship/register, anti-invention, no-op, clean-layer, and exact-model requirements.
- Consolidated fifteen broad references into the requested nine-file flat architecture with load-on-demand routing and citations beside the claims they support.
- Distinguished everyday conversation, fictional dialogue, audiobook narration, news reading, public speech, religious/devotional speech, poetry recitation, and mushaira performance.
- Re-ran all seven documented sample bundles—including the hero—through the revised skill. Clean words remain source-identical; Eleven v3 adapters now translate detailed, source-supported rehearsal actions through the model’s documented open-ended tag mechanism.
- Made Eleven v3 mid-utterance placement explicit: cues can sit around the exact beat they affect, multiple cues may direct distinct actions within one turn, and word/izafat/qafiya–radif connections must not be split.
- Updated the website’s method, modes, evidence claims, detailed provider examples, and release metadata.

### Added

- Added a research-based conversational-prosody reference covering statement/question tendencies, contrastive focus, duration, post-focus compression, speaker variation, and the limits of punctuation.
- Added a dedicated Urdu poetry/performance reference covering `بحر`, `وزن`, syllable length, scansion, izafat, qafiya, radif, ambiguous pronunciation, pause sites, `تحت اللفظ`, `ترنم`, quiet reading, and mushaira performance.
- Added executable validation for exact reference topology, local links, citations, core contract/line budget, release metadata, sample A/D fidelity, and benchmark coverage.
- Added 16 machine-readable cases across all eight modes plus deterministic blind-packet preparation and scoring commands.
- Added a safe `--validate` and `--force-after` path to the audio sample generator.

### Research and provider review

- Added and distributed citations from Urdu intonation, spontaneous conversational prosody, focus, individual-variation, filled-pause, fictional-orality, literary-history, Urdu poetic metre, tarannum, poetry/preaching performance, Urdu speech-corpus, code-switching, pronunciation, and TTS-corpus research.
- Refreshed first-party provider claims as of 2026-07-31 for ElevenLabs, OpenAI, Google Cloud, Azure, Amazon Polly, Piper, XTTS-v2, Qwen3-TTS, and Chatterbox.
- Corrected the Eleven v3 policy: detailed descriptive tags are permitted by the documented non-exhaustive/open-ended mechanism. The exact free-form cue remains an exact-voice experiment, not a predefined guarantee.
- Added a regression guard requiring real mid-utterance tag coverage in the sample suite, including the hero and poetry adapters.

### Evaluation

- Added hard gates and mode-specific review criteria for all eight performance types.
- Added a reproducible baseline/candidate run format, blinded A/B packet, scoring output, reviewer-disagreement review, and a failure-to-regression workflow.
- Retained the legacy prose specifications and results manifest; structural checks still make no claim of native naturalness or audio quality.

## [0.2.0] - 2026-07-29

### Added

- Made Urdu literary memory, social worlds, relationship systems, rhythm, and cultural associations explicit in the north-star principle.
- Added a private `Recover the living scene` workflow step covering viewpoint, source-supported concrete anchors, relationship, change, and the unspoken, with a strict anti-invention guard.
- Added `references/urdu-literary-imagination.md`, a practical source-backed guide to scene, presence, social syntax, implication, rhythm, restraint, memory, silence, fictional orality, and direct-Urdu discipline.
- Added 12 contrastive scene-recovery examples covering ordinary family speech, concealment, sibling tension, memory, embarrassment, disappointment, humour, code-switching, religious language, migration/absence, audiobook narration, and direction-only treatment.
- Added optional non-spoken performance context for audiobook, drama, animation, game, and TTS work without making it a default output section.
- Added `imaginative fidelity` and `oral transfer` to the existing evaluation framework.
- Added a 20-scene blinded contrastive benchmark comparing 0.1.1, 0.2.0, and a generic natural-Urdu prompt, plus an eight-scene audio/ablation subset.

### Changed

- Made the direct Urdu source—not an English or Hindi back-translation—the semantic and imaginative reference.
- Clarified that literary vitality comes from presence, viewpoint, sequence, social relation, and restraint rather than named-author imitation, Persianised diction, ornament, or heightened emotion.
- Expanded the text suite from 37 to 49 cases, provider-contract suite from 29 to 32 cases, and regression suite from 45 to 65 invariants.
- Expanded native editorial and listening records to preserve reviewer variation and exact provider/model/surface/locale/voice/payload metadata.
- Refreshed provider facts as of 2026-07-29: OpenAI’s TTS guide now explicitly lists Urdu while warning that built-in voices are optimized for English; current Piper catalog entries and Google Chirp controls are recorded without implying audio validation.
- Made the verified `npx skills add ammar-hasan/urdu-voice-director` workflow the primary installation method; retained manual copying as a fallback.

### Evidence

- Added literary-history, fictional-orality, Urdu grammar/knowledge benchmark, tokenization, Roman Urdu, and code-switching sources with established/editorial/provider/hypothesis labels.
- Static repository validation is recorded separately in `evals/results-manifest.md`; contrastive model, native-reader, native-listener, and provider-audio tests remain unexecuted until artifacts are logged.

## [0.1.1] - 2026-07-29

### Corrected

- Reworked the central Ahmed/Fatima example as a fidelity-first seven-turn refinement: no invented opportunity, hush instruction, realization token, honorific, formal confirmation, theft framing, or sermon.
- Replaced the awkward immediate-scene aspect `دیکھ رہے ہوتے ہیں` with `دیکھ رہے ہیں` while documenting the habitual alternative as a contextual choice.
- Made parent/child and teacher/student primary examples preserve source turn counts; expanded conversations are now labeled optional authorial adaptations.
- Preserved full-turn English code-switching by default and removed unsupported gender/teacher-title inference.
- Removed default Pakistani-locale assumptions from provider instructions.
- Recast a generic spoken-Urdu example to avoid choosing masculine morphology from unspecified input.
- Reframed Zoya’s disappointment as one optional interpretation rather than a fact.
- Labeled selective diacritic use as an editorial TTS hypothesis rather than established provider behavior.

### Changed

- Clarified that only clean spoken Urdu is mandatory for every request; directed, portable, and provider artifacts appear when useful.
- Replaced ambiguous `spoken input` terminology with `canonical utterance`, `provider request payload`, `inline control`, `separate instruction`, and `caption copy`.
- Provider adapters now require the exact model ID, product/API surface, locale, voice, and live first-party verification, with unresolved fields stated explicitly.
- Added an evaluation results manifest and labeled provider quality an unvalidated beta until native-listening and actual-audio evidence exists.

### Tests

- Expanded the text suite from 32 to 37 cases.
- Expanded provider-contract coverage from 24 to 29 cases.
- Expanded regression coverage from 40 to 45 invariants.
- Added targeted guards for unknown gender, full-turn code-switching, religious-form fidelity, no-added-turn refinement, provider-layer taxonomy, exact target fields, locale choice, and live documentation verification.

## [0.1.0] - 2026-07-29

### Added

- Scene-first Urdu dialogue refinement and performance-direction workflow.
- Mandatory separation of clean spoken text, rehearsal direction, portable synthesis notes, provider controls, and caption copy.
- References for spoken Urdu, rhythm, punctuation, emotional beats, relationships, children, pronunciation, religious language, code-switching, provider behavior, and evaluation.
- Six worked-example files, including the Ahmed–Fatima chocolate scene.
- Text, provider-contract, adversarial, regression, and native-listening evals.
- Dated provider guidance for ElevenLabs, OpenAI, Google Cloud, Azure, Amazon Polly, Piper, XTTS-v2, Qwen3-TTS, and Chatterbox.

### Known limitations

- No audio generations were run during authoring.
- Urdu dialect, regional, class, and household variation cannot be captured by one default register.
- Several current providers list Urdu support without publishing Urdu-specific expressive-control evaluations.
- Provider capability data is time-sensitive.
