import React, { useState } from "react";
import cloud from "./assets/cloud.svg";
import vector from "./assets/Vector.svg";
import hamburger from "./assets/hamburger.svg";
import column from "./assets/column.svg";
import grid from "./assets/grid.svg";
import list from "./assets/list.svg";

import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const Navbar = () => {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [showPicker, setShowPicker] = useState(false);

  return (
    <div className="bg-gray-100">
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
      <div className="border-b-gray-500 h-auto flex flex-col sm:flex-row sm:space-y-0 space-y-3 justify-between pt-5 pb-5 sm:px-3 px-1 w-full">
        <div className="flex flex-col justify-start ml-2">
          <h1 className="font-plus font-bold sm:text-3xl text-2xl">
            Sales Overview
          </h1>
          <h3>Your brief overview of your sales worldwide.</h3>
        </div>
        <div className="flex sm:justify-center sm:items-center space-x-3 sm:pl-0 pl-2">
          <div className="border border-gray-300 rounded-3xl w-auto flex justify-center items-center space-x-2 px-4 py-2">
            <h1>Filter</h1>
          </div>
          <div className="border border-gray-300 bg-blue-600 text-white rounded-3xl w-auto flex  justify-center items-center space-x-3 px-4 py-2">
            <img src={cloud} className=" h-6 w-6" />
            <h1 className="font-bold font-plus">Export</h1>
          </div>
        </div>
      </div>
      <div className="sm:ml-4 flex flex-col sm:flex-row justify-between w-full mb-3">
        <div className="flex border border-gray-300 rounded-l-3xl rounded-r-3xl mb-3">
          <div className="flex gap-2 px-3 py-1 ">
            <img src={grid} />
            <h1>Grid View</h1>
          </div>
          <div className="flex gap-2 px-3 py-1">
            <img src={list} />
            <h1>List View</h1>
          </div>
          <div className="flex gap-2 px-3 py-1">
            <img src={column} />
            <h1>Column View</h1>
          </div>
        </div>
        <div className="mr-5 relative">
          <button
            onClick={() => setShowPicker(!showPicker)}
            className="bg-gray-100 border border-gray-300 px-4 py-2 rounded-full shadow-sm"
          >
            {format(range[0].startDate, "MMM dd, yyyy")} –{" "}
            {format(range[0].endDate, "MMM dd, yyyy")}
          </button>

          {showPicker && (
            <div className="absolute right-0 mt-2 z-50 bg-white shadow-lg border rounded-xl">
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setRange([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={range}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
