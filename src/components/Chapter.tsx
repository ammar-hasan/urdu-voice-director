import type { ReactNode } from "react";

/**
 * Chapter heading — each act of the site opens as a باب (chapter) of the
 * recitation, marked with an Urdu numeral and a gestural ink stroke.
 */
export function Stroke({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`ink-stroke ${className}`}
      viewBox="0 0 340 64"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M10 46 C 90 14, 210 8, 330 24 L 328 33 C 214 20, 98 27, 14 54 Z"
        fill="currentColor"
      />
      <path
        d="M254 12 c 10 -8 26 -9 34 -2 c -8 6 -24 8 -34 2 Z"
        fill="currentColor"
        opacity="0.75"
      />
    </svg>
  );
}

export default function Chapter({
  num,
  kicker,
  title,
  urdu,
  intro,
}: {
  num: string;
  kicker: string;
  title: ReactNode;
  urdu?: string;
  intro?: string;
}) {
  return (
    <header className="chapter-head">
      <div className="chapter-marker" aria-hidden="true">
        <span className="chapter-baab" lang="ur">
          باب
        </span>
        <span className="chapter-num" lang="ur">
          {num}
        </span>
      </div>
      <div className="chapter-title">
        <p className="eyebrow">{kicker}</p>
        <h2>{title}</h2>
        {urdu ? (
          <p className="chapter-urdu" lang="ur" dir="rtl">
            {urdu}
          </p>
        ) : null}
        <Stroke />
      </div>
      {intro ? <p className="chapter-intro">{intro}</p> : null}
    </header>
  );
}
