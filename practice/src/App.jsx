import { useState } from 'react';
import './App.css';
import Welcome from './Welcome';
import NameChanger from './NameChanger';
import UpdateName from './UpdateName';
import Parent1 from './Parent1';
import Routing from './Routing';

function App() {
  const [name, updateName] = useState('Upendra');
  return (
    <>
      {/* <Welcome name={name} />
      <NameChanger changeName={updateName}></NameChanger> */}

      {/* <UpdateName></UpdateName> */}
      {/* <Parent1></Parent1> */}

      {/* <Routing></Routing> */}
    </>
  );
}

export default App;
