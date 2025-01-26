import React, { createContext, useState, useContext } from "react";

// Create a context for the username state
const UserContext = createContext();

export function UserProvider({ children }) {
  const [username, setUsername] = useState("");

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
}

// Custom hook to use the username context
export function useUser() {
  return useContext(UserContext);
}
