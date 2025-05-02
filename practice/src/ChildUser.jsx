import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const ChildUser = () => {
  const { user } = useContext(UserContext);
  const { name, age } = user;
  return (
    <div>
      <h1>Name: {name}</h1>
    </div>
  );
};

export default ChildUser;
