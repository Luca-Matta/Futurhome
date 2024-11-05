import React, { useState } from "react";
import "../../styles/PublishAdModal.css";

function PropertyExposure({ selectedOptions, setSelectedOptions }) {
  const [facing, setFacing] = useState(selectedOptions.facing || []);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleFacingChange = (option) => {
    const newFacing = facing.includes(option)
      ? facing.filter((item) => item !== option)
      : [...facing, option];
    setFacing(newFacing);
    setSelectedOptions({
      ...selectedOptions,
      facing: newFacing,
    });
  };

  const options = [
    "Nord",
    "Sud",
    "Est",
    "Ovest",
    "Doppia o tripla esposizione",
  ];

  return (
    <div className="property-exposure">
      <h2>Esposizione</h2>
      <div className="dropdown multiple-choice-dropdown">
        <div
          className={`dropdown-header ${isDropdownOpen ? "open" : ""}`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {facing.length > 0 ? facing.join(", ") : "Seleziona..."}
        </div>
        {isDropdownOpen && (
          <ul className="dropdown-list open">
            {options.map((option, index) => (
              <li
                className="dropdown-list-item"
                key={index}
                onClick={() => handleFacingChange(option)}
              >
                <input
                  type="checkbox"
                  checked={facing.includes(option)}
                  onChange={() => handleFacingChange(option)}
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

export default PropertyExposure;
