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

- **Speakers and relationship:** خالد (male) and رخسانہ (female), a married couple in their fifties; خالد has returned after years of absence. Both use intimate `تم` consistently — established marriage register, preserved.
- **Setting/purpose:** a private, high-stakes reunion conversation. The source establishes no physical location, props, or time of day beyond `ہر وہ صبح` in memory — none invented.
- **Protected elements:** all five turns in source order, both speakers, the `تم` register, the responsibility admission (`ذمہ داری صرف میری ہے`), رخسانہ's boundary (`جواب سوچ کر دینا`), and the concrete memory anchor `چائے کے دو کپ`. No code-switching exists in the source; none added.
- **What changes during the scene:** خالد moves from admitting fault → asking whether anything remains → answering with a memory instead of a plea. رخسانہ moves from contained hurt-anger → setting a condition for her answer. No resolution is reached; none added.
- **Unresolved:** locale (`ur-PK` vs `ur-IN`), selected voices, exact performance space. Marked `unresolved` rather than assumed.
- **Output target:** ElevenLabs `eleven_v3` sample; clean caption-safe artifact plus directed, portable, and provider layers.

## Turn audit

1. **خالد, turn 1 — Direction only.** Wording passes the read-aloud test; the particle `بس` does real limiting work and is preserved. Beats: concession (`میں نہیں کہتا کہ سب پہلے جیسا ہو سکتا ہے`) → admission of sole responsibility. Delivery risk: self-pity; direction should keep it measured acceptance.
2. **رخسانہ, turn 2 — Direction only.** Words are natural spoken Urdu; the fragment `برسوں کی تنہائی، ہر رات کا انتظار` is deliberate accumulation, not written stiffness. Beats: disbelieving repetition of his word (`ذمہ داری؟`) → counting the cost → controlled accusation. Delivery risk: shouting at `مٹا دینا چاہتے ہو؟`; the scene supports contained, precise anger, not volume.
3. **خالد, turn 3 — Direction only.** Beats: quick soft denial → the real question (`کیا اب بھی کچھ بچا ہے؟`). The intention changes mid-turn; a single turn-level emotion would flatten the shift from defense to vulnerability.
4. **رخسانہ, turn 4 — Direction only.** Beats: measured warning (`جواب سوچ کر دینا`) → the reason, which exposes her own fragility (`میں خود کو سمیٹ نہیں پاؤں گی`). Risk: the warning played as a threat; the source supports steadiness that breaks only at the end.
5. **خالد, turn 5 — Direction only.** Beats: sincere framing (`سچ یہی ہے`) → the memory of two cups of tea → the quiet confession (`اور میں پھر بھی دیر سے لوٹا`). This is the emotional peak; it is carried by pacing and a lowered final clause, not by added intensity.

No turn required refinement: the source is already natural, character-consistent spoken Urdu. Every word in artifact A is identical to the source.

## A. Clean spoken Urdu

```text
خالد: میں نہیں کہتا کہ سب پہلے جیسا ہو سکتا ہے... بس اتنا کہنے آیا تھا کہ جو کچھ ٹوٹا، اس کی ذمہ داری صرف میری ہے۔
رخسانہ: ذمہ داری؟ برسوں کی تنہائی، ہر رات کا انتظار... اور تم ایک جملے میں سب مٹا دینا چاہتے ہو؟
خالد: مٹانا تو میری جرات بھی نہیں... میں تو بس یہ پوچھنے آیا ہوں کہ کیا اب بھی کچھ بچا ہے؟
رخسانہ: جواب سوچ کر دینا... کیونکہ اگر اس بار بھی جھوٹ نکلا، تو میں خود کو سمیٹ نہیں پاؤں گی۔
خالد: سچ یہی ہے کہ میں ہر وہ صبح یاد کرتا ہوں جس میں تم چائے کے دو کپ رکھتی تھیں... اور میں پھر بھی دیر سے لوٹا۔
```

## B. Directed rehearsal script

```text
خالد: [measured, accepting rather than pleading] میں نہیں کہتا کہ سب پہلے جیسا ہو سکتا ہے... [settles into the admission] بس اتنا کہنے آیا تھا کہ جو کچھ ٹوٹا، اس کی ذمہ داری صرف میری ہے۔

رخسانہ: [disbelief at the word, not the man] ذمہ داری؟ [hurt kept under control; each item lands separately] برسوں کی تنہائی، ہر رات کا انتظار... [precise, contained accusation — no rise in volume] اور تم ایک جملے میں سب مٹا دینا چاہتے ہو؟

خالد: [quick, soft denial] مٹانا تو میری جرات بھی نہیں... [the defense drops; the question he actually came for] میں تو بس یہ پوچھنے آیا ہوں کہ کیا اب بھی کچھ بچا ہے؟

رخسانہ: [steady, giving him fair warning] جواب سوچ کر دینا... [the steadiness thins; her own stakes surface] کیونکہ اگر اس بار بھی جھوٹ نکلا، تو میں خود کو سمیٹ نہیں پاؤں گی۔

خالد: [sincerely, no performance] سچ یہی ہے کہ میں ہر وہ صبح یاد کرتا ہوں جس میں تم چائے کے دو کپ رکھتی تھیں... [lowered voice; the confession costs him] اور میں پھر بھی دیر سے لوٹا۔
```

(All bracketed notes are non-spoken rehearsal direction. No visible-only actions are directed; no internal thought is added beyond what the words already do.)

## C. Portable synthesis plan

| Turn | Speaker | Clean spoken text | Non-spoken delivery note | Pause/beat | Emphasis | Pronunciation |
|---|---|---|---|---|---|---|
| 1 | خالد | میں نہیں کہتا کہ سب پہلے جیسا ہو سکتا ہے... بس اتنا کہنے آیا تھا کہ جو کچھ ٹوٹا، اس کی ذمہ داری صرف میری ہے۔ | measured acceptance; not self-pity | reflective beat at `...` before the admission | `صرف میری` | — |
| 2 | رخسانہ | ذمہ داری؟ برسوں کی تنہائی، ہر رات کا انتظار... اور تم ایک جملے میں سب مٹا دینا چاہتے ہو؟ | hurt under control; items land one by one | conversational beat at `...` after the accumulation | `ایک جملے` | — |
| 3 | خالد | مٹانا تو میری جرات بھی نہیں... میں تو بس یہ پوچھنے آیا ہوں کہ کیا اب بھی کچھ بچا ہے؟ | soft denial giving way to the vulnerable question | hesitation beat at `...`; question asked sincerely | `اب بھی` lightly | — |
| 4 | رخسانہ | جواب سوچ کر دینا... کیونکہ اگر اس بار بھی جھوٹ نکلا، تو میں خود کو سمیٹ نہیں پاؤں گی۔ | steady warning; steadiness thins only at the end | suspension beat at `...` before the reason | `سوچ کر` | — |
| 5 | خالد | سچ یہی ہے کہ میں ہر وہ صبح یاد کرتا ہوں جس میں تم چائے کے دو کپ رکھتی تھیں... اور میں پھر بھی دیر سے لوٹا۔ | sincere memory, then a confession that costs him | reflective beat at `...`; final clause lowered | `دو کپ`; `دیر سے` | — |

## D. Eleven v3 adapter

Target: ElevenLabs / `eleven_v3` / locale unresolved / voices unresolved (one voice per speaker required). Support status: Urdu documented for Eleven v3; only documented inline audio tags used (`[thoughtful]`, `[sad]`, `[sighs]`, `[exhales]`, `[whispers]`); pauses carried by the source's ellipses, as v3 documents punctuation-based pacing and does not support SSML breaks. `Voice:` labels are routing metadata and must not enter the spoken text field. Urdu tag compliance is a hypothesis until heard with the selected voices.

```text
Voice: خالد
[thoughtful] میں نہیں کہتا کہ سب پہلے جیسا ہو سکتا ہے... بس اتنا کہنے آیا تھا کہ جو کچھ ٹوٹا، اس کی ذمہ داری صرف میری ہے۔

Voice: رخسانہ
[sad] ذمہ داری؟ برسوں کی تنہائی، ہر رات کا انتظار... اور تم ایک جملے میں سب مٹا دینا چاہتے ہو؟

Voice: خالد
[sighs] مٹانا تو میری جرات بھی نہیں... میں تو بس یہ پوچھنے آیا ہوں کہ کیا اب بھی کچھ بچا ہے؟

Voice: رخسانہ
جواب سوچ کر دینا... [exhales] کیونکہ اگر اس بار بھی جھوٹ نکلا، تو میں خود کو سمیٹ نہیں پاؤں گی۔

Voice: خالد
سچ یہی ہے کہ میں ہر وہ صبح یاد کرتا ہوں جس میں تم چائے کے دو کپ رکھتی تھیں... [whispers] اور میں پھر بھی دیر سے لوٹا۔
```

Caption copy is identical in words to artifact A (no tags, no voice labels).

## Restraint notes

- No words were changed, added, or removed: all five turns passed the naturalness and read-aloud checks, and the particles (`بس`, `تو`, `بھی`, `ہی`) carry stance and turn structure. This scene is therefore treated as canonical in practice — artifact A is byte-identical to the source.
- All five turns received **direction only**; refinement would have been activity for its own sake.
- Anger is directed as contained and precise, never as shouting; the emotional peak (turn 5) is carried by the existing ellipsis pacing and a lowered final clause, not by added intensity, tears, or an apology the source does not contain.
- No facts, motives, scenery, or backstory were invented; the only memory used is the source's own `چائے کے دو کپ` anchor.
- Tag discipline in D: one cue per material beat, documented `eleven_v3` tags only, no stacked tags, no repeated tags on consecutive turns; turns 2 and 4 rely partly on wording and sequence where the words already carry the delivery.
- `Voice:` labels are routing metadata only; speaker names never enter the spoken text. Locale and voices are `unresolved` and were not guessed.
- Needs listening test: Urdu compliance of `[thoughtful]`, `[sad]`, `[sighs]`, `[exhales]`, and `[whispers]` with the two selected voices; verify the ellipses produce hesitation beats rather than over-pauses, and that `[whispers]` on the final clause does not undermine audibility. Native Urdu review with the actual voices is required before production.
