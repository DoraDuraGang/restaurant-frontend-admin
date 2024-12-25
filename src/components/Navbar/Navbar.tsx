import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
 return (
   <nav className="navbar">
     
       <li className="navbar-item">
         <Link className="navbar-link" to="/mainPage">Главная страница</Link>
       </li>
       <li className="navbar-item">
         <Link className="navbar-link" to="/orderPage">Бронирование</Link>
       </li>
    
   </nav>
 );
};
export default Navbar;
