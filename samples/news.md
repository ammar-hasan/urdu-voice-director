# Sample scene — flood bulletin

Sample voices: اینکر=Sara

Generated with skill version: 0.3.0

References loaded: [literary dialogue and performance modes](../skills/urdu-voice-director/references/literary-dialogue.md), [conversational prosody](../skills/urdu-voice-director/references/conversational-prosody.md), [pronunciation](../skills/urdu-voice-director/references/pronunciation.md), and [provider capabilities](../skills/urdu-voice-director/references/provider-capabilities.md).

## Source

Original news copy written for this showcase; canonical: direction only.

```text
اینکر: دریائے سندھ میں اونچے درجے کے سیلاب کے باعث چار اضلاع میں ہنگامی حالت نافذ کر دی گئی ہے۔ حکام کے مطابق اب تک سترہ ہزار سے زائد افراد کو محفوظ مقامات پر منتقل کیا جا چکا ہے، جبکہ تین افراد جاں بحق ہوئے ہیں۔
اینکر: ادارۂ موسمیات کے مطابق بارشوں کا سلسلہ مزید اڑتالیس گھنٹے جاری رہنے کا امکان ہے، اور نشیبی علاقوں کے باشندیوں کو ہدایت کی گئی ہے کہ وہ احتیاطی انتظامات مکمل کر لیں۔
اینکر: وزیراعظم نے متاثرہ علاقوں کے فضائی جائزے کے بعد اعلان کیا ہے کہ ریلیف کا کام رات دن جاری رہے گا اور کسی بھی خاندان کو تنہا نہیں چھوڑا جائے گا۔
```

## Decision

- Mode: news reading.
- Protected: all facts, attributions, quantities, uncertainty (`امکان`), instruction, official announcement, and speaker turn boundaries.
- No refinement: this is canonical copy. Direction must support informational grouping, not add alarm, grief, patriotism, or certainty.
- Pronunciation/number review: `دریائے سندھ`, `سترہ ہزار`, `ادارۂ موسمیات`, `اڑتالیس گھنٹے`, and `وزیراعظم`.

## A. Clean spoken Urdu

```text
اینکر: دریائے سندھ میں اونچے درجے کے سیلاب کے باعث چار اضلاع میں ہنگامی حالت نافذ کر دی گئی ہے۔ حکام کے مطابق اب تک سترہ ہزار سے زائد افراد کو محفوظ مقامات پر منتقل کیا جا چکا ہے، جبکہ تین افراد جاں بحق ہوئے ہیں۔
اینکر: ادارۂ موسمیات کے مطابق بارشوں کا سلسلہ مزید اڑتالیس گھنٹے جاری رہنے کا امکان ہے، اور نشیبی علاقوں کے باشندیوں کو ہدایت کی گئی ہے کہ وہ احتیاطی انتظامات مکمل کر لیں۔
اینکر: وزیراعظم نے متاثرہ علاقوں کے فضائی جائزے کے بعد اعلان کیا ہے کہ ریلیف کا کام رات دن جاری رہے گا اور کسی بھی خاندان کو تنہا نہیں چھوڑا جائے گا۔
```

## B. Directed rehearsal script

Bracketed cues are non-spoken.

```text
اینکر: [stable bulletin opening; state the emergency before resetting into attribution] دریائے سندھ میں اونچے درجے کے سیلاب کے باعث چار اضلاع میں ہنگامی حالت نافذ کر دی گئی ہے۔ [neutral attribution; articulate the figure] حکام کے مطابق اب تک سترہ ہزار سے زائد افراد کو محفوظ مقامات پر منتقل کیا جا چکا ہے، [brief boundary; report the deaths without acted grief] جبکہ تین افراد جاں بحق ہوئے ہیں۔
اینکر: [forecast attribution and uncertainty first; then a clear public instruction] ادارۂ موسمیات کے مطابق بارشوں کا سلسلہ مزید اڑتالیس گھنٹے جاری رہنے کا امکان ہے، اور نشیبی علاقوں کے باشندیوں کو ہدایت کی گئی ہے کہ وہ احتیاطی انتظامات مکمل کر لیں۔
اینکر: [official announcement; let “رات دن” and the final assurance remain intelligible, not theatrical] وزیراعظم نے متاثرہ علاقوں کے فضائی جائزے کے بعد اعلان کیا ہے کہ ریلیف کا کام رات دن جاری رہے گا اور کسی بھی خاندان کو تنہا نہیں چھوڑا جائے گا۔
```

## C. Portable synthesis plan

| Turn | Canonical utterance | Non-spoken delivery note | Pause/focus |
|---|---|---|---|
| 1 | دریائے سندھ میں اونچے درجے کے سیلاب کے باعث چار اضلاع میں ہنگامی حالت نافذ کر دی گئی ہے۔ حکام کے مطابق اب تک سترہ ہزار سے زائد افراد کو محفوظ مقامات پر منتقل کیا جا چکا ہے، جبکہ تین افراد جاں بحق ہوئے ہیں۔ | event → attribution/figure → casualty | reset after first sentence; light boundary before `جبکہ` |
| 2 | ادارۂ موسمیات کے مطابق بارشوں کا سلسلہ مزید اڑتالیس گھنٹے جاری رہنے کا امکان ہے، اور نشیبی علاقوں کے باشندیوں کو ہدایت کی گئی ہے کہ وہ احتیاطی انتظامات مکمل کر لیں۔ | forecast/uncertainty → public instruction | preserve `امکان`; articulate `اڑتالیس` |
| 3 | وزیراعظم نے متاثرہ علاقوں کے فضائی جائزے کے بعد اعلان کیا ہے کہ ریلیف کا کام رات دن جاری رہے گا اور کسی بھی خاندان کو تنہا نہیں چھوڑا جائے گا۔ | attribution → action → assurance | light focus `رات دن`, then `تنہا نہیں` |

## D. Eleven v3 adapter

Target: ElevenLabs Text to Speech API / model `eleven_v3` / Urdu inferred from input / showcase anchor voice above. Documentation checked 2026-07-31. V3’s open-ended cues describe informational delivery rather than emotion. `[short pause]` is documented explicitly; every detailed cue still requires a tag-free baseline and native listening.

```text
Voice: اینکر
[stable news delivery, then neutral attribution] دریائے سندھ میں اونچے درجے کے سیلاب کے باعث چار اضلاع میں ہنگامی حالت نافذ کر دی گئی ہے۔ حکام کے مطابق اب تک سترہ ہزار سے زائد افراد کو محفوظ مقامات پر منتقل کیا جا چکا ہے، [short pause, reporting the casualty without dramatizing] جبکہ تین افراد جاں بحق ہوئے ہیں۔
Voice: اینکر
[clear forecast attribution, preserving uncertainty, then a direct public instruction] ادارۂ موسمیات کے مطابق بارشوں کا سلسلہ مزید اڑتالیس گھنٹے جاری رہنے کا امکان ہے، اور نشیبی علاقوں کے باشندیوں کو ہدایت کی گئی ہے کہ وہ احتیاطی انتظامات مکمل کر لیں۔
Voice: اینکر
[formal announcement, ending with composed assurance] وزیراعظم نے متاثرہ علاقوں کے فضائی جائزے کے بعد اعلان کیا ہے کہ ریلیف کا کام رات دن جاری رہے گا اور کسی بھی خاندان کو تنہا نہیں چھوڑا جائے گا۔
```

## Checks

- Artifact A is source-identical; attribution, uncertainty, figures, and claims are unchanged.
- Removing every provider tag from D yields artifact A word for word.
- No cue adds grief or certainty; news direction stays informational.
- Listening test: names and figures, the casualty boundary, forecast uncertainty, and whether the final cue remains composed rather than promotional.
