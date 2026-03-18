import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

const info = [
  { icon: <FiMapPin />, label: "Visit Us", value: "Unity One Mall, Indore MP" },
  { icon: <FiMail />, label: "Email", value: "hello@kodandamedia.com" },
  { icon: <FiPhone />, label: "Call", value: "+91 98765 43210" },
];

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-gradient-to-b from-[#f5eeff] to-[#fdf6ff] px-6 py-20">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-[#f07060] text-sm tracking-widest uppercase mb-3">Get In Touch</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            Let's <span className="bg-gradient-to-r from-[#E63B57] via-[#FF5E6E] to-[#FF8B83] bg-clip-text text-transparent">Talk</span>
          </h2>
          <p className="mt-3 text-gray-500 text-base max-w-md mx-auto">
            Ready to elevate your brand? We'd love to hear about your project.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">

          {/* Left — Map + Cards */}
          <div className="flex-1 flex flex-col gap-4">

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-sm border border-purple-100">
              <iframe
                title="Unity One Mall Indore"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.847!2d75.8577!3d22.7196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd0b7e3b3b3b%3A0x0!2sUnity+One+Mall%2C+Rajiv+Gandhi+Square%2C+Indore%2C+Madhya+Pradesh!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="260"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* 3 Info Cards in a row */}
            <div className="grid grid-cols-3 gap-3">
              {info.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-2 bg-white rounded-2xl px-3 py-5 shadow-sm border border-purple-50 text-center"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-[#f07060] text-lg">
                    {item.icon}
                  </div>
                  <p className="text-gray-400 text-xs">{item.label}</p>
                  <p className="text-gray-900 font-semibold text-xs leading-snug">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="flex-1 w-full bg-white rounded-2xl shadow-sm p-8 flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#f07060]"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#f07060]"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#f07060]"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#f07060] resize-y"
            />
            <button className="w-full bg-gray-900 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-700 transition">
              Send Message <FiSend />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
