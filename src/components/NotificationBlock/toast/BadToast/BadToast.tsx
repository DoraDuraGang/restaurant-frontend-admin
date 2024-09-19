import { useState } from 'react';
import '../Toast.css';

const BadToast = () => {
 const [visible, setVisible] = useState(true);

 const handleClose = () => {
     setVisible(false);
 };

 if (!visible) return null;

 return (
     <div className="Toast error">
         Ошибка: Пожалуйста, повторите заново.
         <button onClick={handleClose} className="close-button">✖</button>
     </div>
 );
};

export default BadToast;


