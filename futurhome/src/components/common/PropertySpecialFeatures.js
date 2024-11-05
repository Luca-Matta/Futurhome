import React, { useState } from "react";
import "../../styles/PublishAdModal.css";

function PropertySpecialFeatures({ selectedOptions, setSelectedOptions }) {
  const [otherFeatures, setOtherFeatures] = useState(
    selectedOptions.other_features || []
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOtherFeaturesChange = (option) => {
    const updatedFeatures = otherFeatures.includes(option)
      ? otherFeatures.filter((feature) => feature !== option)
      : [...otherFeatures, option];

    setOtherFeatures(updatedFeatures);
    setSelectedOptions({
      ...selectedOptions,
      other_features: updatedFeatures,
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
          {otherFeatures.length > 0 ? otherFeatures.join(", ") : "Seleziona..."}
        </div>
        {isDropdownOpen && (
          <ul className="dropdown-list open">
            {options.map((option, index) => (
              <li
                className="dropdown-list-item"
                key={index}
                onClick={() => handleOtherFeaturesChange(option)}
              >
                <input
                  type="checkbox"
                  checked={otherFeatures.includes(option)}
                  onChange={() => handleOtherFeaturesChange(option)}
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
