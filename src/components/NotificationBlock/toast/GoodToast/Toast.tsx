import { useState } from 'react';
import "../Toast.css"

const GoodToast = () => {
    const [visible, setVisible] = useState(true);

    const handleClose = () => {
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="Toast success">
             Все прошло успешно!
            <button onClick={handleClose} className="close-button">✖</button>
        </div>
    );
};

export default GoodToast;

