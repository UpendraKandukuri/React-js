import React, { useState } from 'react';

const UpdateName = () => {
  const [name, updateName] = useState('Upendra');
  const [inputValue, setInputValue] = useState('');

  const handleClick = () => {
    updateName(name + ' ' + inputValue);
    // updateName(inputValue);
    setInputValue('');
  };

  return (
    <div>
      <h1>{name}</h1>
      <form>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="button" onClick={handleClick}>
          Add to Name
        </button>
      </form>
    </div>
  );
};

export default UpdateName;
