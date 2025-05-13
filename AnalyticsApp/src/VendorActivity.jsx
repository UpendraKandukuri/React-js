import React from 'react'

import factory from "./assets/factory.svg";
import settings from "./assets/settings.svg";
import dots from "./assets/dots.svg";

import "react-circular-progressbar/dist/styles.css";
import VendorBarChart from "./VendorBarChart";
import VendorsData from './VendorsData';
import VendorsNavbar from './VendorsNavbar';

const VendorActivity = () => {
const progress = 72;
  const radius = 60;
  const circumference = Math.PI * radius;

  const offset = circumference - (progress / 100) * circumference;
  return (
    <div className=" w-full space-y-5 min-h-screen">
        <VendorsNavbar />
        <div className="flex flex-col sm:flex-row w-full sm:gap-4 space-y-5 sm:space-y-0 items-stretch m-3">
      <div className="flex flex-col flex-[3] p-4 space-y-3 h-auto border border-gray-300 rounded-3xl shadow-md">
        <div className="h-auto flex justify-between">
          <div className="flex space-x-2 w-full">
            <div className="bg-gray-100 p-3 rounded-full">
              <img src={factory} />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-plus font-bold">Vendor Breakdown</h1>
              <h2>Here you can track your vendor’s performance everyday.</h2>
            </div>
          </div>
          <div className="bg-gray-200 rounded-full px-3 flex items-center justify-center">
            <img src={settings} className="h-5 w-7" />
          </div>
        </div>
        <div className="sm:hidden">
          <h1 className="font-plus font-bold">Vendor Breakdown</h1>
          <h2>Here you can track your vendor’s performance everyday.</h2>
        </div>

        <div className="sm:hidden w-full">
          <VendorBarChart/>
        </div>
        <div className="hidden sm:block">
          <VendorBarChart />
        </div>
        <div className="flex justify-between p-3">
          <div className="hidden sm:flex bg-gray-50 rounded-3xl px-4 py-1 gap-4">
            <h1 className="font-plus font-medium">1Day</h1>
            <h1 className="font-plus font-medium">1Week</h1>
            <h1 className="font-plus font-medium">1Month</h1>
            <h1 className="font-plus font-medium">1Year</h1>
            <div className="bg-white px-2 py-1 rounded-3xl">
              <h1 className="font-plus font-semibold">All Time</h1>
            </div>
          </div>
          <div className="sm:hidden">
            <select>
            <option>1Day</option>
            <option>1Week</option>
            <option>1Month</option>
            <option>1Year</option>
            <option>All Time</option>
          </select>
          </div>
          <div className="border border-gray-300 rounded-3xl px-3 py-1">
            <h1 className="font-plus font-medium">View Full Report</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-around flex-[1] border border-gray-300 rounded-3xl shadow-md p-2">
        <div className="px-4 py-2 flex  space-x-2 m-2 justify-between">
          <div className="flex flex-col space-y-1">
            <h1 className="font-plus font-bold">Vendor Statistics</h1>
            <h2 className="font-plus text-sm">
              Your employee performance level
            </h2>
          </div>
          <div className="p-2">
            <img src={dots} />
          </div>
        </div>
        <div className="flex flex-col space-y-2 m-2">
          <div className="flex ">
            <svg width="160" height="80" viewBox="0 0 160 80">
              <path
                d="M 20 80 A 60 60 0 0 1 140 80"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="20"
              />
              <path
                d="M 20 80 A 60 60 0 0 1 140 80"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="20"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
              />
              <text
                x="80"
                y="55"
                textAnchor="middle"
                fontSize="20"
                fill="#111827"
                fontWeight="bold"
              >
                {progress}%
              </text>
            </svg>
          </div>
          <div className="flex flex-col space-y-1.5">
            <h1 className="font-plus font-bold">
              You almost reached your limit!
            </h1>
            <h2>You’ve nearly used 72% of your free space.</h2>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-blue-500 rounded-3xl px-4 py-2">
            <h1 className="text-white">Go Pro Today</h1>
          </div>
        </div>
      </div>
    </div>
    <div>
        <VendorsData />
    </div>
    </div>
  );
};

export default VendorActivity
