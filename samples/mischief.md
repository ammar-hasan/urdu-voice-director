# Sample scene — mischief, caught

Sample voices: احمد=Haseeb, فاطمہ=Reva

## Source

Opening of the chocolate scene (`skills/urdu-voice-director/examples/gentle-correction.md`):

```text
احمد: ارے، یہاں تو کوئی بھی نہیں ہے۔
احمد: اب امی کی چاکلیٹ کھا لیتا ہوں!
فاطمہ: رُکو، رُکو!
احمد: شش، کسی نے دیکھا ہی نہیں!
```

## Scene card

- Who: احمد and فاطمہ, children at home; احمد is about to take the chocolate.
- Protected: the four turns, the mischief, the sibling dynamic.
- Established: caution first, then rising mischief; فاطمہ interrupts; احمد hushes.
- Unresolved: none material.
- Output: TTS sample (Eleven v3).

## Turn audit

1. **Both** — soften the abrupt «ارے،» into a hesitant glance («ارے...») and direct the cautious observation.
2. **Direction only** — mischief rises; the words already carry it.
3. **Direction only** — a sudden stop, already natural.
4. **Both** — «شش،» becomes «شش...» (startled hush), voice drops immediately.

## A. Clean spoken Urdu

```text
احمد: ارے... یہاں تو کوئی بھی نہیں ہے۔
احمد: اب امی کی چاکلیٹ کھا لیتا ہوں۔
فاطمہ: رُکو، رُکو!
احمد: شش... کسی نے دیکھا ہی نہیں!
```

## B. Directed rehearsal script

```text
[آہستہ، محتاط انداز میں] احمد: ارے... یہاں تو کوئی بھی نہیں ہے۔
[شرارت بڑھتی ہوئی] احمد: اب امی کی چاکلیٹ کھا لیتا ہوں۔
[اچانک روکتے ہوئے] فاطمہ: رُکو، رُکو!
[چونک کر؛ آواز دبی ہوئی] احمد: شش... کسی نے دیکھا ہی نہیں!
```

Bracketed notes are non-spoken.

## C. Portable synthesis plan

| Turn | Speaker | Spoken text | Non-spoken direction | Beat |
|---|---|---|---|---|
| 1 | احمد | ارے... یہاں تو کوئی بھی نہیں ہے۔ | quiet, cautious checking | hesitation lives in «ارے...» |
| 2 | احمد | اب امی کی چاکلیٹ کھا لیتا ہوں۔ | mischief grows; not loud | no added pause |
| 3 | فاطمہ | رُکو، رُکو! | sudden stop | sharp, short |
| 4 | احمد | شش... کسی نے دیکھا ہی نہیں! | startled; voice drops at once | hush before the excuse |

## D. Eleven v3 adapter

Target: ElevenLabs / `eleven_v3` / locale unresolved / voices: احمد → Haseeb, فاطمہ → Reva.
One cue per turn, placed before the beat it changes; words identical to A.
Turns are synthesized per speaker and stitched in order.

```text
Voice: احمد
[cautious] ارے... یہاں تو کوئی بھی نہیں ہے۔
Voice: احمد
[mischievous] اب امی کی چاکلیٹ کھا لیتا ہوں۔
Voice: فاطمہ
[alarmed] رُکو، رُکو!
Voice: احمد
[whispers] شش... کسی نے دیکھا ہی نہیں!
```

## Restraint notes

- Mischief is not shouting; `[mischievous]` should not raise volume.
- `[alarmed]` covers the interruption's urgency — do not stack `[shouts]`.
- Haseeb and Reva are adult voices reading children; keep delivery light
  rather than pitching up.
