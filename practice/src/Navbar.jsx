import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
        <li>
          <Link to="about">About us</Link>
        </li>
        <li>
          <Link to="user">User</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
