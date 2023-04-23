import Navbar from "../../components/navbar/Navbar";
import "./message.scss";

import Radsidebar from "../../components/sidebar/Radsidebar";
import Sendmessage from "./Sendmessage";
const Message = () => {
  return (
    <div className="home">
      <Radsidebar />
      <div className="homeContainer">
        <Navbar />
        
        
        <div className="listContainer">
          
          <Sendmessage/>
        </div>
      </div>
    </div>
  );
};

export default Message;
