import React, { useState } from "react";

function PropertyFloor({ selectedOptions, setSelectedOptions }) {
  const [floor, setFloor] = useState(selectedOptions.floor);
  const [multipleStories, setMultipleStories] = useState(
    selectedOptions.multiple_stories
  );
  const [totalFloors, setTotalFloors] = useState(selectedOptions.total_floors);
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
    const value = option === "Sì";
    setMultipleStories(value);
    setSelectedOptions({
      ...selectedOptions,
      multiple_stories: value,
    });
    setIsMultiLevelDropdownOpen(false);
  };

  const handleTotalFloorsChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setTotalFloors(value);
    setSelectedOptions({
      ...selectedOptions,
      total_floors: value,
    });
  };

  const floorOptions = [
    { label: "Interrato / seminterrato", value: -1 },
    { label: "Piano terra", value: 0 },
    { label: "Primo piano", value: 1 },
    { label: "Piano intermedio", value: 2 },
    { label: "Ultimo piano", value: 3 },
    { label: "Piano attico", value: 4 },
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
          {floor !== undefined
            ? floorOptions.find((option) => option.value === floor)?.label
            : "Seleziona..."}
        </div>
        {isFloorDropdownOpen && (
          <ul className="dropdown-list open">
            {floorOptions.map((option, index) => (
              <li
                className="dropdown-list-item"
                key={index}
                onClick={() => handleFloorChange(option.value)}
              >
                <input
                  type="radio"
                  name="floor"
                  checked={floor === option.value}
                  onChange={() => handleFloorChange(option.value)}
                />
                <span>{option.label}</span>
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
          {multipleStories !== undefined
            ? multipleStories
              ? "Sì"
              : "No"
            : "Seleziona..."}
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
                  name="multiple_stories"
                  checked={multipleStories === (option === "Sì")}
                  onChange={() => handleMultiLevelChange(option)}
                />
                <span>{option}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {multipleStories && (
        <>
          <h2>Numero totale di piani</h2>
          <input
            type="number"
            value={totalFloors !== undefined ? totalFloors : ""}
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
