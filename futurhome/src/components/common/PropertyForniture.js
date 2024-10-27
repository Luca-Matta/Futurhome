import React, { useState } from "react";
import "../../styles/PublishAdModal.css";

function PropertyFurniture({ selectedOptions, setSelectedOptions }) {
  const [furniture, setFurniture] = useState(selectedOptions.furniture || "");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleFurnitureChange = (option) => {
    setFurniture(option);
    setSelectedOptions({
      ...selectedOptions,
      furniture: option,
    });
    setIsDropdownOpen(false);
  };

  const options = ["Arredato", "Parzialmente arredato", "Non arredato"];

  return (
    <div className="property-furniture">
      <h2>Arredamento</h2>
      <div className="dropdown single-choice-dropdown">
        <div
          className={`dropdown-header ${isDropdownOpen ? "open" : ""}`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {furniture || "Seleziona..."}
        </div>
        {isDropdownOpen && (
          <ul className="dropdown-list open">
            {options.map((option, index) => (
              <li
                className="dropdown-list-item"
                key={index}
                onClick={() => handleFurnitureChange(option)}
              >
                <input
                  type="radio"
                  name="furniture"
                  checked={furniture === option}
                  onChange={() => handleFurnitureChange(option)}
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

export default PropertyFurniture;
