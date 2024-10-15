import React from "react";
import "../../styles/ProfessionalCard.css";
import pietroRantePicture from "../../static/pietro.png";
import greenPhoneIcon from "../../static/icons/green-phone.svg";
import greenChatIcon from "../../static/icons/green-chat.svg";
import greenBookmarkIcon from "../../static/icons/green-bookmark.svg";
import { FaStar } from "react-icons/fa";

const ProfessionalCard = () => {
  const agent = {
    nome: "Pietro",
    cognome: "Rante",
    lavoro: "Real Estate Agent",
    città: "Roma",
    recensioni: 5,
    picture: pietroRantePicture,
  };

  return (
    <a
      href=""
      className="professional-card-link"
    >
      <div className="professional-card">
        <img
          src={agent.picture}
          alt="Agent"
          className="picture"
        />
        <h3>
          {agent.nome} {agent.cognome}
        </h3>
        <div className="info">
          <div>{agent.lavoro}</div>
          <div>{agent.città}</div>
          <div className="rating">
            {" "}
            {Array(agent.recensioni)
              .fill()
              .map((_, i) => (
                <FaStar key={i} />
              ))}
          </div>
        </div>
        <div className="professional-card-icons">
          <img
            src={greenPhoneIcon}
            alt="Call"
            className="button"
          />
          <img
            src={greenChatIcon}
            alt="Message"
            className="button"
          />
          <img
            src={greenBookmarkIcon}
            alt="Bookmark"
            className="button"
          />
        </div>
      </div>
    </a>
  );
};

export default ProfessionalCard;
