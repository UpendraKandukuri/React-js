import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Pokemon from './Pokemon';

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="pokemon" element={<Pokemon />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
