import { div } from "motion/react-client";
import React, { useContext } from "react";
import { ThemeContext } from "../Contexts/theme";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { easeInOut, motion } from "motion/react";
import { Link } from "react-router-dom";
function HeroSection() {
  const { windowWidth } = useContext(ThemeContext);
  const { demo, setDemo } = useContext(ThemeContext);

  return (
    <div id="Home" className="">
      <div className={` ${windowWidth < 800 ? "h-0" : "h-20"}`}></div>

      <div className=" px-4 pt-14 py-12 pb-8 sm:px-8 sm:py-16 md:px-24 md:py-24  text-gray dark:text-white">
        <div className="text-center  mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 150, scaleY: 0.8 }}
            whileInView={{
              opacity: 1,
              y: 0,
              scaleY: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            className=" text-3xl sm:text-4xl md:text-7xl leading-tight font-semibold"
          >
            AFFORDABLE AI ART AT <br />{" "}
            <span className="font-serif font-extralight">YOUR FINGERTIPS</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 180, scaleY: 0.8 }}
            whileInView={{
              opacity: 1,
              y: 0,
              scaleY: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
              delay: 0.2,
            }}
            className="mt-3 sm:mt-6 md:mt-8 p-2 max-w-md mx-auto text-sm sm:text-xl md:text-lg"
          >
            Create breathtaking images for just $0.012/Image or Rs.1/Image with
            ease. Skip subscriptions, pay just for the images you create.
            {/* Recharge easily and create limitless visuals with PixelPulze. */}
            {/* <br /> */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 200, scaleY: 0.8 }}
            whileInView={{
              opacity: 1,
              y: 0,
              scaleY: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
              delay: 0.4,
            }}
            className="flex justify-center gap-4 mt-8 sm:mt-8 md:mt-10"
          >
            <motion.div
              onClick={() => {
                setDemo(true);
              }}
              whileHover={{
                translateY: "-10px",
              }}
              transition={{
                duration: 0.1,
              }}
              className=" py-2 px-4 md:p-4 border-2 w-fit h-fit rounded-2xl flex items-center justify-around gap-2 cursor-pointer"
            >
              <PlayCircleIcon className="size-4.5 " />
              Watch Demo
            </motion.div>
            <motion.button
              whileHover={{
                translateY: "-10px",
              }}
              transition={{
                duration: 0.1,
              }}
              className=" py-2 px-4 md:p-4  border-2 w-fit h-fit rounded-2xl flex items-center justify-around gap-2 cursor-pointer dark:bg-white bg-gray dark:text-gray text-white"
            >
              <Link to="/signup">Sign Up</Link>
              <ArrowLongRightIcon className=" size-4.5 " />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
