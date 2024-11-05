import React, { useState } from "react";
import "../../styles/PublishAdModal.css";

function PropertyElevator({ selectedOptions, setSelectedOptions }) {
  const [elevator, setElevator] = useState(selectedOptions.elevator || null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleElevatorChange = (option) => {
    const value = option === "Sì";
    setElevator(value);
    setSelectedOptions({
      ...selectedOptions,
      elevator: value,
    });
    setIsDropdownOpen(false);
  };

  const options = ["Sì", "No"];

  return (
    <div className="property-elevator-section">
      <h2>Ascensore</h2>
      <div className="dropdown single-choice-dropdown">
        <div
          className={`dropdown-header ${isDropdownOpen ? "open" : ""}`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {elevator === null ? "Seleziona..." : elevator ? "Sì" : "No"}
        </div>
        {isDropdownOpen && (
          <ul className="dropdown-list open">
            {options.map((option, index) => (
              <li
                className="dropdown-list-item"
                key={index}
                onClick={() => handleElevatorChange(option)}
              >
                <input
                  type="radio"
                  name="elevator"
                  checked={elevator === (option === "Sì")}
                  onChange={() => handleElevatorChange(option)}
                />
                <span>{option}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default PropertyElevator;
