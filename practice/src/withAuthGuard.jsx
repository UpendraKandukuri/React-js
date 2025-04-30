import React from 'react';

const withAuthGuard = (Component) => {
  let isLoging = true;
  return (props) => {
    if (isLoging) {
      return <Component {...props} />;
    } else {
      return <h1>is not liging</h1>;
    }
  };
};

export default withAuthGuard;
