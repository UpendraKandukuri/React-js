import React from "react";
import Navbar from "./Navbar";
import Graphs from "./Graphs";
import VendorsData from "./VendorsData";

const Contentpage = () => {
  return (
    <div className=" w-full space-y-5 min-h-screen">
      <Navbar />
      <Graphs />
      <VendorsData />
    </div>
  );
};

export default Contentpage;
