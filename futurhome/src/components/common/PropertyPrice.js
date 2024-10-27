import React, { useState } from "react";
import "../../styles/PublishAdModal.css";
import "../../styles/PropertyPrice.css";

function PropertyPrice({ selectedOptions, setSelectedOptions }) {
  const [priceType, setPriceType] = useState(selectedOptions.priceType || "");
  const [price, setPrice] = useState(selectedOptions.price || "");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handlePriceTypeChange = (option) => {
    setPriceType(option);
    setSelectedOptions({
      ...selectedOptions,
      priceType: option,
    });
    setIsDropdownOpen(false);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
    setSelectedOptions({
      ...selectedOptions,
      price: event.target.value,
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
          {priceType || "Seleziona..."}
        </div>
        {isDropdownOpen && (
          <ul className="dropdown-list open">
            {options.map((option, index) => (
              <li
                className="dropdown-list-item"
                key={index}
                onClick={() => handlePriceTypeChange(option)}
              >
                <input
                  type="radio"
                  name="priceType"
                  checked={priceType === option}
                  onChange={() => handlePriceTypeChange(option)}
                />
                <span>{option}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      {(priceType === "Prezzo fisso" || priceType === "Prezzo trattabile") && (
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
