import React from 'react';

const withTimestamp = (Component) => {
  console.log('✅ withTimestamp called — returns a new EnhancedComponent');

  return (props) => {
    const timestamp = new Date();
    console.log('🔁 EnhancedComponent rendered with props:', props);

    return <Component {...props} date={timestamp} />;
  };
};

export default withTimestamp;
