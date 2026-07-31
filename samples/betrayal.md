# Sample scene — twenty years, one sitting

Sample voices: کاشف=Haseeb, دانش=Deep South Asian Baritone

## Source

Original scene written for this showcase.

```text
کاشف: بیس برس کی دوستی تھی ہماری، دانش... اور تم نے ایک ہی نشست میں اسے بیچ ڈالا؟
دانش: بیچا نہیں... کمپنی بچانی تھی، اور تمہاری جگہ کاٹنی پڑی۔ مجبوری تھی۔
کاشف: مجبوری؟ ...مجھے آج بھی وہ رات یاد ہے جب تم نے میرے کندھے پر ہاتھ رکھ کر کہا تھا— کاشف، تیرے بغیر یہ سب کچھ بھی نہیں۔
دانش: اور وہ سچ تھا۔
کاشف: تھا... ماضی میں۔ اب بس ایک بات کہو— آنکھوں میں آنکھیں ڈال کر کہو، کہ تم نے درست کیا۔
```

## Scene card

- **Speakers and relationship:** کاشف speaks to دانش; business partners and close friends of twenty years, established peers on `تم`. دانش has forced کاشف out of the company; this is the confrontation after the fact.
- **Setting/purpose:** Not specified beyond the confrontation itself; the language is a private reckoning, not a public scene. Output target is an ElevenLabs `eleven_v3` sample.
- **Protected:** all five speaker turns in order; the facts (twenty years' friendship, one sitting, the company, دانش's old hand-on-shoulder promise); the `تم`/`تُو` register event — `تُو` appears only inside کاشف's quotation of the old promise (`تیرے بغیر`), which is a deliberate intimacy marker, not an error; کاشف's established condition that his anger stays held in, never shouted.
- **Established register:** educated adult male speech; `نشست` and `ماضی` are slightly literary but belong to کاشف's measured, wounded precision — not stiffness to be flattened.
- **Code-switching:** none. `کمپنی` is a settled loanword in business Urdu, not a switch; preserved as-is.
- **Unresolved:** exact locale (no ur-PK/ur-IN evidence — not inferred); voices for `eleven_v3` (`unresolved`); the precise tone of دانش's `اور وہ سچ تھا۔` (quiet admission vs. stubborn insistence — chosen: quiet admission, since turn 5 only lands if it was true; the stubborn reading remains a stated alternative).

## Turn audit

1. **کاشف, turn 1** — *Direction only.* The words are natural, weighted speech; nothing written or stiff. Delivery risk: the `...` after `دانش` could be read as hesitation when it is a controlled conversational beat before the accusation; the final question is an accusation, not a shout.
2. **دانش, turn 2** — *Direction only.* Clipped, rehearsed defense; the words already carry it. Delivery risk: over-apologizing. `بیچا نہیں` is a flat correction, and `مجبوری تھی۔` closes the topic by decree.
3. **کاشف, turn 3** — *Direction only.* The echo question `مجبوری؟` and the shift into memory are audible beats that wording alone can misplace. The quoted promise switches to `تُو`; preserved exactly — changing it to `تم` would destroy the scene's central register event.
4. **دانش, turn 4** — *Direction only.* Four words; the only question is whether the defense finally drops. Words unchanged.
5. **کاشف, turn 5** — *Direction only.* The emotional peak. `تھا` echoes turn 4 and is immediately sealed into `ماضی میں`; the `—` is a pivot into the demand, not a cutoff. Peak is carried by pacing and precision, not volume. Words unchanged.

**Result:** no turn required refinement. The scene is treated as canonical in effect — artifact A is word-identical to the source.

## A. Clean spoken Urdu

```text
کاشف: بیس برس کی دوستی تھی ہماری، دانش... اور تم نے ایک ہی نشست میں اسے بیچ ڈالا؟
دانش: بیچا نہیں... کمپنی بچانی تھی، اور تمہاری جگہ کاٹنی پڑی۔ مجبوری تھی۔
کاشف: مجبوری؟ ...مجھے آج بھی وہ رات یاد ہے جب تم نے میرے کندھے پر ہاتھ رکھ کر کہا تھا— کاشف، تیرے بغیر یہ سب کچھ بھی نہیں۔
دانش: اور وہ سچ تھا۔
کاشف: تھا... ماضی میں۔ اب بس ایک بات کہو— آنکھوں میں آنکھیں ڈال کر کہو، کہ تم نے درست کیا۔
```

## B. Directed rehearsal script

```text
[Scene note (non-spoken): دانش نے کاشف کو کمپنی سے نکلوا دیا ہے؛ یہ پہلا آمنا سامنا ہے۔ کاشف کا غصہ دبا ہوا ہے — کہیں بلند آواز نہیں۔]

کاشف: [دبے ہوئے غصے میں، شکایت نہیں — حتمی بیان] بیس برس کی دوستی تھی ہماری، دانش... [مختصر قدرتی وقفہ؛ نام کے بعد بات تول کر] اور تم نے ایک ہی نشست میں اسے بیچ ڈالا؟

دانش: [پہلا لفظ سیدھی تردید؛ باقی جملہ طے شدہ جواب کی طرح، بغیر معذرت] بیچا نہیں... کمپنی بچانی تھی، اور تمہاری جگہ کاٹنی پڑی۔ [بات ختم کرنے کے انداز میں] مجبوری تھی۔

کاشف: [دانش کا لفظ واپس پھینکتا ہے؛ حیرانی نہیں، جانچ] مجبوری؟ [ایک لمحہ رک کر؛ اب آواز میں یاد آ جاتی ہے] ...مجھے آج بھی وہ رات یاد ہے جب تم نے میرے کندھے پر ہاتھ رکھ کر کہا تھا— [وہ پرانا جملہ اسی پرانی قربت میں دہراتا ہے] کاشف، تیرے بغیر یہ سب کچھ بھی نہیں۔

دانش: [دفاع پہلی بار نہیں اٹھاتا؛ آہستہ، سیدھا] اور وہ سچ تھا۔

کاشف: [لفظ اٹھا کر ماضی میں بند کرتا ہے] تھا... ماضی میں۔ [اب آہستہ اور بالکل واضح؛ غصہ دبا ہی رہتا ہے] اب بس ایک بات کہو— آنکھوں میں آنکھیں ڈال کر کہو، کہ تم نے درست کیا۔
```

## C. Portable synthesis plan

| Turn | Speaker | Clean spoken text | Non-spoken delivery note | Pause/beat | Emphasis | Pronunciation |
|---|---|---|---|---|---|---|
| 1 | کاشف | بیس برس کی دوستی تھی ہماری، دانش... اور تم نے ایک ہی نشست میں اسے بیچ ڈالا؟ | suppressed anger as a final statement, not a complaint | conversational beat after `دانش`, then the accusation weighed | `ایک ہی نشست` | — |
| 2 | دانش | بیچا نہیں... کمپنی بچانی تھی، اور تمہاری جگہ کاٹنی پڑی۔ مجبوری تھی۔ | flat correction, then a rehearsed justification; no apology | micro-beat after `بیچا نہیں` | `بچانی` | — |
| 3 | کاشف | مجبوری؟ ...مجھے آج بھی وہ رات یاد ہے جب تم نے میرے کندھے پر ہاتھ رکھ کر کہا تھا— کاشف، تیرے بغیر یہ سب کچھ بھی نہیں۔ | echoes دانش's word as a test; then the voice moves into memory; quoted promise spoken in its old intimacy | reflective pause after `مجبوری؟`; `—` introduces direct quotation, not a cutoff | `آج بھی`; the quoted line softens | — |
| 4 | دانش | اور وہ سچ تھا۔ | the defense drops; quiet and straight | none added | `سچ` lightly | — |
| 5 | کاشف | تھا... ماضی میں۔ اب بس ایک بات کہو— آنکھوں میں آنکھیں ڈال کر کہو، کہ تم نے درست کیا۔ | seals `تھا` into the past, then the demand — slow, exact, anger still contained; the peak is pacing, not volume | short beat after `تھا`; `—` is a pivot into the demand | `آنکھوں میں آنکھیں` | — |

## D. Eleven v3 adapter

Target: ElevenLabs / Eleven v3 (`eleven_v3`) / locale: unresolved / voices: unresolved. Urdu is documented among v3's languages; inline tags below are documented v3 audio tags, used sparsely. `Voice:` lines are routing labels, not spoken input. Spoken words are identical to artifact A.

```text
Voice: کاشف
[quietly] بیس برس کی دوستی تھی ہماری، دانش... اور تم نے ایک ہی نشست میں اسے بیچ ڈالا؟

Voice: دانش
بیچا نہیں... کمپنی بچانی تھی، اور تمہاری جگہ کاٹنی پڑی۔ مجبوری تھی۔

Voice: کاشف
مجبوری؟ [hesitates] ...مجھے آج بھی وہ رات یاد ہے جب تم نے میرے کندھے پر ہاتھ رکھ کر کہا تھا— کاشف، تیرے بغیر یہ سب کچھ بھی نہیں۔

Voice: دانش
اور وہ سچ تھا۔

Voice: کاشف
[quietly] تھا... ماضی میں۔ اب بس ایک بات کہو— آنکھوں میں آنکھیں ڈال کر کہو، کہ تم نے درست کیا۔
```

## Restraint notes

- Every source turn, speaker, and word is preserved verbatim; no turn needed refinement, so none was rewritten merely to show activity.
- The emotional peak (turn 5) is carried entirely by direction and pacing — a short beat, the pivot dash, and slow precision on `آنکھوں میں آنکھیں ڈال کر کہو`. No added exclamation, no invented gesture, no new fact.
- The `تُو` in the quoted promise (`تیرے بغیر`) was deliberately not normalized to `تم`; that register shift is the scene's core evidence of the lost intimacy.
- Deliberately not added: a setting or stage business, a motive beyond `مجبوری`, an apology or reconciliation, crying/trembling/shouting tags, any narrator line, and any English for "business flavor" (`کمپنی` already lives in Urdu).
- Alternative reading stated, not duplicated: turn 4 (`اور وہ سچ تھا۔`) can be played as stubborn insistence instead of a quiet admission; the admission was chosen because turn 5's demand only has weight if the past was real.
- Only three `eleven_v3` tags are used across five turns; turns 2 and 4 trust wording and sequence, per the tag-restraint rule.
- Needs listening test with the actual selected voice: whether the model honors `[quietly]`/`[hesitates]` in Urdu without flattening them, whether the `—` before the quoted promise is read as quotation rather than a glitch, and whether turn 3's shift into the old `تُو`-intimacy is audible. Voice and locale are `unresolved`; no Pakistani/Indian accent was assumed.
