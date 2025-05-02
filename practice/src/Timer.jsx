import React, { useRef, useState } from 'react';

const Timer = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null); // step 1: create a ref to store interval ID

  const startTimer = () => {
    if (intervalRef.current !== null) return; // prevent multiple intervals

    // step 2: set interval and save its ID in the ref
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  };

  console.log(intervalRef.current);

  const stopTimer = () => {
    clearInterval(intervalRef.current); // step 3: clear interval using the ID in the ref
    intervalRef.current = null; // reset the ref
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={startTimer} className="border m-3">
        Start
      </button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
};

export default Timer;
