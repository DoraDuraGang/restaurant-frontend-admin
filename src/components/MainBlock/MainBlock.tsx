import Calendar from "./Calendar/Сalendar";
import BookingButton from "./OrderForm/Bookingbutton";
import BookingForm from "./OrderForm/BookingForm/BookimgForm";
import "./index.css";
import { useState } from "react";

const MainBlock = () => {
    const [hideCalendar, setHideCalendar] = useState(false);
    const [showBookingForm, setShowBookingForm] = useState(false);
    
    const BookingClick = () => {
        setHideCalendar(true);
        setShowBookingForm(true);
    };

    const handleCloseBookingForm = () => {
        setHideCalendar(false);
        setShowBookingForm(false);
    };

    return (
        <div className="ViewMain">
            <div className="Miu">
                <h1 className="MainNameCalendar"> Календарик </h1>
            </div>
            {!hideCalendar && <Calendar />}
            <div className="ButtonBooking">
                {!showBookingForm && <BookingButton onClick={BookingClick} />}
            </div>
            {showBookingForm && <BookingForm onClose={handleCloseBookingForm} />}
        </div>
    );
};

export default MainBlock;
