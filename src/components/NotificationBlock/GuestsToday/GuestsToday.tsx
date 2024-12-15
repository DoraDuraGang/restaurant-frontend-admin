import React, { useState } from 'react';
import mockData from '../../../MokDate/mockData'; 
import BookingButton from "../../MainBlock/OrderForm/Bookingbutton";

const GuestsToday = () => {
  const [isVisible, setIsVisible] = useState(false);

  
  const handleButtonClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <BookingButton 
        HandleClick={handleButtonClick} 
        text={isVisible ? 'Скрыть список гостей' : 'Показать список гостей'}
        Size="MedBut" 
      />
      {isVisible && (
        <ul>
          {mockData.map(guest => (
            <li key={guest.id}>
              {guest.name} - {guest.date} в {guest.time}, столик: {guest.table}, телефон: {guest.phone}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GuestsToday;
