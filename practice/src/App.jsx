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
import { ThemeProvider } from './ThemeContext';
import ThemeToggler from './ThemeToggler';
import { UserProvider } from './UserContext';
import ChildUser from './ChildUser';
import LeakyComponent from './LeakyComponent';
import UseRef1 from './UseRef1';
import Usereff2 from './Usereff2';
import Timer from './Timer';
import ArrayOfObjects from './ArrayOfObjects';

export const context = createContext();

const EnhancedComponent = withAuthGuard(MyComponent); // <--- this runs ONCE

function App() {
  const [name, setName] = useState('upendra');
  const [show, setShow] = useState(true);
  return (
    <div>
      {/* <EnhancedComponent /> */}
      {/* <EnhancedComponent username={name} />
      <button onClick={() => setName('kiran')}>Click</button> */}
      {/* <ThemeProvider>
        <ThemeToggler></ThemeToggler>
      </ThemeProvider> */}
      {/* <UserProvider>
        <ChildUser />
      </UserProvider> */}
      {/* <div>
        <button onClick={() => setShow(!show)}>
          {show ? 'Unmount' : 'Mount'} LeakyComponent
        </button>
        {show && <LeakyComponent />}
      </div> */}
      {/* <UseRef1 /> */}
      {/* <Usereff2 /> */}
      {/* <Timer /> */}
      <ArrayOfObjects />
    </div>
  );
}

export default App;
