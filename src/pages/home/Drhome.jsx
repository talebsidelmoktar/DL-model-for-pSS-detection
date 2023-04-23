import Drsidebar from "../../components/sidebar/Drsidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Table from "../../components/table/Table";
import Image, { ImageUpload } from "../imageUpload/Image";
import List from "../list/List";
import List2 from "../list/List2";
import Drnavbar from "../../components/navbar/Drnavbar";
const Drhome = () => {
  return (
    <div className="home">
      <Drsidebar />
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

export default Drhome;
