import { isPending } from '@reduxjs/toolkit';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductsPage = () => {
  const { category } = useParams();
  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      return response.json();
    },
  });
  //   console.log(category);
  // console.log(data);

  // console.log(isLoading, isFetching);

  const products = data ? [...data].sort((a, b) => a.price - b.price) : [];

  return (
    <div className="pt-15">
      <h1 className="flex justify-center m-5 text-xl md:text-2xl font-serif">
        Products page
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 p-2 gap-6 mx-10">
        {isLoading && (
          <div className="flex justify-center items-center col-span-full h-40">
            <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
            <h1 className="text-xl">Loading...</h1>
          </div>
        )}
        {isError && <p className="text-xl">{error.message}</p>}
        {products &&
          products.map((product) => {
            return (
              <div
                className=" flex flex-col justify-between bg-white p-3 shadow-md space-y-4 transform duration-500 hover:-translate-y-2"
                key={product.id}
              >
                <div className="flex justify-center items-center">
                  <img src={product.image} className="w-50 h-50" />
                </div>
                <h1 className="text-xl">{product.title}</h1>
                <h1 className="text-xl">
                  Price: {Math.floor(product.price)}/-
                </h1>
                <button className="border border-gray-50 bg-blue-500 hover:bg-blue-700  transition duration-500 p-2 rounded-md text-white w-fit">
                  <Link to={`/product/${product.id}`}>Quick Look </Link>
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductsPage;
