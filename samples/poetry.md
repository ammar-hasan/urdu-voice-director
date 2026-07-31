# Sample scene — Ghalib at the مشاعرہ

Sample voices: شاعر=Deep South Asian Baritone

## Source

Selected ashaar from Ghalib's ghazal «ہزاروں خواہشیں ایسی...»; text verified against https://www.rekhta.org/ghazals/hazaaron-khvaahishen-aisii-ki-har-khvaahish-pe-dam-nikle-mirza-ghalib-ghazals?lang=ur — canonical, direction only.

```text
شاعر: ہزاروں خواہشیں ایسی کہ ہر خواہش پہ دم نکلے۔ بہت نکلے مرے ارمان لیکن پھر بھی کم نکلے۔
شاعر: نکلنا خلد سے آدم کا سنتے آئے ہیں لیکن، بہت بے آبرو ہو کر ترے کوچے سے ہم نکلے۔
شاعر: ہوئی جن سے توقع خستگی کی داد پانے کی، وہ ہم سے بھی زیادہ خستۂ تیغ ستم نکلے۔
شاعر: محبت میں نہیں ہے فرق جینے اور مرنے کا، اسی کو دیکھ کر جیتے ہیں جس کافر پہ دم نکلے۔
شاعر: کہاں مے خانہ کا دروازہ غالب اور کہاں واعظ، پر اتنا جانتے ہیں کل وہ جاتا تھا کہ ہم نکلے۔
```

## Scene card

- Setting: a مشاعرہ; the poet شاعر recites five selected ashaar from Ghalib's canonical ghazal «ہزاروں خواہشیں ایسی...» before a listening audience, with the واہ-bearing attention that setting implies.
- Protected: exact canonical wording, verse order, the single speaker, and all five turns (each sher = one turn). No refinement of words is permitted; every turn is direction-only.
- Speaker and register: a poet-performer in classical recitation register addressing an audience, not a conversation partner. Gender, age, and locale of شاعر are not established and are not inferred; no gendered forms appear in or are added to the text.
- Governing relationship: performer → سامعین. The audience never speaks; its presence is realized only through pacing room between ashaar, never through scripted reaction.
- Arc across the five turns: wistful opening invitation → proud allusion turned personal → restrained formal grievance → the ghazal's creed (emotional peak, carried by stillness) → wry self-addressed release.
- No code-switching present; none added.
- Output target: ElevenLabs `eleven_v3` sample. Voice and locale are `unresolved` (Urdu is documented for Eleven v3; specific voice behavior is untested). Verified 2026-07-30 against first-party docs: v3 supports bracketed audio tags and does **not** support SSML break tags; pauses come from tags, ellipses, and punctuation.

## Turn audit

1. **Turn 1 (ہزاروں خواہشیں...) — Direction only.** Words are canonical and speakable. The shift is internal: the famous first misra is a public invitation; the second misra narrows to private reckoning. Delivery risk is over-sighing the whole sher; direct the pivot, not a blanket mood.
2. **Turn 2 (نکلنا خلد سے آدم...) — Direction only.** First clause is storytelling allusion (`سنتے آئے ہیں لیکن`); `لیکن` pivots to personal claim. Risk: reading بے آبرو as shame. The sher holds its head up — disgrace carried with defiance toward the beloved's lane.
3. **Turn 3 (ہوئی جن سے توقع...) — Direction only.** A judicial complaint (توقع، داد) that reverses: the would-be arbiters proved more wounded by cruelty's sword than us. Risk: grievance becoming loud. Direction keeps the bitterness formal and contained; the reversal carries the weight.
4. **Turn 4 (محبت میں نہیں ہے فرق...) — Direction only; the peak.** A creed, not a confession. The paradox (living by looking at the one on whom life is spent) must not be resolved by volume or tears. Stillness, full weight, steady pace — the peak is carried by pacing and the held silence after it.
5. **Turn 5 (کہاں مے خانہ کا دروازہ غالب...) — Direction only.** Self-address (`غالب`) with rhetorical کہاں... اور کہاں; the final clause is knowing, wry, almost triumphant. Risk: playing it as comedy. The wit is dry; the release comes from irony, not laughter.

## A. Clean spoken Urdu

```text
شاعر: ہزاروں خواہشیں ایسی کہ ہر خواہش پہ دم نکلے۔ بہت نکلے مرے ارمان لیکن پھر بھی کم نکلے۔
شاعر: نکلنا خلد سے آدم کا سنتے آئے ہیں لیکن، بہت بے آبرو ہو کر ترے کوچے سے ہم نکلے۔
شاعر: ہوئی جن سے توقع خستگی کی داد پانے کی، وہ ہم سے بھی زیادہ خستۂ تیغ ستم نکلے۔
شاعر: محبت میں نہیں ہے فرق جینے اور مرنے کا، اسی کو دیکھ کر جیتے ہیں جس کافر پہ دم نکلے۔
شاعر: کہاں مے خانہ کا دروازہ غالب اور کہاں واعظ، پر اتنا جانتے ہیں کل وہ جاتا تھا کہ ہم نکلے۔
```

## B. Directed rehearsal script

Bracketed notes are non-spoken rehearsal cues.

```text
شاعر: [آغاز کھلا اور باوقار؛ پہلا مصرع سامعین کو دعوتِ سماعت ہے] ہزاروں خواہشیں ایسی کہ ہر خواہش پہ دم نکلے۔ [مختصر وقفہ؛ مصرع کو سامعین تک پہنچنے دو] [دوسرا مصرع ذاتی ہو جاتا ہے؛ افسوس دبا ہوا، حجم نہیں بڑھتا] بہت نکلے مرے ارمان لیکن پھر بھی کم نکلے۔

شاعر: [روایت سنانے کے لہجے میں؛ ہلکی علمی نزاکت] نکلنا خلد سے آدم کا سنتے آئے ہیں لیکن، [لیکن کے بعد رخ بدلتا ہے؛ بے آبروی پر سر جھکتا نہیں] بہت بے آبرو ہو کر ترے کوچے سے ہم نکلے۔

شاعر: [شکایت رسمی، تقریباً عدالتی؛ غصہ قابو میں، آواز نہیں اٹھتی] ہوئی جن سے توقع خستگی کی داد پانے کی، [الٹ پھیر کو خود بولنے دو؛ زور صرف تفاوت پر] وہ ہم سے بھی زیادہ خستۂ تیغ ستم نکلے۔

شاعر: [غزل کا قلب؛ ٹھہرا ہوا، پورا وزن، کوئی اضافہ نہیں] محبت میں نہیں ہے فرق جینے اور مرنے کا، [سکون سے؛ تضاد کو جیسا ہے سننے دو، حل کرنے کی کوشش نہیں] اسی کو دیکھ کر جیتے ہیں جس کافر پہ دم نکلے۔ [شعر کے بعد سب سے طویل وقفہ؛ سامعین کے جواب کی گنجائش چھوڑو، کچھ مت کہو]

شاعر: [اب خود سے مخاطب؛ طنز واپس آتا ہے مگر مسکراہٹ خشک ہے] کہاں مے خانہ کا دروازہ غالب اور کہاں واعظ، [آخری سطر جان بوجھ کر ہلکی؛ جیت کا تاثر الفاظ میں، تالی میں نہیں] پر اتنا جانتے ہیں کل وہ جاتا تھا کہ ہم نکلے۔
```

## C. Portable synthesis plan

| Turn | Speaker | Clean spoken text | Delivery note (not spoken) | Pause/beat | Emphasis | Pronunciation |
|---|---|---|---|---|---|---|
| 1 | شاعر | ہزاروں خواہشیں ایسی کہ ہر خواہش پہ دم نکلے۔ بہت نکلے مرے ارمان لیکن پھر بھی کم نکلے۔ | open, invitational first misra; second misra turns private, rue contained | reflective beat between misras | `کم نکلے` lands softly | hazāroñ khwāhisheñ; armān |
| 2 | شاعر | نکلنا خلد سے آدم کا سنتے آئے ہیں لیکن، بہت بے آبرو ہو کر ترے کوچے سے ہم نکلے۔ | allusive storytelling until `لیکن`; then personal, unbowed | pivot beat at `لیکن` | `بہت بے آبرو ہو کر` — stated, not winced | khuld; be-aabro; kūche |
| 3 | شاعر | ہوئی جن سے توقع خستگی کی داد پانے کی، وہ ہم سے بھی زیادہ خستۂ تیغ ستم نکلے۔ | formal grievance, control audible; reversal carries the force | light clause beat at `،` | `ہم سے بھی زیادہ` | khasta-e (izafat); taigh-e-sitam |
| 4 | شاعر | محبت میں نہیں ہے فرق جینے اور مرنے کا، اسی کو دیکھ کر جیتے ہیں جس کافر پہ دم نکلے۔ | the creed; stillness and full weight, no crescendo | longest silence after the sher (audience room) | `دم نکلے` — level, final | kāfir |
| 5 | شاعر | کہاں مے خانہ کا دروازہ غالب اور کہاں واعظ، پر اتنا جانتے ہیں کل وہ جاتا تھا کہ ہم نکلے۔ | self-addressed, dry irony; last clause knowingly light | conversational beat after rhetorical کہاں... اور کہاں | `جانتے ہیں` | mai-khāna; va'iz |

## D. Eleven v3 adapter

Target: ElevenLabs / `eleven_v3` / Urdu (documented among v3 languages) / voice: `unresolved` / surface: Text to Speech. Verified 2026-07-30 against first-party documentation: bracketed audio tags are documented for v3; SSML `<break>` is **not** supported in v3 (pauses come from punctuation, ellipses, and tags). Tags used: `[sighs]`, `[exhales]` — both documented — sparsely, two across five turns. Spoken words are identical to artifact A; `Voice:` labels are routing metadata, not input text. Urdu tag compliance with the selected voice needs a native listening test.

```text
Voice: شاعر
ہزاروں خواہشیں ایسی کہ ہر خواہش پہ دم نکلے۔ [sighs] بہت نکلے مرے ارمان لیکن پھر بھی کم نکلے۔

Voice: شاعر
نکلنا خلد سے آدم کا سنتے آئے ہیں لیکن، بہت بے آبرو ہو کر ترے کوچے سے ہم نکلے۔

Voice: شاعر
ہوئی جن سے توقع خستگی کی داد پانے کی، وہ ہم سے بھی زیادہ خستۂ تیغ ستم نکلے۔

Voice: شاعر
محبت میں نہیں ہے فرق جینے اور مرنے کا، [exhales] اسی کو دیکھ کر جیتے ہیں جس کافر پہ دم نکلے۔

Voice: شاعر
کہاں مے خانہ کا دروازہ غالب اور کہاں واعظ، پر اتنا جانتے ہیں کل وہ جاتا تھا کہ ہم نکلے۔
```

## Restraint notes

- Canonical scene: not one word, and no punctuation, was changed; artifact A is byte-identical to the source turns. Every turn audited as direction-only — refinement would have been a hard-gate failure.
- No misra repetition, although مشاعرہ convention invites it: repeating «ہزاروں خواہشیں...» would alter the canonical text, so the invitation is carried by direction and pauses instead.
- No audience sound-effect tags. `[applause]`/`[clapping]` are documented v3 tags and the brief authorizes "audience atmosphere," but the timing and intensity of any response are unspecified; inventing a specific audible reaction would be an invented fact. The atmosphere lives only as held silence after turn 4 in the rehearsal script.
- Two audio tags across five turns (`[sighs]`, `[exhales]`), both from the documented v3 list, both marking the rueful pivot (turn 1) and grounding the peak (turn 4). The peak itself is carried by stillness and pacing, not by `[crying]`, volume, or stacked tags.
- No diacritics added to the canonical text; the one real reading ambiguity (izafat in `خستۂ تیغ`, i.e. khasta-e taigh) is handled as a pronunciation note in the plan only.
- No emotion labels that flatten the arc: turn 2 is not "sad" (it is unbowed), turn 3 is not "angry" (control stays audible), turn 5 is not "funny" (the wit is dry).
- Voice, locale, and gender of شاعر remain `unresolved` and were not inferred; no gendered wording exists or was added.
- Eleven v3's Urdu rendering of classical diction (خواہشیں، ارمان، خستۂ، واعظ) and its tag compliance are hypotheses until heard; recommend a native Urdu listening pass with the chosen voice before treating the adapter as final. If the tags cause overacting, the clean baseline without them is the better adapter.
