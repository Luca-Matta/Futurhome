import React, { useState } from 'react';
import ChatBox from './ChatBox';
import '../../styles/Chat.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import mobileChatButtonIcon from '../../static/mobile-chat-button-icon.png';
import profilePicture from '../../static/image00013.jpeg';

function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chat-container">
      {!isOpen && (
        <button className="chat-open-button" onClick={handleClick}>
          <div className="profile-picture-container hide-on-mobile">
            <img src={profilePicture} alt="Profile" className="chat-profile-picture hide-on-mobile" />
            <div className="online-status hide-on-mobile"></div>
          </div>
          <span className="hide-on-mobile">Messaggistica</span>
          <FontAwesomeIcon icon={isOpen ? faCaretDown : faCaretUp} className="hide-on-mobile" />
          <img src={mobileChatButtonIcon} alt="Chat" className="mobile-chat-button-icon hide-on-desktop" />
          <div className="unread-messages-count hide-on-desktop">3</div>
        </button>
      )}
      {isOpen && <ChatBox onClose={handleClick} />}
    </div>
  );
}

export default ChatButton;