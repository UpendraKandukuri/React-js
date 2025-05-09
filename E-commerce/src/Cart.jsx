import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addAmount,
  addQuantity,
  removeFromCart,
  removeQuantity,
} from './Store';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((state) => {
    // console.log('cart', state.cart);
    return state.cart;
  });

  // console.log('cartItems', cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleAddQuantity = (product) => {
    dispatch(addQuantity(product));
  };

  const handleRemoveQuantity = (product) => {
    dispatch(removeQuantity(product));
  };

  const handlePayment = (Price) => {
    dispatch(addAmount(Price));
    navigate('/payment');
  };

  return (
    <div className="pt-14 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>

      {cartItems.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-md rounded-lg p-4 flex  md:flex-row  flex-col items-center justify-between"
              >
                <div className="flex flex-col items-center space-x-4">
                  <h2 className="text-lg font-semibold">
                    ProductId: {item.id}
                  </h2>
                  <p className="text-gray-600">TotalPrice: {item.price}/-</p>
                  <p className="text-gray-500">Quantity: {item.quantity}</p>
                </div>
                <div className="flex flex-col justify-between md:items-end space-y-2 mt-4 md:mt-0">
                  <div className="flex space-x-2">
                    <button
                      className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition duration-500 cursor-pointer"
                      onClick={() =>
                        handleAddQuantity({
                          id: item.id,
                          price: item.price / item.quantity,
                        })
                      }
                    >
                      +
                    </button>
                    <button
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition duration-500 cursor-pointer"
                      onClick={() =>
                        handleRemoveQuantity({
                          id: item.id,
                          price: item.price / item.quantity,
                        })
                      }
                    >
                      -
                    </button>
                  </div>

                  <button
                    className="text-sm text-red-600 hover:underline cursor-pointer"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    Remove from cart
                  </button>

                  <button
                    className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-500 cursor-pointer"
                    onClick={() =>
                      handlePayment({
                        id: item.id,
                        totalPrice: item.price,
                      })
                    }
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center text-xl ">
          <h2>No Items in the cart...</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
