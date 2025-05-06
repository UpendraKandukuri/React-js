import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from './Store';

const Counter = () => {
  const state = useSelector((state) => {
    console.log(state);
    return state.counter;
  });

  const dispatch = useDispatch();
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <h1 className="flex justify-center font-bold m-2">
        Count: {state.value}
      </h1>
      <div className="flex flex-col space-y-2">
        <button
          onClick={() => {
            dispatch(increment(1));
          }}
          className="border border-gray-50 bg-blue-500 hover:bg-blue-700 rounded-md py-1 text-white text-xl"
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch(decrement(1));
          }}
          className="border border-gray-50 bg-green-500 hover:bg-green-700 rounded-md py-1 text-white text-xl"
        >
          Decrement
        </button>
        <button
          onClick={() => {
            dispatch(incrementByAmount(10));
          }}
          className="border border-gray-50 bg-orange-500 hover:bg-orange-700 rounded-md p-1 text-white text-xl"
        >
          IncrementByAmount
        </button>
      </div>
    </div>
  );
};

export default Counter;
