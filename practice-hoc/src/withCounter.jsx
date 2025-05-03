import React, { useState } from 'react';

const withCounter = (WrappedComponent) => {
  return (props) => {
    console.log(props);
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount((prev) => {
        return (prev = prev + props.step);
      });
    };

    const reset = () => {
      setCount(0);
    };
    return (
      <WrappedComponent
        count={count}
        increment={increment}
        reset={reset}
        {...props}
      />
    );
  };
};

export default withCounter;
