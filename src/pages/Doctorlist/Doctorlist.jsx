import "./doctorlist.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import Doctortable from "../../components/Doctorstable/Doctortable"
import Drsidebar from "../../components/sidebar/Drsidebar"
import Drnavbar from "../../components/navbar/Drnavbar"

const Doctorlist = () => {
  return (
    <div className="list">
      <div className="listContainer">
        <Doctortable />
      </div>
    </div>
  )
}

export default Doctorlist