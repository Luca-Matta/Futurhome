import React, { useState } from "react";

function PropertyEnergyClass({ selectedOptions, setSelectedOptions }) {
  const [energyClass, setEnergyClass] = useState(
    selectedOptions.energyClass || ""
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleEnergyClassChange = (option) => {
    setEnergyClass(option);
    setSelectedOptions({
      ...selectedOptions,
      energyClass: option,
    });
    setIsDropdownOpen(false);
  };

  const options = ["A4", "A3", "A2", "A1", "B", "C", "D", "E", "F", "G"];

  return (
    <div className="property-energy-class">
      <h2>Classe energetica</h2>
      <div className="dropdown single-choice-dropdown">
        <div
          className={`dropdown-header ${isDropdownOpen ? "open" : ""}`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {energyClass || "Seleziona..."}
        </div>
        {isDropdownOpen && (
          <ul className="dropdown-list open">
            {options.map((option, index) => (
              <li
                className="dropdown-list-item"
                key={index}
                onClick={() => handleEnergyClassChange(option)}
              >
                <input
                  type="radio"
                  name="energyClass"
                  checked={energyClass === option}
                  onChange={() => handleEnergyClassChange(option)}
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

export default PropertyEnergyClass;
