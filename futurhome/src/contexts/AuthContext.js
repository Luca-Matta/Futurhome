import React, { useState, createContext } from "react";
import axios from "axios";

const AuthContext = createContext();

async function register(email, password) {
  try {
    const csrfResponse = await axios.get("/api/Auth/csrf-token");
    const csrfToken = csrfResponse.data;
    const response = await axios.post(
      "/api/Auth/register",
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
    console.log("Register response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error response from server:", error.response);
    throw error;
  }
}

async function login(email, password) {
  try {
    const csrfResponse = await axios.get("/api/Auth/csrf-token");
    const csrfToken = csrfResponse.data;
    const response = await axios.post(
      "/api/Auth/login",
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken,
        },
        withCredentials: true,
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error response from server:", error.response);
    throw error;
  }
}

async function getProtectedData() {
  try {
    const response = await axios.get("/api/Auth/protected", {
      withCredentials: true,
    });
    console.log("Protected data fetched:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching protected data:",
      error.response || error.message
    );
    throw error;
  }
}

async function refreshToken() {
  const response = await axios.post(
    "/api/Auth/refresh",
    {},
    { withCredentials: true }
  );
  return response.data;
}

async function logout() {
  const response = await axios.post(
    "/api/Auth/logout",
    {},
    { withCredentials: true }
  );
  return response.data;
}

const createAgency = async (name, location) => {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("Location", location);

  try {
    const response = await fetch("/api/agency/register-agency", {
      method: "POST",
      credentials: "include",
      body: formData,
    });

    const data = await response.json();
    console.log("Success:", data);

    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

const createAd = async (agencyId, price, address, bathrooms, bedrooms) => {
  const formData = new FormData();
  formData.append("price", price);
  formData.append("address", address);
  formData.append("bathrooms", bathrooms);
  formData.append("bedrooms", bedrooms);

  try {
    const response = await fetch(
      `/api/agency/create-listing?agency_id=${agencyId}`,
      {
        method: "POST",
        credentials: "include",
        body: formData,
      }
    );

    const data = await response.json();
    console.log("Success:", data);

    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let [userEmail, setUserEmail] = useState(null);
  const [userData, setUserData] = useState(null);

  const loginUser = async (email, password) => {
    try {
      await login(email, password);
      const userData = await fetchUserData();
      setUser(userData);
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const fetchUserData = async () => {
    const data = await getProtectedData();
    console.log(data);
    setUserData(data);
    setUserEmail(data.email);
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
      value={{
        user,
        isLoggedIn,
        login: loginUser,
        userEmail,
        userData,
        register,
        createAgency,
        createAd,
        handleAuthError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
