import "./radiolist.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import Doctortable from "../../components/Doctorstable/Doctortable"
import Radiotable from "../../components/Radiologiststable/Radiotable"

const Radiolist = () => {
  return (
    <div className="list">
   
      <div className="listContainer">
      
        <Radiotable />
      </div>
    </div>
  )
}

export default Radiolist