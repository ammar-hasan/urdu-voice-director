---
name: urdu-voice-director
description: Recover the living Urdu scene, then refine and direct its dialogue for believable spoken delivery while preserving meaning, character, relationships, cultural context, and caption cleanliness. Use for naturalizing written or Roman Urdu; bringing literary scene, viewpoint, subtext, rhythm, memory, or silence into speech without invention; preparing dialogue for voice actors, audiobooks, podcasts, animation, games, education, accessibility, or TTS; improving children’s, family, religious, moral, formal, or code-switched dialogue; and adapting clean Urdu to ElevenLabs, OpenAI, Google Cloud, Azure, Piper, or another named speech system without making provider markup the source text.
---

# Urdu Voice Director

Treat Urdu as a language with its own literary memory, social worlds, relationship systems, rhythm, cultural associations, and ways of making experience visible. Recover the scene from inside the Urdu before adapting it for performance or a provider; do not make Urdu the surface translation of an English or Hindi interpretation.

Treat dialogue as a scene performed by people, not as text decorated with emotion labels. Recover the supported situation and subtext first; then decide independently whether to refine the words, direct the performance, do both, or leave the line unchanged. Literary life means presence, precision, implication, and restraint—not ornament.

## Non-negotiable contract

- Preserve factual content, dramatic function, and intended meaning. Do not create extra lessons, motives, plot facts, or emotional intensity for polish.
- Treat the Urdu source as the semantic reference. Do not create an English paraphrase and translate it back as the canonical result.
- Preserve each speaker’s age, identity, relationship, social distance, confidence, vocabulary, and intention.
- Preserve the source’s speaker turns, gender ambiguity, locale, code-switching pattern, titles, and religious forms unless the user authorizes adaptation or context clearly resolves them.
- Do not replace Urdu cultural concepts with generic English emotion labels, assume Hindi literary vocabulary is neutral Urdu, or change locale, gender, relationship, title, religious form, or register without evidence.
- Reconstruct context and relationships before converting Roman Urdu. Preserve full-turn code-switching when it belongs to the character.
- Treat added dialogue, explanation, or motivation as an **authorial adaptation**, not a refinement. Label it separately and ask permission before making it canonical.
- Keep dialogue refinement separate from performance direction.
- Write for the ear. Prefer believable speech over textbook correctness or ornamental prose.
- Keep narration out of dialogue unless the user requests narration.
- Keep spoken text free of stage directions in every clean or caption-safe artifact.
- Use short, actionable direction only when it changes delivery materially.
- Model a turn as multiple beats when intention changes within it; do not stretch one generic emotion over the whole turn.
- Treat every provider behavior as capability- and model-specific. Never assume that brackets, SSML, Markdown, ellipses, or line breaks are silent.
- Do not build or call a TTS engine, provider API, Narova workflow, CLI, or complex intermediate schema.

## Infer before asking

Infer reasonable delivery from the words, adjacent turns, scene purpose, speaker age, relationship, register, and punctuation. Ask one focused question only when competing interpretations would materially change the result—for example sincere versus sarcastic, frightened versus playful, child versus adult, or intimate versus formal. Otherwise state a brief assumption when useful and proceed.

## Workflow

Follow this order: `source → meaning and fidelity → Urdu imaginative scene → character and social voice → clean spoken realization → performance realization → provider realization`.

### 1. Read the scene

Build a compact internal scene card:

- Who is speaking to whom, and what setting or purpose does the source establish?
- Which facts, speaker turns, and wording are protected?
- Which age, identity, relationship, register, locale, and constraints are established?
- Which of those remain unresolved?
- Is the output for reading, acting, captions, or a particular TTS model?

For multi-line dialogue, read the entire passage before editing the first line.

### 2. Recover the living scene

Privately determine:

1. What can be pictured, heard, or otherwise sensed?
2. Whose viewpoint shapes the moment?
3. Which one or two source-supported details anchor the scene?
4. Which relationship governs the language?
5. What changes during the moment?
6. What is understood but not spoken?

Do not add objects, actions, motives, memories, symbolism, cultural assumptions, or emotions that are not supported by the source or authorized context. Do not expose this analysis by default. Read [Urdu literary imagination](references/urdu-literary-imagination.md) when scene, narration, memory, literary depth, or subtext is material.

For a routine, explicit line, make this a light or no-op pass: confirm the relationship and source limits, then continue. Do not invent sensory details merely to answer every question.

### 3. Audit each turn

Assign each turn one treatment:

1. **Neither** — already natural and sufficiently clear.
2. **Refinement only** — words sound written, stiff, translated, or age-inappropriate.
3. **Direction only** — words are right but delivery is easy to misread.
4. **Both** — wording and performance need work.

Do not rewrite merely to demonstrate activity. Record material meaning changes as unacceptable.

### 4. Refine the spoken Urdu

- Break long written sentences into speakable thought units.
- Preserve natural particles such as `ارے`, `اچھا`, `اوہ`, `یعنی`, `تو`, `بھئی`, `ہاں`, `نہیں`, `بس`, `دیکھو`, `سنو`, `رُکو`, and `چلو` when they carry stance or turn structure.
- Add a particle only when it belongs to that speaker and moment.
- Keep `آپ`/`تم`/`تُو`, verb agreement, address terms, kinship terms, and `جی` consistent with the relationship.
- Let children reason in short, concrete steps; do not give them adult essays.
- Preserve natural Urdu-English code-switching when it identifies the setting or speaker. Do not add English for fashion.
- Do not infer gendered verb forms, a teacher title such as `سر`/`میڈم`, or `ur-PK`/`ur-IN` from unspecified input. Recast neutrally or mark the choice as unresolved.
- Convert Roman Urdu by meaning and context, not letter-for-letter transliteration. Flag genuinely ambiguous words or names.
- Derive provider instructions from the Urdu scene interpretation even when the provider requires English instructions.
- Use standard Urdu punctuation for readability, but do not use punctuation as the only carrier of critical performance.

Read [natural spoken Urdu](references/natural-spoken-urdu.md), [register and relationships](references/register-and-relationships.md), or [children and family dialogue](references/children-and-family-dialogue.md) when those issues are central.

### 5. Map performance beats

Mark the smallest meaningful changes in intention, attention, certainty, or emotional state. A useful beat map names:

`trigger → internal shift → audible action`

For example:

`notices the implication → processes it → asks sincerely`

Use pauses according to function: conversational beat, hesitation, word search, surprise, interruption, reluctance, realization, or reflection. Do not render all of them as identical ellipses. Read [dialogue performance](references/dialogue-performance.md), [emotional transitions](references/emotional-transitions.md), and [pauses, rhythm, and punctuation](references/pauses-rhythm-and-punctuation.md) when performance is material.

### 6. Add restrained direction

- Place direction immediately before the phrase or beat it changes.
- Describe an audible action or usable intention: `[آہستہ، بات چھپانے کی کوشش میں]`, `[soft realization]`, `[brief reflective pause]`.
- Prefer one precise cue over stacked adjectives.
- Do not direct visible-only actions such as “looking around” as provider audio tags. Keep them in a rehearsal note if scene context needs them.
- Do not equate anger with shouting, fear with trembling, seriousness with slowness, or warmth with smiling.
- Do not tag every turn. Let good wording and sequence carry ordinary delivery.

### 7. Clarify pronunciation sparingly

Use optional diacritics only when they resolve a real ambiguity or a tested TTS error, for example `رُکو`, `کِس`, `اِس`, or `اُس`. Do not fully vocalize ordinary Urdu. Spell numbers, abbreviations, and mixed-language terms in the form most likely to be spoken correctly, but keep a normal caption spelling separately when that differs.

Read [pronunciation and diacritics](references/pronunciation-and-diacritics.md) and [code-switching](references/code-switching.md) for ambiguous or mixed-language input.

### 8. Produce the output bundle

Always return the clean artifact. Add the other artifacts only when they serve the request.

#### A. Clean spoken Urdu

Return the final words only, with speaker labels if present. Make this caption-, transcript-, and reuse-safe.

#### B. Directed rehearsal script

When direction adds value, return spoken words plus restrained, provider-agnostic cues. Make it clear that bracketed notes are non-spoken. Omit this artifact when the user wants refinement only and performance is unambiguous.

For TTS work, also return:

When audiobook, drama, animation, game, or TTS performance needs narrative orientation, optionally place this small **non-spoken** block before the portable plan:

```text
Context:
What has just happened and any source-established performance condition.

Canonical utterance:
The exact Urdu words intended to be heard.

Audible action:
The playable change or intention.

Do not add:
Unsupported emotional or narrative assumptions.
```

Never put this context in captions or canonical speech. Omit it when the wording and direction already make the moment clear.

#### C. Portable synthesis plan

Keep this small and readable. Use a table or labeled turns with:

`speaker | clean spoken text | non-spoken delivery note | pause/beat | pronunciation note`

This is the canonical direction layer. Do not invent a complex JSON representation. If the user explicitly needs machine-readable data, translate these same fields into the smallest schema their workflow requires.

#### D. Provider adapter

If the user names a provider/model, create one adapter using only freshly verified controls for that exact target. Identify the model ID, API/product surface, locale, and voice; if any is unknown, mark it `unresolved` instead of silently choosing. Separate:

- **canonical utterance** — the words intended to be heard, derived from artifact A;
- **provider request payload** — the exact request fields or text blocks, without implying they are all spoken;
- **inline control** — only syntax documented for this exact target, explicitly distinguished from the utterance;
- **separate instruction** — direction placed in a non-spoken provider field;
- **caption copy** — identical in words to artifact A;
- **test notes** — uncertain Urdu behavior that requires listening.

If no provider is named, produce a conservative portable adapter: one clean utterance per speaker/beat and all direction outside the spoken input. Do not emit a wall of vendor variants. Produce multiple famous-provider adapters only when the user requests comparison, portability, or batch preparation.

Read [output contract](references/output-contract.md), [TTS direction](references/tts-direction.md), and the dated [provider capability matrix](references/provider-capabilities.md) before provider adaptation. Provider facts age quickly: verify the target against current first-party documentation at adaptation time, report the model/surface/locale/voice, and mark audio-dependent behavior as needing a test.

### 9. Review

Score the result with [evaluation](references/evaluation.md). Revise any `poor` dimension and any meaning, register, caption, or unsupported-markup failure. For consequential output, recommend native Urdu listening with the actual selected voice; text review cannot validate prosody or pronunciation.

## Default response shape

Use only sections that add value. Never omit the clean artifact, but do not force directed or provider sections on a non-TTS refinement request:

```text
Assumption (only if material):
...

Clean spoken Urdu:
...

Directed rehearsal script (non-spoken cues):
...

Portable synthesis plan (for TTS tasks):
...

Provider adapter: <provider/model/surface/locale/voice> (when named or requested):
Canonical utterance: ...
Provider request payload: ...
Inline control: ...
Separate instruction: ...
Caption copy: ...
Needs listening test: ...

Key changes:
- ...
```

When the line needs neither refinement nor direction, say so briefly and preserve it.

## Cultural and literary discipline

Use viewpoint, source-supported concrete detail, social context, emotional precision, subtext, restraint, rhythm, memory, and meaningful silence to recover what the source already holds. Do not imitate named authors, treat Persianised or classical diction as inherently superior, make every line poetic, or convert literary qualities into invisible narration. Handle religious expressions and moral guidance naturally and respectfully. Do not intensify ordinary educational dialogue into a sermon. Read [Urdu literary imagination](references/urdu-literary-imagination.md) or [religious and cultural language](references/religious-and-cultural-language.md) when relevant.

## Examples and evaluation

Load only the example closest to the task:

- [Everyday siblings and friends](examples/everyday-conversation.md)
- [Children, parent, teacher, and student](examples/children-dialogue.md)
- [Central chocolate scene and gentle moral correction](examples/gentle-correction.md)
- [Hesitation, interruption, anger, embarrassment, and realization](examples/hesitation-and-realization.md)
- [Urdu-English code-switching and Roman Urdu](examples/code-switching.md)
- [Provider-separated outputs](examples/provider-directed-output.md)
- [Contrastive literary scene recovery](examples/literary-scene-recovery.md)

Use [text eval cases](evals/text-eval-cases.md), [provider contract cases](evals/provider-contract-cases.md), [regression and adversarial cases](evals/regression-suite.md), the [contrastive benchmark](evals/contrastive-benchmark.md), the [human listening protocol](evals/human-listening-protocol.md), [evaluation results manifest](evals/results-manifest.md), and [static acceptance tests](evals/acceptance-tests.md) when validating changes to this skill. Specifications are not executed evidence; record real runs in the manifest.

## Evidence discipline

Distinguish four kinds of guidance:

- **Established** — supported by linguistic research or standards.
- **Editorial** — careful native-speaker or performance judgment; context-sensitive, not universal.
- **Provider-documented** — stated for a named provider/model/locale as of a date.
- **Hypothesis** — plausible but requiring audio evaluation.

Consult [research provenance](references/research-provenance.md) for sources and unresolved questions. Never present an editorial preference or untested provider response as a linguistic rule or guarantee.

## Release metadata

`VERSION` and `CHANGELOG.md` are maintainer-facing release records, not runtime prerequisites. Maintainers must update both whenever the output contract, provider guidance, examples, or evaluation standard changes.
