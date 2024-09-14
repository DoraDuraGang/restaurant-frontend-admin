import { useState } from "react";
import "./Сalendar.css";
import Renderdays from "./Renderdays/Renderdays";

const Calendar = () => {
 const [currentDate, setCurrentDate] = useState<Date>(new Date());

 const monthYear = currentDate.toLocaleString("default", { year: "numeric", month: "long" });

 return (
  <div className="calendar">
   <div className="header">
    <button
     onClick={() => {
      const newDate = new Date(currentDate);
      newDate.setMonth(newDate.getMonth() - 1);
      setCurrentDate(newDate);
     }}
    >
     Previous
    </button>
    <h2>{monthYear}</h2>
    <button
     onClick={() => {
      const newDate = new Date(currentDate);
      newDate.setMonth(newDate.getMonth() + 1);
      setCurrentDate(newDate);
     }}
    >
     Next
    </button>
   </div>
   <div className="days-grid">
    <Renderdays currentDate={currentDate} />
   </div>
  </div>
 );
};

export default Calendar;
