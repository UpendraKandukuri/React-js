import React, { useContext } from 'react';
import { themeContext } from './App';

const Context = () => {
  const { theme } = useContext(themeContext);
  return (
    <div
      className={
        theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
      }
    >
      <h1>Welcome to web page</h1>
    </div>
  );
};

export default Context;
