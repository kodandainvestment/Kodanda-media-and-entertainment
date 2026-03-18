import Navbar from "./component/navbar";
import Footer from "./component/footer";
import Dashboard from "./pages/dashboard";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import FAQ from "./pages/FAQ";
import About from "./pages/about";
import WhyUs from "./pages/whyUs";

export default function App() {
  return (
    <>
      <Navbar />
      <section id="home"><Dashboard /></section>
      <section id="about"><About /></section>
      <section id="services"><Services /></section>
      <section id="portfolio"><Portfolio /></section>
      <section id="why-us"><WhyUs /></section>
      <section id="faq"><FAQ /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </>
  );
}
