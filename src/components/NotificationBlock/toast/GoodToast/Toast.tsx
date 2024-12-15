import './Toast.css';  
interface Props {
 type: "error" | "success" |"warning" | "info" ;
 visible : boolean;
 onClick : ()=> void;
 message : string;
}

const Toast = ({ type, visible, onClick, message }: Props) => {  
    if (!visible) return null;  

    const handleClose = () => {  
        onClick();
    };  

    return (  
        <div className={`Toast ${type}`}>  
            {message}  
            <button onClick={handleClose} className="close-button">✖</button>  
        </div>  
    );  
};  

export default Toast;  




