const projects = [
  {
    title: "Social Media Campaign",
    category: "Social Media",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
  },
  {
    title: "Brand Identity Design",
    category: "Branding",
    img: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80",
  },
  {
    title: "Video Production",
    category: "Video",
    img: "https://images.unsplash.com/photo-1579187707643-35646d22b596?w=800&q=80",
  },
  {
    title: "Performance Ad Creative",
    category: "Marketing",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
  },
  {
    title: "Web & Digital Experience",
    category: "Web",
    img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
  },
  {
    title: "Content Strategy",
    category: "Strategy",
    img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
  },
];

function Card({ project, className = "" }) {
  return (
    <div className={`group relative rounded-2xl overflow-hidden cursor-pointer ${className}`}>
      <img
        src={project.img}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300 flex flex-col justify-end p-5">
        <p className="text-[#f07060] text-xs font-semibold uppercase tracking-widest mb-1">
          {project.category}
        </p>
        <h3 className="text-white font-bold text-lg leading-tight">{project.title}</h3>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="min-h-screen bg-gradient-to-b from-[#f5eeff] to-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-[#f07060] text-sm tracking-widest uppercase mb-3">Our Work</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            Featured <span className="bg-gradient-to-r from-[#E63B57] via-[#FF5E6E] to-[#FF8B83] bg-clip-text text-transparent">Portfolio</span>
          </h2>
        </div>

        {/* Masonry — desktop */}
        <div className="hidden sm:flex gap-4 h-[560px]">
          {/* Col 1: tall top + short bottom */}
          <div className="flex flex-col gap-4 flex-1">
            <Card project={projects[0]} className="h-[400px]" />
            <Card project={projects[3]} className="flex-1" />
          </div>

          {/* Col 2: short top + tall bottom */}
          <div className="flex flex-col gap-4 flex-1">
            <Card project={projects[1]} className="h-[320px]" />
            <Card project={projects[4]} className="flex-1" />
          </div>

          {/* Col 3: short top + tall bottom */}
          <div className="flex flex-col gap-4 flex-1">
            <Card project={projects[2]} className="h-[200px]" />
            <Card project={projects[5]} className="flex-1" />
          </div>
        </div>

        {/* Mobile: single column */}
        <div className="flex sm:hidden flex-col gap-4">
          {projects.map((p) => (
            <Card key={p.title} project={p} className="h-[220px]" />
          ))}
        </div>
      </div>
    </section>
  );
}
