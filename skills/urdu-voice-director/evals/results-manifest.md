# Evaluation results manifest

This file records executed evaluations. Test specifications are not test results, and provider documentation is not evidence of audio quality.

## Release status

| Skill version | Text/static validation | Native Urdu listening | Provider audio | Release confidence |
|---|---|---|---|---|
| 0.1.1 | passed | not yet run | not yet run | unvalidated beta |

Do not promote the skill from **unvalidated beta** on the strength of text review alone.

## Required run record

Copy this block for every executed batch:

```text
Run ID:
Skill version:
Date:
Evaluator:
Evaluator type: automated / editor / native listener / voice professional
Urdu background (self-described; optional):
Test suite and case IDs:
Provider:
Model ID:
Product/API surface:
Locale:
Voice:
Input variant:
Direction/markup:
Clean caption:
Result: pass / fail / mixed
Ratings: poor / acceptable / strong / excellent
Observed failures:
Artifacts or audio links:
Follow-up:
```

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
