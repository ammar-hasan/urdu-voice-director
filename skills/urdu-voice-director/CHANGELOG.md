# Changelog

This skill uses Semantic Versioning:

- **MAJOR** — incompatible output-contract or interpretation changes.
- **MINOR** — new capabilities, references, provider adapters, or eval dimensions.
- **PATCH** — clarifications, corrected examples, source refreshes, and compatible provider-fact updates.

Provider documentation and listening observations must include an “as of” date. Record any provider capability change here even when the skill workflow remains compatible.

## [Unreleased]

### Research queue

- Validate all central examples with native speakers across Pakistani and Indian Urdu contexts, plus more than one household, age group, and bilingual background.
- Run the listening suite with current Eleven v3, OpenAI instruction-steered TTS, Google Gemini-TTS Urdu Preview, Azure `ur-PK`, Google Chirp 3 `ur-IN`, and Piper `ur_PK-fasih-medium`.
- Recheck whether Qwen3-TTS, XTTS-v2, or Chatterbox adds official Urdu support.
- Measure whether selective diacritics improve or harm pronunciation across provider and local voices.

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
