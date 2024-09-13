import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../styles/Navbar.css';
// import smallLogo from '../../static/small-logo.png';
import logo from '../../static/logo.png';
import userProfilePicture from '../../static/image00013.jpeg';

function Navbar({ openLogin, openSignup }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='navbar'>
        <div className='hamburger-menu' onClick={() => setIsOpen(!isOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {/* <img src={smallLogo} alt="Logo" className="navbar-small-logo" /> */}
        <img src={logo} alt="Logo" className="navbar-logo" />
      {isOpen && (
        <ul className='navbar-links-mobile'>
          <li><NavLink to="/" activeClassName="active" onClick={() => setIsOpen(!isOpen)}>Home</NavLink></li>
          <li><NavLink to="/ads-feed" activeClassName="active" onClick={() => setIsOpen(!isOpen)}>Esplora</NavLink></li>
          <li><NavLink to="/notifications" activeClassName="active" onClick={() => setIsOpen(!isOpen)}>Notifiche</NavLink></li>
          <li><NavLink to="/chat" activeClassName="active" onClick={() => setIsOpen(!isOpen)}>Messaggi</NavLink></li>
          <li><NavLink to="/bookmarks" activeClassName="active" onClick={() => setIsOpen(!isOpen)}>Segnalibri</NavLink></li>
          <li><NavLink to="/profile" activeClassName="active" onClick={() => setIsOpen(!isOpen)}>Profilo</NavLink></li>
        </ul>
      )}
      <ul className='navbar-links-desktop'>
        <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/ads-feed" activeClassName="active">Esplora</NavLink></li>
        <li><NavLink to="/notifications" activeClassName="active">Notifiche</NavLink></li>
        <li><NavLink to="/chat" activeClassName="active">Messaggi</NavLink></li>
        <li><NavLink to="/bookmarks" activeClassName="active">Segnalibri</NavLink></li>
        <li><NavLink to="/profile" activeClassName="active">Profilo</NavLink></li>
      </ul>
        <a href="#" className="publish-link">Pubblica annuncio</a>
      <div className="navbar-user">
        <a href="#" className="login-link" onClick={(e) => {e.preventDefault(); openLogin();}}>Accedi</a>
        <a href="#" className="signup-link" onClick={(e) => {e.preventDefault(); openSignup();}}>Registrati</a>
      </div>
    </div>
  );
}

export default Navbar;