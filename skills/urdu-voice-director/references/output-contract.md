# Output contract

Use this contract to keep spoken text, human direction, captions, and provider syntax from contaminating one another.

## Required artifacts

### 1. Clean spoken Urdu

Canonical source of truth. Contains only words intended to be heard. Speaker labels are metadata and must be removed if a provider would read them.

### 2. Directed rehearsal script

Human-readable script with explicitly non-spoken cues. It may contain scene actions useful to an actor, but label them as rehearsal notes rather than provider tags.

### Optional performance context

For audiobook, drama, animation, game, or TTS work, include this only when the performer needs narrative orientation that must not enter the line:

```text
Context:
What has just happened and any source-established performance condition.

Canonical utterance:
The exact Urdu words intended to be heard.

Audible action:
The playable change or intention.

Do not add:
Unsupported emotional or narrative assumptions.
```

This block is non-spoken metadata. Never copy it into captions, speaker labels, or the provider text field.

### 3. Portable synthesis plan

Use this compact table for TTS tasks:

| Turn | Speaker | Clean spoken text | Delivery note (not spoken) | Pause/beat | Emphasis | Pronunciation |
|---|---|---|---|---|---|---|
| 1 | احمد | ارے... یہاں تو کوئی بھی نہیں ہے۔ | cautious observation | micro-beat after `ارے` | `کوئی بھی` lightly | — |

Omit empty columns in a short answer. This table is the stable information model; it is not a claim that a provider accepts tables.

### 4. Provider adapter

For each requested target, state:

```text
Target: provider / model / locale / voice if known
Support status: documented / preview / unsupported / unknown
Canonical utterance: exact words intended to be heard
Provider request payload: exact fields/text sent to the provider
Inline control: only documented syntax; identify whether it shares the text field
Separate instruction: only if the provider exposes a non-spoken field
Caption copy: clean spoken Urdu
Divergences: spelling, segmentation, or normalization changes
Needs listening test: concrete uncertainties
```

Do not call a tagged text block “spoken input”: a provider may consume inline controls without vocalizing them, while another may read the same characters aloud. `Canonical utterance` names the intended speech; `provider request payload` names the transport representation.

## Multiple speakers

Keep speaker identity outside spoken text unless the provider has a documented dialogue structure. Never send:

```text
احمد: ارے...
```

to a plain single-voice field if it will read “احمد” aloud. Instead provide a turn per speaker and name the voice mapping separately.

## Multiple provider outputs

Generate all requested adapters from the same clean source and portable plan. Do not refine each provider copy independently. Report capability loss:

```text
Eleven v3: inline audible direction retained.
Piper: direction external; text and segmentation retained.
XTTS-v2: no official Urdu support; adapter withheld.
```

## Machine-readable output

Do not introduce JSON by default. If a user’s actual integration requires it, use only:

```text
speaker
spoken_text
delivery_note
pause
emphasis
pronunciation_note
provider
provider_instruction
provider_markup
caption_text
```

Make optional fields optional. Do not encode literary analysis, inferred biography, or every beat as nested objects.

## Fidelity invariants

- Every caption word matches the clean source.
- Provider-only tags never appear in captions.
- Every word intended to be spoken is either in the clean source or listed as a pronunciation/normalization divergence.
- Direction never changes factual content.
- Context never becomes canonical speech.
- Provider instructions are derived from the Urdu scene interpretation, even when written in English.
- Unsupported adapters are withheld, not fabricated.
