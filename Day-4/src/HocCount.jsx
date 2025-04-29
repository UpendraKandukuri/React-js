import React, { useState, useEffect } from 'react';

const HocCount = (Component) => {
  return (props) => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount((prevCount) => prevCount + 1);
    };

    useEffect(() => {
      console.log(`[${Component.name}] Mounted`);
      return () => {
        console.log(`[${Component.name}] Unmounted`);
      };
    }, []);

    useEffect(() => {
      console.log(`[${Component.name}] Rendered with count: ${count}`);
    });

    useEffect(() => {
      console.log(`[${Component.name}] Props changed:`, props);
    }, [props]);

    return (
      <Component number={count} incrementNumber={incrementCount} {...props} />
    );
  };
};

export default HocCount;
