# Sample scene — the broken pen-box

Sample voices: دادی=Sara, ماریہ=Reva

Generated with skill version: 0.3.0

References loaded: [spoken Urdu](../skills/urdu-voice-director/references/spoken-urdu.md), [relationships and register](../skills/urdu-voice-director/references/relationships-and-register.md), [literary dialogue](../skills/urdu-voice-director/references/literary-dialogue.md), [hesitation and pauses](../skills/urdu-voice-director/references/hesitation-and-pauses.md), and [provider capabilities](../skills/urdu-voice-director/references/provider-capabilities.md).

## Source

Original scene written for this showcase.

```text
دادی: یہ قلمدان... تمہارے نانا کا آخری تحفہ تھا۔
ماریہ: دادی... وہ مجھ سے گر گیا تھا۔ میں چھپانا چاہتی تھی، مگر جھوٹ بولتے ہوئے رات بھر نیند نہیں آئی۔
دادی: ادھر آؤ۔
ماریہ: آپ... آپ مجھے معاف نہیں کریں گی نا؟
دادی: قلمدان تو ٹوٹ گیا بیٹا... مگر سچ بولنے کی ہمت سلامت رہی، اور وہ اس قلمدان سے کہیں بڑی چیز ہے۔
```

## Decision

- Mode: fictional family dialogue with a child.
- Protected: the accident, attempted concealment, sleepless night, last gift from نانا, `آپ` from child to grandmother, `تم`/`بیٹا` from grandmother to child, and the source’s one moral comparison.
- No refinement: the child’s reasoning is already concrete and sequential; the closing line does not need another lesson.
- Direction follows the information sequence. It does not add punishment, tears, grief, or forgiveness beyond the words.

## A. Clean spoken Urdu

```text
دادی: یہ قلمدان... تمہارے نانا کا آخری تحفہ تھا۔
ماریہ: دادی... وہ مجھ سے گر گیا تھا۔ میں چھپانا چاہتی تھی، مگر جھوٹ بولتے ہوئے رات بھر نیند نہیں آئی۔
دادی: ادھر آؤ۔
ماریہ: آپ... آپ مجھے معاف نہیں کریں گی نا؟
دادی: قلمدان تو ٹوٹ گیا بیٹا... مگر سچ بولنے کی ہمت سلامت رہی، اور وہ اس قلمدان سے کہیں بڑی چیز ہے۔
```

## B. Directed rehearsal script

Bracketed cues are non-spoken.

```text
دادی: [name the object, then let “آخری تحفہ” carry its stated weight] یہ قلمدان... تمہارے نانا کا آخری تحفہ تھا۔
ماریہ: [accident → intention to hide → consequence; do not add crying] دادی... وہ مجھ سے گر گیا تھا۔ میں چھپانا چاہتی تھی، مگر جھوٹ بولتے ہوئے رات بھر نیند نہیں آئی۔
دادی: [allow the confession to settle; then a simple invitation] ادھر آؤ۔
ماریہ: [keep the repeated “آپ”; the question asks for reassurance] آپ... آپ مجھے معاف نہیں کریں گی نا؟
دادی: [acknowledge the broken object, then make the stated contrast plainly] قلمدان تو ٹوٹ گیا بیٹا... مگر سچ بولنے کی ہمت سلامت رہی، اور وہ اس قلمدان سے کہیں بڑی چیز ہے۔
```

## C. Portable synthesis plan

| Speaker | Canonical utterance | Non-spoken delivery note | Pause/focus |
|---|---|---|---|
| دادی | یہ قلمدان... تمہارے نانا کا آخری تحفہ تھا۔ | object → last gift | source beat after `قلمدان` |
| ماریہ | دادی... وہ مجھ سے گر گیا تھا۔ میں چھپانا چاہتی تھی، مگر جھوٹ بولتے ہوئے رات بھر نیند نہیں آئی۔ | preserve the child’s three-step confession | `مگر` is the turn in the thought |
| دادی | ادھر آؤ۔ | simple invitation after listening | short pre-turn beat |
| ماریہ | آپ... آپ مجھے معاف نہیں کریں گی نا؟ | do not smooth the repeated address | `نا` seeks an answer |
| دادی | قلمدان تو ٹوٹ گیا بیٹا... مگر سچ بولنے کی ہمت سلامت رہی، اور وہ اس قلمدان سے کہیں بڑی چیز ہے۔ | loss → contrast; no sermon expansion | focus `سلامت رہی` |

## D. Eleven v3 adapter

Target: ElevenLabs Text to Speech API / model `eleven_v3` / Urdu inferred from input / showcase voices routed per speaker above. Documentation checked 2026-07-31. V3 documents an open-ended audio-tag mechanism; these detailed cues translate the rehearsal actions without adding reaction sounds or new facts. Exact Urdu response requires listening.

```text
Voice: دادی
[quiet gravity, naming the object without accusation] یہ قلمدان... تمہارے نانا کا آخری تحفہ تھا۔
Voice: ماریہ
[a careful confession in three steps] دادی... وہ مجھ سے گر گیا تھا۔ میں چھپانا چاہتی تھی، مگر جھوٹ بولتے ہوئے رات بھر نیند نہیں آئی۔
Voice: دادی
[short pause, then a simple invitation] ادھر آؤ۔
Voice: ماریہ
[uncertain but restrained, keeping the repeated address] آپ... آپ مجھے معاف نہیں کریں گی نا؟
Voice: دادی
[warm and plain, making the contrast without preaching] قلمدان تو ٹوٹ گیا بیٹا... مگر سچ بولنے کی ہمت سلامت رہی، اور وہ اس قلمدان سے کہیں بڑی چیز ہے۔
```

## Checks

- Artifact A is source-identical; age, kinship, pronouns, agreement, and the religious/moral boundary are preserved.
- Removing the documented provider tag from D yields artifact A word for word.
- The repeated `آپ` is a hesitation in the source; no extra stammer or filler is invented.
- The tags carry the useful rehearsal distinctions; none adds crying, punishment, grief, or forgiveness.
- Listening test: the pre-turn pause must feel like conversational space, and the closing cue must remain plain rather than sermon-like.
