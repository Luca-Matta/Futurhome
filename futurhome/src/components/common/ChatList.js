import React, { useState } from 'react';
import ChatListItem from './ChatListItem';
import ChatModal from './ChatModal';
import '../../styles/ChatList.css';
import PietroProfilePicture from '../../static/pietro.png';
import EnnioProfilePicture from '../../static/ennio.png';

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

function ChatList() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="chat-list">
      {chats.map(chat => (
        <ChatListItem key={chat.id} chat={chat} onChatSelect={handleChatSelect} />
      ))}
      <ChatModal isOpen={isModalOpen} onClose={closeModal} selectedChat={selectedChat} messages={selectedChat?.messages}>
        {/* chat content goes here */}
      </ChatModal>
    </div>
  );
}

export default ChatList;