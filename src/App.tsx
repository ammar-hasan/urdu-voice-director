import { useMemo, useState } from "react";
import AudioPlayer from "./components/AudioPlayer";
import Chapter from "./components/Chapter";
import Reveal from "./components/Reveal";
import {
  audioScenes,
  examples,
  modes,
  providers,
  steps,
  useCases,
  type Mode,
} from "./data/content";

const INSTALL_COMMAND = "npx skills add ammar-hasan/urdu-voice-director";

function App() {
  const [mode, setMode] = useState<Mode>("clean");
  const [activeExample, setActiveExample] = useState(0);
  const [copied, setCopied] = useState(false);
  const example = examples[activeExample];
  const displayLines = useMemo(() => example[mode], [example, mode]);

  const copyInstall = async () => {
    try {
      await navigator.clipboard.writeText(INSTALL_COMMAND);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="site-shell">
      <div className="grain" aria-hidden="true" />

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
          <a href="#craft">Craft</a>
          <a href="#listen">Listen</a>
          <a href="#lab">Lab</a>
          <a href="#method">Method</a>
          <a href="#install">Install</a>
        </nav>
        <a
          className="github-link"
          href="https://github.com/ammar-hasan/urdu-voice-director"
        >
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="top">
        {/* ——— Overture ——— */}
        <section className="hero">
          <div className="hero-copy">
            <p className="bismillah" lang="ur" dir="rtl">
              بسم اللہ الرحمٰن الرحیم
            </p>
            <p className="eyebrow">AN AGENT SKILL FOR URDU SPEECH</p>
            <h1>
              Written Urdu in.
              <br />
              <em>Performance-ready Urdu out.</em>
            </h1>
            <p className="hero-lede">
              Urdu Voice Director reads dialogue from inside its literary and
              social world, refines it for the ear, and writes the direction
              for how each line should be spoken. It never touches a TTS API —
              it hands you clean captions, rehearsal direction, and
              provider-ready adapters, and every word stays sacred.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#listen">
                <span lang="ur" dir="rtl">
                  فرق سنیں
                </span>{" "}
                · Hear the difference
              </a>
              <button
                className={`command-chip ${copied ? "copied" : ""}`}
                onClick={copyInstall}
                aria-live="polite"
              >
                <code>{INSTALL_COMMAND}</code>
                <span>{copied ? "Copied ✓" : "Copy"}</span>
              </button>
            </div>
            <dl className="hero-stats">
              <div>
                <dt>4</dt>
                <dd>outputs, one source</dd>
              </div>
              <div>
                <dt>166</dt>
                <dd>eval specifications</dd>
              </div>
              <div>
                <dt>0</dt>
                <dd>runtime dependencies</dd>
              </div>
            </dl>
          </div>

          <div className="hero-stage">
            <div className="script-field" aria-hidden="true" lang="ur">
              <span>آواز</span>
            </div>
            <p className="urdu-kicker" lang="ur" dir="rtl">
              منظر کی بازیافت سے
            </p>
            <h2 lang="ur" dir="rtl">
              جیتی جاگتی آواز تک
            </h2>
            <div className="utterance-card">
              <span className="speaker" lang="ur">
                زین
              </span>
              <p lang="ur" dir="rtl">
                شش، آہستہ۔ وہ ابھی تک وہیں ہے تو سن لے گا۔
              </p>
              <div className="beat-line" lang="ur" dir="rtl">
                <span>خطرہ</span>
                <i aria-hidden="true"></i>
                <span>آہستگی</span>
                <i aria-hidden="true"></i>
                <span>تحفظ</span>
              </div>
              <AudioPlayer
                id="hero-line"
                beforeLabel="Flat"
                afterLabel="Directed"
                compact
              />
            </div>
            <div className="wave" aria-hidden="true">
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
          <span aria-hidden="true">·</span>
          <span>Not an API client.</span>
          <span aria-hidden="true">·</span>
          <span>Not tied to any video tool.</span>
          <span className="boundary-urdu" lang="ur" dir="rtl">
            یہ زبان، لہجے اور ادائیگی کی مہارت ہے۔
          </span>
        </aside>

        {/* ——— باب ۱ ——— */}
        <section className="act craft" id="craft">
          <Reveal>
            <Chapter
              num="۱"
              kicker="ONE LINE · TWO ARTS"
              title={
                <>
                  Refine what is said. <em>Direct how it lives.</em>
                </>
              }
              urdu="لفظ کیا ہے، اور لفظ کیسے جیتا ہے"
              intro="These operations are related, but never interchangeable. A line may need either, both, or neither — the skill decides per turn, and says why."
            />
          </Reveal>
          <div className="distinction-grid">
            <Reveal>
              <article className="principle-card">
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
            </Reveal>
            <Reveal delay={120}>
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
            </Reveal>
          </div>
        </section>

        {/* ——— باب ۲ ——— */}
        <section className="act listen" id="listen">
          <Reveal>
            <Chapter
              num="۲"
              kicker="PROOF BY EAR"
              title={
                <>
                  Don&rsquo;t read the difference. <em>Hear it.</em>
                </>
              }
              urdu="فرق خود سنیں"
              intro="Each scene was synthesized twice with Eleven v3 — once as flat text, once from the skill's directed cues. Same words. Different life."
            />
          </Reveal>
          <div className="scene-grid">
            {audioScenes.map((scene, i) => (
              <Reveal key={scene.id} delay={i * 110}>
                <article className="scene-card">
                  <div className="scene-card-head">
                    <div>
                      <h3>{scene.title}</h3>
                      <p className="scene-relation">{scene.relation}</p>
                    </div>
                    <p className="scene-urdu" lang="ur" dir="rtl">
                      {scene.urduTitle}
                    </p>
                  </div>
                  <p className="scene-line" lang="ur" dir="rtl">
                    {scene.line}
                  </p>
                  <AudioPlayer id={scene.id} />
                </article>
              </Reveal>
            ))}
          </div>
          <p className="listen-note">
            <strong>Honest footing</strong>
            Illustrative samples, not a benchmark. Text review finds the line;
            native listening proves the voice — 166 eval specifications and a
            human listening protocol close the loop.
          </p>
        </section>

        {/* ——— باب ۳ ——— */}
        <section className="act lab" id="lab">
          <Reveal>
            <Chapter
              num="۳"
              kicker="THE DIALOGUE LAB"
              title={
                <>
                  One scene. <em>Four honest views.</em>
                </>
              }
              urdu="ایک منظر، چار صورتیں"
              intro="Compare the source, caption-safe Urdu, rehearsal direction, and provider adaptation. The clean version remains canonical — direction never pollutes it."
            />
          </Reveal>
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
                  <span>
                    {mode === "clean" ? "CAPTION SAFE" : "NON-CANONICAL VIEW"}
                  </span>
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

        {/* ——— باب ۴ ——— */}
        <section className="act method" id="method">
          <Reveal>
            <Chapter
              num="۴"
              kicker="SCENE-FIRST WORKFLOW"
              title={
                <>
                  Understand before you edit. <em>Listen before you ship.</em>
                </>
              }
              urdu="صفحے سے آواز تک کا سفر"
              intro="A native reader silently recovers viewpoint, relationship, hesitation, intent, and emotional change. The skill makes that reasoning explicit — seven moves from page to voice."
            />
          </Reveal>
          <div className="method-path">
            {steps.map(([num, title, urdu, text], i) => (
              <Reveal key={num} delay={i * 70}>
                <article className="method-step">
                  <span className="method-num" lang="ur" aria-hidden="true">
                    {num}
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p className="step-urdu" lang="ur" dir="rtl">
                      {urdu}
                    </p>
                    <p>{text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ——— باب ۵ ——— */}
        <section className="act voices" id="voices">
          <Reveal>
            <Chapter
              num="۵"
              kicker="BUILT FOR URDU SPEECH — NOT ONE TOOL"
              title={
                <>
                  Wherever dialogue <em>needs to sound lived.</em>
                </>
              }
              urdu="آواز جہاں جہاں بولتی ہے"
              intro="Four artifacts flow from one linguistic source of truth: clean spoken Urdu, a directed rehearsal script, a synthesis plan, and a disposable provider adapter. Provider formats are lossy adapters — generated from, never confused with, the source."
            />
          </Reveal>
          <div className="use-grid">
            {useCases.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <article>
                  <span lang="ur" dir="rtl">
                    {item.marker}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="provider-strip">
            {providers.map((item) => (
              <article className="provider-chip" key={item.name}>
                <p>{item.group}</p>
                <h3>{item.name}</h3>
                <span>{item.status}</span>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
          <p className="honesty-note">
            <strong>Honesty over payloads</strong>
            A company supporting Urdu does not mean every model supports it. If
            official Urdu support is absent, the skill withholds the adapter and
            still returns clean, portable dialogue — it never disguises Arabic
            or Hindi support as Urdu support.
          </p>
        </section>

        {/* ——— باب ۶ ——— */}
        <section className="act finale" id="install">
          <Reveal>
            <Chapter
              num="۶"
              kicker="PROOF · THEN THE PEN"
              title={
                <>
                  Text review finds the line. <em>Listening proves the voice.</em>
                </>
              }
              urdu="اور پھر، آغاز"
              intro="Meaning, naturalness, character, age, relationship, imaginative fidelity, subtext, oral transfer, pronunciation, caption cleanliness — scored before anything ships."
            />
          </Reveal>
          <div className="proof-row">
            <div className="proof-total">
              <strong>166</strong>
              <span>specifications</span>
            </div>
            <dl>
              <div>
                <dt>49</dt>
                <dd>dialogue cases</dd>
              </div>
              <div>
                <dt>32</dt>
                <dd>provider contracts</dd>
              </div>
              <div>
                <dt>65</dt>
                <dd>regression guards</dd>
              </div>
              <div>
                <dt>20</dt>
                <dd>blind benchmark scenes</dd>
              </div>
            </dl>
            <a
              className="text-link light-link"
              href="https://github.com/ammar-hasan/urdu-voice-director/blob/main/skills/urdu-voice-director/evals/human-listening-protocol.md"
            >
              Read the listening protocol <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="install-panel">
            <div className="install-copy">
              <h3>
                One command. <em>Any supported agent.</em>
              </h3>
              <p>
                The open <code>skills</code> CLI discovers the skill from this
                repository and configures it for Codex, Claude Code, Cursor,
                Kimi Code, and other supported agents.
              </p>
              <ol>
                <li>
                  <span>۱</span> Run the install command
                </li>
                <li>
                  <span>۲</span> Choose your agent and scope
                </li>
                <li>
                  <span>۳</span> Ask in the language of your task
                </li>
              </ol>
            </div>
            <div className="code-panel">
              <div className="code-bar">
                <span>Terminal</span>
                <button onClick={copyInstall}>
                  {copied ? "Copied ✓" : "Copy"}
                </button>
              </div>
              <pre>
                <code>
                  <span className="comment"># interactive install · recommended</span>
                  {"\n"}
                  {INSTALL_COMMAND}
                </code>
              </pre>
              <p>
                Then: <span>Use $urdu-voice-director to refine this dialogue
                for natural speech.</span> For a global, non-interactive Codex
                install, append <span>--skill urdu-voice-director -g -a codex -y</span>.
              </p>
            </div>
          </div>

          <div className="prompt-strip">
            <p className="prompt-strip-label">Ways to begin</p>
            <ul>
              <li>
                “Use <code>$urdu-voice-director</code> to make this children’s
                dialogue sound natural without changing the lesson.”
              </li>
              <li>
                “Prepare clean captions, a directed script, and an Eleven v3
                adapter. Keep all tags out of the captions.”
              </li>
              <li>
                “Do not rewrite the words. Mark hesitation, interruption, and
                the change from defensiveness to sincere curiosity.”
              </li>
            </ul>
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
          <a href="https://github.com/ammar-hasan/urdu-voice-director">GitHub</a>
          <a href="https://github.com/ammar-hasan/urdu-voice-director/blob/main/skills/urdu-voice-director/SKILL.md">
            Skill
          </a>
          <a href="https://github.com/ammar-hasan/urdu-voice-director/tree/main/skills/urdu-voice-director/examples">
            Examples
          </a>
          <a href="https://github.com/ammar-hasan/urdu-voice-director/tree/main/skills/urdu-voice-director/evals">
            Evals
          </a>
          <a href="https://github.com/ammar-hasan/urdu-voice-director/blob/main/docs/research-assessment.md">
            Research
          </a>
        </div>
        <p className="copyright">
          v0.2.0 · Statically validated beta · Built from the Urdu scene
        </p>
      </footer>
    </div>
  );
}

export default App;
