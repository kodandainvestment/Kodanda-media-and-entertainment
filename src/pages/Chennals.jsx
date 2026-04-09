import { useState, useEffect } from "react";
import { motion, useMotionValue, animate } from "motion/react";

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
      <g transform={`translate(${CX - 30}, ${CY - 22})`}>
        {/* YouTube red background rect */}
        <rect x="0" y="0" width="60" height="42" rx="10" ry="10" fill="#C91111" />
        {/* Play triangle */}
        <polygon points="24,12 24,30 42,21" fill="white" />
      </g>
      {/* Category name below logo */}
      {(() => {
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
      })()}

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
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#C91111]">Channels</span>
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
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{selected.title}</h3>
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
