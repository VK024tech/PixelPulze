import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signIn() {
    if (email && password) {
      const response = await axios.post("http://localhost:3200/user/signin", {
        email: email,
        password: password,
      });

      console.log(response);
    } else {
      console.log(userInfo.issues);
      setErrors(userInfo.error);
      return;
    }
  }

  async function google() {
    window.location.href = "http://localhost:3200/user/Gsignup";
  }

  return (
    <div className=" text-gray dark:text-white  flex items-center justify-center   h-dvh">
      <div className="w-full md:w-xs h-full justify-center  md:h-fit flex flex-col border-1 border-gray-300 dark:border-none items-center rounded-md dark:shadow-sm/90 shadow-xl/30 dark:bg-gray p-5  bg-white  shadow-gray-500  ">
        <div className="mb-2">PixelPulze</div>
        <h1 className="mb-2 font-bold text-xl">Welcome Back</h1>
        <p className="text-xs mb-6 text-gray-500 ">
          Dont have an account?
          <Link
            className="text-gray dark:text-white cursor-pointer pl-1"
            to="/signup"
          >
            Sign Up
          </Link>
        </p>
        <div className="flex w-full flex-col gap-3 mb-2">
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            className="dark:bg-gray-950 outline-none  placeholder:text-sm placeholder:pl-1 placeholder:text-gray-500 rounded-md border-1 border-gray-400 dark:border-gray-800  py-1 px-2 "
            type="email"
            placeholder="Email"
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            className="dark:bg-gray-950 outline-none  placeholder:text-sm placeholder:pl-1 placeholder:text-gray-500 rounded-md border-1 border-gray-400 dark:border-gray-800  py-1 px-2 "
            type="password"
            placeholder="Password"
          />
        </div>
        <button
          onClick={() => {
            signIn();
          }}
          className="rounded-md mt-4 p-1 outline-none  w-full  border-2  cursor-pointer bg-gray dark:bg-white text-white dark:text-gray "
        >
          Sign In
        </button>
        <div className="my-4 w-full  flex items-center text-gray-300 dark:text-gray-600">
          <hr className="w-full " />
          <span className="text-[10px] mx-1">OR</span>
          <hr className="w-full" />
        </div>
        <div
          onClick={() => {
            google();
          }}
          className="bg-white dark:bg-light-gray px-8 py-1 shadow-sm shadow-black/25 border-t-1 border-gray-100/20 rounded-xl  hover:text-brand  hover:ring-1 hover:ring-brand hover:shadow-md/50 hover:shadow-brand transition-all duration-300   cursor-pointer"
        >
          <img className="size-6" src="/g_icon.svg" alt="google login" />
        </div>
      </div>
    </div>
  );
}

export default Signin;
