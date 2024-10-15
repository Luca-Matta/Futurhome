import React, { useState } from "react";
import "../../styles/HomeSearchBox.css";
import { FaSearch } from "react-icons/fa";

function HomeSearchBox() {
  const [activeLink, setActiveLink] = useState("Compra");

  const handleClick = (e) => {
    e.preventDefault();
    setActiveLink(e.target.textContent);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Case | Qualsiasi");

  const options = [
    "Case | Qualsiasi",
    "Appartamenti",
    "Ville",
    "Ville a schiera",
  ];

  return (
    <div className="search-box">
      <ul className="saletab">
        <li>
          <a
            href=""
            className={activeLink === "Compra" ? "active" : ""}
            onClick={handleClick}
          >
            Compra
          </a>
        </li>
        <li>
          <a
            href=""
            className={activeLink === "Affitta" ? "active" : ""}
            onClick={handleClick}
          >
            Affitta
          </a>
        </li>
        <li className="hide-on-mobile">
          <a
            href=""
            className={activeLink === "Vendi" ? "active" : ""}
            onClick={handleClick}
          >
            Vendi
          </a>
        </li>
        <li className="hide-on-mobile hide-md">
          <a
            href=""
            className={activeLink === "Valuta" ? "active" : ""}
            onClick={handleClick}
          >
            Valuta
          </a>
        </li>
        <li>
          <a
            href=""
            className={activeLink === "Asta" ? "active" : ""}
            onClick={handleClick}
          >
            Asta
          </a>
        </li>
        <li className="hide-on-mobile">
          <a
            href=""
            className={activeLink === "Agenzie" ? "active" : ""}
            onClick={handleClick}
          >
            Agenzie
          </a>
        </li>
        <li className="hide-on-mobile hide-md">
          <a
            href=""
            className={activeLink === "Quotazioni" ? "active" : ""}
            onClick={handleClick}
          >
            Quotazioni
          </a>
        </li>
      </ul>
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
            placeholder="Inserisci comune, provincia o zona"
          />
        </div>
        <button className="hide-on-mobile">Cerca</button>
      </div>
      <button className="mobile-search-button hide-on-desktop">Cerca</button>
    </div>
  );
}

export default HomeSearchBox;
