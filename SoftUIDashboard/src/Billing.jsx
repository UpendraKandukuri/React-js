import React, { useState } from "react";
import CreditCard from "./CreditCard";
import paypal from "./assets/paypal.svg";
import bank from "./assets/bank.svg";
import pencil from "./assets/pencil.svg";
import visa from "./assets/visa.svg";
import trash from "./assets/trash.svg";

import BillingInfo from "./BillingInfo.json";
import invoices from "./invoices.json";
import transactions from "./transactions.json";
import { useLocation } from "react-router-dom";

const Billing = () => {
  const [billingInfo, setBillingInfo] = useState(BillingInfo);

  const handleDelete = (id) => {
    const updatedBilling = billingInfo.filter((info) => info.id !== id);
    setBillingInfo(updatedBilling);
  };

  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);

  return (
    <div className="flex flex-col gap-7 font-opensans">
      <div className="pl-5 mt-5">
        <h1>Pages / {pathParts}</h1>
        <h1 className="font-bold text-xl">Billing</h1>
      </div>
      <div className="flex gap-4 items-stretch">
        <div className="w-2/3 flex flex-col gap-3">
          <div className="flex gap-4">
            <CreditCard />
            <div className="bg-white px-3 py-2 shadow-md rounded-md flex flex-col w-40 gap-3">
              <div className="flex items-center justify-center">
                <div className="bg-gradient-to-br from-pink-500 via-fuchsia-600 to-purple-700 rounded-md p-4 flex items-center justify-center w-18">
                  <img src={bank} className="w-8 h-9" />
                </div>
              </div>
              <div>
                <h1 className="font-semibold text-center">Salary</h1>
                <h1 className="text-gray-600 text-sm">Belong Interactive</h1>
              </div>
              <h1 className="text-xl font-semibold text-center">+$2,000</h1>
            </div>
            <div className="bg-white px-3 py-2 shadow-md rounded-md flex flex-col w-40 gap-3">
              <div className="flex items-center justify-center">
                <div className="bg-gradient-to-br from-pink-500 via-fuchsia-600 to-purple-700 rounded-md p-4 flex items-center justify-center w-18">
                  <img src={paypal} className="w-8 h-9" />
                </div>
              </div>
              <div>
                <h1 className="font-semibold text-center">Paypal</h1>
                <h1 className="text-gray-600 text-sm">Freelance Payment</h1>
              </div>
              <h1 className="text-xl font-semibold text-center">$49,000</h1>
            </div>
          </div>
          <div className="bg-white rounded-md shadow-md p-3 flex flex-col gap-5 ">
            <div>
              <h1>Payment Method</h1>
            </div>
            <div className="flex justify-between">
              <div className="flex justify-between items-center gap-5  px-3 py-5 border border-gray-300 rounded-2xl">
                <div className="flex items-center space-x-1">
                  <div className="w-5 h-5 bg-red-500 rounded-full">
                    <div className="w-5 h-5 bg-yellow-400 rounded-full -ml-2"></div>
                  </div>
                </div>
                <h1 className="text-xl">**** **** **** 7362</h1>
                <img src={pencil} className="w-5 h-7" />
              </div>
              <div className="flex justify-between items-center gap-5 px-3 py-5 border border-gray-300 rounded-2xl">
                <img src={visa} className="w-10 h-7" />
                <h1 className="text-xl">**** **** **** 3288</h1>
                <img src={pencil} className="w-5 h-7" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 bg-white shadow-md rounded-md p-4 flex flex-col gap-2">
          <h1 className="font-semibold text-xl">Invoices</h1>
          {invoices.map((invoice) => (
            <div key={invoice.id} className="flex justify-between items-center">
              <div>
                <h1>{invoice.date}</h1>
                <h1 className="text-gray-600">{invoice.invoiceNumber}</h1>
              </div>
              <h1>{invoice.amount}</h1>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-4">
        <div className="bg-white rounded-md shadow-md p-3 flex flex-col gap-4 w-3/5">
          <h1 className="text-xl font-semibold">Billing Information</h1>
          {billingInfo.map((info) => (
            <div
              key={info.id}
              className="bg-gray-200 rounded-lg p-4 mb-4 flex justify-between items-start"
            >
              <div>
                <h1 className="font-bold">{info.name}</h1>
                <h1>
                  <span className="font-medium text-gray-600">
                    Company Name:
                  </span>{" "}
                  {info.company}
                </h1>
                <h1>
                  <span className="font-medium text-gray-600">
                    Email Address:
                  </span>{" "}
                  {info.email}
                </h1>
                <h1>
                  <span className="font-medium text-gray-600">VAT Number:</span>{" "}
                  {info.vat}
                </h1>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex gap-3 cursor-pointer">
                  <img src={trash} className="w-4 h-5" />
                  <button
                    className="text-red-600 font-semibold"
                    onClick={() => handleDelete(info.id)}
                  >
                    DELETE
                  </button>
                </div>
                <div className="flex gap-3">
                  <img src={pencil} className="w-5 h-6" />
                  <button className="text-gray-700 font-semibold">EDIT</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md w-2/5 max-w-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Your Transactions</h2>
            <span className="text-sm text-gray-500">23 - 30 March 2021</span>
          </div>
          <div className="space-y-4">
            {transactions.map((tx) => (
              <div key={tx.id} className="flex justify-between items-center">
                <div className="flex justify-center items-center gap-3">
                  <div className="text-xl">
                    {tx.amount === null ? (
                      <div className="rounded-full border border-gray-500 px-3 items-center">
                        <span className="text-yellow-500">!</span>{" "}
                      </div>
                    ) : tx.amount > 0 ? (
                      <div className="rounded-full border border-green-500 px-3 py-0.5 flex items-center">
                        <span className="text-green-500">+</span>
                      </div>
                    ) : (
                      <div className="rounded-full border border-red-500 px-3 flex justify-center items-center">
                        <span className="text-red-500">-</span>{" "}
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium">{tx.name}</h3>
                    <p className="text-sm text-gray-500">
                      {tx.date}, at {tx.time}
                    </p>
                  </div>
                </div>
                <div>
                  {tx.amount === null ? (
                    <span className="text-gray-900 text-sm">Pending</span>
                  ) : (
                    <span
                      className={`font-semibold ${
                        tx.amount > 0 ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {tx.amount > 0
                        ? `+ $${tx.amount}`
                        : `- $${Math.abs(tx.amount)}`}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
