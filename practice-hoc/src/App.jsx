import React, { createContext, useState } from 'react';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';
import StepCounter from './StepCounter';
import MyComonent from './MyComonent';
import withLoading from './withLoading';
import withCounter from './withCounter';
import Navbar from './Navbar';
import Context from './Context';
import AppProvider from './AppProvider';
import Dashboard from './Dashboard';
import Login from './Login';
import Logout from './Logout';
import ThemeSwitcher from './ThemeSwitcher';
import Usereducerrr from './Usereducerrr';
import Usereducerrr2 from './Usereducerrr2';

const EnhancedComponent = withLoading(withCounter(ClickCounter));

export const themeContext = createContext();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [theme, setTheme] = useState('dark');

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  const toggleTheme = () => {
    setTheme((preTheme) => {
      return preTheme === 'dark' ? 'light' : 'dark';
    });
  };

  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    loggedIn: true,
  });

  return (
    <div>
      <Usereducerrr2 />
      {/* <Usereducerrr /> */}
      {/* <ThemeSwitcher /> */}

      {/* <AppProvider>
        <Navbar />
        <Dashboard />
        <Login />
        <Logout />
      </AppProvider> */}
      {/* <themeContext.Provider value={{ theme, user, setUser }}>
        <Navbar />
        <Context />
      </themeContext.Provider> */}

      {/* <ClickCounter name="upendra" />
      <HoverCounter name="hover" /> */}
      {/* <StepCounter step={5} /> */}

      {/* <MyComonent isLoading={isLoading} name="upendra" /> */}

      {/* <EnhancedComponent isLoading={isLoading} step={5} /> */}
    </div>
  );
};

export default App;
