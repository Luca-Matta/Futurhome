import React, { useState, useEffect } from "react";

function PropertyAddress({ selectedOptions, setSelectedOptions }) {
  const [address, setAddress] = useState(selectedOptions.address || "");

  useEffect(() => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      address: address,
    }));
  }, [address, setSelectedOptions]);

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  return (
    <div className="property-address">
      <h2>Indirizzo</h2>
      <input
        type="text"
        id="address"
        className="text-input"
        value={address}
        onChange={handleAddressChange}
      />
    </div>
  );
}

export default PropertyAddress;
