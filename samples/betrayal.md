# Sample scene — twenty years, one sitting

Sample voices: کاشف=Haseeb, دانش=Deep South Asian Baritone

Generated with skill version: 0.3.0

References loaded: [literary dialogue](../skills/urdu-voice-director/references/literary-dialogue.md), [relationships and register](../skills/urdu-voice-director/references/relationships-and-register.md), [conversational prosody](../skills/urdu-voice-director/references/conversational-prosody.md), [hesitation and pauses](../skills/urdu-voice-director/references/hesitation-and-pauses.md), and [provider capabilities](../skills/urdu-voice-director/references/provider-capabilities.md).

## Source

Original scene written for this showcase.

```text
کاشف: بیس برس کی دوستی تھی ہماری، دانش... اور تم نے ایک ہی نشست میں اسے بیچ ڈالا؟
دانش: بیچا نہیں... کمپنی بچانی تھی، اور تمہاری جگہ کاٹنی پڑی۔ مجبوری تھی۔
کاشف: مجبوری؟ ...مجھے آج بھی وہ رات یاد ہے جب تم نے میرے کندھے پر ہاتھ رکھ کر کہا تھا— کاشف، تیرے بغیر یہ سب کچھ بھی نہیں۔
دانش: اور وہ سچ تھا۔
کاشف: تھا... ماضی میں۔ اب بس ایک بات کہو— آنکھوں میں آنکھیں ڈال کر کہو، کہ تم نے درست کیا۔
```

## Decision

- Mode: fictional dialogue.
- Protected: every fact and turn; the twenty-year friendship; peer-intimate `تم`/`تیرے`; the stated company rationale and cutting of کاشف’s position; the remembered words; and the final demand for eye contact and a direct answer.
- No refinement: the source already works as spoken Urdu. Its repetition, ellipses, tense contrast, and quoted memory all have a dramatic function.
- Direction follows only actions in the text: accusation, correction, explanation, challenge, recollection, assertion, tense correction, and demand. It supplies no anger, remorse, justification beyond the stated necessity, or other hidden motive.

## A. Clean spoken Urdu

```text
کاشف: بیس برس کی دوستی تھی ہماری، دانش... اور تم نے ایک ہی نشست میں اسے بیچ ڈالا؟
دانش: بیچا نہیں... کمپنی بچانی تھی، اور تمہاری جگہ کاٹنی پڑی۔ مجبوری تھی۔
کاشف: مجبوری؟ ...مجھے آج بھی وہ رات یاد ہے جب تم نے میرے کندھے پر ہاتھ رکھ کر کہا تھا— کاشف، تیرے بغیر یہ سب کچھ بھی نہیں۔
دانش: اور وہ سچ تھا۔
کاشف: تھا... ماضی میں۔ اب بس ایک بات کہو— آنکھوں میں آنکھیں ڈال کر کہو، کہ تم نے درست کیا۔
```

## B. Directed rehearsal script

Bracketed cues are non-spoken.

```text
کاشف: [establish the twenty years; after naming دانش, turn the line into the direct accusation] بیس برس کی دوستی تھی ہماری، دانش... اور تم نے ایک ہی نشست میں اسے بیچ ڈالا؟
دانش: [correct the word “بیچا”; then give the company rationale and stated necessity as separate steps] بیچا نہیں... کمپنی بچانی تھی، اور تمہاری جگہ کاٹنی پڑی۔ مجبوری تھی۔
کاشف: [challenge “مجبوری”; move into the stated memory, then quote the remembered words distinctly] مجبوری؟ ...مجھے آج بھی وہ رات یاد ہے جب تم نے میرے کندھے پر ہاتھ رکھ کر کہا تھا— کاشف، تیرے بغیر یہ سب کچھ بھی نہیں۔
دانش: [plain assertion] اور وہ سچ تھا۔
کاشف: [answer the past tense with “تھا”; make “ماضی میں” the correction; then require the one direct answer exactly as stated] تھا... ماضی میں۔ اب بس ایک بات کہو— آنکھوں میں آنکھیں ڈال کر کہو، کہ تم نے درست کیا۔
```

## C. Portable synthesis plan

| Speaker | Canonical utterance | Non-spoken delivery note | Pause/focus |
|---|---|---|---|
| کاشف | بیس برس کی دوستی تھی ہماری، دانش... اور تم نے ایک ہی نشست میں اسے بیچ ڈالا؟ | history → named addressee → accusation | keep the source beat after `دانش`; the final question is a challenge |
| دانش | بیچا نہیں... کمپنی بچانی تھی، اور تمہاری جگہ کاٹنی پڑی۔ مجبوری تھی۔ | correction → rationale → stated necessity | keep `بیچا نہیں` distinct from the explanation |
| کاشف | مجبوری؟ ...مجھے آج بھی وہ رات یاد ہے جب تم نے میرے کندھے پر ہاتھ رکھ کر کہا تھا— کاشف، تیرے بغیر یہ سب کچھ بھی نہیں۔ | challenge → recollection → quotation | `مجبوری؟` stands alone; the dash introduces the remembered words |
| دانش | اور وہ سچ تھا۔ | plain assertion | no added pause or emphasis |
| کاشف | تھا... ماضی میں۔ اب بس ایک بات کہو— آنکھوں میں آنکھیں ڈال کر کہو، کہ تم نے درست کیا۔ | tense answer → correction → direct demand | make `ماضی میں` the correction; preserve the stated eye-contact instruction |

## D. Eleven v3 adapter

Provider: ElevenLabs
Model ID: `eleven_v3`
API or product surface: Text to Speech API, Create speech endpoint (`POST /v1/text-to-speech/:voice_id`), synthesized per turn
Locale: Not set in the integration request; regional locale/accent fit remains listening-dependent
Language: Urdu inferred from input; no `language_code` field was sent in the integration request
Voice: کاشف=Haseeb (`aPfeouerZvEVukwmLSP0`), دانش=Deep South Asian Baritone (`QhHNJKW7n5VCJm12Xq1F`)
Documentation checked: 2026-07-31 — ElevenLabs language support, Eleven v3 prompting/best practices, and Create speech API reference
Canonical utterance: Artifact A, one canonical utterance per turn
Request fields / inline controls: `text`, `model_id: "eleven_v3"`; the selected `voice_id` is in the endpoint path and `output_format=mp3_44100_128` is in the query; concise square-bracket audio tags in `text` are exact-voice experiments
Clean caption: Artifact A, unchanged
Needs listening test: Yes — tag scope, the accusation/correction/recollection beats, and regional voice fit

```text
Voice: کاشف
[stating the twenty-year history before the accusation] بیس برس کی دوستی تھی ہماری، دانش... [turning directly to the accusation] اور تم نے ایک ہی نشست میں اسے بیچ ڈالا؟
Voice: دانش
[correcting “بیچا” before the explanation] بیچا نہیں... [giving the stated company rationale, then the necessity] کمپنی بچانی تھی، اور تمہاری جگہ کاٹنی پڑی۔ مجبوری تھی۔
Voice: کاشف
[challenging the word “مجبوری”] مجبوری؟ [moving into the stated recollection] ...مجھے آج بھی وہ رات یاد ہے جب تم نے میرے کندھے پر ہاتھ رکھ کر کہا تھا— [quoting the remembered words distinctly] کاشف، تیرے بغیر یہ سب کچھ بھی نہیں۔
Voice: دانش
اور وہ سچ تھا۔
Voice: کاشف
[answering only the past tense] تھا... [making “ماضی میں” the correction] ماضی میں۔ اب بس ایک بات کہو— [requiring the stated eye contact before the answer] آنکھوں میں آنکھیں ڈال کر کہو، کہ تم نے درست کیا۔
```

## Checks

- Artifact A is source-identical; the relationship, company rationale, remembered words, tense contrast, and speaker order are unchanged.
- Removing every bracketed provider tag from D yields artifact A word for word and in the same speaker sequence.
- The adapter leaves دانش’s short assertion untagged; the other detailed and mid-utterance cues mark only source-supported changes of action.
- Clean captions are artifact A, never D; no `Voice:` label or provider tag belongs in caption text.
- Artifact D was synthesized during repository integration with Haseeb (`aPfeouerZvEVukwmLSP0`) and Deep South Asian Baritone (`QhHNJKW7n5VCJm12Xq1F`). A native-Urdu listening pass must still compare every tagged turn with its tag-free baseline and reject tags that create shouting, remorse, or a stronger motive than the words establish.
