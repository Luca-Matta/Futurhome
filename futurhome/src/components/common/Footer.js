import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div>© 2024 Futurhome. Tutti i diritti riservati.</div>
      <div className='footer-links'>
        <Link to="/privacy-policy" className='footer-link'>Privacy Policy</Link>
        <Link to="/terms-and-conditions" className='footer-link'>Termini e Condizioni</Link>
      </div>
    </footer>
  );
}

export default Footer;