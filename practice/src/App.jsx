import { createContext, useState } from 'react';
import './App.css';
import Welcome from './Welcome';
import NameChanger from './NameChanger';
import UpdateName from './UpdateName';
import Parent1 from './Parent1';
import Routing from './Routing';
import UseReducerr from './UseReducerr';
import UseContextt from './UseContextt';
import ToggleButton from './ToggleButton';
import CharacterCount from './CharacterCount';
import withTimestamp from './withTimestamp';
import MyComponent from './MyComponent';
import withAuthGuard from './withAuthGuard';

export const context = createContext();

const EnhancedComponent = withAuthGuard(MyComponent); // <--- this runs ONCE

function App() {
  const [name, setName] = useState('upendra');
  return (
    <div>
      <EnhancedComponent />
      {/* <EnhancedComponent username={name} />
      <button onClick={() => setName('kiran')}>Click</button> */}
    </div>
  );
}

export default App;
