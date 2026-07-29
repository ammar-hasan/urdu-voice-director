# Central worked example: gentle moral correction

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

- Ahmed’s jump from observation to theft is abrupt; his mischief should grow.
- `اب` is possible, but `اچھا موقع ہے` makes the live calculation audible.
- Fatima should intervene suddenly and then lower the temperature.
- Ahmed’s `شش` needs a startled, hushed defensive beat, not triumphant shouting.
- `انسانوں نے` is semantically sound but slightly abstract for this child exchange; `لوگوں نے` is more conversational.
- Ahmed’s realization and sincere question need separate beats.
- Fatima’s correction should be warm and serious, not angry or sermon-like.
- The original does not explicitly contain a longer moral conclusion, so the core refinement must not invent one.

## Refined clean dialogue

```text
احمد: ارے... یہاں تو کوئی بھی نہیں ہے۔

احمد: اچھا موقع ہے۔ امی کی چاکلیٹ کھا لیتا ہوں۔

فاطمہ: احمد، رُکو!

احمد: شش... آہستہ بولو۔ کسی نے مجھے دیکھا ہی نہیں۔

فاطمہ: لوگوں نے شاید نہ دیکھا ہو...

فاطمہ: مگر اللہ تعالیٰ تو ہمیں دیکھ رہے ہوتے ہیں۔

احمد: اوہ...

احمد: یعنی جب آس پاس کوئی نہ ہو، تب بھی اللہ تعالیٰ ہمیں دیکھ رہے ہوتے ہیں؟

فاطمہ: جی ہاں، بالکل۔
```

## Directed dialogue

Bracketed cues are non-spoken rehearsal notes.

```text
احمد: [quiet, cautious observation] ارے...

[a small listening beat]

احمد: یہاں تو کوئی بھی نہیں ہے۔

احمد: [mischief growing; pleased with the idea] اچھا موقع ہے۔ امی کی چاکلیٹ کھا لیتا ہوں۔

فاطمہ: [cuts in suddenly] احمد، رُکو!

احمد: [startled, then urgently hushed] شش... آہستہ بولو۔

احمد: [trying to recover his confidence] کسی نے مجھے دیکھا ہی نہیں۔

فاطمہ: [calm now; gently correcting] لوگوں نے شاید نہ دیکھا ہو...

[brief reflective pause]

فاطمہ: [serious but warm] مگر اللہ تعالیٰ تو ہمیں دیکھ رہے ہوتے ہیں۔

احمد: [the defense drops; soft realization] اوہ...

[allows the thought to settle]

احمد: [sincere curiosity] یعنی جب آس پاس کوئی نہ ہو، تب بھی اللہ تعالیٰ ہمیں دیکھ رہے ہوتے ہیں؟

فاطمہ: [simple reassurance] جی ہاں، بالکل۔
```

## Optional Eleven v3-style output

Use each speaker with the assigned voice in the provider’s dialogue workflow. Keep the clean version separately.

```text
[quietly] ارے... یہاں تو کوئی بھی نہیں ہے۔

[mischievously] اچھا موقع ہے۔ امی کی چاکلیٹ کھا لیتا ہوں۔

[urgently] احمد، رُکو!

[startled] شش... [whispers] آہستہ بولو۔ کسی نے مجھے دیکھا ہی نہیں۔

[calmly] لوگوں نے شاید نہ دیکھا ہو...

مگر اللہ تعالیٰ تو ہمیں دیکھ رہے ہوتے ہیں۔

[thoughtful] اوہ...

[curious] یعنی جب آس پاس کوئی نہ ہو، تب بھی اللہ تعالیٰ ہمیں دیکھ رہے ہوتے ہیں؟

جی ہاں، بالکل۔
```

The exact tag response in Urdu is a listening-test hypothesis. Remove a tag if the chosen voice overacts or changes language detection.

## Portable synthesis plan

| Turn | Speaker | Clean spoken text | Delivery note | Beat/pause | Emphasis |
|---|---|---|---|---|---|
| 1 | احمد | ارے... یہاں تو کوئی بھی نہیں ہے۔ | cautious observation | micro-beat after `ارے` | `کوئی بھی` lightly |
| 2 | احمد | اچھا موقع ہے۔ امی کی چاکلیٹ کھا لیتا ہوں۔ | mischief grows | reset between sentences | `اچھا موقع` |
| 3 | فاطمہ | احمد، رُکو! | sudden intervention | immediate | `رُکو` |
| 4 | احمد | شش... آہستہ بولو۔ کسی نے مجھے دیکھا ہی نہیں۔ | startled → hushed urgency → defensive confidence | shift after first sentence | `نہیں` |
| 5 | فاطمہ | لوگوں نے شاید نہ دیکھا ہو... مگر اللہ تعالیٰ تو ہمیں دیکھ رہے ہوتے ہیں۔ | calm correction → warm seriousness | reflective beat after first clause | `مگر`, `اللہ تعالیٰ` naturally |
| 6 | احمد | اوہ... یعنی جب آس پاس کوئی نہ ہو، تب بھی اللہ تعالیٰ ہمیں دیکھ رہے ہوتے ہیں؟ | realization → processing → sincere question | let `اوہ` settle | `تب بھی` |
| 7 | فاطمہ | جی ہاں، بالکل۔ | warm certainty | no dramatic pause | — |

## Emotional progression

### Ahmed

Cautious scan → an opportunity occurs to him → mischief grows → Fatima startles him → he lowers his voice urgently → he tries to defend the act through secrecy → the distinction between unseen and right begins to land → he processes → asks sincerely.

### Fatima

Urgent interruption → immediate de-escalation → gentle explanation → serious but warm principle → brief confirmation. She never needs anger to make the point matter.

## Restraint and alternative interpretations

- Do not add crying, trembling, guilt, or a confession; the text supports realization, not a full conversion scene.
- Do not add repeated reverence cues around `اللہ تعالیٰ`; ordinary sincerity is enough.
- `اسی لیے ہمیں اکیلے میں بھی ہمیشہ صحیح کام کرنا چاہیے۔` is a plausible **authorial extension**, not a fidelity-preserving rewrite. Add it only if the user requests a clearer educational conclusion.
- If Ahmed is a very young child, `جب آس پاس کوئی نہ ہو` may become `جب کوئی پاس نہ ہو`; test age and household vocabulary.
- If `جی ہاں` sounds too formal between these siblings, retain the original `بالکل۔` The user’s relationship context decides.
