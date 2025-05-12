import React from 'react';
import vector from './assets/Vector.svg';
import Monotoneadd from './assets/Monotoneadd.svg';
import graph from './assets/graph.svg';
import human from './assets/human.svg';
import date from './assets/Date.svg';
import thunderstrom from './assets/thunderstrom.svg';

const Sidebar = () => {
  return (
    <div>
      <div className="hidden  border border-gray-300 p-4 sm:flex flex-col items-center space-y-8 max-h-screen">
        <div className="w-15 h-15 bg-indigo-300 rounded-3xl flex justify-center items-center">
          <img src={vector} className="w-14 h-14" />
        </div>
        <div className="w-18 h-18 bg-gray-50 p-3 rounded-full flex justify-center items-center">
          <img src={Monotoneadd} className="w-8 h-10" />
        </div>
        <div className="w-18 h-18 rounded-full flex justify-center items-center">
          <img src={graph} className="w-8 h-10" />
        </div>
        <div className="w-18 h-18 rounded-full flex justify-center items-center">
          <img src={human} className="w-8 h-10" />
        </div>
        <div className="w-18 h-18 rounded-full flex justify-center items-center">
          <img src={date} className="w-8 h-10" />
        </div>
        <div className="w-18 h-18 rounded-full flex justify-center items-center">
          <img src={thunderstrom} className="w-8 h-10" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
 