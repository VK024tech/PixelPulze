import React, { useContext, useState } from "react";
import {
  ArrowRightIcon,
  XCircleIcon,
  ArrowsPointingOutIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";
import { ThemeContext } from "../../Contexts/theme";
import { generateImage } from "../../api/replicate";
import { AnimatePresence, motion } from "motion/react";
import { set } from "zod";
import { div } from "motion/react-client";

function PromptImage() {
  const [apiCall, setApiCall] = useState(false);
  const [imageSrc, setImageSrc] = useState([]);
  const [fullScreenUrl, setFullScreenUrl] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);

  async function imageCreate() {
    try {
      const tempPrompt = prompt;
      setPrompt("");
      setApiCall(true);
      setImageLoaded(false);
      setImageSrc([]);
      const response = await generateImage(
        tempPrompt,
        aRatio,
        format,
        numImages,
        denoisingSteps,
        seed,
        outputQuality,
        disableSafetyChecker,
        goFast
      );
      setImageSrc(response.data);
      setApiCall(false);
    } catch (error) {
      console.error("Error generating image:", error);
      setApiCall(false);
      setImageSrc([]);
      alert("Failed to generate image. Please try again.");
    }
  }

  function downloadImage(imageSrc) {
    fetch(imageSrc)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `generated_image.${format}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      });
  }

  function fullscreen(imageSrc) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
        }}
        className="fixed  top-0 left-0 w-dvw h-dvh  flex justify-center items-center bg-black/50 z-50"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="relative "
        >
          <XCircleIcon
            title="Close"
            onClick={() => {
              setFullScreenUrl("");
            }}
            className="size-10  text-red-400 cursor-pointer hover:text-red-500 z-10   absolute right-4 top-2 "
          />
          <div className="group z-10 cursor-pointer absolute right-4 bottom-2 flex gap-2 items-center bg-gray-900/10 backdrop-blur-xs px-2 py-1 rounded-2xl">
            <span className="text-gray-100  hidden group-hover:inline">
              Download
            </span>

            <ArrowDownTrayIcon
              title="Download"
              onClick={() => {
                downloadImage(imageSrc);
              }}
              className="size-8  text-gray-200 group-hover:text-gray-100   "
            />
          </div>

          <img
            src={imageSrc}
            alt="Generated"
            className="max-h-[95dvh] w-full  rounded-xl object-contain"
          />
        </motion.div>
      </motion.div>
    );
  }

  function showImage() {
    if (imageSrc.length > 0) {
      let gridopt = "";

      if (imageSrc.length === 2) {
        gridopt = "grid-rows-1 grid-cols-2 max-w-5xl mx-auto";
      } else if (imageSrc.length === 3) {
        gridopt = "grid-rows-2 grid-cols-2  max-w-xl mx-auto";
      } else if (imageSrc.length === 4) {
        gridopt = "grid-rows-2 grid-cols-2 max-w-xl mx-auto";
      }

      return (
        <div className={`grid gap-4 w-full  ${gridopt}`}>
          {imageSrc.map((image, index) => {
            let imageGrid = "";
            let fixHeight = false;
            if (imageSrc.length === 3 && index === 2) {
              imageGrid = "col-span-2 ";
              fixHeight = true;
            }
            return (
              <div
                onClick={() => {
                  setFullScreenUrl(image.url);
                }}
                key={index}
                className={`relative w-full mx-auto cursor-pointer  ${
                  fixHeight ? "h-full" : " "
                }  ${imageGrid}`}
              >
                <img
                  src={image.url}
                  alt="Generated"
                  onLoad={() => setImageLoaded(true)}
                  className={`w-full  rounded-md object-cover ${
                    fixHeight ? "h-70" : " max-h-[70dvh]"
                  } `}
                  // style={{ aspectRatio: aRatio.replace(":", " / ") }}
                />
                <div className="group z-10 cursor-pointer absolute right-4 bottom-2 flex gap-2 items-center bg-gray-900/10 backdrop-blur-xs px-2 py-1 rounded-2xl">
                  <span className="text-gray-100  hidden group-hover:inline">
                    Download
                  </span>

                  <ArrowDownTrayIcon
                    title="Download"
                    onClick={(e) => {
                      e.stopPropagation();
                      downloadImage(imageSrc);
                    }}
                    className="size-6  text-gray-200 group-hover:text-gray-100   "
                  />
                </div>
              </div>
            );
          })}
        </div>
      );
    } else if (apiCall && !imageLoaded) {
      return (
        <div className="relative  mx-auto ">
          <div
            className="w-full mx-auto max-w-md rounded-md bg-amber-50 animate-pulse max-h-[70dvh]"
            style={{ aspectRatio: aRatio.replace(":", " / ") }}
          ></div>
        </div>
      );
    }
  }

  const {
    prompt,
    setPrompt,
    aRatio,
    setARatio,
    format,
    setFormat,
    numImages,
    setNumImages,
    denoisingSteps,
    setDenoisingSteps,
    seed,
    setSeed,
    outputQuality,
    setOutputQuality,
    disableSafetyChecker,
    setDisableSafetyChecker,
    goFast,
    setGoFast,
  } = useContext(ThemeContext);
  return (
    <div className=" dark:text-white flex flex-col items-center    text-gray mx-auto mt-16 mb-8 ">
      <div className="w-full my-auto   [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 ">
        {showImage()}
      </div>
      <div className="dark:bg-gray bg-white rounded-2xl flex flex-col pb-3 relative mt-auto">
        <textarea
          id="prompt"
          className=" outline-none  px-3 py-3 resize-none w-xl h-20  [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 overflow-y-auto "
          type="text"
          placeholder="Enter your prompt here..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          readOnly={apiCall}
        />
        <div
          onClick={() => {
            prompt && !apiCall ? imageCreate() : null;
          }}
          className="dark:bg-gray-600 w-fit ml-auto mr-4 p-1 rounded-full absolute bottom-2 right-1 cursor-pointer"
        >
          <ArrowRightIcon className="size-6   z-10    " />
        </div>
      </div>
      {fullScreenUrl && fullscreen(fullScreenUrl)}
    </div>
  );
}

export default PromptImage;
