import express, { response } from "express";
import axios from "axios";
import "dotenv/config";
import Replicate from "replicate";
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export async function createImage(userprompt) {
  const input = {
    prompt: userprompt,
    go_fast: true,
    megapixels: "1",
    num_outputs: 1,
    aspect_ratio: "1:1",
    output_format: "webp",
    output_quality: 80,
    num_inference_steps: 4,
  };

  const output = await replicate.run("black-forest-labs/flux-schnell", {
    input,
  });

  return output[0].url();
}
