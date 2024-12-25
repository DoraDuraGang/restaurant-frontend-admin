import MainPage from "./components/Pgs/Main/MainPage";
import OrderPage from "./components/Pgs/Order/OrderPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import "./components/MainBlock/index.css";

function App() {
 return (
  <BrowserRouter>
   <section className="UserView">
     <Navbar />
      <Routes>
        <Route path="/mainPage" element={<MainPage />} />
        <Route path="/orderPage" element={<OrderPage />} />
      </Routes>
   </section>
  </BrowserRouter>
 );
}

export default App;
