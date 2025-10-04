import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../service/SupabaseClient";

function SignCallback() {
  const navigate = useNavigate();
  const [message, setMessage] = useState();

  useEffect(() => {
    const session = supabase.auth.getSession
      ? (async () => (await supabase.auth.getSession()).data.session)()
      : supabase.auth.session?.();

    Promise.resolve(session).then((sess) => {
      if (sess) {
        navigate("/dashboard");
      }
    });
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_IN" && session) {
          // console.log(
          //   `Welcome back, ${session.user.email}! Redirecting to dashboard...`
          // );
          navigate("/dashboard");
        } else if (event === "SIGNED_OUT") {
          setMessage(
            "Login failed or session expired. Redirecting to login..."
          );
          setTimeout(() => {
            navigate("/signin");
          }, 2000);
        } else if (event === "INITIAL_SESSION" && !session) {
          setMessage("Login failed. Redirecting to login...");
          setTimeout(() => {
            navigate("/signin");
          }, 2000);
        }
      }
    );

    return () => {
      authListener?.subscription?.unsubscribe();
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
