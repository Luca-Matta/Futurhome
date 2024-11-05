import React, { useState } from "react";

function PropertyTypeSection({ selectedOptions, setSelectedOptions }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const options = [
    "Appartamento",
    "Villa",
    "Villetta a schiera",
    "Casa indipendente",
    "Casa bifamiliare",
    "Attico/Mansarda",
    "Monolocale/Bilocale",
    "Loft/Open space",
    "Rustico/Casale",
    "Ufficio",
    "Locale commerciale",
    "Capannone industriale",
    "Terreno (edificabile o agricolo)",
  ];

  const handleTypeChange = (option) => {
    setSelectedOptions({
      ...selectedOptions,
      type: option,
    });
    setIsDropdownOpen(false);
  };

  return (
    <div className="property-type-section">
      <h2>Tipologia dell'immobile</h2>
      <div className="dropdown single-choice-dropdown">
        <div
          className={`dropdown-header ${isDropdownOpen ? "open" : ""}`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {selectedOptions.type || "Seleziona..."}
        </div>
        {isDropdownOpen && (
          <ul className="dropdown-list open">
            {options.map((option, index) => (
              <li
                className="dropdown-list-item"
                key={index}
                onClick={() => handleTypeChange(option)}
              >
                <input
                  type="radio"
                  name="propertyType"
                  checked={selectedOptions.type === option}
                  onChange={() => handleTypeChange(option)}
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

export default PropertyTypeSection;
