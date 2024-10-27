import React, { useState } from "react";
import "../../styles/PublishAdModal.css";

function PropertySpecialFeatures({ selectedOptions, setSelectedOptions }) {
  const [specialFeatures, setSpecialFeatures] = useState(
    selectedOptions.specialFeatures || []
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSpecialFeaturesChange = (option) => {
    const updatedFeatures = specialFeatures.includes(option)
      ? specialFeatures.filter((feature) => feature !== option)
      : [...specialFeatures, option];

    setSpecialFeatures(updatedFeatures);
    setSelectedOptions({
      ...selectedOptions,
      specialFeatures: updatedFeatures,
    });
  };

  const options = [
    "Piscina",
    "Camino",
    "Fotovoltaico",
    "Allarme",
    "Domotica",
    "Portineria",
  ];

  return (
    <div className="property-special-features">
      <h2>Altre caratteristiche speciali</h2>
      <div className="dropdown">
        <div
          className={`dropdown-header ${isDropdownOpen ? "open" : ""}`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {specialFeatures.length > 0
            ? specialFeatures.join(", ")
            : "Seleziona..."}
        </div>
        {isDropdownOpen && (
          <ul className="dropdown-list open">
            {options.map((option, index) => (
              <li
                className="dropdown-list-item"
                key={index}
                onClick={() => handleSpecialFeaturesChange(option)}
              >
                <input
                  type="checkbox"
                  checked={specialFeatures.includes(option)}
                  onChange={() => handleSpecialFeaturesChange(option)}
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

export default PropertySpecialFeatures;
