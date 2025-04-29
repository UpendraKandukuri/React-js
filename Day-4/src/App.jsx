import React from 'react';
import withSimpleLogging from './withSimpleLogging';
import SimpleCounter from './SimpleCounter';
import { useState } from 'react';
import HocCount from './HocCount';
import ButtonCount from './ButtonCount';
import HoverCount from './HoverCount';

const LoggedCounter = withSimpleLogging(SimpleCounter);

const EnhancedButtonCount = HocCount(ButtonCount);

const EnhancedHoverCount = HocCount(HoverCount);

const App = () => {
  const [show, setShow] = useState(true);
  const [name, setName] = useState('upendra');
  return (
    <div>
      <EnhancedButtonCount name={name} />
      <button onClick={() => setName('kiran')}>change Name</button>
      <EnhancedHoverCount />
      {/* <button onClick={() => setShow((prev) => !prev)}>Toggle Component</button>
      {show && <LoggedCounter username="upendra" />} */}
    </div>
  );
};

export default App;
