import React from "react";
import search from "./assets/search.svg";
import filter from "./assets/filter.svg";
import cloud from "./assets/cloud.svg";
import CustomersData from "./CustomersData";
import Navbar from "./Navbar";
import Graphs from "./Graphs";

const DashBorad = () => {
  return (
    <div className="border border-gray-300 w-full px-2 sm:px-4 space-y-5 min-h-screen">
      <Navbar />
      <div className="flex sm:flex-row flex-col justify-between sm:py-7 sm:px-4 w-full space-y-3 sm:space-y-0 sm:space-x-3">
        <div>
          <h1 className="text-3xl sm:text-5xl font-bold font-plus">
            Analytic DashBoard
          </h1>
        </div>
        <div className="flex space-x-3">
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

      <Graphs />

      <CustomersData />
    </div>
  );
};

export default DashBorad;
