import React from "react";
import "../../styles/ProfessionalProfile.css";
import { FaStar } from "react-icons/fa";
import profilePicture from "../../static/pietro.png";
import greenPhoneIcon from "../../static/icons/green-phone.svg";
import greenChatIcon from "../../static/icons/green-chat.svg";
import greenBookmarkIcon from "../../static/icons/green-bookmark.svg";

const ProfessionalProfile = () => {
  const agent = {
    nome: "Pietro",
    cognome: "Rante",
    lavoro: "Real Estate Agent",
    città: "Roma",
    recensioni: 5,
    picture: profilePicture,
  };

  const qualifications = [
    {
      id: 1,
      title: "Laurea in Economia",
      institution: "Università di Roma",
    },
    { id: 2, title: "Certified Scrum Master", institution: "Scrum Alliance" },
  ];

  const workExperience = [
    {
      id: 1,
      title: "Agente immobiliare",
      company: "FuturHome",
      duration: "2010 - Presente",
    },
    {
      id: 2,
      title: "Sales Associate",
      company: "Futurhome",
      duration: "2005 - 2010",
    },
    {
      id: 3,
      title: "Sales Associate",
      company: "Futurhome",
      duration: "2005 - 2010",
    },
  ];

  const portfolio = [
    {
      id: 1,
      title: "Portfolio lavoro 1",
      company: "Azienda 1",
    },
    {
      id: 2,
      title: "Portfolio lavoro 2",
      company: "Azienda 2",
    },
    {
      id: 3,
      title: "Portfolio lavoro 3",
      company: "Azienda 3",
    },
  ];

  return (
    <div className="professional-profile">
      <div className="professional-profile-header">
        <div className="professional-profile-card">
          <div className="professional-profile-card-header">
            <img
              src={agent.picture}
              alt="Agent"
              className="picture"
            />
            <div>
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
            </div>
          </div>
          <div className="about-section">
            <div className="about-title">About</div>
            <div className="about-text">
              Sono un appassionato agente immobiliare con esperienza
              nell'aiutare i clienti a comprare e vendere proprietà. Ho una
              profonda comprensione del mercato locale e mi impegno a fornire un
              servizio eccezionale ai miei clienti.
            </div>
          </div>
          <div className="professional-profile-icons">
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
      </div>

      <div className="profile-body">
        <div className="experience-section">
          <div className="section-content">
            <h2>Esperienza Lavorativa</h2>
            {workExperience.map((experience) => (
              <div
                className="experience-item"
                key={experience.id}
              >
                <h3>{experience.title}</h3>
                <p>{experience.company}</p>
                <p>{experience.duration}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="education-section">
          <div className="section-content">
            <h2>Formazione</h2>
            {qualifications.map((qualification) => (
              <div
                className="education-item"
                key={qualification.id}
              >
                <h3>{qualification.title}</h3>
                <p>{qualification.institution}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="portfolio-section">
          <div className="section-content">
            <h2>Portfolio</h2>
            {portfolio.map((portfolio) => (
              <div
                className="portfolio-item"
                key={portfolio.id}
              >
                <h3>{portfolio.title}</h3>
                <p>{portfolio.company}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalProfile;
