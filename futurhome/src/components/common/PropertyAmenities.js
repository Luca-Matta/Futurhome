import React, { useState } from "react";
import "../../styles/PublishAdModal.css";

function PropertyAmenities({ selectedOptions, setSelectedOptions }) {
  const [extraDependencies, setExtraDependencies] = useState(
    selectedOptions.extra_dependencies || []
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleExtraDependenciesChange = (option) => {
    const newExtraDependencies = extraDependencies.includes(option)
      ? extraDependencies.filter((item) => item !== option)
      : [...extraDependencies, option];
    setExtraDependencies(newExtraDependencies);
    setSelectedOptions({
      ...selectedOptions,
      extra_dependencies: newExtraDependencies,
    });
  };

  const options = [
    "Nessuno",
    "Box singolo/doppio",
    "Posto auto scoperto/coperto",
    "Cantina",
  ];

  return (
    <div className="property-amenities">
      <h2>Pertinenze</h2>
      <div className="dropdown multiple-choice-dropdown">
        <div
          className={`dropdown-header ${isDropdownOpen ? "open" : ""}`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {extraDependencies.length > 0
            ? extraDependencies.join(", ")
            : "Seleziona..."}
        </div>
        {isDropdownOpen && (
          <ul className="dropdown-list open">
            {options.map((option, index) => (
              <li
                className="dropdown-list-item"
                key={index}
                onClick={() => handleExtraDependenciesChange(option)}
              >
                <input
                  type="checkbox"
                  checked={extraDependencies.includes(option)}
                  onChange={() => handleExtraDependenciesChange(option)}
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

export default PropertyAmenities;
