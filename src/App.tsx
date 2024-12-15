import "./App.css";
import MainBlock from "./components/MainBlock/MainBlock";
import NotificationBlock from "./components/NotificationBlock/NotificationBlock";
import mockData from "./MokDate/mockData"

 
function App() {
 return (
  <section className="UserView">
   <MainBlock />
   <NotificationBlock />
  </section>
   
 );
}

export default App;
