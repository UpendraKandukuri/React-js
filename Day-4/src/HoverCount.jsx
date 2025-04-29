import React from 'react';

const HoverCount = ({ number, incrementNumber }) => {
  return <h2 onMouseOver={incrementNumber}>Hovered {number} times</h2>;
};

export default HoverCount;
