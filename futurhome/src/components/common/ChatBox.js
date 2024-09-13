import React from 'react';
import '../../styles/Chat.css';
import ChatList from './ChatList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import profilePicture from '../../static/image00013.jpeg';

function ChatBox({ onClose }) {
  return (
    <div className="chat-box">
      <div className="chat-header">
        <div className="header-content">
          <div className="profile-picture-container">
            <img src={profilePicture} alt="Profile" className="chat-profile-picture" />
            <div className="online-status"></div>
          </div>
          <span>Messaggistica</span>
        </div>
        <button className="chat-close-button" onClick={onClose}>
          <FontAwesomeIcon icon={faCaretDown} />
        </button>
      </div>
      <div className="chat-messages">
        <ChatList/>
      </div>
    </div>
  );
}

export default ChatBox;