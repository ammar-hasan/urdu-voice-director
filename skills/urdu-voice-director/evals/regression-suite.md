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

### UVD-R41 — default turn preservation

**Invariant:** Refinement does not add spoken turns; expansions are separately labeled authorial adaptations.

### UVD-R42 — unknown gender

**Invariant:** Unspecified gender never becomes gendered morphology, title, or voice assignment without evidence.

### UVD-R43 — religious-form preservation

**Invariant:** Each speaker’s source honorific choice remains intact unless change is authorized.

### UVD-R44 — bilingual identity

**Invariant:** Full-turn code-switching is not reduced merely for synthesis convenience.

### UVD-R45 — provider-layer taxonomy

**Invariant:** Canonical utterance, provider request payload, inline control, separate instruction, and caption are named distinctly.

## Literary fidelity and oral transfer

### UVD-R46 — unsupported scenery

**Invariant:** Scene recovery never adds an object, weather, action, sound, or setting detail absent from the source or authorized context.

### UVD-R47 — invented interiority

**Invariant:** No internal thought, motive, memory, or realization is invented to make a line feel literary.

### UVD-R48 — symbolic inflation

**Invariant:** An ordinary source object is not labeled or rewritten as a symbol without source support.

### UVD-R49 — source ambiguity

**Invariant:** Ambiguous motive, irony, relationship, emotion, locale, or outcome remains ambiguous unless context resolves it.

### UVD-R50 — direct-Urdu source

**Invariant:** The Urdu source remains canonical; an English paraphrase or back-translation never replaces it as the semantic reference.

### UVD-R51 — viewpoint

**Invariant:** Scene interpretation does not give a speaker or narrator knowledge outside the established viewpoint.

### UVD-R52 — concrete anchor

**Invariant:** When the source contains a useful concrete anchor, the result protects it instead of replacing it with abstract emotion or an invented detail.

### UVD-R53 — implication

**Invariant:** Supported subtext remains playable and implicit; it is not explained inside the dialogue.

### UVD-R54 — meaningful silence

**Invariant:** A source-supported absent answer or withheld statement is not filled with new speech.

### UVD-R55 — ordinary line

**Invariant:** An ordinary line stays ordinary when scene, character, and dramatic function require no heightened treatment.

### UVD-R56 — narration boundary

**Invariant:** Narration, speech frames, visible action, and temporal context remain outside the canonical utterance unless the source quotes them as speech.

### UVD-R57 — named-author imitation

**Invariant:** The skill never imitates or offers a preset for a named author; it may discuss source-bounded craft qualities.

### UVD-R58 — ornament is not quality

**Invariant:** Persianised, classical, poetic, or ornate diction is not introduced as an automatic improvement.

### UVD-R59 — context isolation

**Invariant:** Optional `Context`, `Audible action`, and `Do not add` fields never enter canonical speech, captions, or an undifferentiated provider text field.

### UVD-R60 — Urdu-derived provider direction

**Invariant:** An English provider instruction is derived from the Urdu scene interpretation, not from a generic English emotion rewrite.

### UVD-R61 — Roman Urdu reconstruction

**Invariant:** Roman Urdu is interpreted through speaker, relationship, setting, and surrounding turns before script conversion; ambiguous forms are not resolved letter by letter.

### UVD-R62 — designed orality

**Invariant:** Dialogue uses selected speech features for a function; it does not accumulate transcript noise or make every character generically colloquial.

### UVD-R63 — cultural concept preservation

**Invariant:** A relationship term, social act, religious form, or culturally specific implication is not replaced by a generic English emotion category.

### UVD-R64 — memory boundary

**Invariant:** Memory or migration is used only when the source establishes it; a place name, old object, or absence alone does not authorize nostalgia or trauma.

### UVD-R65 — over-engineering rejection

**Invariant:** A proposed output field, taxonomy, file, or adapter is rejected if it does not materially improve fidelity, scene recovery, spoken naturalness, provider safety, or testability.

## Pronunciation, delivery-range, and treatment regressions

### UVD-R66 — consonant substitution classification

**Invariant:** `ڑ/ر`, `ٹ/ت`, `ڈ/د`, and lost aspiration are treated as consonant-identity failures; vowel diacritics are never claimed to create the missing consonant.

### UVD-R67 — ambiguity coverage

**Invariant:** A pronunciation audit identifies every materially ambiguous written form and prepares a complete marked candidate even when human context looks decisive; production adoption remains a baseline-tested, exact-target decision.

### UVD-R68 — grounded is not emotionally neutral

**Invariant:** Anti-invention rules do not flatten affect supported by words, dramatic function, interaction, attribution, context, or brief; grounded delivery may be warm, urgent, playful, angry, fearful, or joyful when evidence supports it.

### UVD-R69 — production treatment does not create facts

**Invariant:** Restrained, grounded, and heightened range plus naturalistic or stylized treatment change production choices, not facts, motives, memories, relationships, or canonical wording.

### UVD-R70 — stylized event boundary

**Invariant:** A stylized or dramatic brief does not authorize a laugh, sob, scream, exertion, applause, catchphrase, or other non-lexical event unless the source or production brief supplies it.

### UVD-R71 — implied affect is playable, not factual

**Invariant:** Affect supported by wording, dramatic function, interaction, or context may shape delivery even when no emotion is named; a plausible but non-unique reading is labeled as a performance hypothesis rather than asserted as character psychology.

### UVD-R72 — stylization is orthogonal to range

**Invariant:** Stylized treatment may be restrained, grounded, or heightened; it is never treated as inherently louder, broader, or more emotional than naturalistic treatment.

### UVD-R73 — text scores do not claim audio realization

**Invariant:** A text packet scores consonant-risk handling and written performance-direction fit; only exact-voice listening evidence scores realized consonants or audible delivery.

### UVD-R74 — required reference receipt

**Invariant:** A run identifies its performance form and issues, opens every matching routed reference before acting, and records the filenames in working notes.

### UVD-R75 — canonical plus IPA duplication

**Invariant:** Inline IPA replaces the canonical token only in the provider pronunciation copy; the payload never sends the spelling followed by its IPA.

### UVD-R76 — pause-control stack

**Invariant:** Punctuation, audio tags, segmentation, turn gaps, and renderer padding are inventoried and tested separately rather than stacked blindly at one boundary.

### UVD-R77 — same-speaker continuity

**Invariant:** One speaker’s continuous thought remains one utterance unless routing, synchronization, or a verified provider constraint requires a split.

### UVD-R78 — ASR verdict

**Invariant:** A successful transcript is diagnostic evidence only; it never establishes correct or stable Urdu pronunciation, pause function, or delivery.

### UVD-R79 — production audit boundary

**Invariant:** Repository/package validation does not stand in for auditing the actual production adapter; hard validator failures block release and heuristic warnings receive explicit review.
