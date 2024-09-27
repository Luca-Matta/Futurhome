import React, { useState } from 'react';
import '../../styles/Notifications.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import CurvedRightArrow from '../../static/icons/curved-right-arrow.svg';
import PietroProfilePicture from '../../static/pietro.png';
import EnnioProfilePicture from '../../static/ennio.png';

const notifications = [
  {
    id: 1,
    user: "Pietro Rante",
    first_name: "Pietro",
    profilePicture: PietroProfilePicture,
    message: "Nuovo messaggio: Ciao, ho alcune domande sull'appartamento in vendita: il prezzo è trattabile? Inoltre, mi piacerebbe sapere di più sul quartiere. È tranquillo? Ci sono negozi o ristoranti nelle vicinanze? L'appartamento può essere visto? Grazie in anticipo per le tue risposte.",
    timestamp: "10:30",
    read: false,
  },
  { 
    id: 2,
    user: "Ennio d'Agostino",
    first_name: "Ennio",
    profilePicture: EnnioProfilePicture,
    message: "Ha aggiunto il tuo annuncio ai segnalibri.",
    timestamp: "Ieri",
    read: false,
  },
];

function NotificationsPage({ selectedNotificationId }) {
  const selectedNotifications = selectedNotificationId.map(id => notifications.find(notification => notification.id === id));
  const [selectedId, setSelectedId] = useState(selectedNotificationId[0] || null);

  const handleNotificationClick = (id) => {
    setSelectedId(id);
  };

  return (
    <div className="notifications-container">
      <div className="notifications">
        <div className="notifications-header">
          <h2>Notifiche</h2>
        </div>
        <div className="notifications-content">
          {selectedNotifications.map(selectedNotification => (
            <div className="notification" key={selectedNotification.id}>
              <div className="notification-left-section">
                <div className="notification-profile-container">
                    {!selectedNotification.read && (
                      <div className="unread-indicator">1</div>
                      )}
                  <div>
                    <img src={selectedNotification.profilePicture} alt="Profile" className="notifications-profile-picture" />
                  </div>
                </div>
                <div>
                  <div className="notification-text">
                    <span className="notification-name">
                      {selectedNotification.user}
                    </span>
                    | {selectedNotification.message.substring(0, 102)}
                    {selectedNotification.message.length > 102 && "..."}
                    <div className="notification-reply">
                      <img src={CurvedRightArrow} alt="Reply" className="notification-reply-arrow" />
                      <a href="" className="notification-reply-content">
                        <div>
                          Chatta con {selectedNotification.first_name}
                        </div>
                        <div className="notification-chat-icon">
                          <FontAwesomeIcon icon={faCommentDots} />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="notification-right-section">
                <div>
                  <div className="notification-timestamp">{selectedNotification.timestamp}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NotificationsPage;