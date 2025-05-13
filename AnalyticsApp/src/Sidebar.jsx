import React from "react";
import vector from "./assets/vector.svg";
import cube from "./assets/Cube.svg";
import home from "./assets/home.svg";
import settings from "./assets/settings.svg";
import subscription from "./assets/subscription.svg";
import support from "./assets/support.svg";
import tasks from "./assets/tasks.svg";
import users from "./assets/users.svg";
import graph from './assets/graph.svg'
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="hidden  border border-gray-300 sm:flex flex-col justify-start space-y-5 px-2 max-h-screen">
      <div className="flex gap-2 items-center pt-5">
        <div className="w-10 h-10 bg-indigo-400 rounded-3xl flex justify-center items-center">
          <img src={vector} className="w-10 h-8" />
        </div>
        <h1 className="font-plus font-bold">Slothui</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search.."
          className="border border-gray-300 rounded-3xl font-semibold px-3 py-1"
        />
      </div>
      <div className="flex flex-col space-y-4 px-3">
        <Link to="home">
          <div className="flex gap-2">
            <img src={home} />
            <h1 className="font-plus font-medium">Home</h1>
          </div>
        </Link>
        <Link to="salesgraph">
        <div className="flex gap-2 ">
          <img src={graph} />
          <h1 className="font-plus font-medium">Sales Graphs</h1>
        </div>
        </Link>
        <Link to='vendoractivity'>
        <div className="flex gap-2">
          <img src={users} />
          <h1 className="font-plus font-medium">Vendor Activity</h1>
        </div>
        </Link>
        <div className="flex gap-2 ">
          <img src={cube} />
          <h1 className="font-plus font-medium">APIs</h1>
        </div>
        <div className="flex gap-2">
          <img src={subscription} />
          <h1 className="font-plus font-medium">Subscription</h1>
        </div>
        <div className="flex gap-2 ">
          <img src={settings} />
          <h1 className="font-plus font-medium">Settings</h1>
        </div>
        <div className="flex gap-2 ">
          <img src={support} />
          <h1 className="font-plus font-medium">Help & Support</h1>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
