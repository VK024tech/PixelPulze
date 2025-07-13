import React, { useContext, useEffect, useRef, useState } from "react";
import { easeInOut, motion } from "motion/react";
import {
  ArrowLongRightIcon,
  MoonIcon,
  SunIcon,
  Bars3Icon,
  XMarkIcon
} from "@heroicons/react/24/outline";
import { div } from "motion/react-client";
import { flushSync } from "react-dom";
import { ThemeContext } from "../Contexts/theme";

export default function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  const navOption = ["Home", "Support", "Pricing"];
  const { windowWidth } = useContext(ThemeContext);
  const [burgerMenu, setBurgerMenu] = useState(false);

  //////////////////// theme //////////////////////////////////
  const { ref } = useContext(ThemeContext);
  const { toggleDarkMode } = useContext(ThemeContext);

  ////////////////////////////////////////////////////////////

  function navShow() {
    return navOption.map((curr) => {
      return (
        <a
          key={curr}
          className={`${
            windowWidth < 800 ? "w-fit mx-auto " : ""
          } group  relative py-2 px-4 cursor-pointer  rounded-md `}
          href={`#${curr}`}
        >
          <span className="relative z-10">{curr}</span>
          <span className="absolute  inset-0 scale-0 opacity-20 dark:bg-buttonBg-dark bg-buttonBg-light rounded-lg transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-100 origin-center"></span>
        </a>
      );
    });
  }

  function smallScreenNavbar() {
    return (
      <div className=" dark:bg-gray  shadow-xs/90 shadow-gray-500   flex flex-col gap-4 p-4 dark:text-white bg-white text-gray">
        <div className="flex flex-col  gap-4">{navShow()}</div>
        <div className="mx-4 flex flex-col gap-4 items-center">
          <div
            onClick={() => {
              //   setTheme(!theme);
              toggleDarkMode();
            }}
            className="group relative py-2 px-4 cursor-pointer  rounded-md"
          >
            {theme && <MoonIcon ref={ref} className="size-6 relative z-10" />}
            {!theme && <SunIcon ref={ref} className="size-6 relative z-10" />}
            <span className="absolute inset-0 scale-0 opacity-20 dark:bg-buttonBg-dark bg-buttonBg-light rounded-lg transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-100 origin-center"></span>
          </div>

          <motion.a
            whileHover={{
              translateX: 10,
            }}
            transition={{
              duration: "0.2",
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
          className="cursor-pointer px-2"
          onClick={() => {
            setBurgerMenu(!burgerMenu);
          }}
        >
          {burgerMenu ? (
            <XMarkIcon className="size-6 my-4.5 " />
          ) : (
            <Bars3Icon className="size-6 my-4.5 " />
          )}
        </div>
      );
    } else {
      return (
        <>
          <div className="flex gap-4">{navShow()}</div>
          <div className="mx-4 flex gap-4 items-center min-w-57">
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
      <motion.header
        initial={{opacity:0,
          y: -50
        }}
        whileInView={{
          opacity:1,
          y: 0
        }}
        viewport={{
          once: true
        }}
        transition={{
          duration: 0.5,
          ease: 'backInOut'
        }}

        className={`${
          windowWidth < 800
            ? "z-100 sticky"
            : "fixed right-[50%] top-4 translate-x-[50%] rounded-md z-100"
        }   dark:shadow-sm/90 shadow-md/25 shadow-gray-500  items-center   flex gap-12 justify-between px-2 md:px-8 dark:bg-gray dark:text-white bg-white text-gray`}
      >
        <div className="p-1 mx-4">
          <a>PixelPulze</a>
        </div>
        {navbar()}
      </motion.header>
      <motion.div
        animate={
          burgerMenu
            ? {
                translateY: "0px",
              }
            : {
                translateY: "-500px",
              }
        }
        transition={{
          duration: "0.3",
          ease: "linear",
        }}
        className="z-10"
      >
        {burgerMenu && smallScreenNavbar()}
      </motion.div>
    </>
  );
}
