# Sample scene — Ammi, hospital

Sample voices: حسن=Haseeb, رابعہ=Reva

Generated with skill version: 0.3.0

References loaded: [spoken Urdu](../skills/urdu-voice-director/references/spoken-urdu.md), [relationships and register](../skills/urdu-voice-director/references/relationships-and-register.md), [conversational prosody](../skills/urdu-voice-director/references/conversational-prosody.md), [hesitation and pauses](../skills/urdu-voice-director/references/hesitation-and-pauses.md), [literary dialogue and performance modes](../skills/urdu-voice-director/references/literary-dialogue.md), [pronunciation](../skills/urdu-voice-director/references/pronunciation.md), and [provider capabilities](../skills/urdu-voice-director/references/provider-capabilities.md).

## Source

Original scene written for this showcase; the code-switching pattern is the point.

```text
حسن: Ammi کو hospital لے گئے ہیں... تمہارا فون کیوں بند تھا، رابعہ؟
رابعہ: Meeting میں تھی... wait— کیا کہا تم نے؟ Ammi hospital؟
حسن: Doctor کہہ رہے ہیں it's serious. میں... I can't handle this alone, رابعہ۔
رابعہ: ٹھیک ہے، ٹھیک ہے... I'm booking the next flight. تم بس وہیں رہو، please. میں آ رہی ہوں۔
```

## Decision

Loaded references: `spoken-urdu.md`, `relationships-and-register.md`, `conversational-prosody.md`, `hesitation-and-pauses.md`, `literary-dialogue.md`, `pronunciation.md`, and `provider-capabilities.md`.

Leave the audible words unchanged. The code-switching belongs to an established exchange between people who share `Ammi` and use familiar `تم`; it must not be translated, multiplied, or phonetically respelled in clean text. Direct the delivery by separating five source-supported functions: Hasan’s completed fact followed by a direct question; Rabia’s processing beat and abrupt `wait—` cutoff; Hasan’s hesitation before admitting he cannot manage alone; Rabia’s meaningful repetition; and her plan, instruction, and assurance as distinct beats.

## A. Clean spoken Urdu

```text
حسن: Ammi کو hospital لے گئے ہیں... تمہارا فون کیوں بند تھا، رابعہ؟
رابعہ: Meeting میں تھی... wait— کیا کہا تم نے؟ Ammi hospital؟
حسن: Doctor کہہ رہے ہیں it's serious. میں... I can't handle this alone, رابعہ۔
رابعہ: ٹھیک ہے، ٹھیک ہے... I'm booking the next flight. تم بس وہیں رہو، please. میں آ رہی ہوں۔
```

## B. Directed rehearsal script

```text
حسن: [Give the urgent fact cleanly. The proposition is complete; use the following beat to turn to the unanswered-phone question.] Ammi کو hospital لے گئے ہیں... تمہارا فون کیوں بند تھا، رابعہ؟
رابعہ: [First answer his question. Then let the new information disrupt the response: cut off “wait—” abruptly, check what was said, and echo the key words for confirmation.] Meeting میں تھی... wait— کیا کہا تم نے؟ Ammi hospital؟
حسن: [Keep the doctor’s assessment attributed. Before the English admission, make “میں...” a brief hesitation that holds the floor—not a word search or a trailing-away ending.] Doctor کہہ رہے ہیں it's serious. میں... I can't handle this alone, رابعہ۔
رابعہ: [Let the exact repetition acknowledge and steady the exchange. Then move through the immediate plan, one instruction, and the final assurance as separate actions.] ٹھیک ہے، ٹھیک ہے... I'm booking the next flight. تم بس وہیں رہو، please. میں آ رہی ہوں۔
```

## C. Portable synthesis plan

| Speaker | Canonical utterance | Delivery note | Pause / beat | Pronunciation note |
|---|---|---|---|---|
| حسن | Ammi کو hospital لے گئے ہیں... تمہارا فون کیوں بند تھا، رابعہ؟ | Controlled urgency: deliver the completed fact, then ask Rabia directly why the phone was off. | The ellipsis is a brief transition after a complete proposition, not a cutoff or word search. | Preserve `Ammi` and `hospital` exactly. Test mixed-script pronunciation with Haseeb; do not respell the caption. |
| رابعہ | Meeting میں تھی... wait— کیا کہا تم نے؟ Ammi hospital؟ | Answer first; then check the news and repeat its key terms for confirmation. | The first ellipsis is a processing beat. `wait—` ends abruptly as a cutoff before the confirmation question. | Preserve `Meeting`, `wait`, `Ammi`, and `hospital` exactly. Test the English-to-Urdu switches without changing scripts. |
| حسن | Doctor کہہ رہے ہیں it's serious. میں... I can't handle this alone, رابعہ۔ | Keep `Doctor کہہ رہے ہیں` as attribution; then admit plainly that he cannot handle this alone. | `میں...` is a brief hesitation before the admission; he retains the floor. It is neither a cutoff nor retrieval. | Preserve `Doctor`, `it's serious`, and `I can't handle this alone` exactly. Test the complete English clause in Urdu context. |
| رابعہ | ٹھیک ہے، ٹھیک ہے... I'm booking the next flight. تم بس وہیں رہو، please. میں آ رہی ہوں۔ | The repetition acknowledges and steadies; the next sentence is the plan, followed by an instruction and a definite assurance. | Keep the repetition audible. Use only light sentence boundaries between plan, instruction, and assurance; do not turn them into hesitation. | Preserve `I'm booking the next flight` and `please` exactly. Test both switches with Reva; retain clean caption spelling. |

## D. Eleven v3 adapter

Provider: ElevenLabs
Model ID: `eleven_v3`
API or product surface: Text to Speech API, Create speech endpoint (`POST /v1/text-to-speech/:voice_id`), synthesized per turn
Locale: Not set in the integration request; regional locale/accent fit remains listening-dependent
Language: Urdu inferred from input; no `language_code` field was sent in the integration request
Voice: حسن=Haseeb (`aPfeouerZvEVukwmLSP0`), رابعہ=Reva (`o85TqPN3F4P7dWae2paA`)
Documentation checked: 2026-07-31 — ElevenLabs language support, Eleven v3 prompting/best practices, model guide, and Create speech API reference
Canonical utterance: Artifact A, one canonical utterance per turn
Request fields / inline controls: `text`, `model_id: "eleven_v3"`; the selected `voice_id` is in the endpoint path and `output_format=mp3_44100_128` is in the query; concise square-bracket audio tags in `text` are exact-voice experiments
Clean caption: Artifact A, unchanged
Needs listening test: Yes — tag scope, every Urdu-English switch, the cutoff, the hesitation, and voice/locale fit

```text
Voice: حسن
[controlled urgency] Ammi کو hospital لے گئے ہیں... [after the completed fact, direct the unanswered-phone question to Rabia] تمہارا فون کیوں بند تھا، رابعہ؟
Voice: رابعہ
[answering his question before the news registers] Meeting میں تھی... wait— [cutting off the first response and checking what was heard] کیا کہا تم نے؟ [echoing the key words for confirmation] Ammi hospital؟
Voice: حسن
[reporting the doctor’s assessment plainly] Doctor کہہ رہے ہیں it's serious. [brief hesitation before the admission, not a word search] میں... I can't handle this alone, رابعہ۔
Voice: رابعہ
[acknowledging and steadying through the repetition] ٹھیک ہے، ٹھیک ہے... [committing to the immediate plan] I'm booking the next flight. [giving one clear instruction] تم بس وہیں رہو، please. [assuring him with a definite commitment] میں آ رہی ہوں۔
```

## Checks

- Meaning, the shared `Ammi` reference, familiar `تم` register, names, and every Urdu-English switch are unchanged.
- The cutoff, processing beat, hesitation, repetition, plan, instruction, and assurance are classified separately rather than rendered as generic emotion.
- Removing bracketed v3 tags from D yields the exact A words in the same حسن → رابعہ → حسن → رابعہ sequence.
- The free-form v3 cues are experimental uses of Eleven v3’s documented open-ended audio-tag mechanism; no exact cue is claimed to be prevalidated.
- Artifact D was synthesized during repository integration with Haseeb (`aPfeouerZvEVukwmLSP0`) and Reva (`o85TqPN3F4P7dWae2paA`). A native-Urdu listening pass remains required, including comparison with the tag-free baseline and placement variants.
