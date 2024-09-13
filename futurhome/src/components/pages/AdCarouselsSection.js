import React from 'react';
import AdCarousel from './AdCarousel';
import '../../styles/AdCarouselsSection.css';

function AdCarouselsSection() {
  return (
    <div className="ad-carousels-section">
      {Array(10).fill().map((_, index) => (
        <AdCarousel key={index} />
      ))}
      {Array(10).fill().map((_, index) => (
        <AdCarousel key={index + 10} />
      ))}
    </div>
  );
}

export default AdCarouselsSection;