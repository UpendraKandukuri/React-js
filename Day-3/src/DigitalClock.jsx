import React, { useEffect, useState } from 'react';
import bgimage from './assets/Background.jpg';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());
  console.log(new Date());

  useEffect(() => {
    const IntervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(IntervalId);
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours > 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )} ${meridiem}`;
  }
  function padZero(number) {
    return (number < 10 ? '0' : '') + number;
  }
  return (
    <div
      className="flex justify-center items-center min-h-screen bg-center bg-cover text-white font-bold text-5xl"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <h1>{formatTime()}</h1>
    </div>
  );
};

export default DigitalClock;
