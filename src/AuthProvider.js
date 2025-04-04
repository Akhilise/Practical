import React from 'react';
import {createContext, useContext, useState} from 'react';

const AuthMake = createContext();

const AuthProvider = ({children}) => {
  const [role, setRole] = useState(null);
  return (
    <AuthMake.Provider value={{role, setRole}}>{children}</AuthMake.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthMake);
};
