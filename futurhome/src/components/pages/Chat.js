import React, { useState } from 'react';
import '../../styles/ChatPage.css';
import currentUserProfilePicture from '../../static/image00013.jpeg';
import PietroProfilePicture from '../../static/pietro.png';
import EnnioProfilePicture from '../../static/ennio.png';

const currentUser = {
  name: "Luca Matta",
  profilePicture: currentUserProfilePicture,
};

const chats = [
  { 
    id: 1, 
    name: "Pietro Rante", 
    lastMessage: "Ciao, ho alcune domande sull'appartamento in vendita", 
    profilePicture: PietroProfilePicture,
    messages: [
      { text: "Ciao Pietro, ho alcune domande sull'appartamento in vendita: il prezzo è trattabile? Inoltre, mi piacerebbe sapere di più sul quartiere. È tranquillo? Ci sono negozi o ristoranti nelle vicinanze? L'appartamento può essere visto? Grazie in anticipo per le tue risposte.", isMine: true },
      { text: "Ciao Luca, sì, l'appartamento può essere visto. Il luogo è tranquillo, così come il vicinato. Ci sono 2 ristoranti nelle vicinanze, ma nessun negozio. Il prezzo è leggermente trattabile. Qual è la tua proposta?", isMine: false },
    ],
  },
  { 
    id: 2, 
    name: "Ennio d'Agostino", 
    lastMessage: "Ok, sentiamoci oggi alle 19.", 
    profilePicture: EnnioProfilePicture,
    messages: [
      { text: "Ok, sentiamoci oggi alle 19.", isMine: false },
      { text: "Perfetto, a dopo!", isMine: true },
    ],
  },
];

function ChatPage({ selectedChatId }) {
  const selectedChat = chats.find(chat => chat.id === selectedChatId);
  const messages = selectedChat?.messages || [];
  const [messageText, setMessageText] = useState('');

  const handleSendMessage = (event) => {
    event.preventDefault();
    console.log(messageText);
    setMessageText('');
  };

  return (
    <div className="chat-page-container">
      <div className="chat-page-list">
        {chats.map((chat) => (
          <div key={chat.id} className="chat-list-item">
            <img src={chat.profilePicture} alt="Profile" className="chat-profile-picture" />
            <h2>{chat.name}</h2>
            <p>{chat.lastMessage}</p>
          </div>
        ))}
      </div>
      <div className="chat-page">
        <div className="chat-page-header">
          <div className="chatpage-profile-picture-container">
            <img src={selectedChat?.profilePicture} alt="Profile" className="chatpage-profile-picture" />
            <div className="chatpage-online-status"></div>
          </div>
          <h3>{selectedChat?.name} //ADD EMBED POST CODE</h3>
        </div>
        <div className="chat-page-content">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.isMine ? 'current-user' : ''}`}>
              <div className="chat-message-header">
                <div>
                  <img src={message.isMine ? currentUser.profilePicture : selectedChat.profilePicture} alt="Profile" className="message-profile-picture" />
                </div>
                <div>
                  <span className='chat-message-name'>{message.isMine ? currentUser.name : selectedChat.name}</span>
                  <span className='chat-message-dot'> · </span>
                  <span className="chat-message-timestamp">10:30 AM</span>
                  <div className='chat-message-text'>{message.text}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <form className="chat-page-message-form" onSubmit={handleSendMessage}>
          <input
            className="message-input"
            type="text"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            placeholder="Scrivi un messaggio..."
          />
          <button className="send-message-button" type="submit">
            Invia
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatPage;