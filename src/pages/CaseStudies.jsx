import React from "react";
import {
  FiPlay,
  FiEye,
  FiTrendingUp,
  FiUsers,
  FiVideo,
  FiZap,
  FiBarChart2,
} from "react-icons/fi";
import CountUp from "../animations/CountUp";
import Particles from "../animations/Particles";

const caseStudies = [
  {
    channel: "FactVerse India",
    highlight: "Rapid Shorts Growth",
    text: "Achieved consistent growth through high-frequency Shorts strategy, focusing on curiosity-driven hooks and strong retention.",
    icon: <FiZap />,
    tag: "Educational",
  },
  {
    channel: "MoneyCraft India",
    highlight: "Niche Authority Building",
    text: "Built trust in finance content by simplifying complex topics into engaging and easy-to-understand videos.",
    icon: <FiTrendingUp />,
    tag: "Finance",
  },
  {
    channel: "Motivation Factory",
    highlight: "High Engagement Content",
    text: "Strong audience engagement through relatable and emotionally driven motivational content.",
    icon: <FiUsers />,
    tag: "Motivation",
  },
  {
    channel: "Zero to Hero Talks",
    highlight: "Podcast Expansion",
    text: "Developing long-form storytelling through impactful conversations and real-life journeys.",
    icon: <FiVideo />,
    tag: "Podcast",
  },
];

const videos = [
  {
    title: "This Simple Habit Changes Your Life",
    hook: "You're doing this wrong every day…",
    views: "1M+ Views",
    bg: "from-red-900 to-red-700",
  },
  {
    title: "Stock Market Basics in 60 Seconds",
    hook: "Start investing with this simple rule…",
    views: "500K+ Views",
    bg: "from-gray-900 to-gray-700",
  },
  {
    title: "Unknown Facts About India",
    hook: "You won't believe #3…",
    views: "800K+ Views",
    bg: "from-red-800 to-rose-900",
  },
];

const metrics = [
  { icon: <FiEye />, value: 50, suffix: "M+", label: "Total Views Generated" },
  {
    icon: <FiBarChart2 />,
    value: 68,
    suffix: "%",
    label: "Average Retention Rate",
  },
  {
    icon: <FiVideo />,
    value: 120,
    suffix: "+",
    label: "Monthly Content Output",
  },
  {
    icon: <FiTrendingUp />,
    value: 40,
    suffix: "%",
    label: "Audience Growth Rate",
  },
  { icon: <FiUsers />, value: 85, suffix: "%", label: "Engagement Rate" },
];

export default function CaseStudies() {
  return (
    <section className="relative bg-white py-16 px-6 overflow-hidden">
      {/* 🔴 Background Particles */}
      <div className="absolute inset-0 z-[1]">
        <Particles
          particleColors={["#ff0000"]}
          particleCount={200}
          particleSpread={5}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#C91111] text-sm tracking-widest uppercase mb-3 font-semibold">
            Proof of Work
          </p>
          <h2
            className="font-display font-black text-gray-900 tracking-tight mb-4"
            style={{ fontSize: "clamp(2.4rem,5.5vw,4.2rem)", lineHeight: 1.05 }}
          >
            Case Studies /
            <span className="text-[#C91111] relative inline-block">
              Proof
              <svg
                viewBox="0 0 100 14"
                className="absolute -bottom-1.5 left-0 w-full overflow-visible"
              >
                <path
                  d="M 3 10 Q 50 3 97 10"
                  stroke="#C91111"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray="300"
                  strokeDashoffset="300"
                  className="anim-draw-line"
                />
              </svg>
            </span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-3">
            <p className="text-gray-700 text-base leading-relaxed font-medium">
              We believe results speak louder than words. Our content strategy
              is built on performance, and our channels reflect consistent
              growth, engagement, and audience trust.
            </p>
            <p className="text-gray-500 text-base leading-relaxed">
              From viral Shorts to high-retention long-form content, our work is
              driven by measurable impact and scalable success.
            </p>
          </div>
        </div>

        {/* Channel Growth */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-1 h-7 rounded-full bg-[#C91111]" />
            <h3 className="text-2xl font-bold text-gray-900">
              Channel Growth Highlights
            </h3>
          </div>

          {/* Mobile Scroll */}
          <div className="flex gap-4 overflow-x-auto sm:hidden no-scrollbar px-1">
            {caseStudies.map((cs) => (
              <div
                key={cs.channel}
                className="flex-shrink-0 w-[260px] bg-white border border-[#C91111]/20 rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C91111]/10 flex items-center justify-center text-[#C91111]">
                    {cs.icon}
                  </div>
                  <span className="text-[10px] font-semibold uppercase text-[#C91111] bg-[#C91111]/10 px-2 py-1 rounded-full">
                    {cs.tag}
                  </span>
                </div>

                <p className="text-gray-900 font-bold text-base mb-1">
                  {cs.channel}
                </p>
                <p className="text-[#C91111] text-xs font-semibold mb-3">
                  {cs.highlight}
                </p>
                <p className="text-gray-500 text-sm">{cs.text}</p>
              </div>
            ))}
          </div>

          {/* Desktop Grid */}
          <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-5">
            {caseStudies.map((cs) => (
              <div
                key={cs.channel}
                className="group bg-white border border-[#C91111]/20 rounded-2xl p-6 hover:shadow-xl hover:border-[#C91111]/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C91111]/10 flex items-center justify-center text-[#C91111] group-hover:bg-[#C91111] group-hover:text-white transition">
                    {cs.icon}
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#C91111] bg-[#C91111]/10 px-2 py-1 rounded-full">
                    {cs.tag}
                  </span>
                </div>

                <p className="text-gray-900 font-bold text-base mb-1">
                  {cs.channel}
                </p>
                <p className="text-[#C91111] text-xs font-semibold mb-3">
                  {cs.highlight}
                </p>
                <p className="text-gray-500 text-sm">{cs.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Viral Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Viral Content Examples
          </h3>

          {/* Mobile Scroll */}
          <div className="flex gap-4 overflow-x-auto sm:hidden no-scrollbar px-1">
            {videos.map((v) => (
              <div
                key={v.title}
                className="flex-shrink-0 w-[260px] rounded-2xl overflow-hidden shadow-md"
              >
                <div
                  className={`bg-gradient-to-br ${v.bg} h-44 flex items-center justify-center relative`}
                >
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <FiPlay className="text-white" />
                  </div>

                  <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <FiEye />
                    {v.views}
                  </div>
                </div>

                <div className="bg-white p-4">
                  <p className="font-bold text-sm">{v.title}</p>
                  <p className="text-gray-400 text-xs italic">{v.hook}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Grid */}
          <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((v) => (
              <div
                key={v.title}
                className="group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition hover:-translate-y-1"
              >
                <div
                  className={`bg-gradient-to-br ${v.bg} h-52 flex items-center justify-center relative`}
                >
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-[#C91111] transition">
                    <FiPlay className="text-white text-xl" />
                  </div>

                  <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                    <FiEye />
                    {v.views}
                  </div>
                </div>

                <div className="bg-white p-5">
                  <p className="font-bold text-sm">{v.title}</p>
                  <p className="text-gray-400 text-xs italic">{v.hook}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Performance Metrics
          </h3>

          {/* Mobile Scroll */}
          <div className="flex gap-4 overflow-x-auto sm:hidden no-scrollbar px-1">
            {metrics.map((m) => (
              <div key={m.label} className="flex-shrink-0">
                <div className="w-28 h-28 rounded-full bg-white border-2 border-[#C91111] flex flex-col items-center justify-center text-center">
                  <div className="text-[#C91111] mb-1">{m.icon}</div>

                  <p className="font-bold text-sm">
                    <CountUp from={0} to={m.value} duration={1.5} />
                    {m.suffix}
                  </p>

                  <p className="text-[9px] text-gray-500 px-1">{m.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Grid */}
          <div className="hidden sm:grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
            {metrics.map((m) => (
              <div key={m.label} className="relative group">
                <div className="absolute inset-0 rounded-full border-2 border-[#C91111]/30 scale-110 group-hover:scale-125 transition duration-300" />

                <div className="w-36 h-36 rounded-full bg-white border-2 border-[#C91111] flex flex-col items-center justify-center text-center shadow-sm group-hover:shadow-xl transition duration-300">
                  <div className="w-10 h-10 rounded-full bg-[#C91111]/10 flex items-center justify-center text-[#C91111] mb-2 group-hover:bg-[#C91111] group-hover:text-white transition">
                    {m.icon}
                  </div>

                  <p className="font-extrabold text-xl leading-none">
                    <CountUp from={0} to={m.value} duration={1.5} />
                    {m.suffix}
                  </p>

                  <p className="text-gray-500 text-[10px] mt-1 px-2">
                    {m.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
