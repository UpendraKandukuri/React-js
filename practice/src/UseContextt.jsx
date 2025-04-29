import React, { useContext } from 'react';
import { context } from './App';

const UseContextt = () => {
  const { user, setUser } = useContext(context);
  const { name, email, age } = user;

  const handleChange = (e) => {
    setUser((preUser) => {
      const { name, value } = e.target;
      return { ...preUser, [name]: value };
    });
  };
  return (
    <div>
      <h1>{name}</h1>
      <input type="text" name="name" onChange={handleChange} />
      <h1>{email}</h1>
      <input type="text" name="email" onChange={handleChange} />
      <h1>{age}</h1>
      <input type="text" name="age" onChange={handleChange} />
    </div>
  );
};

export default UseContextt;
