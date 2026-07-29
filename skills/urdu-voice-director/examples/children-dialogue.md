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
- The child’s fear should stay concrete without adding a new counseling exchange.

### Refined clean dialogue

```text
بچہ: امی... میں کل اسکول نہیں جانا چاہتا۔ اگر سب کو میرا پروجیکٹ بُرا لگا تو؟
امی: سب کو پسند نہ بھی آئے تو گھبرانے کی ضرورت نہیں۔
```

### Directed dialogue

```text
بچہ: [reluctant; the worry becomes concrete] امی... میں کل اسکول نہیں جانا چاہتا۔ اگر سب کو میرا پروجیکٹ بُرا لگا تو؟

امی: [acknowledging the fear; calm reassurance] سب کو پسند نہ بھی آئے تو گھبرانے کی ضرورت نہیں۔
```

### Optional provider-ready output

Use one clean utterance per turn. Put the direction in a separate instruction field when supported. Do not make the child sound younger than the wording establishes.

### Emotional progression

Avoidance → fear becomes concrete → parent responds with calm reassurance.

### Restraint and alternatives

Do not add questions, a vulnerability admission, or a project-review plan under default refinement. If the user invites an expanded parent-child scene, the following may be offered as an **authorial adaptation**:

```text
بچہ: امی... میں کل اسکول نہ جاؤں؟
امی: کیوں؟ کیا ہوا؟
بچہ: اگر سب کو میرا پروجیکٹ بُرا لگا تو؟
امی: چلو، پہلے مجھے دکھاؤ۔ پھر مل کر دیکھتے ہیں، ٹھیک ہے؟
```

That version creates new dialogue and a next action, so it requires permission.

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
طالب علم: میں... مجھے لگا، جواب نہ آیا تو شرمندگی ہوگی۔
```

### Directed dialogue

```text
استاد: [gently curious] تم نے پوچھا کیوں نہیں؟

طالب علم: [starts, corrects themself; embarrassed but direct] میں... مجھے لگا، جواب نہ آیا تو شرمندگی ہوگی۔
```

### Emotional progression

Gentle inquiry → embarrassment and self-correction.

### Restraint and alternatives

Do not add the teacher’s reassurance to a two-turn source under default refinement. If the user asks to extend the teaching moment, `نہ سمجھ آئے تو پوچھنا بالکل ٹھیک ہے۔` is a restrained **authorial adaptation**. If the student is older or the class formal, `آپ نے پوچھا کیوں نہیں؟` may be the established register.
