import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './Store';

const AuthComponent = () => {
  const user = useSelector((state) => {
    console.log(state.auth);
    return state.auth;
  });

  const dispatch = useDispatch();
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h1>{user.isLoggedIn ? 'User Details' : 'Please loging..'}</h1>
      {user.isLoggedIn && (
        <div>
          <h1>Name: {user.user.name}</h1>
          <h1>Email: {user.user.email}</h1>
        </div>
      )}
      <div className="flex justify-between">
        <button
          onClick={() =>
            dispatch(login({ name: 'upendra', email: 'upendra@gmail.com' }))
          }
        >
          Loging
        </button>
        <button
          onClick={() => dispatch(logout())}
          className="border bg-blue-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AuthComponent;
