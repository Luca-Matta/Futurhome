import React, { useState } from "react";
import "../../styles/PublishAdModal.css";

function PropertyExposure({ selectedOptions, setSelectedOptions }) {
  const [exposure, setExposure] = useState(selectedOptions.exposure || []);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleExposureChange = (option) => {
    const newExposure = exposure.includes(option)
      ? exposure.filter((item) => item !== option)
      : [...exposure, option];
    setExposure(newExposure);
    setSelectedOptions({
      ...selectedOptions,
      exposure: newExposure,
    });
  };

  const options = [
    "Nord",
    "Sud",
    "Est",
    "Ovest",
    "Doppia o tripla esposizione",
  ];

  return (
    <div className="property-exposure">
      <h2>Esposizione</h2>
      <div className="dropdown multiple-choice-dropdown">
        <div
          className={`dropdown-header ${isDropdownOpen ? "open" : ""}`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {exposure.length > 0 ? exposure.join(", ") : "Seleziona..."}
        </div>
        {isDropdownOpen && (
          <ul className="dropdown-list open">
            {options.map((option, index) => (
              <li
                className="dropdown-list-item"
                key={index}
                onClick={() => handleExposureChange(option)}
              >
                <input
                  type="checkbox"
                  checked={exposure.includes(option)}
                  onChange={() => handleExposureChange(option)}
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

export default PropertyExposure;
