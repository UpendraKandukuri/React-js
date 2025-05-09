import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { emptyPrice, procedToPay, removeFromCart } from './Store';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const totalPrice = useSelector((state) => {
    console.log('total price', state.payment);
    return state.payment;
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [amount, setAmount] = useState('');

  const handleChange = (e) => {
    setAmount(Number(e.target.value));
  };

  const handleClick = () => {
    if (amount === totalPrice[0].totalPrice) {
      alert('Payment success...');
      dispatch(procedToPay());
      dispatch(emptyPrice());
      dispatch(removeFromCart(totalPrice[0].id));
      setAmount('');
      navigate('/');
    } else {
      alert('Payment failed: Enter the exact amount.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Payment Page</h1>

        {totalPrice.length > 0 && (
          <div className="space-y-4">
            <div className="text-lg font-medium text-gray-700">
              Total Price:{' '}
              <span className="text-black">{totalPrice[0].totalPrice}/-</span>
            </div>

            <input
              type="number"
              value={amount}
              onChange={handleChange}
              placeholder="Enter payment amount"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              className="w-fit px-4 flex justify-center cursor-pointer bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-200"
              onClick={handleClick}
            >
              Pay Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;
