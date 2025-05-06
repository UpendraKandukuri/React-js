import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-gray-100">
      <ul className="flex justify-between p-3">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="pokemon">PokemonDetais</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
