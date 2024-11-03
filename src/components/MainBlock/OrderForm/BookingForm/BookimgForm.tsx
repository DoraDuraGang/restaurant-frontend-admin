import { useForm } from 'react-hook-form'; 
import * as yup from 'yup';
import './BookingForm.css'; 
import {yupResolver} from '@hookform/resolvers/yup';


interface Props {
    onClose: () => void;
}

interface FormData {
    date: string; 
    table: number; 
    name: string; 
    time: string; 
    phone: string; 
}


const schema = yup.object().shape({
 date: yup.string().required('Это поле обязательно'),
 table: yup.number()
     .required('Это поле обязательно')
     .positive('Стол должен быть положительным числом')
     .integer('Стол должен быть целым числом'),
 name: yup.string()
     .required('Это поле обязательно')
     .matches(/^[А-Яа-яЁё\s]+$/, 'Имя может содержать только буквы и пробелы'), 
 time: yup.string().required('Это поле обязательно'),
 phone: yup.string()
     .required('Введите номер телефона')
     .matches(/^\+7[0-9]{10}$/, 'Введите корректный номер телефона в формате +7XXXXXXXXXX')
});

const BookingForm = ({ onClose }: Props) => { 
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
     resolver: yupResolver(schema),
     defaultValues: {
      phone: '+7',
      date: '', 
      table: 1,
      name: '', 
      time: ''
     },
    });

    const onSubmit = async (data: FormData) => {  
            console.log(data);
    };

    return ( 
        <form className="RegForm" onSubmit={handleSubmit(onSubmit)}> 
            <input 
                className='InField' 
                type="date"  
                {...register("date")}  
            /> 
            {errors.date && <span>{errors.date.message}</span>}
            
            <select 
                className='InField' 
                {...register("table")} 
            > 
                <option value="">Выберите стол</option> 
                {Array.from({ length: 15 }, (_, i) => ( 
                    <option key={i + 1} value={i + 1}>Стол {i + 1}</option> 
                ))} 
            </select> 
            {errors.table && <span>{errors.table.message}</span>}
            
            <input 
                className='InField' 
                type="text"  
                {...register("name")}  
                placeholder="Имя гостя"  
            /> 
            {errors.name && <span>{errors.name.message}</span>}
            
            <input 
                className='InField' 
                type="time"  
                {...register("time")}  
            /> 
            {errors.time && <span>{errors.time.message}</span>}
            
            <input 
                className='InField' 
                type="tel"  
                {...register("phone")}  
                placeholder="+7/8"  
            /> 
            {errors.phone && <span>{errors.phone.message}</span>}
            
            <button className='OrderBut' type="submit">Забронировать</button> 
            <button className='OrderBut' type="button" onClick={onClose}>Отмена</button> 
        </form> 
    ); 
}; 

export default BookingForm;
