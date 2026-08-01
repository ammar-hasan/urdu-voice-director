# Urdu Voice Director 0.4 release assessment

Research and provider review date: **2026-08-01**

## Executive decision

Version 0.2.0 had valuable knowledge but asked every run to carry too much of it. Its 239-line `SKILL.md` mixed the core contract, editorial workflow, output schema, provider policy, literary craft, evidence labels, examples, and maintenance rules. That encouraged uniform treatment and made task-relevant depth harder to find.

Version 0.3.0 reduced the core to 72 lines and moved the depth into nine flat, cited references. Version 0.4.0 remains compact at 81 lines while adding pronunciation-risk and performance-axis routing. The model opens only the smallest relevant set. No nested sub-skills or routing framework was added.

The non-negotiable contract remains:

- preserve meaning and dramatic function;
- preserve relationship, age, register, titles, religious wording, and code-switching;
- invent no fact, motive, memory, or emotion;
- leave a good line unchanged;
- keep clean words separate from direction and provider syntax;
- verify the exact provider/model/surface/locale/voice before using controls.

## Why performance modes must differ

The previous skill was strongest on fictional dialogue. That is not enough for the range of Urdu speech.

| Mode | Governing question |
|---|---|
| Everyday conversation | Does response structure, relationship, thought grouping, repair, and switching sound credible? |
| Fictional dialogue | Does source-supported subtext become playable without turning narration or invented psychology into speech? |
| Drama/dubbing | Are objective, stakes, timing, synchrony, and authorized emotional range playable without new psychology? |
| Audiobook narration | Are narrator, character speech, viewpoint, and embedded text distinct and consistent? |
| Documentary/explainer | Are evidence, uncertainty, terminology, argument, and listener orientation clear without a generic authority voice? |
| Animation/game character | Is authorized vocal size consistent with the character bible while dialogue, efforts, and tags remain separate? |
| News reading | Are attribution, uncertainty, names, figures, and informational grouping intact? |
| Public speech | Do audience address, argument, contrast, and rhetoric work without manufactured intensity or applause? |
| Religious/devotional speech | Are wording, honorifics, theology, pronunciation, reverence, and genre boundaries exact? |
| Poetry recitation | Do metre, syllable length, izafat, rhyme, refrain, syntax, and pause sites survive? |
| Mushaira performance | Does public anticipation remain separate from the canonical poem and respect the same poetic constraints? |

This stratification is also an evaluation decision: a revision that improves dramatic dialogue can still damage news, devotional prose, or poetry.

Form is now separated from two production axes. **Restrained**, **grounded**, and **heightened** describe delivery range; **naturalistic** and **stylized** describe treatment. Stylization is not intensity and may be quiet, restrained, or deadpan. Grounded-naturalistic is the comparison baseline, but it is not emotionally neutral. Affect traceable to the words, dramatic function, interaction, attribution, context, or brief can be made audible; a non-unique reading remains a performance option. No range or treatment can manufacture motives, memories, laughs, sobs, screams, or other events.

## Conversational prosody: useful tendencies, not laws

Research on Urdu intonation supports cautious working hypotheses:

- statements often fall;
- many wh-questions also fall;
- yes/no questions commonly rise;
- contrastive/corrective focus can use wider pitch movement and longer duration;
- post-focus material may become less prominent;
- syntax, focus position, word order, speaker, and data type affect the realization.

The controlled description in [Urooj, Mumtaz, and Hussain](https://ojs.ub.uni-konstanz.de/jsal/index.php/jsal/article/view/129) and spontaneous telephone-speech analysis in [Rognoni et al.](https://aclanthology.org/2020.lrec-1.788/) support the broad sentence-type tendencies. Focus studies by [Jabeen and Braun](https://www.isca-archive.org/speechprosody_2018/jabeen18_speechprosody.pdf) and [Jabeen, Braun, and Butt](https://www.isca-archive.org/speechprosody_2016/jabeen16_speechprosody.html) show duration/pitch effects while also reporting configuration-dependent results. [Jabeen’s individual-differences study](https://doi.org/10.3390/languages7020103) is a direct warning against turning a group tendency into a universal contour.

The skill therefore uses research to choose listening hypotheses, not to encode punctuation as pitch. A question mark does not prescribe one melody. A comma, dash, ellipsis, or line break does not reliably specify silence length or performance function.

## Pauses, cutoffs, searches, and fillers

A boundary pause, deliberate rhetorical beat, hesitation, word search, self-repair, cutoff, interruption, trailing away, and filled pause are not interchangeable.

[Zahid, Lee, and Mahmood](https://doi.org/10.3390/languages11030034) report that vocalic filled pauses dominate in their spontaneous Urdu sample and occur frequently turn-medially. Their corpus contains 18 female speakers, so the result informs a category distinction rather than a universal spelling, rate, or demographic rule.

The practical consequence is conservative: diagnose what happens, preserve source disfluency, and add none merely as emotion decoration.

## Urdu poetry needs Urdu prosody

General voice direction cannot determine a valid reading of a ghazal or nazm. Quantitative metre requires the pronounced syllable sequence, not English stress or typography.

[Frances Pritchett’s practical handbook](https://franpritchett.com/00ghalib/meterbk/00_index.html) explains short/long syllables, metrical patterns, pronunciation-led scansion, special rules, and the movement “from eye to ear.” It also shows how metre can expose an izafat or reading that bare orthography leaves ambiguous. The 0.4 poetry reference operationalizes that evidence without pretending one page can replace training in `عروض`.

Poetry direction now checks:

- `بحر` and `وزن`;
- short and long syllables;
- authoritative text and metrical variants;
- izafat;
- qafiya and radif as performed sound;
- ambiguous pronunciation;
- syntax and word connection;
- lawful pause sites;
- chosen performance mode.

The difference between quiet reading and public recitation is not “less versus more dramatic.” [Regula Burckhardt Qureshi’s study of tarannum](https://franpritchett.com/00urduhindilinks/txt_qureshi_tarannum_1969.pdf) documents a continuum from speech-oriented recitation to melodic chanting. [Petievich and Stille](https://doi.org/10.1177/0019464616683481) examine the public protocols and emotional event of poetry and preaching. A mushaira can involve anticipation, repetition, and audience response, but those event layers never become silent additions to the canonical poem.

The existing Ghalib sample, last generated under 0.3.0, names the metre, qafiya/radif, izafat and pronunciation questions, lawful line-boundary pauses, `تحت اللفظ` mode, and a quiet-reading alternative before it creates a provider adapter. Version 0.4.0 strengthens the governing reference but does not claim a newly generated or native-validated clip.

## Literature and designed speech

Urdu prose and oral traditions support scene, viewpoint, social syntax, memory, implication, repetition, and silence, but do not license a universal ornate style. Historical and literary context comes from work including [Shamsur Rahman Faruqi’s survey](https://www.columbia.edu/itc/mealac/pritchett/00fwp/srf/srf_urdu_lit_history_1989.pdf), [Pritchett’s study of Urdu poetry and criticism](https://publishing.cdlib.org/ucpressebooks/view?docId=ft10000326), and [Pasha M. Khan on romance/dastan](https://www.openbookpublishers.com/books/10.11647/obp.0062/chapters/10.11647/obp.0062.06).

[Jucker’s fictional-orality study](https://doi.org/10.1177/09639470211047751) supports the distinction between designed dialogue and a literal transcript. This validates selective particles, fragments, repetition, and repair—but not generic particle insertion or invented stammers.

Every transfer from literary research remains subordinate to source fidelity. Named-author imitation, automatic Persianisation, scenic invention, and hidden backstory are explicitly rejected.

## Urdu speech and TTS research

Urdu pronunciation, code-switching, and corpus design require context rather than naïve transliteration.

- [Hussain’s Urdu letter-to-sound work](https://aclanthology.org/W04-1613.pdf) maps distinct consonantal characters to phonemes; dental/retroflex contrasts and `ر/ڑ` are therefore segment identities, not vowel-mark choices.
- [Abbas Raza Ali and Sarmad Hussain](https://cle.org.pk/clt10/papers/Automatic%20Diacritization%20for%20Urdu.pdf) explain that Urdu normally leaves many vowels unwritten and that computational speech requires contextual recovery. This supports an ambiguity sweep and a complete minimally marked test candidate, not indiscriminate full vocalization or an untested production guarantee.
- [Habib et al.](https://cle.org.pk/Publication/papers/2014/Design%20of%20Speech%20Corpus%20for%20Open%20Domain%20Urdu%20Text%20to%20Speech%20System%20Using%20Greedy%20Algorithm.pdf) address phonetic/prosodic coverage in Urdu TTS corpus design.
- The [Center for Language Engineering code-switched corpus work](https://cle.org.pk/Publication/papers/2020/42.pdf) documents natural Urdu–English switching across speech settings.
- [UrduSpeech](https://arxiv.org/abs/2605.17846) proposes a 156-hour, multi-genre Urdu corpus and a benchmark split spanning news, drama, and bait-bazi. It is a useful 2026 preprint for genre coverage, not peer-reviewed proof that this skill’s modes or benchmark are valid.

The skill preserves canonical text, a pronunciation note, and any provider workaround as separate records. A workaround for one voice cannot redefine correct Urdu.

## Provider review

Provider facts are centralized in the dated [capability reference](../skills/urdu-voice-director/references/provider-capabilities.md) and linked to first-party pages.

As of the review date:

- Eleven v3 lists Urdu and documents an open-ended audio-tag mechanism. Its examples are non-exhaustive and its guidance permits mid-utterance placement. Current best practices also document inline `/IPA/` for v3 and report roughly 80–90% consistency, while the TTS API supports pronunciation-dictionary locators. Delivery tags and pronunciation controls are separate, exact-voice experiments. A reproducible run records sent or omitted `language_code`, locale/accent target, voice settings, stability, seed, normalization, dictionary IDs/versions, and output format. [Eleven v3 prompting and TTS best practices](https://elevenlabs.io/docs/overview/capabilities/text-to-speech/best-practices#prompting-eleven-v3), [pronunciation dictionaries](https://elevenlabs.io/docs/eleven-api/guides/how-to/text-to-speech/pronunciation-dictionaries), [language support](https://elevenlabs.io/docs/help-center/other/what-languages-do-you-support).
- OpenAI’s speech guide lists Urdu and gives `gpt-4o-mini-tts` a separate instruction channel; the API reference says that channel does not work with `tts-1` or `tts-1-hd`. The guide also says built-in voices are optimized for English. [Guide](https://developers.openai.com/api/docs/guides/text-to-speech), [API reference](https://developers.openai.com/api/reference/resources/audio/subresources/speech/methods/create).
- Gemini-TTS lists `ur-PK` as Preview; Chirp 3 HD lists `ur-IN` with model-specific controls and no current custom-pronunciation support for that locale. [Gemini-TTS](https://docs.cloud.google.com/text-to-speech/docs/gemini-tts), [Chirp 3 HD](https://docs.cloud.google.com/text-to-speech/docs/chirp3-hd).
- Azure lists four `ur-PK`/`ur-IN` neural voices but no style/role support for those rows. [Azure language support](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/language-support?tabs=tts).
- Amazon Polly’s current table omits Urdu. [Polly languages](https://docs.aws.amazon.com/polly/latest/dg/supported-languages.html).
- Piper’s current catalog contains Urdu voice artifacts; official XTTS-v2, Qwen3-TTS, and Chatterbox lists omit Urdu. Artifact existence is not evidence of naturalness. [Piper](https://huggingface.co/rhasspy/piper-voices/blob/main/voices.json), [XTTS-v2](https://github.com/coqui-ai/TTS/blob/dev/docs/source/models/xtts.md), [Qwen3-TTS](https://github.com/QwenLM/Qwen3-TTS), [Chatterbox](https://github.com/resemble-ai/chatterbox).

No provider page proves correct Urdu prosody, code-switching, poetic metre, cultural delivery, or pronunciation for a selected voice. Those remain audio evaluations.

## Evaluation mechanism

Version 0.3.0 added executable checks; version 0.4.0 extends them for pronunciation risk, independent production axes, evidence completeness, and release consistency.

`scripts/validate-skill.mjs` checks:

- the exact nine-reference topology;
- the 110-line ceiling and required core contract;
- all local Markdown links;
- a source section and URL in every reference;
- all eleven forms, three delivery ranges, two treatments, and same-source controlled pairs in the benchmark;
- release metadata across package files, skill version, README, changelog, assessment, website, benchmark, and results ledger;
- sample provenance;
- clean-text contamination;
- turn/speaker equivalence;
- exact canonical-word equivalence between clean A and tag-stripped provider D;
- machine-readable benchmark coverage.

`scripts/benchmark.mjs` validates the 26-case/eleven-form/three-range/two-treatment suite, prepares deterministic blinded A/B packets and a separate private mapping file, and scores reviewer files back to baseline/candidate labels. Packet and frozen-run provenance hashes bind the public packet to its key, while the A/B mapping is recomputed from the private seed. The scorer rejects mismatched hashes, altered packets, stale mappings, incomplete dimensions, duplicate reviewer rows, malformed hard gates, and release coverage below two distinct reviewers per case. Reports retain raw evidence, hard-failure and preference rates, means, medians, disagreement, controlled-pair rows, and worst regressions. Per-range and per-treatment summaries are descriptive; same-source controlled pairs are the appropriate place to inspect axis changes.

The evaluation reference adds:

- hard gates that fluent output cannot average away;
- twelve text-scored dimensions, including consonant-risk handling and written performance-direction fit; realized consonants and audible delivery remain listening measures;
- mode-specific review;
- exact run metadata;
- at least two native reviewers for consequential releases;
- audio baselines and one-control-at-a-time comparison;
- mode-level results rather than one aggregate number;
- a failure → regression case → narrow reference change → full rerun loop.

The existing prose text/provider/regression suites remain useful coverage, but specifications are not executed evidence. The [results manifest](../skills/urdu-voice-director/evals/results-manifest.md) distinguishes structural checks, model comparison, native text review, generated audio, and native listening.

## Release truth

Version 0.4.0 can claim a short selectively loaded architecture, cited research, executable structural/fidelity and release validation, a stricter machine-readable blind benchmark workflow, independent range/treatment modeling, and refreshed exact-target provider guidance.

Its new pronunciation, runtime, and performance-axis work is specification and mechanism work. It does not prove that diacritics, IPA, a dictionary, another voice, a wider delivery range, or stylized treatment improves any existing sample. The seven MP3s remain 0.3.0 artifacts and were not regenerated for 0.4.0.

It cannot yet claim:

- that a target model follows the revised skill better;
- that native reviewers prefer its Urdu;
- that the Ghalib audio preserves metre and pronunciation;
- that a detailed Eleven v3 cue improves every selected voice;
- that one register represents all Urdu communities.

Those claims require the recorded benchmark and native listening runs that the new mechanism was built to support.
