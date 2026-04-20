import { useState, useEffect, useRef } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck } from "react-icons/fi";
import menImg from "../assets/men-nobg.png";
import ShapeGrid from "../animations/ShapeGrid";
import axios from "axios";
import toast from "react-hot-toast";

/* ─── Data ───────────────────────────────────────────────────────────────── */
const info = [
  { icon: FiMapPin, label: "Visit Us", value: "Indore, MP" },
  { icon: FiMail, label: "Email", value: "info@kodandamedia.com" },
  { icon: FiPhone, label: "Call", value: "+91 80850 82069" },
];

/* ─── Keyframes (only what Tailwind can't express) ───────────────────────── */
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;700&display=swap');

  .font-display { font-family: 'Playfair Display', Georgia, serif; }
  .font-body    { font-family: 'DM Sans', sans-serif; }

  @keyframes orbit-fwd  { to { transform: translate(-50%,-50%) rotate(360deg);  } }
  @keyframes orbit-rev  { to { transform: translate(-50%,-50%) rotate(-360deg); } }
  @keyframes sparks-up  {
    0%   { transform: translateY(0) scale(1);      opacity: .14; }
    60%  { opacity: .07; }
    100% { transform: translateY(-70vh) scale(.5); opacity: 0;   }
  }
  @keyframes pulse-glow {
    0%,100% { box-shadow: 0 0 0 0    rgba(201,17,17,.3); }
    50%     { box-shadow: 0 0 0 14px rgba(201,17,17,0);  }
  }
  @keyframes spin-loader { to { transform: rotate(360deg); } }
  @keyframes btn-send {
    0%,100% { transform: translateX(0);   }
    50%     { transform: translateX(5px); }
  }
  @keyframes check-pop {
    0%   { transform: scale(0) rotate(-30deg); opacity: 0; }
    70%  { transform: scale(1.2) rotate(5deg); opacity: 1; }
    100% { transform: scale(1)  rotate(0deg); opacity: 1; }
  }
  @keyframes draw-line {
    from { stroke-dashoffset: 300; }
    to   { stroke-dashoffset: 0;   }
  }
  @keyframes shimmer-bar {
    0%   { background-position: 0%   0; }
    100% { background-position: 200% 0; }
  }
  @keyframes sweep {
    0%   { transform: skewX(-20deg) translateX(-150%); }
    100% { transform: skewX(-20deg) translateX(250%);  }
  }

  /* Named animation classes */
  .anim-orbit-fwd  { animation: orbit-fwd  28s linear infinite; }
  .anim-orbit-rev  { animation: orbit-rev  18s linear infinite; }
  .anim-orbit-sm   { animation: orbit-fwd  12s linear infinite; }
  .anim-sparks     { animation: sparks-up  var(--dur,6s) var(--delay,0s) infinite linear; }
  .anim-pulse-glow { animation: pulse-glow 2s infinite; }
  .anim-spin       { animation: spin-loader .7s linear infinite; }
  .anim-btn-send   { animation: btn-send 1.6s ease infinite; }
  .anim-check-pop  { animation: check-pop .4s ease forwards; }
  .anim-sweep      { animation: sweep 1s infinite; }
  .anim-draw-line  { animation: draw-line 1s 0.4s ease forwards; }
  .anim-shimbar {
    background: linear-gradient(90deg, #C91111, #ff6b6b, #C91111);
    background-size: 200% 100%;
    animation: shimmer-bar 2.5s linear infinite;
  }
`;

/* ─── Cursor Glow ────────────────────────────────────────────────────────── */
function CursorGlow() {
  const glowRef = useRef(null);
  const trailRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const trail = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", move);
    let raf;
    const tick = () => {
      trail.current.x += (pos.current.x - trail.current.x) * 0.08;
      trail.current.y += (pos.current.y - trail.current.y) * 0.08;
      if (glowRef.current)
        glowRef.current.style.transform = `translate(${pos.current.x - 220}px,${pos.current.y - 220}px)`;
      if (trailRef.current)
        trailRef.current.style.transform = `translate(${trail.current.x - 10}px,${trail.current.y - 10}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Large soft glow — needs radial-gradient, keep minimal style */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="fixed top-0 left-0 w-[440px] h-[440px] rounded-full pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(circle,rgba(201,17,17,0.07) 0%,transparent 70%)",
          willChange: "transform",
        }}
      />
      {/* Cursor ring */}
      <div
        ref={trailRef}
        aria-hidden="true"
        className="fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-[9999] border-2 border-[#C91111]/50 bg-[#C91111]/10"
        style={{ willChange: "transform" }}
      />
    </>
  );
}

/* ─── Scroll Progress ─────────────────────────────────────────────────────── */
function ScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const fn = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      setPct(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] bg-[#C91111]/10 z-[9998]">
      <div
        className="h-full bg-gradient-to-r from-[#C91111] to-[#ff4444] shadow-[0_0_8px_rgba(201,17,17,0.6)] transition-[width] duration-100 linear"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

/* ─── Scroll Reveal ───────────────────────────────────────────────────────── */
function Reveal({ children, delay = 0, direction = "up" }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVis(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const hiddenClass =
    {
      up: "opacity-0 translate-y-12",
      down: "opacity-0 -translate-y-12",
      left: "opacity-0 -translate-x-12",
      right: "opacity-0 translate-x-12",
      scale: "opacity-0 scale-90",
    }[direction] ?? "opacity-0 translate-y-12";

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${vis ? "opacity-100 translate-y-0 translate-x-0 scale-100" : hiddenClass}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

/* ─── 3D Tilt ─────────────────────────────────────────────────────────────── */
function Tilt({ children, strength = 16 }) {
  const ref = useRef(null);
  const move = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * strength;
    const y = ((e.clientY - r.top) / r.height - 0.5) * strength;
    ref.current.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${-y}deg) scale3d(1.02,1.02,1.02)`;
  };
  const leave = () => {
    ref.current.style.transform =
      "perspective(900px) rotateY(0) rotateX(0) scale3d(1,1,1)";
  };
  return (
    <div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={leave}
      className="transition-transform duration-[180ms] ease-out"
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}

/* ─── Float3D (JS-driven smooth bob) ─────────────────────────────────────── */
function Float3D({ children, delayOffset = 0, amplitude = 14 }) {
  const ref = useRef(null);
  useEffect(() => {
    let raf,
      t = delayOffset;
    const tick = () => {
      t += 0.009;
      if (ref.current) {
        const y = Math.sin(t) * amplitude;
        const rot = Math.sin(t * 0.6) * 8;
        ref.current.style.transform = `translateY(${y}px) rotateY(${rot}deg) rotateZ(${rot * 0.2}deg)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [delayOffset, amplitude]);
  return (
    <div
      ref={ref}
      style={{ transformStyle: "preserve-3d", willChange: "transform" }}
    >
      {children}
    </div>
  );
}

/* ─── Sparks ──────────────────────────────────────────────────────────────── */
function Sparks() {
  const pts = useRef(
    Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 7,
      dur: 5 + Math.random() * 6,
      size: 2 + Math.random() * 3,
    })),
  ).current;

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {pts.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-[-10px] rounded-full bg-[#C91111] anim-sparks"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            opacity: 0.12,
            "--dur": `${p.dur}s`,
            "--delay": `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ─── Orbit Ring ──────────────────────────────────────────────────────────── */
function OrbitRing({ sizePx, animClass, opacity = "0.09" }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute rounded-full pointer-events-none border-dashed border-[#C91111] ${animClass}`}
      style={{
        width: sizePx,
        height: sizePx,
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        borderWidth: "1.5px",
        borderColor: `rgba(201,17,17,${opacity})`,
      }}
    />
  );
}

/* ─── Info Card ───────────────────────────────────────────────────────────── */
function InfoCard({ icon: Icon, label, value, index }) {
  const [hov, setHov] = useState(false);
  return (
    <Reveal delay={0.15 + index * 0.1} direction="up">
      <Tilt strength={12}>
        <div
          onMouseEnter={() => setHov(true)}
          onMouseLeave={() => setHov(false)}
          className={`flex flex-col items-center gap-2.5 rounded-[20px] px-3 py-5
            text-center cursor-default transition-all duration-300 border
            ${hov
              ? "border-[#C91111]/30 shadow-[0_12px_40px_rgba(201,17,17,0.1)] -translate-y-1 bg-gradient-to-br from-white to-red-50"
              : "border-gray-200 shadow-sm bg-white"
            }`}
        >
          <div
            className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300
            ${hov ? "bg-[#C91111] shadow-[0_6px_20px_rgba(201,17,17,0.3)]" : "bg-[#C91111]/10"}`}
          >
            <Icon
              className={`text-lg transition-colors duration-300 ${hov ? "text-white" : "text-[#C91111]"}`}
            />
          </div>
          <p className="text-gray-400 text-[10px] font-bold tracking-widest uppercase">
            {label}
          </p>
          <p className="text-gray-900 font-bold text-[12px] leading-snug break-words">
            {value}
          </p>
          <div
            className="h-[3px] bg-[#C91111] rounded-sm transition-all duration-300"
            style={{ width: hov ? 40 : 0 }}
          />
        </div>
      </Tilt>
    </Reveal>
  );
}

/* ─── Animated Input ──────────────────────────────────────────────────────── */
function AnimInput({ type = "text", placeholder, rows, value, onChange }) {
  const [focused, setFocused] = useState(false);
  const [filled, setFilled] = useState(false);

  const cls = [
    "w-full font-body text-sm text-gray-900 placeholder-gray-400",
    "rounded-[14px] px-[18px] py-[14px] outline-none resize-y",
    "bg-gray-50 transition-all duration-200",
    focused
      ? "border-[1.5px] border-[#C91111] bg-white shadow-[0_0_0_4px_rgba(201,17,17,0.08)]"
      : filled
        ? "border-[1.5px] border-[#C91111]/35"
        : "border-[1.5px] border-gray-200",
  ].join(" ");

  const handlers = {
    value,
    onChange,
    placeholder,
    className: cls,
    onFocus: () => setFocused(true),
    onBlur: (e) => {
      setFocused(false);
      setFilled(!!e.target.value);
    },
  };

  return rows ? (
    <textarea {...handlers} rows={rows} />
  ) : (
    <input {...handlers} type={type} />
  );
}

/* ─── Main ────────────────────────────────────────────────────────────────── */
export default function Contact() {
  const sectionRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const fn = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const sectionTop = sectionRef.current?.offsetTop ?? 0;
  const localScroll = Math.max(0, scrollY - sectionTop + 400);
  const menParallax = -localScroll * 0.06;

  const handleSend = async () => {
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all required fields ❗");
      return;
    }

    try {
      setSending(true);

      await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, {
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      });

      setSending(false);
      setSent(true);

      toast.success("Message sent successfully 🚀");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setSent(false), 8000);
    } catch (error) {
      setSending(false);

      toast.error("Failed to send message ❌");
      console.error(error);
    }
  };

  return (
    <>
      <style>{STYLES}</style>
      <ScrollProgress />

      <section
        ref={sectionRef}
        id="contact"
        className="font-body relative min-h-screen overflow-hidden px-6 pt-[100px] pb-20"
        style={{
          background:
            "linear-gradient(160deg,#ffffff 0%,#fafafa 60%,#fff5f5 100%)",
        }}
      >
        {/* ShapeGrid BG */}
        <div className="absolute inset-0 z-0 hidden md:block">
          <ShapeGrid
            direction="diagonal"
            speed={0.4}
            borderColor="rgba(201,17,17,0.40)"
            squareSize={60}
            hoverFillColor="#C91111"
            hoverTrailAmount={4}
            shape="square"
          />
          <div className="absolute inset-0 bg-white/75 pointer-events-none" />
        </div>

        <Sparks />

        {/* Corner blobs */}
        <div
          className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle,rgba(201,17,17,0.05) 0%,transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle,rgba(201,17,17,0.04) 0%,transparent 70%)",
          }}
        />

        {/* Grid overlay */}
        <svg
          width="100%"
          height="100%"
          className="absolute inset-0 opacity-[0.022] pointer-events-none"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="cgrid"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 48 0 L 0 0 0 48"
                fill="none"
                stroke="#C91111"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cgrid)" />
        </svg>

        {/* Floating 3D icon decorations */}
        <div className="absolute left-[4%] top-[10%] opacity-[0.13] z-[1] text-[48px] text-[#C91111] pointer-events-none">
          <Float3D delayOffset={0} amplitude={16}>
            <FiMail />
          </Float3D>
        </div>
        <div className="absolute right-[8%] top-[24%] opacity-[0.20] z-[1] text-[60px] text-[#C91111] pointer-events-none">
          <Float3D delayOffset={1.5} amplitude={12}>
            <FiPhone />
          </Float3D>
        </div>
        <div className="absolute left-[8%] bottom-[25%] opacity-[0.16] z-[1] text-[52px] text-[#C91111] pointer-events-none">
          <Float3D delayOffset={3} amplitude={20}>
            <FiMapPin />
          </Float3D>
        </div>
        <div className="absolute right-[8%] bottom-[6%] opacity-[0.20] z-[1] text-[52px] text-[#C91111] pointer-events-none">
          <Float3D delayOffset={2} amplitude={14}>
            <FiSend />
          </Float3D>
        </div>

        {/* ══ Main content ══ */}
        <div className="relative z-[2] max-w-[1100px] mx-auto">
          {/* Header */}
          <Reveal direction="up">
            <div className="text-center mb-10 -mt-8">
              <div
                className="inline-flex items-center gap-2 mb-4 px-5 py-[6px] rounded-full
                bg-[#C91111]/[0.07] border border-[#C91111]/20
                text-[#C91111] text-[11px] font-bold tracking-[0.18em] uppercase"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#C91111] anim-pulse-glow" />
                Get In Touch
              </div>

              <h2
                className="font-display font-black text-gray-900 tracking-tight mb-4"
                style={{
                  fontSize: "clamp(2.4rem,5.5vw,4.2rem)",
                  lineHeight: 1.05,
                }}
              >
                Let's{" "}
                <span className="text-[#C91111] relative inline-block">
                  Talk
                  <svg
                    viewBox="0 0 100 14"
                    className="absolute -bottom-1.5 left-0 w-full overflow-visible"
                  >
                    <path
                      d="M 3 10 Q 50 3 97 10"
                      stroke="#C91111"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray="300"
                      strokeDashoffset="300"
                      className="anim-draw-line"
                    />
                  </svg>
                </span>
              </h2>

              <p className="text-gray-700 text-[15px] max-w-[440px] mx-auto leading-relaxed">
                Ready to elevate your brand? We'd love to hear about your
                project.
              </p>
            </div>
          </Reveal>

          {/* Two-column grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-start">
            {/* ── Left: Map + Info ── */}
            <div className="flex flex-col gap-4">
              <Reveal direction="left" delay={0.1}>
                <Tilt strength={8}>
                  <div className="hidden md:block rounded-3xl overflow-hidden border border-[#C91111]/[0.12] shadow-[0_8px_40px_rgba(0,0,0,0.07)] relative">
                    <div className="h-1 anim-shimbar" />
                    <iframe
                      title="Unity One Mall Indore"
                      src="https://www.google.com/maps/embed?pb=..."
                      width="100%"
                      height="280"
                      style={{ border: 0, display: "block" }}
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                </Tilt>
              </Reveal>

              <div className="hidden justify-center items-center gap-6 md:hidden mt-2 relative z-20">
                {info.map((item, i) => {
                  const Icon = item.icon;

                  return (
                    <div key={i} className="relative group">
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-full bg-[#C91111]/10 flex items-center justify-center text-[#C91111] border border-[#C91111]/20 shadow-sm">
                        <Icon className="text-lg" />
                      </div>

                      {/* Tooltip */}
                      <div
                        className="
            absolute left-1/2 -translate-x-1/2 top-14
            bg-[#C91111] text-white text-[11px] px-3 py-1.5 rounded-md
            whitespace-nowrap shadow-lg
            opacity-0 scale-90 pointer-events-none
            group-hover:opacity-100 group-hover:scale-100
            transition-all duration-200
            z-50
          "
                      >
                        {item.value}
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* ✅ DESKTOP (full cards) */}
              <div className="hidden md:grid grid-cols-3 gap-2.5">
                {info.map((item, i) => (
                  <InfoCard key={item.label} {...item} index={i} />
                ))}
              </div>
            </div>

            {/* ── Right: Form ── */}
            <Reveal direction="right" delay={0.15}>
              <div className="relative">
                {/* Parallax man */}
                <img
                  src={menImg}
                  alt=""
                  className="hidden lg:block absolute -right-36 -bottom-12 h-[250px] w-auto object-contain z-10 pointer-events-none select-none drop-shadow-[0_12px_32px_rgba(201,17,17,0.12)]"
                  style={{
                    transform: `translateY(${menParallax}px)`,
                    transition: "transform 0.1s linear",
                  }}
                />

                <Tilt strength={10}>
                  <div
                    className="relative overflow-hidden rounded-[28px] p-8 sm:p-9
                    bg-white/95 backdrop-blur-xl
                    border border-[#C91111]/[0.12]
                    shadow-[0_20px_60px_rgba(201,17,17,0.07),0_4px_20px_rgba(0,0,0,0.05)]"
                  >
                    {/* Corner glow */}
                    <div
                      className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(circle,rgba(201,17,17,0.07) 0%,transparent 70%)",
                      }}
                    />

                    {/* Form heading */}
                    <div className="mb-6 relative z-[1]">
                      <p className="font-display font-extrabold text-xl text-gray-900 mb-1">
                        Send us a message
                      </p>
                      <div className="w-10 h-[3px] bg-[#C91111] rounded-sm" />
                    </div>

                    <div className="flex flex-col gap-3.5 relative z-[1]">
                      {/* Name + Email row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <AnimInput
                          placeholder="Your Name"
                          value={form.name}
                          onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                          }
                        />
                        <AnimInput
                          type="email"
                          placeholder="Email Address"
                          value={form.email}
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                        />
                      </div>

                      <AnimInput
                        placeholder="Subject"
                        value={form.subject}
                        onChange={(e) =>
                          setForm({ ...form, subject: e.target.value })
                        }
                      />

                      <AnimInput
                        placeholder="Your Message"
                        rows={5}
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                      />

                      {/* Send button */}
                      <button
                        onClick={handleSend}
                        disabled={sending || sent}
                        className={`relative overflow-hidden w-full flex items-center justify-center gap-2.5
                          py-[15px] px-6 rounded-[14px] font-body font-bold text-[15px]
                          tracking-wide text-white transition-all duration-[250ms] ease-out
                          shadow-[0_6px_24px_rgba(201,17,17,0.28)]
                          ${sent
                            ? "bg-green-600 cursor-default"
                            : sending
                              ? "bg-[#C91111] cursor-default"
                              : "bg-[#C91111] cursor-pointer hover:bg-[#a50e0e] hover:scale-[1.02] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(201,17,17,0.45)]"
                          }`}
                      >
                        {/* Shimmer sweep */}
                        {sending && (
                          <span
                            className="absolute inset-0 anim-sweep"
                            style={{
                              background:
                                "linear-gradient(90deg,transparent 0%,rgba(255,255,255,0.12) 50%,transparent 100%)",
                              transform: "skewX(-20deg)",
                            }}
                          />
                        )}

                        {sent ? (
                          <>
                            <FiCheck className="anim-check-pop" />
                            Message Sent!
                          </>
                        ) : sending ? (
                          <>
                            <span className="w-4 h-4 rounded-full border-2 border-white/35 border-t-white anim-spin inline-block" />
                            Sending…
                          </>
                        ) : (
                          <>
                            Send Message
                            <FiSend className="anim-btn-send" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </Tilt>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
