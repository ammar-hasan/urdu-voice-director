# Code-switching and Roman Urdu

## Preserve motivated switching

Keep English when it is natural for:

- product and company names;
- school and workplace terms;
- technology;
- games and media;
- quoted UI labels;
- a character’s established bilingual identity.

Do not translate `assignment`, `login`, or `group chat` into formal Urdu if those speakers would not use the translations. Do not introduce English into an otherwise natural Urdu household scene just to sound modern.

## Refine grammar around the borrowed item

Stiff:

```text
کیا تم نے اسائنمنٹ کو سبمٹ کیا؟
```

Depending on speaker:

```text
تم نے اسائنمنٹ جمع کرا دی؟
```

or:

```text
تم نے assignment submit کر دی؟
```

Neither is universally “more Urdu.” Choose from scene, age, school culture, and user preference.

## Script choices

- Keep spoken Urdu in Urdu script by default.
- Preserve official product spelling where recognition matters: `YouTube`, `ChatGPT`, `Minecraft`.
- Use Urdu-script borrowing where it is conventional and easier to read: `فون`, `میسج`, `کلاس`.
- Do not mix scripts unpredictably within the same term.

## Mixed-language TTS

Provider language detection and phonemization can shift on a short English token. Prepare:

1. clean caption spelling;
2. provider spoken spelling;
3. pronunciation note or locale segment only when documented;
4. a test alternative.

Do not assume an Urdu-capable voice handles code-switching. Test names, acronyms, numbers, and English clusters separately.

## Roman Urdu conversion

Resolve:

- word identity: `kal` = `کل` but may mean yesterday or tomorrow;
- vowel ambiguity: `par` = `پر`, `پَر`, or part of another word;
- honorific agreement: `ap jao ge` should become a consistent `آپ جائیں گے؟`;
- dialect and casual spelling: `mujhy`, `mujhe`, `mjhy` may all map to `مجھے`;
- intended borrowing: `call` may become `فون`, `کال`, or remain `call` in a special workflow.

Preserve uncertainty rather than silently choosing a meaning that changes the scene.

## Direction

Do not add `[in English]` around every English word. Mark a language or accent shift only when it is performatively relevant and supported by the target workflow.
