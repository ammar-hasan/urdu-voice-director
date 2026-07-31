# Sample scene — Ghalib at the مشاعرہ

Sample voices: شاعر=Deep South Asian Baritone

Generated with skill version: 0.3.0

References loaded: [poetry and recitation](../skills/urdu-voice-director/references/poetry-and-recitation.md), [pronunciation](../skills/urdu-voice-director/references/pronunciation.md), and [provider capabilities](../skills/urdu-voice-director/references/provider-capabilities.md).

## Source

Selected ashaar from Ghalib’s ghazal «ہزاروں خواہشیں ایسی...»; text verified against [Rekhta](https://www.rekhta.org/ghazals/hazaaron-khvaahishen-aisii-ki-har-khvaahish-pe-dam-nikle-mirza-ghalib-ghazals?lang=ur). Canonical: direction only.

```text
شاعر: ہزاروں خواہشیں ایسی کہ ہر خواہش پہ دم نکلے۔ بہت نکلے مرے ارمان لیکن پھر بھی کم نکلے۔
شاعر: نکلنا خلد سے آدم کا سنتے آئے ہیں لیکن، بہت بے آبرو ہو کر ترے کوچے سے ہم نکلے۔
شاعر: ہوئی جن سے توقع خستگی کی داد پانے کی، وہ ہم سے بھی زیادہ خستۂ تیغ ستم نکلے۔
شاعر: محبت میں نہیں ہے فرق جینے اور مرنے کا، اسی کو دیکھ کر جیتے ہیں جس کافر پہ دم نکلے۔
شاعر: کہاں مے خانہ کا دروازہ غالب اور کہاں واعظ، پر اتنا جانتے ہیں کل وہ جاتا تھا کہ ہم نکلے۔
```

## Prosody and performance decision

- Mode: public `تحت اللفظ` mushaira recitation, not singing. The alternate quiet reading would use a smaller address and shorter line-boundary space; neither changes the poem.
- Metre: `بحرِ ہزج مثمن سالم` — `مفاعیلن مفاعیلن مفاعیلن مفاعیلن`. The words must carry this quantitative pattern; an emotion tag cannot repair broken scansion.
- Radif: `نکلے`. Qafiya immediately before it returns through `دم`, `کم`, `ہم`, `ستم`, and `ہم`. Do not separate qafiya from radif.
- Izafat/pronunciation review: `خُلد`, `خستۂ تیغِ ستم`, `واعظ`, and the metrical readings of short/long syllables. Provider diacritics remain a separate tested layer; the canonical verse is untouched.
- Allowed pauses: between the two misraa of each sher and at a genuine syntactic boundary. No pause inside izafat, compounds, or qafiya–radif.
- Mushaira distinction: the performer may give the audience time at a line boundary. No `واہ واہ`, applause, repeated line, or other audience material is inserted into the canonical poem.

## A. Clean spoken Urdu

```text
شاعر: ہزاروں خواہشیں ایسی کہ ہر خواہش پہ دم نکلے۔ بہت نکلے مرے ارمان لیکن پھر بھی کم نکلے۔
شاعر: نکلنا خلد سے آدم کا سنتے آئے ہیں لیکن، بہت بے آبرو ہو کر ترے کوچے سے ہم نکلے۔
شاعر: ہوئی جن سے توقع خستگی کی داد پانے کی، وہ ہم سے بھی زیادہ خستۂ تیغ ستم نکلے۔
شاعر: محبت میں نہیں ہے فرق جینے اور مرنے کا، اسی کو دیکھ کر جیتے ہیں جس کافر پہ دم نکلے۔
شاعر: کہاں مے خانہ کا دروازہ غالب اور کہاں واعظ، پر اتنا جانتے ہیں کل وہ جاتا تھا کہ ہم نکلے۔
```

## B. Directed rehearsal script

Bracketed cues are non-spoken.

```text
شاعر: [تحت اللفظ؛ وزن قائم، مطلع کا پہلا مصرع سامعین کی طرف] ہزاروں خواہشیں ایسی کہ ہر خواہش پہ دم نکلے۔ [مصرع ثانی سے پہلے جگہ؛ “کم نکلے” میں قافیہ اور ردیف ایک اکائی] بہت نکلے مرے ارمان لیکن پھر بھی کم نکلے۔
شاعر: [پہلا مصرع قصے کی طرح واضح؛ “لیکن” پر مصرع مکمل] نکلنا خلد سے آدم کا سنتے آئے ہیں لیکن، [دوسرا مصرع ذاتی تقابل کے طور پر؛ “ہم نکلے” نہ توڑیں] بہت بے آبرو ہو کر ترے کوچے سے ہم نکلے۔
شاعر: [توقع کا نحوی سلسلہ قائم] ہوئی جن سے توقع خستگی کی داد پانے کی، [خستۂ تیغِ ستم کی اضافت مت توڑیں؛ ردیف تک بہاؤ] وہ ہم سے بھی زیادہ خستۂ تیغ ستم نکلے۔
شاعر: [دعویٰ پورا اور وزنی؛ شور نہیں] محبت میں نہیں ہے فرق جینے اور مرنے کا، [مشاعرے کے سامع کے لیے مصرعوں کے بیچ جگہ؛ پھر “دم نکلے” ایک ساتھ] اسی کو دیکھ کر جیتے ہیں جس کافر پہ دم نکلے۔
شاعر: [مقطع؛ “غالب” اور “واعظ” کا تقابل واضح] کہاں مے خانہ کا دروازہ غالب اور کہاں واعظ، [دوسرے مصرع میں استدلال کا تسلسل؛ “ہم نکلے” ایک ساتھ] پر اتنا جانتے ہیں کل وہ جاتا تھا کہ ہم نکلے۔
```

## C. Portable synthesis plan

| Sher | Non-spoken delivery note | Pause site | Prosodic/pronunciation check |
|---|---|---|---|
| 1 | establish metre and public address; second misra completes the matla | between misraa | qafiya–radif `دم نکلے` / `کم نکلے` |
| 2 | shared narrative first, personal comparison second | after `لیکن،` at line boundary | `خُلد`; keep `ہم نکلے` joined |
| 3 | preserve the long syntactic expectation into its answer | between misraa | `خستۂ تیغِ ستم`; no break in izafat |
| 4 | full proposition, then audience space and second line | longer mushaira line boundary | `دم نکلے` joined; no whispering |
| 5 | make the maqta’s contrast legible without a joke voice | between misraa | `واعظ`; `ہم نکلے` joined |

Quiet-reading alternative: remove the expanded audience space, reduce address and dynamic range, and preserve the same metre, syntax, qafiya, radif, izafat, and canonical words.

## D. Eleven v3 adapter

Target: ElevenLabs Text to Speech API / model `eleven_v3` / Urdu inferred from input / showcase voice above. Documentation checked 2026-07-31. V3 has no documented Urdu metre control. The detailed tags express the chosen `تحت اللفظ` mode and permitted line-boundary timing; they do not stand in for scansion. `[short pause]` and `[long pause]` are documented v3 controls. Exact Urdu poetic response requires a knowledgeable listener.

```text
Voice: شاعر
[measured public recitation, maintaining the poetic metre] ہزاروں خواہشیں ایسی کہ ہر خواہش پہ دم نکلے۔ [short pause, then completing the matla without separating rhyme and refrain] بہت نکلے مرے ارمان لیکن پھر بھی کم نکلے۔
Voice: شاعر
[clear narrative recitation, maintaining the metre] نکلنا خلد سے آدم کا سنتے آئے ہیں لیکن، [short pause, then letting the second line land as a personal comparison] بہت بے آبرو ہو کر ترے کوچے سے ہم نکلے۔
Voice: شاعر
[sustaining the syntax and metre through the expectation] ہوئی جن سے توقع خستگی کی داد پانے کی، [short pause, preserving the izafat chain] وہ ہم سے بھی زیادہ خستۂ تیغ ستم نکلے۔
Voice: شاعر
[full, composed mushaira address without shouting] محبت میں نہیں ہے فرق جینے اور مرنے کا، [long pause for the audience at the line boundary] اسی کو دیکھ کر جیتے ہیں جس کافر پہ دم نکلے۔
Voice: شاعر
[clear maqta, foregrounding the contrast without caricature] کہاں مے خانہ کا دروازہ غالب اور کہاں واعظ، [short pause, then carrying the reasoning to the joined rhyme and refrain] پر اتنا جانتے ہیں کل وہ جاتا تھا کہ ہم نکلے۔
```

## Checks

- Artifact A is canonical and source-identical; no performance or audience words enter it.
- Removing every provider tag from D yields artifact A word for word.
- The adapter uses detailed direction, but metre, syllable length, izafat, qafiya, and radif remain independent review requirements.
- Listening test: scan all five ashaar, verify `خُلد`, `خستۂ تیغِ ستم`, and `واعظ`, reject broken qafiya–radif or singsong, and compare the mushaira timing with a quiet tag-free reading.
