import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../Contexts/theme";
import { Checkbox, MenuItem, Select, Slider, TextField } from "@mui/material";

function Sidepanel() {
  const { headerHeight } = useContext(ThemeContext);
  const [aRatio, setARatio] = useState("1:1");
  const [format, setFormat] = useState("jpg");
  console.log(headerHeight);
  const ratioList = [
    "1:1",
    "16:9",
    "21:9",
    "3:2",
    "2:3",
    "4:5",
    "5:4",
    "3:4",
    "4:3",
    "9:16",
    "9:21",
  ];

  function aspectRatio() {
    return ratioList.map((curr) => {
      return (
        <div
          key={curr}
          onClick={() => {
            setARatio(curr);
          }}
          className={` ${
            aRatio === curr
              ? " bg-white dark:bg-light-gray  shadow-sm shadow-black/25 border-t-1 border-gray-100/20"
              : " "
          } w-fit p-1 px-2 cursor-pointer rounded-sm `}
        >
          {curr}
        </div>
      );
    });
  }

  return (
    <div
      className={`overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-gray dark:text-white bg-white text-gray dark: shadow-md/25 shadow-gray-500 ${headerHeight}   w-[16rem]  `}
    >
      <div className="border-b-1 border-gray-500 py-2 px-4">
        <div className="text-sm px-2 py-4">Aspect Ratio</div>
        <div className="flex flex-wrap gap-2 text-sm">{aspectRatio()}</div>
      </div>
      <div className="border-b-1 border-gray-500 py-2 px-4 flex flex-col items-center">
        <div className="text-sm px-2 py-2">Number of Images :</div>
        <Slider
          aria-label="Images"
          defaultValue={1}
          valueLabelDisplay="auto"
          shiftStep={1}
          step={1}
          marks
          min={1}
          max={4}
          size="medium"
          style={{ width: "12rem" }}
          onChange={(e, n) => {
            console.log(n);
          }}
        />
        <div className="text-xs text-gray-500">Note : 1 Token/Image</div>
      </div>
      <div className="border-b-1 border-gray-500 py-2 px-4 flex flex-col items-center">
        <div className="text-sm px-2 py-2">Denoising Steps :</div>
        <Slider
          aria-label="Images"
          defaultValue={4}
          valueLabelDisplay="auto"
          shiftStep={1}
          step={1}
          marks
          min={1}
          max={4}
          size="medium"
          style={{ width: "12rem" }}
          onChange={(e, n) => {
            console.log(n);
          }}
        />
        <div className="text-xs text-gray-500 text-center">
          Note : Lower number of steps produce low quality images, Faster
        </div>
      </div>
      <div className="border-b-1 border-gray-500 py-2 px-4 flex flex-col items-center">
        <div className="text-sm px-2 py-2">Seed :</div>
        <TextField
          id="filled-basic"
          type="number"
          size="small"
          variant="filled"
          className="dark:bg-gray-950 text-white bg-gray-100 border-1 border-gray-200"
          sx={{ border: 1, borderColor: "gray", color: "white" }}
        />
        <div className="text-xs text-gray-500 text-center">
          Note : Random seed. Set for reproducible generation
        </div>
      </div>
      <div className="border-b-1 border-gray-500 py-2 px-4 flex flex-col items-center">
        <div className="text-sm px-2 py-2">Format :</div>
        <Select
          className="bg-amber-50"
          labelId="demo-simple-select-label"
          value={format}
          label="Age"
          size="small"
          onChange={(e) => {
            setFormat(e.target.value);
          }}
        >
          <MenuItem value={"jpg"}>jpg</MenuItem>
          <MenuItem value={"webp"}>webp</MenuItem>
          <MenuItem value={"png"}>png</MenuItem>
        </Select>
      </div>
      <div className="border-b-1 border-gray-500 py-2 px-4 flex flex-col items-center">
        <div className="text-sm px-2 py-2">Output quality :</div>
        <Slider
          aria-label="Images"
          defaultValue={80}
          valueLabelDisplay="auto"
          shiftStep={1}
          step={10}
          //marks
          min={0}
          max={100}
          size="medium"
          style={{ width: "12rem" }}
          onChange={(e, n) => {
            console.log(n);
          }}
        />
        <div className="text-xs text-gray-500 text-center">
          Note : Quality when saving the output images, from 0 to 100. 100 is
          best quality, 0 is lowest quality. Not relevant for .png outputs
        </div>
      </div>
      <div className="border-b-1 border-gray-500 py-2 px-4 flex flex-col items-center">
        <div className="flex ">
          <div className="text-sm px-2 py-2">Disable safety checker :</div>
          <Checkbox />
        </div>
      </div>
      <div className="border-b-1 border-gray-500 py-2 px-4 flex flex-col items-center">
        <div className="flex ">
          <div className="text-sm px-2 py-2">Go Fast :</div>
          <Checkbox defaultChecked />
        </div>
        <div className="text-xs text-gray-500 text-center">
          Note : Run faster predictions with model optimized for speed
        </div>
      </div>
    </div>
  );
}

export default Sidepanel;
