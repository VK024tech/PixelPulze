import React from "react";
import Carousel from "./Components/Carousel";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import Pricing from "./Components/Pricing";
import Support from "./Components/Support";

function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Carousel />
      <Pricing />
      <Support />
      <Footer />
    </>
  );
}

export default Home;
