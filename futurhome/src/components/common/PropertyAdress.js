import React from "react";

function PropertyAddress({ address, setAddress }) {
  return (
    <div className="property-address">
      <label htmlFor="address">Indirizzo:</label>
      <input
        type="text"
        id="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
    </div>
  );
}

export default PropertyAddress;
