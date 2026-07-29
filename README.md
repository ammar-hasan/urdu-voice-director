# Urdu Voice Director

`urdu-voice-director` is a standalone agent skill for refining Urdu dialogue into natural spoken performance. It preserves meaning, character, relationships, cultural context, and clean captions while keeping provider-specific TTS controls in a separate output layer.

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
Use $urdu-voice-director to refine this dialogue for natural spoken Urdu.
Preserve a clean version. Add restrained rehearsal direction where it helps.
```

The skill lives in [`skills/urdu-voice-director`](skills/urdu-voice-director).

### Manual fallback

If the CLI cannot be used, clone the repository and copy the skill into your agent’s skill directory:

```bash
git clone https://github.com/ammar-hasan/urdu-voice-director.git
cp -R urdu-voice-director/skills/urdu-voice-director \
  "${CODEX_HOME:-$HOME/.codex}/skills/"
```

Current release: **0.1.1 unvalidated beta**. The repository includes 37 dialogue cases, 29 provider-contract cases, and 45 regression invariants. Native-listener and actual-provider audio evaluation is still required; see the [results manifest](skills/urdu-voice-director/evals/results-manifest.md).

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
