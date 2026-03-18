export default function Dashboard() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#f5eeff] to-[#fdf6ff] flex flex-col items-center justify-center text-center px-6 pt-4 pb-12">
      <p className="text-lg tracking-[0.25em] uppercase text-gray-600 mb-6">
        Digital Marketing Agency
      </p>

      <h1 className="text-5xl sm:text-6xl md:text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight max-w-5xl">
        We Are{" "}
        <span className="bg-gradient-to-r from-[#E63B57] via-[#FF5E6E] to-[#FF8B83] bg-clip-text text-transparent">Kodanda</span>
        <br />
        <span className="bg-gradient-to-r from-[#E63B57] via-[#FF5E6E] to-[#FF8B83] bg-clip-text text-transparent">Media</span>
        <br />
        &amp; Entertainment
      </h1>

      <p className="mt-8 text-gray-500 text-base sm:text-lg max-w-xl">
        We craft bold digital experiences that transform brands and accelerate
        growth through creative strategy and innovation.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-700 transition"
        >
          Let's Grow Your Brand
        </button>
        <button
          onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
          className="border border-gray-300 text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          View Our Work
        </button>
      </div>
    </section>
  );
}
