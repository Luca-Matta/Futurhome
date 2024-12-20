import React, { useState, useEffect } from "react";
import "../../styles/Ad.css";
import Slider from "react-slick";
import CalendarModal from "../common/CalendarModal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import likeIcon from "../../static/icons/like.svg";
import yellowLikeIcon from "../../static/icons/yellow-like.svg";
import chatIcon from "../../static/icons/chat.svg";
import bookmarkIcon from "../../static/icons/bookmark.svg";
import phoneIcon from "../../static/icons/phone.svg";
import shareIcon from "../../static/icons/share.svg";
import calendarIcon from "../../static/icons/calendar.svg";
import m2Icon from "../../static/icons/m2.svg";
import roomsIcon from "../../static/icons/rooms.svg";
import floorsIcon from "../../static/icons/floors.svg";
import bathroomsIcon from "../../static/icons/bathroom.svg";
import adPicture1 from "../../static/ad-picture1.jpeg";
import adPicture2 from "../../static/ad-picture2.jpeg";
import adPicture3 from "../../static/ad-picture3.jpeg";
import PietroRanteProfilePicture from "../../static/pietro.png";
import { addLike, removeLike } from "../../utils/apiUtils";

function Ad({ adDetails, adId, updateAdDetails }) {
  const [pictures, setPictures] = useState([]);
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);
  console.log("Ad:", adDetails);

  useEffect(() => {
    if (adDetails) {
      setPictures([adPicture1, adPicture2, adPicture3]);
    }
  }, [adDetails]);

  const handleLike = async () => {
    try {
      const updatedDetails = { ...adDetails };
      if (updatedDetails.listing.liked) {
        await removeLike(adId);
        updatedDetails.listing.liked = false;
        updatedDetails.listing.like_count -= 1;
      } else {
        await addLike(adId);
        updatedDetails.listing.liked = true;
        updatedDetails.listing.like_count += 1;
      }

      updateAdDetails(adId, updatedDetails);
    } catch (error) {
      console.error(`Failed to toggle like for ad ${adId}:`, error.message);
    }
  };

  if (!adDetails) {
    return <div>Caricamento...</div>;
  }

  const totalPictures = pictures.length;

  const description =
    "SAN PAOLO - VIA GASPARE GOZZI In Via Gaspare Gozzi adiacente Via Laurentina nel quadrante tra la metro B 'Marconi' e la metro B 'San Paolo', entrambe raggiungibili a piedi, cosi come l'Università Roma Tre, proponiamo la vendita di un ampio trilocale con doppi servizi di cui uno finestrato. Completa la proprietà un box auto con serranda elettrica di 15 mq soppalcato raggiungiile direttamente con l'ascensore condominiale";
  const maxLength = window.innerWidth <= 1200 ? 143 : 290;

  const shortDescription =
    description.length > maxLength
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
    prevArrow: <SamplePrevArrow />,
  };

  const user = {
    image: PietroRanteProfilePicture,
    name: "Pietro Rante",
    description: "Real Estate Agent",
    imageClass: "profile-picture",
  };

  return (
    <div className="ad">
      <div className="ad-content">
        <div className="ad-pictures">
          <Slider {...settings}>
            {pictures.map((pic, index) => (
              <div key={index}>
                <img
                  className="ad-picture"
                  src={pic}
                  alt="Ad"
                />
              </div>
            ))}
          </Slider>
          <div className="pictures-count">
            <i className="fas fa-camera"></i>
            <span>{totalPictures}</span>
          </div>
        </div>
        <div className="ad-details">
          <div className="ad-price">€ 450.000</div>
          <div className="ad-street">
            Trilocale in Via Gaspare Gozzi 205, Roma
          </div>
          <div className="ad-location">
            San Paolo, Marconi, Lungotevere, Pietra Papa
          </div>
          <div className="ad-description">{shortDescription}</div>
          <div className="ad-stats">
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
          <div className="ad-buttons">
            <button onClick={handleLike}>
              <img
                src={adDetails.listing.liked ? yellowLikeIcon : likeIcon}
                alt={adDetails.listing.liked ? "Unlike" : "Like"}
                className="ad-buttons-icon"
              />
              <span className="interaction-count">
                {adDetails.listing.like_count}
              </span>
            </button>
            <button>
              <img
                src={chatIcon}
                alt="Chat"
                className="ad-buttons-icon"
              />
              <span className="interaction-count">35</span>
            </button>
            <button>
              <img
                src={bookmarkIcon}
                alt="Bookmark"
                className="ad-buttons-icon"
              />
              <span className="interaction-count">70</span>
            </button>
            <button>
              <img
                src={shareIcon}
                alt="Share"
                className="ad-buttons-icon"
              />
            </button>
            <button>
              <img
                src={phoneIcon}
                alt="Phone"
                className="ad-buttons-icon"
              />
              <span className="interaction-count hide-on-mobile">Contatta</span>
            </button>
            <button onClick={() => setIsCalendarModalOpen(true)}>
              <img
                src={calendarIcon}
                alt="Calendar"
                className="ad-buttons-icon"
              />
              <span className="interaction-count hide-on-mobile">
                Prenota visita
              </span>
            </button>
          </div>
          {isCalendarModalOpen && (
            <CalendarModal
              isOpen={isCalendarModalOpen}
              onClose={() => setIsCalendarModalOpen(false)}
              profile={user}
            />
          )}
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
