import { useState, useEffect, useRef } from "react";
import { FiPlus, FiMinus, FiMessageCircle } from "react-icons/fi";
import AnimatedList from "../animations/AnimatedList";

/* ─── Data ───────────────────────────────────────────────────────────────── */
const faqs = [
  {
    q: "What is K-Media (Kodanda Media)?",
    a: "K-Media is a content-first digital media network focused on building high-performing YouTube channels across multiple niches. We specialize in creating viral, high-retention content that drives massive audience growth."
  },
  {
    q: "What kind of content does K-Media create?",
    a: "We focus on high-retention video formats such as Shorts, Reels, and long-form storytelling. Our content is designed to capture attention quickly and keep viewers engaged till the end."
  },
  {
    q: "Which niches does K-Media operate in?",
    a: "We operate across multiple high-growth niches including Education, Finance, Motivation, Facts, and Podcast-style storytelling. Each niche is optimized for audience engagement and scalability."
  },
  // {
  //   q: "Who is the founder or CEO of K-Media?",
  //   a: "K-Media is led by a team of content strategists and creators focused on building scalable digital assets. (You can replace this with the actual founder/CEO name if needed.)"
  // },
  {
    q: "How does K-Media grow its channels?",
    a: "We use a data-driven content strategy that focuses on strong hooks, high retention, and consistent uploads. Our growth comes from understanding audience psychology and platform algorithms."
  },
  {
    q: "What makes K-Media different from other creators?",
    a: "Unlike individual creators, K-Media operates as a system. We build multiple channels simultaneously using proven frameworks, allowing us to scale faster and more consistently."
  },
  {
    q: "What platforms does K-Media focus on?",
    a: "Our primary focus is YouTube (Shorts & long-form), along with Instagram Reels. We prioritize platforms that offer maximum organic reach and growth potential."
  },
  {
    q: "Is K-Media focused on viral content?",
    a: "Yes, but not just viral content — we focus on sustainable virality. Our goal is to create content that not only goes viral but also builds long-term audience trust and engagement."
  },
  {
    q: "How many channels are managed under K-Media?",
    a: "K-Media operates multiple niche-based channels, each targeting a specific audience segment. The number continues to grow as we expand into new content categories."
  },
  {
    q: "What is the long-term vision of K-Media?",
    a: "Our vision is to build a powerful digital media network with millions of followers across platforms, becoming a leading content ecosystem in India and globally."
  }
];

/* ─── Cursor Follower ─────────────────────────────────────────────────────── */
function CursorGlow() {
  const glowRef = useRef(null);
  const trailRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const trail = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => { pos.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("mousemove", move);

    let raf;
    const animate = () => {
      trail.current.x += (pos.current.x - trail.current.x) * 0.07;
      trail.current.y += (pos.current.y - trail.current.y) * 0.07;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${pos.current.x - 200}px, ${pos.current.y - 200}px)`;
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${trail.current.x - 12}px, ${trail.current.y - 12}px)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      {/* Large soft glow that follows cursor */}
      <div ref={glowRef} style={{
        position: "fixed", top: 0, left: 0, width: 400, height: 400,
        borderRadius: "50%", pointerEvents: "none", zIndex: 0,
        background: "radial-gradient(circle, rgba(201,17,17,0.07) 0%, transparent 70%)",
        transition: "transform 0.05s linear",
        willChange: "transform",
      }} aria-hidden="true" />
      {/* Small precise cursor dot */}
      <div ref={trailRef} style={{
        position: "fixed", top: 0, left: 0, width: 24, height: 24,
        borderRadius: "50%", pointerEvents: "none", zIndex: 9999,
        border: "2px solid rgba(201,17,17,0.5)",
        background: "rgba(201,17,17,0.1)",
        willChange: "transform",
      }} aria-hidden="true" />
    </>
  );
}

/* ─── 3D Floating Question Mark ───────────────────────────────────────────── */
function FloatingQMark({ x, y, size, delay, rotateDir }) {
  const ref = useRef(null);
  useEffect(() => {
    let raf;
    let t = delay;
    const tick = () => {
      t += 0.008;
      if (ref.current) {
        const yOff = Math.sin(t) * 18;
        const rot  = Math.sin(t * 0.7) * (rotateDir === 1 ? 12 : -12);
        ref.current.style.transform = `translateY(${yOff}px) rotateY(${rot}deg) rotateZ(${rot * 0.3}deg)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [delay, rotateDir]);

  return (
    <div ref={ref} style={{
      position: "absolute", left: x, top: y,
      fontSize: size, fontWeight: 900, lineHeight: 1,
      color: "transparent",
      WebkitTextStroke: "2px rgba(201,17,17,0.3)",
      fontFamily: "'Georgia', serif",
      pointerEvents: "none", userSelect: "none",
      transformStyle: "preserve-3d",
      willChange: "transform",
      filter: "drop-shadow(0 8px 24px rgba(201,17,17,0.2))",
    }} aria-hidden="true">?</div>
  );
}

/* ─── 3D Parallax Orb ────────────────────────────────────────────────────── */
function ParallaxOrb({ scrollY, baseX, baseY, size, speed, color }) {
  const y = -scrollY * speed;
  return (
    <div style={{
      position: "absolute", left: baseX, top: baseY,
      width: size, height: size, borderRadius: "50%",
      background: color,
      transform: `translateY(${y}px)`,
      pointerEvents: "none",
      willChange: "transform",
      filter: "blur(1px)",
    }} aria-hidden="true" />
  );
}

/* ─── Scroll Progress Bar ────────────────────────────────────────────────── */
function ScrollProgress({ scrollY, maxScroll }) {
  const pct = maxScroll > 0 ? Math.min((scrollY / maxScroll) * 100, 100) : 0;
  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, height: 3,
      background: "rgba(201,17,17,0.1)", zIndex: 9998,
    }}>
      <div style={{
        height: "100%", width: `${pct}%`,
        background: "linear-gradient(90deg, #C91111, #ff4444)",
        transition: "width 0.1s linear",
        boxShadow: "0 0 8px rgba(201,17,17,0.6)",
      }} />
    </div>
  );
}

/* ─── Scroll-Reveal Wrapper ──────────────────────────────────────────────── */
function Reveal({ children, delay = 0, direction = "up" }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVis(true); obs.disconnect(); }
    }, { threshold: 0.12 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const from = { up: "translateY(50px)", left: "translateX(-50px)", right: "translateX(50px)", scale: "scale(0.88)" }[direction] || "translateY(50px)";
  return (
    <div ref={ref} style={{
      opacity: vis ? 1 : 0,
      transform: vis ? "none" : from,
      transition: `opacity 0.7s ${delay}s ease, transform 0.7s ${delay}s ease`,
    }}>
      {children}
    </div>
  );
}

/* ─── 3D Tilt Card (CTA) ─────────────────────────────────────────────────── */
function TiltCard({ children }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width  - 0.5) * 20;
    const y = ((e.clientY - r.top)  / r.height - 0.5) * 20;
    ref.current.style.transform = `perspective(800px) rotateY(${x}deg) rotateX(${-y}deg) scale3d(1.02,1.02,1.02)`;
  };
  const onLeave = () => { ref.current.style.transform = "perspective(800px) rotateY(0) rotateX(0) scale3d(1,1,1)"; };
  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
      style={{ transition: "transform 0.18s ease", transformStyle: "preserve-3d" }}>
      {children}
    </div>
  );
}

/* ─── FAQ Item ───────────────────────────────────────────────────────────── */
function FAQItem({ faq, isOpen, onToggle, index }) {
  const bodyRef = useRef(null);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (bodyRef.current) setHeight(isOpen ? bodyRef.current.scrollHeight : 0);
  }, [isOpen]);

  return (
    <div style={{
      borderRadius: 20,
      border: isOpen ? "1.5px solid rgba(201,17,17,0.3)" : "1.5px solid #e5e7eb",
      background: isOpen
        ? "linear-gradient(135deg, rgba(201,17,17,0.03) 0%, #fff 100%)"
        : "#fff",
      boxShadow: isOpen ? "0 8px 40px rgba(201,17,17,0.08)" : "0 1px 4px rgba(0,0,0,0.04)",
      transition: "border 0.35s ease, box-shadow 0.35s ease, background 0.35s ease",
      overflow: "hidden",
    }}>
        <button
          onClick={onToggle}
          style={{
            width: "100%", display: "flex", alignItems: "center",
            justifyContent: "space-between", padding: "20px 24px",
            textAlign: "left", gap: 16, background: "none", border: "none", cursor: "pointer",
          }}
        >
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700, fontSize: 15,
            color: isOpen ? "#111" : "#374151",
            transition: "color 0.2s",
            lineHeight: 1.4,
          }}>
            {/* Number badge */}
            <span style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              width: 22, height: 22, borderRadius: "50%",
              background: isOpen ? "#C91111" : "rgba(201,17,17,0.1)",
              color: isOpen ? "#fff" : "#C91111",
              fontSize: 10, fontWeight: 800, marginRight: 10,
              transition: "all 0.3s", flexShrink: 0,
              verticalAlign: "middle",
            }}>{String(index + 1).padStart(2, "0")}</span>
            {faq.q}
          </span>
          <span style={{
            flexShrink: 0, width: 34, height: 34, borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            background: isOpen ? "#C91111" : "rgba(201,17,17,0.08)",
            color: isOpen ? "#fff" : "#C91111",
            transition: "all 0.35s cubic-bezier(.34,1.56,.64,1)",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            boxShadow: isOpen ? "0 4px 16px rgba(201,17,17,0.3)" : "none",
          }}>
            {isOpen ? <FiMinus size={13} /> : <FiPlus size={13} />}
          </span>
        </button>

        <div style={{ height, overflow: "hidden", transition: "height 0.38s cubic-bezier(.4,0,.2,1)" }}>
          <div ref={bodyRef} style={{
            padding: "0 24px 20px 24px",
            borderTop: "1px solid rgba(201,17,17,0.08)",
            paddingTop: 16,
          }}>
            <div style={{
              width: isOpen ? "48px" : "0px",
              height: 3, background: "#C91111",
              borderRadius: 2, marginBottom: 10,
              transition: "width 0.4s 0.1s ease",
            }} />
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#6b7280", fontSize: 14, lineHeight: 1.75,
            }}>{faq.a}</p>
          </div>
        </div>
      </div>
  );
}

/* ─── 3D DNA Helix Decoration ────────────────────────────────────────────── */
function HelixDecor({ scrollY }) {
  const nodes = Array.from({ length: 10 }, (_, i) => i);
  return (
    <svg width="60" height="300" viewBox="0 0 60 300"
      style={{ position: "absolute", right: 20, top: 100, opacity: 0.5, pointerEvents: "none" }}
      aria-hidden="true">
      {nodes.map(i => {
        const y = i * 28 + 10;
        const offset = Math.sin((i + scrollY * 0.005) * 0.9) * 22;
        return (
          <g key={i}>
            <circle cx={30 + offset} cy={y} r={5} fill="#C91111" />
            <circle cx={30 - offset} cy={y} r={5} fill="rgba(201,17,17,0.4)" />
            <line x1={30 + offset} y1={y} x2={30 - offset} y2={y}
              stroke="#C91111" strokeWidth="1.5" strokeDasharray="3 2" />
          </g>
        );
      })}
    </svg>
  );
}

/* ─── Main Component ─────────────────────────────────────────────────────── */


export default function FAQ() {
  const [openSet, setOpenSet] = useState(() => new Set(faqs.map((_, i) => i)));
  const toggle = (i) => setOpenSet(s => { const n = new Set(s); n.has(i) ? n.delete(i) : n.add(i); return n; });
  const [scrollY, setScrollY]     = useState(0);
  const [maxScroll, setMaxScroll] = useState(1);
  const sectionRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
      setMaxScroll(document.body.scrollHeight - window.innerHeight);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Parallax offset for section internals
  const sectionTop = sectionRef.current?.offsetTop || 0;
  const localScroll = Math.max(0, scrollY - sectionTop + 300);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;700&display=swap');
        @keyframes pulse-ring {
          0%,100% { box-shadow: 0 0 0 0 rgba(201,17,17,0.3); }
          50%      { box-shadow: 0 0 0 14px rgba(201,17,17,0); }
        }
        @keyframes float-slow {
          0%,100% { transform: translateY(0px) rotate(-3deg); }
          50%      { transform: translateY(-22px) rotate(3deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes spin-rev {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
        @keyframes shimmer {
          0%   { background-position: -400px 0; }
          100% { background-position: 400px 0; }
        }
        .faq-section * { box-sizing: border-box; }
      `}</style>

      <ScrollProgress scrollY={scrollY} maxScroll={maxScroll} />

      <section
        ref={sectionRef}
        id="faq"
        className="faq-section"
        style={{
          position: "relative", minHeight: "100vh",
          background: "linear-gradient(160deg, #f9f9f9 0%, #ffffff 50%, #f5f5f5 100%)",
          padding: "clamp(60px, 10vw, 100px) clamp(16px, 4vw, 24px) 60px",
          overflow: "hidden",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >

        {/* ── Background: giant ghosted question marks ── */}
        <FloatingQMark x="2%"   y="5%"   size="clamp(60px,12vw,160px)" delay={0}   rotateDir={1}  />
        <FloatingQMark x="75%"  y="12%"  size="clamp(70px,14vw,200px)" delay={2}   rotateDir={-1} />
        <FloatingQMark x="55%"  y="60%"  size="clamp(50px,9vw,120px)"  delay={1.2} rotateDir={1}  />
        <FloatingQMark x="-2%"  y="70%"  size="clamp(55px,10vw,140px)" delay={3}   rotateDir={-1} />
        <FloatingQMark x="82%"  y="75%"  size="clamp(40px,8vw,100px)"  delay={0.8} rotateDir={1}  />

        {/* ── Parallax orbs ── */}
        <ParallaxOrb scrollY={localScroll} baseX="10%"  baseY="20%"  size={300} speed={0.12} color="radial-gradient(circle, rgba(201,17,17,0.18) 0%, transparent 70%)" />
        <ParallaxOrb scrollY={localScroll} baseX="75%"  baseY="40%"  size={200} speed={0.08} color="radial-gradient(circle, rgba(201,17,17,0.15) 0%, transparent 70%)" />
        <ParallaxOrb scrollY={localScroll} baseX="40%"  baseY="80%"  size={250} speed={0.15} color="radial-gradient(circle, rgba(201,17,17,0.16) 0%, transparent 70%)" />

        {/* ── DNA helix on the side — desktop only ── */}
        <div className="hidden md:block"><HelixDecor scrollY={localScroll} /></div>

        {/* ── Rotating ring decoration ── */}
        <div className="hidden sm:block" style={{
          position: "absolute", right: -80, top: "15%",
          width: 280, height: 280, pointerEvents: "none",
        }} aria-hidden="true">
          <svg width="280" height="280" viewBox="0 0 280 280" style={{ position: "absolute", inset: 0, animation: "spin-slow 25s linear infinite", transformOrigin: "center" }}>
            <circle cx="140" cy="140" r="138" fill="none" stroke="rgba(201,17,17,0.4)" strokeWidth="1.5" strokeDasharray="6 14" strokeLinecap="round" />
          </svg>
          <div style={{
            position: "absolute", inset: 40, borderRadius: "50%",
            border: "1px solid rgba(201,17,17,0.25)",
            animation: "spin-rev 18s linear infinite",
          }} />
        </div>

        {/* ── Left-side rings ── */}
        <div className="hidden sm:block" style={{
          position: "absolute", left: 10, bottom: "15%",
          width: 200, height: 200, pointerEvents: "none",
        }} aria-hidden="true">
          <svg width="200" height="200" viewBox="0 0 200 200" style={{ position: "absolute", inset: 0, animation: "spin-rev 20s linear infinite", transformOrigin: "center" }}>
            <circle cx="100" cy="100" r="98" fill="none" stroke="rgba(201,17,17,0.35)" strokeWidth="1.5" strokeDasharray="6 14" strokeLinecap="round" />
          </svg>
          <svg width="140" height="140" viewBox="0 0 140 140" style={{ position: "absolute", top: 30, left: 30, animation: "spin-slow 14s linear infinite", transformOrigin: "center" }}>
            <circle cx="70" cy="70" r="68" fill="none" stroke="rgba(201,17,17,0.22)" strokeWidth="1" strokeDasharray="4 12" strokeLinecap="round" />
          </svg>
        </div>

        {/* ── Left helix mirror — desktop only ── */}
        <svg width="60" height="260" viewBox="0 0 60 260" className="hidden md:block"
          style={{ position: "absolute", left: 16, top: "35%", opacity: 0.45, pointerEvents: "none" }}
          aria-hidden="true">
          {Array.from({ length: 9 }, (_, i) => {
            const y = i * 28 + 10;
            const offset = Math.sin(i * 0.9) * 22;
            return (
              <g key={i}>
                <circle cx={30 + offset} cy={y} r={4} fill="#C91111" />
                <circle cx={30 - offset} cy={y} r={4} fill="rgba(201,17,17,0.4)" />
                <line x1={30 + offset} y1={y} x2={30 - offset} y2={y}
                  stroke="#C91111" strokeWidth="1.5" strokeDasharray="3 2" />
              </g>
            );
          })}
        </svg>

        {/* ── Bottom-center arc decoration ── */}
        {/* <svg width="320" height="80" viewBox="0 0 320 80"
          style={{ position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)", opacity: 0.35, pointerEvents: "none" }}
          aria-hidden="true">
          <path d="M 10 70 Q 160 10 310 70" stroke="#C91111" strokeWidth="2" fill="none" strokeDasharray="6 4" strokeLinecap="round" />
          <path d="M 40 70 Q 160 25 280 70" stroke="#C91111" strokeWidth="1" fill="none" strokeDasharray="4 6" strokeLinecap="round" />
        </svg> */}

        {/* ── Mid-left floating dots cluster — desktop only ── */}
        <svg width="80" height="80" viewBox="0 0 80 80" className="hidden sm:block"
          style={{ position: "absolute", left: "5%", top: "55%", opacity: 0.4, pointerEvents: "none" }}
          aria-hidden="true">
          {[0,1,2,3,4,5,6,7,8].map(i => (
            <circle key={i} cx={(i % 3) * 28 + 12} cy={Math.floor(i / 3) * 28 + 12} r="3.5" fill="#C91111" />
          ))}
        </svg>

        {/* ── Mid-right floating dots cluster — desktop only ── */}
        <svg width="80" height="80" viewBox="0 0 80 80" className="hidden sm:block"
          style={{ position: "absolute", right: "6%", top: "50%", opacity: 0.4, pointerEvents: "none" }}
          aria-hidden="true">
          {[0,1,2,3,4,5,6,7,8].map(i => (
            <circle key={i} cx={(i % 3) * 28 + 12} cy={Math.floor(i / 3) * 28 + 12} r="3" fill="#C91111" />
          ))}
        </svg>

        {/* ── Grid SVG overlay ── */}
        <svg width="100%" height="100%" style={{
          position: "absolute", inset: 0, opacity: 0.07, pointerEvents: "none"
        }} aria-hidden="true">
          <defs>
            <pattern id="faq-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#C91111" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#faq-grid)" />
        </svg>

        {/* ══ Content ══════════════════════════════════════════════════════ */}
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1100, margin: "0 auto", display: "flex", flexDirection: "column", gap: 32 }}>

          {/* ── Header ── */}
          <Reveal direction="up">
            <div style={{ textAlign: "center", marginBottom: 0 }}>

              {/* Pill badge */}
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                <span style={{
                  padding: "6px 20px", borderRadius: 999,
                  background: "rgba(201,17,17,0.07)",
                  border: "1px solid rgba(201,17,17,0.15)",
                  color: "#C91111", fontSize: 11, fontWeight: 700,
                  letterSpacing: "0.18em", textTransform: "uppercase",
                  display: "inline-flex", alignItems: "center", gap: 7,
                }}>
                  <span style={{
                    width: 6, height: 6, borderRadius: "50%",
                    background: "#C91111", animation: "pulse-ring 2s infinite"
                  }} />
                  Got Questions?
                </span>
              </div>

              <h2 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 900,
                fontSize: "clamp(2.2rem, 5.5vw, 4rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                color: "#0f0f0f",
                margin: "0 0 16px",
              }}>
                Frequently Asked{" "}
                <span style={{ color: "#C91111", position: "relative", display: "inline-block" }}>
                  Questions
                  {/* Animated underline */}
                  <svg viewBox="0 0 240 14" style={{
                    position: "absolute", bottom: -6, left: 0, width: "100%", overflow: "visible"
                  }}>
                    <path d="M 3 10 Q 120 3 237 10"
                      stroke="#C91111" strokeWidth="3" fill="none"
                      strokeLinecap="round" strokeDasharray="300" strokeDashoffset="300"
                      style={{ animation: "shimmer-path 1.2s 0.3s ease forwards" }}
                    />
                  </svg>
                </span>
              </h2>

              <p style={{ color: "#9ca3af", fontSize: 15, maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
                Everything you need to know about working with Kodanda Media. Can't find an answer?{" "}
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  style={{ color: "#C91111", fontWeight: 700, background: "none", border: "none", cursor: "pointer", textDecoration: "underline", textUnderlineOffset: 3 }}
                >
                  Reach out to us.
                </button>
              </p>

              {/* Scroll progress hint */}
              <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 28 }}>
                {faqs.map((_, i) => (
                  <button key={i} onClick={() => toggle(i)} style={{
                    width: openSet.has(i) ? 24 : 8,
                    height: 8, borderRadius: 4,
                    background: openSet.has(i) ? "#C91111" : "rgba(201,17,17,0.2)",
                    border: "none", cursor: "pointer",
                    transition: "all 0.35s cubic-bezier(.34,1.56,.64,1)",
                  }} aria-label={`FAQ ${i + 1}`} />
                ))}
              </div>
            </div>
          </Reveal>

          {/* ── FAQ List ── */}
          <div style={{ maxWidth: 720, margin: "0 auto", width: "100%" }}>
            <AnimatedList
              items={faqs}
              showGradients={false}
              enableArrowNavigation={false}
              displayScrollbar={false}
              renderItem={(faq, index) => (
                <FAQItem
                  faq={faq}
                  index={index}
                  isOpen={openSet.has(index)}
                  onToggle={() => toggle(index)}
                />
              )}
            />
          </div>

          {/* ── CTA Card ── */}
          <Reveal direction="up" delay={0.2}>
            <div style={{ marginTop: 0 }}>
              <TiltCard>
                <div style={{
                  background: "linear-gradient(135deg, #fff 0%, #fef2f2 100%)",
                  border: "1.5px solid rgba(201,17,17,0.15)",
                  borderRadius: 28, padding: "clamp(28px, 5vw, 48px) clamp(20px, 5vw, 40px)",
                  textAlign: "center", position: "relative", overflow: "hidden",
                  boxShadow: "0 20px 60px rgba(201,17,17,0.07), 0 4px 20px rgba(0,0,0,0.05)",
                }}>
                  {/* BG decoration */}
                  <div style={{
                    position: "absolute", top: -60, right: -60,
                    width: 200, height: 200, borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(201,17,17,0.08) 0%, transparent 70%)",
                  }} />
                  <div style={{
                    position: "absolute", bottom: -40, left: -40,
                    width: 160, height: 160, borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(201,17,17,0.05) 0%, transparent 70%)",
                  }} />

                  {/* Icon */}
                  <div style={{
                    width: 60, height: 60, borderRadius: "50%",
                    background: "rgba(201,17,17,0.08)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 20px",
                    animation: "pulse-ring 2.5s infinite",
                    position: "relative", zIndex: 1,
                  }}>
                    <FiMessageCircle style={{ color: "#C91111", fontSize: 24 }} />
                  </div>

                  <p style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 900, fontSize: 26, color: "#111",
                    marginBottom: 10, position: "relative", zIndex: 1,
                  }}>Still have questions?</p>

                  <p style={{ color: "#9ca3af", fontSize: 14, marginBottom: 28, position: "relative", zIndex: 1 }}>
                    Our team is happy to walk you through anything you need.
                  </p>

                  <button
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = "#a50e0e";
                      e.currentTarget.style.transform = "scale(1.05)";
                      e.currentTarget.style.boxShadow = "0 12px 40px rgba(201,17,17,0.4)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = "#C91111";
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "0 6px 24px rgba(201,17,17,0.25)";
                    }}
                    style={{
                      background: "#C91111", color: "#fff",
                      padding: "14px 40px", borderRadius: 999,
                      fontWeight: 700, fontSize: 14, border: "none", cursor: "pointer",
                      boxShadow: "0 6px 24px rgba(201,17,17,0.25)",
                      transition: "all 0.25s ease",
                      position: "relative", zIndex: 1,
                      letterSpacing: "0.04em",
                    }}>
                    Contact Us →
                  </button>
                </div>
              </TiltCard>
            </div>
          </Reveal>

        </div>
      </section>

      {/* Patch SVG underline animation (inline keyframe) */}
      <style>{`
        @keyframes shimmer-path {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </>
  );
}