import React, { useState } from "react";

function PropertyYear({ selectedOptions, setSelectedOptions }) {
  const [year, setYear] = useState(selectedOptions.year || "");

  const handleYearChange = (event) => {
    setYear(event.target.value);
    setSelectedOptions({
      ...selectedOptions,
      year: event.target.value,
    });
  };

  return (
    <div className="property-year-section">
      <h2>Anno di costruzione</h2>
      <form>
        <input
          type="number"
          value={year}
          onChange={handleYearChange}
          placeholder="Anno o intervallo"
          className="number-input"
        />
      </form>
    </div>
  );
}

export default PropertyYear;
