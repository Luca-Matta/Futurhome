import React, { useState } from "react";
import "../../styles/SingleAd.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import likeIcon from "../../static/icons/like.svg";
import chatIcon from "../../static/icons/chat.svg";
import bookmarkIcon from "../../static/icons/bookmark.svg";
import phoneIcon from "../../static/icons/phone.svg";
import shareIcon from "../../static/icons/share.svg";
import calendarIcon from "../../static/icons/calendar.svg";
import greenLikeIcon from "../../static/icons/green-like.svg";
import greenChatIcon from "../../static/icons/green-chat.svg";
import greenBookmarkIcon from "../../static/icons/green-bookmark.svg";
import greenPhoneIcon from "../../static/icons/green-phone.svg";
import greenShareIcon from "../../static/icons/green-share.svg";
import greenCalendarIcon from "../../static/icons/green-calendar.svg";
import m2Icon from "../../static/icons/m2.svg";
import roomsIcon from "../../static/icons/rooms.svg";
import floorsIcon from "../../static/icons/floors.svg";
import bathroomsIcon from "../../static/icons/bathroom.svg";
import adPicture1 from "../../static/ad-picture1.jpeg";
import adPicture2 from "../../static/ad-picture2.jpeg";
import adPicture3 from "../../static/ad-picture3.jpeg";

function SingleAd() {
  const [pictures, setPictures] = useState([
    adPicture1,
    adPicture2,
    adPicture3,
    adPicture2,
    adPicture3,
  ]);

  const totalPictures = pictures.length;

  const description =
    "A A Attenzione ! ! Privato vende appartamento da rimodernare perché la perfezione è noiosa! !... Sogni di avere una casa che è un vero e proprio progetto di design? allora questo appartamento è il tuo campo di gioco ideale ! In zona tranquilla e molto vicina al centro, privati vendono due unità immobiliari cosi composte: primo e secondo piano con cucina, soggiorno, doppia camera da letto matrimoniale , terrazza e un bagno padronale, al piano interrato troviamo due ampie stanze da poter utilizzare come taverna o come cantina/ripostiglio e sul retro piccolo spazio da utilizzare come doppio posto auto.Non perdere l'occasione di trasformare un potenziale disastro in una favola ! ! Non adatto a chi cerca '' chiavi in mano'' ! N.B. Alcuni dati descrittivi dell'immobile , potrebbero essere solo approssimativi ,( esempio : spese riscaldamento , indirizzo preciso , spese condominiali , e metri delle superfici.. ) e pertanto verranno in modo completo telefonicamente oppure in fase di appuntamento";

  const settings = {
    dots: true,
    dotsClass: "slick-dots custom-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="single-ad-container">
      <div className="single-ad">
        <div className="single-ad-pictures-container">
          <div className="single-ad-pictures">
            <Slider {...settings}>
              <div>
                <img
                  className="single-ad-picture"
                  src={adPicture1}
                  alt="single-ad"
                />
              </div>
              <div>
                <img
                  className="single-ad-picture"
                  src={adPicture2}
                  alt="single-ad"
                />
              </div>
              <div>
                <img
                  className="single-ad-picture"
                  src={adPicture3}
                  alt="single-ad"
                />
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
                <img
                  src={adPicture2}
                  alt="single-ad"
                />
              </div>
              <div className="single-ad-right-picture">
                <img
                  src={adPicture3}
                  alt="single-ad"
                />
              </div>
            </div>
            <div>
              <div className="single-ad-right-picture">
                <img
                  src={adPicture3}
                  alt="single-ad"
                  className="picture-top-right-border-radius"
                />
              </div>
              <div className="single-ad-right-picture">
                <img
                  src={adPicture2}
                  alt="single-ad"
                  className="picture-bottom-right-border-radius"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="single-ad-content">
          <div className="single-ad-details">
            <div className="single-ad-header">
              <div>
                <div className="single-ad-price">€ 450.000</div>
                <div className="single-ad-street">
                  Trilocale in Via Gaspare Gozzi 205, Roma
                </div>
                <div className="single-ad-location">
                  San Paolo, Marconi, Lungotevere, Pietra Papa
                </div>
              </div>
              <div className="single-ad-buttons">
                <button>
                  <img
                    src={likeIcon}
                    alt="Like"
                    className="single-ad-button-icon"
                  />
                  <span className="single-ad-interaction-count">450</span>
                </button>
                <button>
                  <img
                    src={chatIcon}
                    alt="Like"
                    className="single-ad-button-icon"
                  />
                  <span className="single-ad-interaction-count">35</span>
                </button>
                <button>
                  <img
                    src={bookmarkIcon}
                    alt="Like"
                    className="single-ad-button-icon"
                  />
                  <span className="single-ad-interaction-count">70</span>
                </button>
                <button>
                  <img
                    src={shareIcon}
                    alt="Like"
                    className="single-ad-button-icon"
                  />
                </button>
                <button>
                  <img
                    src={phoneIcon}
                    alt="Like"
                    className="single-ad-button-icon"
                  />
                </button>
                <button onClick={() => setIsModalOpen(true)}>
                  <img
                    src={calendarIcon}
                    alt="Like"
                    className="single-ad-button-icon"
                  />
                </button>
              </div>
            </div>
            <div className="single-ad-stats">
              <div className="ad-stat">
                <img
                  src={m2Icon}
                  alt="M2"
                  className="ad-stat-icon"
                />
                <div>
                  <span className="ad-stat-value">100 </span>m2
                </div>
              </div>
              <div>|</div>
              <div className="ad-stat">
                <img
                  src={roomsIcon}
                  alt="Rooms"
                  className="ad-stat-icon"
                />
                <div>
                  <span className="ad-stat-value">3 </span>Locali
                </div>
              </div>
              <div>|</div>
              <div className="ad-stat">
                <img
                  src={floorsIcon}
                  alt="Floors"
                  className="ad-stat-icon"
                />
                <div>
                  <span className="ad-stat-value">3° </span>Piano
                </div>
              </div>
              <div>|</div>
              <div className="ad-stat">
                <img
                  src={bathroomsIcon}
                  alt="Bathrooms"
                  className="ad-stat-icon"
                />
                <div>
                  <span className="ad-stat-value">2 </span>Bagni
                </div>
              </div>
            </div>
            <div className="single-ad-description-container">
              <div className="single-ad-description">{description}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="single-ad-contact-form-container">
        <form className="single-ad-contact-form">
          <h3>Contatta l'inserzionista</h3>
          <textarea placeholder="Posso avere maggiori informazioni?" />
          <div className="single-ad-contact-form-buttons">
            <button className="single-ad-contact-form-message-button">
              <img
                src={chatIcon}
                alt="Chat"
              />
              Invia messaggio
            </button>
            <button className="single-ad-contact-form-calendar-button">
              <img
                src={greenPhoneIcon}
                alt="Phone"
              />
              Chiama
            </button>
            <button className="single-ad-contact-form-calendar-button">
              <img
                src={greenCalendarIcon}
                alt="Calendar"
              />
              Prenota visita
            </button>
          </div>
        </form>
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
