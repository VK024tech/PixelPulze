import React from "react";
import { CheckCircleIcon, HandThumbDownIcon } from "@heroicons/react/24/solid";

function Pricing() {
  return (
    <div
      id="Pricing"
      className=" text-gray dark:text-white my-5 p-6 w-full flex flex-col gap-2 justify-center items-center "
    >
      <div className="text-5xl font-medium text-center">
        The ultimate AI art
        Solution
      </div>
      <div className="flex justify-around w-full max-w-6xl">
        <div className="flex flex-col w-fit justify-center items-center mt-10 border-2 p-8 text-gray-600 dark:text-gray-300 rounded-md border-gray-400/55 shadow-md shadow-gray/10">
          <div className="text-3xl  font-semibold text-gray-600 dark:text-gray-300">
            Mid Journey
          </div>

          {/* <div className="mt-3 text-center">Unlimited images, No Subscription needed</div> */}
          <ul className="mt-4 flex flex-col gap-3">
            <li className="flex gap-2">
              <HandThumbDownIcon className="size-6 text-red-400 my-auto" />{" "}
              $10/month <br />
              (~200 images, ~$0.05/image)
            </li>
            {/* <li className="flex gap-2">
              <HandThumbDownIcon className="size-6" /> Unlimited (pay-per-use)
            </li> */}
            <li className="flex gap-2">
              <HandThumbDownIcon className="size-6  text-red-400 my-auto" /> Up
              to 4 Images per prompt
            </li>
            <li className="flex gap-2">
              <HandThumbDownIcon className="size-6  text-red-400 my-auto" />
              Subscription based service <br />
              (upto 200 images/month)
            </li>
          </ul>
        </div>
        <div className="animate-rotate-border bg-conic/[from_var(--border-angle)] from-pale-white   via-brand/70 from-40% via-80% to-100% to-pale-white  mt-10 rounded-md p-px">
          <div className="flex flex-col w-fit justify-center bg-pale-white dark:bg-black rounded-md items-center    p-8  shadow-xl shadow-gray/20">
            <div className="text-3xl  font-semibold  text-gray dark:text-white">
              Pixel Pulze
            </div>
            <div className="text-gray-800 mt-6 dark:text-gray-200">
              <span className="text-5xl font-semibold text-gray dark:text-white">
                $0.012
              </span>{" "}
              /Image
            </div>
            <div className="mt-3 text-center">
              Unlimited images, No Subscription needed
            </div>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="flex gap-2">
                <CheckCircleIcon className="size-6 text-green-400 dark:text-brand my-auto" />{" "}
                $0.012/Image (~Rs. 1)
              </li>
              <li className="flex gap-2">
                <CheckCircleIcon className="size-6 text-green-400 dark:text-brand my-auto" />{" "}
                Unlimited (pay-per-use)
              </li>
              <li className="flex gap-2">
                <CheckCircleIcon className="size-6 text-green-400 dark:text-brand my-auto" />{" "}
                Up to 4 Images per prompt
              </li>
              <li className="flex gap-2">
                <CheckCircleIcon className="size-6 text-green-400 dark:text-brand my-auto" />
                Token based service
                <br />
                ($0.012 or Rs.1 = 1 Token)
              </li>
            </ul>
            <div className="pt-4 text-gray-600 dark:text-gray-300">
              No hidden fees
            </div>
          </div>
        </div>
        <div className="flex flex-col w-fit justify-center items-center mt-10 border-2 p-8 rounded-md text-gray-600 dark:text-gray-300 border-gray-400/55 shadow-md shadow-gray/10">
          <div className="text-3xl  font-semibold text-gray-600 dark:text-gray-300">
            Dall-e 3
          </div>

          <ul className="mt-4 flex flex-col gap-3">
            <li className="flex gap-2">
              <HandThumbDownIcon className="size-6  text-red-400 my-auto" />{" "}
              $20/month <br />
              (ChatGPT Plus, limited images)
            </li>
            {/* <li className="flex gap-2">
              <CheckCircleIcon className="size-6  text-red-400" /> Unlimited (pay-per-use)
            </li> */}
            <li className="flex gap-2">
              <HandThumbDownIcon className="size-6  text-red-400 my-auto" /> 1
              image per Prompt
            </li>
            <li className="flex gap-2">
              <HandThumbDownIcon className="size-6 text-red-400 my-auto" />
              Subscription based service <br />
              (Limited images)
            </li>
          </ul>
        </div>
      </div>
      <div className="my-2 text-gray-400 dark:text-gray-500">
        Note: Prices are approximate and subject to change; verify current
        competitor pricing for accuracy.
      </div>
    </div>
  );
}

export default Pricing;
