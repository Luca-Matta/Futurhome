import React, { useState } from "react";
import "../../styles/PublishAdModal.css";

function PropertyAccessibility({ selectedOptions, setSelectedOptions }) {
  const [accessibility, setAccessibility] = useState(
    selectedOptions.accessibility || ""
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleAccessibilityChange = (option) => {
    setAccessibility(option);
    setSelectedOptions({
      ...selectedOptions,
      accessibility: option,
    });
    setIsDropdownOpen(false);
  };

  const options = ["Adatto a persone con mobilità ridotta", "Non adatto"];

  return (
    <div className="property-accessibility">
      <h2>Accessibilità</h2>
      <div className="dropdown single-choice-dropdown">
        <div
          className={`dropdown-header ${isDropdownOpen ? "open" : ""}`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {accessibility ? accessibility : "Seleziona..."}
        </div>
        {isDropdownOpen && (
          <ul className="dropdown-list open">
            {options.map((option, index) => (
              <li
                className="dropdown-list-item"
                key={index}
                onClick={() => handleAccessibilityChange(option)}
              >
                <input
                  type="radio"
                  name="accessibility"
                  checked={accessibility === option}
                  onChange={() => handleAccessibilityChange(option)}
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

export default PropertyAccessibility;
