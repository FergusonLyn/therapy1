"use client";
import React, { useState } from 'react';
import { RiRobot2Line } from 'react-icons/ri';
import { IoIosSend } from 'react-icons/io';
import { MdOutlineModeComment } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';

const Chatbot = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'incoming', text: 'Hi there! How can I help you today?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { type: 'outgoing', text: inputMessage }]);
      setInputMessage('');
    }
  };

  const handleInputKeyPress = (e:any) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div>
      <button
        className={`fixed right-5 bottom-5 h-12 w-12 text-white flex items-center justify-center bg-blue-600 rounded-full ${showChatbot ? 'hidden' : 'block'}`}
        onClick={toggleChatbot}
      >
        <MdOutlineModeComment className="absolute" />
      </button>

      <div
        className={`fixed right-0 bottom-0 w-full sm:w-96 h-full sm:h-auto sm:right-5 sm:bottom-24 transform transition-transform duration-300 ${
          showChatbot ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-50 opacity-0 pointer-events-none'
        } overflow-hidden bg-white rounded-lg shadow-lg flex flex-col`}
      >
        <header className="bg-blue-600 p-4 text-center relative">
          <h2 className="text-white text-lg">Chatbot</h2>
          <span
            className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white cursor-pointer"
            onClick={toggleChatbot}
          >
            <IoClose />
          </span>
        </header>
        <ul className="flex-1 overflow-y-auto p-4">
          {messages.map((msg, index) => (
            <li key={index} className={`flex ${msg.type === 'incoming' ? 'items-end' : 'justify-end'} mb-4`}>
              {msg.type === 'incoming' && (
                <span className="h-8 w-8 flex items-center justify-center bg-purple-600 text-white rounded-md mr-2">
                  <RiRobot2Line />
                </span>
              )}
              <p className={`p-3 rounded-lg ${msg.type === 'incoming' ? 'bg-gray-200 text-black' : 'bg-blue-600 text-white'}`}>
                {msg.text}
              </p>
            </li>
          ))}
        </ul>
        <div className="p-4 bg-white border-t border-gray-300 flex items-center">
          <textarea
            className="h-14 w-full border-none outline-none text-sm resize-none p-2"
            placeholder="Enter a message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleInputKeyPress}
            required
          ></textarea>
          <span
            className="h-14 flex items-center text-blue-600 text-2xl cursor-pointer"
            onClick={handleSendMessage}
          >
            <IoIosSend />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
