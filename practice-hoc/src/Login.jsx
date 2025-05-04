import React, { useContext } from 'react';
import { AppContext } from './AppProvider';

const Login = () => {
  const { Login } = useContext(AppContext);
  return (
    <div>
      <button onClick={Login} className="border p-1">
        Login
      </button>
    </div>
  );
};

export default Login;
