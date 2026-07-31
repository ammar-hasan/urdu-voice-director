# Sample scene — Ammi, hospital

Sample voices: حسن=Haseeb, رابعہ=Reva

Generated with skill version: 0.3.0

References loaded: [spoken Urdu](../skills/urdu-voice-director/references/spoken-urdu.md), [relationships and register](../skills/urdu-voice-director/references/relationships-and-register.md), [hesitation and pauses](../skills/urdu-voice-director/references/hesitation-and-pauses.md), [pronunciation](../skills/urdu-voice-director/references/pronunciation.md), and [provider capabilities](../skills/urdu-voice-director/references/provider-capabilities.md).

## Source

Original scene written for this showcase; the code-switching pattern is the point.

```text
حسن: Ammi کو hospital لے گئے ہیں... تمہارا فون کیوں بند تھا، رابعہ؟
رابعہ: Meeting میں تھی... wait— کیا کہا تم نے؟ Ammi hospital؟
حسن: Doctor کہہ رہے ہیں it's serious. میں... I can't handle this alone, رابعہ۔
رابعہ: ٹھیک ہے، ٹھیک ہے... I'm booking the next flight. تم بس وہیں رہو، please. میں آ رہی ہوں۔
```

## Decision

- Mode: everyday sibling conversation during an emergency.
- Protected: every Urdu–English switch, `Ammi`, intimate `تم`, hospital report, missed phone, meeting, doctor’s assessment, Hassan’s request for help, and Rabia’s next-flight plan.
- No refinement: the switches and fragments already map the changing information. Translating or “cleaning” the English would erase character and setting.
- `wait—` is a cutoff/realization, `میں...` is a hesitation, and `ٹھیک ہے، ٹھیک ہے` is functional repetition; they are not interchangeable pauses.

## A. Clean spoken Urdu

```text
حسن: Ammi کو hospital لے گئے ہیں... تمہارا فون کیوں بند تھا، رابعہ؟
رابعہ: Meeting میں تھی... wait— کیا کہا تم نے؟ Ammi hospital؟
حسن: Doctor کہہ رہے ہیں it's serious. میں... I can't handle this alone, رابعہ۔
رابعہ: ٹھیک ہے، ٹھیک ہے... I'm booking the next flight. تم بس وہیں رہو، please. میں آ رہی ہوں۔
```

## B. Directed rehearsal script

Bracketed cues are non-spoken.

```text
حسن: [deliver the hospital fact before the question; keep the code-switch ordinary] Ammi کو hospital لے گئے ہیں... تمہارا فون کیوں بند تھا، رابعہ؟
رابعہ: [answer first; “wait—” cuts that thought off as the news registers] Meeting میں تھی... wait— کیا کہا تم نے؟ Ammi hospital؟
حسن: [report the doctor’s words; then the hesitation opens into the direct admission] Doctor کہہ رہے ہیں it's serious. میں... I can't handle this alone, رابعہ۔
رابعہ: [repeat to organize herself, make the plan, then give the final assurance] ٹھیک ہے، ٹھیک ہے... I'm booking the next flight. تم بس وہیں رہو، please. میں آ رہی ہوں۔
```

## C. Portable synthesis plan

| Speaker | Canonical utterance | Non-spoken delivery note | Pause/focus |
|---|---|---|---|
| حسن | Ammi کو hospital لے گئے ہیں... تمہارا فون کیوں بند تھا، رابعہ؟ | fact → question | source ellipsis is a thought boundary |
| رابعہ | Meeting میں تھی... wait— کیا کہا تم نے؟ Ammi hospital؟ | answer interrupted by the new information | preserve cutoff at `wait—` |
| حسن | Doctor کہہ رہے ہیں it's serious. میں... I can't handle this alone, رابعہ۔ | report → hesitation → admission | preserve `میں...` |
| رابعہ | ٹھیک ہے، ٹھیک ہے... I'm booking the next flight. تم بس وہیں رہو، please. میں آ رہی ہوں۔ | self-organization → plan → instruction → assurance | light focus on final `میں آ رہی ہوں` |

Pronunciation note: test English terms in their original script with both selected voices. Do not respell them in the caption unless an exact-voice test proves a separate provider copy is necessary.

## D. Eleven v3 adapter

Target: ElevenLabs Text to Speech API / model `eleven_v3` / mixed Urdu–English input / showcase voices routed per speaker above. Documentation checked 2026-07-31. V3’s open-ended tags carry the distinct rehearsal actions; the source’s cutoff and hesitation remain punctuation because they are different events. English pronunciation and exact tag response require listening.

```text
Voice: حسن
[urgent but controlled, delivering the fact before the question] Ammi کو hospital لے گئے ہیں... تمہارا فون کیوں بند تھا، رابعہ؟
Voice: رابعہ
[the news interrupts the answer] Meeting میں تھی... wait— کیا کہا تم نے؟ Ammi hospital؟
Voice: حسن
[reporting the doctor, then hesitating before the admission] Doctor کہہ رہے ہیں it's serious. میں... I can't handle this alone, رابعہ۔
Voice: رابعہ
[organizing herself quickly, then making a plan] ٹھیک ہے، ٹھیک ہے... I'm booking the next flight. تم بس وہیں رہو، please. [short pause, reassuring] میں آ رہی ہوں۔
```

## Checks

- Artifact A is source-identical; all switches, turns, facts, kinship language, and `تم` remain in place.
- Removing the documented provider tag from D yields artifact A word for word.
- Detailed cues carry urgency, interruption, hesitation, planning, and reassurance already expressed by the words; no panic or reaction sound is added.
- Listening test: English pronunciation, the `wait—` cutoff, and whether the final pause clarifies rather than slows the response.
