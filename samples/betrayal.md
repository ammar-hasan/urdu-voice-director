# Sample scene — twenty years, one sitting

Sample voices: کاشف=Haseeb, دانش=Deep South Asian Baritone

Generated with skill version: 0.3.0

References loaded: [literary dialogue](../skills/urdu-voice-director/references/literary-dialogue.md), [relationships and register](../skills/urdu-voice-director/references/relationships-and-register.md), [hesitation and pauses](../skills/urdu-voice-director/references/hesitation-and-pauses.md), and [provider capabilities](../skills/urdu-voice-director/references/provider-capabilities.md).

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
- Protected: all facts and turns; the twenty-year friendship; intimate-peer `تم`/`تیرے`; the quoted memory; the hinge from `سچ تھا` to `تھا... ماضی میں`.
- No refinement: the source already speaks naturally. Rewriting would only show activity.
- Direction is limited to textual actions: accusation, correction, quotation, tense contrast, and the final demand. No anger, grief, apology, or hidden motive is asserted.

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
کاشف: [let “بیس برس” establish the scale; direct question, no automatic rise in volume] بیس برس کی دوستی تھی ہماری، دانش... اور تم نے ایک ہی نشست میں اسے بیچ ڈالا؟
دانش: [correct the accusation first; then state the necessity without adding a plea] بیچا نہیں... کمپنی بچانی تھی، اور تمہاری جگہ کاٹنی پڑی۔ مجبوری تھی۔
کاشف: [echo his word as a challenge; quote the remembered sentence clearly] مجبوری؟ ...مجھے آج بھی وہ رات یاد ہے جب تم نے میرے کندھے پر ہاتھ رکھ کر کہا تھا— کاشف، تیرے بغیر یہ سب کچھ بھی نہیں۔
دانش: [plain assertion; let the past tense remain audible] اور وہ سچ تھا۔
کاشف: [separate the tense correction from the demand; focus “درست”] تھا... ماضی میں۔ اب بس ایک بات کہو— آنکھوں میں آنکھیں ڈال کر کہو، کہ تم نے درست کیا۔
```

## C. Portable synthesis plan

| Speaker | Canonical utterance | Non-spoken delivery note | Pause/focus |
|---|---|---|---|
| کاشف | بیس برس کی دوستی تھی ہماری، دانش... اور تم نے ایک ہی نشست میں اسے بیچ ڈالا؟ | establish duration, then ask directly | source beat after `دانش` |
| دانش | بیچا نہیں... کمپنی بچانی تھی، اور تمہاری جگہ کاٹنی پڑی۔ مجبوری تھی۔ | correction → explanation → conclusion | distinct thought units |
| کاشف | مجبوری؟ ...مجھے آج بھی وہ رات یاد ہے جب تم نے میرے کندھے پر ہاتھ رکھ کر کہا تھا— کاشف، تیرے بغیر یہ سب کچھ بھی نہیں۔ | echo, then quotation as evidence | do not flatten echo and quotation |
| دانش | اور وہ سچ تھا۔ | plain assertion | `تھا` remains clear |
| کاشف | تھا... ماضی میں۔ اب بس ایک بات کہو— آنکھوں میں آنکھیں ڈال کر کہو، کہ تم نے درست کیا۔ | tense correction → direct demand | focus `درست` |

## D. Eleven v3 adapter

Target: ElevenLabs Text to Speech API / model `eleven_v3` / Urdu inferred from input / showcase voices routed per speaker above. Documentation checked 2026-07-31. V3’s documented open-ended audio-tag mechanism permits descriptive delivery cues; the phrases below translate only source-supported rehearsal actions. Their exact Urdu response remains an experiment with the selected voices.

```text
Voice: کاشف
[measured, direct accusation] بیس برس کی دوستی تھی ہماری، دانش... اور تم نے ایک ہی نشست میں اسے بیچ ڈالا؟
Voice: دانش
[controlled correction, then a firm explanation] بیچا نہیں... کمپنی بچانی تھی، اور تمہاری جگہ کاٹنی پڑی۔ مجبوری تھی۔
Voice: کاشف
[echoing the word as a challenge] مجبوری؟ ...[quoting the memory clearly] مجھے آج بھی وہ رات یاد ہے جب تم نے میرے کندھے پر ہاتھ رکھ کر کہا تھا— کاشف، تیرے بغیر یہ سب کچھ بھی نہیں۔
Voice: دانش
[plain, unhurried assertion] اور وہ سچ تھا۔
Voice: کاشف
[correcting the tense, then becoming direct] تھا... ماضی میں۔ [short pause] اب بس ایک بات کہو— آنکھوں میں آنکھیں ڈال کر کہو، کہ تم نے درست کیا۔
```

## Checks

- Artifact A is source-identical; `تم`, `تیرے`, titles, facts, and turn order do not drift.
- Removing the documented provider tag from D yields artifact A word for word.
- The detailed tags describe audible textual actions, not hidden anger, grief, apology, or motive.
- Listening test: compare each tagged turn with its tag-free baseline; reject a cue if it produces shouting, melodrama, or a different relationship.
