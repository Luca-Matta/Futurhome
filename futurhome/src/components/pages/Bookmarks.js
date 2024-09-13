import React from 'react';
import AdBookmarks from '../pages/AdBookmarks';
import '../../styles/AdsFeed.css';

function AdsFeedOld() {
  return (
    <div className='ads-container'>
      <div className='ads-feed'>
        <AdBookmarks />
      </div>
    </div>
  );
}

export default AdsFeedOld;