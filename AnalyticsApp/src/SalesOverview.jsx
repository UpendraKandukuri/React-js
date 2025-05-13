import React from "react";
import SalesNavbar from "./SalesNavbar";
import SalesGraph from "./SalesGraph";
import ActiveUserData from "./ActiveUserData";

const SalesOverview = () => {
  return (
    <div className=" w-full space-y-5 min-h-screen">
      <SalesNavbar />
      <div className=" flex w-full gap-2 min-h-screen">
        <div className="flex sm:flex-[3] p-3 w-full">
          <SalesGraph />
        </div>
        <div className="hidden sm:flex flex-[1] p-3 w-full">
          <ActiveUserData />
        </div>
      </div>
    </div>
  );
};

export default SalesOverview;
