'use client'
import React from 'react'
import DatePicker from "react-widgets/DatePicker";

const DateWidget = () => {
  return (
    <div>
        <DatePicker
        disabled
        defaultValue={new Date()}
        />
    </div>
  )
}

export default DateWidget
