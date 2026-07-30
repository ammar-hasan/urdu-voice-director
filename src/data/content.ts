export type Mode = "original" | "clean" | "directed" | "provider";

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
    id: "moral-correction",
    number: "01",
    title: "Mischief → realization",
    urduTitle: "شرارت سے سمجھ تک",
    relation: "Two children · gentle moral correction",
    arc: "caution → mischief → defense → reflection",
    original: [
      "احمد: ارے، یہاں تو کوئی بھی نہیں ہے۔",
      "احمد: اب امی کی چاکلیٹ کھا لیتا ہوں!",
      "فاطمہ: رُکو، رُکو!",
      "احمد: شش، کسی نے دیکھا ہی نہیں!",
      "فاطمہ: انسانوں نے شاید نہ دیکھا ہو، لیکن اللہ تعالیٰ ہمیں دیکھ رہے ہوتے ہیں۔",
      "احمد: یعنی اگر کوئی نہ بھی دیکھے، تب بھی اللہ دیکھ رہے ہوتے ہیں؟",
      "فاطمہ: بالکل۔",
    ],
    clean: [
      "احمد: ارے... یہاں تو کوئی بھی نہیں ہے۔",
      "احمد: اب امی کی چاکلیٹ کھا لیتا ہوں۔",
      "فاطمہ: رُکو، رُکو!",
      "احمد: شش... کسی نے دیکھا ہی نہیں!",
      "فاطمہ: انسانوں نے شاید نہ دیکھا ہو، لیکن اللہ تعالیٰ ہمیں دیکھ رہے ہیں۔",
      "احمد: یعنی اگر کوئی نہ بھی دیکھے، تب بھی اللہ دیکھ رہے ہیں؟",
      "فاطمہ: بالکل۔",
    ],
    directed: [
      "[آہستہ، محتاط انداز میں] احمد: ارے...",
      "[ایک مختصر سننے کا وقفہ]",
      "احمد: یہاں تو کوئی بھی نہیں ہے۔",
      "[شرارت بڑھتی ہوئی] احمد: اب امی کی چاکلیٹ کھا لیتا ہوں۔",
      "[اچانک روکتے ہوئے] فاطمہ: رُکو، رُکو!",
      "[چونک کر؛ آواز فوراً دبی ہوئی] احمد: شش...",
      "[دفاعی اعتماد واپس لاتے ہوئے] احمد: کسی نے دیکھا ہی نہیں!",
      "[نرمی مگر سنجیدگی سے] فاطمہ: انسانوں نے شاید نہ دیکھا ہو، لیکن اللہ تعالیٰ ہمیں دیکھ رہے ہیں۔",
      "[دفاع نرم پڑتا ہے؛ سوچ کر سچا سوال] احمد: یعنی اگر کوئی نہ بھی دیکھے، تب بھی اللہ دیکھ رہے ہیں؟",
      "[سادہ، پُر یقین] فاطمہ: بالکل۔",
    ],
    provider: [
      "Canonical utterance",
      "یعنی اگر کوئی نہ بھی دیکھے، تب بھی اللہ دیکھ رہے ہیں؟",
      "",
      "Separate instruction · locale unresolved",
      "Natural conversational Urdu. Let the inference form before the sincere question. Restrained, not theatrical.",
    ],
    note:
      "The seven source turns stay intact. Performance carries the mischief and realization; the skill adds no motive, sermon, or honorific.",
  },
  {
    id: "suppressed-anger",
    number: "02",
    title: "Anger held in",
    urduTitle: "دبی ہوئی ناراضی",
    relation: "Two friends · trust has been broken",
    arc: "disbelief → weakening excuse → precise hurt",
    original: [
      "سارہ: تم نے سب کو بتا دیا؟",
      "حنا: ہاں، مجھے لگا کوئی مسئلہ نہیں ہوگا۔",
      "سارہ: کوئی مسئلہ نہیں ہوگا؟ میں نے تم پر بھروسا کیا تھا۔",
    ],
    clean: [
      "سارہ: تم نے سب کو بتا دیا؟",
      "حنا: ہاں... مجھے لگا، کوئی مسئلہ نہیں ہوگا۔",
      "سارہ: کوئی مسئلہ نہیں ہوگا؟ میں نے تم پر بھروسا کیا تھا۔",
    ],
    directed: [
      "[دبی آواز، تصدیق چاہتی ہے] سارہ: تم نے سب کو بتا دیا؟",
      "[اعتماد کم پڑتا ہوا] حنا: ہاں... مجھے لگا، کوئی مسئلہ نہیں ہوگا۔",
      "[ناراضی قابو میں؛ زور «بھروسا» پر] سارہ: کوئی مسئلہ نہیں ہوگا؟ میں نے تم پر بھروسا کیا تھا۔",
    ],
    provider: [
      "Portable synthesis plan",
      "Turn 1 · quiet disbelief · no extra pause",
      "Turn 2 · confidence weakens after «ہاں»",
      "Turn 3 · controlled intensity · emphasize «بھروسا»",
      "",
      "For plain engines: send clean turns only. Keep these notes outside the spoken field.",
    ],
    note:
      "Anger is not automatically shouting. The short final line already carries the injury.",
  },
  {
    id: "code-switching",
    number: "03",
    title: "Lived-in code-switching",
    urduTitle: "فطری اردو–انگریزی",
    relation: "School friends · everyday technology",
    arc: "routine check → frustration → practical response",
    original: [
      "علی: Did you submit the assignment?",
      "حسن: نہیں، website کام نہیں کر رہی تھی۔",
      "علی: You should email the teacher.",
    ],
    clean: [
      "علی: Did you submit the assignment?",
      "حسن: نہیں، website چل نہیں رہی تھی۔",
      "علی: You should email the teacher.",
    ],
    directed: [
      "[معمول کی بات] علی: Did you submit the assignment?",
      "[ہلکی جھنجھلاہٹ] حسن: نہیں، website چل نہیں رہی تھی۔",
      "[سادہ عملی مشورہ] علی: You should email the teacher.",
    ],
    provider: [
      "Pronunciation test set",
      "اسائنمنٹ / assignment",
      "ویب سائٹ / website",
      "ای میل / email",
      "",
      "Keep the caption spelling natural. Test Latin and Urdu-script variants with the actual voice.",
    ],
    note:
      "Full-turn switching is character evidence. It is not erased for synthesis convenience, and the teacher’s gender is not guessed.",
  },
  {
    id: "retained-key",
    number: "04",
    title: "Memory without invention",
    urduTitle: "یاد، مگر بناوٹ کے بغیر",
    relation: "Two adults · returning to a former family home",
    arc: "recognition → changed reality → restrained disclosure",
    original: [
      "نسرین: یہ چابی اب بھی اسی دروازے میں لگتی ہے؟",
      "فیاض: دروازہ تو بدل گیا۔ چابی میں نے رکھ لی۔",
    ],
    clean: [
      "نسرین: یہ چابی اب بھی اسی دروازے میں لگتی ہے؟",
      "فیاض: دروازہ تو بدل گیا... چابی میں نے رکھ لی۔",
    ],
    directed: [
      "نسرین: یہ چابی اب بھی اسی دروازے میں لگتی ہے؟",
      "فیاض: [دروازے کی تبدیلی کے بعد مختصر توقف؛ اگلی بات سادہ] دروازہ تو بدل گیا...",
      "فیاض: چابی میں نے رکھ لی۔",
    ],
    provider: [
      "Context · non-spoken",
      "They are revisiting a former family home. The key and changed door are the only authorized anchors.",
      "",
      "Canonical utterance",
      "دروازہ تو بدل گیا... چابی میں نے رکھ لی۔",
      "",
      "Do not add",
      "Partition, exile, symbolic meaning, grief, or a motive for keeping the key.",
    ],
    note:
      "The scene becomes present through the key, changed door, and sequence already in the source—not invented nostalgia or symbolism.",
  },
];

export const modes: { id: Mode; label: string; urdu: string }[] = [
  { id: "original", label: "Original", urdu: "اصل" },
  { id: "clean", label: "Clean", urdu: "صاف" },
  { id: "directed", label: "Directed", urdu: "ہدایت کے ساتھ" },
  { id: "provider", label: "Provider", urdu: "ٹی ٹی ایس" },
];

export const steps = [
  ["۱", "Read the scene", "منظر سمجھیں", "Who wants what—and what changes?"],
  ["۲", "Protect meaning", "معنی محفوظ رکھیں", "Facts, identity, age, and relationship stay intact."],
  ["۳", "Recover the living scene", "زندہ منظر پائیں", "Viewpoint, supported anchors, relationship, change, and the unspoken."],
  ["۴", "Find the social voice", "کردار کی زبان", "Let address, register, age, and code-switching belong to the person."],
  ["۵", "Refine for the ear", "بول چال نکھاریں", "Turn written Urdu into speakable thought units."],
  ["۶", "Direct and adapt", "ادائیگی اور صورت", "Map beats, then use only controls the exact provider supports."],
  ["۷", "Listen in Urdu", "سن کر پرکھیں", "Native listening—not text confidence—closes the loop."],
];

export const useCases = [
  {
    marker: "کتاب",
    title: "Audiobooks & podcasts",
    text: "Shape narration-adjacent dialogue without smuggling narration into what characters say.",
  },
  {
    marker: "بچہ",
    title: "Children & education",
    text: "Keep curiosity concrete, progression gradual, and moral guidance warm rather than preachy.",
  },
  {
    marker: "کھیل",
    title: "Animation & games",
    text: "Give each character a stable age, register, confidence, and relationship-specific rhythm.",
  },
  {
    marker: "آواز",
    title: "TTS & accessibility",
    text: "Preserve a clean transcript while producing safe, testable provider adaptations.",
  },
];

export const providers = [
  {
    group: "Expressive inline",
    name: "Eleven v3",
    status: "Urdu documented",
    detail: "Sparse audible tags; always keep a tag-free caption.",
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
    id: "mischief",
    title: "Mischief, caught",
    urduTitle: "شرارت پکڑی گئی",
    relation: "Two children · a missing chocolate",
    line: "شش... کسی نے دیکھا ہی نہیں!",
  },
  {
    id: "suppressed-anger",
    title: "Anger held in",
    urduTitle: "دبی ہوئی ناراضی",
    relation: "Two friends · a broken confidence",
    line: "میں نے تم پر بھروسا کیا تھا۔",
  },
  {
    id: "code-switching",
    title: "Lived-in code-switching",
    urduTitle: "فطری اردو–انگریزی",
    relation: "School friends · a broken website",
    line: "نہیں، website چل نہیں رہی تھی۔",
  },
];
