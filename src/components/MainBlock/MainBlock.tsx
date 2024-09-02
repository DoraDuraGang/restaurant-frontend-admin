import Calendar from './Calendar/Сalendar';
import './index.css'

// TODO: Форматирование

const MainBlock = () => {
  return (
    <div className="ViewMain">
      <div className="Miu">
        <h1 className='MainNameCalendar'> Календарик </h1>
      </div>
      <Calendar/>
    </div>
  );
};

export default MainBlock;
