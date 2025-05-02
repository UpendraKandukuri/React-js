import { createContext } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const user = {
    isLogin: true,
    id: 1,
  };

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}
