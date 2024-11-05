import React, { useState } from "react";
import "../../styles/PublishAdModal.css";

function PropertyCondoFees({ selectedOptions, setSelectedOptions }) {
  const [condoFee, setCondoFee] = useState(selectedOptions.condo_fees || "");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [feeAmount, setFeeAmount] = useState(selectedOptions.condo_fees || 0);

  const handleCondoFeeChange = (option) => {
    setCondoFee(option);
    setSelectedOptions({
      ...selectedOptions,
      condo_fees: option === "Presenti" ? feeAmount : 0,
    });
    setIsDropdownOpen(false);
  };

  const handleFeeAmountChange = (event) => {
    const amount = parseInt(event.target.value, 10) || 0;
    setFeeAmount(amount);
    setSelectedOptions({
      ...selectedOptions,
      condo_fees: amount,
    });
  };

  const options = ["Presenti", "Assenti"];

  return (
    <div className="property-condo-fees">
      <h2>Spese condominiali</h2>
      <div className="dropdown single-choice-dropdown">
        <div
          className={`dropdown-header ${isDropdownOpen ? "open" : ""}`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {condoFee ? condoFee : "Seleziona..."}
        </div>
        {isDropdownOpen && (
          <ul className="dropdown-list open">
            {options.map((option, index) => (
              <li
                className="dropdown-list-item"
                key={index}
                onClick={() => handleCondoFeeChange(option)}
              >
                <input
                  type="radio"
                  name="condoFee"
                  checked={condoFee === option}
                  onChange={() => handleCondoFeeChange(option)}
                />
                <span>{option}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      {condoFee === "Presenti" && (
        <div className="fee-amount">
          <label htmlFor="feeAmount">Importo:</label>
          <input
            type="number"
            id="feeAmount"
            value={feeAmount}
            onChange={handleFeeAmountChange}
            placeholder="Inserisci l'importo"
          />
        </div>
      )}
    </div>
  );
}

export default PropertyCondoFees;
