import React, { useState } from 'react';
import './Сalendar.css';

// TODO: React.FC можно не указывать, лишнее
const Calendar: React.FC = () => {
    const [currentDate, setCurrentDate] = useState<Date>(new Date());

    // TODO: можно не оборачивать в функцию, сделать все в верстке
    const handlePrevMonth = () => {
        setCurrentDate((prevDate) => {
            const date = new Date(prevDate);
            date.setMonth(date.getMonth() - 1);
            return date;
        });
    };

    // TODO: можно не оборачивать в функцию, сделать все в верстке
    const handleNextMonth = () => {
        setCurrentDate((prevDate) => {
            const date = new Date(prevDate);
            date.setMonth(date.getMonth() + 1);
            return date;
        });
    };


    // TODO: расскажи в голосовом как работает
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

            // TODO: Если можно переделать в const
            let className = 'day';

            if (date < today) {
                className += ' past'; // для предыдущих дней
            } else if (date.toDateString() === today.toDateString()) {
                className += ' today'; // для сегодняшнего дня
            } else {
                className += ' future'; // для будущих дней
            }

            // TODO: Не оставляй консоль логи в коммите
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
                    {/*
                        TODO: как будто можно вынести в переменную
                    */ }
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
