import React from 'react';

import vector from './assets/Vector.svg';
import hamburger from './assets/hamburger.svg';

const Navbar = () => {
  return ( 
    <div>
      <div className="sm:hidden border-b-1 h-20 flex justify-center items-center pt-10 pb-10 pl-5 pr-3 space-x-2">
        <div className="w-full flex items-center space-x-2">
          <div className="h-15 w-15 bg-indigo-400 rounded-3xl flex justify-center items-center">
            <img src={vector} className="h-14 w-14" />
          </div>
          <h1 className="text-2xl font-bold font-plus">Slothui</h1>
        </div>
        <div className="mr-3">
          <img src={hamburger} className="h-10 w-10" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
