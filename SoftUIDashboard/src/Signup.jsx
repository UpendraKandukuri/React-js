import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="font-opensans flex flex-col gap-5 m-2 p-5 items-center relative h-80 rounded-xl bg-gradient-to-r from-[#3A416F] to-[#141727] w-full">
      <div className="flex justify-between items-center w-full mx-20 px-4 py-2 bg-white rounded-3xl shadow-2xl">
        <div>
          <h1 className="font-bold">Soft UI Dashboard</h1>
        </div>
        <div className="flex gap-3 font-medium">
          <h1>Dashboard</h1>
          <h1>Profile</h1>
          <Link to="/signin">
            {" "}
            <h1>Sign In</h1>
          </Link>
        </div>
        <div className="bg-black rounded-3xl px-4 py-1 text-white">
          <h1>Free Download</h1>
        </div>
      </div>
      <div className="space-y-1 w-75 text-white">
        <h1 className="font-semibold text-2xl text-center">Sign Up</h1>
        <h1>
          Use these awesome forms to login or create new account in your project
          for free.
        </h1>
      </div>
      <div className="flex flex-col gap-5 justify-center items-center absolute inset-x-0 -bottom-50">
        <form className="space-y-4 w-75 bg-white rounded-md shadow-2xl p-6">
          <input
            type="text"
            placeholder="Enter Name"
            className="border border-gray-300  focus:outline-blue-400 px-2 py-1 w-full rounded"
          />
          <input
            type="text"
            placeholder="Enter Email"
            className="border border-gray-300  focus:outline-blue-400 px-2 py-1 w-full rounded"
          />

          <input
            type="number"
            placeholder="Enter Password"
            className="border border-gray-300  focus:outline-blue-400 px-2 py-1 w-full rounded"
          />

          <button className="bg-gradient-to-r from-slate-500 to-slate-800 text-xl text-white w-full px-3 py-1 rounded-md">
            SIGN Up
          </button>
          <h1 className="text-gray-700 font-medium">
            Already have an account?{" "}
            <Link to="/signin">
              <span className="text-slate-800 font-bold">Sign In</span>
            </Link>{" "}
          </h1>
        </form>
      </div>
    </div>
  );
};

export default Signup;
