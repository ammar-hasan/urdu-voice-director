# Pauses, rhythm, and punctuation

Urdu punctuation improves reading and segmentation, but punctuation-to-prosody mappings vary by voice and engine. Use explicit non-spoken notes or documented provider controls for performance-critical silence.

## Punctuation palette

| Mark | Textual job | Likely spoken implication | Caution |
|---|---|---|---|
| `۔` | declarative boundary | completion or reset | Some systems are trained more heavily on `.`; test both only in a provider copy, never corrupt the clean Urdu source. |
| `؟` | interrogative boundary | question contour or uncertainty | Rhetorical and sincere questions need different direction despite the same mark. |
| `،` | clause/list separation | light phrasing boundary | A comma is not a guaranteed timed pause. |
| `!` | exclamation/force | heightened salience | Does not mean “shout”; repeated marks rarely help. |
| `:` | introduces speech, list, or explanation | anticipatory boundary | Useful in scripts, not a performance command. |
| `—` | interruption, cutoff, or sharp turn | abrupt stop or takeover | Distinguish from a reflective trail-off. |
| `...` | hesitation, trail-off, processing | open continuation | Use sparingly and consistently; exact timing is not guaranteed. |
| line break | turn/beat separation | possible reset | Some engines ignore it; others over-pause or synthesize chunks independently. |

`۔` is the Urdu khatma/full stop; `،` and `؟` are directionally appropriate Arabic-script punctuation. W3C Urdu/Arabic-script resources document these orthographic and layout concerns. Sentence-boundary research also shows that real Urdu text is inconsistently punctuated, so punctuation is not a complete model of speech.

## Pause taxonomy

- **Micro-beat** — separates a particle or reaction: `اچھا... تو یہ بات ہے۔`
- **Conversational beat** — gives the other thought room to land.
- **Hesitation** — uncertainty about whether or how to continue.
- **Word search** — holds the floor while retrieving language.
- **Surprise/realization** — processing after new information.
- **Reluctance** — resistance before saying something costly.
- **Reflective pause** — evaluates a moral, emotional, or conceptual point.
- **Suspense** — deliberately withholds completion for the listener.
- **Interruption/cutoff** — speech is stopped, not gently faded.

Spontaneous Urdu research finds vocalic and vocalic-nasal filled pauses and position-dependent patterns, but the dataset is limited. Do not insert written `اُم`/`اَ` fillers into polished dialogue merely to imitate “realism.” Use them only when disfluency serves character or task.

## Notation policy

In clean dialogue:

- use `...` for a restrained open beat or trail-off;
- use `—` for an abrupt cutoff;
- use a new turn when another speaker interrupts;
- avoid `۔۔۔۔۔۔`, `!!!`, and mixed arbitrary dots.

In directed dialogue:

```text
[brief pause]
[hesitates]
[searches for the word]
[allows the thought to settle]
[cut off by Fatima]
```

In provider output, use only documented pause syntax. Keep its clean counterpart separately.

## Rhythm audit

Check:

1. Does every pause have a reason?
2. Are hesitation and interruption visibly different?
3. Has punctuation been asked to communicate a critical emotional change by itself?
4. Are long sentences split at semantic beats rather than arbitrary word counts?
5. Does the engine receive only the controls its model supports?
