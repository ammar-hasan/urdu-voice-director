# Pronunciation

Load this reference for ambiguous readings, diacritics, names, places, numbers, acronyms, Arabic/Persian material, poetry, or code-switched synthesis.

## Contents

- [Canonical, pronunciation, and provider layers](#keep-three-layers-distinct)
- [Evidence and ambiguity sweep](#resolve-by-evidence)
- [Contrastive consonants](#protect-consonant-identity)
- [Izafat, names, and places](#izafat-and-compounds)
- [Numbers and acronyms](#numbers-dates-units-and-acronyms)
- [Mixed script and religious material](#roman-urdu-and-mixed-script)
- [Listening test](#listening-test)
- [Sources](#sources)

## Keep three layers distinct

1. **Canonical text:** the correct, reusable wording.
2. **Pronunciation note:** how an ambiguous item is intended to be read.
3. **Provider pronunciation copy:** the exact text sent for synthesis, including tested diacritics, IPA, lexicon entries, or other controls.

Record every divergence as `canonical → intended reading → provider copy → target → result`. Do not corrupt canonical Urdu to accommodate one voice. Captions remain canonical even when synthesis needs a workaround.

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

## Ambiguity-first diacritics

Urdu normally omits many short-vowel marks, while TTS must still choose a reading. Before consequential synthesis, make an **ambiguity sweep** over every content word, name, number expression, Arabic/Persian construction, and recurring term. Mark every location where the unmarked written form permits another material lexical or grammatical reading that the target might select—even when human context makes the intended reading obvious. Do not rely on context alone when the same spelling can change the word, grammar, meaning, or pronunciation.

When the intended reading is established, prepare a complete **ambiguity-marked candidate copy** with the minimum sufficient diacritics at every such location, not merely the first occurrence:

```text
رُکو
کِس
اِس
اُس
کِیا   (performed/did, not the question کیا)
عِلْم  (knowledge, not عَلَم)
```

Do not use the normal absence of marks as a reason to leave a material ambiguity unaudited. Conversely, do not fully vocalize unambiguous ordinary prose merely for visual completeness. Dense marking can harm readability or be ignored by a model, so keep it out of clean captions and compare the complete candidate with the canonical baseline.

The sweep is mandatory; adopting every mark in production is not. Use the complete candidate as a controlled test condition. Promote a mark to the final provider pronunciation copy when the ambiguity is critical, the canonical baseline fails, or exact-target evidence supports it. Log a proactive untested candidate as such instead of claiming it improves the model.

If context does not establish the reading, do not let diacritization turn a guess into a fact. Keep the ambiguity unresolved or ask when it materially changes the result.

## Protect consonant identity

Urdu letters encode contrasts that vowel marks cannot create. In particular:

| Letter | Intended contrast |
|---|---|
| `ت` | dental `/t̪/` |
| `ٹ` | retroflex `/ʈ/` |
| `د` | dental `/d̪/` |
| `ڈ` | retroflex `/ɖ/` |
| `ر` | flap/trill-like Urdu `r` |
| `ڑ` | retroflex flap `/ɽ/` |

If a voice reads `ڑ` as `ر` or `ٹ` as `ت`, adding zabar/zer/pesh does not repair the consonant. Treat it as a model/voice consonant-substitution failure.

Use this escalation ladder, one variable at a time:

1. canonical word in its shortest natural phrase;
2. ambiguity-resolving diacritics if a vowel is also uncertain;
3. an exact-model pronunciation control, such as Eleven v3 inline `/IPA/` or a pronunciation dictionary, with the canonical mapping recorded;
4. another placement or a slightly larger IPA phrase if coarticulation is the problem;
5. a different voice/model if the contrast remains unstable.

For reviewer anchoring, contrast the intended word with the actual substitution when both are real Urdu forms, such as `بڑا` versus `برا` or `ٹوٹ` versus `توت`. The wrong form is a diagnostic reference, never a production candidate.

Do not invent IPA from spelling alone. Verify the intended word, vowel length, aspiration, dental/retroflex place, and surrounding phrase from linguistic evidence or a qualified speaker. Inline IPA is provider syntax and never caption text.

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
item | canonical spelling | intended reading/IPA | ambiguity or observed error | evidence | provider copy/control | tested target | result
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
- observed reading, including any consonant substitution;
- reviewer and date;
- accept/reject decision.

For a known failure, render at least the canonical baseline, the minimally diacritized candidate when relevant, and one exact-model phonetic-control candidate. Change one variable at a time. Use multiple generations for a variable model; a single lucky token is not a stable fix.

## Evidence boundary

Urdu orthography and the practical need for contextual disambiguation are established. The dental/retroflex and `ر`/`ڑ` contrasts are phonemic letter identities, not optional expressive coloring. Specific diacritics, IPA strings, dictionaries, or respellings remain editorial/provider hypotheses until tested with the exact target. Poetry and religious recitation require genre expertise beyond generic TTS capability claims.

## Sources

- Sarmad Hussain, “[Letter-to-sound conversion for Urdu text-to-speech](https://aclanthology.org/W04-1613.pdf),” *COLING 2004 Workshop on Computational Approaches to Arabic Script-based Languages*.
- Abbas Raza Ali and Sarmad Hussain, “[Automatic diacritization for Urdu](https://cle.org.pk/clt10/papers/Automatic%20Diacritization%20for%20Urdu.pdf),” *Conference on Language and Technology*, 2010.
- Gregory M. Bruce, “[Urdu Script and Pronunciation](https://urdu.la.utexas.edu/wp-content/uploads/sites/10/2023/07/Urdu-Script-and-Pronunciation-UT-Urdu-OER.pdf),” University of Texas Urdu OER.
- Wajiha Habib et al., “[Design of speech corpus for open-domain Urdu TTS using a greedy algorithm](https://cle.org.pk/Publication/papers/2014/Design%20of%20Speech%20Corpus%20for%20Open%20Domain%20Urdu%20Text%20to%20Speech%20System%20Using%20Greedy%20Algorithm.pdf),” 2014.
- Saba Urooj, Benazir Mumtaz, and Sarmad Hussain, “[Urdu intonation](https://ojs.ub.uni-konstanz.de/jsal/index.php/jsal/article/view/129),” *Journal of South Asian Linguistics* 10, 2020.
- Frances W. Pritchett, *[Urdu Meter: A Practical Handbook](https://franpritchett.com/00ghalib/meterbk/00_index.html)*.
- Center for Language Engineering, “[Development of Urdu–English code-switched speech corpora](https://cle.org.pk/Publication/papers/2020/42.pdf),” 2020.
