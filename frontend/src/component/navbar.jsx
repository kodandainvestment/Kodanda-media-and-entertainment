import { useState } from "react";

const links = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Why Choose", id: "why-us" },
  { label: "FAQ", id: "faq" },
  { label: "Contact", id: "contact" },
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#fdf6ff] sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => scrollTo("home")} className="text-2xl font-bold text-gray-900">
          Kodanda <span className="bg-gradient-to-r from-[#E63B57] via-[#FF5E6E] to-[#FF8B83] bg-clip-text text-transparent">Media</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          {links.map((l) => (
            <li key={l.label}>
              <button
                onClick={() => scrollTo(l.id)}
                className="relative text-gray-600 hover:text-[#f07060] transition-colors duration-200 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#f07060] after:rounded-full after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => scrollTo("contact")}
          className="hidden md:inline-block bg-gray-900 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-gray-700 transition"
        >
          Get Started
        </button>

        {/* Hamburger */}
        <button
          className="md:hidden text-gray-900 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#fdf6ff] px-6 pb-4 flex flex-col gap-4">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => { scrollTo(l.id); setOpen(false); }}
              className="text-gray-600 font-medium hover:text-[#f07060] transition-colors duration-200 text-left"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => { scrollTo("contact"); setOpen(false); }}
            className="bg-gray-900 text-white px-5 py-2.5 rounded-full font-semibold text-center hover:bg-gray-700 transition"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
