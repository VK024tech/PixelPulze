import { div } from "motion/react-client";
import React, { useContext } from "react";
import { ThemeContext } from "../Contexts/theme";

function HeroSection() {
  const { windowWidth } = useContext(ThemeContext);

  return (
    <div>
      <div className={` ${windowWidth < 800 ? "h-0" : "h-20"}`}></div>
      <div className="text-white bg-amber-300  ">{windowWidth}</div>
    </div>
  );
}

export default HeroSection;
