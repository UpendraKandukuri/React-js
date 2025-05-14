import React from "react";
import { Route, Routes } from "react-router-dom";
import Softui from "./Softui";
import Dashboard from "./Dashboard";
import Tables from "./Tables";
import UpdateAuthorForm from "./UpdateAuthorForm";
import Billing from "./Billing";
import Profile from "./Profile";
import Signin from "./Signin";
import Signup from "./Signup";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Softui />}>
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Tables" element={<Tables />} />
          <Route path="updateauthor/:index" element={<UpdateAuthorForm />} />
          <Route path="Billing" element={<Billing />} />
          <Route path="Profile" element={<Profile />} />
        </Route>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default Routing;
