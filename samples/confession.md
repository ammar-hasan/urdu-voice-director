# Sample scene — the broken pen-box

Sample voices: دادی=Sara, ماریہ=Reva

## Source

Original scene written for this showcase.

```text
دادی: یہ قلمدان... تمہارے نانا کا آخری تحفہ تھا۔
ماریہ: دادی... وہ مجھ سے گر گیا تھا۔ میں چھپانا چاہتی تھی، مگر جھوٹ بولتے ہوئے رات بھر نیند نہیں آئی۔
دادی: ادھر آؤ۔
ماریہ: آپ... آپ مجھے معاف نہیں کریں گی نا؟
دادی: قلمدان تو ٹوٹ گیا بیٹا... مگر سچ بولنے کی ہمت سلامت رہی، اور وہ اس قلمدان سے کہیں بڑی چیز ہے۔
```

## Scene card

- Speakers: دادی (grandmother, elder) speaking to ماریہ (her granddaughter, about ten); intimate household relationship, private moment.
- Situation: a قلمدان — the last gift from the late grandfather (نانا) — has been broken; ماریہ let it fall, intended to hide it, and has come to confess after a sleepless night.
- Protected facts and turns: all five turns and their order; the pen-box as نانا's آخری تحفہ; the fall was an accident (`مجھ سے گر گیا تھا`); the intent to hide and the lie's cost (`رات بھر نیند نہیں آئی`); دادی's call `ادھر آؤ`; ماریہ's fear of not being forgiven; دادی's closing comparison — the broken object versus the intact courage to tell the truth.
- Established register: ماریہ → دادی with `آپ` / `کریں گی` (respectful); دادی → ماریہ with `تم` / `بیٹا` (warm elder-to-child). Both are consistent in the source and preserved.
- Established anchors: the named object قلمدان and the explicit memory link to the late نانا; no scenery, motives, or memories beyond these are invented.
- Unresolved: locale (ur-PK vs ur-IN not established), ElevenLabs voice selection, the physical space.
- Output purpose: directed TTS sample for ElevenLabs Eleven v3 (Urdu documented for this model; tag compliance remains a listening-test hypothesis).
- Viewpoint: shared, but the confession is ماریہ's scene; دادی's grief stays inside what she actually says.

## Turn audit

1. دادی: یہ قلمدان... تمہارے نانا کا آخری تحفہ تھا۔ — **Direction only.** Words are natural, correctly weighted, and the open beat after `قلمدان` already does work. Delivery is easy to misread as anger; it is grief and gravity, not accusation.
2. ماریہ: دادی... وہ مجھ سے گر گیا تھا۔ میں چھپانا چاہتی تھی، مگر جھوٹ بولتے ہوئے رات بھر نیند نہیں آئی۔ — **Direction only.** The child already reasons in short, concrete steps (accident → intent to hide → cost). Three distinct beats inside one turn must not be flattened under one emotion.
3. دادی: ادھر آؤ۔ — **Direction only.** Two words whose entire meaning depends on tone: a calm invitation, not a summons to punishment.
4. ماریہ: آپ... آپ مجھے معاف نہیں کریں گی نا؟ — **Neither / light direction.** The stammered `آپ... آپ` and the alignment-seeking `نا` already carry the fear; only a cue guarding against overplaying is warranted.
5. دادی: قلمدان تو ٹوٹ گیا بیٹا... مگر سچ بولنے کی ہمت سلامت رہی، اور وہ اس قلمدان سے کہیں بڑی چیز ہے۔ — **Direction only.** The wording is complete and un-sermonized; the pivot at `مگر` needs a reflective beat and warmth, not swelling emotion. No word changed.

No turn required refinement: the source is already speakable, age-appropriate, and register-consistent. Artifact A is therefore identical to the source.

## A. Clean spoken Urdu

```text
دادی: یہ قلمدان... تمہارے نانا کا آخری تحفہ تھا۔
ماریہ: دادی... وہ مجھ سے گر گیا تھا۔ میں چھپانا چاہتی تھی، مگر جھوٹ بولتے ہوئے رات بھر نیند نہیں آئی۔
دادی: ادھر آؤ۔
ماریہ: آپ... آپ مجھے معاف نہیں کریں گی نا؟
دادی: قلمدان تو ٹوٹ گیا بیٹا... مگر سچ بولنے کی ہمت سلامت رہی، اور وہ اس قلمدان سے کہیں بڑی چیز ہے۔
```

## B. Directed rehearsal script

Bracketed notes are non-spoken rehearsal cues.

```text
دادی: [quietly; the memory in the words — grief and gravity, not accusation] یہ قلمدان... [brief beat; lets the object be named before its weight] تمہارے نانا کا آخری تحفہ تھا۔

ماریہ: [reluctant; the confession costs her] دادی... [the accident comes out quickly, small] وہ مجھ سے گر گیا تھا۔ [harder to say; shame, not excuses] میں چھپانا چاہتی تھی، [the turn: why she is really here] مگر جھوٹ بولتے ہوئے رات بھر نیند نہیں آئی۔

دادی: [a short silence first; then low, calm — an invitation, not anger] ادھر آؤ۔

ماریہ: [small voice; fear already in the stammer, do not add tears] آپ... آپ مجھے معاف نہیں کریں گی نا؟

دادی: [matter-of-fact about the loss; acknowledges it without dwelling] قلمدان تو ٹوٹ گیا بیٹا... [reflective pause; the thought settles] [warm, plain certainty — not a sermon] مگر سچ بولنے کی ہمت سلامت رہی، اور وہ اس قلمدان سے کہیں بڑی چیز ہے۔
```

## C. Portable synthesis plan

| Turn | Speaker | Clean spoken text | Delivery note (not spoken) | Pause/beat | Emphasis |
|---|---|---|---|---|---|
| 1 | دادی | یہ قلمدان... تمہارے نانا کا آخری تحفہ تھا۔ | quiet gravity; memory carried in tone, accusation absent | open beat after `قلمدان` | `آخری` |
| 2 | ماریہ | دادی... وہ مجھ سے گر گیا تھا۔ میں چھپانا چاہتی تھی، مگر جھوٹ بولتے ہوئے رات بھر نیند نہیں آئی۔ | reluctance → quick, small accident → shame at the intent to hide → the real reason she confessed | reluctance beat after `دادی`; clause boundary at `مگر` is the turn | `رات بھر` |
| 3 | دادی | ادھر آؤ۔ | low, calm invitation after a short silence; no anger | preceded by a conversational beat | — |
| 4 | ماریہ | آپ... آپ مجھے معاف نہیں کریں گی نا؟ | small, frightened voice; the stammer already carries it — stay restrained | stammer beat inside `آپ... آپ` | `نا` seeks reassurance |
| 5 | دادی | قلمدان تو ٹوٹ گیا بیٹا... مگر سچ بولنے کی ہمت سلامت رہی، اور وہ اس قلمدان سے کہیں بڑی چیز ہے۔ | loss stated plainly → reflective pivot → warm, plain certainty; no sermon | reflective pause at the ellipsis before `مگر` | `سلامت رہی`, then `کہیں بڑی` |

## D. Eleven v3 adapter

Target: ElevenLabs / Eleven v3 / locale unresolved / voice unresolved. Support status: Urdu documented for Eleven v3; inline audio tags below are part of the provider request payload, not the utterance or captions. Urdu tag compliance is a hypothesis until heard with the selected voice. Spoken words are identical to artifact A.

```text
Voice: دادی
[quietly] یہ قلمدان... تمہارے نانا کا آخری تحفہ تھا۔

Voice: ماریہ
[hesitates] دادی... وہ مجھ سے گر گیا تھا۔ میں چھپانا چاہتی تھی، مگر جھوٹ بولتے ہوئے رات بھر نیند نہیں آئی۔

Voice: دادی
ادھر آؤ۔

Voice: ماریہ
[uncertain] آپ... آپ مجھے معاف نہیں کریں گی نا؟

Voice: دادی
[calmly] قلمدان تو ٹوٹ گیا بیٹا... مگر سچ بولنے کی ہمت سلامت رہی، اور وہ اس قلمدان سے کہیں بڑی چیز ہے۔
```

## Restraint notes

- No source words were changed. The turn audit found every turn already natural, age-appropriate, and register-consistent; refinement would have been activity for its own sake.
- The emotional peak (turn 5) is carried by the reflective pause at `مگر` and plain, warm delivery — no added lines, no swelling music cues, no tears directed anywhere.
- دادی's grief for نانا stays inside the single word `آخری`; no memory speech, backstory, or symbolism was invented for her.
- ماریہ's stammer `آپ... آپ` was preserved as written; no `اوہ`, apology, or extra confession turn was added — the source contains none.
- دادی's closing line was not extended into a lesson; its single comparison is the whole moral and adding to it would be sermon inflation.
- Only four documented v3 tags (`[quietly]`, `[hesitates]`, `[uncertain]`, `[calmly]`) were used across five turns; turn 3 carries its meaning in wording and needs none. Remove any tag the selected voice overacts or vocalizes.
- Locale (ur-PK/ur-IN) and the ElevenLabs voice are unresolved; both materially affect accent and expression and must be fixed and listening-tested with a native Urdu reviewer before production.
- `Voice:` labels are routing metadata and must not enter the provider text field; caption copy is artifact A verbatim, with no tags or markup.
