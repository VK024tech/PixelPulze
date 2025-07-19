import React from "react";

function Support() {
  return (
    <div
      id="Support"
      className="text-gray dark:text-white flex flex-col justify-center items-center gap-8 w-full"
    >
      <div className="text-3xl sm:text-5xl font-medium text-center">
        Need Support ?
      </div>
      <div className="border-1 w-fit flex flex-col p-4 sm:p-6 md:p-8 items-center rounded-2xl">
        <div className=" text-2xl sm:text-3xl ">Contact us here</div>
        <a
          className="text-xs sm:text-sm mt-4 text-blue-400 font-medium"
          href="mailto:vinkofficialpromo@gmail.com"
        >
          vinkofficialpromo@gmail.com
        </a>
      </div>
    </div>
  );
}

export default Support;
