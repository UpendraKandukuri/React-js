import React from "react";
import { Link } from "react-router-dom";
import loginimage from "./assets/loginimage.svg";

const Signin = () => {
  return (
    <div className="font-opensans max-h-screen">
      <div className="flex justify-between items-center my-4 mx-20 px-4 py-2 bg-white rounded-3xl shadow-2xl">
        <div>
          <h1 className="font-bold">Soft UI Dashboard</h1>
        </div>
        <div className="flex gap-3 font-medium">
          <h1>Dashboard</h1>
          <h1>Profile</h1>
          <Link to="/signup">
            <h1>Sign Up</h1>
          </Link>
        </div>
        <div className="bg-black rounded-3xl px-4 py-1 text-white">
          <h1>Free Download</h1>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2 ">
          <div className="flex flex-col gap-5 w-75 ml-30 mt-20">
            <div className="space-y-1">
              <h1 className="text-blue-500 text-2xl font-bold">Sign In</h1>
              <h1 className="text-gray-500">
                Enter your email and password sign in
              </h1>
            </div>
            <form className="space-y-3 w-75">
              <div className="flex flex-col gap-0.5">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Enter Email"
                  className="border border-gray-300  focus:outline-blue-400 px-2 py-1 w-full rounded"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <label>Password</label>
                <input
                  type="number"
                  placeholder="Enter Password"
                  className="border border-gray-300  focus:outline-blue-400 px-2 py-1 w-full rounded"
                />
              </div>
              <button className="bg-gradient-to-r from-blue-400 to-blue-900 text-xl text-white w-full px-3 py-1 rounded-md">
                SIGN IN
              </button>
              <h1 className="text-gray-500 font-medium">
                Don't have an account?
                <Link to="/signup">
                  {" "}
                  <span className="text-blue-500 font-bold">Sign Up</span>
                </Link>{" "}
              </h1>
            </form>
          </div>
        </div>
        <div>
          <img src={loginimage} className="h-100" />
        </div>
      </div>
    </div>
  );
};

export default Signin;
