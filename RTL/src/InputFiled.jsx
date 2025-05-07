import React, { useState } from 'react';

const InputFiled = () => {
  const [name, setName] = useState('');
  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h4>Typed Name: {name}</h4>
    </div>
  );
};

export default InputFiled;
