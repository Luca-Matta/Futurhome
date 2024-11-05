import React, { useState } from "react";

function PropertyLocation({ selectedOptions, setSelectedOptions }) {
  const [position, setPosition] = useState(selectedOptions.position || "");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handlePositionChange = (option) => {
    setPosition(option);
    setSelectedOptions({
      ...selectedOptions,
      position: option,
    });
    setIsDropdownOpen(false);
  };

  const options = [
    "Centro città",
    "Periferia",
    "Zona residenziale",
    "Campagna",
    "Vista mare / lago / montagna",
    "Vicino a servizi (es. scuole, negozi)",
  ];

  return (
    <div className="property-location">
      <h2>Posizione</h2>
      <div className="dropdown">
        <div
          className={`dropdown-header ${isDropdownOpen ? "open" : ""}`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {position || "Seleziona..."}
        </div>
        {isDropdownOpen && (
          <ul className="dropdown-list open">
            {options.map((option, index) => (
              <li
                className="dropdown-list-item"
                key={index}
                onClick={() => handlePositionChange(option)}
              >
                <input
                  type="radio"
                  name="position"
                  checked={position === option}
                  onChange={() => handlePositionChange(option)}
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

export default PropertyLocation;
