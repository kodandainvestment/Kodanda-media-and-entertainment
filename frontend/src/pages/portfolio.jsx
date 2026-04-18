import { useState, useRef, useEffect } from "react";

/* ─── OLD LAYOUT (commented out) ───────────────────────────────────────────
import PixelTransition from "../animations/PixelTransition ";

const projects = [
  { title: "Social Media Campaign", category: "Social Media", img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80" },
  { title: "Brand Identity Design", category: "Branding", img: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80" },
  { title: "Video Production", category: "Video", img: "https://images.unsplash.com/photo-1579187707643-35646d22b596?w=800&q=80" },
  { title: "Performance Ad Creative", category: "Marketing", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80" },
  { title: "Web & Digital Experience", category: "Web", img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80" },
  { title: "Content Strategy", category: "Strategy", img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80" },
];

function Card({ project, className = "" }) {
  return (
    <PixelTransition
      className={`!w-full !rounded-2xl !border-0 ${className}`}
      style={{ width: "100%", borderRadius: "1rem", border: "none" }}
      gridSize={8}
      pixelColor="white"
      animationStepDuration={0.4}
      once={false}
      aspectRatio="0%"
      firstContent={
        <img src={project.img} alt={project.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      }
      secondContent={
        <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#111", gap: "8px", padding: "1rem" }}>
          <p style={{ color: "#C91111", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>{project.category}</p>
          <h3 style={{ color: "#ffffff", fontWeight: 800, fontSize: "1.1rem", textAlign: "center", lineHeight: 1.3 }}>{project.title}</h3>
        </div>
      }
    />
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#C91111] text-sm tracking-widest uppercase mb-3">Our Work</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            Featured <span className="text-[#C91111]">Portfolio</span>
          </h2>
        </div>
        <div className="hidden sm:flex gap-4 h-[560px]">
          <div className="flex flex-col gap-4 flex-1">
            <Card project={projects[0]} className="h-[400px]" />
            <Card project={projects[3]} className="flex-1" />
          </div>
          <div className="flex flex-col gap-4 flex-1">
            <Card project={projects[1]} className="h-[320px]" />
            <Card project={projects[4]} className="flex-1" />
          </div>
          <div className="flex flex-col gap-4 flex-1">
            <Card project={projects[2]} className="h-[200px]" />
            <Card project={projects[5]} className="flex-1" />
          </div>
        </div>
        <div className="flex sm:hidden flex-col gap-4">
          {projects.map((p) => (
            <Card key={p.title} project={p} className="h-[220px]" />
          ))}
        </div>
      </div>
    </section>
  );
}
─── END OLD LAYOUT ─────────────────────────────────────────────────────── */

const cases = [
  {
    category: "BRAND IDENTITY",
    title: "Keediome Rebrand",
    desc: "Complete brand overhaul for a luxury wellness startup, including logo, packaging, and digital presence.",
    year: "2025",
    img: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=900&q=80",
  },
  {
    category: "SOCIAL MEDIA",
    title: "Viral Campaign Launch",
    desc: "Multi-platform social strategy that drove 3M+ impressions and 40% engagement lift for a lifestyle brand.",
    year: "2024",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=80",
  },
  {
    category: "VIDEO PRODUCTION",
    title: "Cinematic Brand Film",
    desc: "Award-winning short film blending storytelling and product showcase for a premium fashion label.",
    year: "2024",
    img: "https://images.unsplash.com/photo-1579187707643-35646d22b596?w=900&q=80",
  },
  {
    category: "WEB EXPERIENCE",
    title: "Interactive Digital Hub",
    desc: "Immersive web experience with motion design and real-time data for a global entertainment platform.",
    year: "2023",
    img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&q=80",
  },
];

export default function Portfolio() {
  const [current, setCurrent] = useState(0);
  const [animDir, setAnimDir] = useState(null); // "left" | "right"
  const [animating, setAnimating] = useState(false);
  const timeoutRef = useRef(null);

  const go = (dir) => {
    if (animating) return;
    setAnimDir(dir);
    setAnimating(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) =>
        dir === "right"
          ? (prev + 1) % cases.length
          : (prev - 1 + cases.length) % cases.length
      );
      setAnimating(false);
      setAnimDir(null);
    }, 380);
  };

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const slide = cases[current];

  const slideStyle = {
    transition: animating ? "transform 0.38s cubic-bezier(.77,0,.18,1), opacity 0.38s" : "none",
    transform: animating
      ? `translateX(${animDir === "right" ? "-60px" : "60px"})`
      : "translateX(0)",
    opacity: animating ? 0 : 1,
  };

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="min-h-screen bg-[#0a0a0a] flex items-center py-12 sm:py-20 px-4 sm:px-6 overflow-hidden"
    >
      <div
        className="mx-auto w-full"
        style={{
          maxWidth: visible ? "95%" : "60%",
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1) translateY(0)" : "scale(0.95) translateY(40px)",
          transition: "max-width 0.9s cubic-bezier(.77,0,.18,1), opacity 0.8s ease, transform 0.8s ease",
        }}
      >

        {/* Header row */}
        <div className="flex items-start justify-between mb-8 sm:mb-10">
          <div>
            <p className="text-[#C91111] text-xs tracking-[0.25em] uppercase font-bold mb-2">
              Selected Work
            </p>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Case{" "}
              <span className="bg-gradient-to-r from-[#C91111] via-[#ff4444] to-[#ff8080] bg-clip-text text-transparent">
                Studies
              </span>
            </h2>
          </div>
        </div>

        {/* Slide */}
        <div style={slideStyle} className="relative w-full">

          {/* Mobile layout: stacked */}
          <div className="flex flex-col lg:hidden gap-0">
            {/* Image */}
            <div className="relative w-full rounded-t-2xl overflow-hidden bg-[#111]" style={{ height: 220 }}>
              <img src={slide.img} alt={slide.title} className="w-full h-full object-cover opacity-90" />
              {/* Year badge */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#C91111] via-[#ff4444] to-[#ff8080] text-white font-extrabold text-lg px-6 py-2 rounded-xl tracking-widest select-none z-10">
                {slide.year}
              </div>
            </div>
            {/* Info card */}
            <div className="bg-[#111]/95 rounded-b-2xl p-6 flex flex-col gap-3">
              <p className="text-[#ff4444] text-xs font-bold tracking-[0.2em] uppercase">{slide.category}</p>
              <h3 className="text-white text-xl font-extrabold leading-snug">{slide.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{slide.desc}</p>
              <a href="#" className="text-[#ff4444] text-sm font-semibold flex items-center gap-1 hover:underline w-fit">
                View Project <span className="text-base">↗</span>
              </a>
            </div>
            {/* Nav buttons */}
            <div className="flex gap-3 mt-4">
              <button onClick={() => go("left")} className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#C91111] hover:text-[#C91111] transition-colors">←</button>
              <button onClick={() => go("right")} className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#C91111] hover:text-[#C91111] transition-colors">→</button>
            </div>
          </div>

          {/* Desktop layout: side by side */}
          <div className="hidden lg:block" style={{ height: 400 }}>
            {/* Image — left ~50% */}
            <div className="absolute inset-y-0 left-0 rounded-2xl overflow-hidden bg-[#111]" style={{ width: "50%" }}>
              <img src={slide.img} alt={slide.title} className="w-full h-full object-cover opacity-90" />
              <div className="absolute inset-y-0 right-0 w-32" style={{ background: "linear-gradient(to right, transparent, #0a0a0a)" }} />
            </div>

            {/* Year badge */}
            <div className="absolute bg-gradient-to-r from-[#C91111] via-[#ff4444] to-[#ff8080] bottom-[-20px] text-white font-extrabold text-2xl px-10 py-3 rounded-xl tracking-widest select-none z-10" style={{ left: "50%", transform: "translateX(-50%)" }}>
              {slide.year}
            </div>

            {/* Nav buttons */}
            <div className="absolute flex gap-3" style={{ right: "20%", top: "calc(50% - 200px)" }}>
              <button onClick={() => go("left")} className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#C91111] hover:text-[#C91111] transition-colors">←</button>
              <button onClick={() => go("right")} className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#C91111] hover:text-[#C91111] transition-colors">→</button>
            </div>

            {/* Info card */}
            <div
              className="absolute top-1/2 -translate-y-1/2 bg-[#111]/95 rounded-2xl p-8 flex flex-col justify-center gap-4"
              style={{ right: "16%", width: "38%" }}
            >
              <p className="text-[#ff4444] text-xs font-bold tracking-[0.2em] uppercase">{slide.category}</p>
              <h3 className="text-white text-2xl font-extrabold leading-snug">{slide.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{slide.desc}</p>
              <a href="#" className="text-[#ff4444] text-sm font-semibold flex items-center gap-1 hover:underline mt-2 w-fit">
                View Project <span className="text-base">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex gap-2 mt-8">
          {cases.map((_, i) => (
            <button
              key={i}
              onClick={() => { setAnimDir("right"); go("right"); setCurrent(i); }}
              className={`h-[3px] rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-[#ff4444]" : "w-4 bg-white/20"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
