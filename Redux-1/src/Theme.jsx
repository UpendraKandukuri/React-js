import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './Store';

const Theme = () => {
  const theme = useSelector((state) => {
    console.log(state.theme);
    return state.theme;
  });

  const dispatch = useDispatch();
  return (
    <div
      className={`${
        theme.value === 'light' ? 'bg-white text-black' : 'bg-black text-white'
      } p-3 space-y-2 rounded-md`}
    >
      <h1 className="flex justify-center">Theme: {theme.value}</h1>
      <button
        className="border border-gray-50 bg-blue-500 p-1 rounded-md"
        onClick={() => dispatch(toggleTheme())}
      >
        Toggle-Theme
      </button>
    </div>
  );
};

export default Theme;
