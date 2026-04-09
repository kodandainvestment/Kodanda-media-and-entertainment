// const roadmap = [
//   {
//     heading: " Network Foundation",
//     text: " Building and stabilizing multiple niche channels with consistent content systems.",
//   },
//   {
//     heading: " Audience Scaling",
//     text: "Expanding reach through high-frequency content and platform optimization.",
//   },
//   {
//     heading: " Brand Expansion",
//     text: " Introducing new content categories and strengthening brand identity across channels.",
//   },
//   {
//     heading: " Media Ecosystem Growth",
//     text: "Scaling into a full digital media network with collaborations, partnerships, and monetization streams.",
//   },
// ];

// const FutureCards = [
//   {
//     heading: " New Niche Exploration",
//     text: "  Identifying high-demand content categories with strong growth potential..",
//   },
//   {
//     heading: " Trend-Based Channels",
//     text: "  Launching channels aligned with current and future digital trends.",
//   },
//   {
//     heading: " Experimental Content Formats",
//     text: " Testing new formats to discover scalable content opportunities. ",
//   },
//   {
//     heading: " Regional Expansion",
//     text: " Exploring content in additional languages to reach wider audiences.",
//   },
// ];

// export default function GrowthAndVision() {
//   return (
//     <section className="bg-white py-20 px-6 overflow-hidden">
//       <div className="max-w-6xl mx-auto">
//         {/* ── Header ── */}
//         <div className="text-center mb-16">
//           <p className="text-[#C91111] text-sm tracking-widest uppercase mb-3 font-semibold">
//             The Planning
//           </p>
//           <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
//             Growth & <span className="text-[#C91111]">Vision </span>
//           </h2>
//           <p className="text-gray-500 text-base mt-5 max-w-2xl mx-auto leading-relaxed">
//             Kodanda Media is built with a long-term vision — not just to create
//             content, but to build a scalable digital media network that evolves
//             with audience behavior and platform trends.
//           </p>
//           <p className="text-gray-500 text-base mt-5 max-w-2xl mx-auto leading-relaxed">
//             Our focus is on{" "}
//             <span className="font-bold text-black">
//               continuous expansion, innovation, and long-term impact.
//             </span>
//           </p>
//           <div className="p-4 shadow-xl rounded-full bg-[#c91111]/10 mt-8 inline-flex gap-4">
//             <button className="bg-[#C91111]/20 text-black px-6 py-3 rounded-full hover:bg-[#C91111] hover:text-white transition-colors">
//               Extension Roadmap
//             </button>
//             <button className="bg-[#C91111]/20 text-black px-6 py-3 rounded-full hover:bg-[#C91111] hover:text-white transition-colors">
//               Upcoming chennal
//             </button>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Expansion Roadmap section-1*/}
//           <div>
//             <div className="mb-8">
//               <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
//                 Expansion <span className="text-[#C91111]">Roadmap</span>
//               </h3>
//               <p className="text-gray-800 text-base mt-3 leading-relaxed">
//                 Our growth is planned in phases, with a clear roadmap for
//                 scaling content, platforms, and reach.{" "}
//               </p>
//             </div>
//             <div className="border-2 border-[#C91111]/10 p-6 p-4 shadow-md rounded-lg">
//               {roadmap.map((item, index) => (
//                 <div
//                   key={index}
//                   className="mb-8 relative bg-[#c91111]/5 border border-[#C91111]/15 rounded-xl p-3 hover:border-[#C91111] hover:bg-white transition-all"
//                 >
//                   {/* <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[#C91111] flex items-center justify-center text-white font-bold text-xs">
//                       {index + 1}
//                     </div> */}
//                   <h4 className="text-xl font-bold text-gray-900 mb-2">
//                     {item.heading}
//                   </h4>
//                   <p className="text-gray-500 text-sm leading-relaxed">
//                     {item.text}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Upcoming Channels section-2*/}
//           <div>
//             <div className="mb-8">
//               <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
//                 Upcoming <span className="text-[#C91111]">Channels</span>
//               </h3>
//               <p className="text-gray-800 leading-relaxed mt-3">
//                 We are continuously expanding our network to cover emerging
//                 trends and audience interests.
//               </p>
//             </div>
//             <div className="border-2 border-[#c91111]/10 p-4 shadow-md rounded-lg">
//               {FutureCards.map((item, index) => (
//                 <div
//                   key={index}
//                   className="mb-8 relative bg-[#c91111]/5 border border-[#C91111]/15 rounded-xl p-3 hover:border-[#C91111] hover:bg-white transition-all"
//                 >
//                   <h4 className="text-xl font-bold text-gray-900 mb-2">
//                     {item.heading}
//                   </h4>
//                   <p className="text-gray-500 text-sm leading-relaxed">
//                     {item.text}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ── CTA ── */}
//       <div className="mt-16 text-center bg-black border border-[#C91111]/20 rounded-2xl py-10 px-6">
//         {/* <p className="text-[#C91111] text-sm tracking-widest uppercase font-semibold mb-2">Ready to Scale?</p> */}
//         <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
//           Building a Digital <span className="text-[#c91111]">Media Powerhouse</span>
//         </h3>
//         <p className="text-gray-200 text-sm max-w-xl mx-auto mb-6">
//           Our long-term vision is to establish Kodanda Media as one of India’s
//           leading multi-channel digital media networks. We aim to shape how the
//           next generation consumes content by combining knowledge, storytelling,
//           and technology.
//         </p>
//         <p className="text-gray-200 text-sm max-w-xl mx-auto mb-6">
//           By focusing on scalability, consistency, and innovation, we are
//           building a platform that goes beyond content — creating lasting impact
//           and strong audience communities.
//         </p>
//         <p className="text-[#C91111] text-md max-w-xl mx-auto mb-6 italic">
//           “From content creation to content leadership.”
//         </p>
//       </div>
//     </section>
//   );
// }

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

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
//   const [activeTab, setActiveTab] = useState(null);
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleTab = (tab) => {
//     setActiveTab(activeTab === tab ? null : tab);
//   };

//   return (
//     <section className="bg-white py-20 px-6">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-14">
//           <p className="text-[#C91111] text-sm tracking-widest uppercase mb-3 font-semibold">
//             The Planning
//           </p>
//           <h2 className="text-4xl font-bold">
//             Growth & <span className="text-[#C91111]">Vision</span>
//           </h2>
//           <p className="text-gray-500 text-base mt-5 max-w-2xl mx-auto leading-relaxed">
//             Kodanda Media is built with a long-term vision — not just to create
//             content, but to build a scalable digital media network that evolves
//             with audience behavior and platform trends.
//           </p>
//           <p className="text-gray-500 text-base mt-5 max-w-2xl mx-auto leading-relaxed">
//             Our focus is on{" "}
//             <span className="font-bold text-black">
//               continuous expansion, innovation, and long-term impact.
//             </span>
//           </p>

//           {/* Buttons */}
//           <div className="mt-8 flex justify-center gap-4 p-4 shadow-xl rounded-full bg-[#c91111]/10 mt-8 inline-flex">
//             <button
//               onClick={() => toggleTab("roadmap")}
//               className={`px-6 py-2 rounded-full transition ${
//                 activeTab === "roadmap"
//                   ? "bg-[#C91111] text-white"
//                   : "bg-gray-100 hover:bg-gray-200"
//               }`}
//             >
//               Expansion Roadmap
//             </button>

//             <button
//               onClick={() => toggleTab("future")}
//               className={`px-6 py-2 rounded-full transition ${
//                 activeTab === "future"
//                   ? "bg-[#C91111] text-white"
//                   : "bg-gray-100 hover:bg-gray-200"
//               }`}
//             >
//               Upcoming Channels
//             </button>
//           </div>
//         </div>

{
  /* CONTENT */
}
// <AnimatePresence mode="wait">
{
  /* 🔴 TIMELINE ROADMAP */
}
{
  /* {activeTab === "roadmap" && (
            <motion.div
              key="roadmap"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              className="relative"
            >
              <h3 className="text-3xl font-bold text-center mb-12">
                Expansion <span className="text-[#C91111]">Timeline</span>
              </h3>

              <div className="relative border-l-2 border-[#C91111]/30 ml-4">
                {roadmap.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="mb-10 ml-6"
                  >
                    {/* Dot */
}
{
  /* <span className="absolute -left-[9px] w-4 h-4 bg-[#C91111] rounded-full"></span>

                    <div className="bg-white shadow-md border p-5 rounded-lg hover:shadow-xl transition">
                      <h4 className="font-semibold text-lg">{item.heading}</h4>
                      <p className="text-gray-500 text-sm mt-2">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}  */
}
//           {activeTab === "roadmap" && (
//             <motion.div
//               key="roadmap"
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 40 }}
//               className="relative min-h-[600px]"
//             >
//               <h3 className="text-3xl font-bold text-center mb-16">
//                 Expansion <span className="text-[#C91111]">Timeline</span>
//               </h3>

//               <div className="relative w-full h-[500px]">
//                 {roadmap.map((item, index) => {
//                   // Curve positions (adjust these values for perfect arc)
//                   const positions = [
//                     { top: "0%", left: "10%" },
//                     { top: "20%", left: "30%" },
//                     { top: "45%", left: "50%" },
//                     { top: "70%", left: "70%" },
//                   ];

//                   return (
//                     <div key={index}>
//                       {/* 🔴 Circle */}
//                       <motion.div
//                         onClick={() =>
//                           setActiveIndex(activeIndex === index ? null : index)
//                         }
//                         whileTap={{ scale: 0.9 }}
//                         className="absolute w-28 h-28 rounded-full bg-black text-white flex items-center justify-center text-center cursor-pointer shadow-lg"
//                         style={positions[index]}
//                       >
//                         <span className="text-xs px-2">{item.heading}</span>
//                       </motion.div>

//                       {/* 🔵 Text */}
//                       <AnimatePresence>
//                         {activeIndex === index && (
//                           <motion.div
//                             initial={{ opacity: 0, x: 40 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             exit={{ opacity: 0, x: 40 }}
//                             className="absolute bg-white shadow-lg border p-5 rounded-lg max-w-xs"
//                             style={{
//                               top: positions[index].top,
//                               left: `calc(${positions[index].left} + 140px)`,
//                             }}
//                           >
//                             <p className="text-gray-600 text-sm">{item.text}</p>
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </div>
//                   );
//                 })}
//               </div>
//             </motion.div>
//           )}
//           {/* 🔵 FUTURE CARDS */}
//           {activeTab === "future" && (
//             <motion.div
//               key="future"
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 40 }}
//               className="relative min-h-[600px]"
//             >
//               <h3 className="text-3xl font-bold text-center mb-16">
//                 Upcoming <span className="text-[#C91111]">Channels</span>
//               </h3>

//               <div className="relative w-full h-[500px]">
//                 {FutureCards.map((item, index) => {
//                   // 🔵 Opposite curve (right → left)
//                   const positions = [
//                     { top: "0%", right: "10%" },
//                     { top: "20%", right: "30%" },
//                     { top: "45%", right: "50%" },
//                     { top: "70%", right: "70%" },
//                   ];

//                   return (
//                     <div key={index}>
//                       {/* 🔴 Circle */}
//                       <motion.div
//                         onClick={() =>
//                           setActiveIndex(activeIndex === index ? null : index)
//                         }
//                         whileTap={{ scale: 0.9 }}
//                         className="absolute w-28 h-28 rounded-full bg-black text-white flex items-center justify-center text-center cursor-pointer shadow-lg"
//                         style={positions[index]}
//                       >
//                         <span className="text-xs px-2">{item.heading}</span>
//                       </motion.div>

//                       {/* 🔵 Text (left side now) */}
//                       <AnimatePresence>
//                         {activeIndex === index && (
//                           <motion.div
//                             initial={{ opacity: 0, x: -40 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             exit={{ opacity: 0, x: -40 }}
//                             className="absolute bg-white shadow-lg border p-5 rounded-lg max-w-xs"
//                             style={{
//                               top: positions[index].top,
//                               right: `calc(${positions[index].right} + 140px)`,
//                             }}
//                           >
//                             <p className="text-gray-600 text-sm">{item.text}</p>
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </div>
//                   );
//                 })}
//               </div>
//             </motion.div>
//           )}
//           <div className="mt-16 text-center bg-black border border-[#C91111]/20 rounded-2xl py-10 px-6">
//             {/* <p className="text-[#C91111] text-sm tracking-widest uppercase font-semibold mb-2">Ready to Scale?</p> */}
//             <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
//               Building a Digital{" "}
//               <span className="text-[#c91111]">Media Powerhouse</span>
//             </h3>
//             <p className="text-gray-200 text-sm max-w-xl mx-auto mb-6">
//               Our long-term vision is to establish Kodanda Media as one of
//               India’s leading multi-channel digital media networks. We aim to
//               shape how the next generation consumes content by combining
//               knowledge, storytelling, and technology.
//             </p>
//             <p className="text-gray-200 text-sm max-w-xl mx-auto mb-6">
//               By focusing on scalability, consistency, and innovation, we are
//               building a platform that goes beyond content — creating lasting
//               impact and strong audience communities.
//             </p>
//             <p className="text-[#C91111] text-md max-w-xl mx-auto mb-6 italic">
//               “From content creation to content leadership.”
//             </p>
//           </div>
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// }

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import FloatingLines from "../animations/FloatingLines";

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

//   // separate states (IMPORTANT 🔥)
//   const [activeRoadmap, setActiveRoadmap] = useState(null);
//   const [activeFuture, setActiveFuture] = useState(null);

//   return (
//     <section className="relative py-20 px-6 overflow-hidden bg-white">
//       {/* 🔴 Animated Background */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         <FloatingLines
//           enabledWaves={["top", "middle", "bottom"]}
//           lineCount={5}
//           lineDistance={5}
//           bendRadius={5}
//           bendStrength={-0.5}
//           interactive={true}
//           parallax={true}
//           linesGradient={["#C91111", "#ff4d4d", "#ffffff"]}
//         />
//       </div>

//       <div className="relative z-10 max-w-6xl mx-auto">
//         {/* HEADER */}
//         <div className="text-center mb-14">
//           <p className="text-[#C91111] text-sm tracking-widest uppercase mb-3 font-semibold">
//             The Planning
//           </p>

//           <h2 className="text-4xl font-bold">
//             Growth & <span className="text-[#C91111]">Vision</span>
//           </h2>

//           <p className="text-gray-500 text-base mt-5 max-w-2xl mx-auto leading-relaxed">
//             Kodanda Media is built with a long-term vision — not just to create
//             content, but to build a scalable digital media network that evolves
//             with audience behavior and platform trends.
//           </p>

//           <p className="text-gray-500 text-base mt-5 max-w-2xl mx-auto leading-relaxed">
//             Our focus is on{" "}
//             <span className="font-bold text-black">
//               continuous expansion, innovation, and long-term impact.
//             </span>
//           </p>

//           {/* BUTTON */}
//           <div className="mt-8">
//             <button
//               onClick={() => setShowSections(!showSections)}
//               className="px-8 py-3 rounded-full bg-[#C91111] text-white hover:scale-105 transition shadow-lg"
//             >
//               {showSections ? "Hide Details" : "View Details"}
//             </button>
//           </div>
//         </div>

//         {/* CONTENT */}
//         <AnimatePresence>
//           {showSections && (
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 40 }}
//               className="grid md:grid-cols-2 gap-20 mt-16"
//             >
//               {/* 🔴 LEFT - ROADMAP */}
//               <div className="relative min-h-[500px]">
//                 <h3 className="text-2xl font-bold text-start mb-10">
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
//                         {/* Circle */}
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

//                         {/* Text */}
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
//               </div>

//               {/* 🔵 RIGHT - FUTURE */}
//               <div className="relative min-h-[500px]">
//                 <h3 className="text-2xl font-bold text-end mb-10">
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
//                         {/* Circle */}
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

//                         {/* Text */}
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
//         </AnimatePresence>

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

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingLines from "../animations/FloatingLines";
import MagicRings from "../animations/MagicRings ";

const roadmap = [
  {
    heading: "Network Foundation",
    text: "Building and stabilizing multiple niche channels with consistent content systems.",
  },
  {
    heading: "Audience Scaling",
    text: "Expanding reach through high-frequency content and platform optimization.",
  },
  {
    heading: "Brand Expansion",
    text: "Introducing new content categories and strengthening brand identity.",
  },
  {
    heading: "Media Ecosystem Growth",
    text: "Scaling into a full digital media network with collaborations and monetization.",
  },
];

const FutureCards = [
  {
    heading: "New Niche Exploration",
    text: "Identifying high-demand content categories.",
  },
  {
    heading: "Trend-Based Channels",
    text: "Launching channels aligned with trends.",
  },
  {
    heading: "Experimental Formats",
    text: "Testing new scalable content formats.",
  },
  {
    heading: "Regional Expansion",
    text: "Expanding into multiple languages.",
  },
];

export default function GrowthAndVision() {
  const [showSections, setShowSections] = useState(false);
  const [activeRoadmap, setActiveRoadmap] = useState(null);
  const [activeFuture, setActiveFuture] = useState(null);

  return (
    <section className="relative py-20 px-6 overflow-hidden bg-transparent">
      {/* 🔴 Animated Background */}
      {/* <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={6}
          lineDistance={6}
          bendRadius={6}
          bendStrength={-0.6}
          interactive={true}
          parallax={true}
          // ✅ IMPORTANT: strong contrast colors
          linesGradient={["#C91111", "#000000"]}
          // ❌ REMOVE blending issue
          mixBlendMode="normal"
        />
      </div> */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{ margin: "-60px" }}
      >
        <MagicRings
          color="#C91111"
          colorTwo="#ffffff"
          ringCount={6}
          speed={1}
          attenuation={10}
          lineThickness={2.5}
          baseRadius={0.34}
          radiusStep={0.01}
          scaleRate={0.1}
          opacity={1}
          blur={0}
          noiseAmount={0}
          ringGap={1.5}
          fadeIn={0.7}
          fadeOut={0.5}
    
    // baseRadius={0.34}
    // radiusStep={0.1}
    // scaleRate={0.1}
    // opacity={1}
    // blur={0}
    // noiseAmount={0.1}
    // rotation={0}
    // ringGap={1.5}
    // fadeIn={0.7}
    // fadeOut={0.65}
    // followMouse={false}
    // mouseInfluence={0.2}
    // hoverScale={1.2}
    // parallax={0.05}
    // clickBurst={false}
//   />
// </div>

        />
      </div>

      {/* 🔵 Soft white overlay (removes gray look) */}
      <div className="absolute inset-0 bg-white/70 z-0 pointer-events-none"></div>

      {/* 🔥 CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="text-[#C91111] text-sm tracking-widest uppercase mb-3 font-semibold">
            The Planning
          </p>

          <h2 className="text-4xl font-bold">
            Growth<span className="text-[#C91111]"> & </span>Vision
          </h2>

          <p className="text-gray-500 text-base mt-5 max-w-2xl mx-auto leading-relaxed">
            Kodanda Media is built with a long-term vision — not just to create
            content, but to build a scalable digital media network.
          </p>

          <p className="text-gray-900 text-base mt-5 max-w-2xl mx-auto leading-relaxed">
            Our focus is on continuous expansion, innovation, and long-term impact.
          </p>

          {/* BUTTON */}
          {/* <div className="mt-8">
            <button
              onClick={() => setShowSections(!showSections)}
              className="px-8 py-3 rounded-full bg-[#C91111] text-white hover:scale-105 transition shadow-lg"
            >
              {showSections ? "Hide Details" : "View Details"}
            </button>
          </div> */}
        </div>

        {/* CONTENT */}
        {/* <AnimatePresence>
          {showSections && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              className="grid md:grid-cols-2 gap-20 mt-16"
            > */}
              {/* 🔴 ROADMAP */}
              {/* <div className="relative min-h-[500px]">
                <h3 className="text-2xl font-bold mb-10">
                  Expansion <span className="text-[#C91111]">Timeline</span>
                </h3>

                <div className="relative w-full h-[400px]">
                  {roadmap.map((item, index) => {
                    const positions = [
                      { top: "0%", left: "10%" },
                      { top: "25%", left: "30%" },
                      { top: "50%", left: "50%" },
                      { top: "75%", left: "70%" },
                    ];

                    return (
                      <div key={index}>
                        <motion.div
                          onClick={() =>
                            setActiveRoadmap(
                              activeRoadmap === index ? null : index,
                            )
                          }
                          whileTap={{ scale: 0.9 }}
                          className="absolute w-24 h-24 rounded-full bg-black text-white flex items-center justify-center text-center cursor-pointer shadow-lg hover:scale-105 transition"
                          style={positions[index]}
                        >
                          <span className="text-xs px-2">{item.heading}</span>
                        </motion.div>

                        <AnimatePresence>
                          {activeRoadmap === index && (
                            <motion.div
                              initial={{ opacity: 0, x: 40 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 40 }}
                              className="absolute bg-white shadow-md border p-4 rounded-lg max-w-xs"
                              style={{
                                top: positions[index].top,
                                left: `calc(${positions[index].left} + 120px)`,
                              }}
                            >
                              <p className="text-sm text-gray-600">
                                {item.text}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div> */}

              {/* 🔵 FUTURE */}
              {/* <div className="relative min-h-[500px]">
                <h3 className="text-2xl font-bold text-right mb-10">
                  Upcoming <span className="text-[#C91111]">Channels</span>
                </h3>

                <div className="relative w-full h-[400px]">
                  {FutureCards.map((item, index) => {
                    const positions = [
                      { top: "0%", right: "10%" },
                      { top: "25%", right: "30%" },
                      { top: "50%", right: "50%" },
                      { top: "75%", right: "70%" },
                    ];

                    return (
                      <div key={index}>
                        <motion.div
                          onClick={() =>
                            setActiveFuture(
                              activeFuture === index ? null : index,
                            )
                          }
                          whileTap={{ scale: 0.9 }}
                          className="absolute w-24 h-24 rounded-full bg-black text-white flex items-center justify-center text-center cursor-pointer shadow-lg hover:scale-105 transition"
                          style={positions[index]}
                        >
                          <span className="text-xs px-2">{item.heading}</span>
                        </motion.div>

                        <AnimatePresence>
                          {activeFuture === index && (
                            <motion.div
                              initial={{ opacity: 0, x: -40 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -40 }}
                              className="absolute bg-white shadow-md border p-4 rounded-lg max-w-xs"
                              style={{
                                top: positions[index].top,
                                right: `calc(${positions[index].right} + 120px)`,
                              }}
                            >
                              <p className="text-sm text-gray-600">
                                {item.text}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence> */}
        {/* BOTTOM SECTION */}
        <div className="mt-16 text-center bg-black border border-[#C91111]/20 rounded-2xl py-10 px-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Building a Digital{" "}
            <span className="text-[#c91111]">Media Powerhouse</span>
          </h3>

          <p className="text-gray-200 text-sm max-w-xl mx-auto mb-6">
            Our long-term vision is to establish Kodanda Media as one of India’s
            leading multi-channel digital media networks.
          </p>

          <p className="text-gray-200 text-sm max-w-xl mx-auto mb-6">
            By focusing on scalability, consistency, and innovation, we are
            building a platform that goes beyond content.
          </p>

          <p className="text-[#C91111] text-md max-w-xl mx-auto italic">
            “From content creation to content leadership.”
          </p>
        </div>
      </div>
    </section>
  );
}
