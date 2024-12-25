
import './MockDataDisplay.css'; 
import mockData from './mockData'; 
import { useState } from 'react';

interface MockData {
 id: number;
 name: string;
 date: string;
 time: string;
 table: number;
 phone: string;
}

const MockDataDisplay: React.FC = () => {
 const [selectedPerson, setSelectedPerson] = useState<MockData | null>(null);

 const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
     const selectedId = parseInt(event.target.value);
     const person = mockData.find(item => item.id === selectedId) || null;
     setSelectedPerson(person);
 };

 return (
     <div className="mock-data-container">
         <h2>Забронированные столы</h2>
         <select onChange={handleSelectChange} defaultValue="">
             <option value="" disabled>Выберите человека</option>
             {mockData.map((item) => (
                 <option key={item.id} value={item.id}>
                     {item.name}
                      {' стол №'}
                     {item.table}
                      {' '}
                     {item.date}
                 </option>
             ))}
         </select>

         {selectedPerson && (
             <div className="mock-data-details">
                 <h3>Информация о бронировании</h3>
                 <p><strong>Имя:</strong> {selectedPerson.name}</p>
                 <p><strong>Дата:</strong> {selectedPerson.date}</p>
                 <p><strong>Время:</strong> {selectedPerson.time}</p>
                 <p><strong>Стол:</strong> {selectedPerson.table}</p>
                 <p><strong>Телефон:</strong> {selectedPerson.phone}</p>
             </div>
         )}
     </div>
 );
};

export default MockDataDisplay;
