import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Table from "../../components/table/Table";
import Image, { ImageUpload } from "../imageUpload/Image";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        
        
        <div className="listContainer">
          <div className="listTitle">Latest Apointments</div>
          <ImageUpload />
        </div>
      </div>
    </div>
  );
};

export default Home;
