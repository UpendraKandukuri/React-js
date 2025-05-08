import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="bg-pink-500 text-white fixed w-full mt-2 mb-3">
        <ul className="flex justify-between p-2">
          <li className="text-xl">E-Commerce</li>
          <div className="flex space-x-2">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">cart</Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
