# Hesitation and Pauses

Load this reference when silence, interruption, trailing off, self-repair, word search, or a filled pause matters. A pause is an event with a function, not generic “emotion.”

## Contents

- [Pause and disfluency taxonomy](#separate-the-phenomena)
- [Diagnosis and punctuation](#diagnose-before-marking)
- [Filled pauses](#filled-pauses-in-urdu)
- [Interruption, cutoff, and retrieval](#interruption-and-cutoff)
- [Genre and provider constraints](#genre-constraints)
- [Sources](#sources)

## Separate the phenomena

| Event | What happens | Possible textual or rehearsal representation |
|---|---|---|
| Boundary pause | a thought unit completes or a new one begins | comma, full stop, line/turn boundary, or no special mark |
| Deliberate beat | the speaker lets a point land or chooses to wait | a brief non-spoken cue |
| Hesitation | commitment is delayed because the speaker is uncertain or reluctant | fragment, restart, brief pause, sometimes a filler |
| Word search | the speaker holds the floor while retrieving a word | filler, lengthening, or unfinished phrase |
| Self-repair | the speaker replaces or corrects an earlier formulation | cutoff plus restart |
| Cutoff | the speaker stops their own word or clause abruptly | dash or explicit cutoff cue |
| Interruption | another speaker takes the floor before completion | turn boundary plus dash/cue |
| Trailing away | energy or commitment dissipates without a sharp stop | ellipsis or direction |
| Filled pause | an audible vocalization such as `اُم`, `آں`, `یعنی` in a particular function | write it only if intended to be heard |

These categories can overlap, but do not render them all as `...`.

## Diagnose before marking

Ask:

1. Does the speaker finish the proposition?
2. Is the silence planned, reluctant, surprised, or caused by retrieval?
3. Who retains the floor?
4. Is a sound intended to be audible?
5. Does the event change meaning or merely timing?

If the source does not support a disfluency, do not invent one as a shortcut to emotion.

## Punctuation is not performance

Useful editorial tendencies:

- comma: grammatical or light grouping;
- full stop: completion;
- dash: cutoff, interruption, abrupt repair, or emphatic insertion;
- ellipsis: omission or continuation/trailing away;
- line/turn break: speaker or discourse structure.

These marks are ambiguous. Typography cannot guarantee silence length, pitch movement, or whether a TTS system reads a symbol strangely. Keep critical direction in a non-spoken note or a documented model control.

## Filled pauses in Urdu

Recent spontaneous-speech research reports that vocalic filled pauses are common in the studied Urdu sample and occur frequently turn-medially. That finding helps distinguish Urdu behavior from importing an English `um/uh` template. It does not license a universal spelling, frequency, or gender rule: the cited 2026 study used 18 female speakers and a limited corpus.

Use a filled pause only when:

- it is part of the source;
- it materially establishes online planning or repair;
- the genre permits it;
- its written form will be understood;
- a TTS rendering has been tested if synthesis is required.

`یعنی`, `وہ`, `دیکھیے`, and similar items can function as discourse markers or lexical words rather than pure fillers. Interpret them in the sentence.

## Interruption and cutoff

Keep the incomplete meaning incomplete:

```text
الف: اگر تم نے پھر—
ب: میں نے کچھ نہیں کیا۔
```

Do not complete the first turn in clean text. In a provider adapter, synthesize per turn if necessary, but do not place an unsupported control token in the caption. Some systems ignore a dash, some pause, and some pronounce markup. Test it.

## Reluctance versus retrieval

These can contain the same length of silence but sound different:

- reluctance: the word is known; the speaker resists saying it;
- retrieval: the speaker is genuinely finding the word;
- realization: the speaker discovers the implication while speaking;
- shock: speech planning is disrupted by new information.

Direct the playable action:

```text
[the answer is known; delays admitting it]
```

rather than:

```text
[emotional pause]
```

Do not add the underlying motive unless it is source-supported.

## Genre constraints

- **Everyday speech:** light repair and overlap can help, but transcripts need not reproduce all noise.
- **Fiction:** select disfluency for character and dramatic function.
- **Audiobook:** narration and quoted interruption must remain distinguishable.
- **News:** unplanned fillers are usually not part of a prepared clean script; live quotations may retain them.
- **Public/devotional speech:** rhetorical silence differs from a word search.
- **Poetry:** metre and syntax restrict pause sites; load [poetry and recitation](poetry-and-recitation.md).

## Provider adaptation

Never assume `[pause]`, `<break>`, ellipses, blank lines, or dashes are silent. Read [provider capabilities](provider-capabilities.md), verify the exact model, and keep:

- canonical utterance;
- non-spoken pause function;
- tested provider realization;
- clean caption copy

as separate records.

Change one variable at a time when testing pause behavior. Record whether the pause was absent, too long, misplaced, audible as markup, or disruptive to word connection.

Before synthesis, inventory every mechanism acting at each intended boundary:

- punctuation or an explicit hesitation/cutoff token;
- an inline audio tag or separate direction;
- a segment or turn boundary;
- renderer-added sentence/turn gaps;
- scene lead, tail, or other padding.

Do not stack several mechanisms to create the same pause and then tune them together. A continuous thought by one speaker should normally remain one utterance; split it only for a real routing, synchronization, or provider constraint. When a supported model needs a change inside that thought, compare a beat-local mid-utterance cue with the untagged baseline before introducing a new segment boundary.

## Sources

- Saira Zahid, Ho-Young Lee, and Muhammad Asim Mahmood, “[Distribution and acoustic characteristics of filled pauses in spontaneous Urdu speech](https://doi.org/10.3390/languages11030034),” *Languages* 11(3), 2026.
- Luca Rognoni et al., “[Urdu pitch accents and intonation patterns in spontaneous conversational speech](https://aclanthology.org/2020.lrec-1.788/),” LREC 2020.
- Andreas H. Jucker, “[Speech-like conversational interaction in fiction](https://doi.org/10.1177/09639470211047751),” *Language and Literature* 31(1), 2022.
