# TTS direction

## Separate linguistic truth from engine controls

Maintain three layers:

1. **Clean dialogue** — canonical spoken words.
2. **Direction model** — human-readable beats, pauses, emphasis, and pronunciation intent.
3. **Provider adapter** — a lossy translation of layers 1–2 into controls the selected model documents.

The adapter is disposable. Never reverse-copy its hacks into the clean source.

## Capability order

Prefer controls in this order:

1. a dedicated instruction/style field;
2. documented inline audio tags;
3. documented SSML or markup;
4. utterance segmentation and separate synthesis;
5. punctuation and spelling adjustments;
6. external audio editing, outside this skill’s scope.

Use fewer controls when the model is less expressive.

## Provider-safe rules

- Identify the provider, model, locale, and voice where known.
- Do not infer model capability from company-wide marketing.
- Do not send bracketed stage notes to a plain-text engine.
- Do not assume unsupported tags are ignored; they may be spoken.
- Do not stack emotion, pace, volume, and pause controls unless each is necessary.
- Keep the same spoken words across clean captions and provider input except documented pronunciation/normalization variants.
- Record every word-level divergence.
- Split turns where speaker, intent, or direction changes and the provider supports separate utterances.
- Expect voice selection and reference audio to affect accent and expression as much as text controls.
- Mark preview/beta features and test them.

## Portable conservative adapter

When the provider is unknown:

```text
Turn 1
Speaker: احمد
Spoken input: ارے... یہاں تو کوئی بھی نہیں ہے۔
Non-spoken direction: Quiet, cautious observation; a small beat after ارے.

Turn 2
Speaker: احمد
Spoken input: اچھا موقع ہے۔ امی کی چاکلیٹ کھا لیتا ہوں۔
Non-spoken direction: Mischief grows; do not shout.
```

This works as a handoff without risking spoken tags.

## Iteration protocol

For each provider/voice:

1. Synthesize the clean baseline.
2. Listen with a native Urdu reviewer.
3. Add one control at a time.
4. Compare pronunciation, meaning, pause function, intensity, and character.
5. Keep only changes that improve the intended reading.
6. Log provider, model, voice, date, input, control, and result.

Do not use ASR accuracy as a complete proxy for naturalness.
