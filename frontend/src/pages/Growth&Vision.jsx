export default function GrowthAndVision() {
  const bars = [
    { label: "Content Creation", value: 80 },
    { label: "Audience Growth", value: 65 },
    { label: "Brand Expansion", value: 70 },
    { label: "Monetization", value: 55 },
    { label: "Innovation", value: 75 },
    { label: "Scaling Network", value: 60 },
    { label: "Future Vision", value: 85 },
  ];

  return (
    <section className="py-24 px-6 text-center overflow-hidden bg-black">

      {/* TOP LABEL */}
      <p className="text-[#C91111] text-sm tracking-widest uppercase mb-4 font-semibold">
        The Planning
      </p>

      {/* HEADING */}
      <h2
        className="font-display font-black text-white tracking-tight mb-6"
        style={{
          fontSize: "clamp(2.4rem,5.5vw,4rem)",
          lineHeight: 1.1,
        }}
      >
        Growth <span className="text-[#C91111]">& </span>
        <span className="text-[#C91111] relative inline-block">
          Vision
          <svg
            viewBox="0 0 240 14"
            style={{
              position: "absolute",
              bottom: -6,
              left: 0,
              width: "100%",
            }}
          >
            <path
              d="M 3 10 Q 120 3 237 10"
              stroke="#C91111"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="300"
              strokeDashoffset="300"
              style={{ animation: "shimmer-path 1.2s 0.3s ease forwards" }}
            />
          </svg>
        </span>
      </h2>

      {/* SUBTEXT */}
      <p className="text-gray-400 text-base max-w-2xl mx-auto mb-0 leading-relaxed">
        Our focus is on continuous expansion, innovation, and long-term impact.
      </p>

      {/* 🔥 GRAPH SECTION */}
      <div className="max-w-5xl mx-auto">

        {/* MOBILE SCROLL WRAPPER */}
        {/* <div className="overflow-x-auto md:overflow-visible"> */}

        {/* GRAPH */}
        <div className="flex items-end justify-between md:justify-center gap-2 sm:gap-4 md:gap-6 h-[260px] sm:h-[300px] px-2">            {bars.map((bar, index) => (
          <div key={index} className="flex flex-col items-center">

            <div
              className="relative w-[32px] sm:w-[50px] md:w-[80px] rounded-md md:rounded-xl bg-gradient-to-t from-[#C91111] to-[#ff4d4d] flex items-center justify-center overflow-hidden transition-all duration-500 hover:scale-105"
              style={{ height: `${bar.value * 3}px` }}
            >
              <span className="rotate-[-90deg] text-white text-[9px] sm:text-[11px] whitespace-nowrap">
                {bar.label}
              </span>
            </div>

          </div>
        ))}

        </div>
      </div>

      {/* DIVIDER */}
      <div className="w-32 h-[2px] bg-[#C91111] mx-auto my-8 opacity-70"></div>

      {/* TAGLINE */}
      <p className="text-[#C91111] text-md italic">
        “From content creation to content leadership.”
      </p>
    </section >
  );
}