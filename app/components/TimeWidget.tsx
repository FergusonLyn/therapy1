// components/TimeWidget.tsx
"use client"; // Only this component uses "use client"
import React from 'react';

const TimeWidget = () => {
  const times = [
     "9:00 AM","9:30 AM", "10:00 AM","10:30 AM", "11:00 AM", 
    "11:30 AM","12:00 PM", "1:00 PM","2:00 PM", "3:00 PM", "3:00 PM", "3:00 PM"
  ];

  return (
    <div className="time-widget grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 m-2">
      {times.map((time, index) => (
        <div key={index} className="time-slot p-4 bg-blue-600 text-white text-center rounded-md">
          {time}
        </div>
      ))}
    </div>
  );
};

export default TimeWidget;
