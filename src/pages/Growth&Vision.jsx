// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import FloatingLines from "../animations/FloatingLines";
// import MagicRings from "../animations/MagicRings ";

// const roadmap = [
//   {
//     heading: "Network Foundation",
//     text: "Building and stabilizing multiple niche channels with consistent content systems.",
//   },
//   {
//     heading: "Audience Scaling",
//     text: "Expanding reach through high-frequency content and platform optimization.",
//   },
//   {
//     heading: "Brand Expansion",
//     text: "Introducing new content categories and strengthening brand identity.",
//   },
//   {
//     heading: "Media Ecosystem Growth",
//     text: "Scaling into a full digital media network with collaborations and monetization.",
//   },
// ];

// const FutureCards = [
//   {
//     heading: "New Niche Exploration",
//     text: "Identifying high-demand content categories.",
//   },
//   {
//     heading: "Trend-Based Channels",
//     text: "Launching channels aligned with trends.",
//   },
//   {
//     heading: "Experimental Formats",
//     text: "Testing new scalable content formats.",
//   },
//   {
//     heading: "Regional Expansion",
//     text: "Expanding into multiple languages.",
//   },
// ];

// export default function GrowthAndVision() {
//   const [showSections, setShowSections] = useState(false);
//   const [activeRoadmap, setActiveRoadmap] = useState(null);
//   const [activeFuture, setActiveFuture] = useState(null);

//   return (
//     <section className="relative py-20 px-6 overflow-hidden bg-transparent">
//       {/* 🔴 Animated Background */}
//       {/* <div className="absolute inset-0 z-0 pointer-events-none">
//         <FloatingLines
//           enabledWaves={["top", "middle", "bottom"]}
//           lineCount={6}
//           lineDistance={6}
//           bendRadius={6}
//           bendStrength={-0.6}
//           interactive={true}
//           parallax={true}
//           // ✅ IMPORTANT: strong contrast colors
//           linesGradient={["#C91111", "#000000"]}
//           // ❌ REMOVE blending issue
//           mixBlendMode="normal"
//         />
//       </div> */}
//       <div
//         className="absolute inset-0 pointer-events-none z-0"
//         style={{ margin: "-60px" }}
//       >
//         <MagicRings
//           color="#C91111"
//           colorTwo="#ffffff"
//           ringCount={6}
//           speed={1}
//           attenuation={10}
//           lineThickness={2.5}
//           baseRadius={0.34}
//           radiusStep={0.01}
//           scaleRate={0.1}
//           opacity={1}
//           blur={0}
//           noiseAmount={0}
//           ringGap={1.5}
//           fadeIn={0.7}
//           fadeOut={0.5}
    
//     // baseRadius={0.34}
//     // radiusStep={0.1}
//     // scaleRate={0.1}
//     // opacity={1}
//     // blur={0}
//     // noiseAmount={0.1}
//     // rotation={0}
//     // ringGap={1.5}
//     // fadeIn={0.7}
//     // fadeOut={0.65}
//     // followMouse={false}
//     // mouseInfluence={0.2}
//     // hoverScale={1.2}
//     // parallax={0.05}
//     // clickBurst={false}
// //   />
// // </div>

//         />
//       </div>

//       {/* 🔵 Soft white overlay (removes gray look) */}
//       <div className="absolute inset-0 bg-white/70 z-0 pointer-events-none"></div>

//       {/* 🔥 CONTENT */}
//       <div className="relative z-10 max-w-6xl mx-auto">
//         {/* HEADER */}
//         <div className="text-center mb-14">
//           <p className="text-[#C91111] text-sm tracking-widest uppercase mb-3 font-semibold">
//             The Planning
//           </p>

//           <h2 className="text-4xl font-bold">
//             Growth<span className="text-[#C91111]"> & </span>Vision
//           </h2>

//           <p className="text-gray-500 text-base mt-5 max-w-2xl mx-auto leading-relaxed">
//             Kodanda Media is built with a long-term vision — not just to create
//             content, but to build a scalable digital media network.
//           </p>

//           <p className="text-gray-900 text-base mt-5 max-w-2xl mx-auto leading-relaxed">
//             Our focus is on continuous expansion, innovation, and long-term impact.
//           </p>

//           {/* BUTTON */}
//           {/* <div className="mt-8">
//             <button
//               onClick={() => setShowSections(!showSections)}
//               className="px-8 py-3 rounded-full bg-[#C91111] text-white hover:scale-105 transition shadow-lg"
//             >
//               {showSections ? "Hide Details" : "View Details"}
//             </button>
//           </div> */}
//         </div>

//         {/* CONTENT */}
//         {/* <AnimatePresence>
//           {showSections && (
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 40 }}
//               className="grid md:grid-cols-2 gap-20 mt-16"
//             > */}
//               {/* 🔴 ROADMAP */}
//               {/* <div className="relative min-h-[500px]">
//                 <h3 className="text-2xl font-bold mb-10">
//                   Expansion <span className="text-[#C91111]">Timeline</span>
//                 </h3>

//                 <div className="relative w-full h-[400px]">
//                   {roadmap.map((item, index) => {
//                     const positions = [
//                       { top: "0%", left: "10%" },
//                       { top: "25%", left: "30%" },
//                       { top: "50%", left: "50%" },
//                       { top: "75%", left: "70%" },
//                     ];

//                     return (
//                       <div key={index}>
//                         <motion.div
//                           onClick={() =>
//                             setActiveRoadmap(
//                               activeRoadmap === index ? null : index,
//                             )
//                           }
//                           whileTap={{ scale: 0.9 }}
//                           className="absolute w-24 h-24 rounded-full bg-black text-white flex items-center justify-center text-center cursor-pointer shadow-lg hover:scale-105 transition"
//                           style={positions[index]}
//                         >
//                           <span className="text-xs px-2">{item.heading}</span>
//                         </motion.div>

//                         <AnimatePresence>
//                           {activeRoadmap === index && (
//                             <motion.div
//                               initial={{ opacity: 0, x: 40 }}
//                               animate={{ opacity: 1, x: 0 }}
//                               exit={{ opacity: 0, x: 40 }}
//                               className="absolute bg-white shadow-md border p-4 rounded-lg max-w-xs"
//                               style={{
//                                 top: positions[index].top,
//                                 left: `calc(${positions[index].left} + 120px)`,
//                               }}
//                             >
//                               <p className="text-sm text-gray-600">
//                                 {item.text}
//                               </p>
//                             </motion.div>
//                           )}
//                         </AnimatePresence>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div> */}

//               {/* 🔵 FUTURE */}
//               {/* <div className="relative min-h-[500px]">
//                 <h3 className="text-2xl font-bold text-right mb-10">
//                   Upcoming <span className="text-[#C91111]">Channels</span>
//                 </h3>

//                 <div className="relative w-full h-[400px]">
//                   {FutureCards.map((item, index) => {
//                     const positions = [
//                       { top: "0%", right: "10%" },
//                       { top: "25%", right: "30%" },
//                       { top: "50%", right: "50%" },
//                       { top: "75%", right: "70%" },
//                     ];

//                     return (
//                       <div key={index}>
//                         <motion.div
//                           onClick={() =>
//                             setActiveFuture(
//                               activeFuture === index ? null : index,
//                             )
//                           }
//                           whileTap={{ scale: 0.9 }}
//                           className="absolute w-24 h-24 rounded-full bg-black text-white flex items-center justify-center text-center cursor-pointer shadow-lg hover:scale-105 transition"
//                           style={positions[index]}
//                         >
//                           <span className="text-xs px-2">{item.heading}</span>
//                         </motion.div>

//                         <AnimatePresence>
//                           {activeFuture === index && (
//                             <motion.div
//                               initial={{ opacity: 0, x: -40 }}
//                               animate={{ opacity: 1, x: 0 }}
//                               exit={{ opacity: 0, x: -40 }}
//                               className="absolute bg-white shadow-md border p-4 rounded-lg max-w-xs"
//                               style={{
//                                 top: positions[index].top,
//                                 right: `calc(${positions[index].right} + 120px)`,
//                               }}
//                             >
//                               <p className="text-sm text-gray-600">
//                                 {item.text}
//                               </p>
//                             </motion.div>
//                           )}
//                         </AnimatePresence>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence> */}
//         {/* BOTTOM SECTION */}
//         <div className="mt-16 text-center bg-black border border-[#C91111]/20 rounded-2xl py-10 px-6">
//           <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
//             Building a Digital{" "}
//             <span className="text-[#c91111]">Media Powerhouse</span>
//           </h3>

//           <p className="text-gray-200 text-sm max-w-xl mx-auto mb-6">
//             Our long-term vision is to establish Kodanda Media as one of India’s
//             leading multi-channel digital media networks.
//           </p>

//           <p className="text-gray-200 text-sm max-w-xl mx-auto mb-6">
//             By focusing on scalability, consistency, and innovation, we are
//             building a platform that goes beyond content.
//           </p>

//           <p className="text-[#C91111] text-md max-w-xl mx-auto italic">
//             “From content creation to content leadership.”
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default function GrowthAndVision() {
//   return (
//     <section className="relative py-20 px-6 overflow-hidden bg-black">

//       {/* 🔴 Soft background glow (connects section) */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute w-[500px] h-[500px] bg-[#C91111]/10 blur-[120px] rounded-full top-[10%] left-[50%] -translate-x-1/2"></div>
//       </div>

//       {/* CONTENT */}
//       <div className="relative z-10 max-w-5xl mx-auto text-center">

//         {/* HEADER */}
//         <div className="mb-10"> {/* reduced spacing */}
//           <p className="text-[#C91111] text-sm tracking-widest uppercase mb-3 font-semibold">
//             The Planning
//           </p>

//           <h2
//             className="font-display font-black text-white tracking-tight mb-4"
//             style={{
//               fontSize: "clamp(2.4rem,5.5vw,4.2rem)",
//               lineHeight: 1.05,
//             }}
//           >
//             Growth <span className="text-[#C91111]">& </span>
//             <span className="text-[#C91111] relative inline-block">
//               Vision
//               <svg
//                 viewBox="0 0 100 14"
//                 className="absolute -bottom-1.5 left-0 w-full"
//               >
//                 <path
//                   d="M 3 10 Q 50 3 97 10"
//                   stroke="#C91111"
//                   strokeWidth="3"
//                   fill="none"
//                   strokeLinecap="round"
//                   strokeDasharray="300"
//                   strokeDashoffset="300"
//                   className="anim-draw-line"
//                 />
//               </svg>
//             </span>
//           </h2>

//           <p className="text-gray-400 text-base mt-5 max-w-2xl mx-auto leading-relaxed">
//             Our focus is on continuous expansion, innovation, and long-term impact.
//           </p>
//         </div>

//         {/* 🔥 SMOOTH CONNECTED CARD */}
//         <div className="relative mt-8"> {/* reduced gap */}

//           {/* gradient connector (important) */}
//           <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[2px] h-10 bg-gradient-to-b from-transparent via-[#C91111]/40 to-transparent"></div>

//           <div className="bg-[#0a0a0a]/80 backdrop-blur-md border border-[#C91111]/20 rounded-2xl py-12 px-8 shadow-[0_0_60px_rgba(201,17,17,0.08)] transition-all">

//             <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
//               Building a Digital{" "}
//               <span className="text-[#C91111] drop-shadow-[0_0_10px_rgba(201,17,17,0.6)]">
//                 Media Powerhouse
//               </span>
//             </h3>

//             <p className="text-gray-400 text-sm max-w-xl mx-auto mb-6 leading-relaxed">
//               Our long-term vision is to establish Kodanda Media as one of India’s
//               leading multi-channel digital media networks.
//             </p>

//             <p className="text-gray-400 text-sm max-w-xl mx-auto mb-6 leading-relaxed">
//               By focusing on scalability, consistency, and innovation, we are
//               building a platform that goes beyond content.
//             </p>

//             <p className="text-[#C91111] text-md max-w-xl mx-auto italic">
//               “From content creation to content leadership.”
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
export default function GrowthAndVision() {
  return (
    <section className="py-24 px-6 text-center overflow-hidden bg-black">

      {/* 🔴 Soft background glow */}
      {/* <div className="absolute inset-0 z-0">
        <div className="absolute w-[600px] h-[600px] bg-[#C91111]/10 blur-[140px] rounded-full top-[20%] left-1/2 -translate-x-1/2"></div>
      </div> */}

      {/* 🔥 SINGLE BLOCK */}
      {/* <div className="relative z-10 max-w-4xl mx-auto text-center bg-[#0a0a0a]/80 backdrop-blur-md border border-[#C91111]/20 rounded-3xl px-10 py-16 shadow-[0_0_60px_rgba(201,17,17,0.08)]"> */}

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

        {/* SUBTEXT */}
        <p className="text-gray-400 text-base max-w-2xl mx-auto mb-10 leading-relaxed">
          Our focus is on continuous expansion, innovation, and long-term impact.
        </p>

        {/* BOTTOM CONTENT */}
        <p className="text-gray-400 text-sm max-w-xl mx-auto mb-6 leading-relaxed">
          Building a Digital Media Powerhouse
        </p>

        <p className="text-gray-400 text-sm max-w-xl mx-auto mb-6 leading-relaxed">
          Our long-term vision is to establish Kodanda Media as one of India’s
          leading multi-channel digital media networks.
        </p>

        <p className="text-gray-400 text-sm max-w-xl mx-auto mb-6 leading-relaxed">
          By focusing on scalability, consistency, and innovation, we are
          building a platform that goes beyond content.
        </p>

        {/* DIVIDER */}
        <div className="w-16 h-[2px] bg-[#C91111] mx-auto mb-10 opacity-70"></div>

        <p className="text-[#C91111] text-md italic">
          “From content creation to content leadership.”
        </p>
      {/* </div> */}
    </section>
  );
}