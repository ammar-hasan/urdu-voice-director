# Sample scene — hero line (urgent concealment)

Sample voices: زین=Haseeb, عائشہ=Reva

## Source

From `skills/urdu-voice-director/examples/hesitation-and-realization.md`,
Example 1 — whisper and interruption:

```text
زین: میں نے شاید دروازے کے پاس کسی کو دیکھا تھا۔
عائشہ: کیا؟
زین: آہستہ بولو کیونکہ اگر وہ شخص ابھی بھی وہاں موجود ہے تو وہ ہمیں سن سکتا ہے۔
عائشہ: لیکن—
زین: خاموش رہو۔
```

## Scene card

- Who: زین and عائشہ; someone may still be at the door.
- Protected: the five turns, the interruption, the concealment motive.
- Established: uncertain perception → startle → urgent concealment → attempted
  objection → protective interruption.
- Unresolved: who is at the door — irrelevant to delivery.
- Output: TTS sample (Eleven v3).

## Turn audit

1. **Both** — formal «میں نے شاید ... دیکھا تھا» becomes hesitant spoken «مجھے لگا...»; quiet, uncertain.
2. **Direction only** — a startled whisper.
3. **Both** — the over-explained warning compresses to «شش، آہستہ۔ وہ ابھی تک وہیں ہے تو سن لے گا۔»; whispered urgency.
4. **Direction only** — cut off mid-word; dash, not ellipsis.
5. **Both** — «خاموش رہو» softens to «بس، ابھی چپ رہو»; protective, not controlling.

## A. Clean spoken Urdu

```text
زین: مجھے لگا... دروازے کے پاس کوئی تھا۔
عائشہ: کیا؟
زین: شش، آہستہ۔ وہ ابھی تک وہیں ہے تو سن لے گا۔
عائشہ: لیکن—
زین: بس، ابھی چپ رہو۔
```

## B. Directed rehearsal script

```text
زین: [quiet, uncertain] مجھے لگا... دروازے کے پاس کوئی تھا۔
عائشہ: [a startled whisper] کیا؟
زین: [whispering urgently] شش، آہستہ۔ وہ ابھی تک وہیں ہے تو سن لے گا۔
عائشہ: لیکن—
زین: [cuts in; protective, not angry] بس، ابھی چپ رہو۔
```

Bracketed notes are non-spoken.

## C. Portable synthesis plan

| Turn | Speaker | Spoken text | Non-spoken direction | Beat |
|---|---|---|---|---|
| 1 | زین | مجھے لگا... دروازے کے پاس کوئی تھا۔ | quiet, uncertain | hesitation in the ellipsis |
| 2 | عائشہ | کیا؟ | startled whisper | sharp, short |
| 3 | زین | شش، آہستہ۔ وہ ابھی تک وہیں ہے تو سن لے گا۔ | whispering urgently | urgency without volume |
| 4 | عائشہ | لیکن— | attempted objection | cutoff must survive synthesis |
| 5 | زین | بس، ابھی چپ رہو۔ | cuts in; protective, not angry | firm, low |

## D. Eleven v3 adapter

Target: ElevenLabs / `eleven_v3` / locale unresolved / voices: زین → Haseeb, عائشہ → Reva.
One cue per turn; words identical to A. Turns are synthesized per speaker and
stitched in order.

```text
Voice: زین
[quietly] مجھے لگا... دروازے کے پاس کوئی تھا۔
Voice: عائشہ
[whispers] کیا؟
Voice: زین
[whispers] شش، آہستہ۔ وہ ابھی تک وہیں ہے تو سن لے گا۔
Voice: عائشہ
لیکن—
Voice: زین
[urgently] بس، ابھی چپ رہو۔
```

## Restraint notes

- Do not add horror; if the scene were a prank, the whole cue set would change.
- Test that the provider preserves the «لیکن—» cutoff instead of reading the
  dash strangely; if it drones through, synthesize the cutoff turn separately
  with a hard stop.
