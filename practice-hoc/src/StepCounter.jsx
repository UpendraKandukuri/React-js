import React from 'react';
import withCounter from './withCounter';

const StepCounter = ({ count, increment, reset }) => {
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default StepCounter;
