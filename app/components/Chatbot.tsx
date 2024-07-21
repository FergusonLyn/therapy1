"use client";
import React, { useState } from 'react';
import { MdOutlineModeComment } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';

const Chatbot = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <div>
      {!showChatbot ? (
        <button
          className="fixed right-5 bottom-5 h-12 w-12 text-white flex items-center justify-center bg-blue-600 rounded-full"
          onClick={toggleChatbot}
        >
          <MdOutlineModeComment className="absolute" />
        </button>
      ) : (
        <div
          className="fixed right-5 bottom-5 w-[350px] h-[480px] bg-white rounded-lg shadow-lg flex flex-col"
        >
          <header className="bg-gray-700 p-4 text-center relative">
            {/* <h2 className="text-white text-lg">Chatbot</h2> */}
            <span
              className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white cursor-pointer"
              onClick={toggleChatbot}
            >
              <IoClose />
            </span>
          </header>
          <div className="flex-1">
          <iframe width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/eb6ed4c9-e54d-4c2f-993d-11cce6fe7b55"></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
