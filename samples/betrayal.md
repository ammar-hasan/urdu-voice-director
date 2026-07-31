# Sample scene — twenty years, one sitting

Sample voices: کاشف=Haseeb, دانش=Deep South Asian Baritone

## Source

Original scene written for this showcase.

```text
کاشف: بیس برس کی دوستی تھی ہماری، دانش... اور تم نے ایک ہی نشست میں اسے بیچ ڈالا؟
دانش: بیچا نہیں... کمپنی بچانی تھی، اور تمہاری جگہ کاٹنی پڑی۔ مجبوری تھی۔
کاشف: مجبوری؟ ...مجھے آج بھی وہ رات یاد ہے جب تم نے میرے کندھے پر ہاتھ رکھ کر کہا تھا— کاشف، تیرے بغیر یہ سب کچھ بھی نہیں۔
دانش: اور وہ سچ تھا۔
کاشف: تھا... ماضی میں۔ اب بس ایک بات کہو— آنکھوں میں آنکھیں ڈال کر کہو، کہ تم نے درست کیا۔
```

## Scene card

- Speakers: کاشف addressing دانش — business partners and close friends of twenty years; دانش has forced کاشف out of the company.
- Purpose of the moment: not an argument but a reckoning — کاشف wants دانش to say, to his face, that he did right; دانش defends the decision as necessity while refusing to deny the friendship.
- Protected: all five turns, both speaker identities, the intimate-peer `تم`/`تیرے` register, the quoted memory inside turn 3, and the past-tense pivot `تھا` in turn 4 (the hinge کاشف seizes in turn 5).
- Not marked canonical or news copy, so wording was refinable — but the turn audit found every line already natural spoken Urdu, so no words change.
- Register check: `تم` throughout is correct for a twenty-year friendship and carries the wound; moving to `آپ` would invent distance the source does not establish. No code-switching present; none added.
- Unresolved: physical setting, locale (`ur-PK`/`ur-IN`), and voices — left unresolved rather than assumed.
- Output target: ElevenLabs `eleven_v3` sample.
- Governing performance constraint: کاشف's anger is held in, never shouted; the peak is carried by pacing, lowered voice, and precise stress — not volume.

## Turn audit

1. کاشف turn 1 — **Direction only.** The words are already speakable thought units with a functional ellipsis after the name. The risk is misreading it as open rage; direction keeps the grief measured and the accusation quiet.
2. دانش turn 1 — **Direction only.** Already natural short clauses: verb-correction first (`بیچا نہیں`), then justification, then `مجبوری تھی` as a closing door. Risk is over-apologetic or glib delivery; direction sets a weighted, defensive-but-level tone.
3. کاشف turn 2 — **Direction only.** Two distinct beats: the cold echo `مجبوری؟` and the memory invoked as evidence, not nostalgia. The source's em dash marks the shift into the quoted words; a single generic emotion tag across this turn would erase the transition.
4. دانش turn 2 — **Direction only.** Four words that carry the scene's pivot. The pause before answering and the quiet admission of past tense do the work; nothing to refine, everything to place.
5. کاشف turn 3 — **Direction only.** Two beats: private confirmation (`تھا... ماضی میں۔`, almost to himself) then the final direct demand. This is the emotional peak; it is carried by a lower, slower voice and stress on `درست`, never by shouting.

## A. Clean spoken Urdu

```text
کاشف: بیس برس کی دوستی تھی ہماری، دانش... اور تم نے ایک ہی نشست میں اسے بیچ ڈالا؟
دانش: بیچا نہیں... کمپنی بچانی تھی، اور تمہاری جگہ کاٹنی پڑی۔ مجبوری تھی۔
کاشف: مجبوری؟ ...مجھے آج بھی وہ رات یاد ہے جب تم نے میرے کندھے پر ہاتھ رکھ کر کہا تھا— کاشف، تیرے بغیر یہ سب کچھ بھی نہیں۔
دانش: اور وہ سچ تھا۔
کاشف: تھا... ماضی میں۔ اب بس ایک بات کہو— آنکھوں میں آنکھیں ڈال کر کہو، کہ تم نے درست کیا۔
```

## B. Directed rehearsal script

```text
کاشف: [held-in anger; measured, never loud] بیس برس کی دوستی تھی ہماری، دانش... [the beat on the name lets twenty years land] اور تم نے ایک ہی نشست میں اسے بیچ ڈالا؟
دانش: [weighted breath before answering; defensive but level, short clauses closing the subject] بیچا نہیں... کمپنی بچانی تھی، اور تمہاری جگہ کاٹنی پڑی۔ مجبوری تھی۔
کاشف: [cold echo of his word; disbelief without volume] مجبوری؟ [then quietly invoking the memory — evidence, not nostalgia] ...مجھے آج بھی وہ رات یاد ہے جب تم نے میرے کندھے پر ہاتھ رکھ کر کہا تھا— کاشف، تیرے بغیر یہ سب کچھ بھی نہیں۔
دانش: [a beat; he cannot deny it, and holds his ground quietly rather than defiantly] اور وہ سچ تھا۔
کاشف: [almost to himself; the past tense confirms what he feared] تھا... ماضی میں۔ [then direct; voice lower and slower, precise stress on درست] اب بس ایک بات کہو— آنکھوں میں آنکھیں ڈال کر کہو، کہ تم نے درست کیا۔
```

## C. Portable synthesis plan

| Turn | Speaker | Clean spoken text | Non-spoken delivery note | Pause/beat | Emphasis |
|---|---|---|---|---|---|
| 1 | کاشف | بیس برس کی دوستی تھی ہماری، دانش... اور تم نے ایک ہی نشست میں اسے بیچ ڈالا؟ | held-in anger; measured, never loud | conversational beat after `دانش` (the source ellipsis) | light weight on `بیس برس`; the question stays quiet |
| 2 | دانش | بیچا نہیں... کمپنی بچانی تھی، اور تمہاری جگہ کاٹنی پڑی۔ مجبوری تھی۔ | defensive but level; correcting the verb first, then closing the subject | micro-beat after `بیچا نہیں`; no pause before `مجبوری تھی۔` — it lands flat and final | `مجبوری` stated as fact, not plea |
| 3 | کاشف | مجبوری؟ ...مجھے آج بھی وہ رات یاد ہے جب تم نے میرے کندھے پر ہاتھ رکھ کر کہا تھا— کاشف، تیرے بغیر یہ سب کچھ بھی نہیں۔ | cold echo of دانش's word, then the memory recounted steadily as evidence | processing beat after `مجبوری؟`; the em dash is a hard shift into the quoted words, not a trail-off | quoted line spoken evenly, as it was said that night |
| 4 | دانش | اور وہ سچ تھا۔ | quiet admission he cannot withhold; grounded, not defiant | reluctance beat before speaking | past tense `تھا` unhurried — this is the pivot |
| 5 | کاشف | تھا... ماضی میں۔ اب بس ایک بات کہو— آنکھوں میں آنکھیں ڈال کر کہو، کہ تم نے درست کیا۔ | realization almost to himself, then the final demand; voice lower and slower, peak without volume | reflective beat after `تھا`; the em dash tightens into the demand, no pause after it | precise stress on `درست` |

## D. Eleven v3 adapter

```text
Voice: کاشف
[angry] بیس برس کی دوستی تھی ہماری، دانش... اور تم نے ایک ہی نشست میں اسے بیچ ڈالا؟
Voice: دانش
[sighs] بیچا نہیں... کمپنی بچانی تھی، اور تمہاری جگہ کاٹنی پڑی۔ مجبوری تھی۔
Voice: کاشف
[sarcastic] مجبوری؟ ...[thoughtful] مجھے آج بھی وہ رات یاد ہے جب تم نے میرے کندھے پر ہاتھ رکھ کر کہا تھا— کاشف، تیرے بغیر یہ سب کچھ بھی نہیں۔
Voice: دانش
[short pause] اور وہ سچ تھا۔
Voice: کاشف
[muttering] تھا... ماضی میں۔ [whispers] اب بس ایک بات کہو— آنکھوں میں آنکھیں ڈال کر کہو، کہ تم نے درست کیا۔
```

## Restraint notes

- No words changed, added, or reordered anywhere; A is identical to the source because the audit found every line already natural spoken Urdu. No facts, motives, backstory, or scenery were added beyond the authorized context (twenty years of friendship, the forced exit).
- No shouting anywhere. کاشف's intensity comes from lowered voice, distinct pause functions, and stress placement; دانش's defense stays level rather than apologetic or cold.
- Every pause in the source has a distinct job: the beat on the name (turn 1), the verb-correction micro-beat (turn 2), the processing beat after the echo and the hard em dash into quotation (turn 3), the reluctance beat (turn 4), the reflective beat and tightening dash (turn 5). None were rendered as interchangeable ellipses in direction.
- One cue per beat; multi-beat turns 3 and 5 carry exactly two cues each, placed at the shift. No tag is used that would not change delivery, and no tag repeats across consecutive turns.
- All v3 tags (`[angry]`, `[sighs]`, `[sarcastic]`, `[thoughtful]`, `[short pause]`, `[muttering]`, `[whispers]`) are from ElevenLabs' documented eleven_v3 audio-tag guidance, re-verified against first-party docs on 2026-07-31; ellipses and dashes are the source's own punctuation, which v3 documentation explicitly treats as pause/shift carriers. No SSML, no invented tags, no visible-only actions as tags (`آنکھوں میں آنکھیں` remains spoken words, not direction).
- Listening tests required: (a) `[angry]` on turn 1 must not raise volume with the selected voice — if it does, replace with `[sad]` or drop it, since the words already carry restraint; (b) `[whispers]` on the final demand must remain intelligible in Urdu and match a serious voice's character; (c) Urdu tag compliance and the quoted-memory shift at the em dash need native-speaker listening. Voice and locale remain unresolved; choose a steady, serious voice, since v3 tag response depends heavily on voice training data.
- Alternative reading noted: `اور وہ سچ تھا۔` could be played defiant rather than quietly level; the level reading is chosen as likelier between friends of twenty years. Switching readings changes only the cue and delivery, never the words.
