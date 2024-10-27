import React, { useState } from "react";

function PropertyConditionSection({ selectedOptions, setSelectedOptions }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [condition, setCondition] = useState(selectedOptions.condition || "");

  const options = [
    "Nuovo",
    "Ottimo",
    "Buono",
    "Da ristrutturare",
    "In costruzione",
  ];

  const handleConditionChange = (option) => {
    setCondition(option);
    setSelectedOptions({
      ...selectedOptions,
      condition: option,
    });
    setIsDropdownOpen(false);
  };

  return (
    <div className="property-condition-section">
      <h2>Condizione dell'immobile</h2>
      <div className="dropdown single-choice-dropdown">
        <div
          className={`dropdown-header ${isDropdownOpen ? "open" : ""}`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {condition || "Seleziona..."}
        </div>
        {isDropdownOpen && (
          <ul className="dropdown-list open">
            {options.map((option, index) => (
              <li
                className="dropdown-list-item"
                key={index}
                onClick={() => handleConditionChange(option)}
              >
                <input
                  type="radio"
                  name="condition"
                  checked={condition === option}
                  onChange={() => handleConditionChange(option)}
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

export default PropertyConditionSection;
