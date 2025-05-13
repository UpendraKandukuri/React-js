import React, { useState } from "react";
import CircularBar from "./CircularBar";
import DonutChart from "./DonutChart";
import Lables from "./Lables";
import Card from "./Card";
import cardinfo from "./CardInfo.json"
import { useSelector } from "react-redux";

const CardDetails = () => {
  // const[cardData,setCardData] = useState(cardinfo)

  const cardData = useSelector((state)=>{
    return state.cardinfo
   })

  return (
<div className="min-h-screen bg-gray-50  space-y-4 space-x-2 pt-4 px-2 w-full flex flex-col">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cardData.map((card) => (
            <Card
              key={card.id}
              walletName={card.walletName}
              amount={card.amount}
              cardNumber={card.cardNumber}
              gradient={card.gradient}
            />
          ))}
        </div>
    <div className="bg-white shadow-md p-3">
     <div>
       <h1 className="font-plus font-bold text-xl">Card Details</h1>
     </div>
      <div className="flex m-2 justify-between">
        <div className="flex flex-col gap-7">
          <div className="font-plus">
            <h1 className="text-gray-500 font-semibold">Card Name</h1>
            <h1 className=" font-bold">Main Balance</h1>
          </div>
          <div>
            <h1 className="text-gray-500 font-semibold">Valid Date</h1>
            <h1 className=" font-bold">08/21</h1>
          </div>
          <div>
            <h1 className="text-gray-500 font-semibold">Card Number</h1>
            <h1 className=" font-bold">**** **** **** 123</h1>
          </div>
        </div>
        <div className="flex flex-col gap-7">
          <div className="font-plus">
            <h1 className="text-gray-500 font-semibold">Bank Name</h1>
            <h1 className=" font-bold">ABC Center Bank</h1>
          </div>
          <div>
            <h1 className="text-gray-500 font-semibold">Card Holder</h1>
            <h1 className=" font-bold">Marquezz Silalahi</h1>
          </div>
          <div>
            <h1 className="text-gray-500 font-semibold">Card Theme</h1>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-purple-500"></div>
              <div className="w-8 h-8 rounded-full bg-orange-500"></div>
              <div className="w-8 h-8 rounded-full bg-green-500"></div>
              <div className="w-8 h-8 rounded-full bg-blue-500"></div>
            </div>
          </div>
        </div>
        <div className="font-plus">
            <h1 className="text-gray-500 font-bold">Monthly Limits</h1>
            <div className="flex gap-4 pt-10">
              <div className="flex flex-col justify-center items-center gap-3 font-plus">
                <CircularBar percentage={66} color="orange" />
                <div>
                  <h1 className="font-bold">Main Limits</h1>
                <h1 className="font-bold text-gray-500">$10,000</h1>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-3 font-plus">
                <CircularBar percentage={31} color="green" />
                <div>
                  <h1 className="font-bold">Seconds</h1>
                <h1 className="font-bold text-gray-500">$500</h1>
                </div>
              </div>
             <div className="flex flex-col justify-center items-center gap-3 font-plus">
                <CircularBar percentage={7} color="gray" />
                <div>
                  <h1 className="font-bold">Others</h1>
                <h1 className="font-bold text-gray-500">$100</h1>
                </div>
              </div>
            </div>
        </div>
        <div className="flex flex-col ml-5">
          <DonutChart />
          <div className="flex gap-5 justify-between">
          <Lables color='red' item='food' percentage={18} />
           
           <Lables color='blue' item='Rent' percentage={28} />
          </div>
        </div>
         <div className="flex flex-col justify-around">
           <Lables color='green' item='Installment' percentage={24} />
            <Lables color='yellow' item='Restaurant' percentage={21} />
            <Lables color='pink' item='Investment' percentage={29} />
         </div>
      </div>
    </div>
    </div>
  );
};

export default CardDetails;
