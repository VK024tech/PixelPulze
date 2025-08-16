import React, { useContext } from "react";
import Sidepanel from "./Sidepanel";
import DashboardHeader from "./DashboardHeader";
import PromptImage from "./promptImage";
import { ThemeContext } from "../../Contexts/theme";

function DashboarMain() {
  const { headerHeight } = useContext(ThemeContext);

  return (
    <div
      className={`text-gray dark:text-white dark:bg-black bg-pale-white w-full overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500`}
    >
      <div className={`fixed top-0 left-0 w-full z-10 ${headerHeight}`}>
        <DashboardHeader />
      </div>

      <div className={`flex h-dvh `}>
        <Sidepanel />
        <PromptImage />
      </div>
    </div>
  );
}

export default DashboarMain;
