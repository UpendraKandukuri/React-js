import React from 'react';
import { Link } from 'react-router-dom';
import cart from './assets/cart.svg';
import home from './assets/home.svg';

const Navbar = () => {
  return (
    <div>
      <nav className="text-black fixed w-full mt-2 mb-3 px-3">
        <ul className="flex justify-between p-2">
          <li className="text-2xl">E-Commerce</li>
          <ul className="flex space-x-4">
            <li>
              <Link to="/">
                <img src={home} />
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <img src={cart} />
              </Link>
            </li>
          </ul>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
