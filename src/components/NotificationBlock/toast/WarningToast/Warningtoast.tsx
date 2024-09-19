import { useState } from 'react';
import '../Toast.css';

const WarningToast  = () => {
    const [visible, setVisible] = useState(true);

    const handleClose = () => {
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="Toast warning">
            Внимание: Столик скоро придет, пожалуйста, подтвердите бронь.
            <button onClick={handleClose} className="close-button">✖</button>
        </div>
    );
};

export default WarningToast ;
