import React, { useState } from "react";

function PropertyYear({ selectedOptions, setSelectedOptions }) {
  const [yearOfConstruction, setYearOfConstruction] = useState(
    selectedOptions.year_of_construction || ""
  );

  const handleYearChange = (event) => {
    const year = parseInt(event.target.value, 10);
    setYearOfConstruction(year);
    setSelectedOptions({
      ...selectedOptions,
      year_of_construction: year,
    });
  };

  return (
    <div className="property-year-section">
      <h2>Anno di costruzione</h2>
      <form>
        <input
          type="number"
          value={yearOfConstruction}
          onChange={handleYearChange}
          placeholder="Anno di costruzione"
          className="number-input"
        />
      </form>
    </div>
  );
}

export default PropertyYear;
