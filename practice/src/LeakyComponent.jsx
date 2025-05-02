// LeakyComponent.js
import React, { useState, useEffect } from 'react';

const LeakyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('Interval running...', count);
      setCount((prev) => prev + 1);
    }, 1000);
  }, []); // 🚫 No cleanup

  return <div>Count: {count}</div>;
};

export default LeakyComponent;
