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

- Speakers: حسن (adult brother, at home) and رابعہ (adult sister, working abroad), on a phone call; `تم` both ways — intimate adult-sibling register, kinship term `Ammi` shared.
- Situation established by the source: Ammi has been taken to hospital; doctors say it is serious; رابعہ's phone was off because she was in a meeting; she will book the next flight and come; حسن is to stay where he is. Nothing beyond this may be invented (no illness, no timeline, no third parties).
- Protected: all four turns, exact wording, the `تم` register, and every code-switch point — including the stress-intensified full-English switches (`wait—`, `I can't handle this alone`, `I'm booking the next flight`). The scene is canonical: no word changes.
- Unresolved: locale (`ur-PK`/`ur-IN`), voice identities, what the illness is, who else is present.
- What changes during the moment: shock-flat news + reproach → mid-sentence realization → vulnerable admission → calm decision. The emotional peak is turn 3's admission.
- Output target: ElevenLabs `eleven_v3` sample; Urdu is documented among v3's languages; inline audio tags re-verified against first-party docs (2026-07-31).

## Turn audit

1. **Turn 1 (حسن) — Direction only.** Words are natural, canonical, protected. Misreading risk: panic or shouting. Beat map: `finally reaches her after dialing → delivers the fact flat → source ellipsis lets it land → the held-back reproach surfaces as hurt, not accusation`. Emphasis falls on `بند`.
2. **Turn 2 (رابعہ) — Direction only.** Misreading risk: full panic from the first word, or the cutoff smoothed into a trail-off. Beat map: `still in work mode, explains automatically → her own words catch up → abrupt cutoff (source `—`, not an ellipsis) → disbelief check → quieter realization as she names the fact back`. This is the scene's realization arc.
3. **Turn 3 (حسن) — Direction only.** Misreading risk: melodrama (sobbing); the source marks only one hesitation. Beat map: `relays the doctor's words with forced steadiness → "it's serious" costs him → reluctance beat (`میں...`) → the full-English admission, lowered — the peak, carried by breath and pacing`. Emphasis falls on `alone`.
4. **Turn 4 (رابعہ) — Direction only.** Misreading risk: flat delivery of a decision arc, or saccharine soothing. Beat map: `steadying repetition calms him and herself → decision made, switching fully into English → gentle directive in Urdu → firm, warm promise`. Uncertainty-to-decision arc: confidence only arrives at the final clause, so no whole-turn "calm" tag.

## A. Clean spoken Urdu

```text
حسن: Ammi کو hospital لے گئے ہیں... تمہارا فون کیوں بند تھا، رابعہ؟
رابعہ: Meeting میں تھی... wait— کیا کہا تم نے؟ Ammi hospital؟
حسن: Doctor کہہ رہے ہیں it's serious. میں... I can't handle this alone, رابعہ۔
رابعہ: ٹھیک ہے، ٹھیک ہے... I'm booking the next flight. تم بس وہیں رہو، please. میں آ رہی ہوں۔
```

## B. Directed rehearsal script

```text
حسن: [weary; has been trying her phone; flat with shock, not shouting] Ammi کو hospital لے گئے ہیں... [let the fact land; then the held-back reproach surfaces — hurt, not accusation] تمہارا فون کیوں بند تھا، رابعہ؟
رابعہ: [still in work mode, explaining automatically] Meeting میں تھی... [the words catch up with her; abrupt cutoff] wait— [disbelief, checking she heard right] کیا کہا تم نے؟ [quieter; the fact settling in] Ammi hospital؟
حسن: [relaying the doctor's words, trying to stay steady] Doctor کہہ رہے ہیں it's serious. [reluctant beat; the admission costs him — voice lowers, does not break into sobbing] میں... I can't handle this alone, رابعہ۔
رابعہ: [steadying him and herself; calm repetition] ٹھیک ہے، ٹھیک ہے... [decision made; takes charge] I'm booking the next flight. [gentle directive] تم بس وہیں رہو، please. [firm, warm promise] میں آ رہی ہوں۔
```

(All bracketed notes are non-spoken rehearsal direction.)

## C. Portable synthesis plan

| Turn | Speaker | Clean spoken text | Non-spoken delivery note | Pause/beat | Emphasis | Pronunciation note |
|---|---|---|---|---|---|---|
| 1 | حسن | Ammi کو hospital لے گئے ہیں... تمہارا فون کیوں بند تھا، رابعہ؟ | weary, shock-flat fact; reproach as hurt | conversational beat at `...` before the reproach | `بند` | `hospital` is an English token — test the switch with the selected voice |
| 2 | رابعہ | Meeting میں تھی... wait— کیا کہا تم نے؟ Ammi hospital؟ | automatic explanation → cutoff → disbelief check → quiet realization | hesitation at first `...`; abrupt cutoff at `—` (not a trail-off) | `hospital` on the repeat | `Meeting`, `wait`, `hospital` — test switching; dash must stay a cutoff |
| 3 | حسن | Doctor کہہ رہے ہیں it's serious. میں... I can't handle this alone, رابعہ۔ | forced steadiness, then lowered reluctant admission | reluctance beat at `میں...`; no added pauses | `alone` | full English clause mid-turn — test accent/prosody switch |
| 4 | رابعہ | ٹھیک ہے، ٹھیک ہے... I'm booking the next flight. تم بس وہیں رہو، please. میں آ رہی ہوں۔ | calming repetition → decision → gentle directive → firm warm promise | settling beat at `...` after the repetition | `بس`; firmness on `آ رہی ہوں` | `booking the next flight`, `please` — test switching |

## D. Eleven v3 adapter

```text
Voice: حسن
[sighs] Ammi کو hospital لے گئے ہیں... تمہارا فون کیوں بند تھا، رابعہ؟

Voice: رابعہ
Meeting میں تھی... wait— [appalled] کیا کہا تم نے؟ Ammi hospital؟

Voice: حسن
Doctor کہہ رہے ہیں it's serious. [gulps] میں... I can't handle this alone, رابعہ۔

Voice: رابعہ
ٹھیک ہے، ٹھیک ہے... I'm booking the next flight. تم بس وہیں رہو، please. [warmly] میں آ رہی ہوں۔
```

## Restraint notes

- Canonical source: zero word changes; every English token and every switch point preserved exactly, including the stress-intensified full-English clauses. No facts, motives, diagnosis, or backstory added.
- Every turn carries exactly one tag, placed at the beat it changes; nothing stacked. All four tags — `[sighs]`, `[appalled]`, `[gulps]`, `[warmly]` — appear in ElevenLabs' first-party eleven_v3 documentation (core tag lists, the documented Enhance prompt vocabulary, and the official multi-speaker example), re-verified 2026-07-31.
- The peak (turn 3) is carried by a breath tag, the source's own ellipsis, and pacing — no `[crying]`, no sobbing, no invented grief. Reproach (turn 1) is weary hurt, not shouting; no `[angry]`, no `[shouts]`.
- Pauses ride the source's documented v3 punctuation behavior (`...` for weight, `—` for the cutoff); v3 does not support SSML `<break>` and none was used. No tag duplicates what the punctuation already does.
- `Voice:` lines are routing metadata for the dialogue workflow and must never enter the spoken text field; caption copy is artifact A, word-identical and tag-free.
- Unresolved: voice selection and locale. Urdu tag compliance, the `—` cutoff, and Urdu↔English switching quality are hypotheses until heard with the actual selected voice — run a native-listener test on turns 2 and 3 especially.
