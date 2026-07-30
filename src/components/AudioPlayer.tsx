import { useEffect, useRef, useState } from "react";

/**
 * Before/after voice sample player. One shared "currently playing" slot so
 * only one sample speaks at a time across the page.
 */
let current: HTMLAudioElement | null = null;

type Props = {
  id: string;
  beforeLabel?: string;
  afterLabel?: string;
  compact?: boolean;
};

export default function AudioPlayer({
  id,
  beforeLabel = "Raw read",
  afterLabel = "Directed",
  compact = false,
}: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [version, setVersion] = useState<"before" | "after">("after");
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const audio = new Audio();
    audio.preload = "metadata";
    audioRef.current = audio;

    const onTime = () => {
      if (audio.duration) setProgress(audio.currentTime / audio.duration);
    };
    const onEnd = () => {
      setPlaying(false);
      setProgress(0);
      if (current === audio) current = null;
    };
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnd);
    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnd);
      if (current === audio) current = null;
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const wasPlaying = playing;
    audio.pause();
    audio.src = `${import.meta.env.BASE_URL}audio/${id}-${version}.mp3`;
    audio.load();
    if (wasPlaying) {
      void audio.play().catch(() => setPlaying(false));
    }
    setProgress(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [version, id]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
      if (current === audio) current = null;
      return;
    }
    if (current && current !== audio) current.pause();
    if (!audio.src) {
      audio.src = `${import.meta.env.BASE_URL}audio/${id}-${version}.mp3`;
    }
    current = audio;
    void audio
      .play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    audio.currentTime = ((e.clientX - rect.left) / rect.width) * audio.duration;
  };

  const bars = [14, 30, 52, 24, 66, 40, 20, 58, 34, 72, 46, 18, 38, 26, 60, 32];

  return (
    <div className={`audio-player ${compact ? "compact" : ""} ${playing ? "playing" : ""}`}>
      <button
        className="player-toggle"
        onClick={toggle}
        aria-label={playing ? "Pause sample" : "Play sample"}
      >
        {playing ? (
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <rect x="3" y="2" width="3.5" height="12" rx="1" />
            <rect x="9.5" y="2" width="3.5" height="12" rx="1" />
          </svg>
        ) : (
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="M4 2.5v11c0 .8.9 1.3 1.6.9l8-5.5c.6-.4.6-1.4 0-1.8l-8-5.5c-.7-.4-1.6.1-1.6.9z" />
          </svg>
        )}
      </button>

      <div className="player-body">
        <div className="player-track" onClick={seek} role="presentation">
          <div className="player-bars" aria-hidden="true">
            {bars.map((h, i) => (
              <span
                key={i}
                style={{ height: `${h}%` }}
                className={i / bars.length < progress ? "lit" : ""}
              />
            ))}
          </div>
          <div className="player-fill" style={{ width: `${progress * 100}%` }} />
        </div>
      </div>

      <div className="player-switch" role="tablist" aria-label="Sample version">
        <button
          role="tab"
          aria-selected={version === "before"}
          className={version === "before" ? "active" : ""}
          onClick={() => setVersion("before")}
        >
          {beforeLabel}
        </button>
        <button
          role="tab"
          aria-selected={version === "after"}
          className={version === "after" ? "active" : ""}
          onClick={() => setVersion("after")}
        >
          {afterLabel}
        </button>
      </div>
    </div>
  );
}
