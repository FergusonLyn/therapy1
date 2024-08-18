import CDashboardHeader from '@/app/components/CDashboardHeader';
import Image from 'next/image';
import React from 'react';

const Page = () => {
  return (
    <div>
      <CDashboardHeader />

      {/* Your Patients Appointments Section */}
      <div id="appointments" className="flex items-center justify-center h-[500px] mt-6">
        <div className="w-[70%] h-full rounded-md bg-white border-2 border-gray-200 shadow-sm p-4">
          <div className="flex flex-row">
            <h1 className="font-semibold text-lg m-2">Your Patients Appointments</h1>
          </div>
          <hr />

          {/* Scrollable content area */}
          <div className="overflow-y-auto h-[350px] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
            <div className="flex items-center justify-between p-4 m-3 rounded-md">
              <div className="flex-shrink-0">
                <p className="text-sm">Patient Name</p>
              </div>
              <div className="flex items-center flex-grow justify-center">
                <div className="flex items-center border-2 border-gray-600 px-2 rounded-full">
                  <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mr-3">
                    <Image
                      src="/profile.jpg"
                      alt="profile picture"
                      className="w-full h-full object-cover rounded-full"
                      width={40}
                      height={40}
                    />
                  </div>
                  <p className="text-lg font-semibold">John Doe</p>
                </div>
              </div>
              <div className="flex-shrink-0">
                <p className="text-md font-semibold">Appointment Time</p>
              </div>
            </div>
            {/* Add more patient appointments here */}
          </div>
        </div>
      </div>

      {/* Session Requests Section */}
      <div id="sessions" className="flex items-center justify-center h-[500px] mt-6">
        <div className="w-[70%] h-full rounded-md bg-white border-2 border-gray-200 shadow-sm p-4">
          <div className="flex flex-row">
            <h1 className="font-semibold text-lg m-2">Session Requests</h1>
          </div>
          <hr />

          {/* Scrollable content area */}
          <div className="overflow-y-auto h-[350px] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
            <div className="flex items-center justify-between p-4 m-3 rounded-md">
              <div className="flex-shrink-0">
                <p className="text-sm">Patient Name</p>
              </div>
              <div className="flex items-center flex-grow justify-center">
                <div className="flex items-center border-2 border-gray-600 px-2 rounded-full">
                  <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mr-3">
                    <Image
                      src="/profile.jpg"
                      alt="profile picture"
                      className="w-full h-full object-cover rounded-full"
                      width={40}
                      height={40}
                    />
                  </div>
                  <p className="text-lg font-semibold">John Doe</p>
                </div>
              </div>
              <div className="flex-shrink-0 flex items-center">
                <div className="flex space-x-2">
                  <button className="border-2 py-2 px-4 rounded-md hover:font-semibold hover:text-green-300">
                    Accept
                  </button>
                  <button className="border-2 py-2 px-4 rounded-md hover:font-semibold hover:text-red-300">
                    Decline
                  </button>
                </div>
              </div>
            </div>
            {/* Add more session requests here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
