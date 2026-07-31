export type Mode = "original" | "clean" | "directed" | "provider";

/** Bump when public/audio/*.mp3 are regenerated — busts stale cached clips. */
export const AUDIO_VERSION = "3";

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
    relation: "Premchand · father and son · a winter night",
    arc: "resignation → defensive hardness → reproach → exhausted plea → fear confessed",
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
      "[rehearsal note: سرد رات، آگ کے پاس؛ دونوں آوازیں دبی اور معمول کی بات چیت جیسی — کوئی ہنگامہ نہیں]",
      "گھیسو: [تھکا ہوا، فیصلہ پہلے سے سوچا ہوا؛ بغیر جلال] معلوم ہوتا ہے بچے گی نہیں۔ [بیٹے کی طرف، ہلکی سی عملی ہدایت] سارا دن تڑپتے ہو گیا، جا دیکھ تو آ۔",
      "مادھو: [بے تاثر، شکایت بھرا لہجہ؛ نہ غصہ، نہ جلدی] مرنا ہی ہے تو جلدی مر کیوں نہیں جاتی؟ [بات ختم کرنے کے انداز میں] دیکھ کر کیا آؤں۔",
      "گھیسو: [ڈانٹ، مگر دبا ہوا؛ آواز نیچی، الفاظ سخت] تو بڑا بیدرد ہے بے!",
      "[سنجیدہ اور ٹھہرا ہوا؛ ہر لفظ کو وزن دے کر] سال بھر جس کے ساتھ جندگانی کا سکھ بھوگا، اسی کے ساتھ اتنی بے وفائی۔",
      "مادھو: [فوری بچاؤ، بغیر رکے؛ وضاحت پہلے سے تیار] تو مجھ سے اس کا تڑپنا اور ہاتھ پاؤں پٹکنا نہیں دیکھا جاتا۔",
      "گھیسو: [آخری بار زور دے کر] جا کر دیکھ تو، کیا حالت ہے اس کی... [مصدری خاموشی کے بعد؛ پیسے کی بات سادہ حقیقت کی طرح] یہاں تو اوجھا بھی ایک روپیہ مانگتا ہے۔",
      "مادھو: [اعتراف، رک کر] مجھے وہاں ڈر لگتا ہے۔",
      "[یاد میں؛ رفتار ٹھہر جاتی ہے] میری عورت جب مری تھی، تو میں تین دن تک اس کے پاس سے ہلا بھی نہیں۔",
      "[آہستہ، اپنی دلیل پوری یقین سے مکمل کرتا ہوا] وہ مجھے دیکھ لے گی تو کھل کر ہاتھ پاؤں بھی نہ پٹک سکے گی۔",
    ],
    provider: [
      "Eleven v3 adapter · 6 turns · 2 voices",
      "گھیسو: [sighs] · [reproachfully]+[somber] · [urging]+[resigned]",
      "مادھو: [flatly] · [defensive] · [hesitant]+[quietly]",
      "",
      "Every turn directed, one cue per beat; [sighs] is core-documented, the rest are delivery-state tags ElevenLabs marks experimental — listening test required. Spoken words identical to the clean view.",
    ],
    note:
      "Canonical text: zero word changes — all six turns, both speakers, turn order, and the source's load-bearing ellipsis are preserved verbatim.",
  },
  {
    id: "betrayal",
    number: "02",
    title: "Twenty years, one sitting",
    urduTitle: "بیس برس، ایک نشست",
    relation: "Two partners · a forced exit",
    arc: "accusation → rehearsed defense → memory quoted → quiet admission → the demand",
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
      "[Scene note (non-spoken): دانش نے کاشف کو کمپنی سے نکلوا دیا ہے؛ یہ پہلا آمنا سامنا ہے۔ کاشف کا غصہ دبا ہوا ہے — کہیں بلند آواز نہیں۔]",
      "کاشف: [دبے ہوئے غصے میں، شکایت نہیں — حتمی بیان] بیس برس کی دوستی تھی ہماری، دانش... [مختصر قدرتی وقفہ؛ نام کے بعد بات تول کر] اور تم نے ایک ہی نشست میں اسے بیچ ڈالا؟",
      "دانش: [پہلا لفظ سیدھی تردید؛ باقی جملہ طے شدہ جواب کی طرح، بغیر معذرت] بیچا نہیں... کمپنی بچانی تھی، اور تمہاری جگہ کاٹنی پڑی۔ [بات ختم کرنے کے انداز میں] مجبوری تھی۔",
      "کاشف: [دانش کا لفظ واپس پھینکتا ہے؛ حیرانی نہیں، جانچ] مجبوری؟",
      "[ایک لمحہ رک کر؛ اب آواز میں یاد آ جاتی ہے] ...مجھے آج بھی وہ رات یاد ہے جب تم نے میرے کندھے پر ہاتھ رکھ کر کہا تھا—",
      "[وہ پرانا جملہ اسی پرانی قربت میں دہراتا ہے] کاشف، تیرے بغیر یہ سب کچھ بھی نہیں۔",
      "دانش: [دفاع پہلی بار نہیں اٹھاتا؛ آہستہ، سیدھا] اور وہ سچ تھا۔",
      "کاشف: [لفظ اٹھا کر ماضی میں بند کرتا ہے] تھا... ماضی میں۔ [اب آہستہ اور بالکل واضح؛ غصہ دبا ہی رہتا ہے] اب بس ایک بات کہو— آنکھوں میں آنکھیں ڈال کر کہو، کہ تم نے درست کیا۔",
    ],
    provider: [
      "Eleven v3 adapter · 5 turns · 2 voices",
      "کاشف: [quietly] — the accusation, held in (turns 1, 5)",
      "کاشف: [hesitates] — before the memory returns (turn 3)",
      "",
      "Three documented tags across five turns; دانش's turns trust wording alone. The «—» before the quoted promise must read as quotation, not a glitch.",
    ],
    note:
      "The «تُو» in the quoted promise (تیرے بغیر) was deliberately not normalized to «تم»; that register shift is the scene's core evidence of the lost intimacy.",
  },
  {
    id: "confession",
    number: "03",
    title: "The broken pen-box",
    urduTitle: "ٹوٹا ہوا قلمدان",
    relation: "Grandmother and granddaughter",
    arc: "quiet grief → costly confession → calm invitation → fear → warm pardon",
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
      "دادی: [quietly; the memory in the words — grief and gravity, not accusation] یہ قلمدان... [brief beat; lets the object be named before its weight] تمہارے نانا کا آخری تحفہ تھا۔",
      "ماریہ: [reluctant; the confession costs her] دادی... [the accident comes out quickly, small] وہ مجھ سے گر گیا تھا۔",
      "[harder to say; shame, not excuses] میں چھپانا چاہتی تھی، [the turn: why she is really here] مگر جھوٹ بولتے ہوئے رات بھر نیند نہیں آئی۔",
      "دادی: [a short silence first; then low, calm — an invitation, not anger] ادھر آؤ۔",
      "ماریہ: [small voice; fear already in the stammer, do not add tears] آپ... آپ مجھے معاف نہیں کریں گی نا؟",
      "دادی: [matter-of-fact about the loss; acknowledges it without dwelling] قلمدان تو ٹوٹ گیا بیٹا...",
      "[reflective pause; the thought settles] [warm, plain certainty — not a sermon] مگر سچ بولنے کی ہمت سلامت رہی، اور وہ اس قلمدان سے کہیں بڑی چیز ہے۔",
    ],
    provider: [
      "Eleven v3 adapter · 5 turns · 2 voices",
      "دادی: [quietly] … [calmly] (turns 1, 5)",
      "ماریہ: [hesitates] … [uncertain] (turns 2, 4)",
      "",
      "Four documented tags across five turns; «ادھر آؤ۔» needs none — its whole meaning is in the wording. Remove any tag the selected voice overacts.",
    ],
    note:
      "No source words were changed. The turn audit found every turn already natural, age-appropriate, and register-consistent; refinement would have been activity for its own sake.",
  },
  {
    id: "emergency",
    number: "04",
    title: "Ammi, hospital",
    urduTitle: "امی، ہسپتال",
    relation: "Brother and sister · code-switched panic",
    arc: "composed alarm → mid-turn shock → helplessness admitted → control taken",
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
      "حسن: [weary; has been trying her phone; flat with shock, not shouting] Ammi کو hospital لے گئے ہیں... [let the fact land; then the held-back reproach surfaces — hurt, not accusation] تمہارا فون کیوں بند تھا، رابعہ؟",
      "رابعہ: [still in work mode, explaining automatically] Meeting میں تھی... [the words catch up with her; abrupt cutoff] wait— [disbelief, checking she heard right] کیا کہا تم نے؟ [quieter; the fact settling in] Ammi hospital؟",
      "حسن: [relaying the doctor's words, trying to stay steady] Doctor کہہ رہے ہیں it's serious. [reluctant beat; the admission costs him — voice lowers, does not break into sobbing] میں... I can't handle this alone, رابعہ۔",
      "رابعہ: [steadying him and herself; calm repetition] ٹھیک ہے، ٹھیک ہے... [decision made; takes charge] I'm booking the next flight.",
      "[gentle directive] تم بس وہیں رہو، please. [firm, warm promise] میں آ رہی ہوں۔",
    ],
    provider: [
      "Eleven v3 adapter · 4 turns · 2 voices",
      "حسن: [sighs] (turn 1) · [gulps] — the admission costs him (turn 3)",
      "رابعہ: [appalled] — the fact lands (turn 2) · [warmly] — the promise (turn 4)",
      "",
      "One documented tag per turn, placed at the beat it changes; the «wait—» cutoff and the code-switches ride the source's own punctuation. No «in English» markers — the switching itself is the characterization.",
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
    id: "kafan",
    title: "The shroud, unread",
    urduTitle: "کفن",
    relation: "Premchand · father and son · a winter night",
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
    relation: "Brother and sister · code-switched panic",
    line: "ٹھیک ہے، ٹھیک ہے... I'm booking the next flight.",
  },
];
