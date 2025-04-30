import React, { useEffect } from 'react';
const withLogger = (Component) => {
  return (props) => {
    useEffect(() => {
      console.log('Component mounted');
      return () => {
        console.log('Component unmounted');
      };
    }, []); // Empty dependency array to run only once when the component mounts

    useEffect(() => {
      console.log('Component updated');
    }, [props]); // Runs every time props change

    return <Component {...props} />;
  };
};

export default withLogger;
