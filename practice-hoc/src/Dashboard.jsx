import React, { useContext } from 'react';
import { AppContext } from './AppProvider';

const Dashboard = () => {
  const { user } = useContext(AppContext);
  return (
    <div>
      {user.loggedIn && (
        <div>
          <h1>{user.name}</h1>
          <h2>{user.email}</h2>
        </div>
      )}
      {!user.loggedIn && <p>Please Login..</p>}
    </div>
  );
};

export default Dashboard;
