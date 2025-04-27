import React, { useRef } from 'react';

const UseRefff = () => {
  const countRef = useRef(10); // number
  const h1Ref = useRef(null); // element

  return (
    <div>
      <h1 ref={h1Ref}>{countRef.current}</h1>
      <button
        onClick={() => {
          countRef.current = countRef.current + 1;
          h1Ref.current.innerText = countRef.current; // important step
          console.log(countRef.current);
        }}
      >
        Click
      </button>
    </div>
  );
};

export default UseRefff;
