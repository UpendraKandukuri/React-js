import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addAmount,
  addQuantity,
  removeFromCart,
  removeQuantity,
  procedToPay,
} from './Store';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((state) => {
    // console.log('cart', state.cart);
    return state.cart;
  });

  const navigate = useNavigate();

  // console.log('cartItems', cartItems);

  const dispatch = useDispatch();

  const handleOnclick = (productId) => {
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
    <div className="pt-14">
      <h1 className="text-2xl font-semibold mb-4 text-center">Cart Items</h1>
      <div className="flex justify-center pt-3">
        {cartItems.length > 0 ? (
          <table className="min-w-fit border border-gray-300 text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border border-gray-300">ProductId</th>
                <th className="py-2 px-4 border border-gray-300">Quantity</th>
                <th className="py-2 px-4 border border-gray-300">TotalPrice</th>
                <th className="py-2 px-4 border border-gray-300">
                  UpdateQuantity
                </th>
                <th className="py-2 px-4 border border-gray-300">Remove</th>
                <th className="py-2 px-4 border border-gray-300">
                  Proced to buy
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems &&
                cartItems.map((item) => {
                  return (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="py-2 px-4 border border-gray-300">
                        {item.id}
                      </td>
                      <td className="py-2 px-4 border border-gray-300">
                        {item.quantity}
                      </td>
                      <td className="py-2 px-4 border border-gray-300">
                        {item.price}
                      </td>
                      <td className="py-2 px-4 border border-gray-300 space-x-2">
                        <button
                          className="border border-gray-50 p-1 bg-green-500 hover:bg-green-700 text-xl text-white rounded-xl cursor-pointer"
                          onClick={() =>
                            handleAddQuantity({
                              id: item.id,
                              price: item.price / item.quantity,
                            })
                          }
                        >
                          Add
                        </button>
                        <button
                          className="border border-gray-50 p-1 bg-red-500 hover:bg-red-700 text-xl text-white rounded-xl cursor-pointer"
                          onClick={() =>
                            handleRemoveQuantity({
                              id: item.id,
                              price: item.price / item.quantity,
                            })
                          }
                        >
                          Remove
                        </button>
                      </td>
                      <td
                        className="py-2 px-4 border border-gray-300 cursor-pointer"
                        onClick={() => handleOnclick(item.id)}
                      >
                        Remove From Cart
                      </td>
                      <td className="py-2 px-4 border border-gray-300 space-x-2 cursor-pointer">
                        <button
                          className="border border-gray-50 p-1"
                          onClick={() =>
                            handlePayment({
                              id: item.id,
                              totalPrice: item.price,
                            })
                          }
                        >
                          Buy
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        ) : (
          <div>
            <h1 className="text-xl">No Items in the cart..</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
