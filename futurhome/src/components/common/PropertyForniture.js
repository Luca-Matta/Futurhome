import React, { useState } from "react";
import "../../styles/PublishAdModal.css";

function PropertyFurniture({ selectedOptions, setSelectedOptions }) {
  const [furnished, setFurnished] = useState(selectedOptions.furnished || "");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleFurnishedChange = (option) => {
    setFurnished(option);
    setSelectedOptions({
      ...selectedOptions,
      furnished: option,
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
          {furnished || "Seleziona..."}
        </div>
        {isDropdownOpen && (
          <ul className="dropdown-list open">
            {options.map((option, index) => (
              <li
                className="dropdown-list-item"
                key={index}
                onClick={() => handleFurnishedChange(option)}
              >
                <input
                  type="radio"
                  name="furnished"
                  checked={furnished === option}
                  onChange={() => handleFurnishedChange(option)}
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
