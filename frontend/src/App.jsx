import { useState } from "react";
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

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* {!loaded && <Loader onDone={() => setLoaded(true)} />}
      <div style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.6s ease" }}>*/}
        <Navbar />
        {/* <div className="pt-[72px]">  */}
                <div className="pt-[20px]"> 

          {/* <section id="home" style={{ height: "90vh", overflow: "hidden" }}>
            <Dashboard />
          </section> */}
          <section id="home"><Dashboard /> </section>
          <section id="about"><About /></section>
          <section id="chennals"><Chennals /></section>
          <section id="viral-content"><ViralContent /></section>
          <section id="case-studies"><CaseStudies /></section>
          <section id="growth-vision"><GrowthAndVision /></section>
          <section id="faq"><FAQ /></section>
          <section id="contact"><Contact /></section>
        </div>
        <Footer />
       {/* </div> */}
    </>
  );
}
