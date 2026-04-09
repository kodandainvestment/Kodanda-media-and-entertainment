import { useEffect, useRef, useState } from "react";
import {
  FiTarget,
  FiEye,
  FiHeart,
  FiZap,
  FiUsers,
  FiAward,
  FiTrendingUp,
  FiBriefcase,
  FiCode,
  FiTerminal,
  FiCopy,
  FiCornerDownLeft,
  FiSearch,
  FiArrowUpRight,
  FiCommand,
  FiBox,
  FiPenTool,
  FiBarChart2,
  FiGlobe,
  FiStar,
  FiCamera,
  FiFilm,
  FiRadio,
  FiLayers,
  FiVideo,
  FiGrid,
} from "react-icons/fi";
import { TbBraces, TbArrowBarToRight } from "react-icons/tb";
import CountUp from "../animations/CountUp";
import CircularGallery from "../animations/CircularGallery ";

/* ── Decorative background ── */
const BG_ITEMS = [
  { Icon: FiStar, top: "4%", left: "2%", size: 38, dur: 14, delay: 0, rot: 20 },
  {
    Icon: FiCamera,
    top: "8%",
    left: "91%",
    size: 42,
    dur: 18,
    delay: 1.5,
    rot: -15,
  },
  {
    Icon: FiCode,
    top: "18%",
    left: "95%",
    size: 34,
    dur: 12,
    delay: 0.5,
    rot: 10,
  },
  {
    Icon: FiFilm,
    top: "28%",
    left: "1%",
    size: 44,
    dur: 20,
    delay: 3,
    rot: -10,
  },
  {
    Icon: FiRadio,
    top: "42%",
    left: "96%",
    size: 32,
    dur: 16,
    delay: 2,
    rot: 25,
  },
  {
    Icon: FiLayers,
    top: "55%",
    left: "3%",
    size: 40,
    dur: 22,
    delay: 4,
    rot: -8,
  },
  {
    Icon: FiBarChart2,
    top: "65%",
    left: "93%",
    size: 36,
    dur: 13,
    delay: 1,
    rot: 15,
  },
  {
    Icon: FiGlobe,
    top: "75%",
    left: "2%",
    size: 46,
    dur: 17,
    delay: 2.5,
    rot: -18,
  },
  {
    Icon: FiPenTool,
    top: "85%",
    left: "90%",
    size: 34,
    dur: 19,
    delay: 0.8,
    rot: 8,
  },
  {
    Icon: FiZap,
    top: "92%",
    left: "5%",
    size: 32,
    dur: 15,
    delay: 3.5,
    rot: -22,
  },
  {
    Icon: FiSearch,
    top: "12%",
    left: "48%",
    size: 28,
    dur: 24,
    delay: 5,
    rot: 12,
  },
  {
    Icon: FiAward,
    top: "35%",
    left: "50%",
    size: 30,
    dur: 21,
    delay: 6,
    rot: -6,
  },
  {
    Icon: FiTrendingUp,
    top: "50%",
    left: "97%",
    size: 36,
    dur: 16,
    delay: 1.2,
    rot: 18,
  },
  {
    Icon: FiTarget,
    top: "70%",
    left: "48%",
    size: 26,
    dur: 19,
    delay: 4.5,
    rot: -14,
  },
  {
    Icon: FiCommand,
    top: "22%",
    left: "5%",
    size: 32,
    dur: 23,
    delay: 2.8,
    rot: 30,
  },
  {
    Icon: FiBox,
    top: "60%",
    left: "97%",
    size: 38,
    dur: 14,
    delay: 0.3,
    rot: -5,
  },
  {
    Icon: FiTerminal,
    top: "80%",
    left: "45%",
    size: 28,
    dur: 20,
    delay: 7,
    rot: 10,
  },
  // { Icon: FiHeart,    top: "95%", left: "75%",  size: 30, dur: 18, delay: 3.2, rot: -20 },
];

function PageDecorations() {
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const itemRefs = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      };
    };
    window.addEventListener("mousemove", handleMouseMove);

    let raf;
    const speeds = BG_ITEMS.map((_, i) => 8 + (i % 5) * 6);
    const animate = () => {
      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        const speed = speeds[i];
        const tx = mouseRef.current.x * speed;
        const ty = mouseRef.current.y * speed;
        el.style.transform = `translate(${tx}px, ${ty}px) rotate(${BG_ITEMS[i].rot}deg)`;
      });
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
      aria-hidden="true"
    >
      <style>{`
        @keyframes aboutFloat {
          0%,100% { margin-top: 0px; }
          50%      { margin-top: -16px; }
        }
        @keyframes aboutSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes aboutSpinRev {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
        @keyframes aboutPulse {
          0%,100% { opacity: 0.08; transform: scale(1); }
          50%      { opacity: 0.18; transform: scale(1.15); }
        }
        .about-icon {
          transition: transform 0.15s ease-out;
          will-change: transform;
        }
        /* ── Card hover styles ── */
        .stat-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          position: relative; overflow: hidden;
        }
        .stat-card:hover {
          transform: translateY(-6px) scale(1.03);
          box-shadow: 0 16px 40px rgba(201,17,17,0.12);
          border-color: rgba(201,17,17,0.3) !important;
        }
        .stat-card:hover .stat-icon {
          transform: scale(1.3) rotate(10deg);
          color: #C91111;
        }
        .stat-icon { transition: transform 0.35s cubic-bezier(.34,1.56,.64,1); }
        .stat-card::after {
          content: '';
          position: absolute; bottom: 0; left: 0;
          width: 0; height: 3px;
          background: linear-gradient(90deg, #C91111, #ff4444);
          border-radius: 0 0 16px 16px;
          transition: width 0.4s ease;
        }
        .stat-card:hover::after { width: 100%; }

        .timeline-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          position: relative; overflow: hidden;
        }
        .timeline-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 36px rgba(201,17,17,0.1);
          border-color: rgba(201,17,17,0.25) !important;
        }
        .timeline-card .year-badge {
          transition: background 0.3s ease, transform 0.3s ease, color 0.3s ease;
        }
        .timeline-card:hover .year-badge {
          background: #C91111 !important;
          color: #fff !important;
          transform: scale(1.08);
        }
        .timeline-card::before {
          content: '';
          position: absolute; left: 0; top: 0;
          width: 3px; height: 0;
          background: linear-gradient(180deg, #C91111, #ff4444);
          border-radius: 16px 0 0 16px;
          transition: height 0.4s ease;
        }
        .timeline-card:hover::before { height: 100%; }

        .value-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          position: relative; overflow: hidden;
        }
        .value-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 40px rgba(201,17,17,0.1);
          border-color: rgba(201,17,17,0.25) !important;
        }
        .value-card .val-icon {
          transition: background 0.35s ease, transform 0.35s cubic-bezier(.34,1.56,.64,1), color 0.3s ease;
        }
        .value-card:hover .val-icon {
          background: #C91111 !important;
          color: #fff !important;
          transform: rotate(-8deg) scale(1.15);
        }
        .value-card::after {
          content: '';
          position: absolute; bottom: 0; left: 0;
          width: 0; height: 3px;
          background: linear-gradient(90deg, #C91111, #ff4444);
          transition: width 0.4s ease;
        }
        .value-card:hover::after { width: 100%; }
      `}</style>

      {/* Floating icons with mouse parallax */}
      {BG_ITEMS.map(({ Icon, top, left, size, dur, delay }, i) => (
        <span
          key={i}
          ref={(el) => (itemRefs.current[i] = el)}
          className="about-icon"
          style={{
            position: "absolute",
            top,
            left,
            fontSize: size,
            color: "#C91111",
            opacity: 0.18,
            lineHeight: 1,
            display: "inline-block",
            animation: `aboutFloat ${dur}s ${delay}s ease-in-out infinite`,
          }}
        >
          <Icon />
        </span>
      ))}

      {/* Top-right spinning rings */}
      <div
        style={{
          position: "absolute",
          top: -60,
          right: -60,
          width: 260,
          height: 260,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "1.5px dashed rgba(201,17,17,0.18)",
            animation: "aboutSpin 28s linear infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 40,
            borderRadius: "50%",
            border: "1px solid rgba(201,17,17,0.1)",
            animation: "aboutSpinRev 18s linear infinite",
          }}
        />
      </div>

      {/* Bottom-left spinning rings */}
      <div
        style={{
          position: "absolute",
          bottom: -50,
          left: -50,
          width: 200,
          height: 200,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "1.5px dashed rgba(201,17,17,0.15)",
            animation: "aboutSpinRev 22s linear infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 30,
            borderRadius: "50%",
            border: "1px solid rgba(201,17,17,0.08)",
            animation: "aboutSpin 14s linear infinite",
          }}
        />
      </div>

      {/* Mid-left dot cluster */}
      <svg
        width="70"
        height="70"
        viewBox="0 0 70 70"
        style={{ position: "absolute", left: "2%", top: "48%", opacity: 0.2 }}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <circle
            key={i}
            cx={(i % 3) * 24 + 11}
            cy={Math.floor(i / 3) * 24 + 11}
            r="3"
            fill="#C91111"
          />
        ))}
      </svg>

      {/* Mid-right dot cluster */}
      <svg
        width="70"
        height="70"
        viewBox="0 0 70 70"
        style={{ position: "absolute", right: "2%", top: "62%", opacity: 0.18 }}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <circle
            key={i}
            cx={(i % 3) * 24 + 11}
            cy={Math.floor(i / 3) * 24 + 11}
            r="3"
            fill="#C91111"
          />
        ))}
      </svg>

      {/* Radial blobs */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-80px",
          width: 320,
          height: 320,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(201,17,17,0.06) 0%, transparent 70%)",
          animation: "aboutPulse 8s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "45%",
          right: "-60px",
          width: 260,
          height: 260,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(201,17,17,0.05) 0%, transparent 70%)",
          animation: "aboutPulse 10s 2s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "30%",
          width: 200,
          height: 200,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(201,17,17,0.04) 0%, transparent 70%)",
          animation: "aboutPulse 12s 4s ease-in-out infinite",
        }}
      />

      {/* Grid overlay */}
      <svg
        width="100%"
        height="100%"
        style={{ position: "absolute", inset: 0, opacity: 0.025 }}
      >
        <defs>
          <pattern
            id="about-grid"
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
        <rect width="100%" height="100%" fill="url(#about-grid)" />
      </svg>

      {/* Bottom arc */}
      <svg
        width="400"
        height="60"
        viewBox="0 0 400 60"
        style={{
          position: "absolute",
          bottom: 80,
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.12,
        }}
      >
        <path
          d="M 10 50 Q 200 5 390 50"
          stroke="#C91111"
          strokeWidth="2"
          fill="none"
          strokeDasharray="8 6"
          strokeLinecap="round"
        />
        <path
          d="M 40 50 Q 200 18 360 50"
          stroke="#C91111"
          strokeWidth="1"
          fill="none"
          strokeDasharray="5 8"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

const stats = [
  { icon: <FiGrid />, value: "12+", label: "Active Chennals" },
  { icon: <FiTrendingUp />, value: "4+", label: "Plateforms" },
  { icon: <FiLayers />, value: "10+", label: "Content Categories" },
  { icon: <FiVideo />, value: "24+", label: "Daily Content output" },
];

const values = [
  {
    icon: <FiTarget />,
    title: "Short-Form Content Engine",
    desc: "We design short-form educational content—such as Shorts and Reels—that quickly captures attention, delivers value within seconds, and enhances audience engagement and reach.",
  },
  {
    icon: <FiEye />,
    title: "Long-Form & Podcasts",
    desc: "From deep-dive videos to impactful podcasts, we create content that builds authority and trust.",
  },
  {
    icon: <FiHeart />,
    title: "Multi-Channel Branding",
    desc: " Each channel has a unique identity, tone, and strategy tailored to its audience.",
  },
  {
    icon: <FiZap />,
    title: "End-to-End Production",
    desc: " From research and scripting to editing and publishing, we manage the complete content lifecycle.",
  },
];

const timeline = [
  {
    year: "2026",
    title: "Strategic Thinkers",
    desc: "We plan content with clear intent — backed by research, trends, and audience behavior.",
  },
  {
    year: "2026",
    title: "Storytelling Experts",
    desc: "We turn complex topics into engaging, easy-to-consume stories that retain attention.",
  },
  {
    year: "2026",
    title: "System-Driven Team",
    desc: "From scripts to publishing, everything follows a repeatable and scalable workflow.",
  },
  {
    year: "2026",
    title: "Growth Focused",
    desc: "Every piece of content is optimized for reach, engagement, and long-term audience building.",
  },
];

const mission = [
  {
    icon: <FiUsers />,
    Heading: "Our Mission",
    Text: "To create content that educates, empowers, and entertains, while building a scalable digital media network that delivers consistent value to millions.",
  },
  {
    icon: <FiBriefcase />,
    Heading: "Our Vision",
    Text: " To become one of India’s leading digital media powerhouses, shaping how the next generation learns, thinks, and consumes content.",
  },
];

const team = [
  {
    name: "Meera Kodanda",
    role: "Founder & CEO",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80",
  },
  {
    name: "Arjun Rao",
    role: "Creative Director",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80",
  },
  {
    name: "Sneha Desai",
    role: "Head of Strategy",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80",
  },
  {
    name: "Karthik Nair",
    role: "Lead Developer",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
  },
  {
    name: "Meera Kodanda",
    role: "Founder & CEO",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80",
  },
  {
    name: "Arjun Rao",
    role: "Creative Director",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80",
  },
  {
    name: "Sneha Desai",
    role: "Head of Strategy",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80",
  },
  {
    name: "Karthik Nair",
    role: "Lead Developer",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
  },
];

const iconStrip = [
  <TbArrowBarToRight size={22} />,
  <FiTerminal size={22} />,
  <FiCopy size={22} />,
  <FiCode size={22} />,
  <FiLayers size={22} />,
  <FiPenTool size={22} />,
  <TbBraces size={22} />,
  <FiCornerDownLeft size={22} />,
  <FiBarChart2 size={22} />,
  <FiSearch size={22} />,
  <FiGlobe size={22} />,
  <FiArrowUpRight size={22} />,
  <FiCommand size={22} />,
  <FiBox size={22} />,
];

function IconStrip() {
  const doubled = [...iconStrip, ...iconStrip];
  const total = doubled.length;
  return (
    <div
      className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden py-2"
      style={{
        borderTop: "1px solid #f3f4f6",
        borderBottom: "1px solid #f3f4f6",
      }}
    >
      <style>{`
        @keyframes scroll-ltr {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .icon-strip-track {
          display: flex;
          align-items: flex-end;
          width: max-content;
          animation: scroll-ltr 22s linear infinite;
          padding: 24px 0 32px;
        }
        .icon-strip-item {
          transition: background 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
        }
        .icon-strip-item:hover {
          background: rgba(201,17,17,0.1) !important;
          transform: translateY(-6px) scale(1.15) !important;
          box-shadow: 0 8px 20px rgba(201,17,17,0.18) !important;
          border-color: rgba(201,17,17,0.35) !important;
        }
      `}</style>
      <div className="icon-strip-track">
        {doubled.map((icon, i) => {
          const angle = (i / (doubled.length / 2)) * Math.PI * 2;
          const yOffset = Math.sin(angle) * 28;
          return (
            <div
              key={i}
              className="icon-strip-item flex-shrink-0 mx-3 w-14 h-14 rounded-full flex items-center justify-center cursor-default"
              style={{
                background: "#f9f9f9",
                border: "1.5px solid #f0f0f0",
                color: "#C91111",
                transform: `translateY(${yOffset}px)`,
                boxShadow: "0 2px 8px rgba(201,17,17,0.07)",
              }}
            >
              {icon}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function AnimatedCard({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, delay * 1000);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: "translateY(40px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      {children}
    </div>
  );
}

function TreeAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className="relative pl-6">
      {/* vertical line */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-300" />
      <div className="flex flex-col gap-4">
        {items.map((item, i) => (
          <div key={i} className="relative">
            {/* horizontal branch */}
            <div className="absolute left-[-24px] top-1/2 -translate-y-1/2 w-6 h-[2px] bg-gray-300" />
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full text-left bg-white border border-gray-200 rounded-xl px-5 py-4 flex justify-between items-center shadow-sm hover:border-[#C91111]/40 hover:shadow-md transition-all duration-200"
            >
              <span className="text-gray-900 font-semibold text-sm">
                {item.title}
              </span>
              <span className="text-[#C91111] text-xs font-bold ml-4">
                {openIndex === i ? "▲" : "▼"}
              </span>
            </button>
            {openIndex === i && (
              <div className="mt-1 ml-1 px-5 py-3 bg-[#C91111]/5 border border-[#C91111]/15 rounded-xl text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="bg-gray-50 px-6 py-20"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <PageDecorations />
      <div className="max-w-5xl mx-auto flex flex-col gap-20">
        {/* about hero section */}
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
            We Build Brands <span className="text-[#C91111]">That Matter</span>
          </h2>
          <p className="text-gray-800 text-base leading-relaxed mb-4">
            Kodanda Media & Entertainment is a multi-channel digital media
            ecosystem built to inform, inspire, and influence millions across
            India. We operate a network of niche-focused content platforms
            across YouTube, Instagram, and emerging digital spaces each designed
            with a clear identity, strong storytelling, and a system-driven
            production approach.
          </p>

         
          <div className="mt-10">
            {/* Mobile Scroll */}
            <div className="flex gap-4 overflow-x-auto sm:hidden no-scrollbar px-1">
              {stats.map((s, i) => {
                const num = parseInt(s.value);
                const suffix = s.value.replace(String(num), "");

                return (
                  <AnimatedCard
                    key={s.label}
                    delay={i * 0.1}
                    className="flex-shrink-0"
                  >
                    <div className="w-36 h-36 rounded-full border-t-4 border-l-4 border-[#C91111]/20 flex items-center justify-center">
                      <div className="w-28 h-28 rounded-full border-r-4 border-b-4 border-[#C91111] flex items-center justify-center bg-white shadow-sm">
                        <div className="flex flex-col items-center text-center px-2">
                          <div className="text-[#C91111] text-xl mb-1">
                            {s.icon}
                          </div>
                          <p className="text-gray-900 font-extrabold text-base">
                            <CountUp from={0} to={num} duration={1} />
                            {suffix}
                          </p>
                          <p className="text-gray-500 text-[10px] mt-1">
                            {s.label}
                          </p>
                        </div>
                      </div>
                    </div>
                  </AnimatedCard>
                );
              })}
            </div>

            {/* Desktop Grid */}
            <div className="hidden sm:grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
              {stats.map((s, i) => {
                const num = parseInt(s.value);
                const suffix = s.value.replace(String(num), "");

                return (
                  <AnimatedCard key={s.label} delay={i * 0.1}>
                    <div className="w-44 h-44 rounded-full border-t-4 border-l-4 border-[#C91111]/20 flex items-center justify-center">
                      <div className="w-36 h-36 rounded-full border-r-4 border-b-4 border-[#C91111] flex items-center justify-center bg-white shadow-sm">
                        <div className="flex flex-col items-center text-center px-2">
                          <div className="text-[#C91111] text-2xl mb-1">
                            {s.icon}
                          </div>
                          <p className="text-gray-900 font-extrabold text-lg">
                            <CountUp from={0} to={num} duration={1} />
                            {suffix}
                          </p>
                          <p className="text-gray-500 text-xs mt-1">
                            {s.label}
                          </p>
                        </div>
                      </div>
                    </div>
                  </AnimatedCard>
                );
              })}
            </div>
          </div>
        </div>

        {/* Section 1 & 2 side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Who We Are section-1*/}
          <div>
            <div className="mb-8">
              {/* <p className="text-[#C91111] text-xs tracking-widest uppercase mb-3 font-semibold">
              Our Journey
            </p> */}
              <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                Who We <span className="text-[#C91111]">Are</span>
              </h3>
              <p className="text-gray-800 text-base mt-3 leading-relaxed">
                We are a team of strategists, storytellers, and creators
                redefining digital content in India with a structured,
                data-driven approach focused on long-term growth.
              </p>
            </div>
            <TreeAccordion
              items={timeline.map((t) => ({ title: t.title, desc: t.desc }))}
            />
          </div>

          {/* What we do section-2*/}
          <div>
            <div className="mb-8">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                What We <span className="text-[#C91111]">Do</span>
              </h3>
              <p className="text-gray-800 leading-relaxed mt-3">
                We create niche content channels that deliver real value by
                blending strategy, creativity, and consistency to help brands
                grow and connect with audiences.
              </p>
            </div>
            <TreeAccordion
              items={values.map((v) => ({ title: v.title, desc: v.desc }))}
            />
          </div>
        </div>
        {/* end two-column row */}

        {/* mission and vision section-3*/}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Mission<span className="text-[#C91111]"> & </span>Vision
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {mission.map((v, i) => (
              <AnimatedCard
                key={v.Heading}
                delay={i * 0.1}
                className="value-card bg-white border border-gray-200 rounded-2xl p-6 flex gap-4 items-start shadow-sm"
              >
                <div className="val-icon w-11 h-11 rounded-xl bg-[#C91111]/10 flex items-center justify-center text-[#C91111] text-lg flex-shrink-0">
                  {v.icon}
                </div>
                <div>
                  <p className="text-gray-900 font-bold text-sm mb-1">
                    {v.Heading}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {v.Text}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>

        {/* Icon Strip - full bleed */}
      </div>
      <IconStrip />
    </section>
  );
}
