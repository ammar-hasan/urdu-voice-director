# Urdu Voice Director

`urdu-voice-director` is a standalone agent skill for recovering the living scene already supported by Urdu, then refining it into natural spoken performance. It treats Urdu as the source of interpretation—with its own literary memory, social relationships, rhythm, cultural associations, and meaningful silences—while keeping fidelity above embellishment.

It preserves meaning, character, viewpoint, relationships, register, cultural context, and clean captions. Narration, rehearsal context, and provider-specific TTS controls remain separate from the words intended to be heard.

## Install the skill

The recommended installation method uses the open [`skills` CLI](https://github.com/vercel-labs/skills), which discovers this repository’s skill automatically:

```bash
npx skills add ammar-hasan/urdu-voice-director
```

The CLI detects supported agents and lets you choose project or global scope. For a global, non-interactive Codex installation:

```bash
npx skills add ammar-hasan/urdu-voice-director \
  --skill urdu-voice-director \
  --global \
  --agent codex \
  --yes
```

To inspect the repository without installing:

```bash
npx skills add ammar-hasan/urdu-voice-director --list
```

Then invoke it with a prompt such as:

```text
Use $urdu-voice-director to recover this scene from the Urdu source, then
refine the dialogue for natural speech. Preserve a clean version and add
restrained rehearsal direction only where it helps.
```

The skill lives in [`skills/urdu-voice-director`](skills/urdu-voice-director).

### Manual fallback

If the CLI cannot be used, clone the repository and copy the skill into your agent’s skill directory:

```bash
git clone https://github.com/ammar-hasan/urdu-voice-director.git
cp -R urdu-voice-director/skills/urdu-voice-director \
  "${CODEX_HOME:-$HOME/.codex}/skills/"
```

Current release: **0.2.0 statically validated beta**. The repository includes 49 dialogue cases, 32 provider-contract cases, 65 regression invariants, and a 20-scene blinded contrastive benchmark. Model-output comparison, native-reader review, native listening, and actual-provider audio evaluation are still required; see the [results manifest](skills/urdu-voice-director/evals/results-manifest.md).

## How the skill thinks

```text
Source
  ↓
Meaning and fidelity
  ↓
Urdu imaginative scene
  ↓
Character and social voice
  ↓
Clean spoken realization
  ↓
Performance realization
  ↓
Provider realization
```

The scene-recovery step privately asks what is source-supported, whose viewpoint shapes the moment, which concrete details anchor it, which relationship governs the language, what changes, and what remains unspoken. It is strictly forbidden from inventing scenery, motives, memories, symbolism, cultural assumptions, or emotion.

Depending on the request, the skill can return:

- clean spoken Urdu for captions and transcripts;
- a directed rehearsal script with non-spoken cues;
- a small portable synthesis plan;
- optional non-spoken narrative context for performance;
- an exact-model provider adapter when current first-party documentation supports it.

Provider markup is always derived from the same canonical Urdu and never becomes the source text.

## Research and evaluation

The [research assessment](docs/research-assessment.md) explains the original design, the Urdu-literary gap, current multilingual-model and TTS evidence, the restrained change plan, and the limits of static validation.

The installable skill keeps detailed guidance under [`references/`](skills/urdu-voice-director/references), worked transformations under [`examples/`](skills/urdu-voice-director/examples), and test specifications plus executed evidence under [`evals/`](skills/urdu-voice-director/evals).

## Website

The project website is published through GitHub Pages:

https://ammar-hasan.github.io/urdu-voice-director/

Run it locally with:

```bash
npm install
npm run dev
```

Build the static site with:

```bash
npm run build
```

The GitHub Actions workflow in `.github/workflows/deploy-pages.yml` publishes `dist/` whenever `main` is updated.
