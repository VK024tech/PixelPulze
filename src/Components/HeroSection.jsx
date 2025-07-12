import { div } from "motion/react-client";
import React, { useContext } from "react";
import { ThemeContext } from "../Contexts/theme";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { easeInOut, motion } from "motion/react";

function HeroSection() {
  const { windowWidth } = useContext(ThemeContext);

  return (
    <div>
      <div className={` ${windowWidth < 800 ? "h-0" : "h-20"}`}></div>
      <div className="p-24 text-gray dark:text-white">
        <div className="text-center  mx-auto max-w-4xl">
          <div className=" text-7xl leading-tight font-semibold">
            AFFORDABLE AI ART AT <br />{" "}
            <span className="font-serif font-extralight">YOUR FINGERTIPS</span>
          </div>
          <div className="mt-8 p-2 max-w-md mx-auto text-lg">
            Create breathtaking images for just $0.012/Image or Rs.1/Image with
            ease. Skip subscriptions, pay just for the images you create.
            {/* Recharge easily and create limitless visuals with PixelPulze. */}
            {/* <br /> */}
          </div>
          <div className="flex justify-center gap-4 mt-10">
            <motion.div
              whileHover={{
                translateY: "-10px",
              }}
              transition={{
                duration: 0.15,
              }}
              className="p-4 border-2 w-fit h-fit rounded-2xl flex items-center justify-around gap-2 cursor-pointer"
            >
              <PlayCircleIcon className="size-4.5 " />
              Watch Demo
            </motion.div>
            <motion.div
              whileHover={{
                translateY: "-10px",
              }}
              transition={{
                duration: 0.15,
              }}
              className=" p-4 border-2 w-fit h-fit rounded-2xl flex items-center justify-around gap-2 cursor-pointer dark:bg-white bg-gray dark:text-gray text-white"
            >
              Sign Up
              <ArrowLongRightIcon className=" size-4.5 " />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
