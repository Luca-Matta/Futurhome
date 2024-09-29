import React, { useState } from 'react';
import '../../styles/Profile.css';
import Ad from './Ad';
import Banner from '../common/Banner';
import chatIcon from '../../static/icons/chat.svg';
import phoneIcon from '../../static/icons/phone.svg';
import calendarIcon from '../../static/icons/calendar.svg';
import logoutIcon from '../../static/icons/logout.svg';
import PietroRanteProfilePicture from '../../static/pietro.png';

const user = {
  first_name: 'Pietro',
  last_name: 'Rante',
  phone: '333 1234567',
  email: 'pietrorante@icloud.com',
  profilePicture: PietroRanteProfilePicture,
}


function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="profile-container">
      <div className="profile-info-section">
        <div>
          <div className="profile-header">
            <div className="profile-header-left-section">
              <div>
                <img src={user.profilePicture} alt="profile" className="agency-profile-picture"/>
              </div>
              <div className="agency-info">
                <div className="agency-name">
                  Futurhome
                </div>
                <div>
                  <div>Via Esempio, 104, 00042, Roma (RM)</div>
                  <div>www.futurhome.it</div>
                </div>
              </div>
            </div>
            <div className="profile-header-right-section">
              <div className="profile-header-vertical-line hide-on-mobile"></div>
              <div className="agency-insights">
                <div>
                  Annunci: <span className="agency-insight">10</span>
                </div>
                <div>
                  Visualizzazioni: <span className="agency-insight">100</span>
                </div>
                <div>
                  Likes: <span className="agency-insight">20</span>
                </div>
                <div>
                  Messaggi: <span className="agency-insight">4</span>
                </div>
                <div>
                  Salvataggi: <span className="agency-insight">11</span>
                </div>
                <div>
                  Appuntamenti: <span className="agency-insight">7</span>
                </div>
              </div>
              <div className="profile-header-vertical-line"></div>
              <div className="calls-to-action">
                <div className="hide-on-mobile">
                  <button>
                    <img src={chatIcon} alt="Like" className="call-to-action-icon" />
                    <span className="call-to-action">
                      Chatta con Futurhome
                    </span>
                  </button>
                </div>
                <div className="hide-on-desktop">
                  <button>
                    <img src={chatIcon} alt="Like" className="call-to-action-icon" />
                    <span className="call-to-action">
                      Messaggio
                    </span>
                  </button>
                </div>
                <div>
                  <button onClick={() => setIsModalOpen(true)}>
                    <img src={calendarIcon} alt="Like" className="call-to-action-icon" />
                    <span className="call-to-action hide-on-mobile">
                      Prenota visita
                    </span>
                    <span className="call-to-action hide-on-desktop">
                      Prenota
                    </span>
                  </button>
                </div>
                <div>
                  <button>
                    <img src={phoneIcon} alt="Like" className="call-to-action-icon" />
                    <span className="call-to-action">
                      Contatta
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-section-separator"></div>
          <div className="description-header">Bio</div>
          <div className="profile-description">
              Benvenuti in Futurhome! Con oltre x anni di esperienza nel settore immobiliare, ci dedichiamo a fornire un servizio clienti eccezionale. La nostra squadra di professionisti esperti è pronta ad assistervi in ogni fase del processo di acquisto o vendita di una casa. Che siate alla ricerca della vostra prima casa, di un upgrade o di un investimento, siamo qui per aiutarvi a realizzare i vostri sogni immobiliari.
          </div>
        </div>
      </div>
      <Banner content="Pubblica un nuovo annuncio su Futurhome" linkText="Pubblica" width="40%" margin="35px auto" />
      <div className="agency-ads-section">
        <h3>
          Gli annunci di Futurhome
        </h3>
        <div className="agency-ads">
          <Ad />
          <Ad />
          <Ad />
        </div>
      </div>
    </div>
  );
}

export default Profile;