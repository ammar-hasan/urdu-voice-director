# Pronunciation

Load this reference for ambiguous readings, diacritics, names, places, numbers, acronyms, Arabic/Persian material, poetry, or code-switched synthesis.

## Contents

- [Canonical, pronunciation, and provider layers](#keep-three-layers-distinct)
- [Evidence and selective diacritics](#resolve-by-evidence)
- [Izafat, names, and places](#izafat-and-compounds)
- [Numbers and acronyms](#numbers-dates-units-and-acronyms)
- [Mixed script and religious material](#roman-urdu-and-mixed-script)
- [Listening test](#listening-test)
- [Sources](#sources)

## Keep three layers distinct

1. **Canonical text:** the correct, reusable wording.
2. **Pronunciation note:** how an ambiguous item is intended to be read.
3. **Provider adaptation:** a tested spelling, lexicon entry, phoneme control, or segmentation for an exact model.

Do not corrupt canonical Urdu to accommodate one voice. Captions should remain clean even when synthesis needs a workaround.

## Resolve by evidence

Use, in order as relevant:

- sentence meaning and grammar;
- speaker, locale, and relationship;
- authoritative spelling or source edition;
- established pronunciation;
- metre, rhyme, and izafat for poetry;
- the person’s own pronunciation for names;
- current first-party provider support;
- a listening test with the exact voice.

If two readings remain possible, report them instead of guessing.

## Selective diacritics

Urdu normally omits many short-vowel marks. Add a diacritic only when it resolves a real ambiguity or a tested synthesis error:

```text
رُکو
کِس
اِس
اُس
```

Do not fully vocalize ordinary prose. Dense diacritics can look unnatural, change caption quality, or be ignored/misread by a model. Test the provider copy separately.

## Izafat and compounds

Izafat is grammatical and audible, not decoration. Preserve it when the construction requires it. In poetry it can affect metre; see [poetry and recitation](poetry-and-recitation.md).

Do not assume a provider will connect every orthographic form correctly. Try the canonical form first, then a minimally altered provider copy while retaining:

- exact canonical text;
- the intended reading;
- the workaround;
- the exact model and voice;
- the listening result.

## Names, titles, and places

Create a pronunciation ledger for recurring work:

```text
item | canonical spelling | intended reading | evidence | provider workaround | tested target
```

Do not:

- infer a name’s pronunciation solely from spelling;
- change a person’s preferred pronunciation to a more familiar one;
- drop a title to simplify synthesis;
- infer `ur-PK` or `ur-IN` from script alone.

For news and audiobooks, keep the ledger consistent across all segments.

## Numbers, dates, units, and acronyms

Decide what is intended to be heard:

- a number as a quantity, year, time, score, code, phone number, or digit sequence;
- a date in the register of the program;
- an acronym as letters or a lexicalized word;
- a unit in Urdu, English, or mixed professional speech.

The displayed form and spoken form may differ. Keep both:

```text
Caption: 2026
Spoken/provider copy: دو ہزار چھبیس
```

That adaptation is acceptable only when it preserves the value. Verify all digits after conversion.

## Roman Urdu and mixed script

Roman spelling may conceal vowel length, aspiration, retroflexion, nasalization, gender, and word boundaries. Context must precede script conversion.

For code-switched speech:

- preserve the lexical choice;
- decide whether the term is naturally Urdu-accented, locally conventional, or deliberately English;
- test how the chosen voice handles script switching;
- avoid phonetic respelling in captions;
- do not assume an English voice will carry Urdu context naturally or vice versa.

## Arabic and religious material

Established Urdu pronunciation, Arabic source pronunciation, Qur’anic recitation, and poetic metre can impose different requirements. Identify the genre.

- Preserve Qur’anic/Arabic text exactly when provided.
- Do not invent transliteration or tajwid direction.
- Keep honorifics and devotional forms.
- Seek qualified review for consequential recitation.
- Never let a TTS workaround become a claim about correct religious pronunciation.

## Listening test

Test the smallest unit that still preserves context. Isolated-word testing can hide coarticulation and phrasing errors; full-paragraph testing makes diagnosis hard.

Record:

- exact provider/model/surface/locale/voice/version;
- canonical text;
- tested provider copy;
- surrounding phrase;
- expected reading;
- observed reading;
- reviewer and date;
- accept/reject decision.

Change one variable at a time.

## Evidence boundary

Urdu orthography and the practical need for contextual disambiguation are established. Specific diacritic or respelling choices are editorial/provider hypotheses until tested with the exact target. Poetry and religious recitation require genre expertise beyond generic TTS capability claims.

## Sources

- Sarmad Hussain, “[Letter-to-sound conversion for Urdu text-to-speech](https://www.cle.org.pk/Publication/papers/2004/letter-to-sound.pdf),” Center for Language Engineering.
- Wajiha Habib et al., “[Design of speech corpus for open-domain Urdu TTS using a greedy algorithm](https://cle.org.pk/Publication/papers/2014/Design%20of%20Speech%20Corpus%20for%20Open%20Domain%20Urdu%20Text%20to%20Speech%20System%20Using%20Greedy%20Algorithm.pdf),” 2014.
- Saba Urooj, Benazir Mumtaz, and Sarmad Hussain, “[Urdu intonation](https://ojs.ub.uni-konstanz.de/jsal/index.php/jsal/article/view/129),” *Journal of South Asian Linguistics* 10, 2020.
- Frances W. Pritchett, *[Urdu Meter: A Practical Handbook](https://franpritchett.com/00ghalib/meterbk/00_index.html)*.
- Center for Language Engineering, “[Development of Urdu–English code-switched speech corpora](https://cle.org.pk/Publication/papers/2020/42.pdf),” 2020.
