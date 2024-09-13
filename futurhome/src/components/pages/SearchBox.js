import React, { useState } from 'react'
import '../../styles/SearchBox.css'
import { FaSearch } from 'react-icons/fa'

function SearchBox () {
  const [activeLink, setActiveLink] = useState('Compra');

  const handleClick = (e) => {
    e.preventDefault();
    setActiveLink(e.target.textContent);
  }

  return (
    <div className='search-box'>
      <ul className='saletab'>
        <li>
          <a href="" className={activeLink === 'Compra' ? 'active' : ''} onClick={handleClick}>
            Compra
          </a>
        </li>
        <li>
          <a href="" className={activeLink === 'Affitta' ? 'active' : ''} onClick={handleClick}>
            Affitta
          </a>
        </li>
        <li className="hide-on-mobile">
          <a href="" className={activeLink === 'Vendi' ? 'active' : ''} onClick={handleClick}>
            Vendi
          </a>
        </li>
        <li className="hide-on-mobile">
          <a href="" className={activeLink === 'Valuta' ? 'active' : ''} onClick={handleClick}>
            Valuta
          </a>
        </li>
        <li>
          <a href="" className={activeLink === 'Asta' ? 'active' : ''} onClick={handleClick}>
            Asta
          </a>
        </li>
        <li className="hide-on-mobile">
          <a href="" className={activeLink === 'Agenzie' ? 'active' : ''} onClick={handleClick}>
            Agenzie
          </a>
        </li>
        <li className="hide-on-mobile">
          <a href="" className={activeLink === 'Quotazioni' ? 'active' : ''} onClick={handleClick}>
            Quotazioni
          </a>
        </li>
      </ul>
      <div className='search-bar'>
        <select className='property-type'>
          <option value=''>Case | Qualsiasi</option>
          <option value='appartamenti'>Appartamenti</option>
          <option value='ville'>Ville</option>
          <option value='ville-a-schiera'>Ville a schiera</option>
        </select>
        <div className="vertical-line"></div>
        <div className='search-input'>
          <FaSearch className='fa-search' />
          <input type='text' placeholder='Inserisci comune, provincia o zona' />
        </div>
        <button className="hide-on-mobile">Cerca</button>
      </div>
      <button className="mobile-search-button hide-on-desktop">Cerca</button>
    </div>
  )
}

export default SearchBox;