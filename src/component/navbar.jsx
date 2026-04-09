import { useState } from "react";
import logo from "../assets/Transparent-logo.png"

const links = [
  { label: "Home", id: "home" },
  { label: "About Us", id: "about" },
  { label: "Channels", id: "chennals" },
  // { label: "Viral Contact", id: "viral-content" },
  { label: "Case Studies", id: "case-studies" },
  // { label: "Growth & Vision", id: "growth-vision" },
  // { label: "FAQ", id: "faq" },
  { label: "Contact Us", id: "contact" },
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 shadow-sm border-b border-gray-200 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <button onClick={() => scrollTo("home")} className="flex items-center">
          <img src={logo} alt="Kodanda Media Logo" className="h-8 sm:h-9 w-auto max-w-[140px] sm:max-w-none" />
        </button>

        <ul className="hidden md:flex items-center gap-8 font-medium">
          {links.map((l) => (
            <li key={l.label}>
              <button
                onClick={() => scrollTo(l.id)}
                className="relative text-gray-300 hover:text-[#C91111] transition-colors duration-200 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#C91111] after:rounded-full after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => scrollTo("contact")}
          className="hidden md:inline-block bg-[#C91111] text-white px-5 py-2.5 rounded-full font-semibold hover:bg-[#a50e0e] transition"
        >
          Let's Collab
        </button>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-white border-t border-gray-200">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => { scrollTo(l.id); setOpen(false); }}
              className="text-gray-600 font-medium hover:text-[#C91111] transition-colors duration-200 text-left"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => { scrollTo("contact"); setOpen(false); }}
            className="bg-[#C91111] text-white px-5 py-2.5 rounded-full font-semibold text-center hover:bg-[#a50e0e] transition"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
