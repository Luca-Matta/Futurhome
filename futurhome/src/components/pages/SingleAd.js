import React, { useState } from 'react';
import '../../styles/SingleAd.css';
import Slider from "react-slick";
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

function SingleAd() {
  const [pictures, setPictures] = useState([adPicture1, adPicture2, adPicture3, adPicture2, adPicture3]);

  const totalPictures = pictures.length;

  const description = "A A Attenzione ! ! Privato vende appartamento da rimodernare perché la perfezione è noiosa! !... Sogni di avere una casa che è un vero e proprio progetto di design? allora questo appartamento è il tuo campo di gioco ideale ! In zona tranquilla e molto vicina al centro, privati vendono due unità immobiliari cosi composte: primo e secondo piano con cucina, soggiorno, doppia camera da letto matrimoniale , terrazza e un bagno padronale, al piano interrato troviamo due ampie stanze da poter utilizzare come taverna o come cantina/ripostiglio e sul retro piccolo spazio da utilizzare come doppio posto auto.Non perdere l'occasione di trasformare un potenziale disastro in una favola ! ! Non adatto a chi cerca '' chiavi in mano'' ! N.B. Alcuni dati descrittivi dell'immobile , potrebbero essere solo approssimativi ,( esempio : spese riscaldamento , indirizzo preciso , spese condominiali , e metri delle superfici.. ) e pertanto verranno in modo completo telefonicamente oppure in fase di appuntamento";

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

  return (
    <div className="single-ad">
      <div className="single-ad-pictures-container">
        <div className="single-ad-pictures">
          <Slider {...settings}>
            <div>
              <img className="single-ad-picture" src={adPicture1} alt="single-ad" />
            </div>
            <div>
              <img className="single-ad-picture" src={adPicture2} alt="single-ad" />
            </div>
            <div>
              <img className="single-ad-picture" src={adPicture3} alt="single-ad" />
            </div>
          </Slider>
          <div className="pictures-count">
            <i className="fas fa-camera"></i>
            <span>{totalPictures}</span>
          </div>
        </div>
        <div className="single-ad-right-pictures-container">
          <div>
            <div className="single-ad-right-picture">
              <img src={adPicture2} alt="single-ad" />
            </div>
            <div className="single-ad-right-picture">
              <img src={adPicture3} alt="single-ad"/>
            </div>
          </div>
          <div>
            <div className="single-ad-right-picture">
              <img src={adPicture3} alt="single-ad" className="picture-top-right-border-radius"/>
            </div>
            <div className="single-ad-right-picture">
              <img src={adPicture2} alt="single-ad" className="picture-bottom-right-border-radius"/>
            </div>
          </div>
        </div>
      </div>
      <div className="single-ad-content">
          <div className="single-ad-details">
            <div className="single-ad-price">€ 450.000</div>
            <div className="single-ad-street">Trilocale in Via Gaspare Gozzi 205, Roma</div>
            <div className="single-ad-location">San Paolo, Marconi, Lungotevere, Pietra Papa</div>
            <div className="single-ad-buttons">
              <button>
                <img src={likeIcon} alt="Like" className="single-ad-buttons-icon" />
                <span className="interaction-count">
                  450
                </span>
              </button>
              <button>
                <img src={chatIcon} alt="Like" className="ad-buttons-icon" />
                <span className="interaction-count">
                  35
                </span>
              </button>
              <button>
                <img src={bookmarkIcon} alt="Like" className="ad-buttons-icon" />
                <span className="interaction-count">
                  70
                </span>
              </button>
              <button>
                <img src={shareIcon} alt="Like" className="ad-buttons-icon" />
              </button>
              <button>
                <img src={phoneIcon} alt="Like" className="ad-buttons-icon" />
                <span className="interaction-count">
                  Contatta
                </span>
              </button>
              <button onClick={() => setIsModalOpen(true)}>
                <img src={calendarIcon} alt="Like" className="ad-buttons-icon" />
                <span className="interaction-count">
                  Prenota visita
                </span>
              </button>
            </div>
            <div className="single-ad-stats">
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
            <div className="single-ad-description">
              {description}
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
      className={`${className} single-ad-arrow-next`}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} single-ad-arrow-prev`}
      onClick={onClick}
    />
  );
}

export default SingleAd;