import React from "react";
import WalletHistory from "./WalletHistory";
import BarChart from "./BarChart";


const HistoryWallet = () => {
  return (
    <div className="w-full flex gap-2 max-h-screen overflow-y-auto">
      <div className="bg-white rounded shadow-md p-3 flex flex-col gap-3 w-1/2">
        <div>
          <div className="font-plus">
            <h1 className="fount-bold text-2xl">Overview Balance</h1>
            <h1 className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur
            </h1>
          </div>
        </div>
        <div className="font-plus flex justify-between">
          <h1 className="text-xl">
            Last Week <span className="text-green-500">$563,443</span>
          </h1>
          <div className="flex gap-4">
            <h1 className="font-bold text-2xl">$557,235.31</h1>
            <h1 className="text-green-500 text-2xl">7%</h1>
          </div>
        </div>
        <BarChart />
      </div>
      <div className="w-1/2 overflow-y-auto">
        <WalletHistory />
      </div>
    </div>
  );
};

export default HistoryWallet;

