import { FiTarget, FiEye, FiHeart, FiZap, FiUsers, FiAward, FiTrendingUp, FiBriefcase } from "react-icons/fi";

const stats = [
  { icon: <FiUsers />, value: "120+", label: "Happy Clients" },
  { icon: <FiBriefcase />, value: "340+", label: "Projects Done" },
  { icon: <FiAward />, value: "15+", label: "Awards Won" },
  { icon: <FiTrendingUp />, value: "8+", label: "Years Experience" },
];

const values = [
  { icon: <FiTarget />, title: "Purpose-Driven", desc: "Every campaign we build starts with a clear why — your goals are our north star." },
  { icon: <FiEye />, title: "Bold Creativity", desc: "We push boundaries and challenge conventions to create work that truly stands out." },
  { icon: <FiHeart />, title: "Client First", desc: "We treat every brand like our own — with care, honesty, and full commitment." },
  { icon: <FiZap />, title: "Agile Execution", desc: "Fast, iterative, and data-informed — we move quickly without sacrificing quality." },
];

const timeline = [
  { year: "2016", title: "Founded", desc: "Kodanda Media was born in Hyderabad with a vision to redefine brand storytelling in India." },
  { year: "2018", title: "First 50 Clients", desc: "Expanded our team and crossed 50 brand partnerships across media and entertainment." },
  { year: "2020", title: "Digital Pivot", desc: "Launched our performance marketing and web division to serve brands in the digital-first era." },
  { year: "2023", title: "National Reach", desc: "Opened our Indore office and scaled operations to serve clients across 10+ cities." },
];

const team = [
  { name: "Meera Kodanda", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80" },
  { name: "Arjun Rao", role: "Creative Director", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80" },
  { name: "Sneha Desai", role: "Head of Strategy", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80" },
  { name: "Karthik Nair", role: "Lead Developer", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80" },
];

export default function About() {
  return (
    <section id="about" className="bg-gradient-to-b from-[#f5eeff] to-[#fdf6ff] px-6 py-20">
      <div className="max-w-5xl mx-auto flex flex-col gap-20">

        {/* Hero / Mission */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <p className="bg-gradient-to-r from-[#E63B57] via-[#FF5E6E] to-[#FF8B83] bg-clip-text text-transparent text-sm tracking-widest uppercase mb-3">Who We Are</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
              We Build Brands That <span className="bg-gradient-to-r from-[#E63B57] via-[#FF5E6E] to-[#FF8B83] bg-clip-text text-transparent">Matter</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-4">
              Kodanda Media is a full-service creative and digital agency based in India. We partner with ambitious brands to craft compelling stories, drive meaningful engagement, and deliver measurable growth.
            </p>
            <p className="text-gray-500 text-base leading-relaxed">
              From startups finding their voice to established enterprises scaling their reach — we bring strategy, creativity, and technology together under one roof.
            </p>
          </div>
          <div className="flex-1 w-full rounded-2xl overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80"
              alt="Kodanda Media Team"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-2xl p-6 flex flex-col items-center gap-2 shadow-sm border border-purple-50 text-center">
              <span className="text-[#f07060] text-2xl">{s.icon}</span>
              <p className="text-gray-900 font-extrabold text-2xl">{s.value}</p>
              <p className="text-gray-400 text-sm">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Our Story / Timeline */}
        <div>
          <div className="text-center mb-10">
            <p className="text-[#f07060] text-xs tracking-widest uppercase mb-3">Our Journey</p>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              The <span className="bg-gradient-to-r from-[#E63B57] via-[#FF5E6E] to-[#FF8B83] bg-clip-text text-transparent">Story</span> So Far
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {timeline.map((t) => (
              <div key={t.year} className="bg-white rounded-2xl p-6 shadow-sm border border-purple-50 flex gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center text-[#f07060] font-extrabold text-sm">
                  {t.year}
                </div>
                <div>
                  <p className="text-gray-900 font-bold text-sm mb-1">{t.title}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div>
          <div className="text-center mb-10">
            <p className="text-[#f07060] text-xs tracking-widest uppercase mb-3">What Drives Us</p>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Our Core <span className="bg-gradient-to-r from-[#E63B57] via-[#FF5E6E] to-[#FF8B83] bg-clip-text text-transparent">Values</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 shadow-sm border border-purple-50 flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl bg-purple-100 flex items-center justify-center text-[#f07060] text-lg flex-shrink-0">
                  {v.icon}
                </div>
                <div>
                  <p className="text-gray-900 font-bold text-sm mb-1">{v.title}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <div className="text-center mb-10">
            <p className="text-[#f07060] text-xs tracking-widest uppercase mb-3">Our People</p>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Meet The <span className="bg-gradient-to-r from-[#E63B57] via-[#FF5E6E] to-[#FF8B83] bg-clip-text text-transparent">Minds</span>
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col items-center gap-3 group">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden ring-2 ring-transparent group-hover:ring-[#f07060] transition-all duration-300">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-center">
                  <p className="font-bold text-gray-900 text-sm">{member.name}</p>
                  <p className="text-[#f07060] text-xs">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
