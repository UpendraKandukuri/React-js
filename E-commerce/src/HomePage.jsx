import React from 'react';
import { Link } from 'react-router-dom';
import men from './assets/men.png';
import jewelery from './assets/Jewelery.png';
import electronics from './assets/electronics.png';
import women from './assets/women.png';
import men1 from './assets/men-1.png';
import men2 from './assets/men-2.png';
import jewelery1 from './assets/Jewelery-1.png';
import jewelery2 from './assets/Jewelery-2.png';
import electronics1 from './assets/electronics-1.png';
import electronics2 from './assets/electronics-2.png';
import women1 from './assets/women-1.png';
import women2 from './assets/women-2.png';

const HomePage = () => {
  return (
    <div className="pt-15">
      <div>
        <h1 className="flex justify-center pt-4 text-xl md:text-2xl font-serif">
          Categories
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 m-4 md:m-10">
          <div className="flex flex-col justify-center items-center">
            <div className="bg-white shadow-md rounded-full transition duration-500 ease-in-out hover:scale-95 ">
              <Link to="/productpage/category/men's clothing">
                <div className="p-2">
                  <img src={men} className="w-48 h-48 object-contain" />
                </div>
              </Link>
            </div>
            <h1 className="text-lg md:text-xl">Men's clothing</h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="bg-white shadow-md rounded-full transition duration-500 ease-in-out hover:scale-95">
              <Link to="/productpage/category/jewelery">
                <div className="p-2">
                  <img src={jewelery} className="w-48 h-48 object-contain" />
                </div>
              </Link>
            </div>
            <h1 className="text-lg md:text-xl">Jewelery</h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="bg-white shadow-md rounded-full transition duration-500 ease-in-out hover:scale-95">
              <Link to="/productpage/category/electronics">
                <div className="p-2">
                  <img src={electronics} className="w-48 h-48 object-contain" />
                </div>
              </Link>
            </div>
            <h1 className="text-lg md:text-xl">Electronics</h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="bg-white shadow-md rounded-full transition duration-500 ease-in-out hover:scale-95">
              <Link to="/productpage/category/women's clothing">
                <div className="p-2">
                  <img src={women} className="w-48 h-48 object-contain" />
                </div>
              </Link>
            </div>
            <h1 className="text-lg md:text-xl">Women's clothing</h1>
          </div>
        </div>
      </div>
      <div className="bg-green-100 p-3">
        <h1 className="flex justify-center text-xl md:text-2xl font-serif pt-4">
          Featured Products
        </h1>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 m-4 md:m-10">
            <div className="flex flex-col justify-center items-center">
              <div className="bg-white shadow-md rounded-md transition duration-500 ease-in-out hover:scale-105 ">
                <div>
                  <img src={men1} className="w-48 h-48 object-contain" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="bg-white shadow-md rounded-md transition duration-500 ease-in-out hover:scale-105 ">
                <div>
                  <img src={men2} className="w-48 h-48 object-contain" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="bg-white shadow-md rounded-md transition duration-500 ease-in-out hover:scale-105 ">
                <div>
                  <img src={jewelery1} className="w-48 h-48 object-contain" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="bg-white shadow-md rounded-md transition duration-500 ease-in-out hover:scale-105 ">
                <div>
                  <img src={jewelery2} className="w-48 h-48 object-contain" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="bg-white shadow-md rounded-md transition duration-500 ease-in-out hover:scale-105 ">
                <div>
                  <img
                    src={electronics1}
                    className="w-48 h-48 object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="bg-white shadow-md rounded-md transition duration-500 ease-in-out hover:scale-105 ">
                <div>
                  <img
                    src={electronics2}
                    className="w-48 h-48 object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="bg-white shadow-md rounded-md transition duration-500 ease-in-out hover:scale-105 ">
                <div>
                  <img src={women1} className="w-48 h-48 object-contain" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="bg-white shadow-md rounded-md transition duration-600 ease-in-out hover:scale-105 ">
                <div>
                  <img src={women2} className="w-48 h-48 object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
