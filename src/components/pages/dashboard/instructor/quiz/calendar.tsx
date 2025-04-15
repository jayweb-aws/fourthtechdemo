import React, { useState } from "react";
import Calendar from "react-calendar";

export default function QuizCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="p-5 bg-white ">
      <Calendar onChange={onChange} value={value} className="mx-auto" />
    </div>
  );
}
