# Evaluation results manifest

This file records executed evaluations. Test specifications are not test results, and provider documentation is not evidence of audio quality.

## Release status

| Skill version | Static validation | Model-output evaluation | Native-reader review | Native-listener review | Provider audio | Release confidence |
|---|---|---|---|---|---|---|
| 0.1.1 | passed | not run | not run | not run | not run | statically validated beta |
| 0.2.0 | passed | not run | not run | not run | not run | statically validated beta |
| 0.3.0 | passed | not run | not run | not run | seven revised clips generated; native listening not run | structurally validated beta |

Allowed evidence labels are:

- specification only;
- statically validated;
- editorially reviewed;
- native-reader validated;
- native-listener validated;
- provider-audio validated;
- production validated.

Do not promote the skill on the strength of specifications or static validation alone.

## Required run record

Copy this block for every executed batch:

```text
Run ID:
Skill version:
Date:
Evaluator:
Evaluator type: automated / editor / native listener / voice professional
Urdu background (self-described; optional):
Test type: static / model-output / native-reader / native-listener / provider-audio / production
Test suite:
Case IDs:
Model used for skill execution:
Prompt or skill version:
Provider:
Model ID:
Product/API surface:
Locale:
Voice:
Source input:
Clean output:
Context or direction:
Provider request payload:
Caption copy:
Pronunciation/normalization divergences:
Result: pass / fail / mixed
Ratings by dimension: poor / acceptable / strong / excellent
Hard-gate failures:
Reviewer disagreement:
Observed failures:
Artifacts or audio links:
Follow-up action:
```

Use `not applicable` rather than inventing provider or model fields for static/editorial work.

## Release 0.3.0

### Specification and mechanism inventory

```text
Skill version: 0.3.0
Core SKILL.md: 72 lines
Selective references: 9
Performance modes: 8
Machine-readable benchmark cases: 16 (2 per mode)
Legacy text cases: UVD-T01–UVD-T49 (49)
Provider cases: UVD-P01–UVD-P34 (34)
Legacy regression invariants: UVD-R01–UVD-R65 (65)
Legacy contrastive scenes: UVD-B01–UVD-B20 (20)
Model-output execution status: not run
```

The new benchmark runner validates the case schema, prepares deterministic blinded A/B packets with a private key, and scores native-review files back to baseline/candidate labels. No benchmark outputs or reviewer preferences are implied by the mechanism’s presence.

### Structural and sample-fidelity validation

```text
Run ID: uvd-0.3.0-structural-2026-07-31
Skill version: 0.3.0
Date: 2026-07-31
Evaluator: Codex
Evaluator type: automated repository checks
Urdu background: not asserted
Test type: structural / static
Test suite: core contract, topology, links, citations, metadata, sample fidelity, benchmark schema, site build
Case IDs: 16 machine-readable cases schema-validated; not model-executed
Model used for skill execution: not applicable
Provider/model ID/product surface/locale/voice: not applicable
Result: pass
Hard-gate failures: none in final structural run
Reviewer disagreement: not applicable
```

Commands and final results:

1. `uv run --with pyyaml python …/skill-creator/scripts/quick_validate.py skills/urdu-voice-director`
   - passed: skill frontmatter and package naming are valid.
2. `node scripts/generate-samples.mjs --validate`
   - passed: seven sample bundles; clean/adapter speaker order, turn counts, and tag-stripped canonical words match.
3. `npm test`
   - passed: 439 structural/fidelity checks across seven samples and nine references; 16 benchmark cases across eight modes; TypeScript and Vite production build with 20 modules transformed.
4. `node scripts/benchmark.mjs prepare …` followed by `score …` on disposable smoke fixtures
   - passed: nested output directories created, 16 cases blinded, two reviews resolved through the private key, per-mode output produced, and exact reviewer agreement calculated.
5. `git diff --check`
   - passed: no whitespace errors.
6. `ffprobe` over all seven regenerated `*-after.mp3` files
   - passed container/duration integrity; durations ranged from 21.84 to 39.60 seconds.

The validator explicitly guards:

- a 110-line ceiling and the core fidelity contract;
- the exact flat nine-reference topology;
- all local Markdown links and reference source sections;
- all eight performance modes;
- release metadata;
- source-clean/provider word equivalence;
- detailed mid-utterance Eleven v3 coverage, including the hero and poetry samples;
- benchmark schema and two cases per mode.

### Sample regeneration

```text
Run ID: uvd-0.3.0-eleven-v3-samples-2026-07-31
Skill version: 0.3.0
Date: 2026-07-31
Test type: provider-audio generation; quality review pending
Provider: ElevenLabs
Model ID: eleven_v3
Product/API surface: Text to Speech API
Locale: inferred from input; no separate locale field
Voices: Haseeb; Reva; Sara; Deep South Asian Baritone
Scenes: betrayal, confession, emergency, hero-line, kafan, news, poetry
Clean baselines: preserved
After clips: regenerated from revised skill adapters
Text-fidelity result: pass
Native-listener result: not run
```

Every adapter uses the revised skill’s source-grounded detailed directions; several include mid-utterance cues at beat changes. This run proves that the current API accepted the payloads and returned playable MP3 containers. It does not prove naturalness, correct pronunciation, poetic metre, local tag scope, or improvement over the baseline.

### Model-output evaluation

Not yet run.

### Native-reader review

Not yet run.

### Native-listener review

Not yet run. The regenerated clips must be judged by native Urdu listeners before any quality claim.

## Release 0.2.0

### Specification inventory

```text
Skill version: 0.2.0
Test type: specification
Text cases: UVD-T01–UVD-T49 (49)
Provider cases: UVD-P01–UVD-P32 (32)
Regression invariants: UVD-R01–UVD-R65 (65)
Contrastive scenes: UVD-B01–UVD-B20 (20)
Core specification count: 146
Total including contrastive benchmark: 166
Execution status: not model-executed
```

The contrastive benchmark, native editorial questions, audio subset, and ablation matrix are plans. No forward model generations, blinded rankings, native-reader ratings, native-listener ratings, or provider audio are implied by their presence.

### Static validation

```text
Skill version: 0.2.0
Date: 2026-07-29
Evaluator: Codex
Evaluator type: automated and non-native editorial repository review
Urdu background: not asserted
Test type: static
Test suite: skill validation, site build, installation discovery, repository integrity, source-link audit
Case IDs: UVD-T01–UVD-T49, UVD-P01–UVD-P32, UVD-R01–UVD-R65, UVD-B01–UVD-B20 counted only; not model-executed
Model used for skill execution: not applicable
Prompt or skill version: 0.2.0 release candidate
Provider/model ID/product surface/locale/voice: not applicable
Result: pass with recorded limitations
Hard-gate failures: none found by static checks
Reviewer disagreement: not applicable
Artifacts: npm production build under dist/ (generated locally and git-ignored)
Follow-up action: run the blinded 20-scene model comparison with multiple native Urdu reviewers
```

Commands and results:

1. `uv run --with pyyaml python /Users/ammarhasan/.codex/skills/.system/skill-creator/scripts/quick_validate.py skills/urdu-voice-director`
   - passed: `Skill is valid!`
2. `npm test`
   - passed: TypeScript compilation and Vite production build; 16 modules transformed.
3. `npx skills add . --list`
   - passed: local repository validated and exactly one installable skill, `urdu-voice-director`, discovered.
4. Ephemeral Node repository-integrity check
   - passed: 33 Markdown files; balanced code fences; all local Markdown links resolved; no unresolved development markers; no executable or framework files under the skill; version metadata consistent at `0.2.0`.
   - counted 49 text cases, 32 provider cases, 65 regression invariants, 20 benchmark scenes, and 12 literary examples.
5. Ephemeral Node external-source audit over provider, provenance, literary, and assessment references
   - checked 41 unique URLs; found 0 HTTP `404`/`410` failures.
   - three targets rejected automated requests with `403`: ElevenLabs Help Center, UC eScholarship, and the Jucker DOI resolver. Their current targets were separately confirmed during research; this run does not claim unrestricted automated reachability.
   - six stale or misidentified source targets discovered during review were corrected before the passing audit; one access-limited secondary paper link was also replaced with its originating institute’s PDF.
6. `git diff --check`
   - passed: no whitespace errors.

The website production build passed. A fresh interactive browser visual check was **not run** because no browser was attached to the available browser-control runtime; no visual-quality claim is inferred from the build.

### Model-output evaluation

Not yet run.

### Native-reader review

Not yet run.

### Native-listener review

Not yet run.

### Provider audio

Not yet run. No Urdu pronunciation, prosody, code-switching, tag-compliance, or expressive-quality claim is release evidence yet.

## Release 0.1.1

### Static validation

```text
Run ID: uvd-0.1.1-static-2026-07-29
Skill version: 0.1.1
Date: 2026-07-29
Evaluator: automated repository checks
Test suite and case IDs: structure/frontmatter, local Markdown links, artifact inventory, count invariants
Result: pass
Counts: 37 text cases / 29 provider cases / 45 regression invariants
Observed failures: none in the final run
Commands:
  uv run --with pyyaml python .../skill-creator/scripts/quick_validate.py skills/urdu-voice-director
  local Markdown-link validator across 28 Markdown files
  executable-framework file scan
```

The GitHub Pages site also passed `npm run build`. Static validation proves package structure and internal consistency, not linguistic or audio quality.

### Independent editorial review

An independent repository review identified fidelity, aspect, gender/locale inference, output-taxonomy, and evidence-labeling defects in 0.1.0. Version 0.1.1 corrects the instructions and adds regression coverage. This is an editorial review, not a native-listener or provider-audio result.

### Native listening

Not yet run.

### Provider audio

Not yet run. No claim of provider-specific Urdu prosody, pronunciation, or tag compliance is release evidence yet.
