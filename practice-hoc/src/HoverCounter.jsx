import React from 'react';
import withCounter from './withCounter';

const HoverCounter = ({ name, count, increment }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1 onMouseOver={increment}>Hover {count} times</h1>
    </div>
  );
};

export default withCounter(HoverCounter);
