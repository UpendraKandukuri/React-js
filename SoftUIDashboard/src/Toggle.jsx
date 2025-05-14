import React from 'react';

const Toggle = ({ label, defaultChecked }) => {
  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only peer"
          defaultChecked={defaultChecked}
        />
        <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-blue-600 transition duration-300"></div>
        <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full peer-checked:translate-x-5 transition-transform duration-300"></div>
      </div>
      <span className="ml-3 text-sm text-gray-700">{label}</span>
    </label>
  );
};

export default Toggle;
