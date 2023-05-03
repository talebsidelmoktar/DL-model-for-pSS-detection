import Navbar from "../../components/navbar/Navbar";
import "./home.scss";

import List from "../list/List";
import Radsidebar from "../../components/sidebar/Radsidebar";
import List2 from "../list/List2";
import Drnavbar from "../../components/navbar/Drnavbar";
import List1 from "../list/List1";
const Radhome = () => {
  return (
    <div className="home">
      <Radsidebar />
      <div className="homeContainer">
        <Drnavbar />
        
        
        <div className="listContainer">
          
          <List1 />
        </div>
      </div>
    </div>
  );
};

export default Radhome;
