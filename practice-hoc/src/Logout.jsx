import React, { useContext } from 'react';
import { AppContext } from './AppProvider';

const Logout = () => {
  const { Logout } = useContext(AppContext);
  return (
    <div>
      <button onClick={Logout} className="border m-2 p-1">
        Logout
      </button>
    </div>
  );
};

export default Logout;
