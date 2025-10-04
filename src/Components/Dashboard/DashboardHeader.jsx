import React, { useContext, useEffect, useRef, useState } from "react";
import { easeInOut, motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLongRightIcon,
  MoonIcon,
  SunIcon,
  PhotoIcon,
  ArrowLeftStartOnRectangleIcon,
  CircleStackIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";

import { ThemeContext } from "../../Contexts/theme";
import { supabase } from "../../service/SupabaseClient";

export default function DashboardHeader() {
  const { theme, setTheme, headerHeight, setHeaderHeight, homeHeaderRef } =
    useContext(ThemeContext);
  const navOption = ["txt2img"];
  const navigate = useNavigate();

  const [modelType, setModelType] = useState("text2img");

  useEffect(() => {
    const heightheader =
      window.innerHeight - homeHeaderRef.current.offsetHeight;

    setHeaderHeight(`h-[${heightheader}px]`);
  }, []);

  //////////////////// theme //////////////////////////////////
  const { ref } = useContext(ThemeContext);
  const { toggleDarkMode } = useContext(ThemeContext);

  ////////////////////////////////////////////////////////////

  function navShow() {
    return navOption.map((curr) => {
      return (
        <a
          key={curr}
          className={` ${
            modelType == "text2img"
              ? "dark:bg-buttonBg-dark bg-buttonBg-light "
              : ""
          } px-3 py-3 flex items-center cursor-pointer`}
        >
          {curr}
        </a>
      );
    });
  }

  function navbar() {
    return (
      <>
        <div className="flex items  max-h-full ">{navShow()}</div>

        <div className="flex items-center text-xl font-semibold">
          Pixel Pulze
        </div>

        <div className="mx-2 flex gap-2 items-center ">
          {/* <div className="py-1 rounded-xl px-2 flex items-center border-1  bg-green-400/80 hover:bg-green-600">
            <CircleStackIcon className="size-6   z-10  " />
            <div className="text-xs px-2">Token: 32</div>
            <PlusCircleIcon className="size-6 cursor-pointer hover:rotate-180 transition-all duration-150 ease-in-out text-green-800 z-10  " />
          </div>
          <div className="group relative py-2 px-4 cursor-pointer  rounded-md">
            <PhotoIcon className="size-6 relative z-10" />
            <span className="absolute inset-0 scale-0 opacity-20 dark:bg-buttonBg-dark bg-buttonBg-light rounded-lg transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-100 origin-center"></span>
          </div> */}

          <div
            onClick={() => {
              // setTheme(!theme);
              toggleDarkMode();
            }}
            className="group relative py-2 px-4 cursor-pointer  rounded-md"
          >
            {theme && <MoonIcon ref={ref} className="size-6 relative z-10" />}
            {!theme && <SunIcon ref={ref} className="size-6 relative z-10" />}
            <span className="absolute inset-0 scale-0 opacity-20 dark:bg-buttonBg-dark bg-buttonBg-light rounded-lg transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-100 origin-center"></span>
          </div>
          <div
            onClick={async () => {
              const { error } = await supabase.auth.signOut();
              if (error) {
                console.error("Error signing out:", error);
              } else {
                console.log("User signed out");
                navigate("/signin");
              }
            }}
            className="py-2 px-4"
          >
            <ArrowLeftStartOnRectangleIcon className="size-6   z-10 text-red-400 hover:text-red-500  cursor-pointer rotate-180 transition-all duration-300 ease-out" />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <motion.header
        ref={homeHeaderRef}
        className="dark:shadow-sm/90 shadow-md/25 shadow-gray-500  flex  justify-between dark:bg-gray dark:text-white bg-white text-gray "
      >
        {navbar()}
      </motion.header>
    </>
  );
}
