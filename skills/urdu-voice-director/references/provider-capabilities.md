# Provider Capabilities

Load this reference only for TTS or a synthesis-ready adapter. Recheck current first-party documentation for the exact target at use time: provider capabilities change faster than this skill.

Capability review date: **2026-08-01**

## Contents

- [Adapter contract and target declaration](#contract-before-controls)
- [Capability matrix](#current-capability-matrix)
- [Eleven v3 detailed and mid-utterance tags](#elevenlabs-eleven-v3)
- [Eleven v3 pronunciation controls](#eleven-v3-pronunciation)
- [OpenAI speech](#openai-speech)
- [Google Cloud](#google-cloud)
- [Azure and local targets](#azure)
- [Audio loop and review](#one-variable-audio-loop)
- [First-party sources](#first-party-sources)

## Contract before controls

Keep these records distinct:

- **canonical utterance:** exact words intended to be heard;
- **clean caption:** same words, normal readable spelling;
- **non-spoken direction:** intention, focus, pause function, and pronunciation notes;
- **provider request:** exact fields and supported inline controls for one target;
- **listening result:** what the selected voice actually did.

Do not assume brackets, SSML, Markdown, punctuation, blank lines, or control words are silent. If provider, model, surface, locale, or voice is unknown, mark it `unresolved` and keep direction out of the utterance.

## Minimum target declaration

```text
Provider:
Model ID:
API or product surface:
Language code sent or omitted:
Locale/accent target:
Voice:
Voice settings / stability:
Seed:
Text-normalization setting:
Pronunciation dictionary IDs/versions:
Output format:
Documentation checked:
Canonical utterance:
Request fields / inline controls:
Clean caption:
Needs listening test:
```

Support on one model or endpoint does not transfer to another product from the same company.

## Current capability matrix

| Target | Urdu status | Direction path | Important boundary |
|---|---|---|---|
| ElevenLabs Eleven v3 (`eleven_v3`) | Urdu is listed for v3 | open-ended audio tags; inline `/IPA/`; pronunciation dictionaries on supported TTS surfaces | Tags and IPA are different controls; IPA and exact voice response remain probabilistic |
| OpenAI `gpt-4o-mini-tts` speech API | Urdu is listed | separate `instructions` field | built-in voices are optimized for English; actual Urdu quality needs listening |
| OpenAI `tts-1`, `tts-1-hd` | guide lists multilingual text support | speed and voice; no `instructions` support | do not send instruction text as speech |
| Google Gemini-TTS | `ur-PK` is Preview | natural-language style prompt | model is Preview; verify exact current model ID and voice |
| Google Chirp 3 HD | `ur-IN` is listed | documented pause/pace controls; limited SSML | custom pronunciation does not currently include `ur-IN`; pause syntax is model-specific |
| Azure Speech | `ur-PK` and `ur-IN` neural voices listed | standard SSML/speech controls | current Urdu rows show no speaking styles or roles |
| Amazon Polly | Urdu not listed | withhold Urdu adapter | do not infer support from adjacent languages |
| Piper | Urdu voice artifacts exist in current catalog | engine/voice-specific local synthesis | artifact availability does not establish pronunciation or naturalness |
| XTTS-v2 | Urdu not in official 16-language list | withhold “supported Urdu” claim | cloning a voice does not add official language support |
| Qwen3-TTS | Urdu not in official language list | withhold “supported Urdu” claim | do not treat broad multilingual branding as Urdu support |
| Chatterbox | Urdu not in current official V3 language list | withhold “supported Urdu” claim | English paralinguistic tags do not prove Urdu behavior |

## ElevenLabs Eleven v3

First-party pages currently list Urdu for Eleven v3 and document audio tags for delivery, emotion, reactions, timing, sound, and other performance behavior. Documented examples include forms such as `[whispers]`, `[shouts]`, `[sighs]`, `[laughs]`, `[clears throat]`, `[curious]`, and `[mischievously]`. The prompting guide explicitly says the examples are not exhaustive and encourages experimentation with descriptive emotional states and actions. Its examples also use freer cues such as `[dramatically]`, `[impressed]`, `[with genuine belly laugh]`, `[delighted]`, `[amazed]`, and `[warmly]`.

Therefore do not reduce v3 direction to a tiny fixed allowlist. A source-supported rehearsal cue may become a concise bracketed v3 cue even when that exact phrase is not in the examples:

```text
Rehearsal: the correction is measured; make “اب” the new point
v3 cue: [measured correction, focusing “اب”]
```

This is a use of the documented open-ended tag mechanism, not evidence that the exact phrase has a stable predefined behavior. Keep the fuller rehearsal note outside provider text and mark the adapter cue as an exact-voice experiment.

Use tags sparingly:

- tags are not clean text;
- a tag may affect more than the next word;
- voice choice, stability, context length, and training samples affect compliance;
- a reaction tag can add audible non-lexical content;
- generic emotional tags can invent an interpretation;
- one concise audible action is usually more controllable than a long bundle of abstract adjectives;
- a freely described tag is experimental even though the open-ended tag mechanism itself is documented.

Detailed tags are valuable when they carry information that punctuation and wording do not. Translate the relevant rehearsal beat rather than discarding its detail. Do not tag every line, repeat the full scene analysis inside brackets, or include visible-only action.

### Placement and mid-utterance tags

V3 guidance permits tags before or after the affected dialogue segment and at a natural pause. Tags are not limited to the start of a turn. When the audible action changes inside one turn, place a new cue at that beat:

```text
[controlled explanation] میں نے خط بھیجا تھا۔ [the correction becomes direct] جواب تم نے نہیں دیا۔
```

Use placement deliberately:

- at the start when one action genuinely governs the whole turn;
- mid-utterance immediately before the phrase whose delivery changes;
- after a completed phrase when the tag represents a reaction or transition and that audible event is source-supported;
- more than once in a turn when distinct beats require distinct delivery.

Do not split a word, compound predicate, izafat connection, or poetic qafiya–radif unit to insert a tag. Do not use a single turn-initial emotion to flatten a multi-beat turn. Exact scope is voice- and context-dependent: a mid-utterance tag may influence words on either side, so compare placement variants and the tag-free baseline.

For poetry, metre and qafiya/radif are not v3 controls. Emotion tags do not validate scansion.

### Eleven v3 pronunciation

ElevenLabs now documents native inline IPA for `eleven_v3` across its supported languages. Put standard IPA between forward slashes directly in the provider `text`:

```text
Canonical/caption: ٹوٹ
Provider pronunciation copy: /ʈuːʈ/
```

The canonical-to-IPA mapping must remain in the pronunciation ledger because the provider payload no longer contains the canonical spelling at that locus. Inline IPA is not an audio tag, clean Urdu, or caption text.

Inline IPA **replaces** the canonical spelling at that locus in the provider pronunciation copy. Never send the spelling followed by its IPA, such as `ٹوٹ /ʈuːʈ/`; that can duplicate or destabilize the spoken token. The canonical spelling remains in the source, caption, and mapping ledger.

The provider reports roughly 80–90% consistency for v3 IPA and explicitly recommends selective use, exact-voice testing, and multiple generations when consistency matters. Treat that percentage as the provider’s own current claim, not Urdu-specific validation.

The Text to Speech API also accepts `pronunciation_dictionary_locators`. Current first-party guidance says non-English IPA/CMU dictionary rules require `eleven_v3`. Record dictionary ID, version ID, grapheme, phoneme/alias rule, language tag, exact voice, and result. A dictionary is preferable for a recurring verified word; inline IPA is useful for a local test or phrase-sensitive correction.

Record the exact Eleven v3 runtime controls that were sent or deliberately omitted: `voice_settings` and stability, `seed`, `language_code`, text-normalization behavior, dictionary locators, and output format. A known Urdu language code and a regional accent/locale are different decisions. Historical runs that omitted `language_code` remain valid provenance; they do not establish omission as a preferred policy. Change one runtime variable at a time when diagnosing a pronunciation or delivery failure.

Treat a production adapter as incomplete until provider, model, API/product surface, locale or accent target, voice, language code, voice settings, seed, normalization behavior, dictionary locators, and output format are each recorded as sent, deliberately omitted, or unresolved.

For `ڑ`→`ر`, `ٹ`→`ت`, `ڈ`→`د`, lost aspiration, or another consonant substitution:

1. confirm the correct Urdu and IPA from evidence;
2. test the shortest natural phrase without a control;
3. add vowel diacritics only if a vowel reading is also ambiguous;
4. test inline IPA or a dictionary rule;
5. change the voice/model if the segment remains unstable.

Do not use an emotion tag, capitalization trick, or extra punctuation as if it were a verified consonant control. Do not claim that zabar/zer/pesh can turn a dental consonant into a retroflex one.

## OpenAI speech

The current speech guide lists Urdu among supported input languages and exposes a separate `instructions` field for `gpt-4o-mini-tts`. The guide describes instruction dimensions such as accent, emotional range, intonation, speed, tone, and whispering. The speech API reference says `instructions` do not work with `tts-1` or `tts-1-hd`.

Keep Urdu in `input` and direction in `instructions`. Do not put an English direction into the spoken text. Record the selected voice; the guide notes that built-in voices are optimized for English.

## Google Cloud

Gemini-TTS currently lists `ur-PK` as Preview and accepts natural-language style instructions. Check the exact Preview model because names and availability can change.

Chirp 3 HD currently lists Urdu for India (`ur-IN`). Its pause and pace controls, and supported SSML subset, belong to Chirp 3 HD rather than all Google voices. Documentation currently excludes `ur-IN` from custom-pronunciation availability. If Pakistan Urdu or a pronunciation lexicon is required, do not silently substitute.

## Azure

The current language table lists:

- `ur-PK-UzmaNeural`
- `ur-PK-AsadNeural`
- `ur-IN-GulNeural`
- `ur-IN-SalmanNeural`

The same table currently shows no style/role support for these Urdu voices. Standard SSML support still needs an exact endpoint/voice check. Do not invent expressive style names from English voices.

## Local and unsupported targets

Piper’s current catalog contains Urdu (`ur_PK`) voices. Treat every artifact as a candidate requiring native listening, license review, and engine-version recording.

The official XTTS-v2, Qwen3-TTS, and Chatterbox language lists currently omit Urdu. A user may still ask for an experiment; label it unsupported/experimental rather than presenting a provider adapter as documented Urdu capability.

Amazon Polly’s official supported-language table currently omits Urdu. Withhold an Urdu adapter.

## One-variable audio loop

1. Render canonical text with the selected voice and no optional control.
2. Identify one concrete failure.
3. Apply one documented control, one concise open-ended v3 cue, one ambiguity-resolving provider diacritic, or one verified IPA/dictionary rule.
4. Compare blind with the clean-text baseline.
5. Record exact target metadata and reviewer result.
6. Keep the change only if it improves the intended feature without harming meaning, relationship, pronunciation, or captions.

Do not interpret a successful English demo as evidence of Urdu compliance.

## Provider adapter review

Reject the adapter if:

- canonical and caption words differ;
- inline markup leaks into clean text;
- a model, locale, or voice was silently chosen;
- a control comes from another model;
- an exact free-form phrase is presented as prevalidated rather than an experiment through v3’s documented open-ended tag mechanism;
- a listening-dependent outcome is stated as guaranteed;
- a known consonant substitution is treated as a vowel-diacritic problem;
- inline IPA or a dictionary override lacks a canonical mapping and exact target record;
- unsupported Urdu is presented as official support;
- a poetry tag is treated as metre control.

## First-party sources

- ElevenLabs, “[What languages do you support?](https://elevenlabs.io/docs/help-center/other/what-languages-do-you-support),” “[Text to Speech best practices and Eleven v3 prompting](https://elevenlabs.io/docs/overview/capabilities/text-to-speech/best-practices#prompting-eleven-v3),” “[Using pronunciation dictionaries](https://elevenlabs.io/docs/eleven-api/guides/how-to/text-to-speech/pronunciation-dictionaries),” and “[How do audio tags work with Eleven v3?](https://help.elevenlabs.io/hc/en-us/articles/35869142561297-How-do-audio-tags-work-with-Eleven-v3).”
- OpenAI, “[Text to speech](https://developers.openai.com/api/docs/guides/text-to-speech)” and “[Create speech](https://developers.openai.com/api/reference/resources/audio/subresources/speech/methods/create).”
- Google Cloud, “[Gemini-TTS](https://docs.cloud.google.com/text-to-speech/docs/gemini-tts),” “[Chirp 3 HD](https://docs.cloud.google.com/text-to-speech/docs/chirp3-hd),” and “[voices and language support](https://docs.cloud.google.com/text-to-speech/docs/list-voices-and-types).”
- Microsoft Azure, “[Language and voice support for Speech](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/language-support?tabs=tts).”
- Amazon Web Services, “[Languages supported by Amazon Polly](https://docs.aws.amazon.com/polly/latest/dg/supported-languages.html).”
- Piper, “[current voice catalog](https://huggingface.co/rhasspy/piper-voices/blob/main/voices.json)” and “[OHF-voice/piper1-gpl](https://github.com/OHF-voice/piper1-gpl).”
- Coqui, “[XTTS-v2 documentation](https://github.com/coqui-ai/TTS/blob/dev/docs/source/models/xtts.md).”
- Qwen, “[Qwen3-TTS](https://github.com/QwenLM/Qwen3-TTS).”
- Resemble AI, “[Chatterbox](https://github.com/resemble-ai/chatterbox).”
