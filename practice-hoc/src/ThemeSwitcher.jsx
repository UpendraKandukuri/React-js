import React from 'react';
import useLocalStorage from './useLocalStorage';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div
      className={
        theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'
      }
    >
      <h1>Current theme: {theme}</h1>
      <button onClick={toggleTheme} className="border p-2">
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeSwitcher;
