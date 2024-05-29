"use client"; // Only this component uses "use client"
import React from 'react';
import 'react-widgets/styles.css';
import Calendar from "react-widgets/Calendar";

const CalendarWidget = () => {
  return (
    <div className=' mt-10 bg-slate-500 w-full'>
      <Calendar />
    </div>
  );
};

export default CalendarWidget;