import Calendar from './Calendar/Сalendar';
import './index.css'

const MainBlock = () => {  
    return (  
      <div className="ViewMain">  
        <div className="Miu">  
          <h1 className='MainNameCalendar'> Wалендарик </h1>  
        </div>  
        <Calendar/>  
      </div>  
    );  
};  
 
export default MainBlock; 
