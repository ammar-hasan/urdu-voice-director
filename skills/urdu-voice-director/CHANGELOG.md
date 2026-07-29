# Changelog

This skill uses Semantic Versioning:

- **MAJOR** — incompatible output-contract or interpretation changes.
- **MINOR** — new capabilities, references, provider adapters, or eval dimensions.
- **PATCH** — clarifications, corrected examples, source refreshes, and compatible provider-fact updates.

Provider documentation and listening observations must include an “as of” date. Record any provider capability change here even when the skill workflow remains compatible.

## [Unreleased]

### Research queue

- Validate all central examples with native speakers from more than one Pakistani Urdu-speaking region.
- Run the listening suite with current Eleven v3, OpenAI instruction-steered TTS, Google Gemini-TTS Urdu Preview, Azure `ur-PK`, Google Chirp 3 `ur-IN`, and Piper `ur_PK-fasih-medium`.
- Recheck whether Qwen3-TTS, XTTS-v2, or Chatterbox adds official Urdu support.
- Measure whether selective diacritics improve or harm pronunciation across provider and local voices.

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
