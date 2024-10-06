import './Bookingbutton.css'; 

interface Props {
    onClick: () => void; 
}

const BookingButton = ({ onClick }: Props) => {
 
    return (
        <button className="booking-button" onClick={onClick}>
            Создать быструю бронь
        </button>
    );
};

export default BookingButton;
