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

- Speaker: اینکر, a professional Urdu news anchor, addressing a general broadcast audience; register is formal broadcast Urdu (`آپ`-level distance implicit in bulletin style, no direct address).
- Setting/purpose: a grave flood bulletin — emergency declared in four districts along the Indus, casualty and evacuation figures, a 48-hour weather advisory, and a prime-ministerial assurance.
- Protected: all three turns, the single speaker, and every word — the source is news copy and canonical, so treatment is **direction only**; no refinement of wording is permitted.
- Established: formal register, grave tone, spelled-out numbers (`سترہ ہزار`, `اڑتالیس`), official attributions (`حکام کے مطابق`, `ادارۂ موسمیات کے مطابق`).
- Unresolved: anchor gender (not specified — no gendered voice or delivery assumed), provider voice, locale variant (`ur-PK` vs `ur-IN`), and v3 stability setting; all marked unresolved rather than silently chosen.
- Target: ElevenLabs `eleven_v3`, Urdu (documented among supported languages; tag compliance in Urdu remains a hypothesis pending a listening test).
- Emotional arc: gravity of the disaster (T1, peaking at the death toll) → steady public-safety duty (T2) → composed, firm reassurance (T3). The peak is carried by a lowered voice and a beat of silence, not by added emotion.

## Turn audit

1. **Turn 1 — Direction only.** Words are canonical news copy and must not change. Delivery carries the whole burden: the headline fact needs measured gravity, the attribution+evacuation figure needs a neutral professional relay with the number `سترہ ہزار` given room, and the closing clause `جبکہ تین افراد جاں بحق ہوئے ہیں` is the scene's emotional peak — it needs a short preparatory beat and a lowered, weighted voice, explicitly without trembling or dramatized sorrow.
2. **Turn 2 — Direction only.** The register shifts from reporting loss to public guidance: steadier, slightly more forward, instructive. `اڑتالیس گھنٹے` must be paced so the forecast window lands; the advisory clause (`ہدایت کی گئی ہے…`) is firmer than the forecast clause. No grief carries over from turn 1 — this is a clean register reset.
3. **Turn 3 — Direction only.** A second reset: official assurance. The aerial-survey framing is delivered with authority; the final clause `کسی بھی خاندان کو تنہا نہیں چھوڑا جائے گا` is the resolution of the bulletin's arc — a short beat before it, then firm, slowed reassurance with stress on `تنہا نہیں`, ending composed rather than triumphant.

## A. Clean spoken Urdu

```text
اینکر: دریائے سندھ میں اونچے درجے کے سیلاب کے باعث چار اضلاع میں ہنگامی حالت نافذ کر دی گئی ہے۔ حکام کے مطابق اب تک سترہ ہزار سے زائد افراد کو محفوظ مقامات پر منتقل کیا جا چکا ہے، جبکہ تین افراد جاں بحق ہوئے ہیں۔
اینکر: ادارۂ موسمیات کے مطابق بارشوں کا سلسلہ مزید اڑتالیس گھنٹے جاری رہنے کا امکان ہے، اور نشیبی علاقوں کے باشندیوں کو ہدایت کی گئی ہے کہ وہ احتیاطی انتظامات مکمل کر لیں۔
اینکر: وزیراعظم نے متاثرہ علاقوں کے فضائی جائزے کے بعد اعلان کیا ہے کہ ریلیف کا کام رات دن جاری رہے گا اور کسی بھی خاندان کو تنہا نہیں چھوڑا جائے گا۔
```

## B. Directed rehearsal script

```text
[براکٹ میں دی گئی تمام ہدایات غیر بولی جانے والی ہیں — صرف پرفارمنس کے لیے]

اینکر: [سنجیدہ، میزان میں، بلا جلدی] دریائے سندھ میں اونچے درجے کے سیلاب کے باعث چار اضلاع میں ہنگامی حالت نافذ کر دی گئی ہے۔
[حوالہ پیش کرتے ہوئے، غیر جانبدار، عدد کو کھلا رکھتے ہوئے] حکام کے مطابق اب تک سترہ ہزار سے زائد افراد کو محفوظ مقامات پر منتقل کیا جا چکا ہے،
[مختصر وقفہ؛ آواز پست اور بھرپور، سوگ ظاہر کیے بغیر] جبکہ تین افراد جاں بحق ہوئے ہیں۔

اینکر: [رجسٹر بدلتے ہوئے: اب ہدایت کا لہجہ، مستحکم اور براہ راست] ادارۂ موسمیات کے مطابق بارشوں کا سلسلہ مزید اڑتالیس گھنٹے جاری رہنے کا امکان ہے،
[ہدایت والے جملے میں معمولی مضبوطی] اور نشیبی علاقوں کے باشندیوں کو ہدایت کی گئی ہے کہ وہ احتیاطی انتظامات مکمل کر لیں۔

اینکر: [دوبارہ رجسٹر بدلیں: باضابطہ اعلان، اختیار کے ساتھ] وزیراعظم نے متاثرہ علاقوں کے فضائی جائزے کے بعد اعلان کیا ہے کہ ریلیف کا کام رات دن جاری رہے گا
[مختصر وقفہ؛ پھر دھیما، مضبوط تسلی، "تنہا نہیں" پر زور] اور کسی بھی خاندان کو تنہا نہیں چھوڑا جائے گا۔
```

## C. Portable synthesis plan

| Turn | Speaker | Clean spoken text | Non-spoken delivery note | Pause/beat | Emphasis | Pronunciation |
|---|---|---|---|---|---|---|
| 1a | اینکر | دریائے سندھ میں اونچے درجے کے سیلاب کے باعث چار اضلاع میں ہنگامی حالت نافذ کر دی گئی ہے۔ | grave lead, measured pace, no hurry | sentence-final reset after `ہے۔` | `اونچے درجے کے سیلاب` lightly | — |
| 1b | اینکر | حکام کے مطابق اب تک سترہ ہزار سے زائد افراد کو محفوظ مقامات پر منتقل کیا جا چکا ہے، | neutral attribution; give the figure room | light phrasing boundary at `،` | `سترہ ہزار سے زائد` clearly articulated | — |
| 1c | اینکر | جبکہ تین افراد جاں بحق ہوئے ہیں۔ | lowered, weighted voice; grief implied, not performed | short preparatory beat before `جبکہ` | `تین افراد` | — |
| 2a | اینکر | ادارۂ موسمیات کے مطابق بارشوں کا سلسلہ مزید اڑتالیس گھنٹے جاری رہنے کا امکان ہے، | register reset to advisory; steady, direct | clause boundary at `،` | `اڑتالیس گھنٹے` paced | `ادارۂ موسمیات` as one institutional unit |
| 2b | اینکر | اور نشیبی علاقوں کے باشندیوں کو ہدایت کی گئی ہے کہ وہ احتیاطی انتظامات مکمل کر لیں۔ | instruction clause slightly firmer than forecast | sentence-final reset | `مکمل کر لیں` lightly | — |
| 3a | اینکر | وزیراعظم نے متاثرہ علاقوں کے فضائی جائزے کے بعد اعلان کیا ہے کہ ریلیف کا کام رات دن جاری رہے گا | official announcement, authority without heaviness | — | `رات دن` lightly | — |
| 3b | اینکر | اور کسی بھی خاندان کو تنہا نہیں چھوڑا جائے گا۔ | slowed, firm reassurance; composed close | short beat before `اور` | `تنہا نہیں` | — |

## D. Eleven v3 adapter

Target: ElevenLabs / `eleven_v3` / Text-to-Speech surface / locale unresolved / voice unresolved (anchor gender is not specified in the source; do not infer it) / stability unresolved (Natural or Creative recommended for tag responsiveness). Docs verified 2026-07-31. Tags below are limited to Eleven's documented audio-tag mechanism: `[short pause]`, `[sad]`, and `[thoughtful]` appear in the published tag lists; the delivery directions `[serious]`, `[solemn]`, `[steady]`, and `[firm]` are used under Eleven's documented "non-exhaustive — infer similar contextually appropriate delivery directions" allowance. Urdu tag compliance is a hypothesis until heard with the selected voice.

```text
Voice: اینکر
[serious] دریائے سندھ میں اونچے درجے کے سیلاب کے باعث چار اضلاع میں ہنگامی حالت نافذ کر دی گئی ہے۔ حکام کے مطابق اب تک سترہ ہزار سے زائد افراد کو محفوظ مقامات پر منتقل کیا جا چکا ہے، [short pause] [sad] جبکہ تین افراد جاں بحق ہوئے ہیں۔

Voice: اینکر
[steady] ادارۂ موسمیات کے مطابق بارشوں کا سلسلہ مزید اڑتالیس گھنٹے جاری رہنے کا امکان ہے، اور نشیبی علاقوں کے باشندیوں کو ہدایت کی گئی ہے کہ وہ احتیاطی انتظامات مکمل کر لیں۔

Voice: اینکر
[thoughtful] وزیراعظم نے متاثرہ علاقوں کے فضائی جائزے کے بعد اعلان کیا ہے کہ ریلیف کا کام رات دن جاری رہے گا [short pause] [firm] اور کسی بھی خاندان کو تنہا نہیں چھوڑا جائے گا۔
```

## Restraint notes

- Every word in A, B (spoken lines), C, and D is identical to the source; the bulletin is canonical news copy, so the entire treatment lives in direction, pacing, and register — zero rewrites.
- The emotional peak (the death toll in turn 1) is carried by `[short pause]` + a lowered delivery cue, not by any dramatic tag; `[sad]` is documented and deliberately mild — if it produces audible sorrow rather than restrained gravity on the chosen voice, downgrade it to `[solemn]` or remove it and keep the pause.
- One cue per beat; no stacked adjectives, no tag on a phrase whose delivery is already carried by wording and sequence (e.g., the attribution clauses rely on punctuation alone).
- `[short pause]` is used exactly twice, each with a distinct function: reluctance-weight before the casualty figure (T1) and anticipation before the assurance (T3) — no comma was converted into a pause tag.
- No visible-only direction (no camera, gesture, or studio notes) appears as a provider tag; such context stays in the rehearsal script only.
- Voice, locale, and stability are marked unresolved rather than guessed; anchor gender is unspecified in the source, so no gendered voice was chosen.
- Urdu compliance of v3 audio tags is untested here: synthesize the clean baseline first, then add tags one at a time with a native Urdu listener, per the skill's iteration protocol; if tags over-emote, the clean baseline is the better adapter.
- No numbers, abbreviations, or code-switching needed normalization — the source already spells out `سترہ ہزار` and `اڑتالیس`, and the copy is pure formal Urdu.
