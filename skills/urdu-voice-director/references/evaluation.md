# Evaluation

Load this reference when reviewing output, changing the skill, comparing versions, or running a benchmark. Specifications are not results; record actual runs and listening evidence.

## Contents

- [Hard gates and rubric](#hard-gates)
- [Mode-specific checks](#mode-specific-checks)
- [Automated validation](#automated-validation)
- [Benchmark workflow](#benchmark-mechanism)
- [Release decisions](#release-decisions)
- [Evolving the skill](#evolving-the-skill)
- [Results ledger and sources](#results-ledger)

## Hard gates

A candidate fails before scoring if it:

- changes factual meaning or dramatic function;
- invents a fact, motive, memory, emotion, lesson, or relationship;
- changes speaker turns, age, register, title, religious wording, or code-switching without authorization;
- resolves a material gender, locale, name, or pronunciation ambiguity without evidence;
- puts directions or provider markup in clean speech/captions;
- claims a provider control for the wrong or unresolved target;
- changes a poem, breaks required izafat/qafiya/radif, or adds audience material to the canonical verse.

Hard-gate failure cannot be averaged away by fluent prose.

## Scored dimensions

Score each from 1 to 4:

| Dimension | 1 — poor | 2 — weak | 3 — good | 4 — excellent |
|---|---|---|---|---|
| Meaning fidelity | material drift | small unsupported shift | preserves propositions | preserves propositions and dramatic function exactly |
| Social fidelity | relationship/register damaged | inconsistent cue | relationship preserved | fine social distinctions remain legible |
| Spoken naturalness | translated, stiff, or noisy | uneven | credible spoken Urdu | economical and character-specific |
| Imaginative fidelity | invented or flattened | generic | source scene survives | viewpoint, implication, and restraint become clearer without invention |
| Performance usefulness | unusable labels | broad/overdirected | sparse playable cues | precise beat help with no extra psychology |
| Oral transfer | text and delivery conflict | awkward phrasing | speakable | rhythm, thought units, and genre work aloud |
| Pronunciation safety | guessed or corrupted | issues hidden | ambiguity marked | canonical text, evidence, and tested adaptation remain distinct |
| Output separation | layers leak | partially unclear | clean separation | every layer is canonical, minimal, and auditable |
| Provider validity | unsupported claim | target incomplete | exact documented target | exact target plus honest listening boundary |
| Restraint | activity for its own sake | over-edited | necessary changes only | confidently leaves good material unchanged |

Use `N/A` where a dimension genuinely does not apply; never use it to hide a failure.

## Mode-specific checks

### Everyday conversation

- thought units and response logic;
- functional rather than decorative particles/disfluency;
- age and relationship;
- no generic colloquialization.

### Fictional dialogue

- source-bounded subtext;
- distinct character voices;
- narration not moved into speech;
- no emotion invented by direction.

### Audiobook

- narrator/character/embedded-text distinction;
- viewpoint continuity;
- name and pronunciation ledger;
- chapter-to-chapter consistency.

### News

- names, titles, figures, dates, attribution, and uncertainty;
- informational phrasing;
- no invented emotion or certainty;
- stable pronunciation.

### Public speech

- audience and address;
- argument and rhetorical structure;
- focus and repetition;
- no invented applause or intensity.

### Religious/devotional

- exact wording and honorifics;
- theological fidelity;
- genre-specific restraint;
- qualified review where recitation conventions matter.

### Poetry recitation

- authoritative text;
- metre/syllable length;
- izafat, qafiya, and radif;
- defensible pause sites;
- pronunciation;
- intended quiet/studio mode.

### Mushaira

- all poetry checks;
- performance repetition kept outside canonical verse;
- audience interaction distinguished from text;
- anticipation supports rather than breaks the form.

## Automated validation

Run from the repository root:

```bash
npm run validate:skill
npm run benchmark:validate
npm test
```

The validator checks structure, links, release metadata, exact reference topology, source sections, sample layer fidelity, and benchmark schema. It cannot judge naturalness, metre by ear, pronunciation, or provider compliance.

## Benchmark mechanism

The benchmark uses the versioned cases in [`../evals/benchmark-cases.json`](../evals/benchmark-cases.json). Cases cover all eight performance modes and include protected facts and mode-specific review prompts.

### 1. Freeze the run

Record:

- skill version and commit;
- model and surface;
- system/developer prompt;
- exact case-set hash;
- generation settings;
- provider/voice/version for audio;
- date and operator.

Do not edit a candidate after seeing reviewer scores.

### 2. Generate baseline and candidate outputs

Use the same case prompts and generation settings. Save JSON maps keyed by case ID:

```json
{
  "run": {"skill_version": "0.3.0", "model": "exact-model"},
  "outputs": {"everyday-01": "candidate text"}
}
```

### 3. Prepare a blinded packet

```bash
node scripts/benchmark.mjs prepare \
  --baseline path/to/baseline.json \
  --candidate path/to/candidate.json \
  --out artifacts/packet.json \
  --key artifacts/private-key.json \
  --seed release-0.3.0
```

The public packet randomizes A/B order deterministically. Keep the key from reviewers.

### 4. Review

Use at least two native Urdu reviewers for consequential releases. Give them the source/context and blinded outputs, not the version labels. Capture:

- hard-gate findings with short evidence;
- dimension scores;
- preference: A, B, tie, or both unacceptable;
- confidence;
- mode-specific notes.

For audio, use the exact selected voice, loudness-match clips, randomize order, and include a no-control baseline. Follow [`../evals/human-listening-protocol.md`](../evals/human-listening-protocol.md).

### 5. Score and inspect disagreement

```bash
node scripts/benchmark.mjs score \
  --packet artifacts/packet.json \
  --key artifacts/private-key.json \
  --reviews artifacts/reviews.json \
  --out artifacts/results.json
```

Report:

- hard-gate rate by version and mode;
- mean/median dimension scores;
- candidate win/tie/loss rate;
- reviewer agreement;
- worst regressions and their case IDs;
- audio pronunciation/prosody failures separately from text.

Do not publish one aggregate score without mode breakdowns.

## Release decisions

A revision is eligible only when:

- automated validation passes;
- no new systematic hard-gate failure appears;
- it does not regress a performance mode to improve another;
- provider facts are current;
- sample changes pass source-to-clean and clean-to-adapter fidelity checks;
- native review is recorded for claims about output quality;
- actual audio is recorded for claims about pronunciation, prosody, or provider behavior.

Static validation supports “structurally validated,” not “proven natural.”

## Evolving the skill

Turn observed failures into the smallest durable asset:

1. preserve the failing input and required context;
2. classify it by contract, reference, provider, or evaluator failure;
3. add a regression case before changing guidance;
4. change the narrowest relevant reference;
5. rerun all modes;
6. retain the new rule only if blinded evidence improves the failure without a broader regression;
7. update provider dates, `VERSION`, `CHANGELOG.md`, and the results manifest.

Avoid adding a rule for one model’s stylistic preference. If a model already handles an ordinary edit reliably, keep that detail out of `SKILL.md`.

## Results ledger

Use [`../evals/results-manifest.md`](../evals/results-manifest.md) as the release ledger. Distinguish:

- not run;
- automated structural pass;
- executed text comparison;
- native text review;
- synthetic audio run;
- native listening review.

Include failures and reviewer disagreement. Evidence that can evolve the skill is more valuable than a perfect-looking summary.

## Sources

- NIST, “[Human Language Technology evaluation methodology](https://www.nist.gov/itl/iad/mig),” general evaluation principles.
- International Test Commission, “[Guidelines for translating and adapting tests](https://www.intestcom.org/page/16),” 2017; useful for construct and language fidelity.
- OpenAI, “[Evals design guide](https://platform.openai.com/docs/guides/evals),” current workflow guidance; use only for general evaluation mechanics, not as Urdu evidence.
- Farhat Jabeen, “[Word order, intonation, and prosodic phrasing: Individual differences in Urdu](https://doi.org/10.3390/languages7020103),” *Languages* 7(2), 2022; supports speaker variation and the need for listening rather than absolute prosody rules.
- Attia Nafees ul Haq et al., “[UrduSpeech](https://arxiv.org/abs/2605.17846),” 2026 preprint; its broad genre taxonomy motivates mode-stratified evaluation, not a claim of benchmark validity for this skill.
