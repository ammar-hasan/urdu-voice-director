# Research provenance

Last reviewed: **2026-07-29**.

Use these labels in reasoning and maintenance:

- **Established** — linguistic study, standard, or official documentation.
- **Editorial** — context-sensitive native/performance judgment used by this skill.
- **Provider-documented** — current claim for a named product/model.
- **Hypothesis** — must be tested in audio.

## Urdu literary imagination and fictional orality

- **Historically observed:** Pasha Mohamad Khan’s [A Handbook for Storytellers](https://www.openbookpublishers.com/books/10.11647/obp.0062/chapters/10.11647/obp.0062.06) treats qissa as an oral and performative genre; the Columbia World Epics account of the [Hamzanama](https://edblogs.columbia.edu/worldepics/project/hamzanama/) documents a long adaptive Indo-Persian storytelling tradition.
- **Historically observed:** Shamsur Rahman Faruqi’s [Conflict, Transition, and Hesitant Resolution: A Survey of Urdu Literature, 1850–1975](https://www.columbia.edu/itc/mealac/pritchett/00fwp/srf/srf_urdu_lit_history_1989.pdf) discusses the development of plot, characterization, local colour, and evocative power in Urdu narrative prose.
- **Historically observed:** [Intimate Relations](https://escholarship.org/uc/item/9bh8k4nw) studies social reform and the late nineteenth-century South Asian novel; household and relationship techniques derived from it remain editorial transfers, not universal family rules.
- **Historically observed:** Muhammad Umar Memon’s [Reclamation of Memory, Fall, and the Death of the Creative Self](https://doi.org/10.1017/S0020743800055082) studies remembrance in Intizar Husain’s fiction. [Remembering Violence and the Possibilities of Mourning](https://doi.org/10.1017/9781108763691.008) examines literary remembrance of Partition violence and collective loss. Neither source authorizes inferring migration, trauma, nostalgia, or myth where a given scene does not establish them.
- **Established, fictional orality:** Andreas H. Jucker’s [Features of orality in the language of fiction](https://doi.org/10.1177/09639470211047751) describes fictional dialogue as scripted language that selects markers of online planning rather than reproducing spontaneous conversation literally.
- **Editorial:** Viewpoint, source-supported concrete anchors, temporal unfolding, social syntax, implication, rhythm, memory, and silence are practical craft transfers synthesized in [Urdu literary imagination](urdu-literary-imagination.md). They are not named-author styles.

## Urdu in multilingual language models

- **Established, benchmark evidence:** [UrBLiMP](https://aclanthology.org/2026.findings-acl.29/) contains 5,696 manually checked minimal pairs across ten Urdu syntactic phenomena. Its model results vary by phenomenon and report continuing difficulty with flexible word order and long-distance subject–verb agreement. A high aggregate multilingual score therefore does not settle fine-grained Urdu grammar.
- **Established, recent preprint:** [UrduMMLU](https://arxiv.org/abs/2606.07167) uses 26,431 questions from native Urdu educational sources across 26 subjects. The reported model results are uneven, with large losses for many models on Urdu-centered humanities content. This supports target-language, culturally grounded evaluation; it does not measure literary dialogue directly.
- **Established, task-specific:** [Crossing Language Boundaries](https://aclanthology.org/2025.indonlp-1.17/) reports Urdu–English question-answering gaps and errors involving context and language boundaries. It is evidence for one QA setup, not a universal ranking of models.
- **Established, recent preprint; model-specific:** [UrduLM](https://arxiv.org/abs/2601.17664) reports that its Urdu-specific BPE tokenizer reduced tokenization overhead by 20–30% against the multilingual tokenizers it tested. This shows that tokenizer choice can matter for Urdu; it does not prove that every multilingual tokenizer is poor or that token efficiency alone determines dialogue quality.
- **Established, cross-script task evidence:** [Evaluating Large Language Models on Urdu Idiom Translation](https://arxiv.org/abs/2510.17460) reports different results for Urdu script and Roman Urdu in its idiom benchmark. [Roman Urdu as a Low-Resource Language](https://aclanthology.org/2025.lowresnlp-1.9/) documents non-standard spelling and frequent English code-switching in its retrieval setting.
- **Established, method-specific:** Google’s [Exploiting Language Relatedness for Low-Web-Resource Language Model Adaptation](https://research.google/pubs/exploiting-language-relatedness-for-low-web-resource-language-model-adaptation-an-indic-languages-study/) demonstrates related-language transfer using an explicit Hindi/transliteration method. It does **not** establish that proprietary multilingual models internally translate Urdu through Hindi or English.
- **Editorial mitigation:** The skill’s direct-Urdu discipline responds to observable risks—translated information order, flattened register, cultural substitution, cross-script ambiguity, and code-switch loss. It makes no claim about hidden proprietary reasoning.

## Urdu orthography, boundaries, and pronunciation

- **Established:** W3C’s current [Urdu layout resources](https://www.w3.org/International/alreq/arab-ur/) describe Urdu/Arabic-script character, word-boundary, punctuation, and layout concerns.
- **Established:** The University of Cambridge article on the [Urdu Natural Language Toolkit](https://www.cambridge.org/core/journals/natural-language-engineering/article/unlt-urdu-natural-language-toolkit/66306F671F7CB1056A004F1A166E8E30) reports that Urdu sentence-boundary detection is difficult because punctuation is inconsistent and text lacks case distinctions.
- **Established:** The UMT study [Role of diacritics in understanding Urdu text](https://escholar.umt.edu.pk/items/240e8231-a58e-4c19-9fae-95810af951a9) reports ambiguity and reading benefits from diacritics for children/beginners.
- **Established, task-adjacent:** [Automatic Diacritization for Urdu](https://cle.org.pk/clt10/papers/Automatic%20Diacritization%20for%20Urdu.pdf) motivates recovering diacritics computationally; it does not prove that selective manual marks improve a modern TTS provider.
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
- **Established limitation of proxy metrics:** ASR word accuracy measures content recovery, not cultural plausibility, relationship, accent, rhythm, or emotional progression. Treat it as one diagnostic rather than a naturalness verdict.

## Unresolved research questions

1. Which selective diacritics improve current Urdu TTS without harming fluency?
2. How consistently do Urdu-capable expressive models follow English versus Urdu direction prompts?
3. Which punctuation conventions best transfer across Pakistani and Indian Urdu voices?
4. How do age, region, gender, class, and bilingualism affect listener judgments of “natural” dialogue?
5. Which models preserve natural Urdu-English code-switching without accent drift?
6. Does per-beat utterance splitting improve control enough to offset prosodic discontinuity?
7. How should filled pauses be represented for polished fiction versus accessibility speech?
8. Which Urdu literary-scene judgments remain stable across Pakistani and Indian contexts, and which reflect legitimate regional, generational, or educational variation?
9. Does direct-Urdu scene recovery measurably outperform translate-and-backtranslate prompting on the contrastive benchmark?

Treat these as evaluation questions, not settled rules.
