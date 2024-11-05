import React, { useState } from "react";

function PropertyRoomsSection({ selectedOptions, setSelectedOptions }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [bedrooms, setBedrooms] = useState(selectedOptions.bedrooms || 0);

  const options = [
    { label: "Monolocale", value: 1 },
    { label: "Bilocale", value: 2 },
    { label: "Trilocale", value: 3 },
    { label: "Quadrilocale", value: 4 },
    { label: "5 o più locali", value: 5 },
  ];

  const handleBedroomsChange = (value) => {
    setBedrooms(value);
    setSelectedOptions({
      ...selectedOptions,
      bedrooms: value,
    });
    setIsDropdownOpen(false);
  };

  return (
    <div className="property-rooms-section">
      <h2>Numero di locali</h2>
      <div className="dropdown single-choice-dropdown">
        <div
          className={`dropdown-header ${isDropdownOpen ? "open" : ""}`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {options.find((option) => option.value === bedrooms)?.label ||
            "Seleziona..."}
        </div>
        {isDropdownOpen && (
          <ul className="dropdown-list open">
            {options.map((option, index) => (
              <li
                className="dropdown-list-item"
                key={index}
                onClick={() => handleBedroomsChange(option.value)}
              >
                <input
                  type="radio"
                  name="bedrooms"
                  checked={bedrooms === option.value}
                  onChange={() => handleBedroomsChange(option.value)}
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

export default PropertyRoomsSection;
