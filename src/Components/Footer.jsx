import React from "react";

function Footer() {
  return (
    <div className="text-gray dark:text-white mt-16 mx-16">
      <div className=" flex justify-between items-center pb-8">
        <div className="text-5xl font-medium flex flex-col">
          Pixel <br /> Pulze
          <span className="text-sm font-normal pt-1 text-gray dark:text-gray-300">
            Affordable Ai Art
          </span>
        </div>

        <div className="flex flex-col gap-2 text-right text-sm">
          <a className="hover:underline" href="">
            Privacy Policy
          </a>
          <a className="hover:underline" href="">
            Terms And Condition
          </a>
        </div>
      </div>
      <hr className="text-gray-300 dark:text-gray-600" />
      <div className="text-xs text-center py-3 pt-8">
        © 2025 Pixel Pulze. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
