import React, { useState } from "react";
import wallet from "./assets/wallet.svg";
import icon from "./assets/icon.svg";
import exchange from "./assets/exchange.svg";
import crypto from "./assets/crypto.svg";
import dashboard from "./assets/dashboard.svg";
import settings from "./assets/settings.svg";
import transaction from "./assets/transcation.svg";
import banner from './assets/banner.svg'
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [walletOpen, setWalletOpen] = useState(false);

  return (
    <div className="p-3 flex flex-col space-y-3 bg-white shadow-md w-60">
      <div className="flex justify-center items-center gap-4">
        <img src={icon} alt="Logo" />
        <h1 className="font-plus font-bold text-2xl text-purple-900">
          Kripton
        </h1>
      </div>

      <div className="flex flex-col">
        <div className="text-gray-600 px-4 py-2 flex gap-2 items-center">
          <img src={dashboard} className="w-6 h-5 mt-1" alt="Dashboard" />
          <h1>Dashboard</h1>
        </div>

        <div className="text-gray-600 px-4 py-2 flex flex-col gap-1">
          <div
            className="flex gap-2 items-center cursor-pointer"
            onClick={() => setWalletOpen(!walletOpen)}
          >
            <img src={wallet} className="w-6 h-5 mt-1" alt="Wallet" />
            <h1>My Wallet</h1>
            <span className="ml-auto">{walletOpen ? "▲" : "▼"}</span>
          </div>

          {walletOpen && (
            <div className="ml-8 flex flex-col text-sm gap-1 text-purple-800">
              <Link to="addwallet">Add New</Link>
              <Link to="/cardlist">Card List</Link>
              <Link to="history">History</Link>
            </div>
          )}
        </div>

        <Link to='/transaction'>
          <div className="text-gray-600 px-4 py-2 flex gap-2 items-center">
            <img src={transaction} className="w-6 h-5" alt="Transaction" />
            <h1>Transaction</h1>
          </div>
        </Link>

        <div className="text-gray-600 px-4 py-2 flex gap-2 items-center">
          <img src={crypto} className="w-6 h-5 mt-1" alt="Crypto" />
          <h1>Crypto</h1>
        </div>

        <div className="text-gray-600 px-4 py-2 flex gap-2 items-center">
          <img src={exchange} className="w-6 h-5 mt-1" alt="Exchange" />
          <h1>Exchange</h1>
        </div>

        <div className="text-gray-600 px-4 py-2 flex gap-2 items-center">
          <img src={settings} className="w-6 h-5 mt-1" alt="Settings" />
          <h1>Settings</h1>
        </div>
      </div>
      <div>
        <img src={banner} />
      </div>
    </div>
  );
};

export default Sidebar;
