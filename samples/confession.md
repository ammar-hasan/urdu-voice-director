# Sample scene — the broken pen-box

Sample voices: دادی=Sara, ماریہ=Reva

Generated with skill version: 0.3.0

References loaded: [spoken Urdu](../skills/urdu-voice-director/references/spoken-urdu.md), [literary dialogue](../skills/urdu-voice-director/references/literary-dialogue.md), [relationships and register](../skills/urdu-voice-director/references/relationships-and-register.md), [conversational prosody](../skills/urdu-voice-director/references/conversational-prosody.md), [hesitation and pauses](../skills/urdu-voice-director/references/hesitation-and-pauses.md), and [provider capabilities](../skills/urdu-voice-director/references/provider-capabilities.md).

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

- Mode: fictional, everyday family dialogue.
- Protected: every fact and turn; `دادی` and `نانا`; ماریہ’s respectful `آپ`; دادی’s `تم` agreement and `بیٹا`; the dropped قلمدان, attempted concealment, sleepless night, request for forgiveness, and the closing comparison.
- No refinement: the source already uses clear spoken thought units, purposeful repetition, and one complete lesson. The source does not establish ماریہ’s age, so the direction does not call her a child.
- Direction follows the audible sequence only: identifying the object, stating its significance, confessing what happened and what followed, inviting her closer, asking for forgiveness, and contrasting the broken object with intact courage.

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
دادی: [identify the قلمدان; after the source beat, state exactly what it was] یہ قلمدان... تمہارے نانا کا آخری تحفہ تھا۔
ماریہ: [address دادی, admit what happened, then state the attempted concealment and sleepless night in sequence] دادی... وہ مجھ سے گر گیا تھا۔ میں چھپانا چاہتی تھی، مگر جھوٹ بولتے ہوئے رات بھر نیند نہیں آئی۔
دادی: [simple invitation] ادھر آؤ۔
ماریہ: [keep the repeated “آپ” as the hesitation already present; then ask for the answer] آپ... آپ مجھے معاف نہیں کریں گی نا؟
دادی: [acknowledge what broke; at “مگر”, make the source’s contrast with the courage that remained] قلمدان تو ٹوٹ گیا بیٹا... مگر سچ بولنے کی ہمت سلامت رہی، اور وہ اس قلمدان سے کہیں بڑی چیز ہے۔
```

## C. Portable synthesis plan

| Speaker | Canonical utterance | Non-spoken delivery note | Pause/focus |
|---|---|---|---|
| دادی | یہ قلمدان... تمہارے نانا کا آخری تحفہ تھا۔ | object → stated significance | preserve the source beat after `قلمدان` |
| ماریہ | دادی... وہ مجھ سے گر گیا تھا۔ میں چھپانا چاہتی تھی، مگر جھوٹ بولتے ہوئے رات بھر نیند نہیں آئی۔ | address → admission → attempted concealment → sleepless night | keep the sentences sequential; `مگر` introduces the consequence |
| دادی | ادھر آؤ۔ | simple invitation | no added pause or emotional label |
| ماریہ | آپ... آپ مجھے معاف نہیں کریں گی نا؟ | source hesitation → direct question | preserve both instances of respectful `آپ`; `نا` keeps the answer in play |
| دادی | قلمدان تو ٹوٹ گیا بیٹا... مگر سچ بولنے کی ہمت سلامت رہی، اور وہ اس قلمدان سے کہیں بڑی چیز ہے۔ | broken object → intact courage → comparison | `مگر` carries the stated contrast; do not expand the lesson |

## D. Eleven v3 adapter

Provider: ElevenLabs
Model ID: `eleven_v3`
API or product surface: Text to Speech API, Create speech endpoint (`POST /v1/text-to-speech/:voice_id`), synthesized per turn
Locale: Not set in the integration request; regional locale/accent fit remains listening-dependent
Language: Urdu inferred from input; no `language_code` field was sent in the integration request
Voice: دادی=Sara (`9cI5mhBtM4WtQ9Fo6jWQ`), ماریہ=Reva (`o85TqPN3F4P7dWae2paA`)
Documentation checked: 2026-07-31 — ElevenLabs language support, Eleven v3 prompting/best practices, and Create speech API reference
Canonical utterance: Artifact A, one canonical utterance per turn
Request fields / inline controls: `text`, `model_id: "eleven_v3"`; the selected `voice_id` is in the endpoint path and `output_format=mp3_44100_128` is in the query; concise square-bracket audio tags in `text` are exact-voice experiments
Clean caption: Artifact A, unchanged
Needs listening test: Yes — tag scope, relationship/register, age neutrality, and regional voice fit

```text
Voice: دادی
[identifying the object before stating its significance] یہ قلمدان... [stating exactly what it was] تمہارے نانا کا آخری تحفہ تھا۔
Voice: ماریہ
[addressing دادی before the admission] دادی... وہ مجھ سے گر گیا تھا۔ [moving from attempted concealment to the sleepless night] میں چھپانا چاہتی تھی، مگر جھوٹ بولتے ہوئے رات بھر نیند نہیں آئی۔
Voice: دادی
ادھر آؤ۔
Voice: ماریہ
[letting the repeated “آپ” carry the source hesitation] آپ... آپ مجھے معاف نہیں کریں گی نا؟
Voice: دادی
[acknowledging what broke] قلمدان تو ٹوٹ گیا بیٹا... [making the source’s contrast with the courage that remained] مگر سچ بولنے کی ہمت سلامت رہی، اور وہ اس قلمدان سے کہیں بڑی چیز ہے۔
```

## Checks

- Artifact A is source-identical; kinship terms, pronouns, agreement, facts, comparison, and speaker order are unchanged.
- Removing every bracketed provider tag from D yields artifact A word for word and in the same speaker sequence.
- No age is assigned to ماریہ. The repeated `آپ` is preserved as a source hesitation, with no added stammer, punishment, grief, tears, or explicit forgiveness.
- The adapter leaves `ادھر آؤ۔` untagged because its wording already carries the simple invitation.
- Clean captions are artifact A, never D; no `Voice:` label or provider tag belongs in caption text.
- Artifact D was synthesized during repository integration with Sara (`9cI5mhBtM4WtQ9Fo6jWQ`) and Reva (`o85TqPN3F4P7dWae2paA`). A native-Urdu listening pass must still compare the tagged turns with tag-free baselines and reject a cue if it adds sermon-like delivery, non-lexical reactions, or an age characterization absent from the source.
