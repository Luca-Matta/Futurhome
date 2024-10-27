import React, { useState } from "react";

function PropertyAreaSection({ selectedOptions, setSelectedOptions }) {
  const [area, setArea] = useState(selectedOptions.area || "");
  const [floorArea, setFloorArea] = useState(selectedOptions.floorArea || "");

  const handleAreaChange = (event) => {
    const value = event.target.value;
    setArea(value);
    setSelectedOptions({
      ...selectedOptions,
      area: value,
    });
  };

  const handleFloorAreaChange = (event) => {
    const value = event.target.value;
    setFloorArea(value);
    setSelectedOptions({
      ...selectedOptions,
      floorArea: value,
    });
  };

  return (
    <div className="property-area-section">
      <form>
        <label>
          <h2>Metratura totale</h2>
          <input
            type="number"
            value={area}
            onChange={handleAreaChange}
            placeholder="Inserisci..."
            className="number-input"
          />
        </label>
        <label>
          <h2>Area calpestabile</h2>
          <input
            type="number"
            value={floorArea}
            onChange={handleFloorAreaChange}
            placeholder="Inserisci..."
            className="number-input"
          />
        </label>
      </form>
    </div>
  );
}

export default PropertyAreaSection;
