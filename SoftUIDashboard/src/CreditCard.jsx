import React from "react";
import wifi from "./assets/wifi.svg";

const CreditCard = () => {
  return (
    <div className="w-[358px] h-[200px] rounded-[12px] p-4 text-white bg-gradient-to-br from-[#3A416F] to-[#141727] flex flex-col justify-between">
      <img src={wifi} className="w-8 h-7" />
      <div className="text-2xl font-semibold tracking-widest mb-6">
        4562 1122 4594 7852
      </div>
      <div className="flex justify-between text-sm">
        <div className="flex gap-4">
          <div>
            <div className="opacity-70">Card Holder</div>
            <div className="font-semibold">Jack Peterson</div>
          </div>
          <div>
            <div className="opacity-70">Expires</div>
            <div className="font-semibold">11/22</div>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-5 h-5 bg-red-500 rounded-full">
            <div className="w-5 h-5 bg-yellow-400 rounded-full -ml-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
