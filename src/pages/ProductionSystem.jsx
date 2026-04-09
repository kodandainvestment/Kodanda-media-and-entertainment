import { useState } from "react";
import { FiSearch, FiFileText, FiScissors, FiUploadCloud } from "react-icons/fi";

const steps = [
  {
    number: "01",
    icon: <FiSearch />,
    title: "Research & Ideation",
    subtitle: "Process",
    paragraph:
      "Every piece of content starts with research. We analyze trends, audience behavior, and content gaps to identify ideas that have the potential to perform.",
    cards: [
      { heading: "Trend Analysis", text: "Identifying what's working in the market." },
      { heading: "Audience Insights", text: "Understanding viewer interests and behavior." },
      { heading: "Content Gap Finding", text: "Creating content that stands out." },
    ],
  },
  {
    number: "02",
    icon: <FiFileText />,
    title: "Scriptwriting",
    subtitle: "Framework",
    paragraph:
      "Our scripts are designed for clarity, engagement, and retention. Every script follows a structured format to ensure consistency across channels.",
    cards: [
      { heading: "Hook & Opening", text: "Strong opening that grabs attention instantly." },
      { heading: "Structured Flow", text: "Logical and engaging progression of ideas." },
      { heading: "Impactful Ending", text: "Clear conclusion with a strong takeaway or CTA." },
    ],
  },
  {
    number: "03",
    icon: <FiScissors />,
    title: "Editing & Post-Production",
    subtitle: "Workflow",
    paragraph:
      "Editing transforms raw content into engaging experiences. Our post-production process focuses on speed, clarity, and visual engagement.",
    cards: [
      { heading: "Fast Cuts & Transitions", text: "Maintain viewer attention." },
      { heading: "Captions & Visuals", text: "Improve clarity and retention." },
      { heading: "Sound Design", text: "Enhance emotional impact." },
      { heading: "Platform Optimization", text: "Format content for each platform." },
    ],
  },
  {
    number: "04",
    icon: <FiUploadCloud />,
    title: "Publishing & Optimization",
    subtitle: "System",
    paragraph:
      "Publishing is not the final step — optimization is. We continuously refine our content based on performance data and audience feedback.",
    cards: [
      { heading: "SEO & Metadata", text: "Optimized titles, descriptions, and tags for discoverability." },
      { heading: "Timing & Consistency", text: "Strategic posting schedules for maximum reach." },
      { heading: "Performance Tracking", text: "Data-driven improvements based on analytics and audience behavior." },
    ],
  },
];

export default function ProductionSystem() {
  const [openStep, setOpenStep] = useState("01");

  return (
    <section className="bg-white py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-16">
          <p className="text-[#C91111] text-sm tracking-widest uppercase mb-3 font-semibold">Behind The Scenes</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Our <span className="text-[#C91111]">Production System</span>
          </h2>
          <p className="text-gray-500 text-base mt-5 max-w-2xl mx-auto leading-relaxed">
            Behind every piece of content is a structured production system designed for efficiency, consistency,
            and scalability. Our workflow ensures that every video meets high-quality standards while maintaining
            speed and volume.
          </p>
        </div>

        {/* ── Two-column layout ── */}
        <div className="flex flex-col lg:flex-row gap-6">

          {/* Left: vertical step list */}
          <div className="flex flex-col gap-3 lg:w-72 flex-shrink-0">
            {steps.map((step) => {
              const active = openStep === step.number;
              return (
                <button
                  key={step.number}
                  onClick={() => setOpenStep(active ? null : step.number)}
                  className={`flex items-center gap-4 rounded-xl px-5 py-4 border text-left transition-all ${
                    active
                      ? "bg-[#C91111] border-[#C91111] shadow-md shadow-[#C91111]/30"
                      : "bg-white border-gray-200 hover:border-[#C91111]/40"
                  }`}
                >
                  <span className={`w-9 h-9 rounded-full text-xs font-black flex items-center justify-center flex-shrink-0 ${
                    active ? "bg-white text-[#C91111]" : "bg-[#C91111] text-white"
                  }`}>{step.number}</span>
                  <span className={`font-semibold text-sm flex-1 ${active ? "text-white" : "text-gray-900"}`}>{step.title}</span>
                  <span className={`text-lg flex-shrink-0 ${active ? "text-white" : "text-[#C91111]"}`}>{step.icon}</span>
                </button>
              );
            })}
          </div>

          {/* Right: detail panel */}
          <div className="flex-1 shadow-md shadow-gray-200 rounded-2xl p-6 lg:p-8 h-full bg-[#c91111]/20">
            {openStep ? (() => {
              const step = steps.find((s) => s.number === openStep);
              return (
                <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    <span className="text-xs font-semibold text-[#C91111] bg-[#C91111]/8 px-3 py-1 rounded-full border border-[#C91111]/20">
                      {step.subtitle}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{step.paragraph}</p>
                  <div className={`grid gap-4 ${step.cards.length === 4 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-3"}`}>
                    {step.cards.map((card) => (
                      <div
                        key={card.heading}
                        className="bg-[#C91111]/5 border border-[#C91111]/15 rounded-xl p-4 hover:border-[#C91111]/40 hover:bg-[#C91111]/8 transition-all group"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-2 h-2 rounded-full bg-[#C91111] flex-shrink-0 group-hover:scale-125 transition-transform" />
                          <h4 className="text-gray-900 font-bold text-sm">{card.heading}</h4>
                        </div>
                        <p className="text-gray-500 text-xs leading-relaxed">{card.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })() : (
              <div className="flex items-center justify-center h-full min-h-48 rounded-2xl border border-dashed border-gray-200">
                <p className="text-gray-400 text-sm">Select a step to view details</p>
              </div>
            )}
          </div>

        </div>

        {/* ── CTA ── */}
        {/* <div className="mt-16 text-center bg-[#C91111]/5 border border-[#C91111]/20 rounded-2xl py-10 px-6">
          <p className="text-[#C91111] text-sm tracking-widest uppercase font-semibold mb-2">Ready to Scale?</p>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Let's Build Your Content Engine
          </h3>
          <p className="text-gray-500 text-sm max-w-xl mx-auto mb-6">
            Our production system is built to deliver consistent, high-quality content at scale. Let's put it to work for your brand.
          </p>
          <button className="bg-[#C91111] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#a50e0e] transition shadow-md shadow-[#C91111]/30">
            Start Your Journey
          </button>
        </div> */}

      </div>
    </section>
  );
}
