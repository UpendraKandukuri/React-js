import React from "react";
import logo from "./assets/logo.png";
import dashboard from "./assets/dashboard.svg";
import tables from "./assets/tables.svg";
import billing from "./assets/billing.svg";
import settings from "./assets/settings.svg";
import profile from "./assets/profile.svg";
import signin from "./assets/signin.svg";
import signup from "./assets/signup.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-5 font-opensans pl-8">
      <div className="flex gap-2 justify-center items-center pt-5 ">
        <img src={logo} className="w-7 h-8" />
        <h1 className="font-bold w-45">Soft UI Dashboard</h1>
      </div>
      <div className="flex flex-col  gap-2">
        <Link to="Dashboard">
          <div className="flex items-center gap-2 hover:bg-white hover:shadow-md py-2 px-4 rounded-md w-auto text-gray-600 hover:font-bold">
            <div className="bg-white hover:bg-pink-600 rounded-md shadow-md">
              <img src={dashboard} className="w-4 h-4 m-2 hover:bg-white" />
            </div>
            <h1>Dashboard</h1>
          </div>
        </Link>
        <Link to="Tables">
          <div className="flex items-center gap-2 hover:bg-white hover:shadow-md py-2 px-4 rounded-md w-auto text-gray-600 hover:font-bold">
            <div className="bg-white hover:bg-pink-600 rounded-md shadow-md">
              <img src={tables} className="w-4 h-4 m-2 hover:bg-white" />
            </div>
            <h1>Tables</h1>
          </div>
        </Link>
        <Link to="Billing">
          <div className="flex items-center gap-2 hover:bg-white hover:shadow-md py-2 px-4 rounded-md w-auto text-gray-600 hover:font-bold">
            <div className="bg-white hover:bg-pink-600 rounded-md shadow-md">
              <img src={billing} className="w-4 h-4 m-2 hover:bg-white" />
            </div>
            <h1>Billing</h1>
          </div>
        </Link>
        <div className="flex items-center gap-2 hover:bg-white hover:shadow-md py-2 px-4 rounded-md w-auto text-gray-600 hover:font-bold">
          <div className="bg-white hover:bg-pink-600 rounded-md shadow-md">
            <img src={settings} className="w-4 h-4 m-2 hover:bg-white" />
          </div>
          <h1>RTL</h1>
        </div>
        <h1 className="font-bold text-gray-600">ACCOUNT PAGES</h1>
        <Link to="Profile">
          <div className="flex items-center gap-2 hover:bg-white hover:shadow-md py-2 px-4 cursor-pointer rounded-md w-auto text-gray-600 hover:font-bold">
            <div className="bg-white hover:bg-pink-600 rounded-md shadow-md">
              <img src={profile} className="w-4 h-4 m-2 hover:bg-white" />
            </div>
            <h1>Profile</h1>
          </div>
        </Link>
        <Link to="/signin">
          <div className="flex items-center gap-2 hover:bg-white hover:shadow-md py-2 px-4 rounded-md w-auto text-gray-600 hover:font-bold">
            <div className="bg-white hover:bg-pink-600 rounded-md shadow-md">
              <img src={signin} className="w-4 h-4 m-2 hover:bg-white" />
            </div>
            <h1>Signin</h1>
          </div>
        </Link>
        <Link to="/signup">
          <div className="flex items-center gap-2 hover:bg-white hover:shadow-md py-2 px-4 rounded-md w-auto text-gray-600 hover:font-bold">
            <div className="bg-white hover:bg-pink-600 rounded-md shadow-md">
              <img src={signup} className="w-4 h-4 m-2 hover:bg-white" />
            </div>
            <h1>Signup</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
