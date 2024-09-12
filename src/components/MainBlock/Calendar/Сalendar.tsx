import { useState } from 'react';
import './Сalendar.css';

const Calendar = ({ onPrevMonth, onNextMonth }: any) => {  
    const [currentDate, setCurrentDate] = useState<Date>(new Date());  

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
        today.setHours(0, 0, 0, 0);  

        for (let day = 1; day <= daysInMonth; day++) { 
            const date = new Date(year, month, day); 
            date.setHours(0, 0, 0, 0);  

            const className = `day ${date < today ? 'past' : date.toDateString() === today.toDateString() ? 'today' : 'future'}`; 

            days.push( 
                <div className={className} key={day}> 
                    {day} 
                </div> 
            ); 
        } 

        return days; 
    }; 

    const monthYear = currentDate.toLocaleString('default', { year: 'numeric', month: 'long' });  

    return (  
        <div className="calendar">  
            <div className="header">  
                <button onClick={() => { 
                    const newDate = new Date(currentDate); 
                    newDate.setMonth(newDate.getMonth() - 1); 
                    setCurrentDate(newDate); 
                    onPrevMonth();  
                }}>Previous</button>  
                <h2>{monthYear}</h2>  
                <button onClick={() => { 
                    const newDate = new Date(currentDate); 
                    newDate.setMonth(newDate.getMonth() + 1); 
                    setCurrentDate(newDate); 
                    onNextMonth();  
                }}>Next</button>  
            </div>  
            <div className="days-grid">  
                {renderDaysInMonth()}  
            </div>  
        </div>  
    );  
};  
 
export default Calendar;

