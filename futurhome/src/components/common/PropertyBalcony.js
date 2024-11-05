import React, { useState } from "react";

function PropertyBalcony({ selectedOptions, setSelectedOptions }) {
  const [externalDependencies, setExternalDependencies] = useState(
    selectedOptions.external_dependencies || []
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleExternalDependenciesChange = (option) => {
    const newExternalDependencies = externalDependencies.includes(option)
      ? externalDependencies.filter((item) => item !== option)
      : [...externalDependencies, option];
    setExternalDependencies(newExternalDependencies);
    setSelectedOptions({
      ...selectedOptions,
      external_dependencies: newExternalDependencies,
    });
  };

  const options = [
    "Nessuno",
    "Con balcone",
    "Con terrazzo",
    "Più balconi/terrazzi",
  ];

  return (
    <div className="property-balcony">
      <h2>Balcone | Terrazzo</h2>
      <div className="dropdown multiple-choice-dropdown">
        <div
          className={`dropdown-header ${isDropdownOpen ? "open" : ""}`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {externalDependencies.length > 0
            ? externalDependencies.join(", ")
            : "Seleziona..."}
        </div>
        {isDropdownOpen && (
          <ul className="dropdown-list open">
            {options.map((option, index) => (
              <li
                className="dropdown-list-item"
                key={index}
                onClick={() => handleExternalDependenciesChange(option)}
              >
                <input
                  type="checkbox"
                  checked={externalDependencies.includes(option)}
                  onChange={() => handleExternalDependenciesChange(option)}
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

export default PropertyBalcony;
