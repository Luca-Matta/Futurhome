import React from 'react';
import '../../styles/AdBanner.css';

function Banner({ content, link, linkText, width, margin }) {
  const bannerStyle = {
    width: width,
    margin: margin,
  };

  return (
    <div className='ad-banner' style={bannerStyle}>
      <h4 className='ad-banner-content'>
        {content}
      </h4>
      <a href={link} className='ad-banner-link'>
        {linkText}
      </a>
    </div>
  );
}

export default Banner;