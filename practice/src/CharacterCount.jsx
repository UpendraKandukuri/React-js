import React, { useState } from 'react';

const CharacterCount = () => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1>hiii</h1>
      <textarea
        value={text}
        onChange={handleChange}
        maxLength={150}
        rows={5}
        cols={30}
        placeholder="Type your message here..."
      />
      <p>Characters: {text.length}/150</p>
    </div>
  );
};

export default CharacterCount;
