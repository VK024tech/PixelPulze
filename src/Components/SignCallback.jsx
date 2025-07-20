import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../service/SupabaseClient";

function SignCallback() {
  const navigate = useNavigate();
  const [message, setMessage] = useState();

  useEffect(() => {
    const data = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session) {
        setMessage(
          `Welcome back, ${session.user.email}! Redirecting to dashboard...`
        );
        setTimeout(() => {
          navigate("/dashboard");
        }, 1500);
      } else if (event === "SIGNED_OUT") {
        setMessage("Login failed or session expired. Redirecting to login...");
        setTimeout(() => {
          navigate("/signin");
        }, 2000);
      } else if (event === "INITIAL_SESSION" && !session) {
        setMessage("Login failed. Redirecting to login...");
        setTimeout(() => {
          navigate("/signin");
        }, 2000);
      }
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, [navigate]);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Authenticating...</h1>
      <p>{message}</p>
    </div>
  );
}

export default SignCallback;
