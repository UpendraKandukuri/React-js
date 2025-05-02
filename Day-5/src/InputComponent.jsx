import React, { useState } from 'react';
import useDebounce from './useDebounce';

const InputComponent = () => {
  const [text, setText] = useState('');
  const debouncedText = useDebounce(text, 500);
  return (
    <div className="m-5">
      <input
        type="text"
        placeholder="Type text.."
        onChange={(e) => setText(e.target.value)}
        className="border border-gray-200 p-1 rounded-md focus:outline-none focus:ring-blue-500 focus:ring-2"
      />
      {text && console.log('input field text', text)}
      {debouncedText && console.log('Debounced text', debouncedText)}
    </div>
  );
};

export default InputComponent;
