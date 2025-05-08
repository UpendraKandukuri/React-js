import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addToCart } from './Store';

const ProductInfo = () => {
  const { productId } = useParams();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['productinfo'],
    queryFn: async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      return response.json();
    },
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(
      addToCart({
        id: productId,
        quantity: 1,
        price: Math.floor(data.price),
      })
    ),
      navigate('/cart');
  };

  if (isLoading) return <div>Loading products...</div>;
  if (isError) return <div>Error fetching products: {error.message}</div>;

  // console.log(data);
  return (
    <div className="pt-15">
      <h1 className="  text-lg  md:text-2xl flex justify-center m-3">
        Product Information
      </h1>
      <div className="flex justify-center items-center">
        {isLoading && (
          <p className="flex justify-center items-center">
            Loading Products Information...
          </p>
        )}
        {isError && <p>{error.message}</p>}
        <div className="bg-white p-4 rounded-md shadow max-w-md space-y-3 transition duration-500 hover:scale-90">
          <div className="flex justify-center">
            <img src={data.image} className="w-50 h-50 object-contain" />
          </div>
          <h1 className="font-medium">{data.title}</h1>
          <h1>{data.description}</h1>
          <h1 className="font-medium">Rating: {data.rating.rate}</h1>
          <h1 className="font-medium">Price: {Math.floor(data.price)}/-</h1>
          <button
            className="border border-gray-50 bg-green-600 hover:bg-green-800 p-2 rounded-md text-white font-medium"
            onClick={handleClick}
          >
            AddToCart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
