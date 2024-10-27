import React, { useState } from "react";

function PropertyElevator({ selectedOptions, setSelectedOptions }) {
  const [ascensore, setAscensore] = useState(selectedOptions.ascensore || "");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleAscensoreChange = (option) => {
    setAscensore(option);
    setSelectedOptions({
      ...selectedOptions,
      ascensore: option,
    });
    setIsDropdownOpen(false);
  };

  const options = ["Sì", "No"];

  return (
    <div className="property-ascensore-section">
      <h2>Ascensore</h2>
      <div className="dropdown single-choice-dropdown">
        <div
          className={`dropdown-header ${isDropdownOpen ? "open" : ""}`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {ascensore || "Seleziona..."}
        </div>
        {isDropdownOpen && (
          <ul className="dropdown-list open">
            {options.map((option, index) => (
              <li
                className="dropdown-list-item"
                key={index}
                onClick={() => handleAscensoreChange(option)}
              >
                <input
                  type="radio"
                  name="ascensore"
                  checked={ascensore === option}
                  onChange={() => handleAscensoreChange(option)}
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
