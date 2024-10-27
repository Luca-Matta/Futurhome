import React, { useState } from "react";

function PropertyBalcony({ selectedOptions, setSelectedOptions }) {
  const [balcony, setBalcony] = useState(selectedOptions.balcony || []);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleBalconyChange = (option) => {
    const newBalcony = balcony.includes(option)
      ? balcony.filter((item) => item !== option)
      : [...balcony, option];
    setBalcony(newBalcony);
    setSelectedOptions({
      ...selectedOptions,
      balcony: newBalcony,
    });
  };

  const options = [
    "Nessuno",
    "Con balcone",
    "Con terrazzo",
    "Più balconi/terrazzi",
  ];

  return (
    <div className="property-balcony">
      <h2>Balcone | Terrazzo</h2>
      <div className="dropdown multiple-choice-dropdown">
        <div
          className={`dropdown-header ${isDropdownOpen ? "open" : ""}`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {balcony.length > 0 ? balcony.join(", ") : "Seleziona..."}
        </div>
        {isDropdownOpen && (
          <ul className="dropdown-list open">
            {options.map((option, index) => (
              <li
                className="dropdown-list-item"
                key={index}
                onClick={() => handleBalconyChange(option)}
              >
                <input
                  type="checkbox"
                  checked={balcony.includes(option)}
                  onChange={() => handleBalconyChange(option)}
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

export default PropertyBalcony;
