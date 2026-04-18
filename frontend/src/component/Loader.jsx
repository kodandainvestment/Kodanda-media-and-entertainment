import { useEffect, useState } from "react";

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 2000;

    const tick = (now) => {
      const elapsed = now - start;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(Math.floor(pct));
      if (elapsed < duration) {
        requestAnimationFrame(tick);
      } else {
        setExit(true);
        setTimeout(onDone, 700);
      }
    };
    requestAnimationFrame(tick);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#0a0a0a",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 40,
        opacity: exit ? 0 : 1,
        transform: exit ? "scale(1.04)" : "scale(1)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
        pointerEvents: exit ? "none" : "all",
      }}
    >
      <style>{`
        @keyframes spinRing {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes spinRingRev {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
        @keyframes pulse {
          0%,100% { opacity: 0.15; transform: scale(1); }
          50%      { opacity: 0.35; transform: scale(1.08); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%,100% { opacity: 1; }
          50%      { opacity: 0; }
        }
      `}</style>

      {/* Spinning rings */}
      <div style={{ position: "relative", width: 160, height: 160, flexShrink: 0 }}>
        {/* Outer glow blob */}
        <div style={{
          position: "absolute", inset: -30,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,17,17,0.18) 0%, transparent 70%)",
          animation: "pulse 2.5s ease-in-out infinite",
        }} />

        {/* Ring 1 */}
        <svg width="160" height="160" viewBox="0 0 160 160"
          style={{ position: "absolute", inset: 0, animation: "spinRing 3s linear infinite" }}>
          <circle cx="80" cy="80" r="74" fill="none"
            stroke="#C91111" strokeWidth="2"
            strokeDasharray="12 18" strokeLinecap="round" opacity="0.9" />
        </svg>

        {/* Ring 2 */}
        <svg width="120" height="120" viewBox="0 0 120 120"
          style={{ position: "absolute", top: 20, left: 20, animation: "spinRingRev 2s linear infinite" }}>
          <circle cx="60" cy="60" r="54" fill="none"
            stroke="#ff4444" strokeWidth="1.5"
            strokeDasharray="6 14" strokeLinecap="round" opacity="0.5" />
        </svg>

        {/* Center K */}
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <span style={{
            fontSize: 52, fontWeight: 900, color: "#C91111",
            fontFamily: "'Georgia', serif",
            lineHeight: 1,
            textShadow: "0 0 30px rgba(201,17,17,0.5)",
            animation: "fadeSlideUp 0.6s ease forwards",
          }}>K</span>
        </div>
      </div>

      {/* Brand name */}
      <div style={{ textAlign: "center", animation: "fadeSlideUp 0.7s 0.2s ease both" }}>
        <p style={{
          color: "#fff", fontSize: 22, fontWeight: 800,
          letterSpacing: "0.12em", textTransform: "uppercase",
          fontFamily: "'Georgia', serif",
        }}>
          Kodanda
        </p>
        <p style={{
          color: "#C91111", fontSize: 11, fontWeight: 600,
          letterSpacing: "0.3em", textTransform: "uppercase",
          marginTop: 4,
        }}>
          Media &amp; Entertainment
        </p>
      </div>

      {/* Progress bar */}
      <div style={{ width: 220, animation: "fadeSlideUp 0.7s 0.4s ease both" }}>
        <div style={{
          width: "100%", height: 2,
          background: "rgba(255,255,255,0.08)",
          borderRadius: 99, overflow: "hidden",
        }}>
          <div style={{
            height: "100%",
            width: `${progress}%`,
            background: "linear-gradient(90deg, #C91111, #ff4444)",
            borderRadius: 99,
            transition: "width 0.1s linear",
            boxShadow: "0 0 8px rgba(201,17,17,0.6)",
          }} />
        </div>
        <div style={{
          display: "flex", justifyContent: "space-between",
          marginTop: 8,
          color: "rgba(255,255,255,0.3)", fontSize: 10,
          letterSpacing: "0.1em",
        }}>
          <span>Loading</span>
          <span style={{ color: "#C91111", fontWeight: 700 }}>{progress}%</span>
        </div>
      </div>
    </div>
  );
}
