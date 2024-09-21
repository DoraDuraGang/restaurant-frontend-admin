import "./Noti.css";
import NotiElements from "./elements/NotiElements/NotiElements";
import Toast from "./toast/GoodToast/Toast";

const NotificationBlock = () => {
 return (
  <div className="ViewNoti">

   <div className="Order">
    <NotiElements />
    <NotiElements />
   </div>

   <div className="Toasts">
            <Toast type = "success" visible = {true}  onClick = {() => console.log("1")} message = "пиво"/>
            <Toast type = "error" visible = {true}  onClick = {() => console.log("1")} message = "пиво"/>
            <Toast type = "info" visible = {true}  onClick = {() => console.log("1")} message = "пиво"/>
            <Toast type = "warning" visible = {true}  onClick = {() => console.log("1")} message = "пиво"/>
   </div>

  </div>
 );
};

export default NotificationBlock;
