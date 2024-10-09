import { useForm } from 'react-hook-form'; 
import './BookingForm.css'; 

const BookingForm = ({ onClose }: any) => { 
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = (data: any) => {
        console.log(data);
    };

    return ( 
        <form className="RegForm" onSubmit={handleSubmit(onSubmit)}> 
            <input 
                className='InField' 
                type="date"  
                {...register("date", { required: true })}  
            /> 
            {errors.date && <span>Это поле обязательно</span>}

            <select 
                className='InField' 
                {...register("table", { required: true })} 
            > 
                <option value="">Выберите стол</option> 
                {Array.from({ length: 15 }, (_, i) => ( 
                    <option key={i + 1} value={i + 1}>Стол {i + 1}</option> 
                ))} 
            </select> 
            {errors.table && <span>Это поле обязательно</span>}

            <input 
                className='InField' 
                type="text"  
                {...register("name", { required: true })}  
                placeholder="Имя гостя"  
            /> 
            {errors.name && <span>Это поле обязательно</span>}

            <input 
                className='InField' 
                type="time"  
                {...register("time", { required: true })}  
            /> 
            {errors.time && <span>Это поле обязательно</span>}

            <input 
                className='InField' 
                type="tel"  
                {...register("phone", { 
                    required: true, 
                    pattern:  /^[0-9]{10}$/ 
                })}  
                placeholder="+7/8"  
            /> 
            {errors.phone && <span>Введите номер телефона</span>}

            <button className='OrderBut' type="submit">Забронировать</button> 
            <button className='OrderBut' type="button" onClick={onClose}>Отмена</button> 
        </form> 
    ); 
}; 

export default BookingForm; 
