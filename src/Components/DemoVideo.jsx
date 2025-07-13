import React, { useContext } from "react";
import { ThemeContext } from "../Contexts/theme";

function DemoVideo() {
  const { demo, setDemo } = useContext(ThemeContext);

  return (
    <div
      onClick={() => {
        setDemo(false);
      }}
      className="max-w-screen w-full z-101   h-screen fixed bg-pale-white/10 backdrop-blur-xs"
    >
      <div className="relative left-[17%] top-[12%]">
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
      </div>
    </div>
  );
}

export default DemoVideo;
