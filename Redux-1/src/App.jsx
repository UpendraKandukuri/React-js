import React from 'react';
import Counter from './Counter';
import Theme from './Theme';
import AuthComponent from './AuthComponent';

const App = () => {
  return (
    <div className="flex  min-h-screen justify-center items-center bg-pink-50">
      {/* <Counter /> */}
      {/* <Theme /> */}
      <AuthComponent />
    </div>
  );
};

export default App;
