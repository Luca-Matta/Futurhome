import React, { useState } from "react";

function PropertyEnergyClass({ selectedOptions, setSelectedOptions }) {
  const [energyConsumption, setEnergyConsumption] = useState(
    selectedOptions.energy_consumption || ""
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleEnergyConsumptionChange = (option) => {
    setEnergyConsumption(option);
    setSelectedOptions({
      ...selectedOptions,
      energy_consumption: option,
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
          {energyConsumption || "Seleziona..."}
        </div>
        {isDropdownOpen && (
          <ul className="dropdown-list open">
            {options.map((option, index) => (
              <li
                className="dropdown-list-item"
                key={index}
                onClick={() => handleEnergyConsumptionChange(option)}
              >
                <input
                  type="radio"
                  name="energyConsumption"
                  checked={energyConsumption === option}
                  onChange={() => handleEnergyConsumptionChange(option)}
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
