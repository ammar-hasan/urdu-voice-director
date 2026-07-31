# Sample scene — the evening bulletin

Sample voices: اینکر=Sara

## Source

Original news copy written for this showcase; direction only.

```text
اینکر: دریائے سندھ میں اونچے درجے کے سیلاب کے باعث چار اضلاع میں ہنگامی حالت نافذ کر دی گئی ہے۔ حکام کے مطابق اب تک سترہ ہزار سے زائد افراد کو محفوظ مقامات پر منتقل کیا جا چکا ہے، جبکہ تین افراد جاں بحق ہوئے ہیں۔
اینکر: ادارۂ موسمیات کے مطابق بارشوں کا سلسلہ مزید اڑتالیس گھنٹے جاری رہنے کا امکان ہے، اور نشیبی علاقوں کے باشندیوں کو ہدایت کی گئی ہے کہ وہ احتیاطی انتظامات مکمل کر لیں۔
اینکر: وزیراعظم نے متاثرہ علاقوں کے فضائی جائزے کے بعد اعلان کیا ہے کہ ریلیف کا کام رات دن جاری رہے گا اور کسی بھی خاندان کو تنہا نہیں چھوڑا جائے گا۔
```

## Scene card

- Speaker/audience: this anchor (اینکر), a professional news anchor addressing a mass broadcast audience from a studio bulletin setting; no direct-address pronouns in the copy, so no `آپ`/`تم` decision is required.
- Protected: every word of the news copy (canonical — no rewriting), all three turns, the single speaker, the formal broadcast register, and every fact and figure (four districts, seventeen thousand plus evacuated, three dead, forty-eight hours, relief commitment).
- Established: grave flood bulletin on دریائے سندھ; pure formal Urdu with no code-switching; no religious forms; locale context is Pakistani (دریائے سندھ) but no regional accent is mandated.
- Unresolved: anchor gender and age (no gendered direction given); voice selection for synthesis; exact per-voice tag compliance.
- Output target: ElevenLabs `eleven_v3` sample — TTS with documented inline audio tags; clean caption copy kept separate.
- Arc across the three turns: gravity (emergency + casualty toll) → measured forward caution (forecast + public advisory) → controlled institutional reassurance (PM's commitment). The emotional peak is the casualty clause in turn 1, carried by pacing and deceleration, not by added emotion.
- Living-scene pass: routine, explicit bulletin — light pass only; the governing relationship is broadcaster-to-public, and no sensory detail or subtext is invented.

## Turn audit

1. Turn 1 — **Direction only.** Wording is canonical broadcast Urdu and must not change. Delivery risk: a flat newscaster monotone that buries the casualty clause, or melodrama on it. Decision: steady grave register throughout; the figures delivered evenly; one short beat before `جبکہ` and a slight deceleration so `تین افراد جاں بحق ہوئے ہیں` lands by weight, not by dramatizing.
2. Turn 2 — **Direction only.** Wording unchanged. Delivery risk: alarmism on the forecast, or rushing the number. Decision: measured, practical, forward-looking tone; `اڑتالیس گھنٹے` paced deliberately; the advisory read as clear public instruction, not a warning spike.
3. Turn 3 — **Direction only.** Wording unchanged. Delivery risk: triumphalism or speechifying on the PM's promise. Decision: even, assured institutional reassurance; light emphasis on `تنہا نہیں`; no swelling delivery on the final clause.

## A. Clean spoken Urdu

```text
اینکر: دریائے سندھ میں اونچے درجے کے سیلاب کے باعث چار اضلاع میں ہنگامی حالت نافذ کر دی گئی ہے۔ حکام کے مطابق اب تک سترہ ہزار سے زائد افراد کو محفوظ مقامات پر منتقل کیا جا چکا ہے، جبکہ تین افراد جاں بحق ہوئے ہیں۔
اینکر: ادارۂ موسمیات کے مطابق بارشوں کا سلسلہ مزید اڑتالیس گھنٹے جاری رہنے کا امکان ہے، اور نشیبی علاقوں کے باشندیوں کو ہدایت کی گئی ہے کہ وہ احتیاطی انتظامات مکمل کر لیں۔
اینکر: وزیراعظم نے متاثرہ علاقوں کے فضائی جائزے کے بعد اعلان کیا ہے کہ ریلیف کا کام رات دن جاری رہے گا اور کسی بھی خاندان کو تنہا نہیں چھوڑا جائے گا۔
```

## B. Directed rehearsal script

```text
اینکر: [steady, grave bulletin register; unhurried] دریائے سندھ میں اونچے درجے کے سیلاب کے باعث چار اضلاع میں ہنگامی حالت نافذ کر دی گئی ہے۔ حکام کے مطابق اب تک سترہ ہزار سے زائد افراد کو محفوظ مقامات پر منتقل کیا جا چکا ہے، [short beat; the voice lowers slightly with the loss — weight, not drama] جبکہ تین افراد جاں بحق ہوئے ہیں۔

اینکر: [measured and practical; the number paced clearly, the advisory spoken as instruction, not alarm] ادارۂ موسمیات کے مطابق بارشوں کا سلسلہ مزید اڑتالیس گھنٹے جاری رہنے کا امکان ہے، اور نشیبی علاقوں کے باشندیوں کو ہدایت کی گئی ہے کہ وہ احتیاطی انتظامات مکمل کر لیں۔

اینکر: [measured institutional reassurance] وزیراعظم نے متاثرہ علاقوں کے فضائی جائزے کے بعد اعلان کیا ہے کہ ریلیف کا کام رات دن جاری رہے گا [even resolve, no triumph] اور کسی بھی خاندان کو تنہا نہیں چھوڑا جائے گا۔
```

## C. Portable synthesis plan

| Turn | Speaker | Clean spoken text | Delivery note (not spoken) | Pause/beat | Emphasis | Pronunciation |
|---|---|---|---|---|---|---|
| 1 | اینکر | دریائے سندھ میں اونچے درجے کے سیلاب کے باعث چار اضلاع میں ہنگامی حالت نافذ کر دی گئی ہے۔ حکام کے مطابق اب تک سترہ ہزار سے زائد افراد کو محفوظ مقامات پر منتقل کیا جا چکا ہے، جبکہ تین افراد جاں بحق ہوئے ہیں۔ | steady grave register; figures even; casualty clause carried by slight deceleration | short beat before `جبکہ` | `تین افراد` by slowing, not by stress | `جاں بحق` as a respectful set phrase; numbers already spelled as words |
| 2 | اینکر | ادارۂ موسمیات کے مطابق بارشوں کا سلسلہ مزید اڑتالیس گھنٹے جاری رہنے کا امکان ہے، اور نشیبی علاقوں کے باشندیوں کو ہدایت کی گئی ہے کہ وہ احتیاطی انتظامات مکمل کر لیں۔ | measured, practical, forward-looking; advisory as clear public instruction | no added pause | `اڑتالیس گھنٹے` paced clearly | ensure crisp articulation of `اڑتالیس`; `ادارۂ` with its conventional hamza reading |
| 3 | اینکر | وزیراعظم نے متاثرہ علاقوں کے فضائی جائزے کے بعد اعلان کیا ہے کہ ریلیف کا کام رات دن جاری رہے گا اور کسی بھی خاندان کو تنہا نہیں چھوڑا جائے گا۔ | even, assured institutional reassurance; no triumphalism | no added pause | `تنہا نہیں` light | — |

## D. Eleven v3 adapter

Target: ElevenLabs / `eleven_v3` / text-to-speech surface / Urdu (listed among v3's 74 languages; no separate locale field) / voice **unresolved** — choose a voice whose training data is serious and professional, since voice match governs tag effectiveness. Support status: documented; verified against current ElevenLabs v3 best-practices documentation on 2026-07-30 (capability matrix dated 2026-07-29).

```text
Voice: اینکر
[grave, steady] دریائے سندھ میں اونچے درجے کے سیلاب کے باعث چار اضلاع میں ہنگامی حالت نافذ کر دی گئی ہے۔ حکام کے مطابق اب تک سترہ ہزار سے زائد افراد کو محفوظ مقامات پر منتقل کیا جا چکا ہے، جبکہ تین افراد جاں بحق ہوئے ہیں۔

Voice: اینکر
ادارۂ موسمیات کے مطابق بارشوں کا سلسلہ مزید اڑتالیس گھنٹے جاری رہنے کا امکان ہے، اور نشیبی علاقوں کے باشندیوں کو ہدایت کی گئی ہے کہ وہ احتیاطی انتظامات مکمل کر لیں۔

Voice: اینکر
[resolute] وزیراعظم نے متاثرہ علاقوں کے فضائی جائزے کے بعد اعلان کیا ہے کہ ریلیف کا کام رات دن جاری رہے گا اور کسی بھی خاندان کو تنہا نہیں چھوڑا جائے گا۔
```

Notes: `Voice:` labels are routing metadata for the dialogue workflow and must not enter the spoken text field unless the product treats them as metadata. The two bracketed tags are descriptive audible-delivery tags per documented v3 audio-tag practice; spoken words are identical to artifact A. v3 does not support SSML break tags, and no ellipses or dashes were inserted, so pacing relies on the canonical text structure plus the tags; if delivery rushes, adjust the request-level speed setting (a non-text control) rather than the text. Stability near Natural is suggested so the tags register without hallucination risk. Needs listening test with the selected voice: Urdu compliance of the two tags, casualty-clause pacing, and number/name prosody.

## Restraint notes

- No word changed anywhere: the copy is canonical, so artifacts A, B, C, and D carry identical spoken words; only non-spoken direction was added.
- No invented facts, figures, places, or evaluative adjectives (no `افسوسناک`, no commentary); the gravity comes entirely from register and pacing.
- Emotional peak (three dead) is carried by one beat and a slight deceleration — no `[sighs]`, `[crying]`, or similar effect tags, which would violate professional anchor register.
- Turn 2 carries no inline tag at all; wording and sequence already make it playable. Only two tags across three turns.
- Source numbers were already spelled as words (`سترہ ہزار`, `اڑتالیس`), so no normalization divergence was needed; caption copy equals artifact A word-for-word.
- Anchor gender, age, and voice are left unresolved rather than assumed; no gendered direction was written.
- v3's ellipses/dash pause tricks were declined to keep canonical punctuation intact; any residual timing issues go to the request-level speed setting and a native-Urdu listening pass, not into the text.
