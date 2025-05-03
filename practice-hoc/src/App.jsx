import React, { useState } from 'react';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';
import StepCounter from './StepCounter';
import MyComonent from './MyComonent';
import withLoading from './withLoading';
import withCounter from './withCounter';

const EnhancedComponent = withLoading(withCounter(ClickCounter));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <div>
      {/* <ClickCounter name="upendra" />
      <HoverCounter name="hover" /> */}
      {/* <StepCounter step={5} /> */}

      {/* <MyComonent isLoading={isLoading} name="upendra" /> */}

      <EnhancedComponent isLoading={isLoading} step={5} />
    </div>
  );
};

export default App;
