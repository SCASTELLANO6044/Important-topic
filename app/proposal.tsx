"use client";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import Iridescence from "./Iridescence";

export default function Proposal() {
  const [noCount, setNoCount] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const [celebration, setCelebration] = useState(0);
  const [confettiVisible, setConfettiVisible] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (accepted) headingRef.current?.focus();
  }, [accepted]);
  useEffect(() => {
    if (!accepted) return;
    setConfettiVisible(true);
    const timer = window.setTimeout(() => setConfettiVisible(false), 5500);
    return () => window.clearTimeout(timer);
  }, [accepted, celebration]);

  return (
    <main className="proposal-page">
      <div className="background" aria-hidden="true">
        <Iridescence color={[0.65, 0.30, 0.42]} speed={0.35} brightness={1.5} mouseReact clickSwirl resolution={0.75} style={{}} />
      </div>
      <div className="background-shade" aria-hidden="true" />
      <div className="hearts" aria-hidden="true">
        {[0, 1, 2, 3, 4, 5].map(i => (
          <svg key={i} className={`ambient-heart heart-${i + 1}`} viewBox="0 0 32 32"><path d="M16 28S3 20 3 10a7 7 0 0 1 13-3 7 7 0 0 1 13 3c0 10-13 18-13 18Z" /></svg>
        ))}
      </div>
      <section className="proposal" aria-labelledby="question">
        {accepted ? (
          <div className="answer">
            <svg className="heart" viewBox="0 0 32 32" aria-hidden="true"><path d="M16 28S3 20 3 10a7 7 0 0 1 13-3 7 7 0 0 1 13 3c0 10-13 18-13 18Z" /></svg>
            <h1 id="question" ref={headingRef} tabIndex={-1}>It’s a yes.</h1>
            <p>You just made my day.</p>
            <button className="replay" onClick={() => setCelebration(c => c + 1)}>Celebrate again</button>
          </div>
        ) : (
          <>
            <h1 id="question">Dominika, will you be<br />my girlfriend?</h1>
            <div className="actions">
              <button className="yes-button" style={{ "--yes-scale": Math.pow(1.55, noCount) } as CSSProperties} onClick={() => setAccepted(true)}>Yes</button>
              <button className={`no-button ${noCount > 3 ? "floating-no" : ""}`} onClick={() => setNoCount(n => n + 1)}>No</button>
            </div>
            <span className="sr-only" aria-live="polite">{noCount > 0 ? `The Yes button got bigger. ${noCount}` : ""}</span>
          </>
        )}
      </section>
      {accepted && confettiVisible && (
        <div className="confetti" key={celebration} aria-hidden="true">
          {Array.from({ length: 72 }, (_, i) => (
            <i key={i} style={{
              "--x": `${(i * 47.3) % 100}%`,
              "--delay": `${(i % 13) * 0.08}s`,
              "--duration": `${2.6 + (i % 8) * 0.23}s`,
              "--rotation": `${i * 53}deg`,
              "--drift": `${((i * 37) % 240) - 120}px`,
              "--confetti-color": ["#fff4f7", "#f0adc2", "#d8c59b"][i % 3],
            } as CSSProperties} />
          ))}
        </div>
      )}
    </main>
  );
}



