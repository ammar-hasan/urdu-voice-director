# Code-switching and Roman Urdu

## Example 1: school friends

### Original

```text
علی: Did you submit the assignment?
حسن: نہیں، website کام نہیں کر رہی تھی۔
علی: You should email the teacher.
```

### Problems found

- Full English turns are part of the source’s bilingual characterization and should be preserved by default.
- `website` is ordinary in this context; a formal translation would be stiff.
- `the teacher` does not establish the teacher’s gender or preferred Urdu title.

### Refined clean dialogue

```text
علی: Did you submit the assignment?
حسن: نہیں، website چل نہیں رہی تھی۔
علی: You should email the teacher.
```

### Directed dialogue

```text
علی: [casual check] Did you submit the assignment?
حسن: [mildly frustrated] نہیں، website چل نہیں رہی تھی۔
علی: [practical] You should email the teacher.
```

### Provider-ready notes

- Test the English turns and `website` with the selected bilingual or Urdu voice.
- If one voice cannot handle both languages naturally, segment by turn or use a documented language-control feature rather than rewriting the character by default.
- Do not put `[in English]` around borrowed words.

### Emotional progression

Routine check → mild frustration → practical suggestion. No dramatic direction is needed.

### Restraint and alternatives

Do not reduce full-turn code-switching merely to make synthesis easier. If the user explicitly asks for an Urdu-dominant localization, offer it separately and keep the source-preserving version:

```text
علی: اسائنمنٹ جمع کرا دی؟
حسن: نہیں، ویب سائٹ چل نہیں رہی تھی۔
علی: ٹیچر کو ای میل کر دو۔
```

`ٹیچر` remains gender-neutral. Use `سر`, `میڈم`, `استاد`, or `استانی` only when the scene establishes that title.

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
