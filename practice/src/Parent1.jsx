import React, { useState } from 'react';
import Child1 from './Child1';

const Parent1 = () => {
  const [userData, setUserData] = useState({ name: '', age: '' });

  const getDataFromChild = (data) => {
    setUserData(data);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <h2>Name: {userData.name}</h2>
      <h2>Age: {userData.age}</h2>
      <Child1 getData={getDataFromChild} />
    </div>
  );
};

export default Parent1;
