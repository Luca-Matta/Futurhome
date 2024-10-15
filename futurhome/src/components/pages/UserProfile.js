import React, { useState } from "react";
import "../../styles/UserProfile.css";
import Banner from "../common/Banner";
import chatIcon from "../../static/icons/green-chat.svg";
import bookmarkIcon from "../../static/icons/green-bookmark.svg";
import logoutIcon from "../../static/icons/logout.svg";
import defaultAvatar from "../../static/icons/default-avatar.svg";
import userProfilePicture from "../../static/pietro.png";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const user = {
  name: "Pietro",
  surname: "Rante",
  phone: "333 1234567",
  profilePicture: userProfilePicture,
};

function UserProfile() {
  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.surname);
  const [phone, setPhone] = useState(user.phone);
  const { userEmail, setUserEmail, isLoggedIn } = useContext(AuthContext);

  return (
    <div>
      <div className="user-profile-container">
        <div className="user-profile-left">
          <div className="user-profile-header">
            <img
              className="user-profile-picture"
              // src={isLoggedIn ? user.profilePicture : defaultAvatar}
              src={user.profilePicture}
              alt="User profile"
            />
            <div className="user-profile-name">
              <div className="user-profile-greeting">
                {name} {surname}
              </div>
            </div>
          </div>
          <div className="user-profile-buttons">
            <button>
              <img
                src={chatIcon}
                alt="chat"
                className="user-profile-chat-icon"
              />
              <div>Messaggi</div>
            </button>
            <button>
              <img
                src={bookmarkIcon}
                alt="chat"
                className="user-profile-chat-icon"
              />
              <div>Annunci salvati</div>
            </button>
            <button>
              <img
                src={bookmarkIcon}
                alt="chat"
                className="user-profile-chat-icon"
              />
              <div>Ricerche salvate</div>
            </button>
          </div>
          {/* <div className='user-profile-logout'>
              <img src={logoutIcon} alt="logout" className="user-profile-logout-icon"/>
              <div>
                Logout
              </div>
            </div> */}
          <div className="user-profile-logout">
            <img
              src={logoutIcon}
              alt="logout"
              className="user-profile-logout-icon"
            />
            <div>Annuncio</div>
          </div>
        </div>
        <div className="user-profile-buttons-mobile">
          <button>
            <img
              src={chatIcon}
              alt="chat"
              className="user-profile-chat-icon"
            />
            <div>Messaggi</div>
          </button>
          <button>
            <img
              src={bookmarkIcon}
              alt="chat"
              className="user-profile-chat-icon"
            />
            <div>Annunci salvati</div>
          </button>
          <button>
            <img
              src={bookmarkIcon}
              alt="chat"
              className="user-profile-chat-icon"
            />
            <div>Ricerche salvate</div>
          </button>
        </div>
        <div className="user-profile-right">
          <h1 className="user-profile-title">Il mio profilo</h1>
          <div className="user-profile-section">
            <h3 className="section-title">Dati personali</h3>
            <div className="user-profile-section-inputs">
              <div className="user-profile-input-container">
                <div className="user-profile-input-label">Nome</div>
                <input
                  className="user-profile-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nome"
                />
              </div>
              <div className="user-profile-input-container">
                <div className="user-profile-input-label">Cognome</div>
                <input
                  className="user-profile-input"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  placeholder="Cognome"
                />
              </div>
            </div>
            <button className="user-profile-button">Salva</button>
          </div>
          <div className="user-profile-section">
            <h3 className="section-title">Contatti</h3>
            <div className="user-profile-section-inputs">
              <div className="user-profile-input-container">
                <div className="user-profile-input-label">Telefono</div>
                <input
                  className="user-profile-input"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Telefono"
                />
              </div>
              <div className="user-profile-input-container">
                <div className="user-profile-input-label">Email</div>
                <input
                  className="user-profile-input"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>
            </div>
            <button className="user-profile-button">Salva</button>
          </div>
          <div className="user-profile-section">
            <h3 className="section-title">Password</h3>
            <div>
              <div className="user-profile-input-label">Vecchia password</div>
              <input
                className="user-profile-input"
                type="password"
                placeholder="********"
              />
            </div>
            <div className="user-profile-section-inputs">
              <div className="user-profile-input-container">
                <div className="user-profile-input-label">Nuova password</div>
                <input
                  className="user-profile-input"
                  type="password"
                  placeholder="Nuova password"
                />
              </div>
              <div className="user-profile-input-container">
                <div className="user-profile-input-label">
                  Conferma password
                </div>
                <input
                  className="user-profile-input"
                  type="password"
                  placeholder="Conferma password"
                />
              </div>
            </div>
            <button className="user-profile-button">Salva</button>
          </div>
        </div>
      </div>
      <Banner
        content="Pubblica un nuovo annuncio su Futurhome"
        linkText="Pubblica"
        width="50%"
        margin="25px auto"
      />
    </div>
  );
}

export default UserProfile;
