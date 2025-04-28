import React from 'react';

const NameChanger = ({ changeName }) => {
  return (
    <div>
      <button onClick={() => changeName('kiran')}>Click</button>
    </div>
  );
};

export default NameChanger;
