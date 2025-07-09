import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowLongRightIcon,
  MoonIcon,
  SunIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { div } from "motion/react-client";

export default function Header() {
  const [theme, setTheme] = useState(false);
  const navOption = ["Home", "Support", "Pricing"];
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [burgerMenu, setBurgerMenu] = useState(false);

  /////////////////////resize width//////////////////////////
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  /////////////////////////////////////////////////////////////

  function navShow() {
    return navOption.map((curr) => {
      return (
        <a
          key={curr}
          className={`${
            windowWidth < 800 ? "w-fit mx-auto " : ""
          } group  relative py-2 px-4 cursor-pointer  rounded-md`}
        >
          <span className="relative z-10">{curr}</span>
          <span className="absolute  inset-0 scale-0 opacity-20 bg-buttonBg rounded-lg transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-100 origin-center"></span>
        </a>
      );
    });
  }

  function smallScreenNavbar() {
    return (
      <div className=" dark:bg-gray  shadow-xs/90 shadow-gray-500   flex flex-col gap-4 p-4 dark:text-white bg-white text-gray">
        <div className="flex flex-col  gap-4">{navShow()}</div>
        <div className="mx-4 flex flex-col gap-4 items-center min-w-57">
          <div
            onClick={() => {
              setTheme(!theme);
            }}
            className="group relative py-2 px-4 cursor-pointer  rounded-md"
          >
            {theme && <MoonIcon className="size-6 relative z-10" />}
            {!theme && <SunIcon className="size-6 relative z-10" />}
            <span className="absolute inset-0 scale-0 opacity-20 bg-buttonBg rounded-lg transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-100 origin-center"></span>
          </div>

          <motion.a
            whileHover={{
              translateX: 10,
            }}
            transition={{
              duration: "0.5",
              ease: "backInOut",
            }}
            className="  group px-4 icon-enter flex gap-3  w-fit py-2.5 my-2 bg-gray text-white hover:text-brand ring-1 hover:ring-2 ring-brand hover:shadow-md/50 shadow-brand transition-all duration-300  rounded-2xl cursor-pointer"
          >
            Get Started
            <ArrowLongRightIcon className="size-6 " />
          </motion.a>
        </div>
      </div>
    );
  }

  function navbar() {
    if (windowWidth < 800) {
      return (
        <div
          className="cursor-pointer"
          onClick={() => {
            setBurgerMenu(!burgerMenu);
          }}
        >
          <Bars3Icon className="size-6 my-4.5 " />
        </div>
      );
    } else {
      return (
        <>
          <div className="flex gap-4">{navShow()}</div>
          <div className="mx-4 flex gap-4 items-center min-w-57">
            <div
              onClick={() => {
                setTheme(!theme);
              }}
              className="group relative py-2 px-4 cursor-pointer  rounded-md"
            >
              {theme && <MoonIcon className="size-6 relative z-10" />}
              {!theme && <SunIcon className="size-6 relative z-10" />}
              <span className="absolute inset-0 scale-0 opacity-20 bg-buttonBg rounded-lg transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-100 origin-center"></span>
            </div>

            <motion.a
              whileHover={{
                translateX: 10,
              }}
              transition={{
                duration: "0.5",
                ease: "backInOut",
              }}
              className=" group px-4 icon-enter flex gap-3  w-full py-2.5 my-2 bg-gray text-white hover:text-brand ring-1 hover:ring-2 ring-brand hover:shadow-md/50 shadow-brand transition-all duration-300  rounded-2xl cursor-pointer"
            >
              Get Started
              <ArrowLongRightIcon className="size-6 " />
            </motion.a>
          </div>
        </>
      );
    }
  }

  return (
    <>
      <header
        className={`${
          windowWidth < 800
            ? ""
            : "fixed right-[50%] top-4 translate-x-[50%] rounded-md "
        }  shadow-xs/90 shadow-gray-500  items-center  flex gap-12 justify-between  px-8 dark:bg-gray dark:text-white bg-white text-gray`}
      >
        <div className="p-1 mx-4">
          <a>PixelPulze</a>
        </div>
        {navbar()}
      </header>
      {burgerMenu && smallScreenNavbar()}
    </>
  );
}
