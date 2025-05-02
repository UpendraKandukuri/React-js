import React, { useRef } from 'react';

const UseRef1 = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
    inputRef.current.classList.add('bg-blue-500');
    console.log(inputRef);
    console.log(inputRef.current);
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        placeholder="Type here..."
        className="border"
      />
      <button onClick={handleFocus} className="border m-5">
        Focus Input
      </button>
    </div>
  );
};

export default UseRef1;
