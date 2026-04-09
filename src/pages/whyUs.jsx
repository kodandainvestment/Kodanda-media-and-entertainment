import { useEffect, useRef, useState } from "react";
import {
  FiCheckCircle, FiUsers, FiTrendingUp, FiZap,
  FiStar, FiShield, FiAward, FiCamera, FiPlay,
  FiBarChart2, FiGlobe, FiTarget, FiCpu, FiFeather,
  FiRadio, FiFilm, FiInstagram, FiYoutube, FiPieChart
} from "react-icons/fi";

const WHY_BG_ITEMS = [
  { Icon: FiStar,       top: "4%",  left: "2%",   size: 38, dur: 14, delay: 0,   rot: 20  },
  { Icon: FiCamera,    top: "9%",  left: "91%",  size: 42, dur: 18, delay: 1.5, rot: -15 },
  { Icon: FiFilm,      top: "18%", left: "95%",  size: 36, dur: 12, delay: 0.5, rot: 10  },
  { Icon: FiRadio,     top: "28%", left: "1%",   size: 44, dur: 20, delay: 3,   rot: -10 },
  { Icon: FiBarChart2, top: "38%", left: "96%",  size: 34, dur: 16, delay: 2,   rot: 25  },
  { Icon: FiGlobe,     top: "50%", left: "3%",   size: 40, dur: 22, delay: 4,   rot: -8  },
  { Icon: FiTarget,    top: "60%", left: "94%",  size: 36, dur: 13, delay: 1,   rot: 15  },
  { Icon: FiCpu,       top: "70%", left: "2%",   size: 42, dur: 17, delay: 2.5, rot: -18 },
  { Icon: FiFeather,   top: "80%", left: "91%",  size: 32, dur: 19, delay: 0.8, rot: 8   },
  { Icon: FiZap,       top: "90%", left: "5%",   size: 36, dur: 15, delay: 3.5, rot: -22 },
  { Icon: FiInstagram, top: "14%", left: "48%",  size: 28, dur: 24, delay: 5,   rot: 12  },
  { Icon: FiYoutube,   top: "45%", left: "50%",  size: 30, dur: 21, delay: 6,   rot: -6  },
  { Icon: FiPieChart,  top: "72%", left: "47%",  size: 26, dur: 19, delay: 4.5, rot: -14 },
  { Icon: FiPlay,      top: "55%", left: "97%",  size: 34, dur: 16, delay: 1.2, rot: 18  },
  { Icon: FiShield,    top: "33%", left: "5%",   size: 32, dur: 23, delay: 2.8, rot: 30  },
  { Icon: FiAward,     top: "85%", left: "45%",  size: 30, dur: 20, delay: 7,   rot: 10  },
  { Icon: FiUsers,     top: "95%", left: "75%",  size: 34, dur: 18, delay: 3.2, rot: -20 },
  { Icon: FiTrendingUp,top: "22%", left: "97%",  size: 38, dur: 14, delay: 0.3, rot: -5  },
];

function WhyDecorations() {
  const mouseRef = useRef({ x: 0, y: 0 });
  const itemRefs = useRef([]);
  const speeds = WHY_BG_ITEMS.map((_, i) => 30 + (i % 5) * 18);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      };
    };
    window.addEventListener("mousemove", handleMouseMove);
    let raf;
    const animate = () => {
      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        const tx = mouseRef.current.x * speeds[i];
        const ty = mouseRef.current.y * speeds[i];
        el.style.transform = `translate(${tx}px, ${ty}px) rotate(${WHY_BG_ITEMS[i].rot}deg)`;
      });
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => { window.removeEventListener("mousemove", handleMouseMove); cancelAnimationFrame(raf); };
  }, []);

  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }} aria-hidden="true">
      <style>{`
        @keyframes whyFloat {
          0%,100% { margin-top: 0px; }
          50%      { margin-top: -16px; }
        }
        .why-icon { transition: transform 0.15s ease-out; will-change: transform; }
      `}</style>

      {WHY_BG_ITEMS.map(({ Icon, top, left, size, dur, delay }, i) => (
        <span key={i} ref={el => itemRefs.current[i] = el} className="why-icon"
          style={{ position: "absolute", top, left, fontSize: size, color: "#C91111", opacity: 0.12, lineHeight: 1, display: "inline-block", animation: `whyFloat ${dur}s ${delay}s ease-in-out infinite` }}>
          <Icon />
        </span>
      ))}

      {/* Spinning rings top-right */}
      <div style={{ position: "absolute", top: -60, right: -60, width: 260, height: 260 }}>
        <svg width="260" height="260" viewBox="0 0 260 260" style={{ position: "absolute", inset: 0, animation: "aboutSpin 28s linear infinite", transformOrigin: "center" }}>
          <circle cx="130" cy="130" r="128" fill="none" stroke="rgba(201,17,17,0.2)" strokeWidth="1.5" strokeDasharray="6 14" strokeLinecap="round" />
        </svg>
        <svg width="180" height="180" viewBox="0 0 180 180" style={{ position: "absolute", top: 40, left: 40, animation: "aboutSpinRev 18s linear infinite", transformOrigin: "center" }}>
          <circle cx="90" cy="90" r="88" fill="none" stroke="rgba(201,17,17,0.12)" strokeWidth="1" strokeDasharray="4 12" strokeLinecap="round" />
        </svg>
      </div>

      {/* Spinning rings bottom-left */}
      <div style={{ position: "absolute", bottom: -50, left: -50, width: 200, height: 200 }}>
        <svg width="200" height="200" viewBox="0 0 200 200" style={{ position: "absolute", inset: 0, animation: "aboutSpinRev 22s linear infinite", transformOrigin: "center" }}>
          <circle cx="100" cy="100" r="98" fill="none" stroke="rgba(201,17,17,0.18)" strokeWidth="1.5" strokeDasharray="6 14" strokeLinecap="round" />
        </svg>
      </div>

      {/* Dot clusters */}
      <svg width="70" height="70" viewBox="0 0 70 70" style={{ position: "absolute", left: "2%", top: "44%", opacity: 0.22 }}>
        {[0,1,2,3,4,5,6,7,8].map(i => <circle key={i} cx={(i%3)*24+11} cy={Math.floor(i/3)*24+11} r="3" fill="#C91111" />)}
      </svg>
      <svg width="70" height="70" viewBox="0 0 70 70" style={{ position: "absolute", right: "2%", top: "60%", opacity: 0.18 }}>
        {[0,1,2,3,4,5,6,7,8].map(i => <circle key={i} cx={(i%3)*24+11} cy={Math.floor(i/3)*24+11} r="3" fill="#C91111" />)}
      </svg>

      {/* Radial blobs */}
      <div style={{ position: "absolute", top: "8%",  left: "-80px", width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,17,17,0.06) 0%, transparent 70%)" }} />
      <div style={{ position: "absolute", top: "42%", right: "-60px", width: 260, height: 260, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,17,17,0.05) 0%, transparent 70%)" }} />
      <div style={{ position: "absolute", bottom: "12%", left: "30%", width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,17,17,0.04) 0%, transparent 70%)" }} />

      {/* Grid overlay */}
      <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: 0.1 }}>
        <defs><pattern id="why-bg-grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M 48 0 L 0 0 0 48" fill="none" stroke="#C91111" strokeWidth="1" /></pattern></defs>
        <rect width="100%" height="100%" fill="url(#why-bg-grid)" />
      </svg>
    </div>
  );
}

/* ─── Data ─────────────────────────────────────────────────────────────── */
const reasons = [
  { icon: FiStar,      title: "Multi-Brand Vision",      desc: "We don't offer services — we build and run independent brands, each crafted with a unique identity and purpose." },
  { icon: FiTrendingUp,title: "Diverse Content Verticals", desc: "From education and finance to spirituality and celebrity culture, our brands cover every dimension of human interest." },
  { icon: FiUsers,     title: "Community First",          desc: "Every brand we build is designed to grow a loyal community — not just an audience — through authentic, value-driven content." },
  { icon: FiZap,       title: "Born in Indore",           desc: "Proudly rooted in Indore, MP, K Media brings a fresh Central Indian voice to the national content landscape since March 2026." },
  { icon: FiShield,    title: "Purpose-Driven Brands",    desc: "Each brand under K Media exists to educate, inspire, entertain, or empower — never just to fill a feed." },
  { icon: FiAward,     title: "Scalable Brand Ecosystem", desc: "Our multi-brand model lets us scale rapidly across niches while keeping each brand focused, credible, and impactful." },
];

const process = [
  { step: "01", title: "Identify the Niche",   desc: "We research underserved content spaces and identify where a new brand can create real value for a specific audience." },
  { step: "02", title: "Build the Brand",      desc: "We craft the brand identity — name, voice, visual language, and content strategy — from the ground up." },
  { step: "03", title: "Launch & Grow",        desc: "We publish consistently across platforms, grow the community, and establish the brand as a trusted voice in its niche." },
  { step: "04", title: "Scale the Ecosystem", desc: "Successful brands fuel the next. We reinvest learnings and resources to launch more brands and expand the K Media universe." },
];

const comparisons = [
  "Builds & owns multiple brands",
  "Content across 8+ niches",
  "Community-driven growth model",
  "Education + Entertainment combined",
  "Indore-based, national reach",
  "Purpose-led brand creation",
];

const stats = [
  { value: "8+",  label: "Brands & Counting" },
  { value: "10+", label: "Content Verticals" },
  { value: "2026", label: "Founded in Indore" },
  { value: "∞",   label: "Stories to Tell" },
];

/* ─── Hooks ─────────────────────────────────────────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function useTilt() {
  const ref = useRef(null);
  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 18;
    const y = ((e.clientY - rect.top)  / rect.height - 0.5) * 18;
    el.style.transform = `perspective(700px) rotateY(${x}deg) rotateX(${-y}deg) scale3d(1.04,1.04,1.04)`;
  };
  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = "perspective(700px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)";
  };
  return { ref, onMouseMove: handleMove, onMouseLeave: handleLeave };
}

/* ─── Decorative Background Icons ───────────────────────────────────────── */
const BG_ICONS = [
  { Icon: FiCamera,    top:"6%",   left:"4%",   size:28, dur:14, delay:0,   rot:15  },
  { Icon: FiPlay,      top:"12%",  left:"88%",  size:22, dur:18, delay:2,   rot:-20 },
  { Icon: FiBarChart2, top:"22%",  left:"92%",  size:32, dur:12, delay:1,   rot:10  },
  { Icon: FiGlobe,     top:"35%",  left:"2%",   size:36, dur:20, delay:3,   rot:-12 },
  { Icon: FiTarget,    top:"48%",  left:"95%",  size:24, dur:16, delay:0.5, rot:25  },
  { Icon: FiCpu,       top:"58%",  left:"5%",   size:26, dur:22, delay:4,   rot:-8  },
  { Icon: FiFeather,   top:"70%",  left:"90%",  size:20, dur:13, delay:1.5, rot:18  },
  { Icon: FiRadio,     top:"80%",  left:"3%",   size:30, dur:17, delay:2.5, rot:-15 },
  { Icon: FiFilm,      top:"88%",  left:"85%",  size:34, dur:19, delay:0.8, rot:8   },
  { Icon: FiInstagram, top:"15%",  left:"50%",  size:18, dur:25, delay:6,   rot:-5  },
  { Icon: FiYoutube,   top:"65%",  left:"48%",  size:20, dur:21, delay:3.5, rot:12  },
  { Icon: FiPieChart,  top:"42%",  left:"50%",  size:16, dur:28, delay:7,   rot:-18 },
  { Icon: FiStar,      top:"5%",   left:"60%",  size:14, dur:15, delay:1,   rot:30  },
  { Icon: FiZap,       top:"92%",  left:"40%",  size:22, dur:11, delay:2,   rot:-22 },
  { Icon: FiTrendingUp,top:"75%",  left:"70%",  size:26, dur:23, delay:4.5, rot:5   },
];

function BgIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <style>{`
        @keyframes bgFloat {
          0%,100% { transform: translateY(0px) rotate(var(--r)); }
          50%      { transform: translateY(-18px) rotate(calc(var(--r) + 8deg)); }
        }
      `}</style>
      {BG_ICONS.map(({ Icon, top, left, size, dur, delay, rot }, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            top, left,
            "--r": `${rot}deg`,
            animation: `bgFloat ${dur}s ${delay}s ease-in-out infinite`,
            opacity: 0.07,
            color: "#C91111",
            fontSize: size,
            lineHeight: 1,
          }}
        >
          <Icon />
        </span>
      ))}
    </div>
  );
}

/* ─── Floating Particles ─────────────────────────────────────────────────── */
function Particles() {
  const particles = Array.from({ length: 22 }, (_, i) => ({
    id: i,
    size:  2 + Math.random() * 4,
    left:  Math.random() * 100,
    delay: Math.random() * 8,
    dur:   6 + Math.random() * 8,
    opacity: 0.08 + Math.random() * 0.18,
  }));
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map(p => (
        <span
          key={p.id}
          style={{
            position: "absolute",
            bottom: "-20px",
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: "#C91111",
            opacity: p.opacity,
            animation: `floatUp ${p.dur}s ${p.delay}s infinite linear`,
          }}
        />
      ))}
    </div>
  );
}

/* ─── 3D Reason Card ─────────────────────────────────────────────────────── */
function ReasonCard({ icon: Icon, title, desc, index }) {
  const tilt = useTilt();
  const [ref, visible] = useInView(0.1);
  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${index * 80}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      <div
        ref={tilt.ref}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        style={{ transition: "transform 0.15s ease", transformStyle: "preserve-3d" }}
        className="group relative bg-white border border-gray-100 rounded-3xl p-7 flex flex-col gap-4 cursor-default overflow-hidden shadow-sm hover:shadow-xl hover:border-[#C91111]/20"
      >
        {/* Red corner glow */}
        <span className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-[#C91111]/6 blur-2xl group-hover:bg-[#C91111]/14 transition-all duration-500" />
        
        {/* Icon left-aligned */}
        <div className="flex items-center gap-3">
          <div className="relative w-11 h-11 flex-shrink-0 flex items-center justify-center" style={{ borderRadius: 14, background: "rgba(201,17,17,0.08)" }}>
            <Icon className="text-[#C91111] text-xl" />
          </div>
          <p className="font-bold text-gray-900 text-base tracking-tight">{title}</p>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>

        {/* Bottom red line slide-in */}
        <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#C91111] to-[#ff4444] group-hover:w-full transition-all duration-500 rounded-b-3xl" />
      </div>
    </div>
  );
}

/* ─── Process Step ────────────────────────────────────────────────────────── */
function ProcessStep({ step, title, desc, index, total }) {
  const [ref, visible] = useInView(0.1);
  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${index * 120}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(50px) scale(0.95)",
        transition: "opacity 0.65s ease, transform 0.65s ease",
      }}
      className="relative flex flex-col gap-3"
    >
      {/* Connector line */}
      {index < total - 1 && (
        <span className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-[#C91111]/40 to-transparent z-10 -translate-y-1/2" style={{width:"calc(100% - 2rem)", left:"calc(100% - 1rem)"}} />
      )}

      <div className="group bg-white border border-gray-100 rounded-3xl p-7 flex flex-col gap-3 shadow-sm hover:shadow-lg hover:border-[#C91111]/25 transition-all duration-300 h-full">
        {/* Step number — big ghosted top-LEFT */}
        <span className="font-black text-6xl leading-none select-none self-start"
          style={{ color: "transparent", WebkitTextStroke: "2px rgba(201,17,17,0.12)", fontFamily: "'Georgia', serif" }}>
          {step}
        </span>

        {/* Number badge */}
        <span className="w-7 h-7 rounded-full bg-[#C91111] text-white text-xs font-bold flex items-center justify-center -mt-3 self-start shadow-md shadow-[#C91111]/30">
          {index + 1}
        </span>

        <p className="font-bold text-gray-900 text-sm tracking-tight">{title}</p>
        <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

/* ─── Stat Counter ────────────────────────────────────────────────────────── */
function StatCard({ value, label, index }) {
  const [ref, visible] = useInView(0.2);
  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${index * 100}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}
      className="flex flex-col items-center gap-1"
    >
      <span className="text-4xl sm:text-5xl font-black text-[#C91111] tracking-tight" style={{fontFamily:"'Georgia',serif"}}>{value}</span>
      <span className="text-xs text-gray-400 font-medium tracking-widest uppercase">{label}</span>
    </div>
  );
}

/* ─── Main Component ──────────────────────────────────────────────────────── */
export default function WhyUs() {
  const [heroRef, heroVisible] = useInView(0.05);
  const [tableRef, tableVisible] = useInView(0.1);

  return (
    <>
      {/* Keyframes injected via style tag */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');

        @keyframes aboutSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes aboutSpinRev {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
        @keyframes floatUp {
          0%   { transform: translateY(0)   scale(1);   opacity: var(--op, 0.12); }
          50%  { transform: translateY(-55vh) scale(1.3); opacity: calc(var(--op,0.12)*0.5); }
          100% { transform: translateY(-110vh) scale(0.8); opacity: 0; }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes spinReverse {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
        @keyframes pulse3d {
          0%,100% { box-shadow: 0 0 0 0 rgba(201,17,17,0.25); }
          50%     { box-shadow: 0 0 0 20px rgba(201,17,17,0); }
        }
        @keyframes slideInLeft {
          from { opacity:0; transform: translateX(-60px); }
          to   { opacity:1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity:0; transform: translateX(60px); }
          to   { opacity:1; transform: translateX(0); }
        }
        @keyframes fadeUp {
          from { opacity:0; transform: translateY(30px); }
          to   { opacity:1; transform: translateY(0); }
        }
        @keyframes rotateLine {
          0%   { transform: scaleX(0); transform-origin: left; }
          100% { transform: scaleX(1); transform-origin: left; }
        }
        .font-display { font-family: 'Playfair Display', Georgia, serif; }
        .font-body    { font-family: 'DM Sans', sans-serif; }
        .perspective-card { perspective: 1000px; }
        .ring-spin-1 { animation: spinSlow 20s linear infinite; }
        .ring-spin-2 { animation: spinReverse 15s linear infinite; }
        .hero-animate { animation: fadeUp 0.9s ease forwards; }
      `}</style>

      <section
        id="why-us"
        className="font-body relative min-h-screen bg-white overflow-hidden"
        style={{ background: "linear-gradient(180deg, #ffffff 0%, #fafafa 100%)" }}
      >
        {/* ── Background decorations ── */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {/* Top-left mesh blob */}
          <div style={{
            position:"absolute", top:"-120px", left:"-120px",
            width:"500px", height:"500px", borderRadius:"50%",
            background:"radial-gradient(circle, rgba(201,17,17,0.06) 0%, transparent 70%)",
          }} />
          {/* Bottom-right mesh blob */}
          <div style={{
            position:"absolute", bottom:"-80px", right:"-80px",
            width:"400px", height:"400px", borderRadius:"50%",
            background:"radial-gradient(circle, rgba(201,17,17,0.05) 0%, transparent 70%)",
          }} />
          {/* Subtle grid lines */}
          <svg width="100%" height="100%" style={{opacity:0.1}}>
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#C91111" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <WhyDecorations />
        <Particles />

        <div className="relative max-w-6xl mx-auto px-6 py-24 flex flex-col gap-28">

          {/* ══ HERO HEADER ══════════════════════════════════════════════ */}
          <div ref={heroRef} className="relative text-center flex flex-col items-center gap-6">



            <div style={{
              opacity: heroVisible ? 1 : 0,
              animation: heroVisible ? "slideInLeft 0.8s ease forwards" : "none"
            }}>
              <span style={{
                display:"inline-flex", alignItems:"center", gap:"8px",
                padding:"6px 18px", borderRadius:"999px",
                background:"rgba(201,17,17,0.07)", border:"1px solid rgba(201,17,17,0.15)",
                color:"#C91111", fontSize:"11px", fontWeight:700,
                letterSpacing:"0.18em", textTransform:"uppercase"
              }}>
                <span style={{width:6,height:6,borderRadius:"50%",background:"#C91111",animation:"pulse3d 2s infinite"}} />
                Why K Media
              </span>
            </div>

            <h2
              className="font-display font-black text-gray-900 relative"
              style={{
                fontSize:"clamp(2.4rem, 6vw, 4.5rem)",
                lineHeight:1.05,
                letterSpacing:"-0.02em",
                opacity: heroVisible ? 1 : 0,
                animation: heroVisible ? "fadeUp 0.9s 0.15s ease forwards" : "none",
              }}
            >
              Why Choose{" "}
              <span style={{
                color:"#C91111",
                position:"relative",
                display:"inline-block",
              }}>
                K Media
                {/* Underline swoosh */}
                <svg viewBox="0 0 80 12" style={{
                  position:"absolute", bottom:"-8px", left:0, width:"100%",
                  overflow:"visible"
                }}>
                  <path d="M 2 8 Q 40 2 78 8" stroke="#C91111" strokeWidth="3" fill="none"
                    strokeLinecap="round" strokeDasharray="120" strokeDashoffset="120"
                    style={{animation: heroVisible ? "rotateLine 0.8s 0.6s ease forwards" : "none"}} />
                </svg>
              </span>
            </h2>

            <p className="text-gray-400 text-base max-w-xl leading-relaxed" style={{
              opacity: heroVisible ? 1 : 0,
              animation: heroVisible ? "fadeUp 0.9s 0.3s ease forwards" : "none",
            }}>
              We don't run campaigns — we build brands. K Media is a multi-brand company from Indore creating content that educates, entertains, and empowers millions.
            </p>

            {/* Stats row */}
            <div className="w-full max-w-2xl mt-4 grid grid-cols-2 sm:grid-cols-4 gap-0 bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
              {stats.map((s, i) => (
                <div key={s.label} style={{ display: "flex", alignItems: "stretch" }}>
                  {i > 0 && <div style={{ width: 1, background: "rgba(201,17,17,0.12)", flexShrink: 0 }} />}
                  <div style={{ flex: 1, padding: "28px 16px" }}>
                    <StatCard {...s} index={i} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ══ REASONS GRID ══════════════════════════════════════════════ */}
          <div>
            <div className="text-center mb-12">
              <p className="text-[#C91111] text-xs tracking-widest uppercase font-semibold mb-3">What Sets Us Apart</p>
              <h3 className="font-display font-black text-gray-900 text-3xl sm:text-4xl">The K Media Advantage</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {reasons.map((r, i) => (
                <ReasonCard key={r.title} {...r} index={i} />
              ))}
            </div>
          </div>

          {/* ══ PROCESS ═══════════════════════════════════════════════════ */}
          <div>
            <div className="text-center mb-14">
              <p className="text-[#C91111] text-xs tracking-widest uppercase font-semibold mb-3">How We Build</p>
              <h3 className="font-display font-black text-gray-900 text-3xl sm:text-4xl">
                Our <span className="text-[#C91111]">Process</span>
              </h3>
              <p className="text-gray-400 text-sm mt-3 max-w-md mx-auto">A four-stage system we use to launch, grow, and scale every brand in the K Media ecosystem.</p>
            </div>

            {/* Curved path SVG behind steps */}
            <div className="relative">
              <div className="hidden lg:block absolute top-16 left-0 right-0 pointer-events-none" style={{zIndex:0}} aria-hidden="true">
                <svg viewBox="0 0 900 60" style={{width:"100%", overflow:"visible"}}>
                  <path d="M 50 30 C 200 5, 350 55, 450 30 S 700 5, 850 30"
                    fill="none" stroke="#C91111" strokeWidth="1.5"
                    strokeDasharray="8 6" opacity="0.2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" style={{position:"relative", zIndex:1}}>
                {process.map((p, i) => (
                  <ProcessStep key={p.step} {...p} index={i} total={process.length} />
                ))}
              </div>
            </div>
          </div>

          {/* ══ COMPARISON TABLE ══════════════════════════════════════════ */}
          <div ref={tableRef}>
            <div className="text-center mb-12">
              <p className="text-[#C91111] text-xs tracking-widest uppercase font-semibold mb-3">The Difference</p>
              <h3 className="font-display font-black text-gray-900 text-3xl sm:text-4xl">
                K Media vs <span className="text-[#C91111]">Others</span>
              </h3>
            </div>

            <div
              style={{
                opacity: tableVisible ? 1 : 0,
                transform: tableVisible ? "translateY(0)" : "translateY(50px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
                borderRadius:"28px",
                overflow:"hidden",
                border:"1px solid rgba(201,17,17,0.12)",
                boxShadow: tableVisible ? "0 20px 80px rgba(201,17,17,0.07), 0 4px 24px rgba(0,0,0,0.05)" : "none",
                transition: "opacity 0.7s ease, transform 0.7s ease, box-shadow 0.7s ease",
              }}
            >
              {/* Header */}
              <div style={{
                display:"grid", gridTemplateColumns:"1fr 1fr 1fr",
                background:"linear-gradient(135deg, #C91111 0%, #a00d0d 100%)",
                padding:"18px 28px", alignItems:"center"
              }}>
                <span style={{color:"rgba(255,255,255,0.7)", fontSize:"11px", fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase"}}>Feature</span>
                <span style={{textAlign:"center", color:"#fff", fontSize:"13px", fontWeight:800, letterSpacing:"0.04em"}}>
                  ✦ K Media
                </span>
                <span style={{textAlign:"center", color:"rgba(255,255,255,0.55)", fontSize:"12px", fontWeight:600}}>Others</span>
              </div>

              {/* Rows */}
              {comparisons.map((point, i) => (
                <div
                  key={point}
                  style={{
                    display:"grid", gridTemplateColumns:"1fr 1fr 1fr",
                    padding:"16px 28px", alignItems:"center",
                    background: i % 2 === 0 ? "#fff" : "#fafafa",
                    borderTop: "1px solid rgba(201,17,17,0.05)",
                    opacity: tableVisible ? 1 : 0,
                    transform: tableVisible ? "translateX(0)" : "translateX(-20px)",
                    transition: `opacity 0.5s ${0.1 + i * 0.07}s ease, transform 0.5s ${0.1 + i * 0.07}s ease`,
                  }}
                >
                  <span style={{color:"#374151", fontWeight:600, fontSize:"14px"}}>{point}</span>

                  {/* Kodanda tick */}
                  <span style={{display:"flex", justifyContent:"center"}}>
                    <span style={{
                      width:32, height:32, borderRadius:"50%",
                      background:"rgba(201,17,17,0.08)",
                      display:"flex", alignItems:"center", justifyContent:"center",
                      animation:"pulse3d 3s infinite",
                    }}>
                      <FiCheckCircle style={{color:"#C91111", fontSize:18}} />
                    </span>
                  </span>

                  {/* Others cross */}
                  <span style={{display:"flex", justifyContent:"center"}}>
                    <span style={{
                      width:28, height:28, borderRadius:"50%",
                      background:"#f3f4f6",
                      display:"flex", alignItems:"center", justifyContent:"center",
                      color:"#9ca3af", fontSize:11, fontWeight:700
                    }}>✕</span>
                  </span>
                </div>
              ))}

              {/* Footer CTA strip */}
              <div style={{
                background:"linear-gradient(135deg, #C91111 0%, #a00d0d 100%)",
                padding:"20px 28px", textAlign:"center"
              }}>
                <p style={{color:"rgba(255,255,255,0.9)", fontSize:"13px", fontWeight:500}}>
                  Want to be part of the K Media story?{" "}
                  <a href="#contact" style={{
                    color:"#fff", fontWeight:800, textDecoration:"underline",
                    textUnderlineOffset:"3px", letterSpacing:"0.02em"
                  }}>
                    Connect with us →
                  </a>
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
