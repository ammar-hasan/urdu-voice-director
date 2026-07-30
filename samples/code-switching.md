# Sample scene — lived-in code-switching

Sample voices: علی=Haseeb, حسن=Deep South Asian Baritone

## Source

From `skills/urdu-voice-director/examples/code-switching.md`, Example 1:

```text
علی: Did you submit the assignment?
حسن: نہیں، website کام نہیں کر رہی تھی۔
علی: You should email the teacher.
```

## Scene card

- Who: علی and حسن, school friends; everyday technology talk.
- Protected: full-turn English switching — it is character evidence, preserved
  by default. `website` is ordinary here; no formal translation.
- Established: routine check → mild frustration → practical suggestion.
- Unresolved: teacher's gender/title — deliberately not guessed.
- Output: TTS sample (Eleven v3).

## Turn audit

1. **Direction only** — a casual check; words already natural.
2. **Both** — «کام نہیں کر رہی تھی» becomes spoken «چل نہیں رہی تھی»; light frustration.
3. **Direction only** — plain practical advice. No dramatic direction needed.

## A. Clean spoken Urdu

```text
علی: Did you submit the assignment?
حسن: نہیں، website چل نہیں رہی تھی۔
علی: You should email the teacher.
```

## B. Directed rehearsal script

```text
[معمول کی بات] علی: Did you submit the assignment?
[ہلکی جھنجھلاہٹ] حسن: نہیں، website چل نہیں رہی تھی۔
[سادہ عملی مشورہ] علی: You should email the teacher.
```

Bracketed notes are non-spoken.

## C. Portable synthesis plan

| Turn | Speaker | Spoken text | Non-spoken direction | Beat |
|---|---|---|---|---|
| 1 | علی | Did you submit the assignment? | casual check | none |
| 2 | حسن | نہیں، website چل نہیں رہی تھی۔ | mild frustration | none added |
| 3 | علی | You should email the teacher. | practical | none |

## D. Eleven v3 adapter

Target: ElevenLabs / `eleven_v3` / locale unresolved / voices: علی → Haseeb, حسن → Deep South Asian Baritone.
One cue per turn; words identical to A. Do not tag `[in English]` around
borrowed words (skill rule); each voice handles both languages.
Turns are synthesized per speaker and stitched in order.

```text
Voice: علی
[casual] Did you submit the assignment?
Voice: حسن
[frustrated] نہیں، website چل نہیں رہی تھی۔
Voice: علی
[practical] You should email the teacher.
```

## Restraint notes

- Full-turn code-switching must not be reduced for synthesis convenience.
- If `website` comes out unintelligible, segment the turn or use a documented
  language-control feature — do not rewrite the character.
