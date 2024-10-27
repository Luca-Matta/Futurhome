import React, { useState } from "react";

function PropertyLocation({ selectedOptions, setSelectedOptions }) {
  const [location, setLocation] = useState(selectedOptions.location || []);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLocationChange = (option) => {
    const updatedLocation = location.includes(option)
      ? location.filter((loc) => loc !== option)
      : [...location, option];

    setLocation(updatedLocation);
    setSelectedOptions({
      ...selectedOptions,
      location: updatedLocation,
    });
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
          {location.length > 0 ? location.join(", ") : "Seleziona..."}
        </div>
        {isDropdownOpen && (
          <ul className="dropdown-list open">
            {options.map((option, index) => (
              <li
                className="dropdown-list-item"
                key={index}
                onClick={() => handleLocationChange(option)}
              >
                <input
                  type="checkbox"
                  checked={location.includes(option)}
                  onChange={() => handleLocationChange(option)}
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
