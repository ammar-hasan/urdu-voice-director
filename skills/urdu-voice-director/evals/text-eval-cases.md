# Text evaluation cases

Run these as blind forward tasks. Give the evaluator the skill and only the case prompt. Score with `references/evaluation.md`; do not require exact wording where several natural solutions exist.

## Core refinement

### UVD-T01 — no-change discipline

**Prompt:** Improve this natural line for speech: `امی، میں ابھی آیا۔`

**Pass:** May preserve it unchanged and explain that no direction is needed.

**Fail:** Adds particles, ellipses, or emotion merely to show work.

### UVD-T02 — written to spoken

**Prompt:** `چونکہ آپ نے مجھے مطلع نہیں کیا، اس لیے میں بروقت نہیں پہنچ سکا۔` Speaker is respectfully addressing a colleague.

**Pass:** Natural respectful Urdu; meaning and `آپ` agreement preserved.

**Fail:** Slang, accusation, or ceremonial prose.

### UVD-T03 — particle preservation

**Prompt:** `اچھا... تو تم پہلے سے جانتے تھے؟`

**Pass:** Recognizes that `اچھا` and `تو` mark realization/contrast.

**Fail:** Deletes them as filler without cause.

### UVD-T04 — no particle confetti

**Prompt:** `آپ بیٹھیں، میں پانی لاتا ہوں۔`

**Pass:** Keeps a simple hospitable line.

**Fail:** Adds `ارے`, `اچھا`, `بھئی`, and `بس`.

### UVD-T05 — incomplete sentence

**Prompt:** `میں تو بس—` The speaker is interrupted.

**Pass:** Preserves cutoff and distinguishes it from hesitation.

**Fail:** Completes the sentence or changes `—` to a reflective pause.

### UVD-T06 — semantic fidelity

**Prompt:** `میں نے خط نہیں بھیجا۔`

**Pass:** Does not invent why, apologize, or change `خط` to `میسج`.

**Fail:** Adds a motive for dramatic depth.

## Relationships and register

### UVD-T07 — honorific agreement

**Prompt:** `آپ کہاں جا رہے ہو؟`

**Pass:** Corrects the agreement to `آپ کہاں جا رہے ہیں؟` unless dialect context says otherwise.

**Fail:** Retains mismatch or changes to `تم` without permission.

### UVD-T08 — household convention

**Prompt:** A mother and eight-year-old consistently use `آپ` with each other. Refine `آپ نے میرا رنگ والا ڈبہ دیکھا ہے؟`

**Pass:** Preserves household `آپ`.

**Fail:** “Naturalizes” it to `تم`.

### UVD-T09 — risky `تُو`

**Prompt:** Close adult friends use `تم`. Original: `تم آج بہت چپ ہو۔`

**Pass:** Keeps `تم`.

**Fail:** Introduces `تُو` to sound intimate.

### UVD-T10 — respectful naturalness

**Prompt:** Student to teacher: `محترم استاد، کیا آپ اس سوال کی وضاحت فرمانا پسند کریں گے؟`

**Pass:** Respectful but conversational request with coherent title/register.

**Fail:** Peer slang or unchanged stiffness.

## Children and education

### UVD-T11 — adult child

**Prompt:** A seven-year-old says: `میں اس اخلاقی پیچیدگی کے مضمرات سمجھنے سے قاصر ہوں۔`

**Pass:** Concrete, short, age-plausible question preserving confusion.

**Fail:** Baby talk or retained academic abstraction.

### UVD-T12 — gradual understanding

**Prompt:** A child is caught lying, first defensive, then realizes the harm.

**Pass:** Shows defensiveness → processing → question/admission.

**Fail:** Immediate polished moral speech.

### UVD-T13 — teacher restraint

**Prompt:** Teacher gently tells a student it is okay to ask when confused.

**Pass:** One or two natural lines.

**Fail:** Motivational sermon.

### UVD-T14 — not overly cute

**Prompt:** A ten-year-old is excited about a science model.

**Pass:** Age-appropriate excitement without baby voice or repeated exclamation.

**Fail:** Diminutives and cuteness unsupported by context.

## Emotion and subtext

### UVD-T15 — suppressed anger

**Prompt:** `ہاں، تم ہر بار یہی کہتے ہو۔` The speaker is angry but controlling it.

**Pass:** Direction conveys restraint; no forced shout.

**Fail:** `[shouting furiously]`.

### UVD-T16 — embarrassment

**Prompt:** `میں نہیں ڈرا تھا۔ بس... مجھے وہاں جانا نہیں تھا۔`

**Pass:** Preserves face-saving and hesitation.

**Fail:** Labels the whole line sad or rewrites it as a confession.

### UVD-T17 — sarcasm ambiguity

**Prompt:** `واہ، بہت اچھا کیا۔` No context.

**Pass:** Asks sincere-versus-sarcastic because it materially changes delivery, or supplies explicitly labeled alternatives if the task permits.

**Fail:** Assumes one as fact without flagging.

### UVD-T18 — changing intention

**Prompt:** `اوہ... یعنی تم سچ کہہ رہے تھے؟`

**Pass:** Maps realization → processing → sincere or newly cautious question.

**Fail:** Applies one `[surprised]` tag to everything without considering the shift.

### UVD-T19 — whispering

**Prompt:** Two children are hiding and must not be heard: `آہستہ بولو، وہ سن لے گا۔`

**Pass:** Audible whisper/urgency cue; wording stays short.

**Fail:** Adds fear trembling or visual-only direction as a provider tag.

### UVD-T20 — interruption

**Prompt:** `لیکن میں—` / second speaker: `نہیں، پہلے میری بات سنو۔`

**Pass:** Preserves cutoff and immediate takeover.

**Fail:** Converts to two reflective ellipses.

## Religion and culture

### UVD-T21 — gentle religious correction

**Prompt:** One child reminds another that Allah sees them even when people do not.

**Pass:** Simple, warm, serious, and non-preachy; `اللہ تعالیٰ` handled naturally.

**Fail:** Anger, theatrical reverence, or new doctrine.

### UVD-T22 — ordinary expression

**Prompt:** `ان شاء اللہ، کل ملتے ہیں۔`

**Pass:** Keeps ordinary warmth; no grand direction.

**Fail:** `[with profound sacred awe]`.

### UVD-T23 — cultural non-universality

**Prompt:** Urdu-speaking non-Muslim family scene with no religious content.

**Pass:** Does not inject Islamic expressions as generic “Urdu flavor.”

**Fail:** Adds `ان شاء اللہ` or `ما شاء اللہ` without context.

## Roman Urdu and code-switching

### UVD-T24 — Roman Urdu

**Prompt:** `acha ap kal office aa rhy hain?`

**Pass:** `اچھا، آپ کل دفتر آ رہے ہیں؟` or context-appropriate `آفس`; honorific agreement fixed.

**Fail:** Letter-by-letter transliteration or `آپ ... ہو`.

### UVD-T25 — temporal ambiguity

**Prompt:** `kal woh aya tha` / convert to Urdu.

**Pass:** Context fixes `کل وہ آیا تھا۔` without pretending `kal` alone distinguishes yesterday/tomorrow; notes that past verb resolves it.

**Fail:** Changes tense or asks an unnecessary question.

### UVD-T26 — motivated code-switch

**Prompt:** Pakistani software team: `Build fail ہو گئی، logs دیکھو۔`

**Pass:** Preserves plausible technical terms and natural agreement.

**Fail:** Forces obscure Urdu translations.

### UVD-T27 — unnecessary English

**Prompt:** Rural family scene: `امی، میں water لے آؤں؟`

**Pass:** Uses `پانی` unless character context supports the switch.

**Fail:** Adds more English to sound modern.

### UVD-T28 — product name

**Prompt:** Explain how to turn on `Dark Mode` in an English-language app, in Urdu.

**Pass:** Keeps visible UI label recognizable and separates caption typography from spoken input.

**Fail:** Sends Markdown backticks to TTS or translates the label so users cannot find it.

## Output behavior

### UVD-T29 — clean and directed separation

**Prompt:** Prepare a two-line Urdu exchange for TTS with direction.

**Pass:** Returns clean words and a separately labeled directed form.

**Fail:** Only returns tagged text.

### UVD-T30 — non-TTS user

**Prompt:** “I only want better spoken Urdu; I am not generating audio.”

**Pass:** Returns clean refinement without provider machinery.

**Fail:** Forces vendor adapters or technical tables.

### UVD-T31 — strict fidelity

**Prompt:** “Do not add or remove any spoken words; only direct performance.”

**Pass:** Spoken words are byte-for-byte preserved; direction stays separate.

**Fail:** Linguistic refinement despite the constraint.

### UVD-T32 — literary depth without narration

**Prompt:** Add restraint and subtext to a tense Urdu exchange, no narration.

**Pass:** Uses rhythm, silence, and concise direction.

**Fail:** Adds `اس نے دل ہی دل میں سوچا...`.

## Fidelity edge cases

### UVD-T33 — unknown gender morphology

**Prompt:** Gender is unspecified: `آپ نے پہلے بتایا نہیں، اس لیے میں وقت پر نہیں پہنچ سکا/سکی۔` Make it natural without asking.

**Pass:** Recasts neutrally, for example `آپ نے پہلے بتایا ہی نہیں تھا۔ وقت پر پہنچنا کیسے ممکن تھا؟`, or preserves an explicit placeholder.

**Fail:** Silently chooses masculine or feminine agreement.

### UVD-T34 — full-turn code-switch preservation

**Prompt:** Refine: `عمر: Did you submit the assignment? حسن: نہیں، website کام نہیں کر رہی تھی۔ عمر: You should email the teacher.`

**Pass:** Preserves the full English turns by default while naturalizing only genuinely stiff wording; an Urdu-dominant localization is separately labeled and optional.

**Fail:** Treats full-turn switching as an error or infers `سر`/`میڈم`.

### UVD-T35 — religious-form fidelity

**Prompt:** A scene uses `اللہ تعالیٰ` in one speaker’s line and `اللہ` in another. Refine for speech without changing meaning.

**Pass:** Retains each speaker’s form unless the user requests harmonization.

**Fail:** Adds or removes honorific language everywhere for consistency.

### UVD-T36 — no new dialogue turns

**Prompt:** Refine a two-turn parent/child exchange. The user did not ask for expansion.

**Pass:** Returns two turns; any suggested longer exchange is labeled an optional authorial adaptation.

**Fail:** Adds diagnostic questions, admissions, solutions, or a lesson to improve dramatic flow.

### UVD-T37 — central scene fidelity

**Prompt:** Refine the Ahmed/Fatima chocolate scene in `examples/gentle-correction.md`.

**Pass:** Keeps all seven source turns and source honorific choices; repairs `دیکھ رہے ہوتے ہیں` contextually; carries mischief, interruption, defense, realization, and warmth through direction.

**Fail:** Adds `اچھا موقع ہے`, `آہستہ بولو`, `اوہ`, `جی ہاں`, a theft accusation, or a concluding sermon to the canonical refinement.

## Literary scene recovery and oral transfer

### UVD-T38 — unsupported scenery

**Prompt:** Add literary life to: `علی: وہ آج نہیں آئے۔` No setting or weather is given.

**Pass:** Improves only source-supported rhythm or direction, or leaves the line unchanged.

**Fail:** Adds rain, a doorway, an empty chair, evening light, or another atmospheric object.

### UVD-T39 — concrete anchor already present

**Prompt:** `یہ چابی اب بھی اسی دروازے میں لگتی ہے؟ دروازہ تو بدل گیا۔ چابی میں نے رکھ لی۔` The speakers revisit a former family home.

**Pass:** Recognizes the key and changed door as sufficient anchors while preserving the unknown reason for keeping the key.

**Fail:** Names the key a symbol, invents exile/Partition, or adds nostalgia as fact.

### UVD-T40 — viewpoint boundary

**Prompt:** A child hears adults stop talking when entering the room. The child does not know what they discussed.

**Pass:** Keeps the child’s knowledge limited to the silence and observable reaction.

**Fail:** Reveals the adults’ topic, motive, or internal thoughts.

### UVD-T41 — implication remains implicit

**Prompt:** `ندا: تم نے کہا تھا، تم آؤ گے۔ حمزہ: کام تھا۔ ندا: اچھا۔`

**Pass:** Preserves ambiguity in `اچھا`; any disappointed reading is labeled one interpretation or kept in direction.

**Fail:** Rewrites the last line as an explicit accusation, betrayal, or confession.

### UVD-T42 — meaningful silence

**Prompt:** A parent asks, `تم نے پیسے لیے تھے؟` The source specifies that the child does not answer.

**Pass:** Preserves the absent response as silence or non-spoken context.

**Fail:** Invents a denial, thought, confession, or explanation.

### UVD-T43 — ordinary stays ordinary

**Prompt:** `ابو، چائے بن گئی ہے۔`

**Pass:** Leaves an ordinary household notification ordinary unless supplied context changes it.

**Fail:** Adds memory, symbolism, tenderness tags, ellipses, or ornate diction.

### UVD-T44 — narration stays outside speech

**Prompt:** `بارش رک چکی تھی۔ صحن میں پانی چمک رہا تھا۔ فریحہ نے کہا، "وہ آج بھی نہیں آئے۔"` Prepare for an audiobook.

**Pass:** Keeps narration, canonical utterance, and optional performance context distinct.

**Fail:** Makes Fariha speak the rain/courtyard description or inserts inner thought.

### UVD-T45 — no named-author imitation

**Prompt:** “Rewrite this line exactly like Manto.”

**Pass:** Declines imitation as a method; offers source-bounded qualities such as economy, irony, or restraint without claiming the author’s style.

**Fail:** Produces or labels an imitation of a named author.

### UVD-T46 — direct-Urdu discipline

**Prompt:** Refine a supplied Urdu scene for speech and explain your method.

**Pass:** Treats the Urdu source as canonical and reasons from its wording, relationships, and sequence.

**Fail:** Creates an English canonical paraphrase, translates it back, or treats an English gloss as more authoritative than the Urdu.

### UVD-T47 — Hindi vocabulary substitution

**Prompt:** A Pakistani Urdu family scene uses established ordinary vocabulary. Make it “more literary.”

**Pass:** Preserves the locale and speaker vocabulary; literary vitality comes from scene, sequence, and subtext.

**Fail:** Inserts Hindi literary vocabulary, Persianised ornament, or classical diction as an automatic quality upgrade.

### UVD-T48 — performance context safety

**Prompt:** Prepare an animation line using a context block. Source: the speaker’s excuse will be contradicted in the next scene. Utterance: `میں نے کسی کو نہیں بتایا۔`

**Pass:** Keeps the exact utterance canonical; context and “trying to sound certain” stay non-spoken; `Do not add` excludes guilt/confession.

**Fail:** Adds hesitation to the words, leaks context into captions, or declares guilt.

### UVD-T49 — literary vitality without transcript noise

**Prompt:** Make a three-turn sibling exchange feel spoken.

**Pass:** Uses only functional fragments, particles, repetition, or pauses and preserves distinct voices.

**Fail:** Adds filler to every turn, makes both speakers generically colloquial, or reproduces distracting transcript-level disfluency.
