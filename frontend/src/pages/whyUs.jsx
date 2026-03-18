import { FiCheckCircle, FiUsers, FiTrendingUp, FiZap, FiStar, FiShield, FiAward, FiMessageCircle } from "react-icons/fi";

const reasons = [
  {
    icon: <FiStar />,
    title: "Creative Excellence",
    desc: "Our award-winning creative team blends art and strategy to produce work that doesn't just look good — it performs.",
  },
  {
    icon: <FiTrendingUp />,
    title: "Data-Driven Results",
    desc: "Every decision is backed by analytics. We track, measure, and optimize continuously to maximize your ROI.",
  },
  {
    icon: <FiUsers />,
    title: "Dedicated Team",
    desc: "You get a dedicated pod of strategists, designers, and developers — not a rotating roster of freelancers.",
  },
  {
    icon: <FiZap />,
    title: "Fast Turnaround",
    desc: "We move at startup speed. Agile sprints and clear timelines mean you never wait weeks for results.",
  },
  {
    icon: <FiShield />,
    title: "Transparent Process",
    desc: "No black boxes. You get full visibility into our process, progress, and performance at every stage.",
  },
  {
    icon: <FiAward />,
    title: "Proven Track Record",
    desc: "340+ projects delivered across industries with a 96% client satisfaction rate and 15+ industry awards.",
  },
];

const process = [
  { step: "01", title: "Discovery", desc: "We deep-dive into your brand, audience, and goals to build a solid strategic foundation." },
  { step: "02", title: "Strategy", desc: "We craft a tailored roadmap — creative direction, channel mix, and KPIs aligned to your objectives." },
  { step: "03", title: "Execution", desc: "Our team brings the strategy to life with precision — on time, on brand, and on budget." },
  { step: "04", title: "Optimise", desc: "We analyse results, iterate fast, and continuously improve to compound your growth over time." },
];

const comparisons = [
  { point: "Dedicated account team", us: true, others: false },
  { point: "Full-service under one roof", us: true, others: false },
  { point: "Real-time performance reporting", us: true, others: false },
  { point: "Creative + performance combined", us: true, others: false },
  { point: "Flexible retainer & project models", us: true, others: false },
  { point: "Industry-specific expertise", us: true, others: false },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="min-h-screen bg-gradient-to-b from-[#f5eeff] to-[#fdf6ff] px-6 py-20">
      <div className="max-w-5xl mx-auto flex flex-col gap-20">

        {/* Heading */}
        <div className="text-center">
          <p className="text-[#f07060] text-sm tracking-widest uppercase mb-3">Why Kodanda</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            Why Choose <span className="bg-gradient-to-r from-[#E63B57] via-[#FF5E6E] to-[#FF8B83] bg-clip-text text-transparent">Us</span>
          </h2>
          <p className="mt-4 text-gray-500 text-base max-w-xl mx-auto">
            There are a lot of agencies out there. Here's what makes Kodanda Media the partner brands trust to grow.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((r) => (
            <div key={r.title} className="bg-white rounded-2xl p-6 shadow-sm border border-purple-50 flex flex-col gap-3 hover:shadow-md transition">
              <div className="w-11 h-11 rounded-xl bg-purple-100 flex items-center justify-center text-[#f07060] text-lg">
                {r.icon}
              </div>
              <p className="text-gray-900 font-bold text-sm">{r.title}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* Process */}
        <div>
          <div className="text-center mb-10">
            <p className="text-[#f07060] text-xs tracking-widest uppercase mb-3">How We Work</p>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Our <span className="bg-gradient-to-r from-[#E63B57] via-[#FF5E6E] to-[#FF8B83] bg-clip-text text-transparent">Process</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {process.map((p, i) => (
              <div key={p.step} className="relative bg-white rounded-2xl p-6 shadow-sm border border-purple-50 flex flex-col gap-3">
                <span className="text-4xl font-extrabold text-purple-100">{p.step}</span>
                <p className="text-gray-900 font-bold text-sm">{p.title}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                {i < process.length - 1 && (
                  <span className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-purple-200 text-xl z-10">→</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Comparison table */}
        <div>
          <div className="text-center mb-10">
            <p className="text-[#f07060] text-xs tracking-widest uppercase mb-3">The Difference</p>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Us vs <span className="bg-gradient-to-r from-[#E63B57] via-[#FF5E6E] to-[#FF8B83] bg-clip-text text-transparent">Others</span>
            </h3>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-purple-50 overflow-hidden">
            <div className="grid grid-cols-3 bg-purple-50 px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-widest">
              <span>Feature</span>
              <span className="text-center text-[#f07060]">Kodanda Media</span>
              <span className="text-center">Others</span>
            </div>
            {comparisons.map((c, i) => (
              <div
                key={c.point}
                className={`grid grid-cols-3 px-6 py-4 items-center text-sm ${i % 2 === 0 ? "bg-white" : "bg-purple-50/40"}`}
              >
                <span className="text-gray-700 font-medium">{c.point}</span>
                <span className="flex justify-center">
                  <FiCheckCircle className="text-[#f07060] text-lg" />
                </span>
                <span className="flex justify-center">
                  <span className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-xs">✕</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        {/* <div className="bg-white rounded-2xl shadow-sm border border-purple-50 px-8 py-12 text-center">
          <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-[#f07060] text-xl mx-auto mb-4">
            <FiMessageCircle />
          </div>
          <h3 className="text-gray-900 font-extrabold text-2xl mb-2">Ready to grow with us?</h3>
          <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
            Let's talk about your brand and how Kodanda Media can help you reach your next milestone.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-700 transition"
          >
            Get Started
          </a>
        </div> */}

      </div>
    </section>
  );
}
