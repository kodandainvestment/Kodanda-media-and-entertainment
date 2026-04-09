// import { useState } from "react";

// const steps = [
//   {
//     label: "Insight Mining",
//     children: [
//       "Trend & Topic Discovery",
//       "Audience Pain Points",
//       "Viral Pattern Analysis",
//       "Content Angle Selection",
//     ],
//   },
//   {
//     label: "Hook Engineering",
//     children: [
//       "Scroll-Stopping First 3 Seconds",
//       "Curiosity Gap Creation",
//       "Emotional Trigger Design",
//       "Multiple Hook Variations",
//     ],
//   },
//   {
//     label: "Virality Framework",
//     children: [
//       "Story-Driven Structure",
//       "Pattern Interrupts",
//       "Open Loops & Curiosity",
//       "Engagement Triggers",
//     ],
//   },
//   {
//     label: "High-Impact Production",
//     children: [
//       "Fast-Paced Editing",
//       "Visual Retention Elements",
//       "Subtitle Strategy",
//       "Platform Optimization",
//     ],
//   },
//   {
//     label: "Distribution & Optimization",
//     children: [
//       "Title & Thumbnail Testing",
//       "Smart Publishing Timing",
//       "Performance Analytics",
//       "Iteration & Scaling",
//     ],
//   },
// ];

// export default function ViralContent() {
//   const [open, setOpen] = useState(null);

//   return (
//     <section className="bg-white py-20 px-6">
//       <div className="max-w-5xl mx-auto">
//         <div className="text-center mb-12">
//           <p className="text-[#C91111] text-sm tracking-widest uppercase mb-3 font-semibold">
//             Our Process
//           </p>
//           <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
//             How We Create <span className="text-[#C91111]">Viral Content</span>
//           </h2>
//         </div>

//         <div className="flex gap-10 items-start">
//           {/* Left: Steps */}
//           <div className="flex flex-col items-center gap-0 min-w-[200px]">
//             {steps.map((step, i) => (
//               <div
//                 key={step.label}
//                 className="flex flex-col items-center w-full"
//               >
//                 {i > 0 && <div className="w-0.5 h-6 bg-[#C91111]/40" />}
//                 <button
//                   onClick={() => setOpen(open === i ? null : i)}
//                   className={`w-full flex flex-col items-center px-6 py-3 rounded-full border-2 transition-all cursor-pointer ${
//                     open === i
//                       ? "border-[#C91111] bg-[#C91111] text-white"
//                       : "border-[#C91111] bg-[#C91111]/5 hover:bg-[#C91111]/10"
//                   }`}
//                 >
//                   <span
//                     className={`text-xs font-bold tracking-widest uppercase ${open === i ? "text-white/80" : "text-[#C91111]"}`}
//                   >
//                     Step {i + 1}
//                   </span>
//                   <span
//                     className={`font-semibold text-sm mt-0.5 ${open === i ? "text-white" : "text-gray-800"}`}
//                   >
//                     {step.label}
//                   </span>
//                 </button>
//               </div>
//             ))}
//           </div>

//           {/* Right: Tree */}
//           <div className="flex-1 min-h-[200px] flex items-center justify-center border border-[#C91111]/30 rounded-xl bg-[#C91111]/5 p-6">
//             {open === null ? (
//               <p className="text-gray-400 text-sm">
//                 Select a step to see details
//               </p>
//             ) : (
//               <div className="flex flex-col items-start w-full">
//                 <p className="text-[#C91111] font-bold text-sm uppercase tracking-widest mb-4">
//                   {steps[open].label}
//                 </p>
//                 {/* Tree */}
//                 <div className="flex flex-col gap-2 w-full">
//                   {steps[open].children.map((child, index, arr) => (
//                     <div
//                       key={child}
//                       style={{ width: `${50 + (index / (arr.length - 1)) * 50}%` }}
//                       className="px-4 py-2 rounded-r-xl rounded-l-sm border-l-4 border border-[#C91111] bg-[#C91111]/5 text-gray-800 font-semibold text-sm"
//                     >
//                       <span className="text-[#C91111] font-bold mr-2">{index + 1}.</span>
//                       {child}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

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
  // Setting default to 0 so the UI isn't empty on load
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#C91111] text-sm tracking-widest uppercase mb-3 font-semibold">
            Our Process
          </p>
          {/* <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            How We Create <span className="text-[#C91111]">Viral Content</span>
          </h2> */}
          <h2 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 900,
                fontSize: "clamp(2.2rem, 5.5vw, 4rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                color: "#0f0f0f",
                margin: "0 0 16px",
              }}>
                How We Create{" "}
                <span style={{ color: "#C91111", position: "relative", display: "inline-block" }}>
                  Viral Content
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
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Left: Scrollable Steps Container */}
          <div className="w-full md:w-[280px]">
            <div 
              className="flex flex-col gap-0 pr-2 overflow-y-auto custom-scrollbar"
              style={{ maxHeight: "320px" }} // Height adjusted to show roughly 3 steps
            >
              {steps.map((step, i) => (
                <div key={step.label} className="flex flex-col items-center w-full">
                  {/* Connecting Line */}
                  {i > 0 && <div className="w-0.5 h-6 bg-[#C91111]/20" />}
                  
                  <button
                    onClick={() => setOpen(i)}
                    className={` w-full flex flex-col items-center px-6 py-4 rounded-[2rem] border-2 transition-all cursor-pointer shadow-sm ${
                      open === i
                        ? "border-[#C91111] bg-[#C91111] text-white"
                        : "border-[#c91111] bg-[#C91111]/5 hover:border-[#C91111]/30 text-gray-800"
                    }`}
                  >
                    <span className={`text-[10px] font-bold tracking-widest uppercase ${open === i ? "text-white/80" : "text-[#C91111]"}`}>
                      Step {i + 1}
                    </span>
                    <span className={`font-bold text-sm mt-0.5 ${open === i ? "text-white" : "text-gray-800"}`}>
                      {step.label}
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Details Panel (Height matches the scroll area) */}
          <div className="flex-1 w-full min-h-[320px] flex flex-col justify-center border border-[#C91111]/20 rounded-3xl bg-[#C91111]/5 p-8 relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={open}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-start w-full"
              >
                
                <p className="text-[#C91111] font-black text-xs uppercase tracking-[0.2em] mb-6 border-b border-[#C91111]/20 pb-2 w-full">
                  {steps[open].label}
                </p>

                {/* CHILDREN */}
                <motion.div
                  className="flex flex-col gap-3 w-full"
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: {},
                    show: {
                      transition: { staggerChildren: 0.12 },
                    },
                  }}
                >
                  {steps[open].children.map((child, index, arr) => (
                    <motion.div
                      key={child}
                      variants={{
                        hidden: { opacity: 0, x: -30 },
                        show: { opacity: 1, x: 0 },
                      }}
                      transition={{ duration: 0.3 }}
                      style={{ 
                        width: `${70 + (index / (arr.length - 1)) * 30}%`,
                        maxWidth: "100%" 
                      }}
                      className="px-5 py-3 rounded-r-2xl rounded-l-md border-l-[6px] border-[#C91111] bg-white shadow-sm text-gray-800 font-bold text-sm flex items-center"
                    >
                      <span className="text-[#C91111] mr-3 opacity-50">
                        {index + 1}
                      </span>
                      {child}
                    </motion.div>
                  ))}
                </motion.div>

              </motion.div>
            </AnimatePresence>

          </div>
        </div>
      </div>

      {/* Inline styles for the scrollbar to keep it clean */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #C91111;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
}
