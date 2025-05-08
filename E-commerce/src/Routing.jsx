import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ProductsPage from './ProductsPage';
import Navbar from './Navbar';
import ProductInfo from './ProductInfo';
import Cart from './Cart';
import Payment from './Payment';

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/productpage/category/:category"
            element={<ProductsPage />}
          />
          <Route path="/product/:productId" element={<ProductInfo />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
