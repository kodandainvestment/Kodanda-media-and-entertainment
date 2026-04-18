import { useState } from "react";
import logo from "../assets/Transparent-logo.png";
import { FaArrowRight } from "react-icons/fa";

const links = [
  { label: "Home", id: "home" },
  { label: "About Us", id: "about" },
  { label: "Channels", id: "chennals" },
  { label: "Case Studies", id: "case-studies" },
  { label: "Contact Us", id: "contact" },
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center"
        >
          <img
            src={logo}
            alt="Logo"
            className="h-8 sm:h-10 w-auto"
          />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-10 font-medium">
          {links.map((l) => (
            <li key={l.label}>
              <button
                onClick={() => scrollTo(l.id)}
                className="text-gray-300 hover:text-[#C91111] transition relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#C91111] after:transition-all hover:after:w-full"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <button
          onClick={() => scrollTo("contact")}
          className="hidden md:flex items-center gap-2 bg-[#C91111] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#a50e0e] transition"
        >
          Let’s Collab <FaArrowRight size={14} />
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-5 flex flex-col gap-4">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => {
                scrollTo(l.id);
                setOpen(false);
              }}
              className="text-gray-300 hover:text-[#C91111] text-left font-medium transition"
            >
              {l.label}
            </button>
          ))}

          <button
            onClick={() => {
              scrollTo("contact");
              setOpen(false);
            }}
            className="mt-2 bg-[#C91111] text-white px-5 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-[#a50e0e] transition"
          >
            Let’s Collab <FaArrowRight size={14} />
          </button>
        </div>
      )}
    </nav>
  );
}