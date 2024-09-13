import React, { useState } from 'react';
import '../../styles/Ad.css';
import Slider from "react-slick";
import CalendarModal from '../common/CalendarModal';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import likeIcon from '../../static/like-icon.png';
import chatIcon from '../../static/chat-icon.png';
import bookmarkIcon from '../../static/bookmark-icon.png';
import phoneIcon from '../../static/phone-icon.png';
import shareIcon from '../../static/share-icon.png';
import calendarIcon from '../../static/calendar-icon.png';
import m2Icon from '../../static/m2-icon.png';
import roomsIcon from '../../static/rooms-icon.png';
import floorsIcon from '../../static/floors-icon.png';
import bathroomsIcon from '../../static/bathrooms-icon.png';
import adPicture1 from '../../static/ad-picture1.jpeg';
import adPicture2 from '../../static/ad-picture2.jpeg';
import adPicture3 from '../../static/ad-picture3.jpeg';
import PietroRanteProfilePicture from '../../static/pietro.png';

function Ad() {
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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const user = {
    image: PietroRanteProfilePicture,
    name: 'Pietro Rante',
    description: 'Real Estate Agent',
    imageClass: 'profile-picture'
  };

  return (
    <div className="ad">
      <div className="ad-content">
        <div className="ad-pictures">
            <Slider {...settings}>
              <div>
                <img className="ad-picture" src={adPicture1} alt="Ad" />
              </div>
              <div>
                <img className="ad-picture" src={adPicture2} alt="Ad" />
              </div>
              <div>
                <img className="ad-picture" src={adPicture3} alt="Ad" />
              </div>
            </Slider>
            <div className="pictures-count">
              <i className="fas fa-camera"></i>
              <span>{totalPictures}</span>
            </div>
          </div>
          <div className="ad-details">
            <div className="ad-price">€ 450.000</div>
            <div className="ad-street">Trilocale in Via Gaspare Gozzi 205, Roma</div>
            <div className="ad-location">San Paolo, Marconi, Lungotevere, Pietra Papa</div>
            <div className="ad-description">
              {shortDescription}
            </div>
            <div className="ad-stats">
              <div className="ad-stat">
                <img src={m2Icon} alt="M2" className="ad-stat-icon" />
                <div><span className="ad-stat-value">100 </span>m2</div>
              </div>
              <div>|</div>
              <div className="ad-stat">
                <img src={roomsIcon} alt="Rooms" className="ad-stat-icon" />
                <div><span className="ad-stat-value">3 </span>Locali</div>
              </div>
              <div>|</div>
              <div className="ad-stat">
                <img src={floorsIcon} alt="Floors" className="ad-stat-icon" />
                <div><span className="ad-stat-value">3° </span>Piano</div>
              </div>
              <div>|</div>
              <div className="ad-stat">
                <img src={bathroomsIcon} alt="Bathrooms" className="ad-stat-icon" />
                <div><span className="ad-stat-value">2 </span>Bagni</div>
              </div>
            </div>
            <div className="ad-buttons">
              <button>
                <img src={likeIcon} alt="Like" className="ad-buttons-icon" />
                <span className="interaction-count  hide-on-mobile">
                  450
                </span>
              </button>
              <button>
                <img src={chatIcon} alt="Like" className="ad-buttons-icon" />
                <span className="interaction-count hide-on-mobile">
                  35
                </span>
              </button>
              <button>
                <img src={bookmarkIcon} alt="Like" className="ad-buttons-icon" />
                <span className="interaction-count hide-on-mobile">
                  70
                </span>
              </button>
              <button>
                <img src={shareIcon} alt="Like" className="ad-buttons-icon" />
              </button>
              <button>
                <img src={phoneIcon} alt="Like" className="ad-buttons-icon" />
                <span className="interaction-count hide-on-mobile">
                  Contatta
                </span>
              </button>
              <button onClick={() => setIsModalOpen(true)}>
                <img src={calendarIcon} alt="Like" className="ad-buttons-icon" />
                <span className="interaction-count hide-on-mobile">
                  Prenota visita
                </span>
              </button>
            </div>
            {isModalOpen && 
              <CalendarModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                profile={user} 
              />
            }
          </div>
      </div>
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} ad-arrow-next`}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} ad-arrow-prev`}
      onClick={onClick}
    />
  );
}

export default Ad;