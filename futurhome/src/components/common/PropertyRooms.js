import React, { useState } from "react";

function PropertyRoomsSection({ selectedOptions, setSelectedOptions }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [rooms, setRooms] = useState(selectedOptions.rooms || "");

  const options = [
    "Monolocale",
    "Bilocale",
    "Trilocale",
    "Quadrilocale",
    "5 o più locali",
  ];

  const handleRoomsChange = (option) => {
    setRooms(option);
    setSelectedOptions({
      ...selectedOptions,
      rooms: option,
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
          {rooms || "Seleziona..."}
        </div>
        {isDropdownOpen && (
          <ul className="dropdown-list open">
            {options.map((option, index) => (
              <li
                className="dropdown-list-item"
                key={index}
                onClick={() => handleRoomsChange(option)}
              >
                <input
                  type="radio"
                  name="rooms"
                  checked={rooms === option}
                  onChange={() => handleRoomsChange(option)}
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

export default PropertyRoomsSection;
