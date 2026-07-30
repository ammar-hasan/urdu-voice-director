# Sample scene — anger held in

Sample voices: سارہ=Sara, حنا=Reva

## Source

```text
سارہ: تم نے سب کو بتا دیا؟
حنا: ہاں، مجھے لگا کوئی مسئلہ نہیں ہوگا۔
سارہ: کوئی مسئلہ نہیں ہوگا؟ میں نے تم پر بھروسا کیا تھا۔
```

## Scene card

- Who: سارہ and حنا, friends; حنا has shared something private.
- Protected: the three turns, the breached trust, familiar register («تم»).
- Established: سارہ seeks confirmation; حنا's excuse weakens as she says it;
  سارہ's final line carries controlled hurt, with weight on «بھروسا».
- Unresolved: what was shared — irrelevant to delivery.
- Output: TTS sample (Eleven v3).

## Turn audit

1. **Direction only** — the question is already natural; it needs a hushed, confirmation-seeking read.
2. **Both** — «ہاں...» opens the weakening excuse; confidence drains mid-turn.
3. **Direction only** — anger held in; the short final line already carries the injury. No shouting.

## A. Clean spoken Urdu

```text
سارہ: تم نے سب کو بتا دیا؟
حنا: ہاں... مجھے لگا، کوئی مسئلہ نہیں ہوگا۔
سارہ: کوئی مسئلہ نہیں ہوگا؟ میں نے تم پر بھروسا کیا تھا۔
```

## B. Directed rehearsal script

```text
[دبی آواز، تصدیق چاہتی ہے] سارہ: تم نے سب کو بتا دیا؟
[اعتماد کم پڑتا ہوا] حنا: ہاں... مجھے لگا، کوئی مسئلہ نہیں ہوگا۔
[ناراضی قابو میں؛ زور «بھروسا» پر] سارہ: کوئی مسئلہ نہیں ہوگا؟ میں نے تم پر بھروسا کیا تھا۔
```

Bracketed notes are non-spoken.

## C. Portable synthesis plan

| Turn | Speaker | Spoken text | Non-spoken direction | Beat |
|---|---|---|---|---|
| 1 | سارہ | تم نے سب کو بتا دیا؟ | hushed; wants confirmation | no extra pause |
| 2 | حنا | ہاں... مجھے لگا، کوئی مسئلہ نہیں ہوگا۔ | confidence weakens after «ہاں» | hesitation lives in the ellipsis |
| 3 | سارہ | کوئی مسئلہ نہیں ہوگا؟ میں نے تم پر بھروسا کیا تھا۔ | anger contained; injury precise | weight lands on «بھروسا» |

## D. Eleven v3 adapter

Target: ElevenLabs / `eleven_v3` / locale unresolved / voices: سارہ → Sara, حنا → Reva.
One cue per turn; words identical to A. Anger is directed as containment, not volume.
Turns are synthesized per speaker and stitched in order.

```text
Voice: سارہ
[quiet] تم نے سب کو بتا دیا؟
Voice: حنا
[nervous] ہاں... مجھے لگا، کوئی مسئلہ نہیں ہوگا۔
Voice: سارہ
[restrained] کوئی مسئلہ نہیں ہوگا؟ میں نے تم پر بھروسا کیا تھا۔
```

## Restraint notes

- Do not use `[angry]` or `[shouts]`; the skill's rule — anger is not
  automatically shouting — is the whole point of this scene.
- If `[restrained]` flattens the final line instead of controlling it, drop the
  tag for turn 3 and keep the clean baseline there.
