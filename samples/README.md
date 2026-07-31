# Voice samples — regeneration process

The `public/audio/*.mp3` files on the site are **real skill output, synthesized**.
Each scene in this directory is a documented run of `urdu-voice-director` on a
source fragment: decision → clean artifact (A) → directed rehearsal script
(B) → portable synthesis plan (C) → Eleven v3 adapter (D). Every file records
the skill version and the references selectively loaded for that task.

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
   line, `Generated with skill version:`, and one `Voice: <speaker>` routing
   line per turn — the validators parse them.
2. Validate without a key or network call:
   `node scripts/generate-samples.mjs --validate`. This rejects speaker/turn
   drift and any provider adapter whose spoken words differ from artifact A.
3. Put an ElevenLabs key in `.elevenlabs-key` (gitignored) or `ELEVENLABS_API_KEY`.
   Voices resolve by library-name prefix — current cast: **Haseeb**, **Reva**,
   **Sara**, **Deep South Asian Baritone**; pin ids with
   `ELEVEN_VOICE_OVERRIDES='Name=<id>'` if a name is not in the account's
   library. Requires `ffmpeg` for stitching.
4. Run `node scripts/generate-samples.mjs --force-after` to regenerate only
   the revised adapters while preserving the clean baseline clips. Run without
   the flag to create only missing files.
5. Listen natively — the skill's own rule: text review finds the line, native
   listening proves the voice. If an adapter over-acts, fall back to the clean
   baseline for that scene and note it in the file's checks.
6. Bump `AUDIO_VERSION` in `src/data/content.ts` — the site appends it as a
   query param so browsers do not serve stale cached clips.
7. Commit the updated `samples/*.md` and `public/audio/*.mp3` together.

Eleven v3’s documented tag system is open-ended. Detailed provider cues are
welcome when they translate a source-supported audible action. They are still
exact-voice experiments: preserve the fuller rehearsal note, compare against
the tag-free baseline, and never let a tag invent inner life or enter captions.
