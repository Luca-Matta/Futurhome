import React, { useState } from "react";
import "../../styles/PublishAdModal.css";

function PropertyHeating({ selectedOptions, setSelectedOptions }) {
  const [heating, setHeating] = useState(selectedOptions.heating || []);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleHeatingChange = (option) => {
    const newHeating = heating.includes(option)
      ? heating.filter((item) => item !== option)
      : [...heating, option];
    setHeating(newHeating);
    setSelectedOptions({
      ...selectedOptions,
      heating: newHeating,
    });
  };

  const options = [
    "Autonomo",
    "Centralizzato",
    "A pavimento",
    "Senza riscaldamento",
    "Pompa di calore",
    "Stufa a pellet",
  ];

  return (
    <div className="property-heating">
      <h2>Riscaldamento</h2>
      <div className="dropdown multiple-choice-dropdown">
        <div
          className={`dropdown-header ${isDropdownOpen ? "open" : ""}`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {heating.length > 0 ? heating.join(", ") : "Seleziona..."}
        </div>
        {isDropdownOpen && (
          <ul className="dropdown-list open">
            {options.map((option, index) => (
              <li
                className="dropdown-list-item"
                key={index}
                onClick={() => handleHeatingChange(option)}
              >
                <input
                  type="checkbox"
                  checked={heating.includes(option)}
                  onChange={() => handleHeatingChange(option)}
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

export default PropertyHeating;
