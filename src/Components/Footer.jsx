import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="text-gray dark:text-white mt-16 mx-4 sm:mx-12 md:mx-16">
      <div className=" flex justify-between items-baseline-last  pb-2 sm:pb-4 md:pb-8">
        <div className="text-2xl sm:text-4xl md:text-5xl font-medium flex flex-col">
          Pixel <br /> Pulze
          <span className="text-xs sm:text-sm font-normal pt-1 text-gray dark:text-gray-300">
            Affordable Ai Art
          </span>
        </div>

        <div className="flex flex-col gap-2 text-right text-xs sm:text-sm">
          <Link className="hover:underline" to="/Privacy-Policy">
            Privacy Policy
          </Link>
          <Link className="hover:underline" to="/Terms-and-Conditions">
            Terms And Condition
          </Link>
        </div>
      </div>
      <hr className="text-gray-300 dark:text-gray-600" />
      <div className="text-xs text-center py-1 sm:py-2 md:py-3 pt-2 sm:pt-4 md:pt-8">
        © 2025 Pixel Pulze. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
