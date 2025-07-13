import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

function Pricing() {
  return (
    <div className=" text-gray dark:text-white my-5 p-6 w-full flex flex-col gap-2 justify-center items-center">
      <div className="text-5xl font-medium ">The only Tool you need</div>
      <div className="flex justify-around w-full">
        <div className="flex flex-col w-fit justify-center items-center mt-10 border-2 p-8 rounded-md border-gray-400/55 shadow-md shadow-gray/10">
          <div className="text-3xl  font-semibold text-gray dark:text-white">
            Mid Journey
          </div>

          {/* <div className="mt-3 text-center">Unlimited images, No Subscription needed</div> */}
          <ul className="mt-4 flex flex-col gap-3">
            <li className="flex gap-2">
              <CheckCircleIcon className="size-6" /> $10/month <br/>(~200 images,
              ~$0.05/image)
            </li>
            {/* <li className="flex gap-2">
              <CheckCircleIcon className="size-6" /> Unlimited (pay-per-use)
            </li> */}
            <li className="flex gap-2">
              <CheckCircleIcon className="size-6" /> Up to 4 Images per prompt
            </li>
            <li className="flex gap-2">
              <CheckCircleIcon className="size-6" />
              Subscription based service <br />
              (upto 200 images/month)
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-fit justify-center items-center mt-10 border-2 p-8 rounded-md border-gray-400/55 shadow-xl shadow-gray/10">
          <div className="text-3xl  font-semibold text-gray dark:text-white">
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
              <CheckCircleIcon className="size-6" /> $0.012/Image (~Rs. 1)
            </li>
            <li className="flex gap-2">
              <CheckCircleIcon className="size-6" /> Unlimited (pay-per-use)
            </li>
            <li className="flex gap-2">
              <CheckCircleIcon className="size-6" /> Up to 4 Images per prompt
            </li>
            <li className="flex gap-2">
              <CheckCircleIcon className="size-6" />
              Token based service
              <br />
              ($0.012 or Rs.1 = 1 Token)
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-fit justify-center items-center mt-10 border-2 p-8 rounded-md border-gray-400/55 shadow-md shadow-gray/10">
          <div className="text-3xl  font-semibold text-gray dark:text-white">
            Dall-e 3
          </div>

          <ul className="mt-4 flex flex-col gap-3">
            <li className="flex gap-2">
              <CheckCircleIcon className="size-6" /> $20/month <br />
              (ChatGPT Plus, limited images)
            </li>
            {/* <li className="flex gap-2">
              <CheckCircleIcon className="size-6" /> Unlimited (pay-per-use)
            </li> */}
            <li className="flex gap-2">
              <CheckCircleIcon className="size-6" /> 1 image per Prompt
            </li>
            <li className="flex gap-2">
              <CheckCircleIcon className="size-6" />
              Subscription based service <br />
              (Limited images)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
