import { useState } from 'react';
import './BookingForm.css';

const BookingForm = ({ onClose }: any) => {
    const [date, setDate] = useState('');
    const [table, setTable] = useState('');
    const [name, setName] = useState('');
    const [time, setTime] = useState('');
    const [phone, setPhone] = useState('');

    return (
        <div className="registration-form">
            <input 
                type="date" 
                id="date" 
                value={date} 
                onChange={(e) => setDate(e.target.value)} 
                required 
            />
            <select 
                id="table" 
                value={table} 
                onChange={(e) => setTable(e.target.value)} 
                required
            >
                <option value="">Выберите стол</option>
                {Array.from({ length: 15 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>Стол {i + 1}</option>
                ))}
            </select>
            <label htmlFor="name"></label>
            <input 
                type="text" 
                id="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
                placeholder="Имя гостя" 
            />
            <input 
                type="time" 
                id="time" 
                value={time} 
                onChange={(e) => setTime(e.target.value)} 
                required 
            />
            <input 
                type="tel" 
                id="phone" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                required 
                pattern="[0-9]{10}" 
                placeholder="+7/8" 
            />
            <button type="submit">Забронировать</button>
            <button type="button" onClick={onClose}>Отмена</button>
        </div>
    );
};

export default BookingForm;
