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

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

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
//   const [active, setActive] = useState(0);

//   const nextStep = () => {
//     if (active < steps.length - 1) setActive(active + 1);
//   };

//   const prevStep = () => {
//     if (active > 0) setActive(active - 1);
//   };

//   return (
//     <section className="bg-white py-20 px-6">
//       <div className="max-w-6xl mx-auto">
//         {/* Heading */}
//         <div className="text-center mb-12">
//           <p className="text-[#C91111] text-sm tracking-widest uppercase mb-3 font-semibold">
//             Our Process
//           </p>
//           <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
//             How We Create <span className="text-[#C91111]">Viral Content</span>
//           </h2>
//         </div>

//         {/* Stepper with Arrows */}
//         <div className="flex items-center justify-center gap-6 mb-14">
//           {/* Left Arrow */}
//           <button
//             onClick={prevStep}
//             disabled={active === 0}
//             className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:border-[#C91111] disabled:opacity-30"
//           >
//             ←
//           </button>

//           {/* Steps */}
//           <div className="flex items-center gap-4">
//             {steps.map((step, i) => (
//               <div key={step.label} className="flex items-center gap-4">
//                 {/* Step */}
//                 <button
//                   onClick={() => setActive(i)}
//                   className={`flex flex-col items-center justify-center px-5 py-3 rounded-full border-2 transition-all min-w-[140px] ${
//                     active === i
//                       ? "bg-[#C91111] text-white border-[#C91111]"
//                       : "bg-white border-gray-300 text-gray-700 hover:border-[#C91111]"
//                   }`}
//                 >
//                   {/* Step Number */}
//                   <span
//                     className={`text-xs tracking-wider ${
//                       active === i ? "text-white/80" : "text-[#C91111]"
//                     }`}
//                   >
//                     Step {i + 1}
//                   </span>

//                   {/* Label */}
//                   <span className="text-sm font-semibold text-center leading-tight">
//                     {step.label}
//                   </span>
//                 </button>

//                 {/* Connector Line */}
//                 {i !== steps.length - 1 && (
//                   <div className="w-10 h-[2px] bg-[#C91111]/40" />
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Right Arrow */}
//           <button
//             onClick={nextStep}
//             disabled={active === steps.length - 1}
//             className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:border-[#C91111] disabled:opacity-30"
//           >
//             →
//           </button>
//         </div>

//         {/* Animated Tree Structure */}
//         <div className="border border-[#C91111]/30 rounded-xl bg-[#C91111]/5 p-8">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={active}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -30 }}
//               transition={{ duration: 0.4 }}
//             >
//               {/* Title */}
//               <p className="text-[#C91111] font-bold text-sm uppercase tracking-widest mb-6 text-center">
//                 {steps[active].label}
//               </p>

//               {/* Tree */}
//               <div className="flex flex-col items-center gap-4">
//                 {steps[active].children.map((child, index) => (
//                   <motion.div
//                     key={child}
//                     initial={{ opacity: 0, x: -40 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: index * 0.1 }}
//                     className="relative w-full max-w-md"
//                   >
//                     {/* Line */}
//                     <div className="absolute left-0 top-1/2 w-6 h-[2px] bg-[#C91111]" />

//                     {/* Card */}
//                     <div className="ml-6 px-4 py-3 rounded-lg border-l-4 border-[#C91111] bg-white shadow-sm">
//                       <span className="text-[#C91111] font-bold mr-2">
//                         {index + 1}.
//                       </span>
//                       <span className="text-gray-800 font-medium text-sm">
//                         {child}
//                       </span>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </AnimatePresence>
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
  const [active, setActive] = useState(0);

  const nextStep = () => {
    if (active < steps.length - 1) setActive(active + 1);
  };

  const prevStep = () => {
    if (active > 0) setActive(active - 1);
  };

  return (
    <section className="bg-white py-14 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-[#C91111] text-xs sm:text-sm tracking-widest uppercase mb-2 sm:mb-3 font-semibold">
            Our Process
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            How We Create <span className="text-[#C91111]">Viral Content</span>
          </h2>
        </div>

        {/* Stepper */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 mb-10 sm:mb-14">
          {/* Left Arrow */}
          <button
            onClick={prevStep}
            disabled={active === 0}
            className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-gray-300 hover:border-[#C91111] disabled:opacity-30"
          >
            ←
          </button>

          {/* Steps (Scrollable on mobile) */}
          <div className="overflow-x-auto sm:overflow-visible">
            <div className="flex items-center gap-3 sm:gap-4 min-w-max px-1">
              {steps.map((step, i) => (
                <div key={step.label} className="flex items-center gap-3 sm:gap-4">
                  {/* Step */}
                  <button
                    onClick={() => setActive(i)}
                    className={`flex flex-col items-center justify-center px-3 sm:px-5 py-2 sm:py-3 rounded-full border-2 transition-all min-w-[110px] sm:min-w-[140px] ${
                      active === i
                        ? "bg-[#C91111] text-white border-[#C91111]"
                        : "bg-white border-gray-300 text-gray-700 hover:border-[#C91111]"
                    }`}
                  >
                    <span
                      className={`text-[10px] sm:text-xs tracking-wider ${
                        active === i ? "text-white/80" : "text-[#C91111]"
                      }`}
                    >
                      Step {i + 1}
                    </span>

                    <span className="text-xs sm:text-sm font-semibold text-center leading-tight">
                      {step.label}
                    </span>
                  </button>

                  {/* Connector (hide on mobile) */}
                  {i !== steps.length - 1 && (
                    <div className="hidden sm:block w-10 h-[2px] bg-[#C91111]/40" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextStep}
            disabled={active === steps.length - 1}
            className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-gray-300 hover:border-[#C91111] disabled:opacity-30"
          >
            →
          </button>
        </div>

        {/* Tree Structure */}
        <div className="border border-[#C91111]/30 rounded-xl bg-[#C91111]/5 p-4 sm:p-6 lg:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Title */}
              <p className="text-[#C91111] font-bold text-xs sm:text-sm uppercase tracking-widest mb-5 sm:mb-6 text-center">
                {steps[active].label}
              </p>

              {/* Tree */}
              <div className="flex flex-col items-center gap-3 sm:gap-4">
                {steps[active].children.map((child, index) => (
                  <motion.div
                    key={child}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className="relative w-full max-w-md"
                  >
                    {/* Line */}
                    <div className="absolute left-0 top-1/2 w-4 sm:w-6 h-[2px] bg-[#C91111]" />

                    {/* Card */}
                    <div className="ml-4 sm:ml-6 px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-l-4 border-[#C91111] bg-white shadow-sm">
                      <span className="text-[#C91111] font-bold mr-2 text-sm">
                        {index + 1}.
                      </span>
                      <span className="text-gray-800 font-medium text-xs sm:text-sm">
                        {child}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}