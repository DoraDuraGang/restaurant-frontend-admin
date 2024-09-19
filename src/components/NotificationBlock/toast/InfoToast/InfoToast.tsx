import { useState } from 'react';
import '../Toast.css';

const InfoToast = () => {
    const [visible, setVisible] = useState(true);

    const handleClose = () => {
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="Toast info">
            Информация: Возможны перебои в работе сайта.
            <button onClick={handleClose} className="close-button">✖</button>
        </div>
    );
};

export default InfoToast;
