import Calendar from "./Calendar/Сalendar"; 
import BookingButton from "./OrderForm/Bookingbutton"; 
import BookingForm from "./OrderForm/BookingForm/BookimgForm"; 
import "./index.css"; 
import { useState } from "react"; 

const MainBlock = () => { 
    const [viewState, setViewState] = useState('calendar'); 

    const onClick = () => { 
        setViewState('bookingForm');
    }; 

    const handleCloseBookingForm = () => { 
        setViewState('calendar');  
    }; 

    return ( 
        <div className="ViewMain"> 
            <div className="Miu"> 
                <h1 className="MainNameCalendar"> Календарик </h1> 
            </div> 
            {viewState === 'calendar' && <Calendar />} 
            <div className="ButtonBooking"> 
                {viewState === 'calendar' && <BookingButton onClick={onClick} />} 
            </div> 
            {viewState === 'bookingForm' && <BookingForm onClose={handleCloseBookingForm} />} 
        </div> 
    ); 
}; 

export default MainBlock;
