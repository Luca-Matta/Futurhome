import React, { useState } from "react";

function PropertyGarden({ selectedOptions, setSelectedOptions }) {
  const [garden, setGarden] = useState(selectedOptions.garden);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleGardenChange = (option) => {
    setGarden(option);
    setSelectedOptions({
      ...selectedOptions,
      garden: option,
    });
    setIsDropdownOpen(false);
  };

  const options = ["Nessuno", "Giardino privato", "Giardino condominiale"];

  return (
    <div className="property-garden-section">
      <h2>Giardino</h2>
      <div className="dropdown single-choice-dropdown">
        <div
          className={`dropdown-header ${isDropdownOpen ? "open" : ""}`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {garden || "Seleziona..."}
        </div>
        {isDropdownOpen && (
          <ul className="dropdown-list open">
            {options.map((option, index) => (
              <li
                className="dropdown-list-item"
                key={index}
                onClick={() => handleGardenChange(option)}
              >
                <input
                  type="radio"
                  name="garden"
                  checked={garden === option}
                  onChange={() => handleGardenChange(option)}
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

export default PropertyGarden;
