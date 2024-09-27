import React, { useState } from 'react';
import '../../styles/AdCarousel.css';
import likeIcon from '../../static/icons/like.svg';
import yellowLikeIcon from '../../static/icons/yellow-like.svg';
import chatIcon from '../../static/icons/chat.svg';
import yellowBookmarkIcon from '../../static/icons/yellow-bookmark.svg';
import bookmarkIcon from '../../static/icons/bookmark.svg';
import phoneIcon from '../../static/icons/phone.svg';
import shareIcon from '../../static/icons/share.svg';
import calendarIcon from '../../static/icons/calendar.svg';
import m2Icon from '../../static/icons/m2.svg';
import roomsIcon from '../../static/icons/rooms.svg';
import floorsIcon from '../../static/icons/floors.svg';
import bathroomsIcon from '../../static/icons/bathroom.svg';
import adPicture1 from '../../static/ad-picture1.jpeg';
import adPicture2 from '../../static/ad-picture2.jpeg';
import adPicture3 from '../../static/ad-picture3.jpeg';
import adPicture4 from '../../static/ad-picture4.jpeg';

const ad = {
  title: "Trilocale in Via Gaspare Gozzi 205, Roma",
  description: "SAN PAOLO - VIA GASPARE GOZZI In Via Gaspare Gozzi adiacente Via Laurentina nel quadrante tra la metro B 'Marconi' e la metro B 'San Paolo', entrambe raggiungibili a piedi, cosi come l'Università Roma Tre, proponiamo la vendita di un ampio trilocale con doppi servizi di cui uno finestrato. Completa la proprietà un box auto con serranda elettrica di 15 mq soppalcato raggiungiile direttamente con l'ascensore condominiale",
  pictures: [adPicture1, adPicture2, adPicture3, adPicture4],
};

function AdCarousel() {
  const [pictures, setPictures] = useState(ad.pictures);
  const [currentPicture, setCurrentPicture] = useState(0);

  const description = ad.description
  const maxLength = window.innerWidth <= 1250 ? 100 : 147;
  const shortDescription = description.length > maxLength ? description.substring(0, maxLength) + "..." : description;

  return (
    <div className="ad-carousel-container">
      <div className="ad-carousel">
        <img src={pictures[currentPicture]} alt="Ad" className="ad-carousel-image" onClick={() => setCurrentPicture((currentPicture + 1) % pictures.length)} />
        <div className="ad-carousel-thumbnails">
          {pictures.filter((_, index) => index !== currentPicture).map((picture, index) => (
            <img key={index} src={picture} alt="Ad thumbnail" className="ad-carousel-thumbnail" onClick={() => setCurrentPicture(pictures.indexOf(picture))} />
          ))}
        </div>
        <div className="ad-carousel-content">
          <h2 className="ad-carousel-title">{ad.title}</h2>
          <div className="ad-carousel-description">{shortDescription}</div>
          <div className="ad-carousel-stats hide-on-mobile">
            <div className="ad-carousel-stat">
              <img src={m2Icon} alt="M2" className="ad-carousel-stat-icon" />
              <div><span className="ad-carousel-stat-value">100 </span>m2</div>
            </div>
            <div>|</div>
            <div className="ad-carousel-stat">
              <img src={roomsIcon} alt="Rooms" className="ad-carousel-stat-icon" />
              <div><span className="ad-carousel-stat-value">3 </span>Locali</div>
            </div>
            <div>|</div>
            <div className="ad-carousel-stat">
              <img src={floorsIcon} alt="Floors" className="ad-carousel-stat-icon" />
              <div><span className="ad-carousel-stat-value">3° </span>Piano</div>
            </div>
            <div>|</div>
            <div className="ad-carousel-stat">
              <img src={bathroomsIcon} alt="Bathrooms" className="ad-carousel-stat-icon" />
              <div><span className="ad-carousel-stat-value">2 </span>Bagni</div>
            </div>
          </div>
          <div className="ad-carousel-stats hide-on-desktop">
            <div className="ad-carousel-stats-group">
              <div className="ad-carousel-stat">
                <img src={m2Icon} alt="M2" className="ad-carousel-stat-icon" />
                <div><span className="ad-carousel-stat-value">100 </span>m2</div>
              </div>
              <div className="ad-carousel-stat">
                <img src={roomsIcon} alt="Rooms" className="ad-carousel-stat-icon" />
                <div><span className="ad-carousel-stat-value">3 </span>Locali</div>
              </div>
            </div>
            <div>|</div>
            <div className="ad-carousel-stats-group">
              <div className="ad-carousel-stat">
                <img src={floorsIcon} alt="Floors" className="ad-carousel-stat-icon" />
                <div><span className="ad-carousel-stat-value">3° </span>Piano</div>
              </div>
              <div className="ad-carousel-stat">
                <img src={bathroomsIcon} alt="Bathrooms" className="ad-carousel-stat-icon" />
                <div><span className="ad-carousel-stat-value">2 </span>Bagni</div>
              </div>
            </div>
          </div>
          <div className="ad-carousel-buttons">
            <button>
              <img src={yellowLikeIcon} alt="Like" className="ad-carousel-button-icon" />
              {/* <i className="fas fa-heart"></i> */}
              {/* <span className="interaction-count">450</span> */}
            </button>
            <button>
              <img src={chatIcon} alt="Like" className="ad-carousel-button-icon" />
              {/* <span className="interaction-count">35</span> */}
            </button>
            <button>
              <img src={yellowBookmarkIcon} alt="Like" className="ad-carousel-button-icon" />
              {/* <span className="interaction-count">70</span> */}
            </button>
            <button>
              <img src={phoneIcon} alt="Like" className="ad-carousel-button-icon" />
              {/* <span className="interaction-count">70</span> */}
            </button>
            <button>
              <img src={shareIcon} alt="Like" className="ad-carousel-button-icon" />
            </button>
            <button>
              <img src={calendarIcon} alt="Like" className="ad-carousel-button-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdCarousel;