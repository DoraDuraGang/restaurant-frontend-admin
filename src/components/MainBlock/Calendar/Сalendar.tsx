import React, { useState } from 'react';
import './Сalendar.css';

const Calendar: React.FC = () => {
    const [currentDate, setCurrentDate] = useState<Date>(new Date());

    const handlePrevMonth = () => {
        setCurrentDate((prevDate) => {
            const date = new Date(prevDate);
            date.setMonth(date.getMonth() - 1);
            return date;
        });
    };

    const handleNextMonth = () => {
        setCurrentDate((prevDate) => {
            const date = new Date(prevDate);
            date.setMonth(date.getMonth() + 1);
            return date;
        });
    };

    const renderDaysInMonth = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDayOfMonth = new Date(year, month, 1).getDay();

        const days: JSX.Element[] = [];
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div className="empty" key={`empty-${i}`} />);
        }

        const today = new Date();
        today.setHours(0, 0, 0, 0); // Убираем время для четкого сравнения

        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            date.setHours(0, 0, 0, 0); // Убираем время для четкого сравнения
            
            let className = 'day';

            if (date < today) {
                className += ' past'; // для предыдущих дней
            } else if (date.toDateString() === today.toDateString()) {
                className += ' today'; // для сегодняшнего дня
            } else {
                className += ' future'; // для будущих дней
            }

            // Логирование для отладки
            console.log(`Date: ${date.toDateString()}, Class: ${className}`);

            days.push(
                <div className={className} key={day}>
                    {day}
                </div>
            );
        }

        return days;
    };

    return (
        <div className="calendar">
            <div className="header">
                <button onClick={handlePrevMonth}>Previous</button>
                <h2>
                    {currentDate.toLocaleString('default', {
                        month: 'long',
                    })}{" "}
                    {currentDate.getFullYear()}
                </h2>
                <button onClick={handleNextMonth}>Next</button>
            </div>
            <div className="days-grid">
                {renderDaysInMonth()}
            </div>
        </div>
    );
};

export default Calendar;
