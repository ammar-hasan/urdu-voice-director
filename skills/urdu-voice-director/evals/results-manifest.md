# Evaluation results manifest

This file records executed evaluations. Test specifications are not test results, and provider documentation is not evidence of audio quality.

## Release status

| Skill version | Static validation | Model-output evaluation | Native-reader review | Native-listener review | Provider audio | Release confidence |
|---|---|---|---|---|---|---|
| 0.1.1 | passed | not run | not run | not run | not run | statically validated beta |
| 0.2.0 | passed | not run | not run | not run | not run | statically validated beta |
| 0.3.0 | passed | sample generation executed; 16-case benchmark not run | not run | not run | seven revised clips generated; native listening not run | structurally validated beta |
| 0.4.0 | passed | 26-case benchmark not run | not run | not run | 0.3.0 clips retained; no 0.4.0 generation | structurally validated beta |
| 0.5.0 | passed | production-adapter fixtures executed; 26-case benchmark not run | not run | not run | 0.3.0 clips retained; no 0.5.0 generation | structurally validated beta |

Allowed evidence labels are:

- specification only;
- statically validated;
- editorially reviewed;
- native-reader validated;
- native-listener validated;
- provider-audio validated;
- production validated.

Do not promote the skill on the strength of specifications or static validation alone.

## Release 0.5.0

### Specification and mechanism inventory

```text
Status: specification and production-audit mechanism implemented; native listening not run
Skill version: 0.5.0
Core SKILL.md: 81 lines
Selective references: 9, with mandatory per-task receipts
Performance forms: 11
Delivery ranges: restrained / grounded / heightened
Treatments: naturalistic / stylized
Text cases: UVD-T01–UVD-T57 (57)
Provider cases: UVD-P01–UVD-P43 (43)
Regression invariants: UVD-R01–UVD-R79 (79)
Machine-readable benchmark: 26 cases / 11 performance forms / 3 delivery ranges / 2 treatments
Production audit: JSON and trusted default-exported JavaScript adapters, optional provenance notes
Existing sample audio: seven 0.3.0 clips retained; not regenerated for 0.5.0
```

The release responds to a real downstream failure in which the main skill was loaded without its matched pause, pronunciation, provider, and evaluation references. The resulting adapter stacked ellipses, audio directions, same-speaker segments, turn gaps, and scene padding; tagged every line; appended inline IPA after canonical Urdu; left exact runtime fields implicit; and treated an ASR transcript as evidence of a stable pronunciation fix.

The core now makes matching-reference loading mandatory without moving provider detail back into `SKILL.md`. The references explicitly forbid canonical-plus-IPA payloads, require complete runtime declarations, and require a one-variable pause-source inventory. These are structural and procedural corrections, not evidence that any provider voice improved.

### Production-validator regression

```text
Run ID: uvd-0.5.0-production-validator-2026-08-01
Skill version: 0.5.0
Date: 2026-08-01
Evaluator: automated fixture runner plus read-only downstream audit
Evaluator type: automated structural audit
Test type: production-adapter validation
Fixtures: production-adapter-valid.json / production-adapter-invalid.json
Result: clean fixture accepted; defective fixture produced 9 errors and 16 warnings
Native listening: not run
```

The defective fixture triggered 25 diagnostics covering caption drift, duplicated canonical-plus-IPA, missing pronunciation/reference/runtime records, ASR-as-verdict, dense/every-turn tags, unsourced identity/direction/religious attribution, cutoff-versus-ellipsis mismatch, long global tail, same-speaker turn gaps, and stacked pause mechanisms. A read-only run against the motivating downstream configuration also failed on the intended categories. This proves detector coverage on those artifacts, not linguistic correctness or audio quality.

### Structural validation

```text
Run ID: uvd-0.5.0-structural-2026-08-01
Skill version: 0.5.0
Date: 2026-08-01
Evaluator: Codex
Evaluator type: automated repository checks
Test type: structural / static / build / benchmark-schema / production-validator fixtures
Result: pass
Native review: not run
Provider audio: not generated
```

Commands and results:

1. `uv run --with pyyaml python …/skill-creator/scripts/quick_validate.py skills/urdu-voice-director`
   - passed: skill frontmatter, naming, and package structure are valid.
2. `node scripts/generate-samples.mjs --validate`
   - passed: all seven retained sample bundles preserve A/D speakers, turns, and tag-stripped canonical words.
3. `npm test`
   - passed: 964 structural/fidelity/release checks across seven samples and nine references; clean production fixture accepted; defective fixture triggered 25 expected diagnostics; 26 benchmark cases validated across eleven forms, three ranges, and two treatments; TypeScript and Vite production build completed with 20 modules transformed.
4. `npm run validate:production -- …/taqatwar-kon/reel.config.mjs --notes …/voice-direction.md --notes …/claims.md --json`
   - expected failure: the latest motivating downstream artifact produced 10 errors and 10 warnings across duplicated IPA, reference/runtime provenance, ASR evidence, tag density, untraced assertions, same-speaker turn gaps, stacked boundaries, and global tail padding. This was a read-only detector check, not a repair or listening evaluation.
5. `npx --yes skills add . --list`
   - passed: local repository validation discovered exactly one installable skill, `urdu-voice-director`.
6. `git diff --check`
   - passed: no whitespace errors.

No model-output benchmark, native-reader review, native-listener review, or new provider-audio result is implied.

## Release 0.4.0

### Specification and mechanism inventory

```text
Status: specification and mechanism implemented; native listening not run
Skill version: 0.4.0
Core SKILL.md: 81 lines
Selective references: 9
Performance forms: 11
Delivery ranges: restrained / grounded / heightened
Treatments: naturalistic / stylized
Text cases: UVD-T01–UVD-T57 (57)
Provider cases: UVD-P01–UVD-P39 (39)
Regression invariants: UVD-R01–UVD-R73 (73)
Machine-readable benchmark: 26 cases / 11 performance forms / 3 delivery ranges / 2 treatments
Controlled benchmark pairs: delivery range and treatment
Legacy contrastive scenes: UVD-B01–UVD-B20 (20)
Pronunciation evidence: Urdu LTS/diacritization research and current Eleven v3 IPA/dictionary documentation
Existing sample audio: seven 0.3.0 clips retained; not regenerated for 0.4.0
```

The release distinguishes materially ambiguous vowel readings from consonant-identity failures such as `ڑ`→`ر` and `ٹ`→`ت`. It requires an ambiguity sweep and complete minimally marked candidate, then keeps production adoption limited to critical, failed, or exact-target-supported marks. It adds exact-model IPA/dictionary fallbacks, repeated-generation/alternate-voice tests, and separate text-side risk handling versus listening-side consonant realization.

Performance form is separate from restrained/grounded/heightened delivery range and naturalistic/stylized treatment. Stylization is orthogonal to intensity, including quiet or restrained stylization. These are production choices and test mechanisms, not new source facts or evidence that an existing clip improved.

### Independent pre-release review

```text
Run ID: uvd-0.4.0-independent-review-2026-08-01
Skill version: 0.4.0 release candidate
Date: 2026-08-01
Evaluator: two isolated fresh-context Codex subagents
Evaluator type: non-native release/evaluation review and non-native Urdu/literary/prosody review
Urdu background: not asserted
Test type: editorial / structural / research-provenance review
Result: confirmed findings corrected; native review not implied
```

The reviewers independently identified the range/treatment conflation, text-only audio claims, literal `\\n` benchmark defects, incomplete scorer evidence requirements, stale public counts, release drift, a diacritization citation misattribution, overbroad diacritic production language, and incomplete Eleven runtime provenance. A final follow-up audit also found that suite hashes alone did not bind a packet to its private key and run provenance; packet/provenance hashes and seed-to-mapping verification now reject that stale-key failure. The accepted findings were corrected before the final structural run. This is forward editorial review, not native-reader or native-listener evidence.

### Structural validation

```text
Run ID: uvd-0.4.0-structural-2026-08-01
Skill version: 0.4.0
Date: 2026-08-01
Evaluator: Codex
Evaluator type: automated repository checks
Urdu background: not asserted
Test type: structural / static / build / benchmark-runner smoke tests
Test suite: skill packaging, topology, links, source presence, release consistency, sample fidelity, benchmark schema/runner, malformed evidence guards, TypeScript, production build, whitespace
Case IDs: 26 machine-readable cases schema-validated and runner-smoked with synthetic fixtures; not model-executed
Result: pass
Hard-gate failures: none in final structural run
Reviewer disagreement: not applicable to synthetic runner fixtures
```

Commands and final results:

1. `uv run --with pyyaml python …/skill-creator/scripts/quick_validate.py skills/urdu-voice-director`
   - passed: skill frontmatter, naming, and package structure are valid.
2. `node scripts/generate-samples.mjs --validate`
   - passed: all seven retained sample bundles preserve A/D speakers, turn counts, and tag-stripped canonical words.
3. `npm test`
   - passed: 949 structural/fidelity/release checks across seven samples and nine references; 26 benchmark cases across eleven forms, three ranges, and two treatments; TypeScript and Vite production build with 20 modules transformed.
4. Disposable `benchmark.mjs prepare`/`score` smoke fixtures
   - passed: packet and frozen-run provenance binding; 26 cases blinded; 52 synthetic review rows (two distinct fixture reviewers per case) scored; release coverage, raw evidence, hard gates, medians, summaries, and grouped controlled-pair rows retained. Incomplete dimensions, duplicate reviewer/case rows, mismatched suite hashes, altered packets, stale key mappings, and stale run provenance were each rejected. Synthetic scores are runner tests, not model or reviewer evidence.
5. `git diff --check`
   - passed: no whitespace errors.

No 26-case model-output benchmark, native-reader review, native listening, or 0.4.0 provider-audio generation is implied.

## Required run record

Copy this block for every executed batch:

```text
Run ID:
Skill version:
Commit:
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
Language code sent or omitted:
Locale/accent target:
Voice:
Voice settings/stability:
Seed:
Text normalization:
Pronunciation dictionary IDs/versions:
Output format:
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
Model-output execution status: seven-sample generation executed after release; 16-case benchmark not run
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
   - passed: 633 structural/fidelity checks across seven samples and nine references; 16 benchmark cases across eight modes; TypeScript and Vite production build.
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

### Independent corrective sample regeneration

```text
Run ID: uvd-0.3.0-independent-samples-2026-07-31
Skill version: 0.3.0
Date: 2026-07-31
Evaluator: three isolated fresh-context Codex subagents covering seven sample bundles
Evaluator type: model-output generation plus automated repository checks
Urdu background: not asserted
Test type: model-output / structural / provider-audio generation
Source input: canonical Source blocks in samples/*.md
Prompt or skill version: current skills/urdu-voice-director/SKILL.md
Provider: ElevenLabs
Model ID: eleven_v3
Product/API surface: Text to Speech API
Result: text-fidelity and audio-container checks pass; native listening pending
Hard-gate failures in accepted output: none found by automated checks
Reviewer disagreement: not applicable
```

The fresh runs ignored the existing A–D decisions, loaded only the references relevant to each performance type, and regenerated all seven bundles from their source blocks. An additional isolated acceptance audit then found defects that internal A/D equality could not see: an unsupported sibling relationship, incomplete provider-run metadata, and a Kafan block that spliced non-contiguous dialogue while claiming canonical fidelity. The corrective pass removed those failures, replaced Kafan with a four-turn excerpt verified against the scanned Anjuman Taraqqi Urdu edition, and retained exact source wording and narrative delivery context. It also corrected unsupported age assumptions, inferred emotion/motive language, broad tags that flattened distinct speech events, a stale “forced exit” scene label, and poetry guidance that did not fully expose metre, syllable length, qafiya/radif, izafat, lawful pause sites, and quiet-reading versus mushaira choices.

After acceptance, `src/data/content.ts` was mechanically synchronized from the four website sample bundles, and the generator rendered all seven after clips from the exact D payloads. Kafan’s after clip and clean baseline were re-rendered once more after its canonical-source repair. `ffprobe` accepted every resulting MP3; after-clip durations range from 18.08 to 39.60 seconds. Every bundle records the resolved voice IDs, actual JSON fields, omitted `language_code`, and `output_format=mp3_44100_128`. These checks prove provenance, text fidelity, API acceptance, and playable containers—not Urdu naturalness, pronunciation, poetic metre, cue scope, or improvement. Those claims still require the recorded native-listener protocol.

The validator now compares Source→A→tag-stripped D for every turn, requires loaded-reference provenance and exact provider-run metadata, and includes sample and website regressions for the unsupported emergency relationship, the earlier Kafan splice, and the stale betrayal relationship label. The final corrective run passes 633 checks. The accepted corrective artifacts landed in commit `1b87fc0` while retaining embedded 0.3.0 provenance; the 0.3.0 changelog now backfills that history rather than inventing a 0.3.1 release.

### Model-output evaluation

The independent sample regeneration above is an executed model-output run. The 16-case blinded benchmark remains unexecuted.

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
