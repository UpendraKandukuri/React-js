import React, { useState } from 'react';
import Child1 from './Child1';

const Parent1 = () => {
  const [user, setUser] = useState({ name: 'upendra', age: 10 });
  return (
    <div>
      <h1>{user.name}</h1>
      <h2>{user.age}</h2>
      <Child1 getData={setUser}></Child1>
    </div>
  );
};

export default Parent1;
