import React from 'react';
import withCounter from './withCounter';

const ClickCounter = ({ count, increment, name }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default withCounter(ClickCounter);
