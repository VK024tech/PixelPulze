import React, { useContext } from "react";
import { ThemeContext } from "../Contexts/theme";
import { easeInOut, motion } from "motion/react";
function DemoVideo() {
  const { demo, setDemo } = useContext(ThemeContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
        ease: "linear",
      }}
      onClick={() => {
        setDemo(false);
      }}
      className="max-w-screen w-full z-101   h-screen fixed bg-pale-white/10 backdrop-blur-xs"
    >
      <motion.div
        initial={{ opacity: 0.5, y: 150 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="relative left-[17%] top-[12%]"
      >
        <iframe
          className="rounded-2xl border-2 border-brand shadow-2xl shadow-brand/20 bg-pale-white dark:bg-black"
          width="1000"
          height="562"
          src="https://www.youtube.com/embed/csDriucITDE?si=Pct9P0D37mTUgcKF"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </motion.div>
    </motion.div>
  );
}

export default DemoVideo;
