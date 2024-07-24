'use client';
import React, { useState } from 'react';
import { IoSend } from 'react-icons/io5';

interface ChatWindowProps {
  activeChat: string;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ activeChat }) => {
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-gray-300">
        <h2 className="text-xl text-gray-600 font-bold">{activeChat}</h2>
      </div>
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div key={index} className="flex flex-col items-end mb-4">
            <img
              src="/path-to-profile-pic.jpg" // Replace with actual path to profile picture
              alt="Profile"
              className="w-8 h-8 rounded-full mb-1"
            />
            <div className="bg-blue-500 text-white p-2 rounded-lg max-w-xs">{message}</div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-gray-300 flex">
        <input
          type="text"
          placeholder="Type a message..."
          className="h-14 w-full border-none outline-none text-sm resize-none p-2"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          <IoSend size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
