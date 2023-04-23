import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Nursidebar from "../../components/sidebar/Nursidebar";
import List2 from "../list/List2";
import Drnavbar from "../../components/navbar/Drnavbar";
const Nurhome = () => {
  return (
    <div className="home">
      <Nursidebar />
      <div className="homeContainer">
        <Drnavbar />
        
        
        <div className="listContainer">
          <div className="listTitle">Latest Apointments</div>
          <List2 />
        </div>
      </div>
    </div>
  );
};

export default Nurhome;
