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
- [ ] The workflow explicitly follows source → fidelity → Urdu imaginative scene → social voice → clean speech → performance → provider.
- [ ] “Recover the living scene” privately checks viewpoint, supported anchors, relationship, change, and the unspoken.
- [ ] Scene recovery forbids unsupported objects, actions, motives, memories, symbolism, cultural assumptions, and emotions.
- [ ] Meaning and character fidelity are hard requirements.
- [ ] Dialogue refinement and performance direction are explicitly distinct.
- [ ] Lines may receive neither, either, or both operations.
- [ ] The skill discourages unnecessary questions.
- [ ] Changing intent within one line has a beat method.
- [ ] Silence types are distinguished.
- [ ] Emotion is not equated with volume or speed.
- [ ] Literary depth excludes unrequested narration.
- [ ] Urdu is the semantic reference rather than the surface translation of an English or Hindi interpretation.
- [ ] Literary vitality is not equated with ornament, Persianised diction, classical vocabulary, or named-author imitation.
- [ ] Ordinary dialogue is allowed to remain ordinary.
- [ ] Performance cues are short, actionable, local, and restrained.
- [ ] Performance form, delivery range, and naturalistic/stylized treatment are separate; grounded is not treated as emotionless and stylized is not treated as louder.
- [ ] Drama/dubbing, documentary/explainer, and animation/game character work have distinct guidance.

## Output safety

- [ ] Clean spoken Urdu is always required.
- [ ] Directed rehearsal output labels cues as non-spoken.
- [ ] TTS tasks include a portable synthesis plan.
- [ ] Optional narrative context is non-spoken, source-bounded, and absent when unnecessary.
- [ ] Provider input, instruction/markup, and captions are separate.
- [ ] Multiple providers derive from one clean source.
- [ ] Unknown providers receive conservative clean utterances.
- [ ] Unsupported adapters are withheld without blocking portable output.
- [ ] JSON is optional and minimal, never the default.

## Linguistic coverage

- [ ] Urdu `۔`, `؟`, `،`, `!`, colon, dash, ellipses, line breaks, and incomplete sentences are covered.
- [ ] Ambiguity-first provider diacritics cover every material locus without polluting captions.
- [ ] `ت/ٹ`, `د/ڈ`, `ر/ڑ`, aspiration, and vowel length are evaluated as distinct pronunciation dimensions.
- [ ] `آپ`/`تم`/`تُو` and agreement are covered.
- [ ] Children do not default to adult or baby speech.
- [ ] Religious language guidance is respectful and non-preachy.
- [ ] Urdu-English code-switching and product names are covered.
- [ ] Roman Urdu ambiguity is covered.
- [ ] Roman Urdu conversion reconstructs context and relationships before script conversion.
- [ ] Full-turn code-switching and direct-Urdu discipline are covered.

## Provider evidence

- [ ] Every provider claim has an official source and status date.
- [ ] Eleven v3 is distinguished from Eleven v2/Flash.
- [ ] Eleven v3’s open-ended detailed tags and mid-utterance placement are supported without treating exact free-form phrases or scope as guaranteed.
- [ ] Eleven v3 inline IPA and pronunciation dictionaries are documented as exact-target, listening-dependent pronunciation controls.
- [ ] OpenAI instruction-capable models are distinguished from `tts-1`/`tts-1-hd`.
- [ ] Google Gemini-TTS `ur-PK` is labeled Preview.
- [ ] Google Chirp 3 `ur-IN` pause and pronunciation limits are stated.
- [ ] Azure Urdu voices are not assigned unsupported expressive styles.
- [ ] Amazon Polly Urdu output is withheld under the current list.
- [ ] Piper voice artifacts are distinguished from executed quality validation, and direction stays external.
- [ ] XTTS-v2, Qwen3-TTS, and Chatterbox do not inherit Urdu support from neighboring products/languages.

## Examples and evals

- [ ] Central Ahmed/Fatima scene includes all required emotional beats.
- [ ] Central scene does not silently add the optional sermon line.
- [ ] Examples cover siblings, friends, parent/child, teacher/student, correction, embarrassment, anger, whisper, interruption, realization, uncertainty, teasing, respect, code-switching, and religious education.
- [ ] Every detailed example includes original, problems, clean, directed, progression, and restraint/alternatives.
- [ ] Provider example preserves clean captions.
- [ ] Literary scene-recovery examples contain 10–12 contrastive cases and include an ordinary no-change case.
- [ ] Text eval suite contains at least 45 cases.
- [ ] Provider suite contains at least 20 cases.
- [ ] Regression suite contains at least 60 invariants.
- [ ] Contrastive benchmark contains exactly 20 scenes in the documented category distribution.
- [ ] Contrastive benchmark compares released, revised, and generic-prompt arms with blinded property scoring.
- [ ] Ablation protocol distinguishes clean text, punctuation, direction, context, provider control, and pronunciation intervention.
- [ ] Human protocol requires native listening with actual voices.
- [ ] Human protocol compares canonical, diacritized, IPA/dictionary, and alternate-voice variants for known pronunciation failures.
- [ ] Human protocol records reviewer variation and exact provider/model/surface/locale/voice/payload metadata.
- [ ] Results manifest distinguishes specified cases from executed results.
- [ ] Default refinement tests unknown gender, full-turn code-switching, religious-form fidelity, and no-added-turn behavior.
- [ ] Provider tests distinguish canonical utterance from provider request payload and exact API surface.

## Release evidence

- [ ] `quick_validate.py` passes.
- [ ] No unresolved placeholder markers remain.
- [ ] Markdown links resolve locally.
- [ ] Source URLs are reachable or explicitly archived/replaced.
- [ ] No referenced example, eval, or source is missing.
- [ ] No provider claim lacks a verification date.
- [ ] No unsupported model or locale claim is promoted.
- [ ] No duplicate or contradictory core instruction remains.
- [ ] Current version appears in `CHANGELOG.md`.
- [ ] Provider status date is no older than the release’s documented review window.
- [ ] Audio confidence is not claimed before listening tests.
- [ ] `evals/results-manifest.md` records release confidence and every executed listening/provider run.
