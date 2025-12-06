import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CustomDatePicker({ selected, onChange, placeholder }) {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // normalize to midnight

  return (
    <DatePicker
      selected={selected} // pass null if you want placeholder to show
      onChange={onChange}
      placeholderText={placeholder}
      className="date_input border outline-0 shadow-none"
      calendarClassName="calendar border outline-0 shadow-none"
      dateFormat="dd-MM-yyyy"
      minDate={today}
      highlightDates={[today]}
      showPopperArrow={false}
      wrapperClassName="d-block w-100"
    />
  );
}