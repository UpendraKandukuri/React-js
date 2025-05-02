import React from 'react';
import UserSpecificData from './UserSpecificData';
import { AuthProvider } from './AuthContext';
import HocComponent from './HocComponent';
import InputComponent from './InputComponent';

const EnhancedUserSpecificData = HocComponent(UserSpecificData);

const App = () => {
  const state = false;
  return (
    <div>
      {/* <AuthProvider>
        {state && <EnhancedUserSpecificData name="upendra" />}
      </AuthProvider> */}

      <InputComponent />
    </div>
  );
};

export default App;
