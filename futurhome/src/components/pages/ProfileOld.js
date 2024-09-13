import React, { useState } from 'react';
import '../../styles/ProfileOld.css';
import logoutIcon from '../../static/logout-icon.png';
import PietroRanteProfilePicture from '../../static/pietro.png';

const user = {
  name: 'Pietro',
  surname: 'Rante',
  phone: '333 1234567',
  email: 'pietrorante@icloud.com',
  profilePicture: PietroRanteProfilePicture,
}

function ProfileOld() {
  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.surname);
  const [phone, setPhone] = useState(user.phone);
  const [email, setEmail] = useState(user.email);

  return (
    <div className="profile-container">
      <div className="profile-left">
          <div className="profile-header">
            <img className="profile-profile-picture" src={user.profilePicture} alt="User profile" />
            <div className="profile-name">
              <div>Ciao</div>
              <span className="profile-greeting">{name}</span>
            </div>
          </div>
          <div className="profile-logout">
            <img src={logoutIcon} alt="logout" className="profile-logout-icon"/>
            <div>
              Esci dal profilo
            </div>
          </div>
      </div>
      <div className="profile-right">
        <h1 className="profile-title">Il mio profilo</h1>
        <div className="profile-section">
          <h3 className="section-title">Dati personali</h3>
          <div className="profile-section-inputs">
            <input className="profile-input" value={name} onChange={e => setName(e.target.value)} placeholder="Nome" />
            <input className="profile-input" value={surname} onChange={e => setSurname(e.target.value)} placeholder="Cognome" />
          </div>
            <button className="profile-button">Salva</button>
        </div>
        <div className="profile-section">
          <h3 className="section-title">Contatti</h3>
          <div className="profile-section-inputs">
            <input className="profile-input" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Telefono" />
            <input className="profile-input" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
          </div>
          <button className="profile-button">Salva</button>
        </div>
        <div className="profile-section">
          <h3 className="section-title">Password</h3>
            <input className="profile-input" type="password" placeholder="Vecchia password" />
          <div className="profile-section-inputs">
            <input className="profile-input" type="password" placeholder="Nuova password" />
            <input className="profile-input" type="password" placeholder="Conferma password" />
          </div>
          <button className="profile-button">Salva</button>
        </div>
      </div>
    </div>
  );
}

export default ProfileOld;