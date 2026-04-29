import Navbar from "./component/navbar";
import Footer from "./component/footer";
import Dashboard from "./pages/Home";
import Contact from "./pages/contact";
import FAQ from "./pages/FAQ";
import About from "./pages/about";
import Chennals from "./pages/Chennals";
import ViralContent from "./pages/ViralContent";
import CaseStudies from "./pages/CaseStudies";
import GrowthAndVision from "./pages/Growth&Vision";
import { Toaster } from "react-hot-toast"
import PrivacyPolicy from "./content/PrivacyPolicy";
import TermsCondition from "./content/Terms&Condition";
import { Routes, Route } from "react-router-dom";

// ✅ Home Layout (your full website)
function HomeLayout() {
  return (
    <>
      <Navbar />
      <div className="pt-[20px]">
        <section id="home"><Dashboard /></section>
        <section id="about"><About /></section>
        <section id="chennals"><Chennals /></section>
        <section id="viral-content"><ViralContent /></section>
        <section id="case-studies"><CaseStudies /></section>
        <section id="growth-vision"><GrowthAndVision /></section>
        <section id="faq"><FAQ /></section>
        <section id="contact"><Contact /></section>
      </div>
      <Footer />
    </>
  );
}

export default function App() {

  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={12}
        containerStyle={{
          top: 20,
          right: 20,
        }}
        toastOptions={{
          duration: 3000,
          style: {
            background: "#ffffff",
            color: "#111827",
            borderRadius: "12px",
            padding: "14px 16px",
            fontSize: "14px",
            fontWeight: "500",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            border: "1px solid #f1f1f1",
          },

          success: {
            iconTheme: {
              primary: "#16a34a",
              secondary: "#ffffff",
            },
            style: {
              border: "1px solid #bbf7d0",
            },
          },

          error: {
            iconTheme: {
              primary: "#dc2626",
              secondary: "#ffffff",
            },
            style: {
              border: "1px solid #fecaca",
            },
          },
        }}
      />
      <Routes>
        {/* ✅ Main website */}
        <Route path="/" element={<HomeLayout />} />

        {/* ✅ Separate pages (NO navbar/footer) */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-condition" element={<TermsCondition />} />
      </Routes>
    </>
  );
}
