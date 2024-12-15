import './Bookingbutton.css'; 

interface Props {
    HandleClick: () => void;
    text: string;
    Size: 'Smallbut' | 'MedBut' | 'LarBut';
    
}

const BookingButton = ({HandleClick , text, Size }: Props) => {


    return (
        <button className = {`BookingButton ${Size}`} onClick={HandleClick} >
         {text}
        </button>
    );
};

export default BookingButton;
