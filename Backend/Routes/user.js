import express from "express";
import { createClient } from "@supabase/supabase-js";
import "dotenv/config";
import { createImage } from "../services/imageGenerate.js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICEROLE_KEY
);

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const userEmail = req.body.email;
    const userPassword = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    const { data, error } = await supabase.auth.signUp({
      email: userEmail,
      password: userPassword,
      options: {
        shouldCreateSession: false,
        emailRedirectTo: "http://localhost:5173/signin",
        data: {
          firstName: firstName,
          lastName: lastName,
          signUp_at: new Date().toISOString(),
        },
      },
    });

    if (error) {
      console.log(error);
      res.status(400).json({
        success: false,
        message: "Something Went worng! Please try again",
        error: error,
      });
      return;
    }

    res.status(201).json({
      success: true,
      message: "Confirmation email sent! Please check your email to confirm.",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Servor error!",
    });
  }
});

router.get("/Gsignup", async (req, res) => {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:5173/redirect",
        scopes: "email profile",
      },
    });

    if (error) {
      console.log(error);
      res.status(400).json({
        message: "Something Went worng! Please try again",
        error: error,
      });
    }

    return res.redirect(data.url);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Servor error!",
    });
  }
});

router.post("/signin", async (req, res) => {
  try {
    const userEmail = req.body.email;
    const userPassword = req.body.password;
    

    const { data, error } = await supabase.auth.signInWithPassword({
      email: userEmail,
      password: userPassword,
      options: {
        redirectTo: "http://localhost:5173/redirect",
      },
    });

    if (error) {
      console.log(error.message);
      res.status(400).json({
        message: error.message,
      });
      return
    } else {
      res.status(201).json({
        message: "Sign in successful!",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Servor error!",
    });
  }
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
