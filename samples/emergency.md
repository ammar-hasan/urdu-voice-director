# Sample scene — Ammi, hospital

Sample voices: حسن=Haseeb, رابعہ=Reva

## Source

Original scene written for this showcase; the code-switching pattern is the point — preserved.

```text
حسن: Ammi کو hospital لے گئے ہیں... تمہارا فون کیوں بند تھا، رابعہ؟
رابعہ: Meeting میں تھی... wait— کیا کہا تم نے؟ Ammi hospital؟
حسن: Doctor کہہ رہے ہیں it's serious. میں... I can't handle this alone, رابعہ۔
رابعہ: ٹھیک ہے، ٹھیک ہے... I'm booking the next flight. تم بس وہیں رہو، please. میں آ رہی ہوں۔
```

## Scene card

- Speakers: حسن (adult son, at home) and رابعہ (his adult sister, working abroad) — siblings on a phone call; `تم`-form and direct intimacy are established and consistent throughout.
- Situation: حسن has taken Ammi to the hospital and is calling رابعہ, who was unreachable in a meeting. The scene is a notification, a shock, an admission of helplessness, and a decision to come.
- Protected: all four source turns, speaker order, exact wording, and the Urdu–English code-switching pattern (the brief states switching intensifies under stress — visible in the source itself: stress peaks in English at turns 3–4). The wording is treated as canonical: no word is changed.
- Unresolved: locale (`ur-PK` vs `ur-IN` not established), voice selection for either speaker, hospital/diagnosis details (not given — must not be invented).
- Target: ElevenLabs `eleven_v3` sample — full bundle: clean artifact, rehearsal script, portable plan, and one v3 adapter.
- Assumption (material): since the brief requires exact preservation of turns and code-switching, the source is handled as canonical and refinement is waived; all work happens in the direction layer.

## Turn audit

1. **حسن — turn 1: direction only.** Words are already natural spoken Urdu-English. Two beats, not one emotion: he delivers the fact, then the trail-off gives way to the reproach `تمہارا فون کیوں بند تھا` — hurt, not anger. Risk being averted: reading the question as an accusation.
2. **رابعہ — turn 2: direction only.** A three-beat turn: the automatic, slightly apologetic excuse (`Meeting میں تھی...`), then his first sentence lands and she cuts herself off at `wait—` (dash = abrupt cutoff, not a reflective ellipsis), then the disbelieving recheck `Ammi hospital؟`. The realization must arrive mid-turn; one flat `[shocked]` across the whole turn would flatten the arc.
3. **حسن — turn 3: direction only.** The scene's peak. He relays the doctor's words flatly (`it's serious` is him quoting a register, not editorializing), control gives way at the hesitation `میں...`, and the admission lands in plain, lowered English. Uncertainty-to-vulnerability arc; must not be pushed into crying, volume, or trembling.
4. **رابعہ — turn 4: direction only.** Self-steadying repetition (`ٹھیک ہے، ٹھیک ہے...`), then the decision snaps into English practical mode (`I'm booking the next flight`), a gentler plea (`تم بس وہیں رہو، please`), and a settled close (`میں آ رہی ہوں۔`). Her code-switch into English *is* the character taking control — direction must not flatten it into generic panic.

## A. Clean spoken Urdu

```text
حسن: Ammi کو hospital لے گئے ہیں... تمہارا فون کیوں بند تھا، رابعہ؟
رابعہ: Meeting میں تھی... wait— کیا کہا تم نے؟ Ammi hospital؟
حسن: Doctor کہہ رہے ہیں it's serious. میں... I can't handle this alone, رابعہ۔
رابعہ: ٹھیک ہے، ٹھیک ہے... I'm booking the next flight. تم بس وہیں رہو، please. میں آ رہی ہوں۔
```

## B. Directed rehearsal script

```text
حسن: [holding himself together; the fact first] Ammi کو hospital لے گئے ہیں... [hurt under the question, not accusing] تمہارا فون کیوں بند تھا، رابعہ؟

رابعہ: [automatic, a little apologetic] Meeting میں تھی... [his first sentence lands; she cuts herself off] wait— [checking she heard right] کیا کہا تم نے؟ [the disbelief tightens] Ammi hospital؟

حسن: [relaying the doctor's words, flat] Doctor کہہ رہے ہیں it's serious. [the control gives way] میں... [lower; admitting it plainly] I can't handle this alone, رابعہ۔

رابعہ: [steadying herself as much as him] ٹھیک ہے، ٹھیک ہے... [decision; shifts into practical mode] I'm booking the next flight. [gentler; the plea matters] تم بس وہیں رہو، please. [settled, certain] میں آ رہی ہوں۔
```

(Bracketed notes are non-spoken rehearsal direction, not provider tags.)

## C. Portable synthesis plan

| Turn | Speaker | Clean spoken text | Delivery note (not spoken) | Pause/beat | Emphasis | Pronunciation |
|---|---|---|---|---|---|---|
| 1 | حسن | Ammi کو hospital لے گئے ہیں... تمہارا فون کیوں بند تھا، رابعہ؟ | composed delivery of the fact, then hurt (not angry) question | open beat at `...` between fact and question | `کیوں` lightly | `Ammi`, `hospital` spoken as the family's natural English loans |
| 2 | رابعہ | Meeting میں تھی... wait— کیا کہا تم نے؟ Ammi hospital؟ | automatic excuse → self-interruption → disbelieving recheck | `...` is a trailing excuse; `—` is an abrupt cutoff; keep the two audibly different | `Ammi hospital؟` carries the shock | `Meeting`, `wait` in English; test the mid-turn language flip |
| 3 | حسن | Doctor کہہ رہے ہیں it's serious. میں... I can't handle this alone, رابعہ۔ | flat relay, then control gives way; the admission is quiet, not tearful | hesitation beat at `میں...`; the peak sits in the silence, not the volume | `alone` lightly | full English clause `I can't handle this alone` inside Urdu frame — test on the selected voice |
| 4 | رابعہ | ٹھیک ہے، ٹھیک ہے... I'm booking the next flight. تم بس وہیں رہو، please. میں آ رہی ہوں۔ | self-steadying repetition → decision in English → gentle plea → settled reassurance | settling beat at `...`; no pause before `میں آ رہی ہوں۔` | `وہیں` lightly | `please` kept inside the Urdu plea, as in source |

## D. Eleven v3 adapter

Target: ElevenLabs / `eleven_v3` / locale unresolved / voices unresolved (verified against current first-party v3 prompting docs, 2026-07-30). `Voice:` lines are routing metadata for the dialogue workflow, not spoken text; the single inline tag is a documented v3 audio tag and non-spoken; spoken words are identical to A.

```text
Voice: حسن
Ammi کو hospital لے گئے ہیں... تمہارا فون کیوں بند تھا، رابعہ؟

Voice: رابعہ
Meeting میں تھی... wait— کیا کہا تم نے؟ Ammi hospital؟

Voice: حسن
Doctor کہہ رہے ہیں it's serious. [sighs] میں... I can't handle this alone, رابعہ۔

Voice: رابعہ
ٹھیک ہے، ٹھیک ہے... I'm booking the next flight. تم بس وہیں رہو، please. میں آ رہی ہوں۔
```

Needs listening test: exact Urdu compliance of tags, mid-turn English clusters (`wait—`, `it's serious`, `I can't handle this alone`, `I'm booking the next flight`), and whether the dash cutoff survives synthesis — all voice-dependent.

## Restraint notes

- No source word was changed, added, or reordered; the wording was already natural spoken bilingual Urdu, so all four turns are "direction only" and A is byte-identical to the source.
- The emotional peak (turn 3) is carried by the source's own ellipsis, one documented tag (`[sighs]`), and a lowered plain admission — no `[crying]`, no volume cues, no trembling, no invented diagnosis, hospital name, or backstory.
- Exactly one inline v3 tag across four turns; the other turns rely on wording, punctuation, and the documented v3 behavior of ellipses. English code-switches get no `[in English]` markers — the switching itself is the characterization.
- `wait—` is kept as an abrupt cutoff (dash), audibly distinct from the reflective/trailing `...` beats elsewhere; the plan asks the listener to verify that difference survives synthesis.
- Voice and locale are marked unresolved rather than silently chosen; Urdu code-switching quality is voice-dependent and requires a native-Urdu listening pass with the actual selected voices before production.
- Speaker labels and `Voice:` lines are metadata only and never enter captions; caption copy is A verbatim.
