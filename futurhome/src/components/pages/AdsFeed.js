import React from 'react';
import { Link } from 'react-router-dom';
import AdOld from './Ad';
import Filters from './Filters';
import '../../styles/AdsFeed.css';

function AdsFeed() {
  return (
    <div className='ads-container'>
      <Filters />
      <div className='ads-feed'>
        <Link to="/single-ad" style={{ textDecoration: 'none', color: 'inherit' }}>
          <AdOld />
        </Link>
        <Link to="/single-ad" style={{ textDecoration: 'none', color: 'inherit' }}>
          <AdOld />
        </Link>
        <Link to="/single-ad" style={{ textDecoration: 'none', color: 'inherit' }}>
          <AdOld />
        </Link>
      </div>
    </div>
  );
}

export default AdsFeed;