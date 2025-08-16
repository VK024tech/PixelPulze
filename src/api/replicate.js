import axios from "axios";

async function generateImage(
  prompt,
  aRatio,
  format,
  numImages,
  denoisingSteps,
  seed,
  outputQuality,
  disableSafetyChecker,
  goFast
) {
  const response = await axios.post("http://localhost:3200/user/gen", {
    prompt,
    aRatio,
    format,
    numImages,
    denoisingSteps,
    seed,
    outputQuality,
    disableSafetyChecker,
    goFast,
  });

  if (response.status === 200) {
    return response.data;
  } else {
    console.log("Failed to generate image");
  }
}

export { generateImage };
