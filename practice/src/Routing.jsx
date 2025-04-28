import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home, { About, Contact } from './Home';
import User, { Cart, Payment } from './User';

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="user" element={<User />}>
            <Route path="cart" element={<Cart />} />
            <Route path="payment" element={<Payment />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
