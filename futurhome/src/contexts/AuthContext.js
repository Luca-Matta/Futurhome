import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

const AuthContext = createContext();

async function register(email, password) {
  const preReleaseKey = "Hya4epmFOarYyVmX7xXlLyLnO0uAv7MB";
  try {
    const csrfResponse = await axios.get(
      `/api/Auth/csrf-token?pre-release-key=${preReleaseKey}`,
      {
        headers: {
          "X-Pre-Release-Key": preReleaseKey,
        },
      }
    );
    const csrfToken = csrfResponse.data;
    const response = await axios.post(
      `/api/Auth/register?pre-release-key=${preReleaseKey}`,
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken,
          "X-Pre-Release-Key": preReleaseKey,
        },
        withCredentials: true,
      }
    );
    console.log("Register response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error response from server:", error.response);
    throw error;
  }
}

async function editUser(username, phoneNumber, profilePicture) {
  const preReleaseKey = "Hya4epmFOarYyVmX7xXlLyLnO0uAv7MB";
  try {
    const csrfResponse = await axios.get(
      `/api/Auth/csrf-token?pre-release-key=${preReleaseKey}`,
      {
        headers: {
          "X-Pre-Release-Key": preReleaseKey,
        },
      }
    );
    const csrfToken = csrfResponse.data;

    const formData = new FormData();
    formData.append("username", username);
    formData.append("phone_number", phoneNumber);
    formData.append("image", profilePicture);

    const response = await axios.post(
      `/api/user/edit-user?pre-release-key=${preReleaseKey}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "X-CSRF-Token": csrfToken,
          "X-Pre-Release-Key": preReleaseKey,
        },
        withCredentials: true,
      }
    );
    console.log("Edit user response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error response from server:", error.response);
    throw error;
  }
}

async function login(email, password) {
  const preReleaseKey = "Hya4epmFOarYyVmX7xXlLyLnO0uAv7MB";
  try {
    const csrfResponse = await axios.get(
      `/api/Auth/csrf-token?pre-release-key=${preReleaseKey}`,
      {
        headers: {
          "X-Pre-Release-Key": preReleaseKey,
        },
      }
    );
    const csrfToken = csrfResponse.data;
    const response = await axios.post(
      `/api/Auth/login?pre-release-key=${preReleaseKey}`,
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken,
          "X-Pre-Release-Key": preReleaseKey,
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

// async function getProtectedData() {
//   try {
//     const response = await axios.get("/api/Auth/protected", {
//       withCredentials: true,
//     });
//     console.log("Protected data fetched:", response.data);
//     return response.data;
//   } catch (error) {
//     console.error(
//       "Error fetching protected data:",
//       error.response || error.message
//     );
//     throw error;
//   }
// }

async function getProtectedData() {
  try {
    const response = await axios.get("/api/user/info", {
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
  const preReleaseKey = "Hya4epmFOarYyVmX7xXlLyLnO0uAv7MB";
  const formData = new FormData();
  formData.append("name", name);
  formData.append("Location", location);

  try {
    const response = await fetch(
      `/api/agency/register-agency?pre-release-key=${preReleaseKey}`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "X-Pre-Release-Key": preReleaseKey,
        },
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

async function getAuthorizedAgencies() {
  const preReleaseKey = "Hya4epmFOarYyVmX7xXlLyLnO0uAv7MB";
  try {
    const response = await fetch(
      `/api/user/authorized-agencies?pre-release-key=${preReleaseKey}`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          "X-Pre-Release-Key": preReleaseKey,
        },
      }
    );

    const data = await response.json();
    console.log("Authorized agencies fetched:", data);
    return data;
  } catch (error) {
    console.error("Error fetching authorized agencies:", error.message);
    throw error;
  }
}

const createAd = async (
  agencyId,
  type,
  condition,
  total_area,
  walkable_area,
  bedrooms,
  bathrooms,
  floor,
  multiple_stories,
  total_floors,
  external_dependencies,
  garden,
  heating,
  energy_consumption,
  year_of_construction,
  price,
  price_status,
  furnished,
  facing,
  extra_dependencies,
  condo_fees,
  elevator,
  accessibility,
  position,
  other_features,
  address
) => {
  const formData = new FormData();
  formData.append("type", type);
  formData.append("condition", condition);
  formData.append("total_area", total_area);
  formData.append("walkable_area", walkable_area);
  formData.append("bedrooms", bedrooms);
  formData.append("bathrooms", bathrooms);
  formData.append("floor", floor);
  formData.append("multiple_stories", multiple_stories);
  formData.append("total_floors", total_floors);
  formData.append(
    "external_dependencies",
    JSON.stringify(external_dependencies)
  );
  formData.append("garden", garden);
  formData.append("heating", JSON.stringify(heating));
  formData.append("energy_consumption", energy_consumption);
  formData.append("year_of_construction", year_of_construction);
  formData.append("price", price);
  formData.append("price_status", price_status);
  formData.append("furnished", furnished);
  formData.append("facing", JSON.stringify(facing));
  formData.append("extra_dependencies", JSON.stringify(extra_dependencies));
  formData.append("condo_fees", condo_fees);
  formData.append("elevator", elevator);
  formData.append("accessibility", accessibility);
  formData.append("position", position);
  formData.append("other_features", JSON.stringify(other_features));
  formData.append("address", address);

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

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const refreshToken = localStorage.getItem("refreshToken");

    if (token) {
      fetch("/api/auth/validate-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.valid) {
            setIsLoggedIn(true);
            setUser(data.user);
          } else if (refreshToken) {
            fetch("/api/auth/refresh-token", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${refreshToken}`,
              },
            })
              .then((response) => response.json())
              .then((data) => {
                if (data.authToken) {
                  localStorage.setItem("authToken", data.authToken);
                  setIsLoggedIn(true);
                  setUser(data.user);
                } else {
                  localStorage.removeItem("authToken");
                  localStorage.removeItem("refreshToken");
                }
              })
              .catch((error) => {
                console.error("Error refreshing token:", error.message);
                localStorage.removeItem("authToken");
                localStorage.removeItem("refreshToken");
              });
          } else {
            localStorage.removeItem("authToken");
          }
        })
        .catch((error) => {
          console.error("Error validating token:", error.message);
          localStorage.removeItem("authToken");
        });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn,
        login: loginUser,
        userEmail,
        userData,
        register,
        editUser,
        createAgency,
        createAd,
        handleAuthError,
        getAuthorizedAgencies,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
