import React from 'react';

const Welcome = ({ name }) => {
  return (
    <div>
      {name === 'Upendra' && <h1>Welcome to React, Upendra!</h1>}
      {name === 'kiran' && <h1>Hello, Kiran!</h1>}
    </div>
  );
};

export default Welcome;
