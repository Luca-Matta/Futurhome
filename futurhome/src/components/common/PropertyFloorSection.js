import React, { useState } from "react";

function PropertyFloor({ selectedOptions, setSelectedOptions }) {
  const [floor, setFloor] = useState(selectedOptions.floor || "");
  const [multiLevel, setMultiLevel] = useState(
    selectedOptions.multiLevel || ""
  );
  const [totalFloors, setTotalFloors] = useState(
    selectedOptions.totalFloors || ""
  );
  const [isFloorDropdownOpen, setIsFloorDropdownOpen] = useState(false);
  const [isMultiLevelDropdownOpen, setIsMultiLevelDropdownOpen] =
    useState(false);

  const handleFloorChange = (option) => {
    setFloor(option);
    setSelectedOptions({
      ...selectedOptions,
      floor: option,
    });
    setIsFloorDropdownOpen(false);
  };

  const handleMultiLevelChange = (option) => {
    setMultiLevel(option);
    setSelectedOptions({
      ...selectedOptions,
      multiLevel: option,
    });
    setIsMultiLevelDropdownOpen(false);
  };

  const handleTotalFloorsChange = (event) => {
    const value = event.target.value;
    setTotalFloors(value);
    setSelectedOptions({
      ...selectedOptions,
      totalFloors: value,
    });
  };

  const floorOptions = [
    "Interrato / seminterrato",
    "Piano terra",
    "Primo piano",
    "Piano intermedio",
    "Ultimo piano",
    "Piano attico",
  ];

  const multiLevelOptions = ["Sì", "No"];

  return (
    <div className="property-floor-section">
      <h2>Piano dell'immobile</h2>
      <div className="dropdown single-choice-dropdown">
        <div
          className={`dropdown-header ${isFloorDropdownOpen ? "open" : ""}`}
          onClick={() => setIsFloorDropdownOpen(!isFloorDropdownOpen)}
        >
          {floor || "Seleziona..."}
        </div>
        {isFloorDropdownOpen && (
          <ul className="dropdown-list open">
            {floorOptions.map((option, index) => (
              <li
                className="dropdown-list-item"
                key={index}
                onClick={() => handleFloorChange(option)}
              >
                <input
                  type="radio"
                  name="floor"
                  checked={floor === option}
                  onChange={() => handleFloorChange(option)}
                />
                <span>{option}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <h2>Su più livelli</h2>
      <div className="dropdown single-choice-dropdown">
        <div
          className={`dropdown-header ${
            isMultiLevelDropdownOpen ? "open" : ""
          }`}
          onClick={() => setIsMultiLevelDropdownOpen(!isMultiLevelDropdownOpen)}
        >
          {multiLevel || "Seleziona..."}
        </div>
        {isMultiLevelDropdownOpen && (
          <ul className="dropdown-list open">
            {multiLevelOptions.map((option, index) => (
              <li
                className="dropdown-list-item"
                key={index}
                onClick={() => handleMultiLevelChange(option)}
              >
                <input
                  type="radio"
                  name="multiLevel"
                  checked={multiLevel === option}
                  onChange={() => handleMultiLevelChange(option)}
                />
                <span>{option}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {multiLevel === "Sì" && (
        <>
          <h2>Numero totale di piani</h2>
          <input
            type="number"
            value={totalFloors}
            onChange={handleTotalFloorsChange}
            min="1"
            placeholder="Inserisci..."
            className="number-input"
          />
        </>
      )}
    </div>
  );
}

export default PropertyFloor;
