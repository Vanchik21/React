import React from 'react';
import ProtectedComponent from './ProtectedComponent';

const App = () => {
  return (
    <div>
      <h1>Permission-Based Application</h1>
      <ProtectedComponent />
    </div>
  );
};

export default App;
