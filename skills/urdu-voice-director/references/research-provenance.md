# Research provenance

Last reviewed: **2026-07-29**.

Use these labels in reasoning and maintenance:

- **Established** — linguistic study, standard, or official documentation.
- **Editorial** — context-sensitive native/performance judgment used by this skill.
- **Provider-documented** — current claim for a named product/model.
- **Hypothesis** — must be tested in audio.

## Urdu orthography, boundaries, and pronunciation

- **Established:** W3C’s current [Urdu layout resources](https://www.w3.org/International/alreq/arab-ur/) describe Urdu/Arabic-script character, word-boundary, punctuation, and layout concerns.
- **Established:** The University of Cambridge article on the [Urdu Natural Language Toolkit](https://www.cambridge.org/core/journals/natural-language-engineering/article/unlt-urdu-natural-language-toolkit/66306F671F7CB1056A004F1A166E8E30) reports that Urdu sentence-boundary detection is difficult because punctuation is inconsistent and text lacks case distinctions.
- **Established:** The UMT study [Role of diacritics in understanding Urdu text](https://escholar.umt.edu.pk/items/240e8231-a58e-4c19-9fae-95810af951a9) reports ambiguity and reading benefits from diacritics for children/beginners.
- **Established, task-adjacent:** [Automatic Diacritization for Urdu](https://www.researchgate.net/publication/228953396_Automatic_Diacritization_for_Urdu) motivates recovering diacritics computationally; it does not prove that selective manual marks improve a modern TTS provider.
- **Established:** [PronouncUR](https://arxiv.org/abs/1801.00409) documents the need for Urdu grapheme-to-phoneme/pronunciation lexicons.
- **Established, recent but limited:** [Towards a More Natural Urdu](https://www.mdpi.com/2673-4591/87/1/112) identifies absent diacritics, phonetics, dialect variation, and inconsistent data as Urdu TTS challenges. Treat performance claims as study-specific.

## Speech, hesitation, and discourse

- **Established, limited corpus:** [Distribution and Acoustic Characteristics of Filled Pauses in Spontaneous Urdu Speech](https://www.mdpi.com/2226-471X/11/3/34) studies Urdu filled pauses in 18 female speakers and reports position-dependent vocalic/vocalic-nasal patterns.
- **Established, corpus study:** [Prosodic status of case and discourse markers in Urdu](https://pub.uni-bielefeld.de/download/2955023/2985296/clitics_urdu_deanonym.pdf) studies `ہی`, `تو`, and `بھی` in an Urdu speech corpus.
- **Established, specific marker:** [The discourse particle “Na”](https://www.eksplorium.com/index.php/journal/article/view/314) analyzes multiple pragmatic functions in a bounded natural-conversation dataset.
- **Editorial:** The practical glosses for `اچھا`, `ارے`, `اوہ`, `یعنی`, `بس`, and other particles synthesize native-reader judgment and performance practice. They are not one-to-one dictionary meanings and need context.

## Register, children, and culture

- **Established general structure:** Asif Agha’s Cambridge monograph [Language and Social Relations](https://assets.cambridge.org/97805215/71760/frontmatter/9780521571760_frontmatter.pdf) explicitly treats second-person deference levels and honorific-noun usage in Urdu. Urdu’s `آپ`/`تم`/`تُو` system and matching agreement encode social relations; exact usage varies by region and household.
- **Editorial:** Family, teacher, sibling, and religious-dialogue guidance is intentionally conservative and scene-specific. No single corpus consulted establishes a universal Pakistani household norm.
- **Research gap:** High-quality public corpora of contemporary, age-labeled, naturally occurring Urdu family and children’s dialogue remain limited for this purpose.

## Provider documentation

Consult [provider capabilities](provider-capabilities.md) for model-by-model sources. Provider facts are dated and must be refreshed. Official product documentation establishes available controls, not the quality of Urdu output with every voice.

## Native-reader versus TTS interpretation

- **Established inference:** Orthographic ambiguity, inconsistent sentence boundaries, and model-specific control channels give TTS less reliable access to the contextual reading a fluent human supplies.
- **Editorial:** The scene card and beat-map workflow externalize likely native interpretation.
- **Hypothesis:** A specific pause tag, diacritic, or instruction will improve a named voice. Validate by A/B listening.
- **Editorial hypothesis:** The skill’s three-condition selective-diacritic policy balances readability and disambiguation; provider-by-provider benefit remains unvalidated.

## Unresolved research questions

1. Which selective diacritics improve current Urdu TTS without harming fluency?
2. How consistently do Urdu-capable expressive models follow English versus Urdu direction prompts?
3. Which punctuation conventions best transfer across Pakistani and Indian Urdu voices?
4. How do age, region, gender, class, and bilingualism affect listener judgments of “natural” dialogue?
5. Which models preserve natural Urdu-English code-switching without accent drift?
6. Does per-beat utterance splitting improve control enough to offset prosodic discontinuity?
7. How should filled pauses be represented for polished fiction versus accessibility speech?

Treat these as evaluation questions, not settled rules.
