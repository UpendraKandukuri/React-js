import React, { useRef } from 'react';

const Usereff2 = () => {
  const number = useRef(0);
  const count = useRef(null);

  const handleClick = () => {
    number.current = number.current + 1;

    count.current.innerText = `Number: ${number.current}`;
  };
  return (
    <div>
      <h1 ref={count}>Number: {number.current}</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Usereff2;
