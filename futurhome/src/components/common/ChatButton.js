import React, { useState } from 'react';
import ChatBox from './ChatBox';
import '../../styles/Chat.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
// import mobileChatButtonIcon from '../../static/mobile-chat-button-icon.png';
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
          <div className="mobile-chat-button-icon hide-on-desktop">
            <svg xmlns="http://www.w3.org/2000/svg" width="1080" zoomAndPan="magnify" viewBox="0 0 810 809.999993" height="1080" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="64edab5f05"><path d="M 1 60 L 807 60 L 807 753.695312 L 1 753.695312 Z M 1 60 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#64edab5f05)"><path fill="#139a43" d="M 562.457031 424.59375 C 535.050781 424.59375 512.84375 402.382812 512.84375 374.984375 C 512.84375 347.589844 535.050781 325.375 562.457031 325.375 C 589.851562 325.375 612.0625 347.589844 612.0625 374.984375 C 612.0625 402.382812 589.851562 424.59375 562.457031 424.59375 Z M 397.085938 424.59375 C 369.683594 424.59375 347.472656 402.382812 347.472656 374.984375 C 347.472656 347.589844 369.683594 325.375 397.085938 325.375 C 424.488281 325.375 446.695312 347.589844 446.695312 374.984375 C 446.695312 402.382812 424.488281 424.59375 397.085938 424.59375 Z M 231.714844 424.59375 C 204.316406 424.59375 182.101562 402.382812 182.101562 374.984375 C 182.101562 347.589844 204.316406 325.375 231.714844 325.375 C 259.117188 325.375 281.328125 347.589844 281.328125 374.984375 C 281.328125 402.382812 259.117188 424.59375 231.714844 424.59375 Z M 410.082031 60.664062 C 187.667969 56.28125 4.589844 193.335938 1.175781 366.78125 C -0.0117188 427.082031 20.683594 483.835938 57.523438 532.414062 L 57.511719 532.414062 C 120.859375 613.796875 51.71875 753.707031 51.71875 753.707031 L 255.855469 665.792969 C 299.832031 679.691406 347.621094 687.785156 397.707031 688.773438 C 620.117188 693.152344 803.191406 556.105469 806.609375 382.65625 C 810.03125 209.207031 632.5 65.054688 410.082031 60.664062 " fill-opacity="1" fill-rule="evenodd"/></g></svg>
          </div>
          <div className="unread-messages-count hide-on-desktop">3</div>
        </button>
      )}
      {isOpen && <ChatBox onClose={handleClick} />}
    </div>
  );
}

export default ChatButton;