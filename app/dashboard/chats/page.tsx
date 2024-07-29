'use client';
import React, { useState } from 'react';
import Chatbot from '@/app/components/Chatbot';
import ChatSidebar from '@/app/components/ChatSideBar';
import ChatWindow from '@/app/components/ChatWindow';
import DashboardHeader from '@/app/components/DashboardHeader';

const Page: React.FC = () => {
  const [activeChat, setActiveChat] = useState<string | null>(null);

  return (
    <div>
      <DashboardHeader />
      <div className="w-full h-[600px] mt-4 grid grid-cols-1 md:grid-cols-4">
        <div className="md:col-span-1  bg-gray-800 ">
          <ChatSidebar setActiveChat={setActiveChat} />
        </div>
        <div className="md:col-span-3 bg-gray-50 flex flex-col">
          {activeChat ? <ChatWindow activeChat={activeChat} /> : <p className="p-4">Select a chat to start messaging</p>}
        </div>
      </div>
    </div>
  );
};

export default Page;
