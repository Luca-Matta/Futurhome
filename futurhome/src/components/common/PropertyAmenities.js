import React, { useState } from "react";
import "../../styles/PublishAdModal.css";

function PropertyAmenities({ selectedOptions, setSelectedOptions }) {
  const [amenities, setAmenities] = useState(selectedOptions.amenities || []);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleAmenitiesChange = (option) => {
    const newAmenities = amenities.includes(option)
      ? amenities.filter((item) => item !== option)
      : [...amenities, option];
    setAmenities(newAmenities);
    setSelectedOptions({
      ...selectedOptions,
      amenities: newAmenities,
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
          {amenities.length > 0 ? amenities.join(", ") : "Seleziona..."}
        </div>
        {isDropdownOpen && (
          <ul className="dropdown-list open">
            {options.map((option, index) => (
              <li
                className="dropdown-list-item"
                key={index}
                onClick={() => handleAmenitiesChange(option)}
              >
                <input
                  type="checkbox"
                  checked={amenities.includes(option)}
                  onChange={() => handleAmenitiesChange(option)}
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
