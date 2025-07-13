import { useAnimate, motion } from "motion/react";
import { div } from "motion/react-client";
import React, { useEffect, useRef, useState } from "react";

function Carousel() {
  const [scope, animate] = useAnimate();
  const [isPaused, setIsPaused] = useState(false);
  const animationTargetX = useRef(0);
  function carouselAnimate() {
    animate(
      scope.current,
      {
        x: animationTargetX.current,
      },
      {
        repeat: Infinity,
        ease: "linear",
        duration: 60,
      }
    );
  }

  useEffect(() => {
    const measureContentWidth = () => {
      if (scope.current) {
        const totalCarouselWidth = scope.current.scrollWidth;

        animationTargetX.current = -(totalCarouselWidth / 2);

        carouselAnimate();
      }
    };

    const timer = setTimeout(measureContentWidth, 100);

    return () => clearTimeout(timer);
  }, []);

  const images = [
    `/Image/Image-01.webp`,
    `/Image/Image-02.webp`,
    `/Image/Image-03.webp`,
    `/Image/Image-04.webp`,
    `/Image/Image-05.webp`,
    `/Image/Image-06.webp`,
    `/Image/Image-07.webp`,
    `/Image/Image-08.webp`,
    `/Image/Image-09.webp`,
    `/Image/Image-10.webp`,
    `/Image/Image-01.webp`,
    `/Image/Image-02.webp`,
    `/Image/Image-03.webp`,
    `/Image/Image-04.webp`,
    `/Image/Image-05.webp`,
    `/Image/Image-06.webp`,
    `/Image/Image-07.webp`,
    `/Image/Image-08.webp`,
    `/Image/Image-09.webp`,
    `/Image/Image-10.webp`,
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      whileInView={{
        opacity: 1,
        x: 0
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      className=" overflow-hidden relative  h-fit py-4 "
    >
      <div className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-pale-white dark:from-black to-transparent z-10 w-36 sm:w-xs md:w-md   pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 bg-gradient-to-l from-pale-white dark:from-black to-transparent z-10 w-36 sm:w-xs md:w-md pointer-events-none" />
      <motion.div className="flex shrink-0 justify-start gap-6 " ref={scope}>
        {images.map((curr, index) => {
          return (
            <img
              key={curr + index}
              className="w-xs md:w-sm rounded-2xl "
              src={curr}
              alt=""
            />
          );
        })}
      </motion.div>
    </motion.div>
  );
}

export default Carousel;
