import Calendar from "./Calendar/Сalendar";
import BookingButton from "./OrderForm/Bookingbutton";
import BookingForm from "./OrderForm/BookingForm/BookimgForm";
import "./index.css";
import { useState } from "react";

const MainBlock = () => {
 const [viewState, setViewState] = useState(true);

 const onClick = () => {
  setViewState(false);
 };

 const handleCloseBookingForm = () => {
  setViewState(true);
 };

 return (
  <div className="ViewMain">
   <div className="Miu">
    <h1 className="MainNameCalendar"> Календарик </h1>
   </div>
   {viewState && (
    <>
     <Calendar />
     <div className="ButtonBooking">
      <BookingButton HandleClick={onClick} text="Создать быструю бронь" Size="MedBut" />
     </div>
    </>
   )}
   {!viewState && <BookingForm onClose={handleCloseBookingForm} />}
  </div>
 );
};

export default MainBlock;
