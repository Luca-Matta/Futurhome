import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";
import OnboardingModal from "../common/OnboardingModal.js";

function SignupForm({
  openLogin,
  modalContent,
  closeModal,
  setShowOnboarding,
  showOnboarding,
}) {
  const { register } = useContext(AuthContext);
  const [selectedOption, setSelectedOption] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [formData, setFormData] = useState({});

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const selectOption = (event) => {
    setSelectedOption(event.currentTarget.innerText.trim());
    setFormData({
      ...formData,
      type: event.currentTarget.dataset.value,
    });
    setDropdownOpen(false);
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await register(formData.email, formData.password);
      console.log(response.data);

      closeModal();
      setShowOnboarding(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="signup-form">
      <h1>REGISTRATI</h1>
      <div className="switch-buttons-container">
        <button
          className={modalContent === "login" ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            openLogin();
          }}
        >
          Accedi
        </button>
        <button
          className={modalContent === "signup" ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Registrati
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        {/* <div className="custom-select-wrapper">
          <div
            className="custom-select"
            onClick={toggleDropdown}
          >
            <div
              className="custom-select__trigger"
              onClick={toggleDropdown}
            >
              <FontAwesomeIcon
                icon={faInfoCircle}
                className="fa-info-circle"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
              {selectedOption || "Scegli la tua categoria"}
              {isHovered && (
                <div className="tooltip">{getExplanation(selectedOption)}</div>
              )}
              <span className="arrow"></span>
            </div>
            <div className={`custom-options ${dropdownOpen ? "show" : ""}`}>
              <div
                className="custom-option"
                data-value="privato"
                onClick={selectOption}
              >
                Sono un privato
              </div>
              <div
                className="custom-option"
                data-value="agenzia"
                onClick={selectOption}
              >
                Sono un'agenzia
              </div>
              <div
                className="custom-option"
                data-value="professionista"
                onClick={selectOption}
              >
                Sono un professionista
              </div>
            </div>
          </div>
        </div> */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleInputChange}
        />

        <button
          className="submit-button"
          type="submit"
        >
          Registrati
        </button>
      </form>
      <p>
        Hai già un account?{" "}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            openLogin();
          }}
        >
          Accedi
        </a>
      </p>

      {showOnboarding && (
        <OnboardingModal
          closeModal={() => setShowOnboarding(false)}
          handleOnboardingComplete={(data) => console.log(data)}
        />
      )}
    </div>
  );
}

export default SignupForm;
