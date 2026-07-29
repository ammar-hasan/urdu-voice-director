# Provider-separated output

This example shows one linguistic source adapted without letting provider controls become the canonical script.

## Original

```text
زoya: مجھے یقین نہیں ہے کہ وہ آئے گا۔
بلال: تم نے اسے فون کیا؟
زoya: نہیں، میں سوچ رہی تھی کہ شاید وہ خود فون کرے۔
```

Normalize the mixed name spelling as `زویا` unless it is an official stylization the user wants preserved.

## Problems found

- Zoya’s uncertainty is stated formally.
- Bilal’s question is already natural.
- The final line can carry a brief hesitation before Zoya explains her expectation. Disappointment is only one possible reading and is not established by the text.

## A. Clean spoken Urdu

```text
زویا: پتا نہیں، وہ آئے گا بھی یا نہیں۔
بلال: تم نے اسے فون کیا؟
زویا: نہیں... میں نے سوچا، شاید وہ خود ہی فون کر لے۔
```

## B. Directed rehearsal script

```text
زویا: [trying to sound casual; genuinely uncertain] پتا نہیں، وہ آئے گا بھی یا نہیں۔
بلال: تم نے اسے فون کیا؟
زویا: [small hesitation before explaining] نہیں... میں نے سوچا، شاید وہ خود ہی فون کر لے۔
```

## C. Portable synthesis plan

| Turn | Speaker | Spoken text | Non-spoken direction | Beat |
|---|---|---|---|---|
| 1 | زویا | پتا نہیں، وہ آئے گا بھی یا نہیں۔ | casual surface, real uncertainty | light stress on `بھی یا نہیں` |
| 2 | بلال | تم نے اسے فون کیا؟ | plain practical question | no added pause |
| 3 | زویا | نہیں... میں نے سوچا، شاید وہ خود ہی فون کر لے۔ | hesitation before explaining her expectation | short open beat after `نہیں` |

## D1. Eleven v3 adapter

Target: ElevenLabs / Eleven v3 / locale not exposed as a separate field in this example / voice unresolved.

Status: Urdu documented for Eleven v3; current first-party controls and the selected voice still require verification before use.

```text
Voice: Zoya
[uncertain] پتا نہیں، وہ آئے گا بھی یا نہیں۔

Voice: Bilal
تم نے اسے فون کیا؟

Voice: Zoya
[hesitates] نہیں... میں نے سوچا، شاید وہ خود ہی فون کر لے۔
```

`Voice:` labels describe routing and must not be included in the text field unless the dialogue product treats them as metadata.

## D2. OpenAI instruction-steered adapter

Target: OpenAI / `gpt-4o-mini-tts` / Speech API `audio/speech` surface / locale unresolved / voice unresolved.

```text
Canonical utterance, turn 1:
پتا نہیں، وہ آئے گا بھی یا نہیں۔

Separate instruction:
Natural conversational Urdu. She tries to sound casual, but uncertainty remains audible. Keep it restrained. Do not impose a regional accent unless the scene specifies one.

Canonical utterance, turn 3:
نہیں... میں نے سوچا، شاید وہ خود ہی فون کر لے۔

Separate instruction:
Begin with a brief hesitant beat after “نہیں,” then explain the expectation plainly. Do not add sadness or disappointment unless the scene establishes it.
```

The cited API supports separate instructions for instruction-capable speech models. Verify the current model surface and available voice before building the payload; Urdu performance needs an actual listening test.

## D3. Google Gemini-TTS adapter

Target: Google Cloud Text-to-Speech / Gemini-TTS / `ur-PK` Preview / model and voice unresolved.

```text
Text:
پتا نہیں، وہ آئے گا بھی یا نہیں۔

Style prompt:
Quiet conversational delivery in the requested Urdu locale. Casual surface with genuine uncertainty underneath; restrained, not dramatic.
```

Confirm whether the workflow is Google Cloud Text-to-Speech or another Gemini surface; their request structures are not interchangeable. Mark `ur-PK` as Preview and record the selected model/voice/date in the evaluation log.

## D4. Azure `ur-PK` conservative SSML

```xml
<speak version="1.0" xml:lang="ur-PK">
  <voice name="ur-PK-UzmaNeural">
    نہیں... <break time="250ms"/> میں نے سوچا، شاید وہ خود ہی فون کر لے۔
  </voice>
</speak>
```

This encodes timing, not “disappointment.” Do not invent an Urdu expressive style. Compare against the clean baseline; the ellipsis plus break may over-pause and one may need removal.

## D5. Piper Urdu adapter

```text
Utterance 1: پتا نہیں، وہ آئے گا بھی یا نہیں۔
Utterance 2: نہیں... میں نے سوچا، شاید وہ خود ہی فون کر لے۔
```

External notes:

- Keep turn 1 uncertain but conversational.
- Use a short pause after `نہیں` in turn 2.
- Piper does not receive these notes as bracketed text.

## D6. Unsupported adapters

Do not generate native Urdu payloads for XTTS-v2, Qwen3-TTS, Chatterbox Multilingual, or Amazon Polly under their documented 2026-07-29 language sets. Return the clean/portable artifacts and state that official Urdu support was not found.

## Clean caption copy

```text
پتا نہیں، وہ آئے گا بھی یا نہیں۔
تم نے اسے فون کیا؟
نہیں... میں نے سوچا، شاید وہ خود ہی فون کر لے۔
```

No tags, XML, voice labels, Markdown, or pronunciation hacks appear here.

## Emotional progression

Uncertainty is covered with casual phrasing → Bilal asks a direct practical question → Zoya hesitates before explaining that she expected him to call.

## Restraint and alternatives

- Do not add “he does not care about me”; that subtext is plausible but unstated.
- Do not mark sadness or disappointment unless context outside these lines supports that interpretation.
- If the user chooses the “hiding disappointment” reading, state that assumption and keep the neutral version as an alternative.
- The best provider adapter may be the clean baseline if controls cause overacting.
