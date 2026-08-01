# Human listening protocol

Text review is necessary but insufficient. Use this protocol for release candidates and consequential provider output.

## Panel

Recruit at minimum:

- two native Urdu speakers with different household or regional backgrounds;
- one listener close to the intended character age or someone experienced with that age group;
- one editor, teacher, voice artist, or producer familiar with spoken Urdu when available.

Do not treat majority vote as proof of a universal rule. Record differences in regional, generational, and bilingual preference.

Where reviewers are comfortable, record self-described Pakistani or Indian Urdu context, region/city, age group, literary familiarity, children’s-dialogue familiarity, bilingual background, and relevant writing, acting, teaching, linguistic, or voice experience. Do not infer identity from accent or location.

## Native Urdu editorial pass

Before synthesis, blind-review the text variants and ask:

- Does this sound like Urdu produced from inside the scene?
- Does it preserve the same people and relationships?
- Does it make the scene more present?
- Has it added anything unsupported?
- Is it too formal, Hindi-influenced, Persianised, translated, generic, or artificial?
- Would this person plausibly say these words?
- Which version is more alive without becoming more decorative?
- Which disagreements reflect legitimate variation rather than errors?

Keep disagreements and minority judgments in the run record.

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
- Keep canonical utterances and captions identical unless a documented pronunciation divergence is the variable under test.
- Change one direction variable at a time where possible.
- For pronunciation failures, randomize canonical, minimally diacritized, and IPA/dictionary variants when each is applicable; include repeated generations.
- Include a repeat to estimate listener consistency.
- Preserve exact request payloads, model IDs, API/product surfaces, voices, locales, dates, and controls.

## Listener questions

Rate `poor`, `acceptable`, `strong`, or `excellent`:

- Does the line sound believable?
- Does it sound like Urdu conversation rather than translated prose?
- Is pronunciation correct and regionally plausible for the intended voice?
- Are `ت/ٹ`, `د/ڈ`, `ر/ڑ`, aspiration, vowel length, and short vowels realized as intended?
- Are pauses intentional and correctly placed?
- Is emotion too weak, appropriate, or too strong?
- Does the selected restrained/grounded/heightened range fit the brief?
- Does naturalistic or stylized treatment fit independently of range, or has anti-invention made the line flat?
- Does the speaker sound the intended age?
- Does the relationship/register sound right?
- Does the emotional change happen at the right words?
- Are borrowed English words intelligible?
- Is any direction tag spoken aloud or audible as an artifact?
- Does the line preserve viewpoint and supported subtext?
- Has any context, narration, or internal thought leaked into speech?
- Is there accent drift or loss of voice continuity across split utterances?
- Are any words swallowed, repeated, or added?

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
- at least two dental/retroflex contrasts and one `ر/ڑ` contrast in natural phrases;
- restrained, grounded, and heightened range examples;
- naturalistic and stylized treatments, including at least one restrained-stylized example;
- Urdu-English product name and ordinary borrowing;
- short and multi-clause turns;
- one no-direction control.

## Evaluation record

```text
Skill version:
Date:
Provider/model:
Product/API surface:
Voice:
Locale:
Performance form/delivery range/treatment:
Source input:
Input variant:
Direction/markup:
Narrative context:
Request payload:
Caption variant:
Pronunciation/normalization divergence:
Expected critical segment(s):
Observed critical segment(s):
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
Audio link or artifact reference:
Reviewer disagreement:

First wrong moment:
Preferred variant:
Reason:
```

## Release gate

Do not claim audio confidence until:

- no listener reports a meaning change;
- no provider markup is spoken;
- pronunciation is at least `strong` for critical words;
- no known critical consonant substitution is hidden by an aggregate pronunciation score;
- pause and emotion are not rated `poor` by any relevant native listener without investigation;
- clean captions match the canonical spoken words;
- disagreements are documented rather than erased.

For a broad skill release, test at least 20 diverse turns and 5 complete exchanges on every provider profile that the skill recommends.

## Representative release subset and ablation

Use the eight cases named in [contrastive benchmark](contrastive-benchmark.md) unless the release changes require another balanced subset. Where the provider permits it, compare:

1. clean text only;
2. punctuation adjustment;
3. restrained direction;
4. non-spoken narrative context;
5. provider-specific controls;
6. ambiguity-first diacritics;
7. inline IPA or pronunciation dictionary;
8. alternative voice/model.

ASR output can flag swallowed, substituted, or added words, but it cannot establish naturalness, relationship, cultural fit, pause function, or emotional progression. Never treat transcription accuracy as the complete verdict.
