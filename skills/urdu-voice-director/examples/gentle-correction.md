# Central worked example: gentle moral correction

This primary version is a **fidelity-first refinement**. It does not add dialogue turns, motives, honorifics, or a concluding lesson. Any expanded educational version must be labeled as an authorial adaptation and approved separately.

## Original dialogue

```text
احمد: ارے، یہاں تو کوئی بھی نہیں ہے۔

احمد: اب امی کی چاکلیٹ کھا لیتا ہوں!

فاطمہ: رُکو، رُکو!

احمد: شش، کسی نے دیکھا ہی نہیں!

فاطمہ: انسانوں نے شاید نہ دیکھا ہو، لیکن اللہ تعالیٰ ہمیں دیکھ رہے ہوتے ہیں۔

احمد: یعنی اگر کوئی نہ بھی دیکھے، تب بھی اللہ دیکھ رہے ہوتے ہیں؟

فاطمہ: بالکل۔
```

## Problems found

- Ahmed’s cautious observation, growing mischief, startled hush, and defensive confidence are performance beats already latent in the words; they do not require new spoken motives.
- The repeated `رُکو` carries Fatima’s sudden interruption and should not be removed merely for elegance.
- `دیکھ رہے ہوتے ہیں` is awkward here without an explicit habitual frame. In this immediate scene, `دیکھ رہے ہیں` is the minimally invasive idiomatic choice.
- Ahmed’s realization, processing, and sincere curiosity must be directed through the existing question rather than inserted as a new `اوہ` turn.
- The source alternates `اللہ تعالیٰ` and `اللہ`. Preserve that choice rather than adding an honorific to Ahmed’s line.
- Fatima’s final `بالکل` is already warm and sufficient; `جی ہاں` would add formality unsupported by the assumed child-to-child relationship.

## Refined clean dialogue

```text
احمد: ارے... یہاں تو کوئی بھی نہیں ہے۔

احمد: اب امی کی چاکلیٹ کھا لیتا ہوں۔

فاطمہ: رُکو، رُکو!

احمد: شش... کسی نے دیکھا ہی نہیں!

فاطمہ: انسانوں نے شاید نہ دیکھا ہو، لیکن اللہ تعالیٰ ہمیں دیکھ رہے ہیں۔

احمد: یعنی اگر کوئی نہ بھی دیکھے، تب بھی اللہ دیکھ رہے ہیں؟

فاطمہ: بالکل۔
```

The words change only where punctuation supports the intended beat and where the original aspect is unnatural in context.

## Directed dialogue

Bracketed cues are non-spoken rehearsal notes.

```text
احمد: [quiet, cautious observation] ارے...

[a small listening beat]

احمد: یہاں تو کوئی بھی نہیں ہے۔

احمد: [mischief growing as the idea occurs to him] اب امی کی چاکلیٹ کھا لیتا ہوں۔

فاطمہ: [cuts in suddenly] رُکو، رُکو!

احمد: [startled; urgently lowering his voice] شش...

احمد: [trying to recover defensive confidence] کسی نے دیکھا ہی نہیں!

فاطمہ: [calm now; gentle but serious] انسانوں نے شاید نہ دیکھا ہو، لیکن اللہ تعالیٰ ہمیں دیکھ رہے ہیں۔

احمد: [the defense softens; processes the implication, then asks sincerely] یعنی اگر کوئی نہ بھی دیکھے، تب بھی اللہ دیکھ رہے ہیں؟

فاطمہ: [warm, plain certainty] بالکل۔
```

The split visual beats do not add or remove spoken words. A synthesis workflow may keep Ahmed’s final question as one utterance and express the internal shift through contour rather than segmentation.

## Optional Eleven v3-style adapter

Target details must be refreshed against current first-party documentation and tested with the selected voice. The bracketed controls below are part of the provider request payload, not the canonical utterance or caption.

```text
Canonical utterance:
ارے... یہاں تو کوئی بھی نہیں ہے۔

Provider request payload:
[quietly] ارے... یہاں تو کوئی بھی نہیں ہے۔

Canonical utterance:
اب امی کی چاکلیٹ کھا لیتا ہوں۔

Provider request payload:
[mischievously] اب امی کی چاکلیٹ کھا لیتا ہوں۔

Canonical utterance:
رُکو، رُکو!

Provider request payload:
[urgently] رُکو، رُکو!

Canonical utterance:
شش... کسی نے دیکھا ہی نہیں!

Provider request payload:
[startled] شش... [whispers] کسی نے دیکھا ہی نہیں!

Canonical utterance:
انسانوں نے شاید نہ دیکھا ہو، لیکن اللہ تعالیٰ ہمیں دیکھ رہے ہیں۔

Provider request payload:
[calmly] انسانوں نے شاید نہ دیکھا ہو، لیکن اللہ تعالیٰ ہمیں دیکھ رہے ہیں۔

Canonical utterance:
یعنی اگر کوئی نہ بھی دیکھے، تب بھی اللہ دیکھ رہے ہیں؟

Provider request payload:
[thoughtful] یعنی اگر کوئی نہ بھی دیکھے، تب بھی اللہ دیکھ رہے ہیں؟

Canonical utterance:
بالکل۔

Provider request payload:
بالکل۔
```

Exact tag compliance in Urdu remains an audio-test hypothesis. Remove a tag if the chosen voice overacts, vocalizes controls, or changes language behavior.

## Portable synthesis plan

| Turn | Speaker | Canonical utterance | Delivery note | Beat/pause | Emphasis |
|---|---|---|---|---|---|
| 1 | احمد | ارے... یہاں تو کوئی بھی نہیں ہے۔ | cautious observation | micro-beat after `ارے` | `کوئی بھی` lightly |
| 2 | احمد | اب امی کی چاکلیٹ کھا لیتا ہوں۔ | mischief grows | natural sentence flow | intention carried by contour |
| 3 | فاطمہ | رُکو، رُکو! | sudden intervention | immediate | second `رُکو` remains urgent |
| 4 | احمد | شش... کسی نے دیکھا ہی نہیں! | startled → hushed urgency → defensive confidence | shift after `شش` | `نہیں` |
| 5 | فاطمہ | انسانوں نے شاید نہ دیکھا ہو، لیکن اللہ تعالیٰ ہمیں دیکھ رہے ہیں۔ | calm correction → warm seriousness | light clause boundary | `لیکن` naturally |
| 6 | احمد | یعنی اگر کوئی نہ بھی دیکھے، تب بھی اللہ دیکھ رہے ہیں؟ | realization → processing → sincere question | allow the inference to form | `تب بھی` |
| 7 | فاطمہ | بالکل۔ | warm certainty | no dramatic pause | — |

## Emotional progression

### Ahmed

Cautious observation → mischief grows → Fatima startles him → he urgently lowers his voice → defensive confidence → the implication begins to land → reflective processing → sincere curiosity. These are delivery readings of the existing turns, not newly asserted plot facts.

### Fatima

Sudden intervention → immediate de-escalation → gentle correction → serious but warm delivery → brief confirmation. She never needs anger or a sermon to make the point matter.

## Restraint and alternative interpretations

- Do not call the act “theft” unless the scene establishes ownership and the user wants that framing.
- Do not add `اچھا موقع ہے`, `آہستہ بولو`, `اوہ`, `جی ہاں`, or a concluding lesson to the primary refinement; each changes the spoken content or register.
- `اسی لیے ہمیں اکیلے میں بھی ہمیشہ صحیح کام کرنا چاہیے۔` can be offered only as an **optional educational adaptation**, never as a meaning-preserving correction.
- If the scene describes a general habitual principle rather than the present moment, a native reviewer may prefer `اللہ تعالیٰ ہمیں ہمیشہ دیکھتے ہیں`; that is a theological/register choice to confirm, not a mechanical replacement.
- If Ahmed’s first line is playful rather than cautious, change only the direction, not the words.
