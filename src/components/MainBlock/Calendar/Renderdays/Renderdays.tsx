import { dayName } from "../../../../helpers/defindClassName";

interface Props {
 currentDate: Date;
}

const Renderdays = ({ currentDate }: Props) => {
 const year = currentDate.getFullYear();
 const month = currentDate.getMonth();
 const daysInMonth = new Date(year, month + 1, 0).getDate();
 const firstDayOfMonth = new Date(year, month, 1).getDay();

 const days: JSX.Element[] = [];
 for (let i = 0; i < firstDayOfMonth; i++) {
  days.push(<div className="empty" key={`empty-${i}`} />);
 }

 const today = new Date();
 today.setHours(0, 0, 0, 0);

 for (let i = 1; i <= daysInMonth; i++) {
  const date = new Date(year, month, i);
  date.setHours(0, 0, 0, 0);

  days.push(
   <div className={dayName({ date, today })} key={i}>
    {i}
   </div>,
  );
 }
 return days;
};
export default Renderdays;
