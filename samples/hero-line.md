# Sample scene — the return

Sample voices: خالد=Haseeb, رخسانہ=Reva

## Source

Original scene written for this showcase.

```text
خالد: میں نہیں کہتا کہ سب پہلے جیسا ہو سکتا ہے... بس اتنا کہنے آیا تھا کہ جو کچھ ٹوٹا، اس کی ذمہ داری صرف میری ہے۔
رخسانہ: ذمہ داری؟ برسوں کی تنہائی، ہر رات کا انتظار... اور تم ایک جملے میں سب مٹا دینا چاہتے ہو؟
خالد: مٹانا تو میری جرات بھی نہیں... میں تو بس یہ پوچھنے آیا ہوں کہ کیا اب بھی کچھ بچا ہے؟
رخسانہ: جواب سوچ کر دینا... کیونکہ اگر اس بار بھی جھوٹ نکلا، تو میں خود کو سمیٹ نہیں پاؤں گی۔
خالد: سچ یہی ہے کہ میں ہر وہ صبح یاد کرتا ہوں جس میں تم چائے کے دو کپ رکھتی تھیں... اور میں پھر بھی دیر سے لوٹا۔
```

## Scene card

- Speakers: خالد and رخسانہ, a married couple in their fifties; خالد has returned after years of absence and opens the exchange; رخسانہ answers from inside the years he left behind.
- Setting/purpose: a threshold confrontation — he has come to admit responsibility and ask whether anything survives; she must decide whether his answer can be trusted.
- Protected: all five turns, both speakers, the exact wording, the mutual `تم` register of long intimacy, the source's ellipses, and the concrete memory detail `چائے کے دو کپ`. No code-switching is present; none is added.
- Established: middle-aged spouses; intimate `تم` in both directions with matching verb agreement; an explicit present-to-memory link in the final turn; an absence measured only as `برسوں`.
- Unresolved (and left unresolved): locale (`ur-PK`/`ur-IN`), the reason for and place of his absence, the physical setting, and the Eleven v3 voice/locale selection — none of these is needed for the wording.
- Canonical status: not explicitly marked, but the turn audit finds no refinement warranted; artifact A is therefore word-identical to the source.
- Output target: ElevenLabs Eleven v3 sample — full bundle A–D required.

## Turn audit

1. خالد، turn 1 — **Direction only.** The wording is already natural spoken Urdu (`بس اتنا کہنے آیا تھا` is speech, not prose). The delivery risk is misreading the opening as resignation rather than a careful, rehearsed admission; the weight belongs on `صرف میری ہے`. No word changes.
2. رخسانہ، turn 1 — **Direction only.** Her repetition of `ذمہ داری؟` is the trigger; the accumulating list (`برسوں کی تنہائی، ہر رات کا انتظار`) must stay level and controlled, not shouted. The accusation question needs no rewording.
3. خالد، turn 2 — **Direction only.** He offers no defense (`مٹانا تو میری جرات بھی نہیں`), then asks the question he actually came with. Without a marked beat, `کیا اب بھی کچھ بچا ہے؟` can be misread as casual; sincerity is a delivery matter, not a wording matter.
4. رخسانہ، turn 2 — **Direction only.** The warning is self-protection, not a threat. `اس بار بھی` already carries the history; nothing may be added or softened.
5. خالد، turn 3 — **Direction only.** The explicit memory link (`چائے کے دو کپ`) requires a temporal shift in pacing, and the final admission (`اور میں پھر بھی دیر سے لوٹا`) must stay plain. This is the emotional peak; it is carried by pacing, not volume.

No turn is scored *Refinement* or *Both*. Every turn passes the read-aloud test as written; rewriting would be activity for its own sake and is refused.

## A. Clean spoken Urdu

```text
خالد: میں نہیں کہتا کہ سب پہلے جیسا ہو سکتا ہے... بس اتنا کہنے آیا تھا کہ جو کچھ ٹوٹا، اس کی ذمہ داری صرف میری ہے۔
رخسانہ: ذمہ داری؟ برسوں کی تنہائی، ہر رات کا انتظار... اور تم ایک جملے میں سب مٹا دینا چاہتے ہو؟
خالد: مٹانا تو میری جرات بھی نہیں... میں تو بس یہ پوچھنے آیا ہوں کہ کیا اب بھی کچھ بچا ہے؟
رخسانہ: جواب سوچ کر دینا... کیونکہ اگر اس بار بھی جھوٹ نکلا، تو میں خود کو سمیٹ نہیں پاؤں گی۔
خالد: سچ یہی ہے کہ میں ہر وہ صبح یاد کرتا ہوں جس میں تم چائے کے دو کپ رکھتی تھیں... اور میں پھر بھی دیر سے لوٹا۔
```

## B. Directed rehearsal script

Bracketed notes are non-spoken direction for a human performer; they are not provider tags.

```text
خالد: [quiet, measured; he has rehearsed this] میں نہیں کہتا کہ سب پہلے جیسا ہو سکتا ہے... [reluctance before the costly part] بس اتنا کہنے آیا تھا کہ جو کچھ ٹوٹا، اس کی ذمہ داری صرف میری ہے۔

رخسانہ: [the word catches; she repeats it back] ذمہ داری؟ [anger kept under control; the years come out level, not loud] برسوں کی تنہائی، ہر رات کا انتظار... اور تم ایک جملے میں سب مٹا دینا چاہتے ہو؟

خالد: [no defense; accepts the charge] مٹانا تو میری جرات بھی نہیں... [a beat; then the question he actually came with, sincere] میں تو بس یہ پوچھنے آیا ہوں کہ کیا اب بھی کچھ بچا ہے؟

رخسانہ: [steady, self-protective; a boundary, not a threat] جواب سوچ کر دینا... کیونکہ اگر اس بار بھی جھوٹ نکلا، تو میں خود کو سمیٹ نہیں پاؤں گی۔

خالد: [the memory slows him down] سچ یہی ہے کہ میں ہر وہ صبح یاد کرتا ہوں جس میں تم چائے کے دو کپ رکھتی تھیں... [gives the memory room, then returns to the present; plain admission] اور میں پھر بھی دیر سے لوٹا۔
```

## C. Portable synthesis plan

| Turn | Speaker | Clean spoken text | Delivery note (non-spoken) | Pause/beat | Emphasis |
|---|---|---|---|---|---|
| 1 | خالد | میں نہیں کہتا کہ سب پہلے جیسا ہو سکتا ہے... بس اتنا کہنے آیا تھا کہ جو کچھ ٹوٹا، اس کی ذمہ داری صرف میری ہے۔ | quiet, rehearsed admission; no pleading | source ellipsis = reluctance before the costly clause | `صرف میری` |
| 2 | رخسانہ | ذمہ داری؟ برسوں کی تنہائی، ہر رات کا انتظار... اور تم ایک جملے میں سب مٹا دینا چاہتے ہو؟ | controlled anger; level listing, then the real accusation | conversational beat at the ellipsis; no pause before `ذمہ داری؟` | `ایک جملے میں` |
| 3 | خالد | مٹانا تو میری جرات بھی نہیں... میں تو بس یہ پوچھنے آیا ہوں کہ کیا اب بھی کچھ بچا ہے؟ | acceptance, then a sincere vulnerable question | processing beat at the ellipsis before the question | `اب بھی` |
| 4 | رخسانہ | جواب سوچ کر دینا... کیونکہ اگر اس بار بھی جھوٹ نکلا، تو میں خود کو سمیٹ نہیں پاؤں گی۔ | steady boundary; self-protection, not threat | short open beat after `جواب سوچ کر دینا` | `اس بار بھی` |
| 5 | خالد | سچ یہی ہے کہ میں ہر وہ صبح یاد کرتا ہوں جس میں تم چائے کے دو کپ رکھتی تھیں... اور میں پھر بھی دیر سے لوٹا۔ | pace slows into the memory; final clause plain and present | reflective beat at the ellipsis marking the return to the present | `ہر وہ صبح`، then `پھر بھی` |

## D. Eleven v3 adapter

Target: ElevenLabs / Eleven v3 (`eleven_v3`) / locale: unresolved (no separate locale field; accent follows the selected voice) / voice: unresolved.
Support status: Urdu listed among Eleven v3's documented languages; bracketed inline audio tags documented (capability matrix dated 2026-07-29 — recheck first-party docs at production). Exact Urdu tag compliance is a hypothesis until heard with the selected voice.
`Voice:` lines are routing metadata for the dialogue workflow, not spoken text. Inline tags share the text field; spoken words are identical to artifact A. Tags used: only `[quietly]` and `[hesitates]`, both within the skill's verified guidance, two tags across five turns.

```text
Voice: خالد
[quietly] میں نہیں کہتا کہ سب پہلے جیسا ہو سکتا ہے... بس اتنا کہنے آیا تھا کہ جو کچھ ٹوٹا، اس کی ذمہ داری صرف میری ہے۔

Voice: رخسانہ
ذمہ داری؟ برسوں کی تنہائی، ہر رات کا انتظار... اور تم ایک جملے میں سب مٹا دینا چاہتے ہو؟

Voice: خالد
مٹانا تو میری جرات بھی نہیں... [hesitates] میں تو بس یہ پوچھنے آیا ہوں کہ کیا اب بھی کچھ بچا ہے؟

Voice: رخسانہ
جواب سوچ کر دینا... کیونکہ اگر اس بار بھی جھوٹ نکلا، تو میں خود کو سمیٹ نہیں پاؤں گی۔

Voice: خالد
سچ یہی ہے کہ میں ہر وہ صبح یاد کرتا ہوں جس میں تم چائے کے دو کپ رکھتی تھیں... اور میں پھر بھی دیر سے لوٹا۔
```

Caption copy: identical in words to artifact A (no tags, no `Voice:` labels).
Needs listening test: whether the model honors the source ellipses as distinct beat functions (reluctance vs. processing vs. memory) or flattens them; whether `[hesitates]` over-pauses mid-turn; whether the chosen voice sustains `تم`-register intimacy without drifting into melodrama. Native Urdu review with the actual selected voice is required — text review cannot validate prosody.

## Restraint notes

- Every spoken word is identical to the source; no particles added or removed, no sentence split or merged, no facts invented about the absence (no reason, no place, nothing beyond `برسوں`).
- The mutual `تم` register is preserved unchanged; no register shift was added as a "story event" because the source contains none.
- The emotional peak (turns 3 and 5) is carried entirely by pauses and pacing — no shouting, crying, or sighing tags, no added exclamation marks, no intensified wording.
- `چائے کے دو کپ` is protected as the source's concrete memory anchor; direction gives it room but assigns it no symbolism, and no nostalgia beyond the words is directed.
- Each source ellipsis is given a distinct named function (reluctance, controlled accumulation, processing, boundary, memory-to-present return); none was converted to a generic `[pause]`.
- Turn 2 and turn 4 carry no cues at all in the adapter: the wording and sequence already make the delivery playable, and the restraint test removed the candidates.
- Only two inline tags across five turns, both from the skill's verified Eleven v3 guidance; `Voice:` labels are metadata and must never enter the caption copy.
- Voice and locale are marked `unresolved` rather than silently chosen; the adapter is disposable and nothing from it has been copied back into the clean source.
