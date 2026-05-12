import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    label: "Insight Mining",
    children: [
      "Trend & Topic Discovery",
      "Audience Pain Points",
      "Viral Pattern Analysis",
      "Content Angle Selection",
    ],
  },
  {
    label: "Hook Engineering",
    children: [
      "Scroll-Stopping First 3 Seconds",
      "Curiosity Gap Creation",
      "Emotional Trigger Design",
      "Multiple Hook Variations",
    ],
  },
  {
    label: "Virality Framework",
    children: [
      "Story-Driven Structure",
      "Pattern Interrupts",
      "Open Loops & Curiosity",
      "Engagement Triggers",
    ],
  },
  {
    label: "High-Impact Production",
    children: [
      "Fast-Paced Editing",
      "Visual Retention Elements",
      "Subtitle Strategy",
      "Platform Optimization",
    ],
  },
  {
    label: "Distribution & Optimization",
    children: [
      "Title & Thumbnail Testing",
      "Smart Publishing Timing",
      "Performance Analytics",
      "Iteration & Scaling",
    ],
  },
];

export default function ViralContent() {
  // null = all closed
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-white py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-[#C91111] text-xs sm:text-sm tracking-widest uppercase mb-3 font-semibold">
            Our Process
          </p>

           <h2
            className="font-display font-black text-gray-900 tracking-tight mb-4"
            style={{ fontSize: "clamp(2.4rem,5.5vw,4.2rem)", lineHeight: 1.05 }}
          >
            How We Create <span className="text-[#c91111]">Viral </span>
            <span className="text-[#C91111] relative inline-block">
              Content
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
        </div>

        {/* ================= MOBILE ================= */}
        <div className="md:hidden flex flex-col gap-4">
          {steps.map((step, i) => (
            <div
              key={step.label}
              className="border border-[#C91111]/20 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className={`w-full text-left px-4 py-4 flex justify-between items-center transition ${
                  open === i
                    ? "bg-[#C91111] text-white"
                    : "bg-[#C91111]/5 text-gray-800"
                }`}
              >
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-70">
                    Step {i + 1}
                  </p>
                  <p className="font-bold text-sm">{step.label}</p>
                </div>

                <span className="text-lg">
                  {open === i ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 py-3 bg-white"
                  >
                    <div className="flex flex-col gap-2">
                      {step.children.map((child, index) => (
                        <div
                          key={child}
                          className="text-sm bg-[#C91111]/5 border-l-4 border-[#C91111] px-3 py-2 rounded-md"
                        >
                          <span className="text-[#C91111] mr-2 font-bold">
                            {index + 1}.
                          </span>
                          {child}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:flex gap-10 items-start">
          
          {/* LEFT STEPS */}
          <div className="w-[280px]">
            <div
              className="flex flex-col pr-2 overflow-y-auto custom-scrollbar"
              style={{ maxHeight: "320px" }}
            >
              {steps.map((step, i) => (
                <div key={step.label} className="flex flex-col items-center">
                  
                  {i > 0 && (
                    <div className="w-0.5 h-6 bg-[#C91111]/20" />
                  )}

                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className={`w-full flex flex-col items-center px-6 py-4 rounded-[2rem] border-2 transition ${
                      open === i
                        ? "bg-[#C91111] text-white border-[#C91111]"
                        : "bg-[#C91111]/5 text-gray-800 border-[#C91111]/30 hover:border-[#C91111]"
                    }`}
                  >
                    <span className="text-[10px] uppercase tracking-widest">
                      Step {i + 1}
                    </span>
                    <span className="font-bold text-sm mt-1">
                      {step.label}
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="flex-1 min-h-[320px] border border-[#C91111]/20 rounded-3xl bg-[#C91111]/5 p-8">
            <AnimatePresence mode="wait">
              {open !== null && (
                <motion.div
                  key={open}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-[#C91111] text-xs uppercase tracking-widest mb-6 border-b border-[#C91111]/20 pb-2">
                    {steps[open]?.label}
                  </p>

                  <div className="flex flex-col gap-3">
                    {steps[open]?.children?.map((child, index, arr) => (
                      <div
                        key={child}
                        style={{
                          width: `${70 + (index / (arr.length - 1)) * 30}%`,
                        }}
                        className="px-5 py-3 bg-white border-l-4 border-[#C91111] rounded-md text-sm font-bold shadow-sm"
                      >
                        <span className="text-[#C91111] mr-2 opacity-60">
                          {index + 1}
                        </span>
                        {child}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* SCROLLBAR STYLE */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #C91111;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
}