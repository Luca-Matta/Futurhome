import React, { useState } from "react";
import "../../styles/PublishAdModal.css";
import "../../styles/PropertyPrice.css";

function PropertyPrice({ selectedOptions, setSelectedOptions }) {
  const [priceStatus, setPriceStatus] = useState(
    selectedOptions.price_status || ""
  );
  const [price, setPrice] = useState(selectedOptions.price || "");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handlePriceStatusChange = (option) => {
    setPriceStatus(option);
    setSelectedOptions({
      ...selectedOptions,
      price_status: option,
    });
    setIsDropdownOpen(false);
  };

  const handlePriceChange = (event) => {
    const priceValue = parseInt(event.target.value, 10);
    setPrice(priceValue);
    setSelectedOptions({
      ...selectedOptions,
      price: priceValue,
    });
  };

  const options = ["Prezzo fisso", "Prezzo trattabile", "Prezzo su richiesta"];

  return (
    <div className="property-price">
      <h2>Prezzo</h2>
      <div className="dropdown single-choice-dropdown">
        <div
          className={`dropdown-header ${isDropdownOpen ? "open" : ""}`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {priceStatus || "Seleziona..."}
        </div>
        {isDropdownOpen && (
          <ul className="dropdown-list open">
            {options.map((option, index) => (
              <li
                className="dropdown-list-item"
                key={index}
                onClick={() => handlePriceStatusChange(option)}
              >
                <input
                  type="radio"
                  name="priceStatus"
                  checked={priceStatus === option}
                  onChange={() => handlePriceStatusChange(option)}
                />
                <span>{option}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      {(priceStatus === "Prezzo fisso" ||
        priceStatus === "Prezzo trattabile") && (
        <input
          className="price-input number-input"
          type="number"
          value={price}
          onChange={handlePriceChange}
          placeholder="Inserisci il prezzo"
        />
      )}
    </div>
  );
}

export default PropertyPrice;
