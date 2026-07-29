# Provider contract evaluation cases

Status assumptions correspond to `references/provider-capabilities.md` dated 2026-07-29. Refresh expected results when provider documentation changes.

## Separation tests

### UVD-P01 — unknown provider

**Prompt:** Prepare Urdu dialogue for an unnamed TTS.

**Pass:** Clean text, external direction, and per-turn segmentation; no inline tags.

**Fail:** Assumes SSML or Eleven-style brackets.

### UVD-P02 — caption invariant

**Prompt:** Return provider text and captions.

**Pass:** Caption contains only canonical spoken words.

**Fail:** Caption contains `[whispers]`, XML, voice labels, or pronunciation hacks.

### UVD-P03 — speaker-label safety

**Prompt:** Two speakers, plain single-voice text fields.

**Pass:** Speaker is routing metadata; `احمد:` is not in spoken input.

**Fail:** Provider would say the speaker’s name before every turn.

### UVD-P04 — divergence log

**Prompt:** Provider requires `رُکو`, captions require ordinary `رکو`.

**Pass:** Both versions are explicit and the word-level divergence is recorded.

**Fail:** Diacritic hack silently becomes canonical text.

## ElevenLabs

### UVD-P05 — Eleven v3 Urdu

**Prompt:** Create Eleven v3 Urdu output for a cautious-to-mischievous line.

**Pass:** Sparse audible tags, clean caption copy, voice-specific test note.

**Fail:** Visual tag `[looking around]`, tag on every phrase, or no clean copy.

### UVD-P06 — Eleven model distinction

**Prompt:** Prepare the same Urdu for Eleven Multilingual v2.

**Pass:** Notes Urdu is not in the documented v2 language list and withholds unsupported v3-tag assumptions.

**Fail:** Claims company-wide Urdu/tag support.

### UVD-P07 — tag fidelity

**Prompt:** Original has no laugh; adapt to Eleven v3.

**Pass:** Does not add `[laughs]`.

**Fail:** Adds reactions for expressiveness.

## Instruction-steered providers

### UVD-P08 — OpenAI capable model

**Prompt:** Adapt Urdu for `gpt-4o-mini-tts`.

**Pass:** Spoken Urdu in input, concise delivery in separate instructions, listening caveat.

**Fail:** Instruction text inserted into spoken input.

### UVD-P09 — OpenAI legacy model

**Prompt:** Adapt Urdu for `tts-1`.

**Pass:** Does not claim the separate instructions field works; uses clean/segmented input.

**Fail:** Supplies unsupported instruction control as guaranteed.

### UVD-P10 — Gemini Urdu Preview

**Prompt:** Adapt for Google Gemini-TTS `ur-PK`.

**Pass:** Separate style prompt, Preview label, clean captions, listening test.

**Fail:** Claims GA or guaranteed compliance.

## Markup/SSML providers

### UVD-P11 — Chirp pause

**Prompt:** Use a brief reflective pause with Chirp 3 `ur-IN`.

**Pass:** Uses documented pause markup conservatively and says duration is contextual.

**Fail:** Claims exact milliseconds from `[pause short]`.

### UVD-P12 — Chirp pronunciation

**Prompt:** Force custom pronunciation for `ur-IN`.

**Pass:** Notes current docs exclude `ur-IN` custom pronunciation and proposes clean alternatives/test.

**Fail:** Invents an IPA override.

### UVD-P13 — Azure Urdu style

**Prompt:** Make `ur-PK-UzmaNeural` “cheerful” with an expressive style.

**Pass:** States no Urdu style is listed; uses wording/general prosody only if documented and tests.

**Fail:** Invents an `express-as` style.

### UVD-P14 — Azure SSML captions

**Prompt:** Return Azure SSML and captions.

**Pass:** XML only in provider artifact; caption is clean Urdu.

**Fail:** XML leaks into caption.

### UVD-P15 — Amazon Polly

**Prompt:** Make an Urdu Polly payload.

**Pass:** Withholds it because official Urdu support is absent and returns portable clean assets.

**Fail:** Uses an Arabic or Hindi voice as Urdu without warning.

## Local/open-source

### UVD-P16 — Piper Urdu

**Prompt:** Adapt for Piper `ur_PK-fasih-medium`.

**Pass:** Clean utterances and external notes; optional broad settings described as hypotheses.

**Fail:** Sends `[mischievously]` inline.

### UVD-P17 — Piper code-switching

**Prompt:** Urdu dialogue contains `Minecraft`.

**Pass:** Flags model-card warning about mixed-language quality and proposes A/B spelling tests.

**Fail:** Guarantees correct English pronunciation.

### UVD-P18 — XTTS-v2

**Prompt:** Produce Coqui XTTS-v2 Urdu format.

**Pass:** Notes Urdu absent from official list and withholds native adapter.

**Fail:** Uses `language="ar"` or invented `ur`.

### UVD-P19 — Qwen confusion

**Prompt:** “Qwen3 supports Urdu, so make Qwen3-TTS Urdu instructions.”

**Pass:** Distinguishes Qwen3 text-model coverage from Qwen3-TTS’s official ten languages.

**Fail:** Transfers language support across model families.

### UVD-P20 — Chatterbox tag leakage

**Prompt:** Chatterbox Multilingual Urdu with `[laugh]`.

**Pass:** Notes Urdu is absent and paralinguistic tags are documented for English Turbo/Nano.

**Fail:** Assumes the tag works in unsupported multilingual Urdu.

## Multi-provider

### UVD-P21 — common source

**Prompt:** Generate Eleven v3, Gemini-TTS, Azure, and Piper variants.

**Pass:** All derive from one clean source/beat plan; capability loss is explicit.

**Fail:** Dialogue wording drifts independently across providers.

### UVD-P22 — unsupported target in batch

**Prompt:** Include Eleven v3, Piper, and XTTS-v2.

**Pass:** Produces the first two safely and withholds XTTS-v2 without blocking the whole task.

**Fail:** Fabricates XTTS support or refuses every output.

### UVD-P23 — no vendor wall

**Prompt:** User names only Eleven v3.

**Pass:** Returns only relevant clean/directed/Eleven artifacts.

**Fail:** Dumps every provider adapter.

### UVD-P24 — provider update

**Prompt:** Official docs now contradict the matrix.

**Pass:** Treats current official docs as authoritative, updates dated reference and changelog before relying on the change.

**Fail:** Defends stale bundled data as timeless.

### UVD-P25 — canonical versus payload

**Prompt:** Produce Eleven v3 text using `[whispers]`.

**Pass:** Labels the Urdu words as the canonical utterance and the tagged block as the provider request payload/inline control.

**Fail:** Calls the whole tagged block “spoken input” or allows it into captions.

### UVD-P26 — exact target fields

**Prompt:** “Prepare this for OpenAI TTS,” with no model, surface, locale, or voice supplied.

**Pass:** Resolves from available workflow context or marks model/API surface/locale/voice `unresolved`; does not pretend a generic company-level adapter is exact.

**Fail:** Invents a voice, locale, or request schema.

### UVD-P27 — Gemini surface distinction

**Prompt:** “Use Gemini TTS,” without saying Google Cloud Text-to-Speech or another Gemini API surface.

**Pass:** Distinguishes the surfaces, asks only if required to form the payload, or provides a surface-neutral portable plan with the target unresolved.

**Fail:** Treats all Gemini request formats as interchangeable.

### UVD-P28 — locale non-assumption

**Prompt:** Urdu dialogue has no regional context; provider offers `ur-PK` and `ur-IN`.

**Pass:** Keeps the locale unresolved or asks when the choice materially changes synthesis.

**Fail:** Defaults to one locale from the language alone.

### UVD-P29 — live verification

**Prompt:** Produce a production adapter from a six-month-old provider snapshot.

**Pass:** Rechecks current first-party documentation for the exact model/surface before relying on controls and records the verification date.

**Fail:** Treats the bundled matrix as timeless.

### UVD-P30 — Urdu-derived instruction

**Prompt:** Create an English-language provider instruction for an Urdu line whose intention changes from face-saving to sincere admission.

**Pass:** The instruction preserves the Urdu beat progression and relationship without replacing them with one generic emotion.

**Fail:** Starts from an English rewrite, labels the whole line “sad,” or changes the canonical Urdu.

### UVD-P31 — narrative context isolation

**Prompt:** A provider accepts a non-spoken instruction field. Supply context, canonical utterance, and caption.

**Pass:** Narrative context and `Do not add` constraints stay in the separate field; input/caption contain only intended words.

**Fail:** Context, visible action, or internal thought enters the utterance or caption.

### UVD-P32 — exact-surface lifecycle

**Prompt:** A provider’s company page advertises Urdu, but the requested model is deprecated, Preview, or lacks Urdu in its exact model list.

**Pass:** Reports the exact lifecycle/support state, withholds unsupported controls, and offers portable output.

**Fail:** Treats company marketing as exact production support or hides Preview/deprecation status.
