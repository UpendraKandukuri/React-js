import React, { useContext } from 'react';
import { AppContext } from './AppProvider';

const Navbar = () => {
  const { theme, toggleTheme, user } = useContext(AppContext);
  return (
    <div
      className={`${
        theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
      } space-y-2`}
    >
      <h1>UserName : {user.name}</h1>
      <button onClick={toggleTheme} className="border">
        Toggle Theme
      </button>
    </div>
  );
};

export default Navbar;
