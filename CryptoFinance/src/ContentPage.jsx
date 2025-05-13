import React, { useState } from "react";
import Navbar from "./Navbar";
import Card from "./Card";

import { Outlet } from "react-router-dom";

const ContentPage = () => {

  return (
    <div className="pl-3 w-full flex flex-col min-h-screen overflow-y-auto">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default ContentPage;
