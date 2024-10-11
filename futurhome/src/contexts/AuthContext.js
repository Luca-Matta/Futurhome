import React, { useState, createContext } from "react";
import axios from "axios";

const AuthContext = createContext();

async function register(email, password) {
  try {
    const csrfResponse = await axios.get(
      "https://futurhome.it/api/Auth/csrf-token"
    );
    const csrfToken = csrfResponse.data;
    const response = await axios.post(
      "https://futurhome.it/api/Auth/register",
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error response from server:", error.response);
    throw error;
  }
}

async function login(email, password) {
  const response = await axios.post(
    "https://www.futurhome.it/api/Auth/login",
    {
      email,
      password,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
}

async function getProtectedData() {
  const response = await axios.get(
    "https://www.futurhome.it/api/Auth/protected",
    {
      withCredentials: true,
    }
  );
  return response.data;
}

async function refreshToken() {
  const response = await axios.post(
    "https://www.futurhome.it/api/Auth/refresh",
    {},
    { withCredentials: true }
  );
  return response.data;
}

async function logout() {
  const response = await axios.post(
    "https://www.futurhome.it/api/Auth/logout",
    {},
    { withCredentials: true }
  );
  return response.data;
}

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = async (email, password) => {
    const userData = await login(email, password);
    setUser(userData);
    setIsLoggedIn(true);
  };

  const handleAuthError = async (requestFunction, ...args) => {
    try {
      return await requestFunction(...args);
    } catch (error) {
      if (error.response.status === 401) {
        const refreshResult = await refreshToken();
        if (refreshResult.success) {
          return await requestFunction(...args);
        } else {
          logout();
        }
      } else {
        throw error;
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isLoggedIn, login, register, handleAuthError }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
