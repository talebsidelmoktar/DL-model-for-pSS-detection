import Navbar from "../../components/navbar/Navbar";
import "./check.scss";

import Radsidebar from "../../components/sidebar/Radsidebar";
import Sendmessage from "./Checkform";
import Checkform from "./Checkform";
const Check = () => {
  return (
    <div className="home">
      <Radsidebar />
      <div className="homeContainer">
        <Navbar />
        
        
        <div className="listContainer">
          
          <Checkform/>
        </div>
      </div>
    </div>
  );
};

export default Check;
