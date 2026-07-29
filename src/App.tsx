import { useMemo, useState } from "react";

type Mode = "original" | "clean" | "directed" | "provider";

type Example = {
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

const examples: Example[] = [
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
      "عمر: Did you submit the assignment?",
      "حسن: نہیں، website کام نہیں کر رہی تھی۔",
      "عمر: You should email the teacher.",
    ],
    clean: [
      "عمر: Did you submit the assignment?",
      "حسن: نہیں، website چل نہیں رہی تھی۔",
      "عمر: You should email the teacher.",
    ],
    directed: [
      "[معمول کی بات] عمر: Did you submit the assignment?",
      "[ہلکی جھنجھلاہٹ] حسن: نہیں، website چل نہیں رہی تھی۔",
      "[سادہ عملی مشورہ] عمر: You should email the teacher.",
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
];

const modes: { id: Mode; label: string; urdu: string }[] = [
  { id: "original", label: "Original", urdu: "اصل" },
  { id: "clean", label: "Clean", urdu: "صاف" },
  { id: "directed", label: "Directed", urdu: "ہدایت کے ساتھ" },
  { id: "provider", label: "Provider", urdu: "ٹی ٹی ایس" },
];

const steps = [
  ["01", "Read the scene", "منظر سمجھیں", "Who wants what—and what changes?"],
  ["02", "Protect meaning", "معنی محفوظ رکھیں", "Facts, identity, age, and relationship stay intact."],
  ["03", "Refine the words", "بول چال نکھاریں", "Turn written Urdu into speakable thought units."],
  ["04", "Map the beats", "جذباتی موڑ", "Name hesitation, interruption, realization, and intent."],
  ["05", "Adapt carefully", "موزوں صورت", "Translate direction only into controls a provider supports."],
  ["06", "Listen in Urdu", "سن کر پرکھیں", "Native listening—not text confidence—closes the loop."],
];

const useCases = [
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

const providers = [
  {
    group: "Expressive inline",
    name: "Eleven v3",
    status: "Urdu documented",
    detail: "Sparse audible tags; always keep a tag-free caption.",
    tone: "jade",
  },
  {
    group: "Prompt-steered",
    name: "OpenAI · Gemini-TTS",
    status: "Separate instruction",
    detail: "Spoken Urdu stays apart from tone, pace, and performance instructions.",
    tone: "saffron",
  },
  {
    group: "Structural controls",
    name: "Azure · Chirp 3",
    status: "Locale-specific",
    detail: "Use only documented pause, SSML, and prosody controls for the selected voice.",
    tone: "plum",
  },
  {
    group: "Conservative local",
    name: "Piper Urdu",
    status: "Plain utterances",
    detail: "Direction remains external; segmentation and careful text do the work.",
    tone: "ink",
  },
];

function App() {
  const [mode, setMode] = useState<Mode>("clean");
  const [activeExample, setActiveExample] = useState(0);
  const [copied, setCopied] = useState(false);
  const example = examples[activeExample];
  const displayLines = useMemo(() => example[mode], [example, mode]);

  const copyInstall = async () => {
    const command = "npx skills add ammar-hasan/urdu-voice-director";
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Urdu Voice Director home">
          <span className="brand-mark" aria-hidden="true">
            ا
          </span>
          <span>
            <strong>Urdu Voice Director</strong>
            <small>اردو وائس ڈائریکٹر</small>
          </span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#method">Method</a>
          <a href="#lab">Examples</a>
          <a href="#providers">Providers</a>
          <a href="#install">Install</a>
        </nav>
        <a
          className="github-link"
          href="https://github.com/ammar-hasan/urdu-voice-director"
        >
          View on GitHub <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="bismillah" lang="ur" dir="rtl">
              بسم اللہ الرحمٰن الرحیم
            </p>
            <p className="eyebrow">LANGUAGE · SUBTEXT · PERFORMANCE</p>
            <h1>
              Write the line.
              <br />
              <em>Direct the life inside it.</em>
            </h1>
            <p className="hero-lede">
              A standalone agent skill for refining Urdu dialogue into natural,
              culturally aware spoken performance—without letting TTS markup
              contaminate the words.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#lab">
                Enter the dialogue lab
              </a>
              <a className="text-link" href="#install">
                Install v0.1.1 <span aria-hidden="true">↓</span>
              </a>
            </div>
            <dl className="hero-stats">
              <div>
                <dt>3+</dt>
                <dd>separate outputs</dd>
              </div>
              <div>
                <dt>111</dt>
                <dd>eval specifications</dd>
              </div>
              <div>
                <dt>0</dt>
                <dd>runtime dependencies</dd>
              </div>
            </dl>
          </div>

          <div className="hero-language" lang="ur" dir="rtl">
            <div className="script-field" aria-hidden="true">
              <span>ز</span>
              <span>ن</span>
              <span>گ</span>
              <span>ی</span>
              <span>ا</span>
              <span>و</span>
              <span>ر</span>
              <span>د</span>
              <span>و</span>
            </div>
            <p className="urdu-kicker">لکھے ہوئے لفظ سے</p>
            <h2>جیتی جاگتی آواز تک</h2>
            <div className="utterance-card">
              <span className="speaker">احمد</span>
              <p>یعنی اگر کوئی نہ بھی دیکھے، تب بھی اللہ دیکھ رہے ہیں؟</p>
              <div className="beat-line">
                <span>احساس</span>
                <i aria-hidden="true"></i>
                <span>وقفہ</span>
                <i aria-hidden="true"></i>
                <span>سچا سوال</span>
              </div>
            </div>
            <div className="wave" aria-label="Speech rhythm illustration">
              {[18, 34, 52, 28, 68, 43, 24, 58, 36, 74, 48, 21, 39].map(
                (height, index) => (
                  <span key={index} style={{ height }} />
                ),
              )}
            </div>
          </div>
        </section>

        <aside className="boundary-note">
          <strong>Not a TTS engine.</strong>
          <span aria-hidden="true">•</span>
          <span>Not an API client.</span>
          <span aria-hidden="true">•</span>
          <span>Not tied to any video tool.</span>
          <span className="boundary-urdu" lang="ur" dir="rtl">
            یہ زبان، لہجے اور ادائیگی کی مہارت ہے۔
          </span>
        </aside>

        <section className="distinction section">
          <div className="section-heading">
            <p className="eyebrow">ONE LINE · TWO OPERATIONS</p>
            <h2>Refine what is said. Direct how it lives.</h2>
            <p>
              These operations are related, but never interchangeable. A line
              may need either, both, or neither.
            </p>
          </div>
          <div className="distinction-grid">
            <article className="principle-card refinement-card">
              <div className="card-index">A</div>
              <p className="card-label">DIALOGUE REFINEMENT</p>
              <h3 lang="ur" dir="rtl">
                کردار کیا کہتا ہے؟
              </h3>
              <div className="before-after">
                <div>
                  <span>Original</span>
                  <p lang="ur" dir="rtl">
                    چونکہ آپ نے پہلے اطلاع نہیں دی، اس لیے وقت پر پہنچنا ممکن نہیں تھا۔
                  </p>
                </div>
                <div className="after">
                  <span>Refined</span>
                  <p lang="ur" dir="rtl">
                    آپ نے پہلے بتایا ہی نہیں تھا۔ وقت پر پہنچنا کیسے ممکن تھا؟
                  </p>
                </div>
              </div>
              <p className="card-foot">
                Stiff written Urdu becomes believable speech while meaning and
                identity remain protected.
              </p>
            </article>

            <article className="principle-card direction-card">
              <div className="card-index">B</div>
              <p className="card-label">PERFORMANCE DIRECTION</p>
              <h3 lang="ur" dir="rtl">
                کردار کیسے کہتا ہے؟
              </h3>
              <div className="direction-specimen">
                <span>[respectful, with a clear note of complaint]</span>
                <p lang="ur" dir="rtl">
                  آپ نے پہلے بتایا ہی نہیں تھا۔ وقت پر پہنچنا کیسے ممکن تھا؟
                </p>
              </div>
              <p className="card-foot">
                Short, actionable cues expose subtext without turning ordinary
                conversation into theatre.
              </p>
            </article>
          </div>
        </section>

        <section className="method section" id="method">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">SCENE-FIRST WORKFLOW</p>
              <h2>Understand before you edit.</h2>
            </div>
            <p>
              A native reader silently recovers hesitation, respect, intent,
              and emotional change. The skill makes that reasoning explicit.
            </p>
          </div>
          <div className="steps">
            {steps.map(([number, title, urdu, text]) => (
              <article className="step" key={number}>
                <span className="step-number">{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p className="step-urdu" lang="ur" dir="rtl">
                    {urdu}
                  </p>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="lab section" id="lab">
          <div className="section-heading lab-heading">
            <div>
              <p className="eyebrow">INTERACTIVE DIALOGUE LAB</p>
              <h2>One scene. Four useful views.</h2>
            </div>
            <p>
              Compare the source, caption-safe Urdu, rehearsal direction, and
              provider adaptation. The clean version remains canonical.
            </p>
          </div>

          <div className="lab-shell">
            <div className="example-picker" aria-label="Choose dialogue example">
              {examples.map((item, index) => (
                <button
                  className={index === activeExample ? "active" : ""}
                  key={item.id}
                  onClick={() => setActiveExample(index)}
                  aria-pressed={index === activeExample}
                >
                  <span>{item.number}</span>
                  <strong>{item.title}</strong>
                  <small lang="ur" dir="rtl">
                    {item.urduTitle}
                  </small>
                </button>
              ))}
            </div>

            <div className="lab-stage">
              <div className="lab-meta">
                <div>
                  <span className="relation">{example.relation}</span>
                  <h3>{example.title}</h3>
                  <p lang="ur" dir="rtl">
                    {example.urduTitle}
                  </p>
                </div>
                <div className="arc">
                  <span>EMOTIONAL ARC</span>
                  <p>{example.arc}</p>
                </div>
              </div>

              <div className="mode-tabs" role="tablist" aria-label="Output mode">
                {modes.map((item) => (
                  <button
                    role="tab"
                    aria-selected={mode === item.id}
                    className={mode === item.id ? "active" : ""}
                    onClick={() => setMode(item.id)}
                    key={item.id}
                  >
                    <span>{item.label}</span>
                    <small lang="ur" dir="rtl">
                      {item.urdu}
                    </small>
                  </button>
                ))}
              </div>

              <div
                className={`dialogue-output ${mode === "provider" ? "provider-output" : ""}`}
                role="tabpanel"
                aria-live="polite"
              >
                <div className="output-ruler">
                  <span>{mode.toUpperCase()} OUTPUT</span>
                  <span>{mode === "clean" ? "CAPTION SAFE" : "NON-CANONICAL VIEW"}</span>
                </div>
                {displayLines.map((line, index) =>
                  line ? (
                    <p
                      key={`${example.id}-${mode}-${index}`}
                      lang={mode === "provider" && /^[A-Za-z]/.test(line) ? "en" : "ur"}
                      dir={mode === "provider" && /^[A-Za-z]/.test(line) ? "ltr" : "rtl"}
                    >
                      {line}
                    </p>
                  ) : (
                    <div className="output-space" key={`space-${index}`} />
                  ),
                )}
              </div>
              <p className="lab-note">
                <span>Restraint note</span>
                {example.note}
              </p>
            </div>
          </div>
        </section>

        <section className="outputs section">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">MULTIPLE OUTPUTS · ONE SOURCE</p>
              <h2>Directions never pollute captions.</h2>
            </div>
            <p>
              Provider formats are lossy adapters. They are generated from—not
              confused with—the linguistic source of truth.
            </p>
          </div>
          <div className="output-stack">
            <article>
              <span className="stack-number">01</span>
              <div>
                <p className="stack-type">CANONICAL</p>
                <h3>Clean spoken Urdu</h3>
                <p>Only words meant to be heard. Safe for captions and transcripts.</p>
              </div>
              <strong lang="ur" dir="rtl">
                صاف مکالمہ
              </strong>
            </article>
            <article>
              <span className="stack-number">02</span>
              <div>
                <p className="stack-type">HUMAN-READABLE</p>
                <h3>Directed rehearsal script</h3>
                <p>Restrained, local cues for beats and playable intention.</p>
              </div>
              <strong lang="ur" dir="rtl">
                ادائیگی کی ہدایت
              </strong>
            </article>
            <article>
              <span className="stack-number">03</span>
              <div>
                <p className="stack-type">PORTABLE</p>
                <h3>Synthesis plan</h3>
                <p>Speaker, text, pause, emphasis, and pronunciation kept separate.</p>
              </div>
              <strong lang="ur" dir="rtl">
                آواز کا نقشہ
              </strong>
            </article>
            <article>
              <span className="stack-number">04</span>
              <div>
                <p className="stack-type">DISPOSABLE ADAPTER</p>
                <h3>Provider-ready output</h3>
                <p>Only controls documented for the exact model and locale.</p>
              </div>
              <strong lang="ur" dir="rtl">
                مخصوص صورت
              </strong>
            </article>
          </div>
        </section>

        <section className="use-cases section">
          <div className="section-heading">
            <p className="eyebrow">BUILT FOR URDU SPEECH—NOT ONE TOOL</p>
            <h2>Use it wherever dialogue needs to sound lived.</h2>
          </div>
          <div className="use-grid">
            {useCases.map((item) => (
              <article key={item.title}>
                <span lang="ur" dir="rtl">
                  {item.marker}
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="providers section" id="providers">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">PROVIDER-AWARE · PROVIDER-INDEPENDENT</p>
              <h2>Capability before syntax.</h2>
            </div>
            <p>
              A company supporting Urdu does not mean every one of its models
              supports Urdu—or the same direction controls.
            </p>
          </div>
          <div className="provider-grid">
            {providers.map((item) => (
              <article className={`provider-card ${item.tone}`} key={item.name}>
                <p>{item.group}</p>
                <h3>{item.name}</h3>
                <span>{item.status}</span>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
          <div className="unsupported-note">
            <span>HONESTY OVER PAYLOADS</span>
            <p>
              If official Urdu support is absent, the skill withholds the
              adapter and still returns clean, portable dialogue. It never
              disguises Arabic or Hindi support as Urdu support.
            </p>
          </div>
        </section>

        <section className="prompts section">
          <div className="section-heading">
            <p className="eyebrow">USAGE PATTERNS</p>
            <h2>Ask in the language of your real task.</h2>
          </div>
          <div className="prompt-list">
            <article>
              <span>01</span>
              <p>
                “Use <code>$urdu-voice-director</code> to make this children’s
                dialogue sound natural without changing the lesson.”
              </p>
            </article>
            <article>
              <span>02</span>
              <p>
                “Convert this Roman Urdu to conversational Urdu script and flag
                only ambiguities that change the scene.”
              </p>
            </article>
            <article>
              <span>03</span>
              <p>
                “Prepare clean captions, a directed script, and an Eleven v3
                adapter. Keep all tags out of the captions.”
              </p>
            </article>
            <article>
              <span>04</span>
              <p>
                “Do not rewrite the words. Mark hesitation, interruption, and
                the change from defensiveness to sincere curiosity.”
              </p>
            </article>
          </div>
        </section>

        <section className="evaluation section">
          <div className="evaluation-copy">
            <p className="eyebrow">CONFIDENCE REQUIRES LISTENING</p>
            <h2>Text review finds the line. Native listening proves the voice.</h2>
            <p>
              The evaluation framework scores meaning, naturalness, character,
              age, relationship, emotional progression, pauses, restraint,
              culture, pronunciation, TTS suitability, caption cleanliness,
              and narration discipline.
            </p>
            <a
              className="text-link light-link"
              href="https://github.com/ammar-hasan/urdu-voice-director/blob/main/skills/urdu-voice-director/evals/human-listening-protocol.md"
            >
              Read the listening protocol <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="eval-figure">
            <div className="eval-ring">
              <strong>111</strong>
              <span>SPECIFICATIONS · NOT AUDIO RESULTS</span>
            </div>
            <dl>
              <div>
                <dt>37</dt>
                <dd>dialogue cases</dd>
              </div>
              <div>
                <dt>29</dt>
                <dd>provider contracts</dd>
              </div>
              <div>
                <dt>45</dt>
                <dd>regression guards</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="install section" id="install">
          <div className="install-copy">
            <p className="eyebrow">INSTALL THE STANDALONE SKILL</p>
            <h2>One command. Any supported agent.</h2>
            <p>
              The open <code>skills</code> CLI discovers the skill from this
              repository and configures it for Codex, Claude Code, Cursor, and
              other supported agents. No permanent CLI installation is needed.
            </p>
            <ol>
              <li>
                <span>1</span> Run the install command
              </li>
              <li>
                <span>2</span> Choose your agent and scope
              </li>
              <li>
                <span>3</span> Start with <code>$urdu-voice-director</code>
              </li>
            </ol>
          </div>
          <div className="code-panel">
            <div className="code-bar">
              <span>Terminal</span>
              <button onClick={copyInstall}>{copied ? "Copied" : "Copy"}</button>
            </div>
            <pre>
              <code>
                <span className="comment"># Interactive install · recommended</span>
                {"\n"}npx skills add ammar-hasan/
                <br />
                {"  "}urdu-voice-director
              </code>
            </pre>
            <p>
              For a global, non-interactive Codex install, add{" "}
              <span>
                --skill urdu-voice-director -g -a codex -y
              </span>
              . Then ask:{" "}
              <span>
                Use $urdu-voice-director to refine this dialogue for natural
                speech.
              </span>
            </p>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <span className="brand-mark" aria-hidden="true">
            ا
          </span>
          <div>
            <strong>Urdu Voice Director</strong>
            <p lang="ur" dir="rtl">
              لفظ وہی، ادائیگی زندہ۔
            </p>
          </div>
        </div>
        <div className="footer-links">
          <a href="https://github.com/ammar-hasan/urdu-voice-director">
            GitHub
          </a>
          <a href="https://github.com/ammar-hasan/urdu-voice-director/blob/main/skills/urdu-voice-director/SKILL.md">
            Skill
          </a>
          <a href="https://github.com/ammar-hasan/urdu-voice-director/tree/main/skills/urdu-voice-director/examples">
            Examples
          </a>
          <a href="https://github.com/ammar-hasan/urdu-voice-director/tree/main/skills/urdu-voice-director/evals">
            Evals
          </a>
        </div>
        <p className="copyright">Version 0.1.1 · Unvalidated beta · Built for the ear.</p>
      </footer>
    </div>
  );
}

export default App;
