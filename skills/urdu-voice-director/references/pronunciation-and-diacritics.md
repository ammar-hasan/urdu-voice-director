# Pronunciation and diacritics

Urdu normally omits short-vowel marks. Context lets a fluent reader recover them, but children, learners, and computational systems can face homograph ambiguity. Research establishes the ambiguity and computational need; the selective policy below is an **editorial hypothesis** for modern TTS, pending provider-specific A/B listening. It does not justify fully marking every word.

## Selective policy (editorial; test before adopting)

Add a diacritic when all are true:

1. The unmarked spelling has a plausible competing pronunciation.
2. Context or a tested engine does not resolve it reliably.
3. The mark preserves ordinary readability.

Useful candidates include:

- `رُکو`
- `کِس`
- `اِس`
- `اُس`
- `پَر` when needed to distinguish it in a difficult context

`پھر` is sometimes mispronounced by models, but do not add a mark without knowing the actual error; spelling may not be the cause.

## Do not over-diacritize

Over-diacritics:

- make ordinary Urdu visually heavy;
- can introduce editorial errors;
- may interact unpredictably with tokenizers or phonemizers;
- can damage caption familiarity.

Keep two copies if a provider needs a pronunciation hack:

```text
Clean caption: رکو، ابھی مت جاؤ۔
Provider input: رُکو، ابھی مت جاؤ۔
```

## Names, numbers, and abbreviations

- Ask for name pronunciation only when the correct form cannot be inferred and the name matters.
- Spell ambiguous digits as words in a provider copy when language detection or normalization may fail.
- Expand acronyms or supply a pronunciation note; do not assume an Urdu voice will read Latin initials as intended.
- For Arabic religious expressions, preserve conventional Urdu spelling unless a tested model needs a separate pronunciation form.

## Provider pronunciation controls

Phoneme alphabets and lexicons are provider-, model-, and locale-specific. Confirm that Urdu or the selected locale supports the control before using it. A provider’s general SSML page is not proof that its Urdu voice supports every phoneme feature.

Never put IPA or provider phoneme markup into the clean transcript.

## Listening test

Create minimal pairs:

1. normal spelling;
2. selectively diacritized spelling;
3. documented pronunciation override, if supported.

Keep the least invasive version that fixes the actual error. Validate with a native Urdu listener; ASR transcription alone can miss vowel-quality and accent problems.
