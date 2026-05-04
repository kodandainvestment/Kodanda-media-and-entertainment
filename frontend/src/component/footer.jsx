import { useState } from "react";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import PrivacyPolicy from "../content/PrivacyPolicy";
import TermsCondition from "../content/Terms&Condition";
import { FaThreads } from "react-icons/fa6";
import { Link } from "react-router-dom";

const services = [
  {
    name: "Unfiltered Success",
    link: "https://www.instagram.com/unfilteredsuccess_?igsh=MWJhOHJ2eWw0ZGFjeA==",
  },
  {
    name: "Bollywood Inside",
    link: "https://www.instagram.com/bollywoodinside_",
  },
  {
    name: "sarcastic samachar",
    link: "https://www.instagram.com/sarcastic.samachar?igsh=MWg4OW1meWZwcWR5Yg==",
  },
];

const company = [
  { label: "Home", id: "home" },
  { label: "About Us", id: "about" },
  { label: "Channels", id: "chennals" },
  { label: "Case Studies", id: "case-studies" },
  { label: "Contact Us", id: "contact" },
];

const socials = [
  { icon: <FaInstagram />, href: "https://www.instagram.com/kodandamedia", label: "Instagram" },
  // { icon: <FaThreads />, href: "https://www.threads.com/@kodandamedia?hl=en", label: "Threads" },
  { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/company/kodanda-media-and-entertainment-pvt-ltd/?viewasmember=true", label: "LinkedIn" },
  { icon: <FaFacebookF />, href: "https://www.facebook.com/kodandamedia/", label: "Facebook" },
  { icon: <FaYoutube />, href: "https://www.youtube.com/@kodandamedia.official", label: "YouTube" },
  { icon: <FaWhatsapp />, href: "https://www.whatsapp.com/channel/0029VbCMxcf0gcfT3wYvJU0Y", label: "WhatsApp" },
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {

  return (
    <>
      <footer className="bg-black border-t border-white/10 text-gray-200">
        <div className="max-w-7xl mx-auto px-6 pt-14 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 border-b border-gray-700/60 pb-10">
            {/* Brand */}
            <div className="lg:col-span-2">
              <p className="text-2xl font-bold text-white mb-3">
                Kodanda <span className="text-[#C91111]">Media</span>
              </p>
              <p className="text-sm text-gray-400 leading-relaxed mb-5 max-w-xs">
                Enterprise grade digital marketing &amp; media solutions for
                ambitious brands.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <FiMail className="text-[#C91111] shrink-0" />
                  <span>info@kodandamedia.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <FiPhone className="text-[#C91111] shrink-0" />
                  <span>+91 80850 82069</span>
                </li>
                <li className="flex items-center gap-2">
                  <FiMapPin className="text-[#C91111] shrink-0" />
                  <span>Unity One Mall, Indore</span>
                </li>
              </ul>
            </div>

            {/* brands */}
            <div>
              <p className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                Channels
              </p>
              <ul className="space-y-2 text-sm">
                {services.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#C91111] transition-colors text-left"
                    >
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                Company
              </p>
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
              <p className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                Legal
              </p>
              <ul className="space-y-2 text-sm mb-8">
                <li>
                  <Link to="/privacy-policy" className="hover:text-[#C91111]">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-condition" className="hover:text-[#C91111]">
                    Terms & Condition
                  </Link>
                </li>
              </ul>

              <p className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
                Follow Us
              </p>
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
          <div className="pt-6 flex items-center justify-center text-xs text-gray-500 text-center">            <p>© 2026 Kodanda Media and Entertainment. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
