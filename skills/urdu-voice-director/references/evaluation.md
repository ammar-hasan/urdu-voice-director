# Evaluation framework

Rate each dimension `poor`, `acceptable`, `strong`, or `excellent`.

## Rating anchors

- **Poor** — material failure; meaning, character, naturalness, or output safety is damaged.
- **Acceptable** — usable but generic, uneven, or in need of listening revision.
- **Strong** — natural and controlled with only minor uncertainties.
- **Excellent** — precise, restrained, character-specific, and validated for the intended use.

## Dimensions

| Dimension | Review question |
|---|---|
| Semantic fidelity | Are facts, intent, and dramatic function preserved? |
| Imaginative fidelity | Is the intended scene easier to experience without unsupported facts, objects, motives, memories, symbolism, cultural assumptions, or emotional intensity? |
| Spoken naturalness | Does it sound like Urdu conversation rather than written or translated prose? |
| Character consistency | Does vocabulary, confidence, and rhythm belong to this speaker? |
| Age appropriateness | Does a child, teenager, adult, or elder sound plausible without caricature? |
| Relationship appropriateness | Are pronouns, agreement, address, respect, and directness coherent? |
| Emotional progression | Are meaningful changes gradual and audible rather than covered by one tag? |
| Pause usefulness | Does each marked silence have a distinct function? |
| Tag restraint | Are cues sparse, short, actionable, and near their targets? |
| Cultural naturalness | Are household, school, religious, and social norms handled contextually? |
| Pronunciation clarity | Are only real ambiguities marked, without over-diacritics? |
| TTS suitability | Is the input segmented and adapted to documented controls? |
| Caption cleanliness | Is there a word-only artifact free of provider tags and hacks? |
| Narration discipline | Is invisible narration absent unless requested? |
| Oral transfer | Did literary qualities move into the right layer—dialogue, narration, context, rehearsal direction, or provider control—without turning non-spoken material into speech? |

## Hard gates

Fail the output regardless of average rating if it:

- changes a fact or moral claim for drama;
- adds unsupported scenery, motive, memory, symbolism, cultural assumption, or emotional intensity;
- changes `آپ`/`تم`/`تُو` without scene justification;
- makes a child deliver adult philosophical prose;
- puts unsupported tags into provider input;
- leaks provider markup into captions;
- adds narration the user did not request;
- explains subtext or internal thought inside the canonical utterance;
- represents an unsupported Urdu engine as supported;
- uses one voice direction across a clear emotional transition.

## Failure examples

### Over-tagging

```text
[softly] اچھا... [thoughtfully] تو... [curiously] آپ کب آئے؟ [warmly]
```

### Formalizing natural speech

```text
براہ کرم مجھے اس امر سے مطلع فرمائیں کہ آپ کی آمد کب واقع ہوئی۔
```

### Adult child

```text
میں اس اخلاقی تضاد کا ادراک کر چکا ہوں۔
```

### Sermon inflation

One corrective sentence becomes a long lecture unsupported by the original.

### Pause monotony

Every comma becomes `[brief pause]`; every realization gets the same ellipsis.

### Provider leakage

```text
Caption: [mischievously] امی کی چاکلیٹ کھا لیتا ہوں۔
```

## Review sequence

1. Compare original and clean versions line by line for meaning.
2. Check scene anchors, viewpoint, implication, and every added detail against the source.
3. Read the clean version aloud.
4. Remove unnecessary particles, ellipses, ornament, and tags.
5. Check relationship morphology and age.
6. Confirm that narration, context, and internal thought stayed outside canonical speech.
7. Compare direction against the beat map.
8. Validate provider syntax against current official documentation.
9. Listen with the actual voice and native reviewers.

Target `strong` or better on every production-relevant dimension. Require `excellent` semantic fidelity and caption cleanliness, with no hard-gate failure, for production.
