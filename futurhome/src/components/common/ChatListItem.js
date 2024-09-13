import React from 'react';

function ChatListItem({ chat, onChatSelect }) {
  return (
    <div className="chat-list-item" onClick={() => onChatSelect(chat)}>
      <img src={chat.profilePicture} alt={chat.name} className="chat-list-profile-picture" />
      <div className="chat-info">
        <span className="chat-name">{chat.name}</span>
        <span className="chat-last-message">{chat.lastMessage}</span>
      </div>
    </div>
  );
}

export default ChatListItem;