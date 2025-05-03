import React from 'react';

const withLoading = (WrappedComponent) => {
  return (props) => {
    if (props.isLoading) {
      return <div>Loading...</div>;
    }
    return <WrappedComponent {...props} />;
  };
};

export default withLoading;
