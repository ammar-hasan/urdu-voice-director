# Children, parents, teachers, and students

## Example 1: parent and child uncertainty

### Original

```text
بچہ: میں کل اسکول نہیں جانا چاہتا کیونکہ ممکن ہے کہ سب میرے پروجیکٹ کو برا سمجھیں۔
امی: تمہیں دوسروں کی رائے سے خوف زدہ ہونے کی ضرورت نہیں ہے۔
```

### Problems found

- The child states a polished causal explanation rather than speaking through worry.
- The parent’s line is abstract and sounds like advice copy.
- The child’s fear should be acknowledged before reassurance.

### Refined clean dialogue

```text
بچہ: امی... میں کل اسکول نہ جاؤں؟
امی: کیوں؟ کیا ہوا؟
بچہ: اگر سب کو میرا پروجیکٹ بُرا لگا تو؟
امی: اچھا، یہ بات ہے۔ گھبراہٹ ہو رہی ہے؟
بچہ: تھوڑی سی۔
امی: چلو، پہلے مجھے دکھاؤ۔ پھر مل کر دیکھتے ہیں۔
```

### Directed dialogue

```text
بچہ: [reluctant] امی... میں کل اسکول نہ جاؤں؟

امی: [attentive, not alarmed] کیوں؟ کیا ہوا؟

بچہ: [the real worry comes out] اگر سب کو میرا پروجیکٹ بُرا لگا تو؟

امی: [understanding] اچھا، یہ بات ہے۔ گھبراہٹ ہو رہی ہے؟

بچہ: [small admission] تھوڑی سی۔

امی: [practical warmth] چلو، پہلے مجھے دکھاؤ۔ پھر مل کر دیکھتے ہیں۔
```

### Optional provider-ready output

Use one clean utterance per turn. Put the direction in a separate instruction field when supported. Do not make the child sound younger than the wording establishes.

### Emotional progression

Avoidance → invitation to explain → fear becomes concrete → parent recognizes it → child admits vulnerability → parent offers a next action.

### Restraint and alternatives

The added turns preserve the original function but expand the interaction. If strict line-count fidelity is required:

```text
بچہ: امی... اگر سب کو میرا پروجیکٹ بُرا لگا تو؟ میں کل اسکول نہیں جانا چاہتا۔
امی: پہلے مجھے دکھاؤ۔ پھر مل کر دیکھتے ہیں، ٹھیک ہے؟
```

## Example 2: teacher and student embarrassment

### Original

```text
استاد: تم نے سوال کیوں نہیں کیا؟
طالب علم: کیونکہ مجھے جواب نہ آنے پر شرمندگی محسوس ہو رہی تھی۔
```

### Problems found

- The student describes the emotion from outside instead of speaking from within it.
- A gentle self-repair can carry embarrassment naturally.

### Refined clean dialogue

```text
استاد: تم نے پوچھا کیوں نہیں؟
طالب علم: میں... مجھے لگا، شاید سب ہنسیں گے۔
استاد: نہ سمجھ آئے تو پوچھنا بالکل ٹھیک ہے۔
```

### Directed dialogue

```text
استاد: [gently curious] تم نے پوچھا کیوں نہیں؟

طالب علم: [starts, corrects themself] میں... مجھے لگا، شاید سب ہنسیں گے۔

استاد: [reassuring, not overly sweet] نہ سمجھ آئے تو پوچھنا بالکل ٹھیک ہے۔
```

### Emotional progression

Gentle inquiry → embarrassment and self-correction → simple reassurance.

### Restraint and alternatives

Do not make the teacher deliver a motivational speech. If the student is older or the class formal, `آپ نے پوچھا کیوں نہیں؟` may be the established register.
