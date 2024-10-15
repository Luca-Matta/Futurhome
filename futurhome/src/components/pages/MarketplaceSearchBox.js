import React, { useState } from "react";
import "../../styles/MarketplaceSearchBox.css";
import { FaSearch } from "react-icons/fa";

function MarketplaceSearchBox() {
  const [activeLink, setActiveLink] = useState("Compra");

  const handleClick = (e) => {
    e.preventDefault();
    setActiveLink(e.target.textContent);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Seleziona provincia");

  const options = ["Roma", "Milano", "Firenze", "Napoli"];

  return (
    <div className="marketplace-search-box">
      <div className="saletab">
        <div className="marketplace-search-box-header">
          Cerca un professionista
        </div>
      </div>
      <div className="search-bar">
        <div className="dropdown">
          <div
            className="dropdown-header"
            onClick={() => setIsOpen(!isOpen)}
          >
            {selectedOption}
          </div>
          {isOpen && (
            <ul className="dropdown-list">
              {options
                .filter((option) => option !== selectedOption)
                .map((option, index) => (
                  <li
                    key={index}
                    className="dropdown-list-item"
                    onClick={() => {
                      setSelectedOption(option);
                      setIsOpen(false);
                    }}
                  >
                    {option}
                  </li>
                ))}
            </ul>
          )}
        </div>
        <div className="vertical-line"></div>
        <div className="search-input">
          <FaSearch className="fa-search" />
          <input
            type="text"
            placeholder="Cerca..."
          />
        </div>
        <button className="hide-on-mobile">Cerca</button>
      </div>
      <button className="mobile-search-button hide-on-desktop">Cerca</button>
    </div>
  );
}

export default MarketplaceSearchBox;
