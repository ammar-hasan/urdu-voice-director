# Voice samples — regeneration process

The `public/audio/*.mp3` files on the site are **real skill output, synthesized**.
Each scene in this directory is a documented run of `urdu-voice-director` on a
source fragment: scene card → turn audit → clean artifact (A) → directed
rehearsal script (B) → portable synthesis plan (C) → Eleven v3 adapter (D).

`scripts/generate-samples.mjs` reads artifacts **A** and **D** straight out of
these markdown files — never hand-edited text inside the script — and
synthesizes **per turn**: each speaker gets the ElevenLabs voice named in the
file's `Sample voices:` mapping (e.g. `احمد=Haseeb, فاطمہ=Reva`), and the turns
are stitched in order with ffmpeg:

- `<scene>-before.mp3` — artifact A (clean spoken Urdu), sent flat, no tags.
- `<scene>-after.mp3` — artifact D (the skill's own Eleven v3 adapter), tags and all.

Speaker labels (`احمد:` …) in artifact A and `Voice:` routing labels in
artifact D are metadata; they drive voice routing and are stripped from the
spoken text.

## To regenerate (e.g. after improving the skill)

1. Re-run `$urdu-voice-director` on the source at the top of each `samples/<scene>.md`
   and refresh the A–D bundles in place. Keep the exact heading names
   (`## A. Clean spoken Urdu`, `## D. Eleven v3 adapter`), the `Sample voices:`
   line, and one `Voice: <speaker>` routing line per turn — the script parses them.
2. Put an ElevenLabs key in `.elevenlabs-key` (gitignored) or `ELEVENLABS_API_KEY`.
   Voices resolve by library-name prefix — current cast: **Haseeb**, **Reva**,
   **Sara**, **Deep South Asian Baritone**; pin ids with
   `ELEVEN_VOICE_OVERRIDES='Name=<id>'` if a name is not in the account's
   library. Requires `ffmpeg` for stitching.
3. `rm public/audio/*.mp3 && node scripts/generate-samples.mjs`
   (existing files are skipped, so delete first to force regeneration).
4. Listen natively — the skill's own rule: text review finds the line, native
   listening proves the voice. If an adapter over-acts, fall back to the clean
   baseline for that scene and note it in the file's restraint notes.
5. Bump `AUDIO_VERSION` in `src/data/content.ts` — the site appends it as a
   query param so browsers do not serve stale cached clips.
6. Commit the updated `samples/*.md` and `public/audio/*.mp3` together.
