import React, { useState } from 'react';
import '../../styles/AdBookmarks.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import adPicture1 from '../../static/ad-picture1.jpeg';
import adPicture2 from '../../static/ad-picture2.jpeg';
import adPicture3 from '../../static/ad-picture3.jpeg';

function AdBookmarks() {
  const [pictures, setPictures] = useState([adPicture1, adPicture2, adPicture3]);

  const totalPictures = pictures.length;

  const description = "SAN PAOLO - VIA GASPARE GOZZI In Via Gaspare Gozzi adiacente Via Laurentina nel quadrante tra la metro B 'Marconi' e la metro B 'San Paolo', entrambe raggiungibili a piedi, cosi come l'Università Roma Tre, proponiamo la vendita di un ampio trilocale con doppi servizi di cui uno finestrato. Completa la proprietà un box auto con serranda elettrica di 15 mq soppalcato raggiungiile direttamente con l'ascensore condominiale";
  const maxLength = 230;

  const shortDescription = description.length > maxLength 
    ? description.substring(0, maxLength) + "..." 
    : description;

  const settings = {
    dots: true,
    dotsClass: "slick-dots custom-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="ad-bookmarks-container">
      <div className="ad-bookmarks-header">
        <div className="title-container">
          <h2>Annunci preferiti (3)</h2>
        </div>
        <div className="sorting-menu">
          <i className="fas fa-sort" onClick={() => setIsOpen(!isOpen)}></i>
          {isOpen && (
            <div className="dropdown-menu">
              <button onClick={() => {/* sorting function */}}>Ordina per m2</button>
              <button onClick={() => {/* sorting function */}}>Ordina per data di pubblicazione</button>
              <button onClick={() => {/* sorting function */}}>Ordina per</button>
              <button onClick={() => {/* sorting function */}}>Ordina per</button>
            </div>
          )}
        </div>
      </div>
      <div className="ad-bookmarks">
        <div className="ad-bookmarks-content">
          <div className="ad-bookmarks-pictures">
              <Slider {...settings}>
                <div>
                  <img className="ad-bookmarks-picture" src={adPicture1} alt="Ad" />
                </div>
                <div>
                  <img className="ad-bookmarks-picture" src={adPicture2} alt="Ad" />
                </div>
                <div>
                  <img className="ad-bookmarks-picture" src={adPicture3} alt="Ad" />
                </div>
              </Slider>
              <div className="pictures-count">
                <i className="fas fa-camera"></i>
                <span>{totalPictures}</span>
              </div>
            </div>
            <div className="ad-bookmarks-details">
              <div className="ad-bookmarks-header-content">
                <div className="ad-bookmarks-price">€ 450.000</div>
                <div>
                  <button className="ad-bookmarks-bookmark-button">
                    <i className="fas fa-bookmark"></i>
                  </button>
                </div>
              </div>
              <div className="ad-bookmarks-street">Trilocale in Via Gaspare Gozzi 205, Roma</div>
              <div className="ad-bookmarks-location">San Paolo, Marconi, Lungotevere, Pietra Papa</div>
              <div className="ad-bookmarks-description">
                {shortDescription}
              </div>
              <div className="ad-bookmarks-stats">
                <div className="ad-bookmarks-stat">
                  <i className="fas fa-ruler-combined"></i>
                  <div><span className="ad-bookmarks-stat-value">100 </span>m2</div>
                </div>
                <div>|</div>
                <div className="ad-bookmarks-stat">
                  <i className="fas fa-door-open"></i>
                  <div><span className="ad-bookmarks-stat-value">3 </span>Locali</div>
                </div>
                <div>|</div>
                <div className="ad-bookmarks-stat">
                  <i className="fas fa-bath"></i>
                  <div><span className="ad-bookmarks-stat-value">2 </span>Bagni</div>
                </div>
                <div>|</div>
                <div className="ad-bookmarks-stat">
                  <i className="fas fa-bolt"></i>
                  <div className="ad-bookmarks-stat-value">E</div>
                </div>
              </div>
              <div className="ad-bookmarks-buttons">
                <button>
                  <i className="fas fa-heart"></i>
                  <span className="interaction-count">
                    450
                  </span>
                </button>
                <button>
                  <i className="fas fa-comment"></i>
                  <span className="interaction-count">
                    35
                  </span>
                </button>
                <button><i className="fas fa-envelope"></i></button>
                <button><i className="fas fa-calendar"></i></button>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} ad-bookmarks-arrow-next`}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} ad-bookmarks-arrow-prev`}
      onClick={onClick}
    />
  );
}

export default AdBookmarks;