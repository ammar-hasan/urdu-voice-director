# Evaluation results manifest

This file records executed evaluations. Test specifications are not test results, and provider documentation is not evidence of audio quality.

## Release status

| Skill version | Static validation | Model-output evaluation | Native-reader review | Native-listener review | Provider audio | Release confidence |
|---|---|---|---|---|---|---|
| 0.1.1 | passed | not run | not run | not run | not run | statically validated beta |
| 0.2.0 | passed | not run | not run | not run | not run | statically validated beta |

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
