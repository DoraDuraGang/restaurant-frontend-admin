
import "./OrderPage.css"; 
import "../../MainBlock/OrderForm/Bookingbutton.css"; 
import BookingForm from "../../MainBlock/OrderForm/BookingForm/BookimgForm"; 
import MockDataDisplay from "../../../MokDate/MockDataDisplay";
 

const OrderPage = () => { 
     

    const handleCloseForm = () => {
    };

    return ( 
        <div className='orderPage'> 
          <h1 className="orderText">Страница заказа</h1>
            <div className="orderContainer">
               <BookingForm onClose={handleCloseForm} showCancelButton={false} /> 
               <MockDataDisplay/>
            </div>
               
         </div> 
    ); 
}; 

export default OrderPage;
