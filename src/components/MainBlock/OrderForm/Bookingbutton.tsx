import './Bookingbutton.css'; 

interface Props {
    onClick: () => void; 
}

const BookingButton = ({ onClick }: Props) => {
 
    return (
        <button className="BookingButton" onClick={onClick}>
            Создать быструю бронь
        </button>
    );
};

export default BookingButton;
