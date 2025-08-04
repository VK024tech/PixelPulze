import React from "react";
import Sidepanel from "./Sidepanel";
import DashboardHeader from "./DashboardHeader";
import PromptImage from "./promptImage";

function DashboarMain() {
  return (
    <div className="text-gray dark:text-white dark:bg-black bg-pale-white w-screen h-screen">
      <DashboardHeader />
      <div className="flex">
        <Sidepanel />
        <PromptImage />
      </div>
    </div>
  );
}

export default DashboarMain;
