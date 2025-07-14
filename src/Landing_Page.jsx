import React, { useContext } from "react";
import Carousel from "./Components/Carousel";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import Pricing from "./Components/Pricing";
import Support from "./Components/Support";
import { ThemeContext } from "./Contexts/theme";
import DemoVideo from "./Components/DemoVideo";

function LandingPage() {
  const { demo, setDemo } = useContext(ThemeContext);
  return (
    <div
      className={`${demo ? "overflow-hidden h-screen" : "overflow-hidden"} `}
    >
      {demo ? <DemoVideo /> : ""}
      <Header />
      <HeroSection />
      <Carousel />
      <Pricing />
      <Support />
      <Footer />
    </div>
  );
}

export default LandingPage;
