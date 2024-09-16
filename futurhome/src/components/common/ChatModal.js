import React, { useState } from 'react';
import '../../styles/ChatModal.css';
import currentUserProfilePicture from '../../static/image00013.jpeg';

const currentUser = {
  name: "Luca Matta",
  profilePicture: currentUserProfilePicture,
};

function ChatModal({ isOpen, onClose, children, selectedChat, messages = [] }) {
  const [messageText, setMessageText] = useState('');

  const handleSendMessage = (event) => {
    event.preventDefault();
    console.log(messageText);
    setMessageText('');
  };
  
  if (!isOpen) {
    return null;
  }

  return (
    <div className="chat-modal">
      {selectedChat && (
        <div className="chat-modal-header">
          <div className="chat-header-content">
            <div className="profile-picture-container">
              <img src={selectedChat.profilePicture} alt="Profile" className="chat-profile-picture" />
              <div className="online-status"></div>
            </div>
            <span>{selectedChat.name} //ADD EMBED POST CODE</span>
          </div>
          <div className="chat-modal-close-button-container">
            <button onClick={onClose} className="chat-modal-close-button">X</button>
            {children}
          </div>
        </div>
      )}
      <div className="chat-modal-content">
        <div className="chat-modal-messages">
          {messages.map((message, index) => (
            <div key={index} className={`chat-message ${message.isMine ? 'mine' : ''}`}>
              <div className="message-header">
                <div>
                  <img src={message.isMine ? currentUser.profilePicture : selectedChat.profilePicture} alt="Profile" className="message-profile-picture" />
                </div>
                <div>
                  <span className='message-name'>{message.isMine ? currentUser.name : selectedChat.name}</span>
                  <span className='message-dot'> · </span>
                  <span className="message-timestamp">10:30 AM</span>
                  <div className='message-text'>{message.text}</div>
                </div>
              </div>
            </div>
          ))}
          {children}
        </div>
        <form onSubmit={handleSendMessage} className="message-form">
          <input
            type="text"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            className="message-input"
            placeholder="Scrivi un messaggio..."
          />
          <button type="submit" className="send-message-button">Invia</button>
        </form>
      </div>
    </div>
  );
}

export default ChatModal;