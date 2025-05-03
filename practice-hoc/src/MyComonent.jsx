import React from 'react';
import withLoading from './withLoading';

const MyComonent = ({ name }) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Good Moring</h1>
    </div>
  );
};

export default MyComonent;
