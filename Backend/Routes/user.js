import express from "express";
import { createClient } from "@supabase/supabase-js";
import "dotenv/config";
import { createImage } from "../services/imageGenerate.js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

const router = express.Router();

router.post("/signup", async (req, res) => {
  const userEmail = req.body.email;
  const userPassword = req.body.password;

  const { data, error } = await supabase.auth.signUp({
    email: userEmail,
    password: userPassword,
  });

  if (error) {
    console.log(error);
  }

  res.json({
    data,
  });
});

router.post("/signin", async (req, res) => {
  const userEmail = req.body.email;
  const userPassword = req.body.password;

  const { data, error } = await supabase.auth.signInWithPassword({
    email: userEmail,
    password: userPassword,
  });

  if (error) {
    console.log(error);
  }

  res.json({
    data,
  });
});

router.post("/signout", async (req, res) => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.log(error);
  }

  res.json({
    msg: "signout",
  });
});

router.get("/gen", async (req, res) => {
  const response = await createImage(req.body.prompt);

  res.json({
    msg: response,
  });
});

export const userRoutes = router;
