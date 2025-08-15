import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

function PromptImage() {
  return (
    <div className=" dark:text-white flex flex-col items-center  text-gray mx-auto mt-auto mb-8 h-fit ">
      {/* <div className="mb-6">
        <div className="h-100 w-200 rounded-md bg-amber-50 animate-pulse"></div>
      </div> */}
      <div className="dark:bg-gray bg-white rounded-2xl flex flex-col pb-3 relative">
        <textarea
          className=" outline-none  px-3 py-3 resize-none w-xl h-20  [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 overflow-y-auto "
          type="text"
        />
        <div className="dark:bg-gray-600 w-fit ml-auto mr-4 p-1 rounded-full absolute bottom-2 right-1 cursor-pointer">
          <ArrowRightIcon className="size-6   z-10    " />
        </div>
      </div>
    </div>
  );
}

export default PromptImage;
