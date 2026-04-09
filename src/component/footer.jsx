import { useState } from "react";
import { FaInstagram, FaTwitter, FaLinkedinIn, FaFacebookF, FaYoutube } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import PrivacyPolicy from "../content/PrivacyPolicy";
import TermsCondition from "../content/Terms&Condition";

const services = [
  "Brand Strategy",
  "Video Production",
  "Brand Identity",
  "Performance Marketing",
  "Web & Digital",
  "Growth Hacking",
];

const company = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Why Choose", id: "why-us" },
  { label: "FAQ", id: "faq" },
  { label: "Contact", id: "contact" },
];

const socials = [
  { icon: <FaInstagram />, href: "#", label: "Instagram" },
  { icon: <FaTwitter />, href: "#", label: "Twitter" },
  { icon: <FaLinkedinIn />, href: "#", label: "LinkedIn" },
  { icon: <FaFacebookF />, href: "#", label: "Facebook" },
  { icon: <FaYoutube />, href: "#", label: "YouTube" },
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <>
      {showPrivacy && <PrivacyPolicy onClose={() => setShowPrivacy(false)} />}
      {showTerms && <TermsCondition onClose={() => setShowTerms(false)} />}

      <footer className="bg-black border-t border-white/10 text-gray-200">
        <div className="max-w-7xl mx-auto px-6 pt-14 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 border-b border-gray-700/60 pb-10">

            {/* Brand */}
            <div className="lg:col-span-2">
              <p className="text-2xl font-bold text-white mb-3">
                Kodanda{" "}
                <span className="text-[#C91111]">
                  Media
                </span>
              </p>
              <p className="text-sm text-gray-400 leading-relaxed mb-5 max-w-xs">
                Enterprise-grade digital marketing &amp; media solutions for ambitious brands.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <FiMail className="text-[#C91111] shrink-0" />
                  <span>CEO@kodandamedia.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <FiPhone className="text-[#C91111] shrink-0" />
                  <span>+91-9876543345</span>
                </li>
                <li className="flex items-center gap-2">
                  <FiMapPin className="text-[#C91111] shrink-0" />
                  <span>Unity One Mall, Indore</span>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <p className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</p>
              <ul className="space-y-2 text-sm">
                {services.map((s) => (
                  <li key={s}>
                    <button
                      onClick={() => scrollTo("services")}
                      className="hover:text-[#C91111] transition-colors text-left"
                    >
                      {s}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</p>
              <ul className="space-y-2 text-sm">
                {company.map((c) => (
                  <li key={c.label}>
                    <button
                      onClick={() => scrollTo(c.id)}
                      className="hover:text-[#C91111] transition-colors text-left"
                    >
                      {c.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Social */}
            <div>
              <p className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Legal</p>
              <ul className="space-y-2 text-sm mb-8">
                <li>
                  <button
                    onClick={() => setShowPrivacy(true)}
                    className="hover:text-[#C91111] transition-colors text-left"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setShowTerms(true)}
                    className="hover:text-[#C91111] transition-colors text-left"
                  >
                    Terms of Service
                  </button>
                </li>
              </ul>

              <p className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Follow Us</p>
              <div className="flex flex-wrap gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-[#C91111] hover:border-[#C91111] transition"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
            <p>© 2026 Kodanda Media and Entertainment. All rights reserved.</p>
            <div className="flex gap-4">
              <button onClick={() => setShowPrivacy(true)} className="hover:text-[#C91111] transition-colors">
                Privacy Policy
              </button>
              <button onClick={() => setShowTerms(true)} className="hover:text-[#C91111] transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
