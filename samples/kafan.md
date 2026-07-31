# Sample scene — Premchand’s «کفن»

Sample voices: گھیسو=Deep South Asian Baritone, مادھو=Haseeb

Generated with skill version: 0.3.0

References loaded: [literary dialogue](../skills/urdu-voice-director/references/literary-dialogue.md), [relationships and register](../skills/urdu-voice-director/references/relationships-and-register.md), [conversational prosody](../skills/urdu-voice-director/references/conversational-prosody.md), [hesitation and pauses](../skills/urdu-voice-director/references/hesitation-and-pauses.md), [pronunciation](../skills/urdu-voice-director/references/pronunciation.md), [provider capabilities](../skills/urdu-voice-director/references/provider-capabilities.md), and [evaluation](../skills/urdu-voice-director/references/evaluation.md).

## Source

Contiguous opening exchange from Premchand’s «کفن», transcribed from the [scanned Anjuman Taraqqi Urdu edition on Rekhta, viewer page 137 / printed page 139](https://www.rekhta.org/ebooks/prem-chand-ke-muntakhab-afsane-ebooks-3/?lang=ur#136) and sequence-checked against [Rekhta’s reading text](https://www.rekhta.org/stories/kafan-premchand-stories?lang=ur). The facsimile governs where the reading layer differs. Speaker labels below are routing labels; the four utterances are consecutive and verbatim from the printed page. Canonical: direction only.

The source attribution for مادھو’s first turn is `مادھو دردناک لہجے میں بولا۔`; it is context for delivery, not spoken text.

```text
گھیسو: معلوم ہوتا ہے بچے گی نہیں۔ سارا دن تڑپتے ہو گیا۔ جا دیکھ تو آ۔
مادھو: مرنا ہی ہے تو جلدی مر کیوں نہیں جاتی۔ دیکھ کر کیا کروں۔
گھیسو: تو بڑا بے درد ہے بے۔ سال بھر جس کے ساتھ جندگانی کا سکھ بھوگا اسی کے ساتھ ہی اتنی بے وفائی۔
مادھو: تو مجھ سے تو اس کا تڑپنا اور ہاتھ پاؤں پٹکنا نہیں دیکھا جاتا۔
```

## Decision

- Treat only these four consecutive turns as the canonical excerpt. Do not splice in the later `جا کر دیکھ تو، کیا حالت ہے اس کی؟` exchange: in the source it occurs after substantial narration and continues through `چڑیل کا فساد ہو گا اور کیا`, `کس کے گھر سے آئے`, and further intervening turns.
- Follow the printed facsimile exactly, including `دیکھ کر کیا کروں`, `بے درد`, both instances of `تو` in `تو مجھ سے تو`, `اسی کے ساتھ ہی`, and the source’s full stops. Do not substitute the reading layer’s transcription variants or modernize `جندگانی` and `سکھ بھوگا`.
- Preserve the marked father–son register: direct `تو`, vocative `بے`, and the repeated `تو` are part of the character relation, not noise to smooth away.
- Recover only actions supported by the passage and attribution: گھیسو assesses and instructs; مادھو answers in the narrator’s stated painful tone and refuses; گھیسو rebukes him by invoking the year-long relationship; مادھو states what he cannot watch. Do not add remorse, cruelty, grief display, or another motive.
- Treat the two apparent questions by function, not punctuation: `مر کیوں نہیں جاتی` is voiced within the source-marked painful reply, while `دیکھ کر کیا کروں` refuses the instruction. Use a plain baseline before any optional v3 cue.

## A. Clean spoken Urdu

```text
گھیسو: معلوم ہوتا ہے بچے گی نہیں۔ سارا دن تڑپتے ہو گیا۔ جا دیکھ تو آ۔
مادھو: مرنا ہی ہے تو جلدی مر کیوں نہیں جاتی۔ دیکھ کر کیا کروں۔
گھیسو: تو بڑا بے درد ہے بے۔ سال بھر جس کے ساتھ جندگانی کا سکھ بھوگا اسی کے ساتھ ہی اتنی بے وفائی۔
مادھو: تو مجھ سے تو اس کا تڑپنا اور ہاتھ پاؤں پٹکنا نہیں دیکھا جاتا۔
```

## B. Directed rehearsal script

Bracketed cues are non-spoken.

```text
گھیسو: [Give the assessment plainly; after the full stop, make the instruction direct.] معلوم ہوتا ہے بچے گی نہیں۔ سارا دن تڑپتے ہو گیا۔ جا دیکھ تو آ۔
مادھو: [Honor the narrator’s exact “دردناک لہجے میں”: let the pain remain audible without adding a sob; make the second sentence the refusal.] مرنا ہی ہے تو جلدی مر کیوں نہیں جاتی۔ دیکھ کر کیا کروں۔
گھیسو: [Rebuke the refusal directly; then make “سال بھر” the measure of the charge.] تو بڑا بے درد ہے بے۔ سال بھر جس کے ساتھ جندگانی کا سکھ بھوگا اسی کے ساتھ ہی اتنی بے وفائی۔
مادھو: [State the inability as one continuous defence; preserve the repeated “تو” and keep the two physical actions connected.] تو مجھ سے تو اس کا تڑپنا اور ہاتھ پاؤں پٹکنا نہیں دیکھا جاتا۔
```

## C. Portable synthesis plan

1. **گھیسو**
   - Canonical utterance: `معلوم ہوتا ہے بچے گی نہیں۔ سارا دن تڑپتے ہو گیا۔ جا دیکھ تو آ۔`
   - Delivery: plain assessment becoming a direct instruction.
   - Beat/pause: complete each printed sentence; do not insert a pause inside `جا دیکھ تو آ`.
   - Pronunciation: test `تڑپتے ہو گیا` as supplied; do not silently regularize the construction.
2. **مادھو**
   - Canonical utterance: `مرنا ہی ہے تو جلدی مر کیوں نہیں جاتی۔ دیکھ کر کیا کروں۔`
   - Delivery: pain in the voice is explicitly supplied by the narrator; the second sentence refuses the instruction.
   - Beat/pause: use the printed full stop as the turn-internal change; keep `دیکھ کر` connected to `کیا کروں`.
   - Pronunciation: preserve `کروں`; do not substitute `آؤں` from the reading-layer variant.
3. **گھیسو**
   - Canonical utterance: `تو بڑا بے درد ہے بے۔ سال بھر جس کے ساتھ جندگانی کا سکھ بھوگا اسی کے ساتھ ہی اتنی بے وفائی۔`
   - Delivery: direct rebuke followed by the stated basis of the charge.
   - Beat/pause: reset after `بے۔`; preserve the connection between `جس کے ساتھ` and `اسی کے ساتھ ہی`.
   - Pronunciation: retain source-attested `جندگانی` and `بھوگا`; confirm them with a native listener on the selected voice.
4. **مادھو**
   - Canonical utterance: `تو مجھ سے تو اس کا تڑپنا اور ہاتھ پاؤں پٹکنا نہیں دیکھا جاتا۔`
   - Delivery: one continuous defence, without an invented hesitation or filler.
   - Beat/pause: do not split `ہاتھ پاؤں پٹکنا` or `نہیں دیکھا جاتا`.
   - Pronunciation: preserve both instances of `تو`; keep `ہاتھ پاؤں` as one coordinated unit.

## D. Eleven v3 adapter

Provider: ElevenLabs
Model ID: `eleven_v3`
API surface: Text to Speech API, `POST /v1/text-to-speech/:voice_id`
Output query: `output_format=mp3_44100_128`
Language/locale: Urdu input; the recorded request JSON did not send `language_code`
Voices: گھیسو=`Deep South Asian Baritone` (`QhHNJKW7n5VCJm12Xq1F`); مادھو=`Haseeb` (`aPfeouerZvEVukwmLSP0`)
Documentation checked: 2026-07-31 — [Eleven v3 models and language support](https://elevenlabs.io/docs/overview/models), [Text to Speech best practices and v3 audio tags](https://elevenlabs.io/docs/overview/capabilities/text-to-speech/best-practices), and [Create speech](https://elevenlabs.io/docs/api-reference/text-to-speech/convert)
Request fields / inline controls: route each turn to its mapped `voice_id`; send only `text` and `model_id` in the JSON body, with `model_id` set to `eleven_v3`. Bracketed open-ended tags below are exact-voice experiments, not guaranteed presets. Do not add an SSML break tag.
Clean caption: artifact A, without `Voice:` routing or bracketed tags
Synthesis status: the corrected canonical excerpt was synthesized during repository integration with the exact request metadata and voice mappings above
Needs listening test: yes

```text
Voice: گھیسو
[plain assessment] معلوم ہوتا ہے بچے گی نہیں۔ [make the instruction direct] سارا دن تڑپتے ہو گیا۔ جا دیکھ تو آ۔
Voice: مادھو
[with pain in the voice] مرنا ہی ہے تو جلدی مر کیوں نہیں جاتی۔ [keep the pain; make this a refusal] دیکھ کر کیا کروں۔
Voice: گھیسو
[rebuke the refusal directly] تو بڑا بے درد ہے بے۔ [make “سال بھر” the measure of the charge] سال بھر جس کے ساتھ جندگانی کا سکھ بھوگا اسی کے ساتھ ہی اتنی بے وفائی۔
Voice: مادھو
تو مجھ سے تو اس کا تڑپنا اور ہاتھ پاؤں پٹکنا نہیں دیکھا جاتا۔
```

## Checks

- Source and A contain the same four consecutive printed utterances; no narration, later exchange, or omitted bridge is presented as part of this excerpt.
- A preserves the facsimile’s words, order, marked register, and punctuation, including `کروں`, `بے درد`, the second `تو`, and `اسی کے ساتھ ہی`.
- Removing bracketed tags from every D turn yields the corresponding A turn exactly, with the same four-speaker sequence.
- D records the integration target exactly: `eleven_v3`; `POST /v1/text-to-speech/:voice_id`; `output_format=mp3_44100_128`; JSON body fields `text` and `model_id` only; no `language_code`; mapped voice IDs `QhHNJKW7n5VCJm12Xq1F` and `aPfeouerZvEVukwmLSP0`.
- D’s mid-utterance tags occur only after complete printed sentences, where the audible action changes. The source-supplied painful tone replaces the previous contradictory flat-refusal direction. Tag wording and scope remain experimental for each selected voice.
- Listening protocol: compare the clean baseline first, then one changed cue at a time. Check `تڑپتے ہو گیا`, `کروں`, `بے درد`, `جندگانی`, `بھوگا`, both instances of `تو`, and whether any tag adds non-lexical sound or overstates the scene.
- This repair is structurally and textually auditable; pronunciation, prosody, and tag behavior remain unapproved until a native-Urdu listening pass on the corrected excerpt.
