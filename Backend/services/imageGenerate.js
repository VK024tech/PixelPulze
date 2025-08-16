import express, { response } from "express";
import axios from "axios";
import "dotenv/config";
import Replicate from "replicate";
import { s } from "motion/react-client";
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export async function createImage(userprompt) {
  const input = {
    prompt: userprompt.prompt,
    go_fast: userprompt.goFast ? userprompt.goFast : true,
    megapixels: userprompt.megaPixels ? userprompt.megaPixels : "1",
    num_outputs: userprompt.numImages,
    aspect_ratio: userprompt.aRatio,
    output_format: userprompt.format,
    output_quality: userprompt.outputQuality,
    num_inference_steps: userprompt.denoisingSteps,
    disable_safety_checker: userprompt.disableSafetyChecker,
    // seed: userprompt.seed ? userprompt.seed : null,
  };

  try {
    const output = await replicate.run("black-forest-labs/flux-schnell", {
      input,
    });
    console.log("Image generated:", output);

    const response = [];

    for (let i = 0; i < userprompt.numImages; i++) {
      response.push({
        url: output[i].url(),
      });
    }

    return response;
  } catch (error) {
    console.log("Error generating image:", error);
    return "Error generating image";
  }
}
