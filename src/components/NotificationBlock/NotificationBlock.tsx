import "./Noti.css";
import NotiElements from "./elements/NotiElements/NotiElements";
import BadToast from "./toast/BadToast/BadToast";
import GoodToast from "./toast/GoodToast/Toast";
import WarningToast from "./toast/WarningToast/Warningtoast";
import InfoToast from "./toast/InfoToast/InfoToast";

const NotificationBlock = () => {
 return (
  <div className="ViewNoti">

   <div className="Order">
    <NotiElements />
    <NotiElements />
   </div>

   <div className="Toasts">
            <BadToast />
            <GoodToast />
            <WarningToast />
            <InfoToast />
   </div>
   
  </div>
 );
};

export default NotificationBlock;
