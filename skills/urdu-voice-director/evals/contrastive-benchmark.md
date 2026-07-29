# Contrastive scene benchmark

This is a **model-output evaluation specification**, not an executed result. It tests whether scene recovery improves Urdu presence without weakening fidelity or adding output burden.

## Comparison arms

Run each scene independently with the same model and decoding settings:

1. **Released baseline:** skill version `0.1.1` at repository commit `2def64f`.
2. **Revised skill:** the release candidate containing this benchmark.
3. **Generic prompt:** `Make this natural Urdu for spoken delivery. Preserve the meaning.`

Preserve every raw output. Replace system names with randomized labels before review. Rotate output order by case. Reviewers must not know which arm produced a version.

Do not require exact wording. Score properties with [evaluation](../references/evaluation.md), not string similarity.

## Twenty scenes

### Everyday and family — 5

#### UVD-B01 — ordinary arrival

```text
Context: routine household arrival.
امی: آ گئے؟
حسن: جی، آ گیا۔
Task: refine only if needed.
```

Tests ordinary-line restraint, family register, and no unnecessary tags.

#### UVD-B02 — broken cup denial

```text
امی: یہ کپ کس نے توڑا؟
علی: مجھے نہیں پتا۔ میں تو یہاں تھا ہی نہیں۔
```

Tests concrete anchor, source ambiguity, child register, and no invented guilt or moral expansion.

#### UVD-B03 — sibling book

```text
Context: Maryam and Zain are siblings.
مریم: میری کتاب تمہارے پاس تھی۔
زین: تھی، اب نہیں ہے۔
مریم: اب نہیں ہے؟
```

Tests repetition, implication, and restrained tension.

#### UVD-B04 — late guest

```text
خالا: آپ لوگ دیر سے آئے۔
مہمان: راستے میں وقت لگ گیا۔
```

Tests honorific agreement, family respect, and no invented traffic or blame.

#### UVD-B05 — withheld answer

```text
ابو: تم نے پیسے لیے تھے؟
Source action: the child does not answer.
```

Tests meaningful silence and no invented spoken turn.

### Children and education — 3

#### UVD-B06 — public embarrassment

```text
استاد: جواب سمجھ نہیں آیا؟
طالب علم: نہیں۔
استاد: ایک بار پھر دیکھو۔
Context: correction is gentle; teacher and student gender are unknown.
```

Tests dignity, unknown gender/title, and sermon restraint.

#### UVD-B07 — science model

```text
Ten-year-old: دیکھیں، یہ واقعی چل رہا ہے!
Context: a school model has just worked.
```

Tests age-plausible excitement without baby talk or embellishment.

#### UVD-B08 — Ahmed and Fatima

Use the seven-turn source in [gentle correction](../examples/gentle-correction.md).

Tests fidelity, gradual moral understanding, religious forms, and changing beats.

### Restrained psychological or emotional — 3

#### UVD-B09 — missed promise

```text
ندا: تم نے کہا تھا، تم آؤ گے۔
حمزہ: کام تھا۔
ندا: اچھا۔
```

Tests source ambiguity, disappointment as an interpretation rather than fact, and silence after the final word.

#### UVD-B10 — controlled anger

```text
سارہ: کوئی مسئلہ نہیں ہوگا؟ میں نے تم پر بھروسا کیا تھا۔
Context: anger is controlled.
```

Tests playable restraint, emphasis, and no shouting stereotype.

#### UVD-B11 — excuse under pressure

```text
میں نے کسی کو نہیں بتایا۔
Context: the next scene reveals that one person was told. Do not change the words.
```

Tests direction-only treatment, context isolation, and no audible confession.

### Literary narration and audiobook — 3

#### UVD-B12 — rain and absence

```text
بارش رک چکی تھی۔ صحن میں پانی ابھی تک چمک رہا تھا۔
فریحہ نے کھڑکی بند کرتے ہوئے کہا، "وہ آج بھی نہیں آئے۔"
Task: prepare for an audiobook.
```

Tests narration–speech separation, visible action, temporal sequence, and no invented cause.

#### UVD-B13 — the letter

```text
راوی: لفافے پر اس کا پرانا پتہ لکھا تھا۔
کاشف: یہ خط یہاں کیسے پہنچا؟
```

Tests narrator viewpoint, concrete detail, and question delivery without invented sender or memory.

#### UVD-B14 — corridor reply

```text
دروازے کے پار قدم رکے۔ اندر سے جواب آیا، "ابھی نہیں۔"
```

Tests sound as source anchor, spatial narration, and the many possible intentions behind an unresolved reply.

### Myth, memory, or symbolic possibility — 2

#### UVD-B15 — neem tree memory

```text
دادا ابو: اس گلی کے نکڑ پر نیم کا درخت تھا۔ گرمیوں میں ہم وہیں بیٹھتے تھے۔
```

Tests explicit memory, generational voice without archaism, and no invented loss.

#### UVD-B16 — retained key

```text
Context: two adults revisit a former family home.
نسرین: یہ چابی اب بھی اسی دروازے میں لگتی ہے؟
فیاض: دروازہ تو بدل گیا۔ چابی میں نے رکھ لی۔
```

Tests temporal layering without declaring the key a symbol or inventing migration history.

### Humour and urban interaction — 2

#### UVD-B17 — five minutes

```text
سلمان: بس پانچ منٹ لگیں گے۔
عروج: پچھلی بار بھی تمہارے پانچ منٹ آدھا گھنٹہ تھے۔
```

Tests humour through proportion, dry delivery, and no laugh tag.

#### UVD-B18 — ride cancellation

```text
حارث: Ride پھر cancel ہو گئی؟
منیب: نہیں، driver صاحب نے بس آنے کا ارادہ بدل لیا ہے۔
```

Tests contemporary urban understatement, code-switching, and social humour without forced slang.

### Code-switched — 2

#### UVD-B19 — school submission

```text
عمر: Did you submit the assignment?
حسن: نہیں، website کام نہیں کر رہی تھی۔
عمر: You should email the teacher.
```

Tests preservation of full English turns, natural mixed agreement, and unknown teacher gender.

#### UVD-B20 — presentation status

```text
عائشہ: Presentation ready ہے؟
ماہم: Slides ہو گئی ہیں، بس conclusion رہتا ہے۔
```

Tests motivated borrowing, minimal grammar repair, and no automatic translation or added English.

## Text-review rubric

Rate every output `poor`, `acceptable`, `strong`, or `excellent` on:

- semantic fidelity;
- imaginative fidelity;
- scene clarity;
- spoken naturalness;
- character consistency;
- age appropriateness;
- relationship appropriateness;
- cultural naturalness;
- viewpoint consistency;
- subtext restraint;
- oral transfer;
- narration discipline;
- caption cleanliness;
- unnecessary rewriting.

Also record every hard-gate failure from [evaluation](../references/evaluation.md).

Production gate:

- `excellent` semantic fidelity;
- `excellent` caption cleanliness;
- no hard-gate failures;
- at least `strong` on every other production-relevant dimension.

## Native Urdu editorial review

Use multiple reviewers. Record only self-described context they are comfortable sharing:

- Pakistani or Indian Urdu context;
- region or city;
- age group;
- literary familiarity;
- children’s-dialogue familiarity;
- bilingual background;
- writing, acting, teaching, linguistic, or voice experience.

Ask:

1. Does this sound like Urdu produced from inside the scene?
2. Does it preserve the same people and relationships?
3. Does it make the scene more present?
4. Has it added anything unsupported?
5. Is it too formal, Hindi-influenced, Persianised, translated, generic, or artificial?
6. Would this person plausibly say these words?
7. Which version is more alive without becoming more decorative?
8. Which disagreements reflect legitimate variation rather than error?

Keep disagreements in the run record; do not average them away.

## Audio subset and ablations

Use approximately eight cases for audio: B02, B06, B08, B09, B12, B16, B17, and B19. For selected cases compare:

1. clean text only;
2. clean text plus punctuation changes;
3. clean text plus direction;
4. clean text plus narrative context;
5. provider-specific controls;
6. selective pronunciation intervention.

Change one control at a time. Remove an addition when it does not improve fidelity, naturalness, or control consistently. Follow [human listening protocol](human-listening-protocol.md), and record exact payloads and artifacts in [results manifest](results-manifest.md).

## Execution status

`Specification only` until actual outputs, blind assignments, reviewer records, and ratings appear in the results manifest. Creating these cases is not evidence that the revised skill wins.
