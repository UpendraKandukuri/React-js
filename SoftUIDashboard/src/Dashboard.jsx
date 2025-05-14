import React from "react";
import money from "./assets/money.png";
import world from "./assets/world.png";
import paper from "./assets/paper.png";
import cart from "./assets/cart.png";
import rocket from "./assets/rocket.png";
import coins from "./assets/coins.svg";
import bell from "./assets/bell.svg";
import Shape from "./assets/Shape.svg";
import bluecart from "./assets/bluecart.svg";
import creditcard from "./assets/credit-card.svg";

import ActiveUsersChart from "./ActiveUsersChart";
import SalesOverviewChart from "./SalesOverviewChart";
import ProjectTable from "./ProjectTable";
import { useLocation, useParams } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);

  return (
    <div className="flex flex-col gap-7 font-opensans">
      <div className="pl-5 mt-5">
        <h1>Pages / {pathParts}</h1>
        <h1 className="font-bold text-xl">Dashboard</h1>
      </div>
      <div className="p-3 flex flex-col gap-4">
        <div className="grid grid-cols-4 gap-4">
          <div className="p-2 bg-white rounded-md shadow-md flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <h1 className="text-gray-600">Today's Money</h1>
              <div className="flex gap-1 items-baseline-last">
                <h1 className="font-black text-xl">$53,000</h1>
                <h2 className="text-green-500">+55%</h2>
              </div>
            </div>
            <div className="bg-gradient-to-br from-pink-500 via-fuchsia-600 to-purple-700  p-2 rounded-md flex justify-center items-center h-12 w-12">
              <img src={money} className="h-5 w-5" />
            </div>
          </div>
          <div className="p-2 bg-white rounded-md shadow-md flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <h1 className="text-gray-600">Today's Users</h1>
              <div className="flex gap-1 items-baseline-last">
                <h1 className="font-black text-xl">$2,300</h1>
                <h2 className="text-green-500">+20%</h2>
              </div>
            </div>
            <div className="bg-gradient-to-br from-pink-500 via-fuchsia-600 to-purple-700  p-2 rounded-md flex justify-center items-center h-12 w-12">
              <img src={world} className="h-5 w-5" />
            </div>
          </div>
          <div className="p-2 bg-white rounded-md shadow-md flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <h1 className="text-gray-600">New Clients</h1>
              <div className="flex gap-1 items-baseline-last">
                <h1 className="font-black text-xl">+3,462</h1>
                <h2 className="text-red-500">-2%</h2>
              </div>
            </div>
            <div className="bg-gradient-to-br from-pink-500 via-fuchsia-600 to-purple-700  p-2 rounded-md flex justify-center items-center h-12 w-12">
              <img src={paper} className="h-5 w-5" />
            </div>
          </div>
          <div className="p-2 bg-white rounded-md shadow-md flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <h1 className="text-gray-600">Sales</h1>
              <div className="flex gap-1 items-baseline-last">
                <h1 className="font-black text-xl">$103,430</h1>
                <h2 className="text-green-500">+5%</h2>
              </div>
            </div>
            <div className="bg-gradient-to-br from-pink-500 via-fuchsia-600 to-purple-700  p-2 rounded-md flex justify-center items-center h-12 w-12">
              <img src={cart} className="h-5 w-5" />
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="w-3/5  bg-white rounded-md shadow-md p-2 flex gap-2">
            <div className="flex flex-col gap-2">
              <div>
                <h1 className="text-gray-600  font-bold">
                  Built by developers
                </h1>
                <h1 className="font-bold text-xl">Soft YI Dashboard</h1>
              </div>
              <p className="text-gray-600">
                From colors, cards, typography to complex elements, you will
                find the full documentation.
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-500 via-fuchsia-600 to-purple-700 py-4 rounded-md">
              <img src={rocket} className="w-90 h-35" />
            </div>
          </div>
          <div className="w-2/5 bg-white rounded-md shadow-md p-4 flex items-center">
            <div className="bg-black rounded-xl w-full text-white flex flex-col gap-2 p-3">
              <h1 className="font-bold text-xl">Work with the rockets </h1>
              <p>
                Wealth creation is an evolutionarily recent positive-sum game.
                It is all about who take the opportunity first.
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="w-3/7 bg-white rounded-md shadow-md p-3 flex flex-col gap-4">
            <ActiveUsersChart />
            <div>
              <h1 className="font-bold text-xl">Active Users</h1>
              <h1 className="text-gray-600">
                <span className="text-gray-600 font-bold">(+23%)</span>then last
                week
              </h1>
            </div>
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <h1 className="text-xl text-gray-600">Users</h1>
                <div>
                  <h1 className="font-bold text-2xl">3,6k</h1>
                  <div className="w-full h-2 bg-gray-300 rounded-full">
                    <div className="w-2/3 h-2 bg-black rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <h1 className="text-xl text-gray-600">Clicks</h1>
                <div>
                  <h1 className="font-bold text-2xl">2m</h1>
                  <div className="w-full h-2 bg-gray-300 rounded-full">
                    <div className="w-1/2 h-2 bg-black rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <h1 className="text-xl text-gray-600">Sales</h1>
                <div>
                  <h1 className="font-bold text-2xl">$772</h1>
                  <div className="w-full h-2 bg-gray-300 rounded-full">
                    <div className="w-2/3 h-2 bg-black rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <h1 className="text-xl text-gray-600">Items</h1>
                <div>
                  <h1 className="font-bold text-2xl">82</h1>
                  <div className="w-full h-2 bg-gray-300 rounded-full">
                    <div className="w-1/2 h-2 bg-black rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-4/7 bg-white p-3 rounded-md shadow-md flex flex-col gap-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-1">
                Sales Overview
              </h2>
              <p className="text-sm text-green-500 mb-4">↑ 4% more in 2021</p>
            </div>
            <SalesOverviewChart />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="w-2/3 p-2 bg-white rounded-md shadow-md">
            <ProjectTable showMembers={true} showStatus={false} />
          </div>
          <div className="w-1/3 p-2 bg-white rounded-md shadow-md flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-xl">Orders History</h1>
              <h1 className="text-sm  mb-4">
                <span className="text-green-500">↑ </span>24% this month
              </h1>
            </div>
            <div className="space-y-1">
              <div className="flex gap-5">
                <img src={bell} className="w-4 h-7" />
                <div className="flex flex-col">
                  <h1 className="font-bold">$2,400 - Redesign store</h1>
                  <h1 className="text-gray-600">09 JUN 7:20 PM</h1>
                </div>
              </div>
              <div className="flex gap-5">
                <img src={Shape} className="w-4 h-7" />
                <div className="flex flex-col">
                  <h1 className="font-bold">New order #3654323</h1>
                  <h1 className="text-gray-600">08 JUN 12:20 PM</h1>
                </div>
              </div>
              <div className="flex gap-5">
                <img src={bluecart} className="w-4 h-7" />
                <div className="flex flex-col">
                  <h1 className="font-bold">Company server payments </h1>
                  <h1 className="text-gray-600">04 JUN 3:10 PM</h1>
                </div>
              </div>
              <div className="flex gap-5">
                <img src={creditcard} className="w-4 h-7" />
                <div className="flex flex-col">
                  <h1 className="font-bold">
                    New card added for order #4826321
                  </h1>
                  <h1 className="text-gray-600">02 JUN 2:45 PM</h1>
                </div>
              </div>
              <div className="flex gap-5">
                <img src={bell} className="w-4 h-7" />
                <div className="flex flex-col">
                  <h1 className="font-bold">Unlock folders for development</h1>
                  <h1 className="text-gray-600">18 MAY 1:30 PM</h1>
                </div>
              </div>
              <div className="flex gap-5">
                <img src={coins} className="w-4 h-7" />
                <div className="flex flex-col">
                  <h1 className="font-bold">New order #46282344</h1>
                  <h1 className="text-gray-600"></h1>14 MAY 3:30 PM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
