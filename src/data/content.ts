export type Mode = "original" | "clean" | "directed" | "provider";

/** Bump when public/audio/*.mp3 are regenerated — busts stale cached clips. */
export const AUDIO_VERSION = "6";

export type Example = {
  id: string;
  number: string;
  title: string;
  urduTitle: string;
  relation: string;
  arc: string;
  original: string[];
  clean: string[];
  directed: string[];
  provider: string[];
  note: string;
};

export const examples: Example[] = [
  {
    id: "kafan",
    number: "01",
    title: "The shroud, unread",
    urduTitle: "کفن",
    relation: "Premchand · father–son canonical facsimile excerpt",
    arc: "assessment and instruction → source-attributed painful reply and refusal → year-long relationship invoked in rebuke → continuous statement of inability",
    original: [
      "گھیسو: معلوم ہوتا ہے بچے گی نہیں۔ سارا دن تڑپتے ہو گیا۔ جا دیکھ تو آ۔",
      "مادھو: مرنا ہی ہے تو جلدی مر کیوں نہیں جاتی۔ دیکھ کر کیا کروں۔",
      "گھیسو: تو بڑا بے درد ہے بے۔ سال بھر جس کے ساتھ جندگانی کا سکھ بھوگا اسی کے ساتھ ہی اتنی بے وفائی۔",
      "مادھو: تو مجھ سے تو اس کا تڑپنا اور ہاتھ پاؤں پٹکنا نہیں دیکھا جاتا۔",
    ],
    clean: [
      "گھیسو: معلوم ہوتا ہے بچے گی نہیں۔ سارا دن تڑپتے ہو گیا۔ جا دیکھ تو آ۔",
      "مادھو: مرنا ہی ہے تو جلدی مر کیوں نہیں جاتی۔ دیکھ کر کیا کروں۔",
      "گھیسو: تو بڑا بے درد ہے بے۔ سال بھر جس کے ساتھ جندگانی کا سکھ بھوگا اسی کے ساتھ ہی اتنی بے وفائی۔",
      "مادھو: تو مجھ سے تو اس کا تڑپنا اور ہاتھ پاؤں پٹکنا نہیں دیکھا جاتا۔",
    ],
    directed: [
      "گھیسو: [Give the assessment plainly; after the full stop, make the instruction direct.] معلوم ہوتا ہے بچے گی نہیں۔ سارا دن تڑپتے ہو گیا۔ جا دیکھ تو آ۔",
      "مادھو: [Honor the narrator’s exact “دردناک لہجے میں”: let the pain remain audible without adding a sob; make the second sentence the refusal.] مرنا ہی ہے تو جلدی مر کیوں نہیں جاتی۔ دیکھ کر کیا کروں۔",
      "گھیسو: [Rebuke the refusal directly; then make “سال بھر” the measure of the charge.] تو بڑا بے درد ہے بے۔ سال بھر جس کے ساتھ جندگانی کا سکھ بھوگا اسی کے ساتھ ہی اتنی بے وفائی۔",
      "مادھو: [State the inability as one continuous defence; preserve the repeated “تو” and keep the two physical actions connected.] تو مجھ سے تو اس کا تڑپنا اور ہاتھ پاؤں پٹکنا نہیں دیکھا جاتا۔",
    ],
    provider: [
      "ElevenLabs · eleven_v3 · POST /v1/text-to-speech/:voice_id · output_format=mp3_44100_128",
      "Voices: گھیسو=Deep South Asian Baritone (QhHNJKW7n5VCJm12Xq1F) · مادھو=Haseeb (aPfeouerZvEVukwmLSP0)",
      "JSON body: text + model_id only · no language_code · no SSML break tag",
      "گھیسو: [plain assessment] · [make the instruction direct]",
      "مادھو: [with pain in the voice] · [keep the pain; make this a refusal]",
      "گھیسو: [rebuke the refusal directly] · [make “سال بھر” the measure of the charge]",
      "مادھو: no inline tag",
      "",
      "The corrected canonical excerpt was synthesized during repository integration with the exact request metadata and voice mappings above. Bracketed open-ended tags are exact-voice experiments, not guaranteed presets; wording, scope, pronunciation, and prosody remain unapproved until a native-Urdu listening pass.",
    ],
    note:
      "Only four contiguous printed utterances are included; no narration or later exchange is spliced in. Facsimile words, punctuation, and marked father–son register stay exact, with no added remorse, cruelty, grief display, or motive.",
  },
  {
    id: "betrayal",
    number: "02",
    title: "Twenty years, one sitting",
    urduTitle: "بیس برس، ایک نشست",
    relation: "Twenty-year friendship · peer-intimate تم/تیرے",
    arc: "accusation → correction, rationale, and stated necessity → challenge, recollection, and quotation → plain assertion → tense correction and direct demand",
    original: [
      "کاشف: بیس برس کی دوستی تھی ہماری، دانش... اور تم نے ایک ہی نشست میں اسے بیچ ڈالا؟",
      "دانش: بیچا نہیں... کمپنی بچانی تھی، اور تمہاری جگہ کاٹنی پڑی۔ مجبوری تھی۔",
      "کاشف: مجبوری؟ ...مجھے آج بھی وہ رات یاد ہے جب تم نے میرے کندھے پر ہاتھ رکھ کر کہا تھا— کاشف، تیرے بغیر یہ سب کچھ بھی نہیں۔",
      "دانش: اور وہ سچ تھا۔",
      "کاشف: تھا... ماضی میں۔ اب بس ایک بات کہو— آنکھوں میں آنکھیں ڈال کر کہو، کہ تم نے درست کیا۔",
    ],
    clean: [
      "کاشف: بیس برس کی دوستی تھی ہماری، دانش... اور تم نے ایک ہی نشست میں اسے بیچ ڈالا؟",
      "دانش: بیچا نہیں... کمپنی بچانی تھی، اور تمہاری جگہ کاٹنی پڑی۔ مجبوری تھی۔",
      "کاشف: مجبوری؟ ...مجھے آج بھی وہ رات یاد ہے جب تم نے میرے کندھے پر ہاتھ رکھ کر کہا تھا— کاشف، تیرے بغیر یہ سب کچھ بھی نہیں۔",
      "دانش: اور وہ سچ تھا۔",
      "کاشف: تھا... ماضی میں۔ اب بس ایک بات کہو— آنکھوں میں آنکھیں ڈال کر کہو، کہ تم نے درست کیا۔",
    ],
    directed: [
      "کاشف: [establish the twenty years; after naming دانش, turn the line into the direct accusation] بیس برس کی دوستی تھی ہماری، دانش... اور تم نے ایک ہی نشست میں اسے بیچ ڈالا؟",
      "دانش: [correct the word “بیچا”; then give the company rationale and stated necessity as separate steps] بیچا نہیں... کمپنی بچانی تھی، اور تمہاری جگہ کاٹنی پڑی۔ مجبوری تھی۔",
      "کاشف: [challenge “مجبوری”; move into the stated memory, then quote the remembered words distinctly] مجبوری؟ ...مجھے آج بھی وہ رات یاد ہے جب تم نے میرے کندھے پر ہاتھ رکھ کر کہا تھا— کاشف، تیرے بغیر یہ سب کچھ بھی نہیں۔",
      "دانش: [plain assertion] اور وہ سچ تھا۔",
      "کاشف: [answer the past tense with “تھا”; make “ماضی میں” the correction; then require the one direct answer exactly as stated] تھا... ماضی میں۔ اب بس ایک بات کہو— آنکھوں میں آنکھیں ڈال کر کہو، کہ تم نے درست کیا۔",
    ],
    provider: [
      "Eleven v3 · exact sample-D tags · 5 turns · 2 routed voices",
      "کاشف: [stating the twenty-year history before the accusation] · [turning directly to the accusation]",
      "دانش: [correcting “بیچا” before the explanation] · [giving the stated company rationale, then the necessity]",
      "کاشف: [challenging the word “مجبوری”] · [moving into the stated recollection] · [quoting the remembered words distinctly]",
      "دانش: no inline tag",
      "کاشف: [answering only the past tense] · [making “ماضی میں” the correction] · [requiring the stated eye contact before the answer]",
      "",
      "The documented open-ended audio-tag mechanism permits these cues, but each exact cue is a voice-specific experiment, not guaranteed behavior. Clean captions remain artifact A; compare every tagged turn with its tag-free baseline.",
    ],
    note:
      "No emotion or hidden motive is added. The peer-intimate تم/تیرے register, company rationale, remembered words, tense contrast, and speaker order remain unchanged.",
  },
  {
    id: "confession",
    number: "03",
    title: "The broken pen-box",
    urduTitle: "ٹوٹا ہوا قلمدان",
    relation: "Grandmother and granddaughter · everyday family dialogue",
    arc: "object and significance → admission, attempted concealment, and sleepless night → invitation → forgiveness question → broken object and intact courage",
    original: [
      "دادی: یہ قلمدان... تمہارے نانا کا آخری تحفہ تھا۔",
      "ماریہ: دادی... وہ مجھ سے گر گیا تھا۔ میں چھپانا چاہتی تھی، مگر جھوٹ بولتے ہوئے رات بھر نیند نہیں آئی۔",
      "دادی: ادھر آؤ۔",
      "ماریہ: آپ... آپ مجھے معاف نہیں کریں گی نا؟",
      "دادی: قلمدان تو ٹوٹ گیا بیٹا... مگر سچ بولنے کی ہمت سلامت رہی، اور وہ اس قلمدان سے کہیں بڑی چیز ہے۔",
    ],
    clean: [
      "دادی: یہ قلمدان... تمہارے نانا کا آخری تحفہ تھا۔",
      "ماریہ: دادی... وہ مجھ سے گر گیا تھا۔ میں چھپانا چاہتی تھی، مگر جھوٹ بولتے ہوئے رات بھر نیند نہیں آئی۔",
      "دادی: ادھر آؤ۔",
      "ماریہ: آپ... آپ مجھے معاف نہیں کریں گی نا؟",
      "دادی: قلمدان تو ٹوٹ گیا بیٹا... مگر سچ بولنے کی ہمت سلامت رہی، اور وہ اس قلمدان سے کہیں بڑی چیز ہے۔",
    ],
    directed: [
      "دادی: [identify the قلمدان; after the source beat, state exactly what it was] یہ قلمدان... تمہارے نانا کا آخری تحفہ تھا۔",
      "ماریہ: [address دادی, admit what happened, then state the attempted concealment and sleepless night in sequence] دادی... وہ مجھ سے گر گیا تھا۔ میں چھپانا چاہتی تھی، مگر جھوٹ بولتے ہوئے رات بھر نیند نہیں آئی۔",
      "دادی: [simple invitation] ادھر آؤ۔",
      "ماریہ: [keep the repeated “آپ” as the hesitation already present; then ask for the answer] آپ... آپ مجھے معاف نہیں کریں گی نا؟",
      "دادی: [acknowledge what broke; at “مگر”, make the source’s contrast with the courage that remained] قلمدان تو ٹوٹ گیا بیٹا... مگر سچ بولنے کی ہمت سلامت رہی، اور وہ اس قلمدان سے کہیں بڑی چیز ہے۔",
    ],
    provider: [
      "Eleven v3 · exact sample-D tags · 5 turns · 2 routed voices",
      "دادی: [identifying the object before stating its significance] · [stating exactly what it was]",
      "ماریہ: [addressing دادی before the admission] · [moving from attempted concealment to the sleepless night]",
      "دادی: no inline tag",
      "ماریہ: [letting the repeated “آپ” carry the source hesitation]",
      "دادی: [acknowledging what broke] · [making the source’s contrast with the courage that remained]",
      "",
      "The documented open-ended audio-tag mechanism permits these cues, but each exact cue is a voice-specific experiment, not guaranteed behavior. Clean captions remain artifact A; compare tagged turns with tag-free baselines using Sara and Reva.",
    ],
    note:
      "No source word changed and no age is assigned to ماریہ. Direction preserves respectful آپ, the source hesitation, the simple invitation, and the closing contrast without adding punishment, grief, tears, or explicit forgiveness.",
  },
  {
    id: "emergency",
    number: "04",
    title: "Ammi, hospital",
    urduTitle: "امی، ہسپتال",
    relation: "Shared Ammi · familiar تم · code-switched emergency",
    arc: "hospital fact and direct question → processing beat and abrupt wait— cutoff → attributed assessment and hesitation → repeated acknowledgment → plan, instruction, and assurance",
    original: [
      "حسن: Ammi کو hospital لے گئے ہیں... تمہارا فون کیوں بند تھا، رابعہ؟",
      "رابعہ: Meeting میں تھی... wait— کیا کہا تم نے؟ Ammi hospital؟",
      "حسن: Doctor کہہ رہے ہیں it's serious. میں... I can't handle this alone, رابعہ۔",
      "رابعہ: ٹھیک ہے، ٹھیک ہے... I'm booking the next flight. تم بس وہیں رہو، please. میں آ رہی ہوں۔",
    ],
    clean: [
      "حسن: Ammi کو hospital لے گئے ہیں... تمہارا فون کیوں بند تھا، رابعہ؟",
      "رابعہ: Meeting میں تھی... wait— کیا کہا تم نے؟ Ammi hospital؟",
      "حسن: Doctor کہہ رہے ہیں it's serious. میں... I can't handle this alone, رابعہ۔",
      "رابعہ: ٹھیک ہے، ٹھیک ہے... I'm booking the next flight. تم بس وہیں رہو، please. میں آ رہی ہوں۔",
    ],
    directed: [
      "حسن: [Give the urgent fact cleanly. The proposition is complete; use the following beat to turn to the unanswered-phone question.] Ammi کو hospital لے گئے ہیں... تمہارا فون کیوں بند تھا، رابعہ؟",
      "رابعہ: [First answer his question. Then let the new information disrupt the response: cut off “wait—” abruptly, check what was said, and echo the key words for confirmation.] Meeting میں تھی... wait— کیا کہا تم نے؟ Ammi hospital؟",
      "حسن: [Keep the doctor’s assessment attributed. Before the English admission, make “میں...” a brief hesitation that holds the floor—not a word search or a trailing-away ending.] Doctor کہہ رہے ہیں it's serious. میں... I can't handle this alone, رابعہ۔",
      "رابعہ: [Let the exact repetition acknowledge and steady the exchange. Then move through the immediate plan, one instruction, and the final assurance as separate actions.] ٹھیک ہے، ٹھیک ہے... I'm booking the next flight. تم بس وہیں رہو، please. میں آ رہی ہوں۔",
    ],
    provider: [
      "Eleven v3 · exact sample-D tags · 4 turns · 2 routed voices",
      "حسن: [controlled urgency] · [after the completed fact, direct the unanswered-phone question to Rabia]",
      "رابعہ: [answering his question before the news registers] · [cutting off the first response and checking what was heard] · [echoing the key words for confirmation]",
      "حسن: [reporting the doctor’s assessment plainly] · [brief hesitation before the admission, not a word search]",
      "رابعہ: [acknowledging and steadying through the repetition] · [committing to the immediate plan] · [giving one clear instruction] · [assuring him with a definite commitment]",
      "",
      "These free-form cues are experimental uses of Eleven v3’s documented open-ended audio-tag mechanism; no exact cue is prevalidated. Strip tags to recover artifact A. Tag scope, code-switches, cutoff, hesitation, and voice/locale fit require native-Urdu listening with exact voice IDs.",
    ],
    note:
      "No source word or code-switch changed. The cutoff, processing beat, hesitation, repetition, plan, instruction, and assurance stay distinct rather than becoming generic emotion; native listening remains required.",
  },
];

export const modes: { id: Mode; label: string; urdu: string }[] = [
  { id: "original", label: "Original", urdu: "اصل" },
  { id: "clean", label: "Clean", urdu: "صاف" },
  { id: "directed", label: "Directed", urdu: "ہدایت کے ساتھ" },
  { id: "provider", label: "Provider", urdu: "ٹی ٹی ایس" },
];

export const steps = [
  ["۱", "Classify the performance", "صنف پہچانیں", "Conversation, fiction, narration, news, speech, devotion, poetry, or mushaira."],
  ["۲", "Protect the source", "اصل محفوظ رکھیں", "Meaning, relationship, age, register, titles, religion, and switching stay intact."],
  ["۳", "Load only relevant depth", "ضروری حوالہ کھولیں", "Nine focused references replace one oversized instruction file."],
  ["۴", "Make the smallest change", "کم سے کم تبدیلی", "Leave good lines alone; refine or direct only where useful."],
  ["۵", "Separate the layers", "صورتیں الگ رکھیں", "Clean speech never inherits rehearsal notes or provider syntax."],
  ["۶", "Adapt the exact model", "درست ماڈل کی صورت", "Use detailed supported controls, including open-ended Eleven v3 cues, as tested hypotheses."],
  ["۷", "Validate and listen", "جانچیں اور سنیں", "Automated gates protect structure; native listening proves pronunciation and prosody."],
];

export const useCases = [
  {
    marker: "گفتگو",
    title: "Everyday conversation",
    text: "Preserve relationship, thought units, useful particles, repairs, and natural code-switching.",
  },
  {
    marker: "افسانہ",
    title: "Fictional dialogue",
    text: "Make source-supported subtext playable without inventing a motive, memory, or emotion.",
  },
  {
    marker: "کتاب",
    title: "Audiobook narration",
    text: "Keep narrator, character speech, and embedded text distinct across a long performance.",
  },
  {
    marker: "خبر",
    title: "News reading",
    text: "Protect attribution, uncertainty, names, numbers, and informational grouping.",
  },
  {
    marker: "خطاب",
    title: "Public speech",
    text: "Carry audience address, argument, contrast, and rhetoric without manufactured applause.",
  },
  {
    marker: "دعا",
    title: "Religious & devotional",
    text: "Preserve exact wording and reverence without turning ordinary teaching into a sermon.",
  },
  {
    marker: "شعر",
    title: "Poetry recitation",
    text: "Respect metre, syllable length, izafat, rhyme, refrain, meaning, and lawful pause sites.",
  },
  {
    marker: "مشاعرہ",
    title: "Mushaira performance",
    text: "Model public anticipation and audience space while keeping event material outside the poem.",
  },
];

export const providers = [
  {
    group: "Expressive inline",
    name: "Eleven v3",
    status: "Urdu documented",
    detail: "Open-ended detailed audio tags are documented; exact phrases and Urdu voices still need testing.",
  },
  {
    group: "Prompt-steered",
    name: "OpenAI · Gemini-TTS",
    status: "Urdu listed · Gemini ur-PK Preview",
    detail: "Separate instructions; exact model, locale, voice, and Urdu delivery still need listening.",
  },
  {
    group: "Structural controls",
    name: "Azure · Chirp 3",
    status: "Locale-specific",
    detail: "Use only documented pause, SSML, and prosody controls for the selected voice.",
  },
  {
    group: "Conservative local",
    name: "Piper Urdu",
    status: "Catalog artifacts · audio unvalidated",
    detail: "Direction remains external; the current catalog includes two ur-PK voices.",
  },
];

export type AudioScene = {
  id: string;
  title: string;
  urduTitle: string;
  relation: string;
  line: string;
};

export const audioScenes: AudioScene[] = [
  {
    id: "kafan",
    title: "The shroud, unread",
    urduTitle: "کفن",
    relation: "Premchand · canonical fictional dialogue",
    line: "تو مجھ سے تو اس کا تڑپنا اور ہاتھ پاؤں پٹکنا نہیں دیکھا جاتا۔",
  },
  {
    id: "poetry",
    title: "Ghalib at the mushaira",
    urduTitle: "مشاعرہ",
    relation: "Five ashaar · a poet's recitation",
    line: "محبت میں نہیں ہے فرق جینے اور مرنے کا، اسی کو دیکھ کر جیتے ہیں جس کافر پہ دم نکلے۔",
  },
  {
    id: "news",
    title: "The evening bulletin",
    urduTitle: "خبریں",
    relation: "A flood bulletin · one anchor",
    line: "تین افراد جاں بحق ہوئے ہیں۔",
  },
  {
    id: "confession",
    title: "The broken pen-box",
    urduTitle: "ٹوٹا ہوا قلمدان",
    relation: "Grandmother and granddaughter",
    line: "مگر سچ بولنے کی ہمت سلامت رہی، اور وہ اس قلمدان سے کہیں بڑی چیز ہے۔",
  },
  {
    id: "betrayal",
    title: "Twenty years, one sitting",
    urduTitle: "بیس برس، ایک نشست",
    relation: "Twenty-year friendship · peer-intimate تم/تیرے",
    line: "تھا... ماضی میں۔",
  },
  {
    id: "emergency",
    title: "Ammi, hospital",
    urduTitle: "امی، ہسپتال",
    relation: "Shared Ammi · familiar تم · code-switched emergency",
    line: "ٹھیک ہے، ٹھیک ہے... I'm booking the next flight.",
  },
];
