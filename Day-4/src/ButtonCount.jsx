import React from 'react';

const ButtonCount = ({ number, incrementNumber, name }) => {
  return (
    <div>
      <h1>Count: {number}</h1>
      <button onClick={incrementNumber}>Increment Count</button>
      <h1>Name: {name}</h1>
    </div>
  );
};

export default ButtonCount;
