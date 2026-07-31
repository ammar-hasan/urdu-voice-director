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

- **Text and mode:** five complete shers from a canonical ghazal, performed here as restrained, speech-oriented mushaira recitation (`تحت اللفظ`). A quiet literary reading would use a smaller pitch/dynamic range and less audience-facing anticipation. This mushaira plan may open the address and let formal expectations gather, but it adds no applause, interjection, repeated line, or sung `ترنم` because none is authorized in the source.
- **Metre verified:** Frances Pritchett’s [Ghazal 219](https://franpritchett.com/00ghalib/219/index_219.html) identifies the ghazal as metre `G2`; her [meter chart](https://franpritchett.com/00ghalib/about/txt_meters.html) gives `- = = = / - = = = / - = = = / - = = =` (`-` short, `=` long), conventionally `مفاعیلن مفاعیلن مفاعیلن مفاعیلن`: بحرِ ہزج مثمن سالم. A representative foot division is `ہزاروں خوا / ہشیں ایسی / کہ ہر خواہش / پہ دم نکلے`. These are metrical, not pause, boundaries.
- **Syllable-length implications:** scan what is pronounced, not what is merely written. The written `و` in `خواہش` does not create an extra syllable; `ہزاروں` carries nasalization without a separate consonantal syllable; `مِرے` and `تِرے` are the supplied reduced forms and must not expand to `میرے`/`تیرے`; and short syllables must not be stretched just to sound “poetic.” Metre constrains the sequence but does not prescribe stress, milliseconds, or an Eleven v3 control.
- **Qafiya and radif:** the radif is `نکلے`; the selected qafiya words are `دم`, `کم`, `ہم`, and `ستم`, sharing the `/am/` rhyme immediately before it. Keep each qafiya–radif arrival connected: `دم نکلے`, `کم نکلے`, `ہم نکلے`, `ستم نکلے`. Do not insert a tag or pause inside those units.
- **Izafat and compounds:** read `خستۂ تیغ ستم` as `خستۂ تیغِ ستم` (`khasta-e tegh-e sitam`): two audible izafat links, the first displayed by `ۂ` and the second grammatically present though its zer is not printed in the canonical source. Do not pause inside the chain. `مے خانہ` is a compound (`mai-khāna`), not an izafat construction; keep it connected.
- **Pronunciation questions:** test `خُلد` (`khuld`), `آدم` (`ādam`), `مِرے` (`mire`), `تِرے` (`tire`), `خستگی`, `خستۂ تیغِ ستم`, `مے خانہ`, `غالب`, and `واعظ` with the exact voice. Keep canonical spelling in A and D; any diacritic or IPA workaround belongs to a separate, tested provider experiment.
- **Lawful pause sites:** the boundary between the two misras of each sher is the safest full beat. Smaller semantic groupings may occur before `لیکن پھر بھی`, after `بہت بے آبرو ہو کر`, after `وہ ہم سے بھی زیادہ`, before `جس کافر`, and between the two `کہاں` clauses. Do not pause inside `خلد سے آدم کا`, `جینے اور مرنے کا`, either izafat link, `مے خانہ کا دروازہ`, or any qafiya–radif unit.
- **Provider boundary:** tags below can suggest an audible public action or a turn at a lawful phrase boundary. They are not metre, syllable-length, izafat, qafiya, radif, or pause-duration controls. The tag-free reading remains the first baseline.

## A. Clean spoken Urdu

```text
شاعر: ہزاروں خواہشیں ایسی کہ ہر خواہش پہ دم نکلے۔ بہت نکلے مرے ارمان لیکن پھر بھی کم نکلے۔
شاعر: نکلنا خلد سے آدم کا سنتے آئے ہیں لیکن، بہت بے آبرو ہو کر ترے کوچے سے ہم نکلے۔
شاعر: ہوئی جن سے توقع خستگی کی داد پانے کی، وہ ہم سے بھی زیادہ خستۂ تیغ ستم نکلے۔
شاعر: محبت میں نہیں ہے فرق جینے اور مرنے کا، اسی کو دیکھ کر جیتے ہیں جس کافر پہ دم نکلے۔
شاعر: کہاں مے خانہ کا دروازہ غالب اور کہاں واعظ، پر اتنا جانتے ہیں کل وہ جاتا تھا کہ ہم نکلے۔
```

## B. Directed rehearsal script

```text
شاعر: [Establish the matla clearly to the room; let “ہر خواہش” recur without hammering the metre.] ہزاروں خواہشیں ایسی کہ ہر خواہش پہ دم نکلے۔ [After the misra beat, let “لیکن” turn abundance into insufficiency; keep “کم نکلے” connected.] بہت نکلے مرے ارمان لیکن پھر بھی کم نکلے۔
شاعر: [Carry the first misra through “لیکن” as a suspended comparison.] نکلنا خلد سے آدم کا سنتے آئے ہیں لیکن، [Resolve publicly but without melodrama; keep “ہم نکلے” intact.] بہت بے آبرو ہو کر ترے کوچے سے ہم نکلے۔
شاعر: [Ask for recognition rather than pleading for it; keep the first misra grammatically whole.] ہوئی جن سے توقع خستگی کی داد پانے کی، [Let “ہم سے بھی زیادہ” tighten the comparison; then connect both izafats and the rhyme-refrain.] وہ ہم سے بھی زیادہ خستۂ تیغ ستم نکلے۔
شاعر: [State the proposition with poise; do not stretch “جینے اور مرنے کا”.] محبت میں نہیں ہے فرق جینے اور مرنے کا، [Let the second misra specify the paradox; preserve “دم نکلے” as one arrival.] اسی کو دیکھ کر جیتے ہیں جس کافر پہ دم نکلے۔
شاعر: [Open the paired “کہاں” contrast to the audience; keep “مے خانہ کا دروازہ” connected.] کہاں مے خانہ کا دروازہ غالب اور کہاں واعظ، [After the misra beat, release the closing observation conversationally; do not overplay the wit.] پر اتنا جانتے ہیں کل وہ جاتا تھا کہ ہم نکلے۔
```

## C. Portable synthesis plan

1. **شاعر**
   - Canonical utterance: `ہزاروں خواہشیں ایسی کہ ہر خواہش پہ دم نکلے۔ بہت نکلے مرے ارمان لیکن پھر بھی کم نکلے۔`
   - Delivery: restrained public establishment of the matla; the second misra turns on `لیکن`.
   - Beat/pause: one beat between misras; no pause at metrical foot divisions or inside `دم نکلے`/`کم نکلے`.
   - Pronunciation: `خواہش` begins as one syllabic onset-vowel unit, not an extra `خُو-ا`; read `مِرے`, not `میرے`.
2. **شاعر**
   - Canonical utterance: `نکلنا خلد سے آدم کا سنتے آئے ہیں لیکن، بہت بے آبرو ہو کر ترے کوچے سے ہم نکلے۔`
   - Delivery: hold the comparison through line-final `لیکن`, then resolve it without theatrical shame.
   - Beat/pause: a sher-boundary beat after `لیکن،`; an optional light grouping after `ہو کر`; keep `خلد سے آدم کا` and `ہم نکلے` intact.
   - Pronunciation: `خُلد`, `آدم`, `بے آبرو`, and `تِرے`; do not expand the supplied form.
3. **شاعر**
   - Canonical utterance: `ہوئی جن سے توقع خستگی کی داد پانے کی، وہ ہم سے بھی زیادہ خستۂ تیغ ستم نکلے۔`
   - Delivery: expectation first; comparison tightens on `ہم سے بھی زیادہ`.
   - Beat/pause: one beat between misras; a light grouping may follow `زیادہ`; no break inside `خستۂ تیغِ ستم` or `ستم نکلے`.
   - Pronunciation: `خستگی`; then two audible izafats in `خستۂ تیغِ ستم`.
4. **شاعر**
   - Canonical utterance: `محبت میں نہیں ہے فرق جینے اور مرنے کا، اسی کو دیکھ کر جیتے ہیں جس کافر پہ دم نکلے۔`
   - Delivery: poised assertion followed by its specifying paradox.
   - Beat/pause: one beat between misras; a light phrase boundary may precede `جس کافر`; keep `جینے اور مرنے کا` and `دم نکلے` intact.
   - Pronunciation: ordinary canonical copy first.
5. **شاعر**
   - Canonical utterance: `کہاں مے خانہ کا دروازہ غالب اور کہاں واعظ، پر اتنا جانتے ہیں کل وہ جاتا تھا کہ ہم نکلے۔`
   - Delivery: audience-facing contrast, then a conversational closing observation.
   - Beat/pause: articulate the paired `کہاں` clauses without breaking `مے خانہ کا دروازہ`; take the main beat after `واعظ،`; keep `ہم نکلے` intact.
   - Pronunciation: `مے خانہ` (`mai-khāna`), `غالب`, and `واعظ`; confirm the exact voice preserves the consonants and long vowels.

## D. Eleven v3 adapter

Provider: ElevenLabs
Model ID: `eleven_v3`
API or product surface: Text to Speech API, Create speech endpoint (`POST /v1/text-to-speech/:voice_id`), synthesized per turn
Locale: Not set in the integration request; regional locale/accent fit remains listening-dependent
Language: Urdu inferred from input; no `language_code` field was sent in the integration request
Voice: شاعر=Deep South Asian Baritone (`QhHNJKW7n5VCJm12Xq1F`)
Documentation checked: 2026-07-31 — [Eleven v3 language support](https://elevenlabs.io/docs/help-center/other/what-languages-do-you-support), [Text to Speech best practices](https://elevenlabs.io/docs/overview/capabilities/text-to-speech/best-practices), [audio tags](https://help.elevenlabs.io/hc/en-us/articles/35869142561297-How-do-audio-tags-work-with-Eleven-v3), and [Create speech](https://elevenlabs.io/docs/api-reference/text-to-speech/convert)
Canonical utterance: Artifact A, one canonical utterance per turn
Request fields / inline controls: `text`, `model_id: "eleven_v3"`; the selected `voice_id` is in the endpoint path and `output_format=mp3_44100_128` is in the query. Open-ended tags are exact-voice experiments placed only at defensible phrase or misra boundaries. Do not use SSML breaks, and do not treat any tag as a metre control.
Clean caption: Artifact A, without `Voice:` routing or bracketed tags
Needs listening test: Yes — native Urdu prosody, metre, pronunciation, tag scope, and regional voice fit

```text
Voice: شاعر
[restrained public address] ہزاروں خواہشیں ایسی کہ ہر خواہش پہ دم نکلے۔ [let “لیکن” turn the comparison without forcing the rhyme] بہت نکلے مرے ارمان لیکن پھر بھی کم نکلے۔
Voice: شاعر
نکلنا خلد سے آدم کا سنتے آئے ہیں لیکن، [let the comparison resolve plainly] بہت بے آبرو ہو کر ترے کوچے سے ہم نکلے۔
Voice: شاعر
[ask for recognition, not sympathy] ہوئی جن سے توقع خستگی کی داد پانے کی، وہ ہم سے بھی زیادہ [tighten the comparison] خستۂ تیغ ستم نکلے۔
Voice: شاعر
محبت میں نہیں ہے فرق جینے اور مرنے کا، اسی کو دیکھ کر جیتے ہیں جس کافر پہ دم نکلے۔
Voice: شاعر
[open the contrast to the room] کہاں مے خانہ کا دروازہ غالب اور کہاں واعظ، [release the closing observation conversationally] پر اتنا جانتے ہیں کل وہ جاتا تھا کہ ہم نکلے۔
```

## Checks

- A preserves the five source shers word-for-word, in the same order and with no audience material, repetition, or provider syntax.
- The metre claim is verified as Pritchett `G2`, بحرِ ہزج مثمن سالم: `مفاعیلن` four times per misra. The scansion note does not turn foot divisions into pause marks.
- Qafiya `/am/` and radif `نکلے` remain connected; both audible izafats in `خستۂ تیغِ ستم` are documented; compound and pronunciation questions remain outside the canonical text.
- Quiet reading and mushaira are distinguished before direction. This adapter chooses restrained `تحت اللفظ`-like public address without applause, sung delivery, or unauthorized repetition.
- Removing bracketed tags from every D turn yields the corresponding A turn exactly, with the same five-turn `شاعر` sequence. Tags occur only at defensible phrase or misra boundaries and are not claimed to control metre.
- Artifact D was synthesized during repository integration with Deep South Asian Baritone (`QhHNJKW7n5VCJm12Xq1F`). A native reviewer familiar with Urdu prosody must still compare it with the tag-free baseline and judge metre, syllable length, `مِرے`/`تِرے`, `خُلد`, both izafats, `مے خانہ`, `واعظ`, pause sites, and each qafiya–radif arrival.
