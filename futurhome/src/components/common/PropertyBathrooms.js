import React, { useState } from "react";

function PropertyBathroomsSection({ selectedOptions, setSelectedOptions }) {
  const [bathrooms, setBathrooms] = useState(selectedOptions.bathrooms || "");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const options = ["1", "2", "3", "4", "5 o più"];

  const handleBathroomsChange = (option) => {
    setBathrooms(option);
    setSelectedOptions({
      ...selectedOptions,
      bathrooms: option,
    });
    setIsDropdownOpen(false);
  };

  return (
    <div className="property-bathrooms-section">
      <h2>Numero di bagni</h2>
      <div className="dropdown single-choice-dropdown">
        <div
          className={`dropdown-header ${isDropdownOpen ? "open" : ""}`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {bathrooms || "Seleziona..."}
        </div>
        {isDropdownOpen && (
          <ul className="dropdown-list open">
            {options.map((option, index) => (
              <li
                className="dropdown-list-item"
                key={index}
                onClick={() => handleBathroomsChange(option)}
              >
                <input
                  type="radio"
                  name="bathrooms"
                  checked={bathrooms === option}
                  onChange={() => handleBathroomsChange(option)}
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

export default PropertyBathroomsSection;
