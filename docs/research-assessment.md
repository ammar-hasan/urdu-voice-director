# Urdu Voice Director 0.2 research assessment

Research and provider review date: **2026-07-29**

## Executive diagnosis

Version 0.1.1 already had the right safety architecture: understand a scene before editing, preserve meaning and relationships, separate refinement from direction, keep clean dialogue canonical, adapt only to exact provider capabilities, and label evidence honestly. Its literary principle—subtext, restraint, rhythm, silence—was sound but compressed into a general craft note.

What was missing was a source-bounded Urdu imaginative layer between fidelity and line editing. The skill could make dialogue natural and directable, but it did not yet teach a model how viewpoint, concrete detail, social syntax, memory, implication, and narrative sequence make an Urdu scene present—or how to transfer those qualities to speech without inventing them.

Version 0.2.0 therefore adds one compact workflow step, one practical literary reference, one contrastive example set, two evaluation dimensions, and targeted evaluation specifications. It does not add a framework, schema, corpus, TTS client, or author-style system.

## Original thesis and existing strengths

The released skill’s north star was: treat Urdu dialogue as a scene performed by people, not text decorated with emotion labels.

Its strongest mechanisms were:

- a fidelity contract protecting facts, dramatic function, speaker turns, age, identity, gender ambiguity, locale, titles, code-switching, and religious forms;
- explicit `آپ`/`تم`/`تُو`, agreement, kinship, and honorific safeguards;
- a per-turn decision between neither, refinement, direction, or both;
- beat-aware direction for changing intention;
- mandatory clean dialogue and separate rehearsal, portable, provider, and caption layers;
- exact-model provider checks with unsupported adapters withheld;
- established/editorial/provider-documented/hypothesis evidence labels;
- static specifications that reject invented motives, moral expansion, provider leakage, and unsupported Urdu claims.

These remain the foundation. Literary scene recovery is not permitted to override them.

## Research findings that matter

### Urdu prose offers techniques, not style presets

Research on qissa/dastan describes an oral and performative narrative tradition; histories of Urdu prose discuss plot, characterization, local colour, and evocative power; work on domestic/reformist fiction, memory, and Partition writing shows how social relation, private space, time, and absence can carry narrative pressure. The transferable lesson is not to imitate periods or authors. It is to reason about sequence, viewpoint, concrete anchors, social relationships, implication, repetition, memory, and silence. [Khan](https://www.openbookpublishers.com/books/10.11647/obp.0062/chapters/10.11647/obp.0062.06), [Columbia World Epics](https://edblogs.columbia.edu/worldepics/project/hamzanama/), [Faruqi](https://www.columbia.edu/itc/mealac/pritchett/00fwp/srf/srf_urdu_lit_history_1989.pdf), [Intimate Relations](https://escholarship.org/uc/item/9bh8k4nw), [Memon](https://doi.org/10.1017/S0020743800055082), [Mehdi](https://doi.org/10.1017/9781108763691.008).

This repository treats those transfers as editorial craft judgments, not universal laws. Persianised, classical, or ornate language is not inherently more alive.

### Literary speech is designed

Fictional-orality research distinguishes scripted dialogue from a literal transcript. Fiction selects fragments, particles, repetition, hesitations, and response forms to create the impression of online speech while omitting much ordinary conversational noise. That supports functional disfluency and character-specific rhythm, not particle confetti or generic colloquialism. [Jucker](https://doi.org/10.1177/09639470211047751).

### General multilingual competence can hide Urdu-specific weakness

[UrBLiMP](https://aclanthology.org/2026.findings-acl.29/) evaluates 5,696 Urdu minimal pairs across ten syntactic phenomena and reports uneven performance, including continued difficulty with flexible word order and long-distance agreement. [UrduMMLU](https://arxiv.org/abs/2606.07167) uses 26,431 questions from native Urdu educational sources and reports large losses for many models on Urdu-centered humanities content. An Urdu–English QA study also reports language-boundary and context failures in its tested setting. [Crossing Language Boundaries](https://aclanthology.org/2025.indonlp-1.17/).

These studies do not prove that proprietary systems translate internally through English or Hindi. They support the narrower conclusion that aggregate multilingual performance does not establish direct Urdu grammatical, cultural, or literary competence.

Tokenizer choice can also matter. The Urdu-specific [UrduLM](https://arxiv.org/abs/2601.17664) study reports a 20–30% tokenization-overhead reduction against the multilingual tokenizers it tested. This is model-specific evidence, not a universal tokenizer verdict.

Roman Urdu remains variable and frequently code-switched; recent cross-script idiom work reports different outcomes for Urdu script and Roman Urdu in its task. The skill should reconstruct relationship and context before converting script, not transliterate word by word. [Urdu idiom benchmark](https://arxiv.org/abs/2510.17460), [Roman Urdu retrieval study](https://aclanthology.org/2025.lowresnlp-1.9/).

### TTS controls remain exact-model claims

Current first-party documentation establishes:

- Eleven v3 lists Urdu and supports audible audio tags; the same claim does not transfer to Multilingual v2 or Flash v2.5. [ElevenLabs language support](https://help.elevenlabs.io/hc/en-us/articles/13313366263441-What-languages-do-you-support), [v3 prompting](https://elevenlabs.io/docs/overview/capabilities/text-to-speech/best-practices).
- OpenAI’s TTS guide lists Urdu, supports separate instructions for `gpt-4o-mini-tts`, and notes that built-in voices are optimized for English; `tts-1` and `tts-1-hd` do not accept that instruction control. [TTS guide](https://developers.openai.com/api/docs/guides/text-to-speech), [speech reference](https://developers.openai.com/api/reference/resources/audio/subresources/speech/methods/create).
- Google Gemini-TTS lists `ur-PK` as Preview with natural-language style prompting, while Chirp 3 HD lists `ur-IN` and model-specific pause, pace, and Preview SSML controls; custom pronunciation currently excludes `ur-IN`. [Gemini-TTS](https://docs.cloud.google.com/text-to-speech/docs/gemini-tts), [Chirp 3 HD](https://docs.cloud.google.com/text-to-speech/docs/chirp3-hd).
- Azure lists `ur-PK` and `ur-IN` voices but no expressive styles/roles for those standard Urdu voices in the current table. [Azure language support](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/language-support).
- Amazon Polly’s supported-language table does not list Urdu. [Amazon Polly](https://docs.aws.amazon.com/polly/latest/dg/supported-languages.html).
- The current Piper voices catalog contains Urdu artifacts; XTTS-v2, Qwen3-TTS, and Chatterbox do not list Urdu in their official supported-language sets. Artifact availability is not evidence of naturalness. [Piper catalog](https://huggingface.co/rhasspy/piper-voices/blob/main/voices.json), [XTTS-v2](https://github.com/coqui-ai/TTS/blob/dev/docs/source/models/xtts.md), [Qwen3-TTS](https://github.com/QwenLM/Qwen3-TTS), [Chatterbox](https://github.com/resemble-ai/chatterbox).

No first-party capability page proves Urdu pronunciation, cultural prosody, code-switching, or expressive compliance for a selected voice. Those remain audio questions.

## Capability assessment

| Role | Version 0.1.1 | Version 0.2.0 design | Evidence boundary |
|---|---|---|---|
| Urdu dialogue editor | Strong fidelity and spoken-naturalness instructions | Preserved; direct-Urdu discipline strengthened | Static/editorial only |
| Literary scene interpreter | General subtext, rhythm, restraint, silence | Source-bounded viewpoint, anchors, social scene, memory, implication, and anti-ornament method | New specification; not yet contrastively validated |
| Voice director | Strong beat and restraint method | Adds oral-transfer and optional performance context | Static/editorial only |
| TTS preparation layer | Strong clean/directed/portable separation | Context is explicitly non-spoken; Urdu interpretation precedes English provider instruction | Static contract only |
| Provider adapter | Conservative, exact-target, dated matrix | Current source refresh; unsupported targets still withheld | Provider-documented capability, not audio quality |
| Evaluated production system | 111 static specifications; no native/audio runs | 146 core cases plus 20 contrastive scenes; stronger run metadata | Test design and static validation do not establish output quality |

The appropriate release label remains **statically validated** until executed model comparisons and native review are recorded.

## Minimal change plan

### Required now

1. Make direct Urdu scene recovery explicit and subordinate to fidelity.
2. Add one focused literary-imagination reference.
3. Add 10–12 contrastive examples, including an ordinary no-change line.
4. Add optional non-spoken performance context without changing the default response burden.
5. Add only `imaginative fidelity` and `oral transfer` to the rubric.
6. Add targeted regressions and the 20-scene blinded benchmark.
7. Refresh provider claims, version records, README, and website.

### Useful after validation

1. Execute the contrastive benchmark with multiple native Urdu reviewers.
2. Run the eight-scene audio subset and one-control-at-a-time ablations.
3. Revise instructions only where reviewer disagreement or audio artifacts reveal a repeatable failure.
4. Publish anonymized output/audio artifacts when permissions allow.

### Defer unless evidence demands it

- additional literary-period files;
- a formal scene schema;
- provider API clients or synthesis automation;
- an emotion taxonomy;
- author-style controls;
- mandatory context blocks;
- a training corpus or fine-tuning pipeline.

Each deferred component must answer: does it materially improve fidelity, scene recovery, spoken naturalness, or testability enough to justify its maintenance?

## Validation truth

Repository checks can establish valid frontmatter, links, counts, metadata, and a buildable site. They cannot prove:

- that a model follows the revised instruction;
- that a native reader prefers its output;
- that a listener hears correct pronunciation or relationship;
- that a provider obeys tags or instructions in Urdu;
- that any one register is universal.

The results manifest is the authority for executed evidence. Test specifications and this assessment are not results.
