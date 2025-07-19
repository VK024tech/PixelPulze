import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import z from "zod";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState(null);

  const validationScehema = z
    .object({
      firstName: z
        .string()
        .min(1, { message: "Must be at least 1 characters." }),
      lastName: z
        .string()
        .min(1, { message: "Must be at least 1 characters." }),
      email: z.email({ message: "Invalid email address." }),
      password: z
        .string()
        .min(8, { message: "Must be at least 8 characters." }),
      confirmPassword: z.string().min(1, { message: "Password must match" }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ["confirmPassword"],
    });

  async function signUp() {
    const userInfo = validationScehema.safeParse({
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    });

    console.log(userInfo);
    if (userInfo.success) {
      const response = await axios.post();
    } else {
      console.log(userInfo.issues);
      setErrors(userInfo.error);
      return;
    }
  }

  useEffect(() => {
    setErrors();
  }, [firstName, lastName, email, password, confirmPassword]);

  return (
    <div className=" text-gray dark:text-white  flex items-center justify-center   h-dvh">
      <div className="w-full md:w-xs h-full justify-center  md:h-fit flex flex-col border-1 border-gray-300 dark:border-none items-center rounded-md dark:shadow-sm/90 shadow-xl/30 dark:bg-gray p-5  bg-white  shadow-gray-500  ">
        <div className="mb-2">PixelPulze</div>
        <h1 className="mb-2 font-bold text-xl">Welcome to PixelPulze</h1>
        <p className="text-xs mb-6 text-gray-500 ">
          Already have an account?
          <Link
            className="text-gray dark:text-white cursor-pointer pl-1"
            to="/signin"
          >
            Sign In
          </Link>
        </p>
        <div className="flex w-full flex-col gap-3 mb-2">
          <input
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            value={firstName}
            required
            className={`dark:bg-gray-950 ${
              errors?.issues.find((index) => index.path.includes("firstName"))
                ? "outline-1 outline-red-400"
                : "outline-none"
            }  placeholder:text-sm placeholder:pl-1 placeholder:text-gray-500 rounded-md border-1 border-gray-400 dark:border-gray-800 py-1 px-2  `}
            type="text"
            placeholder="First Name"
          />
          <input
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            value={lastName}
            required
            className={`dark:bg-gray-950 ${
              errors?.issues.find((index) => index.path.includes("lastName"))
                ? "outline-1 outline-red-400"
                : "outline-none"
            }   placeholder:text-sm placeholder:pl-1 placeholder:text-gray-500 rounded-md border-1 border-gray-400 dark:border-gray-800 py-1 px-2 `}
            type="text"
            placeholder="Last Name"
          />
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            required
            className={`dark:bg-gray-950 ${
              errors?.issues.find((index) => index.path.includes("email"))
                ? "outline-1 outline-red-400"
                : "outline-none"
            } placeholder:text-sm placeholder:pl-1 placeholder:text-gray-500 rounded-md border-1 border-gray-400 dark:border-gray-800  py-1 px-2 `}
            type="email"
            placeholder="Email"
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            className={`dark:bg-gray-950 ${
              errors?.issues.find((index) => index.path.includes("password"))
                ? "outline-1 outline-red-400"
                : "outline-none"
            }  placeholder:text-sm placeholder:pl-1 placeholder:text-gray-500 rounded-md border-1 border-gray-400 dark:border-gray-800  py-1 px-2 `}
            type="password"
            placeholder="Password"
          />
          <input
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            value={confirmPassword}
            className={`dark:bg-gray-950 ${
              errors?.issues.find((index) =>
                index.path.includes("confirmPassword")
              )
                ? "outline-1 outline-red-400"
                : "outline-none"
            }  placeholder:text-sm placeholder:pl-1 placeholder:text-gray-500 rounded-md border-1 border-gray-400 dark:border-gray-800  py-1 px-2 `}
            type="password"
            placeholder="Confirm Password"
          />
        </div>
        <button
          onClick={() => {
            signUp();
          }}
          className="rounded-md mt-4 p-1 outline-none  w-full  border-2  cursor-pointer bg-gray dark:bg-white text-white dark:text-gray "
        >
          Sign Up
        </button>
        <div className="my-4 w-full  flex items-center text-gray-300 dark:text-gray-600">
          <hr className="w-full" />
          <span className="text-[10px] mx-1">OR</span>
          <hr className="w-full" />
        </div>
        <div className="bg-white dark:bg-light-gray px-8 py-1 shadow-sm shadow-black/25 border-t-1 border-gray-100/20 rounded-xl  hover:text-brand  hover:ring-1 hover:ring-brand hover:shadow-md/50 hover:shadow-brand transition-all duration-300   cursor-pointer">
          <img className="size-6" src="/g_icon.svg" alt="google login" />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
