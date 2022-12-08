import React, { useState, createContext, useEffect } from 'react';
import { addPokeUser, getPokeUser, removePokeUser } from '../api/auth';

export const AuthContext = createContext({
  auth: undefined,
  login: (user) => {},
  logout: () => {},
  register: (user) => {},
});

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(undefined);

  useEffect(() => {
    getPokeUser()
      .then((user) => setAuth(user))
      .catch(() => setAuth(undefined));
  }, []);

  const register = async (userDetails) => {
    await addPokeUser(userDetails);
    setAuth(userDetails);
  };
  const logout = async () => setAuth(undefined);

  const login = async () => {
    const user = await getPokeUser();
    setAuth(user);
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}
