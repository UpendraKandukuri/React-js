import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  const [user, setUser] = useState({
    name: 'Upendra',
    email: 'Upendra@gmail.com',
    loggedIn: true,
  });

  const toggleTheme = () => {
    setTheme((preV) => {
      return preV === 'dark' ? 'light' : 'dark';
    });
  };

  const Login = () => {
    setUser((preV) => {
      return { ...preV, loggedIn: true };
    });
  };

  const Logout = () => {
    setUser((preV) => {
      return { ...preV, loggedIn: false };
    });
  };

  return (
    <AppContext.Provider value={{ theme, toggleTheme, user, Logout, Login }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
