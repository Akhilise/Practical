import React from 'react';
import Route from './Route';
import AuthProvider from './AuthProvider';

const App = () => {
  return (
    <AuthProvider>
      <Route />
    </AuthProvider>
  );
};

export default App;
