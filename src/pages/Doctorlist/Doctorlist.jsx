import "./doctorlist.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import Doctortable from "../../components/Doctorstable/Doctortable"

const Doctorlist = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Doctortable />
      </div>
    </div>
  )
}

export default Doctorlist