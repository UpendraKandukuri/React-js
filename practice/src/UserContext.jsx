import { createContext } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const user = { name: 'upendra', age: 25 };

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}
