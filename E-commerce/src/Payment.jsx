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
    <div className="p-14">
      <h1 className="text-xl font-semibold mb-4">Payment</h1>
      <div className="space-y-4">
        {totalPrice.length > 0 && (
          <div className="space-y-3">
            <h1 className="text-lg">
              Total Price: ₹{totalPrice[0].totalPrice}
            </h1>
            <input
              type="number"
              value={amount}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 w-1/2"
              placeholder="Enter payment amount"
            />
            <br />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={handleClick}
            >
              Pay
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;
