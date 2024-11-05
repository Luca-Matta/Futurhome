import React, { useState } from "react";

function PropertyBathroomsSection({ selectedOptions, setSelectedOptions }) {
  const [bathrooms, setBathrooms] = useState(selectedOptions.bathrooms || "");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const options = [
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5 o più", value: 5 },
  ];

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
          {options.find((option) => option.value === bathrooms)?.label ||
            "Seleziona..."}
        </div>
        {isDropdownOpen && (
          <ul className="dropdown-list open">
            {options.map((option, index) => (
              <li
                className="dropdown-list-item"
                key={index}
                onClick={() => handleBathroomsChange(option.value)}
              >
                <input
                  type="radio"
                  name="bathrooms"
                  checked={bathrooms === option.value}
                  onChange={() => handleBathroomsChange(option.value)}
                />
                <span>{option.label}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default PropertyBathroomsSection;
