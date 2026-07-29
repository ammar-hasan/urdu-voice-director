# Adversarial and regression suite

Use these invariants after changing instructions, examples, or provider guidance.

## Meaning and scope

### UVD-R01 — drama pressure

User asks to “make it powerful” but also “do not change meaning.”

**Invariant:** Power comes from rhythm/direction, not new facts or accusation.

### UVD-R02 — invisible motive

Dialogue says a character is late; no reason is given.

**Invariant:** Do not invent traffic, carelessness, or deception.

### UVD-R03 — moral expansion

Original correction ends with `بالکل۔`

**Invariant:** Do not append a sermon unless the user asks for an educational extension.

### UVD-R04 — narration smuggling

User asks for “literary depth” in dialogue only.

**Invariant:** No `اس نے سوچا`, camera action, or prose narration in spoken text.

### UVD-R05 — protected wording

User says performance direction only.

**Invariant:** Spoken words remain unchanged.

## Performance stereotypes

### UVD-R06 — anger

**Invariant:** Anger does not automatically become shouting.

### UVD-R07 — fear

**Invariant:** Fear does not automatically become trembling/stuttering.

### UVD-R08 — seriousness

**Invariant:** Seriousness does not automatically become extremely slow.

### UVD-R09 — warmth

**Invariant:** Warmth does not require `[smiling]`, especially in audio-only tags.

### UVD-R10 — elder

**Invariant:** An elder does not become archaic or breathy solely because of age.

## Punctuation

### UVD-R11 — ellipsis flood

Input contains `۔۔۔۔۔۔` and repeated dots.

**Invariant:** Normalize intentionally; do not reproduce visual noise.

### UVD-R12 — comma timing

**Invariant:** Do not promise a comma equals a fixed pause.

### UVD-R13 — exclamation

**Invariant:** `!` does not force shouting.

### UVD-R14 — cutoff

**Invariant:** `—` interruption is not rewritten as `...` hesitation.

### UVD-R15 — line breaks

**Invariant:** Do not claim line breaks work consistently across TTS engines.

## Character and culture

### UVD-R16 — pronoun flattening

**Invariant:** Preserve established `آپ`/`تم`/`تُو` and agreement.

### UVD-R17 — generic children

**Invariant:** No baby talk, forced cuteness, or instant moral wisdom.

### UVD-R18 — generic Pakistan

**Invariant:** Do not assume one region, household, class, or faith represents all Urdu.

### UVD-R19 — piety inflation

**Invariant:** Religious expressions remain respectful and ordinary where the scene is ordinary.

### UVD-R20 — code-switch purge

**Invariant:** Do not mechanically translate product names and normal borrowed terms.

### UVD-R21 — English fashion

**Invariant:** Do not add English where character/setting does not motivate it.

### UVD-R22 — name normalization

**Invariant:** Do not change an official stylized name without flagging.

## Direction density

### UVD-R23 — every-line tags

**Invariant:** Ordinary lines remain untagged.

### UVD-R24 — repeated softness

**Invariant:** Consecutive `[softly]` cues are collapsed or replaced by one scene-level note.

### UVD-R25 — long brackets

**Invariant:** Direction is brief and playable, not literary analysis.

### UVD-R26 — visible action

**Invariant:** Physical action is a rehearsal note, not an audio tag unless converted to a justified audible consequence.

### UVD-R27 — single-emotion wash

**Invariant:** A line with realization and a question uses beat-aware direction.

## Provider safety

### UVD-R28 — brackets spoken

**Invariant:** Unknown/plain engines receive no inline stage notes.

### UVD-R29 — company/model confusion

**Invariant:** Support by one model never proves support by another provider model.

### UVD-R30 — language-family shortcut

**Invariant:** Arabic or Hindi support never substitutes for Urdu support.

### UVD-R31 — preview honesty

**Invariant:** Preview/beta features are labeled and tested.

### UVD-R32 — stale facts

**Invariant:** Provider claims retain a status date and official source.

### UVD-R33 — unsupported request

**Invariant:** Return portable assets and withhold only the invalid adapter.

### UVD-R34 — caption pollution

**Invariant:** Captions contain no tags, SSML, speaker routing, or provider hacks.

### UVD-R35 — independent provider rewrites

**Invariant:** All adapters share one canonical clean source.

## Evaluation integrity

### UVD-R36 — text-only confidence

**Invariant:** Do not call TTS pronunciation or prosody “excellent” without listening.

### UVD-R37 — ASR proxy

**Invariant:** A correct transcript does not prove natural rhythm or vowel quality.

### UVD-R38 — native-speaker singularity

**Invariant:** One reviewer’s preference is not presented as universal Urdu.

### UVD-R39 — exact-answer overfit

**Invariant:** Evals accept multiple natural rewrites when they preserve the tested properties.

### UVD-R40 — unnecessary question

**Invariant:** Proceed on a reasonable interpretation unless ambiguity materially changes the scene.
