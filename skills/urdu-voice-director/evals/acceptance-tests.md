# Static acceptance tests

Run these checks manually or with repository search. They validate the skill artifact, not generated audio.

## Installation and structure

- [ ] Folder name is `urdu-voice-director`.
- [ ] `SKILL.md` exists and frontmatter contains only `name` and `description`.
- [ ] `agents/openai.yaml` names `$urdu-voice-director` in its default prompt.
- [ ] `VERSION` contains a valid Semantic Version.
- [ ] `CHANGELOG.md` contains the current version and an Unreleased section.
- [ ] Every reference linked from `SKILL.md` exists.
- [ ] Every example and eval linked from `SKILL.md` exists.
- [ ] No CLI, audio engine, API client, authentication, Narova dependency, plugin registry, or executable framework exists.

## Trigger coverage

The description covers:

- [ ] natural Urdu dialogue;
- [ ] Roman Urdu;
- [ ] TTS and voice work;
- [ ] children/family/education;
- [ ] religious/moral content;
- [ ] code-switching;
- [ ] provider adaptation;
- [ ] implicit speech-oriented refinement.

## Core behavior

- [ ] Scene understanding precedes editing.
- [ ] Meaning and character fidelity are hard requirements.
- [ ] Dialogue refinement and performance direction are explicitly distinct.
- [ ] Lines may receive neither, either, or both operations.
- [ ] The skill discourages unnecessary questions.
- [ ] Changing intent within one line has a beat method.
- [ ] Silence types are distinguished.
- [ ] Emotion is not equated with volume or speed.
- [ ] Literary depth excludes unrequested narration.
- [ ] Performance cues are short, actionable, local, and restrained.

## Output safety

- [ ] Clean spoken Urdu is always required.
- [ ] Directed rehearsal output labels cues as non-spoken.
- [ ] TTS tasks include a portable synthesis plan.
- [ ] Provider input, instruction/markup, and captions are separate.
- [ ] Multiple providers derive from one clean source.
- [ ] Unknown providers receive conservative clean utterances.
- [ ] Unsupported adapters are withheld without blocking portable output.
- [ ] JSON is optional and minimal, never the default.

## Linguistic coverage

- [ ] Urdu `۔`, `؟`, `،`, `!`, colon, dash, ellipses, line breaks, and incomplete sentences are covered.
- [ ] Selective diacritics and ambiguity examples are covered.
- [ ] `آپ`/`تم`/`تُو` and agreement are covered.
- [ ] Children do not default to adult or baby speech.
- [ ] Religious language guidance is respectful and non-preachy.
- [ ] Urdu-English code-switching and product names are covered.
- [ ] Roman Urdu ambiguity is covered.

## Provider evidence

- [ ] Every provider claim has an official source and status date.
- [ ] Eleven v3 is distinguished from Eleven v2/Flash.
- [ ] OpenAI instruction-capable models are distinguished from `tts-1`/`tts-1-hd`.
- [ ] Google Gemini-TTS `ur-PK` is labeled Preview.
- [ ] Google Chirp 3 `ur-IN` pause and pronunciation limits are stated.
- [ ] Azure Urdu voices are not assigned unsupported expressive styles.
- [ ] Amazon Polly Urdu output is withheld under the current list.
- [ ] Piper direction stays external.
- [ ] XTTS-v2, Qwen3-TTS, and Chatterbox do not inherit Urdu support from neighboring products/languages.

## Examples and evals

- [ ] Central Ahmed/Fatima scene includes all required emotional beats.
- [ ] Central scene does not silently add the optional sermon line.
- [ ] Examples cover siblings, friends, parent/child, teacher/student, correction, embarrassment, anger, whisper, interruption, realization, uncertainty, teasing, respect, code-switching, and religious education.
- [ ] Every detailed example includes original, problems, clean, directed, progression, and restraint/alternatives.
- [ ] Provider example preserves clean captions.
- [ ] Text eval suite contains at least 30 cases.
- [ ] Provider suite contains at least 20 cases.
- [ ] Regression suite contains at least 40 invariants.
- [ ] Human protocol requires native listening with actual voices.
- [ ] Results manifest distinguishes specified cases from executed results.
- [ ] Default refinement tests unknown gender, full-turn code-switching, religious-form fidelity, and no-added-turn behavior.
- [ ] Provider tests distinguish canonical utterance from provider request payload and exact API surface.

## Release evidence

- [ ] `quick_validate.py` passes.
- [ ] No unresolved placeholder markers remain.
- [ ] Markdown links resolve locally.
- [ ] Source URLs are reachable or explicitly archived/replaced.
- [ ] Current version appears in `CHANGELOG.md`.
- [ ] Provider status date is no older than the release’s documented review window.
- [ ] Audio confidence is not claimed before listening tests.
- [ ] `evals/results-manifest.md` records release confidence and every executed listening/provider run.
