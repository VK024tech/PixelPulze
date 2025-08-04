import express, { response } from "express";
import axios from "axios";
import "dotenv/config";
import Replicate from "replicate";
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export async function createImage(userprompt) {
  const input = {
    prompt: userprompt.text,
    go_fast: userprompt.goFast ? userprompt.goFast : true,
    megapixels: userprompt.megaPixels,
    num_outputs: userprompt.numOutputs,
    aspect_ratio: userprompt.aspectRatio,     
    output_format: userprompt.outputFormat,
    output_quality: userprompt.outputQuality,
    num_inference_steps: userprompt.inferenceSteps,
  };

  const output = await replicate.run("black-forest-labs/flux-schnell", {
    input,
  });

  return output[0].url();
}
