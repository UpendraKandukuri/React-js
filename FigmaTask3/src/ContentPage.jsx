import React from "react";
import Navbar from "./Navbar";
import Graphs from "./Graphs";
import CustomersData from "./CustomersData";

const ContentPage = () => {
  return (
    <div className=" w-full space-y-5 min-h-screen">
      <Navbar />
      <div className=" flex w-full gap-2 min-h-screen">
        <div className="flex sm:flex-[3] p-3 w-full">
          <Graphs />
        </div>
        <div className="hidden sm:flex flex-[1] p-3 w-full">
           <CustomersData />
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
