import React from 'react'

const Card = ({ walletName, amount, cardNumber, gradient }) => {
  return (
    <div
      className={`rounded-xl text-white p-6 w-auto h-[180px] shadow-lg ${gradient} relative overflow-hidden flex flex-col justify-between`}
    >
   <div>
       <h2 className="text-lg font-semibold">{walletName}</h2>
      <p className="text-3xl font-bold mt-2">{amount}</p>
   </div>
      <p className="mt-4 tracking-widest text-sm font-bold text-yellow-400">{cardNumber}</p>
      
      <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/20"></div>
    </div>
  );
};

export default Card;

