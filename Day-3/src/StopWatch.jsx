import React, { useEffect, useRef, useState } from 'react';

const StopWatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }
    console.log(intervalIdRef.current);
    console.log(elapsedTime);

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  function start() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
    console.log(startTimeRef.current);
  }

  function stop() {
    setIsRunning(false);
  }

  function reset() {
    setElapsedTime(0);
    setIsRunning(false);
  }

  function formatTime() {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
    milliseconds = String(milliseconds).padStart(2, '0');

    return `${minutes} : ${seconds} : ${milliseconds}`;
  }

  return (
    <div className="flex flex-col items-center bg-fuchsia-500 text-white p-5 rounded-md shadow-2xl space-y-2">
      <div className="font-extrabold text-2xl"> {formatTime()}</div>
      <div className="space-x-2">
        <button
          onClick={start}
          className="bg-green-500 hover:bg-green-600 px-2 py-1 rounded-md text-xl"
        >
          Start
        </button>
        <button
          onClick={stop}
          className="bg-red-500 hover:bg-red-600 px-2 py-1 rounded-md text-xl"
        >
          Stop
        </button>
        <button
          onClick={reset}
          className="bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded-md text-xl"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default StopWatch;
