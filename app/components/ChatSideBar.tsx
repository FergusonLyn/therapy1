'use client';
import React from 'react';

interface ChatSidebarProps {
  setActiveChat: (chat: string) => void;
}

const ChatSidebar: React.FC<ChatSidebarProps> = ({ setActiveChat }) => {
  const chats = ['Mrs. Victoria De-Graft Adjei', 'Mr. Joseph Asamoah-Gyawu', 'Mr. Rabbi Darko'];

  return (
    <div className="w-full bg-gray-800 text-white">
      <h2 className="text-xl font-bold p-4 border-b border-gray-700">Chats</h2>
      <ul>
        {chats.map((chat, index) => (
          <li
            key={index}
            className="p-4 hover:bg-gray-700 cursor-pointer"
            onClick={() => setActiveChat(chat)}
          >
            {chat}
          </li>
        ))}
      </ul>
     
    </div>
  );
};

export default ChatSidebar;
