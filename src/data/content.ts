export type Mode = "original" | "clean" | "directed" | "provider";

/** Bump when public/audio/*.mp3 are regenerated — busts stale cached clips. */
export const AUDIO_VERSION = "5";

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
    relation: "Premchand · canonical fictional dialogue",
    arc: "assessment → refusal → rebuke → defense → practical constraint → stated fear",
    original: [
      "گھیسو: معلوم ہوتا ہے بچے گی نہیں۔ سارا دن تڑپتے ہو گیا، جا دیکھ تو آ۔",
      "مادھو: مرنا ہی ہے تو جلدی مر کیوں نہیں جاتی؟ دیکھ کر کیا آؤں۔",
      "گھیسو: تو بڑا بیدرد ہے بے! سال بھر جس کے ساتھ جندگانی کا سکھ بھوگا، اسی کے ساتھ اتنی بے وفائی۔",
      "مادھو: تو مجھ سے اس کا تڑپنا اور ہاتھ پاؤں پٹکنا نہیں دیکھا جاتا۔",
      "گھیسو: جا کر دیکھ تو، کیا حالت ہے اس کی... یہاں تو اوجھا بھی ایک روپیہ مانگتا ہے۔",
      "مادھو: مجھے وہاں ڈر لگتا ہے۔ میری عورت جب مری تھی، تو میں تین دن تک اس کے پاس سے ہلا بھی نہیں۔ وہ مجھے دیکھ لے گی تو کھل کر ہاتھ پاؤں بھی نہ پٹک سکے گی۔",
    ],
    clean: [
      "گھیسو: معلوم ہوتا ہے بچے گی نہیں۔ سارا دن تڑپتے ہو گیا، جا دیکھ تو آ۔",
      "مادھو: مرنا ہی ہے تو جلدی مر کیوں نہیں جاتی؟ دیکھ کر کیا آؤں۔",
      "گھیسو: تو بڑا بیدرد ہے بے! سال بھر جس کے ساتھ جندگانی کا سکھ بھوگا، اسی کے ساتھ اتنی بے وفائی۔",
      "مادھو: تو مجھ سے اس کا تڑپنا اور ہاتھ پاؤں پٹکنا نہیں دیکھا جاتا۔",
      "گھیسو: جا کر دیکھ تو، کیا حالت ہے اس کی... یہاں تو اوجھا بھی ایک روپیہ مانگتا ہے۔",
      "مادھو: مجھے وہاں ڈر لگتا ہے۔ میری عورت جب مری تھی، تو میں تین دن تک اس کے پاس سے ہلا بھی نہیں۔ وہ مجھے دیکھ لے گی تو کھل کر ہاتھ پاؤں بھی نہ پٹک سکے گی۔",
    ],
    directed: [
      "گھیسو: [assessment first; then the instruction] معلوم ہوتا ہے بچے گی نہیں۔ سارا دن تڑپتے ہو گیا، جا دیکھ تو آ۔",
      "مادھو: [blunt question followed by refusal] مرنا ہی ہے تو جلدی مر کیوں نہیں جاتی؟ دیکھ کر کیا آؤں۔",
      "گھیسو: [rebuke; keep the stated year-long relationship in the second sentence] تو بڑا بیدرد ہے بے! سال بھر جس کے ساتھ جندگانی کا سکھ بھوگا، اسی کے ساتھ اتنی بے وفائی۔",
      "مادھو: [state the limit exactly as he gives it] تو مجھ سے اس کا تڑپنا اور ہاتھ پاؤں پٹکنا نہیں دیکھا جاتا۔",
      "گھیسو: [repeat the instruction; then give the practical constraint] جا کر دیکھ تو، کیا حالت ہے اس کی... یہاں تو اوجھا بھی ایک روپیہ مانگتا ہے۔",
      "مادھو: [fear → remembered precedent → stated rationale; add no hidden motive] مجھے وہاں ڈر لگتا ہے۔ میری عورت جب مری تھی، تو میں تین دن تک اس کے پاس سے ہلا بھی نہیں۔ وہ مجھے دیکھ لے گی تو کھل کر ہاتھ پاؤں بھی نہ پٹک سکے گی۔",
    ],
    provider: [
      "Eleven v3 · detailed open-ended cues · 6 turns · 2 voices",
      "گھیسو: [matter-of-fact assessment, then urging] · [sharp rebuke, followed by the stated reason] · [urging, then shifting to the practical constraint]",
      "مادھو: [blunt question, then refusal] · [defending himself with the limit he states] · [admitting fear, then recounting the precedent and rationale]",
      "",
      "The open-ended tag mechanism is documented; these exact phrases remain voice-specific experiments. Strip the tags and every spoken word matches the clean view.",
    ],
    note:
      "The historical diction stays canonical. Direction names only what the exchange says; it does not diagnose hidden compassion, remorse, or cruelty.",
  },
  {
    id: "betrayal",
    number: "02",
    title: "Twenty years, one sitting",
    urduTitle: "بیس برس، ایک نشست",
    relation: "Two partners · a forced exit",
    arc: "accusation → correction → memory quoted → assertion → tense correction and demand",
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
      "کاشف: [let “بیس برس” establish the scale; direct question] بیس برس کی دوستی تھی ہماری، دانش... اور تم نے ایک ہی نشست میں اسے بیچ ڈالا؟",
      "دانش: [correct the accusation first; then state the necessity without adding a plea] بیچا نہیں... کمپنی بچانی تھی، اور تمہاری جگہ کاٹنی پڑی۔ مجبوری تھی۔",
      "کاشف: [echo his word as a challenge; quote the remembered sentence clearly] مجبوری؟ ...مجھے آج بھی وہ رات یاد ہے جب تم نے میرے کندھے پر ہاتھ رکھ کر کہا تھا— کاشف، تیرے بغیر یہ سب کچھ بھی نہیں۔",
      "دانش: [plain assertion; let the past tense remain audible] اور وہ سچ تھا۔",
      "کاشف: [separate the tense correction from the demand; focus “درست”] تھا... ماضی میں۔ اب بس ایک بات کہو— آنکھوں میں آنکھیں ڈال کر کہو، کہ تم نے درست کیا۔",
    ],
    provider: [
      "Eleven v3 · detailed open-ended cues · 5 turns · 2 voices",
      "کاشف: [measured, direct accusation] · [echoing the word as a challenge]+[quoting the memory clearly] · [correcting the tense, then becoming direct]",
      "دانش: [controlled correction, then a firm explanation] · [plain, unhurried assertion]",
      "",
      "Detailed tags carry textual actions, not a guessed emotion. Exact response remains an Urdu/voice listening test.",
    ],
    note:
      "No emotion is asserted beyond the words. The intimate «تم/تیرے» register, quotation, and past-tense hinge remain untouched.",
  },
  {
    id: "confession",
    number: "03",
    title: "The broken pen-box",
    urduTitle: "ٹوٹا ہوا قلمدان",
    relation: "Grandmother and granddaughter",
    arc: "last gift named → confession → invitation → forgiveness question → stated contrast",
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
      "دادی: [name the object, then let “آخری تحفہ” carry its stated weight] یہ قلمدان... تمہارے نانا کا آخری تحفہ تھا۔",
      "ماریہ: [accident → intention to hide → consequence; do not add crying] دادی... وہ مجھ سے گر گیا تھا۔ میں چھپانا چاہتی تھی، مگر جھوٹ بولتے ہوئے رات بھر نیند نہیں آئی۔",
      "دادی: [allow the confession to settle; then a simple invitation] ادھر آؤ۔",
      "ماریہ: [keep the repeated “آپ”; the question asks for reassurance] آپ... آپ مجھے معاف نہیں کریں گی نا؟",
      "دادی: [acknowledge the broken object, then make the stated contrast plainly] قلمدان تو ٹوٹ گیا بیٹا... مگر سچ بولنے کی ہمت سلامت رہی، اور وہ اس قلمدان سے کہیں بڑی چیز ہے۔",
    ],
    provider: [
      "Eleven v3 · detailed open-ended cues · 5 turns · 2 voices",
      "دادی: [quiet gravity, naming the object without accusation] · [short pause, then a simple invitation] · [warm and plain, making the contrast without preaching]",
      "ماریہ: [a careful confession in three steps] · [uncertain but restrained, keeping the repeated address]",
      "",
      "The detailed cues translate the rehearsal distinctions. No reaction sound, tears, punishment, or extra moral is introduced.",
    ],
    note:
      "No source words were changed. The turn audit found every turn already natural, age-appropriate, and register-consistent; refinement would have been activity for its own sake.",
  },
  {
    id: "emergency",
    number: "04",
    title: "Ammi, hospital",
    urduTitle: "امی، ہسپتال",
    relation: "Brother and sister · code-switched emergency",
    arc: "hospital fact and question → interruption → admission → plan and assurance",
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
      "حسن: [deliver the hospital fact before the question; keep the code-switch ordinary] Ammi کو hospital لے گئے ہیں... تمہارا فون کیوں بند تھا، رابعہ؟",
      "رابعہ: [answer first; “wait—” cuts that thought off as the news registers] Meeting میں تھی... wait— کیا کہا تم نے؟ Ammi hospital؟",
      "حسن: [report the doctor’s words; then the hesitation opens into the direct admission] Doctor کہہ رہے ہیں it's serious. میں... I can't handle this alone, رابعہ۔",
      "رابعہ: [repeat to organize herself, make the plan, then give the final assurance] ٹھیک ہے، ٹھیک ہے... I'm booking the next flight. تم بس وہیں رہو، please. میں آ رہی ہوں۔",
    ],
    provider: [
      "Eleven v3 · detailed open-ended cues · 4 turns · 2 voices",
      "حسن: [urgent but controlled, delivering the fact before the question] · [reporting the doctor, then hesitating before the admission]",
      "رابعہ: [the news interrupts the answer] · [organizing herself quickly, then making a plan]+[short pause, reassuring]",
      "",
      "Cutoff, hesitation, and assurance stay distinct. The tags add no swallowing, sobbing, or other audible event absent from the source.",
    ],
    note:
      "No source word was changed, added, or reordered; the wording was already natural spoken bilingual Urdu, so all four turns are direction-only and the clean view is byte-identical to the source.",
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
    line: "مجھے وہاں ڈر لگتا ہے۔",
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
    relation: "Two partners · a forced exit",
    line: "تھا... ماضی میں۔",
  },
  {
    id: "emergency",
    title: "Ammi, hospital",
    urduTitle: "امی، ہسپتال",
    relation: "Brother and sister · code-switched emergency",
    line: "ٹھیک ہے، ٹھیک ہے... I'm booking the next flight.",
  },
];
