# Code-switching and Roman Urdu

## Example 1: school friends

### Original

```text
عمر: Did you submit the assignment?
حسن: نہیں، website کام نہیں کر رہی تھی۔
عمر: You should email the teacher.
```

### Problems found

- The switching may be natural, but full English turns create a stronger bilingual characterization than necessary.
- `website` is ordinary in this context; a formal translation would be stiff.
- The teacher relationship favors a respectful reference.

### Refined clean dialogue

```text
عمر: اسائنمنٹ جمع کرا دی؟
حسن: نہیں، ویب سائٹ چل ہی نہیں رہی تھی۔
عمر: سر کو ای میل کر دو۔
```

Alternative for a strongly code-switched group:

```text
عمر: Assignment submit کر دی؟
حسن: نہیں، website چل ہی نہیں رہی تھی۔
عمر: Sir کو email کر دو۔
```

### Directed dialogue

```text
عمر: [casual check] اسائنمنٹ جمع کرا دی؟
حسن: [mildly frustrated] نہیں، ویب سائٹ چل ہی نہیں رہی تھی۔
عمر: [practical] سر کو ای میل کر دو۔
```

### Provider-ready notes

- Test `اسائنمنٹ`, `ویب سائٹ`, and `ای میل` with the selected Urdu voice.
- Keep official English spelling only if the voice handles Latin text naturally.
- Do not put `[in English]` around borrowed words.

### Emotional progression

Routine check → mild frustration → practical suggestion. No dramatic direction is needed.

### Restraint and alternatives

Choose one of the two clean versions from character evidence; do not randomly mix their script conventions.

## Example 2: Roman Urdu ambiguity

### Original

```text
Sara: acha kal milty hain, main us ko b bula loon?
Hina: nahi pehle us se poch lo
```

### Problems found

- `kal` can mean yesterday or tomorrow, but `ملتے ہیں` makes future more likely.
- `b` means `بھی`.
- Address/register is familiar.
- `پوچھ` needs standard Urdu spelling; no extra formality is needed.

### Refined clean dialogue

```text
سارہ: اچھا، کل ملتے ہیں۔ میں اسے بھی بلا لوں؟
حنا: نہیں، پہلے اس سے پوچھ لو۔
```

### Directed dialogue

```text
سارہ: [suggesting the plan, then checking] اچھا، کل ملتے ہیں۔ میں اسے بھی بلا لوں؟
حنا: [matter-of-fact] نہیں، پہلے اس سے پوچھ لو۔
```

### Optional provider-ready output

Use the clean Urdu directly. If a short isolated `کل` is generated separately, keep enough neighboring context for the intended reading; the word’s temporal meaning is contextual even though its pronunciation is not.

### Emotional progression

Plan formation → permission check → practical correction.

### Restraint and alternatives

Do not change `کل` to `آئندہ کل` or another unnatural phrase. If prior context does not establish future time, ask.

## Example 3: product name

### Original

```text
اب Settings میں جا کر Dark Mode کو enable کرو۔
```

### Refined clean dialogue

For a bilingual tech tutorial:

```text
اب Settings میں جا کر Dark Mode آن کر دو۔
```

For an Urdu-first tutorial whose UI is still English:

```text
اب `Settings` کھولو، پھر `Dark Mode` آن کر دو۔
```

### TTS note

Backticks are caption typography, not spoken input. Provider input should contain the visible names without Markdown. Test whether the voice says the English UI labels intelligibly; if not, segment or use a documented language-control feature.
