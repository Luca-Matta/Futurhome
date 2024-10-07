import React, { useState, useEffect, createContext } from "react";

const AuthContext = createContext();

async function fetchUserData() {
  const response = await fetch("http://your-backend-url/api/user");
  const userData = await response.json();
  return userData;
}

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUserData().then((userData) => setUser(userData));
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };
