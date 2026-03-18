import { useState } from "react";
import { FiShare2, FiVideo, FiLayers, FiTrendingUp, FiMonitor, FiZap } from "react-icons/fi";

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

export default function Services() {
  const [active, setActive] = useState(0);
  const selected = services[active];

  return (
    <section
      id="services"
      className="min-h-screen bg-gradient-to-b from-[#f5eeff] to-[#fdf6ff] py-20 px-6"
    >
      <div className="max-w-5xl mx-auto text-center mb-14">
        <p className="text-[#f07060] text-sm tracking-widest uppercase mb-3">What We Do</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">Our <span className="bg-gradient-to-r from-[#E63B57] via-[#FF5E6E] to-[#FF8B83] bg-clip-text text-transparent">Services</span></h2>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-4">
        {/* Left sidebar */}
        <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible lg:w-64 flex-shrink-0">
          {services.map((s, i) => (
            <button
              key={s.title}
              onClick={() => setActive(i)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all flex-shrink-0 lg:flex-shrink w-full ${
                active === i
                  ? "border border-[#f07060] shadow-lg"
                  : "bg-white/60 text-gray-600 hover:bg-white hover:text-gray-900"
              }`}
            >
              <span
                className={`text-lg flex-shrink-0 ${active === i ? "text-[#f07060]" : "text-gray-400"}`}
              >
                {s.icon}
              </span>
              <div className="hidden sm:block">
                <p className={`font-semibold text-sm ${active === i ? "text-black" : "text-gray-800"}`}>
                  {s.title}
                </p>
                <p className={`text-xs ${active === i ? "text-gray-600" : "text-gray-400"}`}>
                  {s.subtitle}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Right detail panel */}
        <div className="flex-1 bg-white rounded-2xl shadow-sm p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-[#f5eeff] flex items-center justify-center text-[#f07060] text-xl">
              {selected.icon}
            </div>
            <div>
              <h3 className="text-gray-900 font-bold text-xl">{selected.title}</h3>
              <p className="text-[#f07060] text-sm">{selected.subtitle}</p>
            </div>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed mb-6">{selected.desc}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {selected.features.map((f) => (
              <div key={f} className="flex items-center gap-2 text-gray-700 text-sm">
                <span className="w-2 h-2 rounded-full bg-[#f07060] flex-shrink-0" />
                {f}
              </div>
            ))}
          </div>

          <button className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
