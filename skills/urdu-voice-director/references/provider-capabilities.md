# Provider capability matrix

Status date: **2026-07-29**. Recheck official documentation before production use. “Supports Urdu” does not guarantee native accent, correct diacritics, expressive compliance, or code-switching quality for a particular voice.

## Contents

1. [Decision table](#decision-table)
2. [Commercial and hosted systems](#commercial-and-hosted-systems)
3. [Open-source and local systems](#open-source-and-local-systems)
4. [Adapter rules](#adapter-rules)

## Decision table

| Target | Official Urdu status | Direction channel | Safe skill behavior |
|---|---|---|---|
| ElevenLabs Eleven v3 | Urdu listed among 74 languages | documented inline audio tags; dialogue workflow | Generate a v3 adapter with sparse audible tags and a separate clean caption. |
| ElevenLabs Multilingual v2 / Flash v2.5 | Urdu not listed in their documented language sets | punctuation/model behavior; not v3 audio-tag contract | Do not label them Urdu-supported because the company’s v3 supports Urdu. |
| OpenAI `gpt-4o-mini-tts` family | Urdu is listed; built-in voices are optimized for English | separate `instructions` field | Keep Urdu in input and performance cues in instructions; require Urdu listening validation. |
| OpenAI `tts-1` / `tts-1-hd` | Urdu is listed through the TTS language guidance; voices are optimized for English | no instructions field | Use clean segmented text; do not inline stage tags. |
| Google Gemini-TTS | `ur-PK` listed as Preview | natural-language style prompt, single/multi-speaker | Keep spoken text and prompt separate; mark Preview and test. |
| Google Chirp 3 HD | `ur-IN` voices listed | pace; `[pause]` markup; Preview SSML in synchronous requests | Use only documented controls. Custom pronunciation is specifically unavailable for `ur-IN`. |
| Azure Speech | `ur-PK` and `ur-IN` standard voices listed | SSML structure, break, prosody; Urdu voices show no listed expressive styles/roles | Use conservative SSML; do not invent style names for Urdu voices. |
| Amazon Polly | Urdu absent from current supported-language table | SSML for supported languages | Withhold an Urdu adapter unless official support changes. |
| Piper | `ur_PK-fasih-medium` and `ur_PK-aegis_female-medium` appear in the Piper voices catalog | plain text plus global synthesis parameters; sentence silence/segmentation in runtime | Keep direction external. Do not send bracket tags. Treat each community voice as audio-unvalidated here. |
| Coqui XTTS-v2 | Urdu absent from the official 16-language list | text, voice reference, language ID; sentence splitting | Withhold a native Urdu adapter; Arabic is not Urdu. |
| Qwen3-TTS | Urdu absent from the official 10-language list | natural-language instruction on supported models/languages | Withhold Urdu adapter; do not confuse Qwen3 LLM language support with Qwen3-TTS support. |
| Chatterbox Multilingual | Urdu absent from official multilingual list | global controls; paralinguistic tags documented for English Turbo/Nano | Withhold native Urdu adapter and never apply English tag support to Multilingual Urdu. |

## Commercial and hosted systems

### ElevenLabs

Official guidance lists Urdu for Eleven v3 and documents bracketed audio tags for audible emotions, delivery, and reactions. It also warns that tags must describe sound, remain contextually supported, and not replace or rewrite the dialogue.

Adapter (voice/locale fields remain unresolved until chosen):

```text
Canonical utterance:
ارے... یہاں تو کوئی بھی نہیں ہے۔
اب امی کی چاکلیٹ کھا لیتا ہوں۔

Provider request payload (Eleven v3 text field):
[quietly] ارے...
[mischievously] اب امی کی چاکلیٹ کھا لیتا ہوں۔
```

Use tags such as `[whispers]`, `[curious]`, or `[mischievously]` only where their documented audible meaning fits. Treat exact Urdu compliance as a hypothesis until heard with the selected voice. Do not reuse v3 tags for v2/Flash automatically.

Sources: [language support](https://help.elevenlabs.io/hc/en-us/articles/13313366263441-What-languages-do-you-support), [TTS best practices](https://elevenlabs.io/docs/overview/capabilities/text-to-speech/best-practices), [product guide](https://elevenlabs.io/docs/eleven-creative/playground/text-to-speech).

### OpenAI speech

The TTS guide lists Urdu and cautions that the built-in voices are optimized for English. The speech API documents a separate `instructions` field for `gpt-4o-mini-tts` models and states that it does not work with `tts-1` or `tts-1-hd`. This is the right separation for this skill. Name the Speech API surface and resolve the available voice at use time:

```text
Canonical utterance:
یعنی اگر کوئی نہ بھی دیکھے، تب بھی اللہ دیکھ رہے ہیں؟

Separate instruction:
Speak in natural conversational Urdu for the locale established by the scene. Let the inference form before the final sincere question; keep it restrained, not dramatic.
```

Do not include the instruction in captions or the canonical utterance. Do not default to Pakistani or Indian Urdu without scene or locale evidence. A language listing does not establish natural regional accent, code-switching, or expressive reliability; test the chosen model and voice.

Sources: [text-to-speech guide](https://developers.openai.com/api/docs/guides/text-to-speech), [speech API reference](https://developers.openai.com/api/reference/resources/audio/subresources/speech/methods/create).

### Google Gemini-TTS

Official Google Cloud Text-to-Speech documentation lists Urdu (Pakistan), `ur-PK`, as Preview and describes natural-language prompting for style, accent, pace, tone, emotion, and multiple speakers. Confirm this product surface, the model, and the voice; do not reuse the request structure for another Gemini surface. Keep prompt and text separate:

```text
Text:
احمد، رُکو!

Style prompt:
Conversational delivery appropriate to the selected `ur-PK` voice; a child interrupts suddenly. Serious, not scolding.
```

Because Urdu is Preview, document the date/model/voice and run listening tests.

Source: [Gemini-TTS documentation](https://docs.cloud.google.com/text-to-speech/docs/gemini-tts).

### Google Chirp 3 HD

Official voice tables list `ur-IN` Chirp 3 HD voices. Current controls include speaking rate and markup pause tags `[pause short]`, `[pause]`, and `[pause long]`; pause duration is contextual, not exact. Current docs say custom pronunciation is unavailable for `ur-IN`. SSML support is Preview and synchronous-only; use only the listed elements for the current surface.

Adapter:

```text
Markup input:
اوہ... [pause short] یعنی جب کوئی نہ دیکھ رہا ہو، تب بھی؟
```

Do not translate a nuanced hesitation into `[pause long]` merely because it exists. Do not claim a custom Urdu pronunciation override.

Sources: [Chirp 3 HD controls](https://docs.cloud.google.com/text-to-speech/docs/chirp3-hd), [voice list](https://docs.cloud.google.com/text-to-speech/docs/list-voices-and-types).

### Azure Speech

Azure lists `ur-PK-UzmaNeural`, `ur-PK-AsadNeural`, `ur-IN-GulNeural`, and `ur-IN-SalmanNeural`. The current language table does not list expressive styles or roles for these Urdu standard voices. Azure SSML supports structural and prosodic controls generally, but pronunciation features vary by locale.

Use conservative markup:

```xml
<speak version="1.0" xml:lang="ur-PK">
  <voice name="ur-PK-UzmaNeural">
    اوہ... <break time="300ms"/> یعنی جب کوئی نہ دیکھ رہا ہو، تب بھی؟
  </voice>
</speak>
```

Keep this separate from captions. Test whether the chosen break improves or fragments the Urdu phrasing. Do not add `mstts:express-as` styles unless the Urdu voice’s current table explicitly supports them.

Sources: [language and voice support](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/language-support), [SSML overview](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/speech-synthesis-markup).

### Amazon Polly

The current supported-language table does not list Urdu. Do not create an Urdu Polly/SSML adapter merely because Polly supports SSML for other languages.

Source: [Amazon Polly supported languages](https://docs.aws.amazon.com/polly/latest/dg/supported-languages.html).

## Open-source and local systems

### Piper

The Piper voices catalog currently contains `ur_PK-fasih-medium` and `ur_PK-aegis_female-medium`. Fasih’s model card describes an Urdu male voice using eSpeak phonemization and warns that mixed Urdu-English quality may vary. The catalog is evidence that voice artifacts exist, not that this skill has validated their Urdu naturalness. Piper is primarily a text/phoneme engine with global inference controls rather than semantic inline direction.

Adapter:

```text
Utterance 1: ارے... یہاں تو کوئی بھی نہیں ہے۔
Utterance 2: اب امی کی چاکلیٹ کھا لیتا ہوں۔

External notes, not input:
- Utterance 1 cautious.
- Utterance 2 increasingly mischievous.
```

Use separate turns or audio segments for meaningful changes. Treat `length_scale`, noise, and sentence silence as broad synthesis parameters, not semantic emotions.

Sources: [Piper engine](https://github.com/OHF-Voice/piper1-gpl), [Piper voice catalog](https://huggingface.co/rhasspy/piper-voices/blob/main/voices.json), [Urdu Fasih model card](https://huggingface.co/rhasspy/piper-voices/blob/main/ur/ur_PK/fasih/medium/MODEL_CARD).

### Coqui XTTS-v2

The official model documentation lists 16 languages and does not include Urdu. Arabic support does not imply Urdu script, phonology, or naturalness. Do not emit a supposed `language="ur"` adapter.

Source: [XTTS-v2 model documentation](https://github.com/coqui-ai/TTS/blob/dev/docs/source/models/xtts.md).

### Qwen3-TTS

The official released model table lists ten languages and does not include Urdu. Some Qwen text models support Urdu, but that does not establish Qwen3-TTS Urdu support. Natural-language instruction control is documented only within the TTS model’s supported language set.

Source: [Qwen3-TTS repository](https://github.com/QwenLM/Qwen3-TTS).

### Chatterbox

The official Chatterbox Multilingual list does not include Urdu. Paralinguistic tags are documented for English Turbo/Nano, not as a general Urdu feature. Hindi and Arabic availability do not make Urdu a supported language.

Source: [Chatterbox repository](https://github.com/resemble-ai/chatterbox).

## Adapter rules

1. Name the exact target and support status.
2. Start from the clean Urdu and portable synthesis plan.
3. Emit only supported controls.
4. Withhold unsupported adapters and explain why.
5. Keep captions clean.
6. Mark Preview/beta behavior.
7. Test with the selected voice; accent and delivery depend strongly on voice data.
8. Refresh this file and `CHANGELOG.md` when provider documentation changes.
9. Record the exact model ID, product/API surface, locale, voice, verification date, and unresolved fields.
