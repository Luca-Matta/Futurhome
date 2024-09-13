import React from 'react';
import '../../styles/Home.css';
import SearchBox from './SearchBox';
import Partner from './Partner';
import AdBanner from './AdBanner';
import logo from '../../static/logo.png';
import DiscoverMoreBanner from './DiscoverMoreBanner';
import AdCarouselsSection from './AdCarouselsSection';

function Home() {
  return ( 
    <div className='home'>
      <div className='home-header'>
        <div className='logo-section'>
          <img src={logo} alt='Logo' className="logo-home"/>
          <h3 className="logo-section-subtitle">Dove la casa del tuo futuro trova te</h3>
        </div>
        <div className='search-box-container'>
          <SearchBox />
        </div>
        <div className="discover-more-banner-container">
          <DiscoverMoreBanner />
        </div>
      </div>
      <section>
        <div className="ad-carousel-section">
          <h1 className="ad-carousel-section-title">
            Annunci più visitati dagli utenti
          </h1>
          <AdCarouselsSection />
        </div>
      </section>
      <div className="ad-banner-container">
        <AdBanner />
      </div>
    </div>
  );
}

export default Home;