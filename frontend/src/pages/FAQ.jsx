import { useState } from "react";
import { FiPlus, FiMinus, FiMessageCircle } from "react-icons/fi";

const faqs = [
  {
    q: "What services does Kodanda Media offer?",
    a: "We offer a full suite of digital services including Social Media Strategy, Video Production, Brand Identity, Performance Marketing, Web & Digital experiences, and Growth Hacking.",
  },
  {
    q: "How long does a typical project take?",
    a: "Project timelines vary based on scope. A brand identity project typically takes 3–4 weeks, while a full web build can take 6–10 weeks. We'll give you a clear timeline during our initial consultation.",
  },
  {
    q: "Do you work with startups or only established brands?",
    a: "We work with both. Whether you're launching a new venture or scaling an established brand, we tailor our approach to fit your stage and goals.",
  },
  {
    q: "How do we get started?",
    a: "Simply reach out via our Contact page or click 'Get Started' in the navbar. We'll schedule a discovery call to understand your needs and propose the best path forward.",
  },
  {
    q: "What industries do you specialize in?",
    a: "We have experience across media, entertainment, e-commerce, tech, and lifestyle brands. Our strategies are adaptable to any industry.",
  },
  {
    q: "Do you offer ongoing retainer packages?",
    a: "Yes. Many of our clients work with us on a monthly retainer basis for continuous social media management, content creation, and performance marketing.",
  },
  {
    q: "Can you handle both creative and paid media?",
    a: "Absolutely. We're a full-service agency — our creative and performance teams work together to ensure your campaigns are both compelling and conversion-focused.",
  },
];

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div
      className={`rounded-2xl border transition-all duration-200 ${
        isOpen
          ? "border-[#f07060]/30 bg-white shadow-md"
          : "border-purple-100 bg-white/70 hover:border-purple-200"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
      >
        <span className={`font-semibold text-sm sm:text-base ${isOpen ? "text-gray-900" : "text-gray-700"}`}>
          {faq.q}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
            isOpen ? "bg-[#f07060] text-white" : "bg-purple-100 text-[#f07060]"
          }`}
        >
          {isOpen ? <FiMinus size={14} /> : <FiPlus size={14} />}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-purple-50 pt-3">
          {faq.a}
        </p>
      </div>
    </div>
  );
}

const left = faqs.filter((_, i) => i % 2 === 0);
const right = faqs.filter((_, i) => i % 2 !== 0);

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="min-h-screen bg-gradient-to-b from-[#f5eeff] to-[#fdf6ff] py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-[#f07060] text-sm tracking-widest uppercase mb-3">Got Questions?</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            Frequently Asked <span className="bg-gradient-to-r from-[#E63B57] via-[#FF5E6E] to-[#FF8B83] bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
            Everything you need to know about working with Kodanda Media. Can't find an answer?{" "}
            <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="text-[#f07060] font-medium hover:underline">
              Reach out to us.
            </button>
          </p>
        </div>

        {/* Two-column accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 items-start">
          <div className="flex flex-col gap-3">
            {left.map((faq) => {
              const i = faqs.indexOf(faq);
              return (
                <FAQItem
                  key={i}
                  faq={faq}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              );
            })}
          </div>
          <div className="flex flex-col gap-3">
            {right.map((faq) => {
              const i = faqs.indexOf(faq);
              return (
                <FAQItem
                  key={i}
                  faq={faq}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center bg-white rounded-2xl shadow-sm border border-purple-50 px-8 py-10">
          <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-[#f07060] text-xl mx-auto mb-4">
            <FiMessageCircle />
          </div>
          <p className="text-gray-900 font-bold text-xl mb-2">Still have questions?</p>
          <p className="text-gray-500 text-sm mb-6">
            Our team is happy to walk you through anything you need.
          </p>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-700 transition"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
