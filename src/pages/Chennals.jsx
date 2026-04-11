import { useState, useEffect } from "react";
import { motion, useMotionValue, animate } from "motion/react";
import { FaInstagram, FaYoutube, FaFacebookF, FaTwitter,FaPinterest, FaLinkedinIn, FaWhatsapp,  } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

const categories = [
  { title: "Educational" },
  { title: "Finance & Business" },
  { title: "Motivation & Podcast" },
  { title: "Entertainment" },
  { title: "Spiritual & Wisdom" },
];

const channelsData = {
  Educational: [
    { name: "FactVerse India", tagline: "Curiosity-driven content" },
    { name: "GeoGyaan India", tagline: "Learn visually, understand deeply" },
    { name: "History Bytes", tagline: "Stories that shaped the world" },
  ],
  "Finance & Business": [
    { name: "MoneyCraft India", tagline: "Simplifying money matters" },
    { name: "Business Stories India", tagline: "Learn from real business journeys" },
  ],
  "Motivation & Podcast": [
    { name: "Motivation Factory", tagline: "Discipline creates success" },
    { name: "Zero to Hero Talks", tagline: "Real stories, real journeys" },
  ],
  Entertainment: [
    { name: "Bollywood Inside", tagline: "Behind the scenes of entertainment" },
    { name: "Future Tech India", tagline: "The future, explained today" },
  ],
  "Spiritual & Wisdom": [
    { name: "Spiritual Talks India", tagline: "Inner growth, deeper understanding" },
  ],
};

const SIZE = 520;       // SVG viewBox size
const CX = SIZE / 2;   // center x
const CY = SIZE / 2;   // center y
const ORBIT_R = 210;   // radius of orbit path
const NODE_R = 46;     // radius of each category node
const CENTER_R = 110;  // radius of center circle
const INNER_RING_R = 130; // rotating inner ring

function ChannelRow({ name, tagline }) {
  return (
    <div className="flex items-center gap-4 bg-gray-50 border border-[#C91111]/15 rounded-2xl px-5 py-4 hover:border-[#C91111]/40 transition-all">
      <div className="flex flex-col items-center gap-1 flex-shrink-0">
        {/* Default logo */}
        <div className="w-11 h-11 rounded-full bg-[#C91111] flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </div>
        {/* <p className="text-[10px] text-gray-400 font-medium text-center leading-tight max-w-[52px] truncate">{name.split(" ")[0]}</p> */}
      </div>
      <div>
        <p className="text-gray-900 font-bold text-base">{name}</p>
        <p className="text-[#C91111] text-sm">{tagline}</p>
      </div>
    </div>
  );
}

function RotatingRing() {
  const rotate = useMotionValue(0);

  useEffect(() => {
    const controls = animate(rotate, 360, {
      duration: 4,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    });
    return () => controls.stop();
  }, [rotate]);

  const RING_R = CENTER_R + 18;
  const RING_SIZE = RING_R * 2 + 10;

  return (
    <motion.div
      style={{
        position: "absolute",
        width: RING_SIZE,
        height: RING_SIZE,
        top: "50%",
        left: "50%",
        marginTop: -RING_SIZE / 2,
        marginLeft: -RING_SIZE / 2,
        rotate,
      }}
    >
      <svg width={RING_SIZE} height={RING_SIZE}>
        <circle
          cx={RING_SIZE / 2}
          cy={RING_SIZE / 2}
          r={RING_R}
          fill="none"
          stroke="#C91111"
          strokeWidth="2"
          strokeDasharray="20 10"
        />
      </svg>
    </motion.div>
  );
}

function OrbitDiagram({ active, setActive }) {
  const total = categories.length;

  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "1" }}>
    <RotatingRing />
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      width="100%"
      height="100%"
      style={{ overflow: "visible", position: "relative" }}
    >
      {/* Dashed orbit path */}
      <circle
        cx={CX} cy={CY} r={ORBIT_R}
        fill="none"
        stroke="#aaa"
        strokeWidth="1.5"
        strokeDasharray="6 6"
      />

      {/* Center circle — filled black */}
      <circle cx={CX} cy={CY} r={CENTER_R} fill="#000" stroke="#C91111" strokeWidth="2.5" />

      {/* YouTube logo in center */}
      {/* Center Social Media Circle */}
<foreignObject
  x={CX - 70}
  y={CY - 70}
  width="140"
  height="140"
>
  <div className="w-full h-full relative flex items-center justify-center">

    {/* Center Red Logo */}
    <div className="w-12 h-12 rounded-full bg-[#C91111] flex items-center justify-center shadow-md z-10">
      <FaYoutube className="text-white text-lg" />
    </div>

    {/* Radial Social Icons */}
    {/* Top */}
    <FaInstagram className="absolute -top-0 left-1/2 -translate-x-1/2 text-white text-sm" />

    {/* Top Right */}
    <FaFacebookF className="absolute top-3 right-2 text-white text-sm" />

    {/* Right */}
    <FaTwitter className="absolute top-1/2 -translate-y-1/2 -right-1 text-white text-sm" />

    {/* Bottom Right */}
    <FaPinterest className="absolute bottom-3 right-2 text-white text-sm" />

    {/* Bottom */}
    <FaThreads className="absolute -bottom-0 left-1/2 -translate-x-1/2 text-white text-sm" />

    {/* Bottom Left */}
    <FaYoutube className="absolute bottom-3 left-2 text-white text-sm" />

    {/* Left */}
    <FaLinkedinIn className="absolute top-1/2 -translate-y-1/2 -left-1 text-white text-sm" />

    {/* Top Left */}
    <FaWhatsapp className="absolute top-3 left-2 text-white text-sm" />

  </div>
</foreignObject>
      {/* Category name below logo */}
      {/* {(() => {
        const words = categories[active].title.split(" ");
        const mid = Math.ceil(words.length / 2);
        const l1 = words.slice(0, mid).join(" ");
        const l2 = words.slice(mid).join(" ");
        return l2 ? (
          <>
            <text x={CX} y={CY + 42} textAnchor="middle" fontSize="12" fill="#fff" fontWeight="700">{l1}</text>
            <text x={CX} y={CY + 57} textAnchor="middle" fontSize="12" fill="#fff" fontWeight="700">{l2}</text>
          </>
        ) : (
          <text x={CX} y={CY + 50} textAnchor="middle" fontSize="12" fill="#fff" fontWeight="700">{l1}</text>
        );
      })()} */}

      {/* Category nodes */}
      {categories.map((cat, i) => {
        const angle = (i / total) * 2 * Math.PI - Math.PI / 2;
        const nx = CX + ORBIT_R * Math.cos(angle);
        const ny = CY + ORBIT_R * Math.sin(angle);
        const isActive = active === i;

        // split title into two lines if long
        const words = cat.title.split(" ");
        const mid = Math.ceil(words.length / 2);
        const line1 = words.slice(0, mid).join(" ");
        const line2 = words.slice(mid).join(" ");

        return (
          <g key={cat.title} onClick={() => setActive(i)} style={{ cursor: "pointer" }}>
            {/* outer glow ring */}
            <circle cx={nx} cy={ny} r={NODE_R + 4} fill="none"
              stroke="#C91111"
              strokeWidth="2"
              opacity={isActive ? 1 : 0.3}
            />

            {/* green decorative lines top & bottom */}
            <line
              x1={nx - 10} y1={ny - NODE_R - 10}
              x2={nx + 10} y2={ny - NODE_R - 10}
              stroke="#c91111" strokeWidth="2.5" strokeLinecap="round"
            />
            <line
              x1={nx - 10} y1={ny + NODE_R + 10}
              x2={nx + 10} y2={ny + NODE_R + 10}
              stroke="#c91111" strokeWidth="2.5" strokeLinecap="round"
            />

            {/* node fill */}
            <circle cx={nx} cy={ny} r={NODE_R}
              fill={isActive ? "#C91111" : "#fff"}
              stroke="#C91111"
              strokeWidth="2"
            />

            {/* label */}
            {line2 ? (
              <>
                <text x={nx} y={ny - 7} textAnchor="middle" fontSize="11" fontWeight="700"
                  fill={isActive ? "#fff" : "#C91111"}>
                  {line1}
                </text>
                <text x={nx} y={ny + 8} textAnchor="middle" fontSize="11" fontWeight="700"
                  fill={isActive ? "#fff" : "#C91111"}>
                  {line2}
                </text>
              </>
            ) : (
              <text x={nx} y={ny + 5} textAnchor="middle" fontSize="11" fontWeight="700"
                fill={isActive ? "#fff" : "#C91111"}>
                {line1}
              </text>
            )}
          </g>
        );
      })}
    </svg>
    </div>
  );
}

export default function Channels() {
  const [active, setActive] = useState(0);
  const selected = categories[active];
  const channels = channelsData[selected.title];

  return (
    <section className="bg-white py-16 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#C91111] text-sm tracking-widest uppercase mb-3 font-semibold">Our Network</p>
          {/* <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#C91111]">Channels</span>
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
                Our{" "}
                <span style={{ color: "#C91111", position: "relative", display: "inline-block" }}>
                  Channels
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
          <p className="text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
            Each channel is built around a specific niche, audience, and content strategy, delivering focused, high-value content at scale.
          </p>
        </div>

        {/* Mobile: pill tabs */}
        <div className="flex lg:hidden gap-2 overflow-x-auto pb-2 scrollbar-hide mb-6">
          {categories.map((cat, i) => (
            <button
              key={cat.title}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap flex-shrink-0 transition-all ${
                active === i
                  ? "bg-[#C91111] text-white"
                  : "bg-gray-100 text-gray-600 border border-gray-200 hover:border-[#C91111] hover:text-[#C91111]"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Desktop layout */}
        <div className="hidden lg:flex flex-row items-center gap-4">

          {/* Orbit diagram */}
          <div className="w-[520px] flex-shrink-0">
            <OrbitDiagram active={active} setActive={setActive} />
          </div>

          {/* Right panel */}
          <div className="flex-1">
            <div className="mb-2 sm:mb-6">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-1">{selected.title}</h3>
              <div className="w-10 h-1 rounded-full bg-[#C91111]" />
            </div>
            <div className="flex flex-col gap-4">
              {channels.map((ch) => (
                <ChannelRow key={ch.name} name={ch.name} tagline={ch.tagline} />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: channel list */}
        <div className="lg:hidden flex flex-col gap-4">
          {channels.map((ch) => (
            <ChannelRow key={ch.name} name={ch.name} tagline={ch.tagline} />
          ))}
        </div>

      </div>
    </section>
  );
}

// import { motion } from "framer-motion";

// const channels = [
//   "FactVerse India",
//   "GeoGyaan India",
//   "History Bytes",
//   "MoneyCraft India",
//   "Business Stories India",
//   "Motivation Factory",
//   "Zero to Hero Talks",
//   "Bollywood Inside",
//   "Future Tech India",
//   "Spiritual Talks India",
// ];

// function Orbit({ radius, speed, name, index }) {
//   return (
//     <div
//       className="absolute"
//       style={{
//         width: radius * 2,
//         height: radius * 2,
//         left: 0,
//         top: "50%",
//         transform: "translateY(-50%)",
//       }}
//     >
//       {/* Orbit Ring */}
//       <div className="absolute w-full h-full rounded-full border border-dashed border-gray-300" />

//       {/* Rotation */}
//       <motion.div
//         className="absolute w-full h-full"
//         animate={{ rotate: 360 }}
//         transition={{
//           repeat: Infinity,
//           duration: speed,
//           ease: "linear",
//         }}
//       >
//         {/* Single Planet */}
//         <div
//           className="absolute left-1/2 top-1/2 group cursor-pointer"
//           style={{
//             transform: `rotate(${index * 36}deg) translateY(-${radius}px)`,
//           }}
//         >
//           {/* 🔴 Planet (Logo Placeholder) */}
//           <div className="w-10 h-10 rounded-full bg-[#C91111] flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300" />

//           {/* 🏷️ Hover Label */}
//           <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
//             <p className="text-xs font-semibold text-[#C91111] bg-white px-3 py-1 rounded-md shadow">
//               {name}
//             </p>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// export default function Channels() {
//   return (
//     <section className="bg-white py-20 px-6 overflow-hidden">
//       <div className="w-full max-w-7xl mx-auto relative flex items-center">

//         {/* 🌑 LEFT (K-MEDIA SUN) */}
//         <div className="relative z-10 w-[260px] h-[260px] flex-shrink-0">
//           <div className="w-full h-full rounded-full bg-black border-4 border-[#C91111] flex items-center justify-center shadow-lg">
//             <p className="text-white font-bold text-lg text-center px-4">
//               K-Media
//             </p>
//           </div>
//         </div>

//         {/* 🪐 RIGHT SIDE ORBITS */}
//         <div className="relative flex-1 h-[700px]">

//           {channels.map((name, i) => {
//             const radius = 150 + i * 35;     // spacing between orbits
//             const speed = 20 + i * 5;       // different speed per orbit

//             return (
//               <Orbit
//                 key={name}
//                 radius={radius}
//                 speed={speed}
//                 name={name}
//                 index={i}
//               />
//             );
//           })}

//         </div>
//       </div>
//     </section>
//   );
// }

// import { motion } from "framer-motion";

// const channels = [
//   "FactVerse India",
//   "GeoGyaan India",
//   "History Bytes",
//   "MoneyCraft India",
//   "Business Stories India",
//   "Motivation Factory",
//   "Zero to Hero Talks",
//   "Bollywood Inside",
//   "Future Tech India",
//   "Spiritual Talks India",
// ];

// function Orbit({ radius, speed, name, index }) {
//   return (
//     <div
//       className="absolute flex items-center justify-center"
//       style={{
//         width: radius * 2,
//         height: radius * 2,
//       }}
//     >
//       {/* Orbit Ring */}
//       <div className="absolute w-full h-full rounded-full border border-dashed border-gray-300" />

//       {/* Rotation */}
//       <motion.div
//         className="absolute w-full h-full"
//         animate={{ rotate: 360 }}
//         transition={{
//           repeat: Infinity,
//           duration: speed,
//           ease: "linear",
//         }}
//       >
//         {/* Planet */}
//         <div
//           className="absolute top-1/2 left-1/2 group"
//           style={{
//             transform: `rotate(${index * 36}deg) translateX(${radius}px)`,
//             transformOrigin: "0 0",
//           }}
//         >
//           <div className="w-8 h-8 rounded-full bg-[#C91111] shadow-lg hover:scale-110 transition-all duration-300" />

//           {/* Label */}
//           <div className="absolute top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition">
//             <p className="text-xs font-semibold text-[#C91111] bg-white px-2 py-1 rounded shadow whitespace-nowrap">
//               {name}
//             </p>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// export default function Channels() {
//   return (
//     <section className="bg-white h-screen w-full overflow-hidden flex items-center justify-center">

//       {/* 🌌 Orbit System Container */}
//       <div className="relative w-full max-w-[1800px] h-[300px] flex items-center justify-center">

//         {/* 🌑 CENTER SUN */}
//         <div className="absolute z-20 w-[220px] h-[220px]">
//           <div className="w-full h-full rounded-full bg-black border-4 border-[#C91111] flex items-center justify-center shadow-xl">
//             <p className="text-white font-bold text-lg text-center">
//               K-Media
//             </p>
//           </div>
//         </div>

//         {/* 🪐 ORBITS */}
//         {channels.map((name, i) => {
//           const radius = 150 + i * 30;   // tighter spacing
//           const speed = 18 + i * 4;

//           return (
//             <Orbit
//               key={name}
//               radius={radius}
//               speed={speed}
//               name={name}
//               index={i}
//             />
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// import { motion } from "framer-motion";

// const channels = [
//   "FactVerse India",
//   "GeoGyaan India",
//   "History Bytes",
//   "MoneyCraft India",
//   "Business Stories India",
//   "Motivation Factory",
//   "Zero to Hero Talks",
//   "Bollywood Inside",
//   "Future Tech India",
//   "Spiritual Talks India",
// ];

// function Orbit({ radius, speed, name, index }) {
//   return (
//     <div
//       className="absolute"
//       style={{
//         width: radius * 2,
//         height: radius * 2,
//         left: 0,                 // 🔥 CENTER AT LEFT
//         top: "50%",
//         transform: "translateY(-50%)",
//       }}
//     >
//       {/* Orbit Line (Arc effect) */}
//       <div className="absolute w-full h-full rounded-full border border-gray-300 opacity-60" />

//       {/* Rotation */}
//       <motion.div
//         className="absolute w-full h-full"
//         animate={{ rotate: 360 }}
//         transition={{
//           repeat: Infinity,
//           duration: speed,
//           ease: "linear",
//         }}
//       >
//         {/* Planet */}
//         <div
//           className="absolute top-1/2 left-1/2 group"
//           style={{
//             transform: `rotate(${index * 40}deg) translateX(${radius}px)`,
//             transformOrigin: "0 0",
//           }}
//         >
//           {/* Planet UI */}
//           <div className="w-10 h-10 rounded-full bg-[#C91111] shadow-lg hover:scale-110 transition-all duration-300" />

//           {/* Label */}
//           <div className="absolute top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition">
//             <p className="text-xs font-semibold text-[#C91111] bg-white px-2 py-1 rounded shadow whitespace-nowrap">
//               {name}
//             </p>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// export default function Channels() {
//   return (
//     <section className="bg-black h-screen w-full overflow-hidden flex items-center">

//       {/* LEFT SUN */}
//       <div className="relative z-20 w-[220px] h-[220px] ml-10 flex-shrink-0">
//         <div className="w-full h-full rounded-full bg-black border-4 border-[#C91111] flex items-center justify-center shadow-[0_0_40px_#C91111]">
//           <p className="text-white font-bold text-lg">K-Media</p>
//         </div>
//       </div>

//       {/* ORBIT AREA */}
//       <div className="relative flex-1 h-[400px]">

//         {channels.map((name, i) => {
//           const radius = 120 + i * 50;   // spread wide like solar system
//           const speed = 25 + i * 6;

//           return (
//             <Orbit
//               key={name}
//               radius={radius}
//               speed={speed}
//               name={name}
//               index={i}
//             />
//           );
//         })}

//       </div>
//     </section>
//   );
// }

// import { motion } from "framer-motion";

// const channels = [
//   "FactVerse India",
//   "GeoGyaan India",
//   "History Bytes",
//   "MoneyCraft India",
//   "Business Stories India",
//   "Motivation Factory",
//   "Zero to Hero Talks",
//   "Bollywood Inside",
//   "Future Tech India",
//   "Spiritual Talks India",
// ];

// function Orbit({ radius, speed, name, index }) {
//   return (
//     <div
//       className="absolute"
//       style={{
//         width: radius * 2,
//         height: radius * 2,
//         left: "0px",
//         top: "50%",
//         transform: "translateY(-50%)",
//       }}
//     >
//       {/* Orbit Ring */}
//       <div className="absolute w-full h-full rounded-full border border-gray-400/60" />

//       {/* Rotation */}
//       <motion.div
//         className="absolute w-full h-full"
//         animate={{ rotate: 360 }}
//         transition={{
//           repeat: Infinity,
//           duration: speed,
//           ease: "linear",
//         }}
//       >
//         {/* Planet */}
//         <div
//           className="absolute top-1/2 left-1/2 group cursor-pointer"
//           style={{
//             transform: `rotate(${index * 35}deg) translateX(${radius}px)`,
//             transformOrigin: "0 0",
//           }}
//         >
//           {/* Planet UI */}
//           <div className="w-14 h-14 rounded-full bg-[#C91111] shadow-[0_0_20px_#C91111] transition duration-300 group-hover:scale-110" />

//           {/* Label */}
//           <div className="absolute left-1/2 top-[70px] -translate-x-1/2 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 pointer-events-none">
//             <p className="text-sm font-semibold text-white bg-[#C91111] px-3 py-1.5 rounded-md shadow-lg whitespace-nowrap">
//               {name}
//             </p>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// export default function Channels() {
//   return (
//     <section className="bg-black w-full overflow-hidden">
      
//       {/* ✅ MOBILE LAYOUT */}
//       <div className="md:hidden px-4 py-12">
        
//         {/* Center Logo */}
//         <div className="flex justify-center mb-10">
//           <div className="w-32 h-32 rounded-full border-4 border-[#C91111] flex items-center justify-center shadow-[0_0_25px_#C91111]">
//             <p className="text-white font-bold text-sm text-center">
//               K-Media
//             </p>
//           </div>
//         </div>

//         {/* Channels Grid */}
//         <div className="grid grid-cols-2 gap-4">
//           {channels.map((name) => (
//             <div
//               key={name}
//               className="bg-[#111] border border-[#C91111]/30 rounded-xl p-4 text-center text-white text-sm font-medium hover:border-[#C91111] hover:shadow-[0_0_15px_#C91111] transition-all duration-300 active:scale-95"
//             >
//               {name}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ✅ DESKTOP ORBIT LAYOUT */}
//       <div className="hidden md:flex relative w-full h-[650px] items-center">
//         <div className="relative w-full h-full">
          
//           {/* Center Core */}
//           <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20">
//             <div className="w-[260px] h-[260px] rounded-full bg-black border-4 border-[#C91111] flex items-center justify-center shadow-[0_0_60px_#C91111]">
//               <p className="text-white font-bold text-xl">K-Media</p>
//             </div>
//           </div>

//           {/* Orbits */}
//           {channels.map((name, i) => {
//             const radius = 160 + i * 55;
//             const speed = 30 + i * 6;

//             return (
//               <Orbit
//                 key={name}
//                 radius={radius}
//                 speed={speed}
//                 name={name}
//                 index={i}
//               />
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }