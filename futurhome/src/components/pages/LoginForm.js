import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import "../../styles/LoginForm.css";
import "../../styles/SignupForm.css";

function LoginForm({ openSignup, modalContent }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userData = await login(email, password);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="login-form">
      <h1>ACCEDI</h1>
      <div className="switch-buttons-container">
        <button
          className={modalContent === "login" ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Accedi
        </button>
        <button
          className={modalContent === "signup" ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            openSignup();
          }}
        >
          Registrati
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <a
          className="forgot-password"
          href="#"
        >
          Password dimenticata?
        </a>
        <button
          className="submit-button"
          type="submit"
        >
          Accedi
        </button>
      </form>
      <p>
        Non hai un account?{" "}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            openSignup();
          }}
        >
          Registrati
        </a>
      </p>
    </div>
  );
}

export default LoginForm;
