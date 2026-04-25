import { useState, useEffect } from "react";
import { motion, useMotionValue, animate } from "motion/react";
import { FaInstagram, FaYoutube, FaFacebookF, FaLinkedinIn, } from "react-icons/fa";
import { FaXTwitter, FaThreads, FaSnapchat } from "react-icons/fa6";


const categories = [
  { title: "Educational" },
  { title: "Finance & Business" },
  { title: "Motivation & Podcast" },
  { title: "Entertainment" },
  { title: "Spiritual & Wisdom" },
];

const channelsData = {
  Educational: [
    {
      name: "FactVerse India",
      tagline: "Curiosity-driven content",
      // logo: "/unfiltered.png",
      links: {
        instagram: "#",
        youtube: "#",
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        thread: "#",
      },
    },
    {
      name: "GeoGyaan India",
      tagline: "Learn visually, understand deeply",
      // logo: "/unfiltered.png",
      links: {
        instagram: "#",
        youtube: "#",
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        thread: "#",
      },
    },
  ],
  "Motivation & Podcast": [
    {
      name: "Unfiltered Success",
      tagline: "Real success, no filters",
      logo: "/unfiltered.png",
      links: {
        instagram: "https://www.instagram.com/unfilteredsuccess_?igsh=MWJhOHJ2eWw0ZGFjeA==",
        youtube: "https://www.youtube.com/@unfilteredsuccess.official",
        facebook: "https://www.facebook.com/unfilteredsuccess",
        twitter: "https://x.com/Unfiltered28128",
        linkedin: "https://www.linkedin.com/company/unfiltered-success/",
        thread: "https://www.threads.com/@unfilteredsuccess_",
      },
    },
    {
      name: "Motivation Factory",
      tagline: "Discipline creates success",
      // logo: "/unfiltered.png",
      links: {
        instagram: "#",
        youtube: "#",
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        thread: "#",
      },
    },
    {
      name: "Zero to Hero Talks",
      tagline: "Real stories, real journeys",
      // logo: "/unfiltered.png",
      links: {
        instagram: "#",
        youtube: "#",
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        thread: "#",
      },
    },
  ],

  "Spiritual & Wisdom": [
    {
      name: "Spiritual Talks India",
      tagline: "Inner growth, deeper understanding",
      // logo: "/unfiltered.png",
      links: {
        instagram: "#",
        youtube: "#",
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        thread: "#",
      },
    },
  ],

  "Finance & Business": [
    {
      name: "MoneyCraft India",
      tagline: "Simplifying money matters",
      // logo: "/unfiltered.png",
      links: {
        instagram: "#",
        youtube: "#",
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        thread: "#",
      },
    },
    {
      name: "Business Stories India",
      tagline: "Learn from real business journeys",
      // logo: "/unfiltered.png",
      links: {
        instagram: "#",
        youtube: "#",
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        thread: "#",
      },
    },
  ],
  Entertainment: [
    {
      name: "Bollywood Inside",
      tagline: "Behind the scenes of entertainment",
      logo: "/Bollywood-Inside.png",
      links: {
        instagram: "https://www.instagram.com/bollywoodinside_",
        youtube: "https://www.youtube.com/@bollywoodinside_k",
        facebook: "https://www.facebook.com/bollywoodinside.k",
        twitter: "https://x.com/bolly_inside",
        thread: "https://www.threads.com/@sarcastic.samachar",
        snap: "https://www.snapchat.com/@bollywoodinside?invite_id=Xew_VJew&locale=en_IN&share_id=mauU4HfbRgObtvGA4T0pgQ&sid=ec544be336cd40729ffc984ffb79bb22"
      },
    },
    {
      name: "Sarcastic Samachar",
      tagline: "News but make it savage 😏",
      logo: "/sarcastic.png",
      links: {
        instagram: "https://www.instagram.com/sarcastic_samachar",
        youtube: "https://www.youtube.com/@Sarcastic_Samachar",
        facebook: "https://www.facebook.com/sarcastic.samachar.k",
        linkedin: "https://www.linkedin.com/company/sarcastic-samachar/",
        thread: "https://wa.me/911234567890",
      },
    },
    {
      name: "Future Tech India",
      tagline: "The future, explained today",
      // logo: "/unfiltered.png",
      links: {
        instagram: "#",
        youtube: "#",
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        thread: "#",
      },
    },
  ],
};

const SIZE = 520;       // SVG viewBox size
const CX = SIZE / 2;   // center x
const CY = SIZE / 2;   // center y
const ORBIT_R = 210;   // radius of orbit path
const NODE_R = 46;     // radius of each category node
const CENTER_R = 110;  // radius of center circle
const INNER_RING_R = 130; // rotating inner ring

function ChannelRow({ name, tagline, links, logo }) {
  return (
    <div className="group relative flex items-start gap-4 bg-gray-50 border border-[#C91111]/15 rounded-2xl px-5 py-4 hover:border-[#C91111]/40 transition-all">

      {/* Logo */}
      <div className={`w-11 h-11 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0 ${logo ? 'bg-transparent' : 'bg-[#C91111]'}`}>
        {logo ? (
          <img src={logo} alt={name} className="w-full h-full object-cover" />
        ) : (
          <FaYoutube className="text-white text-lg" />
        )}
      </div>

      {/* ✅ RIGHT SIDE (TEXT + ICONS TOGETHER) */}
      <div className="flex flex-col flex-1">

        {/* Text */}
        <p className="text-gray-900 font-bold text-base">{name}</p>
        <p className="text-[#C91111] text-sm">{tagline}</p>

        {/* ✅ Icons (Mobile = below text, Desktop = right hover) */}
        <div className="
          flex gap-3 mt-2 flex-wrap
          lg:absolute lg:right-4 lg:top-1/2 lg:-translate-y-1/2
          lg:mt-0
          opacity-100 lg:opacity-0 lg:group-hover:opacity-100
          transition-all duration-300
        ">

          {links?.instagram && (
            <a href={links.instagram} target="_blank">
              <FaInstagram className="text-pink-500 hover:scale-110 transition" />
            </a>
          )}

          {links?.youtube && (
            <a href={links.youtube} target="_blank">
              <FaYoutube className="text-red-600 hover:scale-110 transition" />
            </a>
          )}

          {links?.facebook && (
            <a href={links.facebook} target="_blank">
              <FaFacebookF className="text-blue-600 hover:scale-110 transition" />
            </a>
          )}

          {links?.twitter && (
            <a href={links.twitter} target="_blank">
              <FaXTwitter className="text-sky-500 hover:scale-110 transition" />
            </a>
          )}

          {links?.linkedin && (
            <a href={links.linkedin} target="_blank">
              <FaLinkedinIn className="text-blue-700 hover:scale-110 transition" />
            </a>
          )}

          {links?.thread && (
            <a href={links.thread} target="_blank">
              <FaThreads className="text-black hover:scale-110 transition" />
            </a>
          )}

          {links?.snap && (
            <a href={links.snap} target="_blank">
              <FaSnapchat className="text-yellow-500 hover:scale-110 transition" />
            </a>
          )}

        </div>
      </div>
    </div>
  );
}

function RotatingRing() {
  const rotate = useMotionValue(0);

  useEffect(() => {
    const controls = animate(rotate, 360, {
      duration: 20,
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

  // ✅ hooks MUST be here (top level)
  const outerRotate = useMotionValue(0);

  useEffect(() => {
    const controls = animate(outerRotate, -360, {
      duration: 30, // slower rotation
      ease: "linear",
      repeat: Infinity,
    });

    return () => controls.stop();
  }, [outerRotate]);

  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "1" }}>
      <RotatingRing />

      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        width="100%"
        height="100%"
        style={{ overflow: "visible", position: "relative" }}
      >
        {/* ✅ ROTATING OUTER RING (counter-clockwise) */}
        <motion.g style={{ rotate: outerRotate }}>
          <circle
            cx={CX}
            cy={CY}
            r={ORBIT_R}
            fill="none"
            stroke="#aaa"
            strokeWidth="1.5"
            strokeDasharray="6 6"
          />
        </motion.g>

        {/* Center circle */}
        <circle
          cx={CX}
          cy={CY}
          r={CENTER_R}
          fill="#000"
          stroke="#C91111"
          strokeWidth="2.5"
        />

        {/* Center Logo */}
        <foreignObject x={CX - 70} y={CY - 70} width="140" height="140">
          <div className="w-full h-full flex items-center justify-center">
            <img
              src="/red-k.png"
              alt="Website Logo"
              className="w-20 h-20 object-contain"
            />
          </div>
        </foreignObject>

        {/* Category nodes */}
        {categories.map((cat, i) => {
          const angle = (i / total) * 2 * Math.PI - Math.PI / 2;
          const nx = CX + ORBIT_R * Math.cos(angle);
          const ny = CY + ORBIT_R * Math.sin(angle);
          const isActive = active === i;

          const words = cat.title.split(" ");
          const mid = Math.ceil(words.length / 2);
          const line1 = words.slice(0, mid).join(" ");
          const line2 = words.slice(mid).join(" ");

          return (
            <g
              key={cat.title}
              onClick={() => setActive(i)}
              style={{ cursor: "pointer" }}
            >
              {/* outer glow ring */}
              <circle
                cx={nx}
                cy={ny}
                r={NODE_R + 4}
                fill="none"
                stroke="#C91111"
                strokeWidth="2"
                opacity={isActive ? 1 : 0.3}
              />

              {/* top line */}
              <line
                x1={nx - 10}
                y1={ny - NODE_R - 10}
                x2={nx + 10}
                y2={ny - NODE_R - 10}
                stroke="#c91111"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* bottom line */}
              <line
                x1={nx - 10}
                y1={ny + NODE_R + 10}
                x2={nx + 10}
                y2={ny + NODE_R + 10}
                stroke="#c91111"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* node */}
              <circle
                cx={nx}
                cy={ny}
                r={NODE_R}
                fill={isActive ? "#C91111" : "#fff"}
                stroke="#C91111"
                strokeWidth="2"
              />

              {/* label */}
              {line2 ? (
                <>
                  <text
                    x={nx}
                    y={ny - 7}
                    textAnchor="middle"
                    fontSize="11"
                    fontWeight="700"
                    fill={isActive ? "#fff" : "#C91111"}
                  >
                    {line1}
                  </text>
                  <text
                    x={nx}
                    y={ny + 8}
                    textAnchor="middle"
                    fontSize="11"
                    fontWeight="700"
                    fill={isActive ? "#fff" : "#C91111"}
                  >
                    {line2}
                  </text>
                </>
              ) : (
                <text
                  x={nx}
                  y={ny + 5}
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight="700"
                  fill={isActive ? "#fff" : "#C91111"}
                >
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
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap flex-shrink-0 transition-all ${active === i
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
            <div className="flex-1 flex flex-col gap-6">
              {channels.map((ch, i) => (
                <ChannelRow
                  key={ch.name}
                  name={ch.name}
                  tagline={ch.tagline}
                  index={i}
                  links={ch.links}
                  logo={ch.logo}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: channel list */}
        <div className="lg:hidden flex flex-col gap-4">
          {channels.map((ch, i) => (
            <ChannelRow
              key={ch.name}
              name={ch.name}
              tagline={ch.tagline}
              links={ch.links}
              logo={ch.logo}
            />
          ))}
        </div>

      </div>
    </section>
  );
}