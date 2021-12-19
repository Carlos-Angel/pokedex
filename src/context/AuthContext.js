import React, { useState, createContext } from 'react';

export const AuthContext = createContext({
  auth: undefined,
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(undefined);

  const login = (userDetails) => setAuth(userDetails);
  const logout = () => setAuth(undefined);

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
