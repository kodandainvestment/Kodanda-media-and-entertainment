// import React from "react";
// import { FiSettings, FiGrid, FiTrendingUp, FiBarChart2, FiEye, FiRefreshCw } from "react-icons/fi";

// export default function HowKodandaDiff() {
//   return (
//     <section className="bg-[#f9f9f9] py-20 px-6">
//       <div className="max-w-6xl mx-auto">

//         {/* Header */}
//         <div className="text-center mb-14">
//           <p className="text-[#C91111] text-sm tracking-widest uppercase mb-3 font-semibold">Our Edge</p>
//           <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
//             What Makes <span className="text-[#C91111]">Kodanda Media</span> Different
//           </h2>
//           <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
//             A repeatable content engine built for consistency, scale, and long-term growth.
//           </p>
//         </div>

//         {/* ── Bento Grid ── */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">

//           {/* Tile 1 — Dark hero (spans 2 cols on lg) */}
//           <div className="lg:col-span-2 bg-gray-900 rounded-3xl p-8 sm:p-10 flex flex-col justify-between min-h-[260px] relative overflow-hidden">
//             <div className="absolute -bottom-10 -right-10 w-52 h-52 rounded-full bg-[#C91111]/20 pointer-events-none" />
//             <div className="absolute top-6 right-8 w-20 h-20 rounded-full bg-[#C91111]/10 pointer-events-none" />
//             <div className="relative z-10">
//               <div className="w-11 h-11 rounded-xl bg-[#C91111] flex items-center justify-center text-white text-xl mb-6">
//                 <FiSettings />
//               </div>
//               <h3 className="text-white font-bold text-2xl sm:text-3xl mb-3 leading-snug">
//                 System-Driven<br />Production
//               </h3>
//               <p className="text-gray-400 text-sm leading-relaxed max-w-md">
//                 Every piece of content follows a defined workflow — research, scripting, editing, publishing — ensuring consistency and quality at scale.
//               </p>
//             </div>
//             <div className="relative z-10 mt-6 flex items-center gap-2">
//               <span className="w-2 h-2 rounded-full bg-[#C91111]" />
//               <span className="text-[#C91111] text-xs font-semibold uppercase tracking-widest">Structured Workflow</span>
//             </div>
//           </div>

//           {/* Tile 2 — Red accent */}
//           <div className="bg-[#C91111] rounded-3xl p-7 flex flex-col justify-between min-h-[260px] relative overflow-hidden">
//             <div className="absolute -bottom-8 -right-8 w-36 h-36 rounded-full bg-white/10 pointer-events-none" />
//             <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center text-white text-xl mb-6">
//               <FiGrid />
//             </div>
//             <div>
//               <h3 className="text-white font-bold text-xl mb-2">Multi-Niche Network</h3>
//               <p className="text-white/75 text-sm leading-relaxed">
//                 Diverse niches, diverse audiences — reducing risk while multiplying reach.
//               </p>
//             </div>
//           </div>

//           {/* Tile 3 — Stat tile */}
//           <div className="bg-white border border-gray-100 rounded-3xl p-7 flex flex-col justify-between min-h-[200px] shadow-sm">
//             <div className="w-10 h-10 rounded-xl bg-[#C91111]/10 flex items-center justify-center text-[#C91111] text-lg mb-4">
//               <FiBarChart2 />
//             </div>
//             <div>
//               <p className="text-4xl font-black text-gray-900 mb-1">100<span className="text-[#C91111]">%</span></p>
//               <p className="text-gray-500 text-sm font-medium">Data-Backed Decisions</p>
//               <p className="text-gray-400 text-xs mt-1 leading-relaxed">Every strategy driven by real analytics, not guesswork.</p>
//             </div>
//           </div>

//           {/* Tile 4 — Audience Insights */}
//           <div className="bg-white border border-gray-100 rounded-3xl p-7 flex flex-col justify-between min-h-[200px] shadow-sm">
//             <div className="w-10 h-10 rounded-xl bg-[#C91111]/10 flex items-center justify-center text-[#C91111] text-lg mb-4">
//               <FiEye />
//             </div>
//             <div>
//               <h3 className="text-gray-900 font-bold text-base mb-2">Audience Insights</h3>
//               <p className="text-gray-500 text-sm leading-relaxed">Understanding what viewers watch, skip, and share to craft content that sticks.</p>
//             </div>
//           </div>

//           {/* Tile 5 — High Volume (spans 1 col, taller) */}
//           <div className="bg-gray-900 rounded-3xl p-7 flex flex-col justify-between min-h-[200px] relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-full bg-[#C91111]/30 pointer-events-none" />
//             <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white text-lg mb-4">
//               <FiTrendingUp />
//             </div>
//             <div>
//               <h3 className="text-white font-bold text-base mb-2">High-Volume Output</h3>
//               <p className="text-gray-400 text-sm leading-relaxed">Consistent publishing across channels without sacrificing quality.</p>
//             </div>
//           </div>

//           {/* Tile 6 — Quote strip (full width) */}
//           <div className="sm:col-span-2 lg:col-span-3 bg-[#C91111] rounded-3xl px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-4 relative overflow-hidden">
//             <div className="absolute -left-10 top-0 bottom-0 w-40 bg-white/5 skew-x-[-12deg] pointer-events-none" />
//             <div className="flex items-center gap-4 relative z-10">
//               <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white text-lg flex-shrink-0">
//                 <FiRefreshCw />
//               </div>
//               <p className="text-white font-bold text-lg sm:text-xl italic">
//                 "We don't guess what works — we measure, analyze, and scale it."
//               </p>
//             </div>
//             <span className="text-white/60 text-xs font-semibold uppercase tracking-widest whitespace-nowrap relative z-10">Kodanda Media</span>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useRef } from "react";
import {
  FiSettings,
  FiGrid,
  FiTrendingUp,
  FiBarChart2,
  FiEye,
  FiRefreshCw,
  FiArrowLeft,
  FiArrowRight,
} from "react-icons/fi";

const cards = [
  {
    icon: <FiSettings />,
    title: "System-Driven Production",
    desc: "Every piece follows a defined workflow ensuring consistency and quality.",
  },
  {
    icon: <FiGrid />,
    title: "Multi-Niche Network",
    desc: "Diverse niches reduce risk while multiplying reach.",
  },
  {
    icon: <FiBarChart2 />,
    title: "Data-Backed Decisions",
    desc: "Strategies are driven by analytics, not guesswork.",
  },
  {
    icon: <FiEye />,
    title: "Audience Insights",
    desc: "We track what users watch, skip, and share.",
  },
  {
    icon: <FiTrendingUp />,
    title: "High-Volume Output",
    desc: "Consistent publishing without compromising quality.",
  },
  {
    icon: <FiRefreshCw />,
    title: "Continuous Optimization",
    desc: "We test, refine, and scale what works.",
  },
];

export default function HowKodandaDiff() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = 320; // card width
    container.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // 🎨 Color variants cycle
  const styles = [
    "bg-black text-white",
    "bg-white text-black border border-gray-200",
    "bg-[#C91111] text-white",
  ];

  return (
    <section className="bg-[#f9f9f9] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#C91111] text-sm tracking-widest uppercase mb-3 font-semibold">
            Our Edge
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            What Makes <span className="text-[#C91111]">Kodanda Media</span> Different
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            A repeatable content engine built for scale and growth.
          </p>
        </div>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className={`min-w-[280px] sm:min-w-[320px] snap-start rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:scale-[1.04] ${styles[i % 3]}`}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-6
                ${
                  i % 3 === 0
                    ? "bg-white/10 text-white"
                    : i % 3 === 1
                    ? "bg-black/10 text-black"
                    : "bg-white/20 text-white"
                }`}
              >
                {card.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="font-bold text-lg mb-2">{card.title}</h3>
                <p
                  className={`text-sm leading-relaxed ${
                    i % 3 === 0
                      ? "text-gray-400"
                      : i % 3 === 1
                      ? "text-gray-600"
                      : "text-white/80"
                  }`}
                >
                  {card.desc}
                </p>
              </div>

              {/* Bottom Accent */}
              <div className="mt-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#C91111] rounded-full" />
                <span className="text-xs uppercase tracking-widest font-semibold text-[#C91111]">
                  Kodanda Edge
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 🔘 Scroll Buttons */}
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            <FiArrowLeft />
          </button>

          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full bg-[#C91111] text-white flex items-center justify-center hover:scale-105 transition"
          >
            <FiArrowRight />
          </button>
        </div>

      </div>
    </section>
  );
}