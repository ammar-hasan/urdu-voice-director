# Human listening protocol

Text review is necessary but insufficient. Use this protocol for release candidates and consequential provider output.

## Panel

Recruit at minimum:

- two native Urdu speakers with different household or regional backgrounds;
- one listener close to the intended character age or someone experienced with that age group;
- one editor, teacher, voice artist, or producer familiar with spoken Urdu when available.

Do not treat majority vote as proof of a universal rule. Record differences in regional, generational, and bilingual preference.

## Systems

Evaluate:

1. the actual target provider/model/voice;
2. at least one plain local model, preferably the current Piper Urdu voice;
3. at least one expressive Urdu-capable provider where available;
4. a clean baseline and the directed/provider-adapted variant.

If a system lacks official Urdu support, do not use it as evidence of the skill’s Urdu quality.

## Blind A/B setup

- Randomize baseline and directed versions.
- Match loudness and file format.
- Do not tell listeners which is “improved.”
- Keep speaker/voice constant within a comparison.
- Change one direction variable at a time where possible.
- Include a repeat to estimate listener consistency.

## Listener questions

Rate `poor`, `acceptable`, `strong`, or `excellent`:

- Does the line sound believable?
- Does it sound like Urdu conversation rather than translated prose?
- Is pronunciation correct and regionally plausible for the intended voice?
- Are pauses intentional and correctly placed?
- Is emotion too weak, appropriate, or too strong?
- Does the speaker sound the intended age?
- Does the relationship/register sound right?
- Does the emotional change happen at the right words?
- Are borrowed English words intelligible?
- Is any direction tag spoken aloud or audible as an artifact?

Ask one free-response question: “Which word, pause, or tone first sounded wrong, and why?”

## Minimum sample set

Include:

- statement, sincere question, and rhetorical question;
- `آپ` and `تم` contexts;
- child and adult turns;
- gentle religious/educational line;
- interruption and reflective hesitation;
- suppressed anger and playful teasing;
- at least five selectively ambiguous words;
- Urdu-English product name and ordinary borrowing;
- short and multi-clause turns;
- one no-direction control.

## Evaluation record

```text
Skill version:
Date:
Provider/model:
Voice:
Locale:
Input variant:
Direction/markup:
Caption variant:
Listener background (self-described):

Believability:
Natural Urdu:
Pronunciation:
Pause function:
Emotion calibration:
Age:
Relationship/register:
Transition timing:
Code-switching:
Artifacts:

First wrong moment:
Preferred variant:
Reason:
```

## Release gate

Do not claim audio confidence until:

- no listener reports a meaning change;
- no provider markup is spoken;
- pronunciation is at least `strong` for critical words;
- pause and emotion are not rated `poor` by any relevant native listener without investigation;
- clean captions match the canonical spoken words;
- disagreements are documented rather than erased.

For a broad skill release, test at least 20 diverse turns and 5 complete exchanges on every provider profile that the skill recommends.
