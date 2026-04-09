import { useState, useEffect, useRef } from "react";
import DecryptedText from "../animations/DecryptedText ";
import { FaInstagram, FaWhatsapp, FaPinterest} from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import { CiFacebook, CiLinkedin, CiYoutube } from "react-icons/ci";
import { AiOutlinePinterest } from "react-icons/ai";

export default function Dashboard() {
  const [decryptKey, setDecryptKey] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => setDecryptKey((k) => k + 1), 8000);
    return () => clearInterval(id);
  }, []);

  // Track mouse for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: (e.clientX - rect.left - rect.width / 2) / rect.width,
          y: (e.clientY - rect.top - rect.height / 2) / rect.height,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-gradient-to-br from-white via-gray-50 to-white h-[100vh] w-full flex flex-col items-center justify-center text-center px-6 relative overflow-hidden"
    >
      {/* Enhanced animations and keyframes */}
      <style>{`
        @font-face {
          font-family: 'Gadugi';
          src: url('/src/Fonts/gadugib.ttf') format('truetype');
          font-weight: 700;
          font-style: normal;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes floatReverse {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-5deg); }
        }
        @keyframes pulse3d {
          0%, 100% { transform: scale(1) rotateX(0deg) rotateY(0deg); }
          50% { transform: scale(1.1) rotateX(10deg) rotateY(10deg); }
        }
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(120px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
        }
        @keyframes orbitReverse {
          0% { transform: rotate(360deg) translateX(80px) rotate(-360deg); }
          100% { transform: rotate(0deg) translateX(80px) rotate(0deg); }
        }
        @keyframes morphBlob {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          50% { border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%; }
          75% { border-radius: 60% 40% 60% 30% / 70% 30% 50% 60%; }
        }
        @keyframes scaleUp {
          0% { transform: scale(0.1) rotateX(30deg); opacity: 0; }
          100% { transform: scale(1) rotateX(0deg); opacity: 1; }
        }
        @keyframes slideInLeft {
          0% { transform: translateX(-100px) rotateY(45deg); opacity: 0; }
          100% { transform: translateX(0) rotateY(0deg); opacity: 1; }
        }
        @keyframes slideInRight {
          0% { transform: translateX(100px) rotateY(-45deg); opacity: 0; }
          100% { transform: translateX(0) rotateY(0deg); opacity: 1; }
        }
        @keyframes ripple {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        @keyframes drawLine {
          0% { stroke-dashoffset: 1000; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes rotate3d {
          0% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
          100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }
        }
        @keyframes bounce3d {
          0%, 100% { transform: translateY(0) rotateX(0deg) scale(1); }
          50% { transform: translateY(-30px) rotateX(180deg) scale(1.1); }
        }
        
        .headline-scale { 
          animation: scaleUp 1.5s cubic-bezier(0.22,1,0.36,1) 0.3s forwards; 
          opacity: 0;
          transform-style: preserve-3d;
        }
        .btn-left { animation: slideInLeft 1s cubic-bezier(0.22,1,0.36,1) 0.8s forwards; opacity: 0; }
        .btn-right { animation: slideInRight 1s cubic-bezier(0.22,1,0.36,1) 0.9s forwards; opacity: 0; }
        
        .morph-blob {
          animation: morphBlob 8s ease-in-out infinite;
        }
        
        .floating-shape {
          animation: float 6s ease-in-out infinite;
        }
        .floating-shape-reverse {
          animation: floatReverse 7s ease-in-out infinite;
        }
        
        .orbit-element {
          animation: orbit 20s linear infinite;
        }
        .orbit-element-reverse {
          animation: orbitReverse 15s linear infinite;
        }
        
        .sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #C91111, #ff4444, #C91111, #7f1d1d);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 4s ease infinite;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .perspective-container {
          perspective: 1000px;
          transform-style: preserve-3d;
        }
      `}</style>

      {/* Animated gradient background orbs */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full morph-blob opacity-20 blur-3xl"
        style={{
          background:
            "linear-gradient(135deg, #C91111 0%, #ff6b6b 50%, #ffa5a5 100%)",
          top: "10%",
          left: "10%",
          transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)`,
          transition: "transform 0.3s ease-out",
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full morph-blob opacity-15 blur-3xl"
        style={{
          background:
            "linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 50%, #2a2a2a 100%)",
          bottom: "10%",
          right: "10%",
          transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)`,
          transition: "transform 0.3s ease-out",
          animationDelay: "-4s",
        }}
      />

      {/* 3D Floating geometric shapes — hidden on mobile */}
      {/* Floating Social Media Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden sm:block">
        {[
          { Icon: FaInstagram, top: "15%", left: "8%" },
          { Icon: FaWhatsapp, top: "50%", left: "10%" },
          { Icon: FiTwitter, top: "20%", right: "12%" },
          { Icon: CiFacebook, top: "50%", right: "8%" },
          { Icon: CiYoutube , bottom: "20%", right: "15%" },
          { Icon: AiOutlinePinterest, bottom: "25%", left: "20%" },
          { Icon: CiLinkedin , top: "10%", left: "30%" },
          { Icon: FaThreads , bottom: "35%", right: "25%" },

        ].map((item, i) => {
          const Icon = item.Icon;
          return (
            <div
              key={i}
              className={`absolute social-float-${i}`}
              style={{
                top: item.top,
                left: item.left,
                right: item.right,
                bottom: item.bottom,
              }}
            >
              <Icon className="text-[#C91111] text-3xl lg:text-4xl opacity-80 drop-shadow-md" />
            </div>
          );
        })}
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center perspective-container px-4 w-full max-w-4xl mx-auto">
        <p className="text-xs sm:text-sm lg:text-lg tracking-[0.15em] sm:tracking-[0.2em] uppercase text-gray-500 mb-3 sm:mb-6 text-center">
          Kodanda Media and
          <DecryptedText
            key={decryptKey}
            text=" Entertainment"
            animateOn="view"
            revealDirection="start"
            sequential
            speed={150}
            maxIterations={20}
            characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ!?#@"
            useOriginalCharsOnly={false}
          />
        </p>

        {/* <h1 className="headline-scale text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight max-w-5xl">
          <span className="text-[#C91111]">Building </span>high-impact
          <br />
          digital media <span className="text-[#C91111]">brands</span>
        </h1> */}
        <h1 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 900,
                fontSize: "clamp(2.2rem, 5.5vw, 4rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                color: "#0f0f0f",
                margin: "0 0 16px",
              }}>
                <span className="text-[#c91111]">Building </span>high-impact
                digital media{" "}
                <span style={{ color: "#C91111", position: "relative", display: "inline-block" }}>
                  brands
                  {/* Animated underline */}
                  <svg viewBox="0 0 240 14" style={{
                    position: "absolute", bottom: -6, left: 0, width: "100%", overflow: "visible"
                  }}>
                    <path d="M 3 10 Q 120 3 237 10"
                      stroke="#C91111" strokeWidth="3" fill="none"
                      strokeLinecap="round" strokeDasharray="300" strokeDashoffset="300"
                      style={{ animation: "shimmer-path 1.2s 0.3s ease forwards" }}
                    />
                  </svg>
                </span>
              </h1>

        {/* <h1
          className="headline-scale text-3xl sm:text-5xl lg:text-7xl font-medium text-gray-900 leading-tight text-center"
          style={{ fontFamily: "'Gadugi', sans-serif" }}
        >
          We Build{" "}
          <span className="gradient-text font-extrabold">
            Digital Legacies{" "}
          </span>
          <br className="hidden sm:block" /> that{" "}
          <span className="gradient-text font-extrabold">Captivate </span>
          Millions
        </h1> */}
        {/* ── Bottom-center arc decoration ── */}
        <svg
          width="320"
          height="90"
          viewBox="0 0 320 80"
          style={{
            position: "absolute",
            bottom: 40,
            left: "50%",
            transform: "translateX(-50%)",
            opacity: 0.35,
            pointerEvents: "none",
          }}
          aria-hidden="true"
        >
          <path
            d="M 10 70 Q 160 10 310 70"
            stroke="#C91111"
            strokeWidth="2"
            fill="none"
            strokeDasharray="6 4"
            strokeLinecap="round"
          />
          <path
            d="M 40 70 Q 160 25 280 70"
            stroke="#C91111"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4 6"
            strokeLinecap="round"
          />
        </svg>

        <p
          className="mt-5 sm:mt-8 text-gray-500 text-sm sm:text-base lg:text-lg max-w-xl text-center px-2"
          style={{
            animation: "scaleUp 1.2s cubic-bezier(0.22,1,0.36,1) 0.5s forwards",
            opacity: 0,
          }}
        >
          From high-impact podcasts to life-changing educational content,
          Kodanda Media powers a diverse network of channels designed to inform,
          inspire, and entertain a global audience.
        </p>

        <div className="mt-7 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto items-center">
          <button
            onClick={() =>
              document
                .getElementById("chennals")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-left relative bg-gradient-to-r from-[#C91111] to-[#a50e0e] text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#C91111]/30 group overflow-hidden w-full sm:w-auto text-sm sm:text-base"
          >
            <span className="relative z-10">Explore Our Channels</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff4444] to-[#C91111] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-right relative border-2 border-[#C91111] text-[#C91111] px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:bg-[#C91111] hover:text-white w-full sm:w-auto text-sm sm:text-base"
          >
            <span className="relative z-10">Build Viral Content Together</span>
          </button>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        <svg
          viewBox="0 0 1440 120"
          className="absolute bottom-0 w-full"
          style={{ animation: "float 8s ease-in-out infinite" }}
        >
          <path
            d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,90 1440,60 L1440,120 L0,120 Z"
            fill="url(#waveGrad)"
            opacity="0.1"
          />
          <defs>
            <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C91111" />
              <stop offset="50%" stopColor="#ff6b6b" />
              <stop offset="100%" stopColor="#C91111" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
