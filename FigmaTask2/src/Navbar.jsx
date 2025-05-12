import React from "react";

import search from "./assets/search.svg";
import filter from "./assets/filter.svg";
import cloud from "./assets/cloud.svg";
import vector from "./assets/Vector.svg";
import hamburger from "./assets/hamburger.svg";

const Navbar = () => {
  return (
    <div>
      <div className="sm:hidden border-b-gray-200 h-auto flex justify-center items-center pt-5 pb-5 pl-4 pr-2 space-x-2">
        <div className="w-full flex items-center space-x-2">
          <div className="h-15 w-15 bg-indigo-400 rounded-3xl flex justify-center items-center">
            <img src={vector} className="h-14 w-14" />
          </div>
          <h1 className="text-2xl font-bold font-plus">Slothui</h1>
        </div>
        <div className="mr-3">
          <img src={hamburger} className="h-10 w-10" />
        </div>
      </div>
      <div className="border-b-gray-500 h-auto flex flex-col sm:flex-row sm:space-y-0 space-y-3 justify-between pt-5 pb-5 sm:px-3 px-1 w-full bg-gray-100">
        <div className="flex sm:justify-center sm:items-center ml-2">
          <h1 className="font-plus font-bold sm:text-3xl text-2xl">
            Welcome Back, X_AE_A-24
          </h1>
        </div>
        <div className="flex sm:justify-center sm:items-center space-x-3 sm:pl-0 pl-2">
          <div className="flex justify-center items-center">
            <img src={search} className=" h-6 w-6" />
          </div>
          <div className="border border-gray-300 rounded-3xl w-auto flex justify-center items-center space-x-2 px-4 py-2">
            <img src={filter} className="h-6 w-6" />
            <h1 className="font-bold font-plus">Customize</h1>
          </div>
          <div className="border border-gray-300 rounded-3xl w-auto flex  justify-center items-center space-x-3 px-4 py-2">
            <img src={cloud} className=" h-6 w-6" />
            <h1 className="font-bold font-plus">Add New</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
