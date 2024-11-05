import React, { useState } from "react";

function PropertyAreaSection({ selectedOptions, setSelectedOptions }) {
  const [totalArea, setTotalArea] = useState(selectedOptions.total_area || "");
  const [walkableArea, setWalkableArea] = useState(
    selectedOptions.walkable_area || ""
  );

  const handleTotalAreaChange = (event) => {
    const value = event.target.value ? parseInt(event.target.value, 10) : "";
    setTotalArea(value);
    setSelectedOptions({
      ...selectedOptions,
      total_area: value,
    });
  };

  const handleWalkableAreaChange = (event) => {
    const value = event.target.value ? parseInt(event.target.value, 10) : "";
    setWalkableArea(value);
    setSelectedOptions({
      ...selectedOptions,
      walkable_area: value,
    });
  };

  return (
    <div className="property-area-section">
      <form>
        <label>
          <h2>Metratura totale</h2>
          <input
            type="number"
            value={totalArea}
            onChange={handleTotalAreaChange}
            placeholder="Inserisci..."
            className="number-input"
          />
        </label>
        <label>
          <h2>Superficie interna utile/calpestabile</h2>
          <input
            type="number"
            value={walkableArea}
            onChange={handleWalkableAreaChange}
            placeholder="Inserisci..."
            className="number-input"
          />
        </label>
      </form>
    </div>
  );
}

export default PropertyAreaSection;
