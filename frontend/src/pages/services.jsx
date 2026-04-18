import { useState } from "react";
import { FiShare2, FiVideo, FiLayers, FiTrendingUp, FiMonitor, FiZap, FiPlay } from "react-icons/fi";
import MagicRings from "../animations/MagicRings ";
import OrbitImages from "../animations/OrbitImages";

const services = [
  {
    title: "Brand Strategy",
    subtitle: "Identity that resonates",
    icon: <FiShare2 />,
    desc: "We craft distinctive brand identities that cut through noise. From logo design to comprehensive brand guidelines, we build the visual and verbal DNA of your brand.",
    features: ["Logo & Visual Identity", "Community Management", "Influencer Partnerships", "Analytics & Reporting"],
  },
  {
    title: "Video Production",
    subtitle: "Stories that captivate",
    icon: <FiVideo />,
    desc: "Cinematic content from concept to delivery — ads, reels, brand films, and documentaries that leave a lasting impression.",
    features: ["Brand Films", "Social Reels", "Ad Creatives", "Documentaries"],
  },
  {
    title: "Brand Identity",
    subtitle: "Identity that resonates",
    icon: <FiLayers />,
    desc: "We craft distinctive brand identities that cut through noise. From logo design to comprehensive brand guidelines, we build the visual and verbal DNA of your brand.",
    features: ["Logo & Visual Identity", "Naming & Messaging", "Brand Guidelines", "Brand Audits"],
  },
  {
    title: "Performance Marketing",
    subtitle: "Data-driven results",
    icon: <FiTrendingUp />,
    desc: "ROI-focused paid media campaigns with advanced targeting and optimization that turn ad spend into measurable growth.",
    features: ["Google Ads", "Meta Campaigns", "Retargeting", "Conversion Optimization"],
  },
  {
    title: "Web & Digital",
    subtitle: "Experiences that convert",
    icon: <FiMonitor />,
    desc: "Immersive websites and digital platforms that convert visitors into customers through thoughtful UX and compelling design.",
    features: ["UI/UX Design", "Web Development", "Landing Pages", "SEO Optimization"],
  },
  {
    title: "Growth Hacking",
    subtitle: "Accelerate your scale",
    icon: <FiZap />,
    desc: "Rapid experimentation across channels to find the fastest path to sustainable growth for your business.",
    features: ["A/B Testing", "Funnel Optimization", "Viral Loops", "Growth Analytics"],
  },
];

const reels = [
  { id: 1, brand: "Meesho", label: "Fashion Campaign", bg: "#e91e8c", video: null },
  { id: 2, brand: "Balaji Wafers", label: "Product Launch", bg: "#f5c800", video: null },
  { id: 3, brand: "Svish", label: "Brand Film", bg: "#7b3f1e", video: null },
  { id: 4, brand: "Client 4", label: "Social Reel", bg: "#C91111", video: null },
  { id: 5, brand: "Client 5", label: "Ad Creative", bg: "#1a1a2e", video: null },
];

function ServiceOrbitItem({ service, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-3 px-8 py-6 rounded-full transition-all whitespace-nowrap"
      style={{
        background: isActive ? "#C91111" : "rgba(201,17,17,0.08)",
        border: `2px solid ${isActive ? "#C91111" : "rgba(201,17,17,0.35)"}`,
        color: isActive ? "#fff" : "#C91111",
        fontSize: "24px",
        fontWeight: 600,
      }}
    >
      <span className="text-4xl flex-shrink-0">{service.icon}</span>
      <span>{service.title}</span>
    </button>
  );
}

export default function Services() {
  const [active, setActive] = useState(0);
  const selected = services[active];

  return (
    <section id="services" className="bg-white py-12 px-6 relative overflow-hidden">

      {/* ── Services ── */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <p className="text-[#C91111] text-sm tracking-widest uppercase mb-3 font-semibold">What We Do</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
          Our <span className="text-[#C91111]">Services</span>
        </h2>
        <p className="text-gray-500 text-base mt-4 max-w-2xl mx-auto leading-relaxed">
          From bold brand identities to high-converting campaigns, we offer end-to-end creative and digital solutions tailored to help your business stand out, scale up, and leave a lasting impression.
        </p>
      </div>

      {/* Mobile: pill tabs */}
      <div className="relative z-10 flex lg:hidden gap-2 overflow-x-auto pb-1 scrollbar-hide max-w-5xl mx-auto mb-4">
        {services.map((s, i) => (
          <button
            key={s.title}
            onClick={() => setActive(i)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap flex-shrink-0 transition-all ${
              active === i
                ? "bg-[#C91111] text-white"
                : "bg-gray-100 text-gray-600 border border-gray-200 hover:border-[#C91111] hover:text-[#C91111]"
            }`}
          >
            <span className="text-base">{s.icon}</span>
            {s.title}
          </button>
        ))}
      </div>

      {/* Desktop: Orbit + Detail */}
      <div className="relative z-10 max-w-6xl mx-auto hidden lg:flex flex-row items-center gap-8 mb-12">
        {/* Orbit ring */}
        <div className="w-1/2 flex-shrink-0 -ml-16 relative">
          {/* MagicRings spread behind orbit */}
          <div className="absolute inset-0 pointer-events-none z-0" style={{ margin: "-60px" }}>
            <MagicRings
              color="#C91111"
              colorTwo="#ffffff"
              ringCount={5}
              speed={1}
              attenuation={20}
              lineThickness={1.5}
              baseRadius={0.3}
              radiusStep={0.08}
              scaleRate={0.1}
              opacity={0.45}
              noiseAmount={0}
              ringGap={1.5}
              fadeIn={0.7}
              fadeOut={0.5}
            />
          </div>
          <div className="relative z-10">
          <OrbitImages
            shape="circle"
            radius={400}
            rotation={0}
            duration={30}
            itemSize={160}
            responsive={true}
            direction="normal"
            fill
            showPath
            pathColor="rgba(201,17,17,0.2)"
            paused={false}
            items={services.map((s, i) => (
              <ServiceOrbitItem
                key={s.title}
                service={s}
                isActive={active === i}
                onClick={() => setActive(i)}
              />
            ))}
          />
          </div>
        </div>

        {/* Detail panel */}
        <div className="flex-1 bg-[#C91111]/5 border border-[#C91111]/20 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-[#C91111]/10 flex items-center justify-center text-[#C91111] text-xl">
              {selected.icon}
            </div>
            <div>
              <h3 className="text-gray-900 font-bold text-xl">{selected.title}</h3>
              <p className="text-[#C91111] text-sm">{selected.subtitle}</p>
            </div>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">{selected.desc}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {selected.features.map((f) => (
              <div key={f} className="flex items-center gap-2 text-gray-700 text-sm">
                <span className="w-2 h-2 rounded-full bg-[#C91111] flex-shrink-0" />
                {f}
              </div>
            ))}
          </div>
          <button className="bg-[#C91111] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#a50e0e] transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Mobile: detail panel */}
      <div className="relative z-10 lg:hidden max-w-5xl mx-auto mb-24 bg-[#C91111]/5 border border-[#C91111]/20 rounded-2xl p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-[#C91111]/10 flex items-center justify-center text-[#C91111] text-xl">
            {selected.icon}
          </div>
          <div>
            <h3 className="text-gray-900 font-bold text-xl">{selected.title}</h3>
            <p className="text-[#C91111] text-sm">{selected.subtitle}</p>
          </div>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">{selected.desc}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {selected.features.map((f) => (
            <div key={f} className="flex items-center gap-2 text-gray-700 text-sm">
              <span className="w-2 h-2 rounded-full bg-[#C91111] flex-shrink-0" />
              {f}
            </div>
          ))}
        </div>
        <button className="bg-[#C91111] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#a50e0e] transition">
          Learn More
        </button>
      </div>

      {/* ── Reels Section ── */}
      {/* <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[#C91111] text-sm tracking-widest uppercase mb-3 font-semibold">Our Work in Motion</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Brand <span className="text-[#C91111]">Reels</span>
          </h2>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide justify-center">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="relative flex-shrink-0 w-[180px] h-[320px] rounded-2xl overflow-hidden border border-gray-200 group cursor-pointer shadow-sm"
              style={{ background: reel.bg }}
            >
              {reel.video ? (
                <video
                  src={reel.video}
                  className="w-full h-full object-cover"
                  loop
                  muted
                  playsInline
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => e.target.pause()}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-black/30 flex items-center justify-center group-hover:bg-[#C91111] transition-colors duration-300">
                    <FiPlay className="text-white text-2xl ml-1" />
                  </div>
                </div>
              )}

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white font-bold text-sm">{reel.brand}</p>
                <p className="text-gray-300 text-xs">{reel.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}

    </section>
  );
}
