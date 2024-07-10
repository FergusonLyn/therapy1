import React from 'react';
import { format } from 'date-fns';

const TodayDate = () => {
  const today = new Date();
  const formattedDate = format(today, "eeee, do MMMM");

  return (
    <div className="text-gray-500 font-semibold text-lg m-2">
      Today is {formattedDate}
    </div>
  );
}

export default TodayDate;
