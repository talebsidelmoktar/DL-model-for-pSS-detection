import "./nurselist.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import Doctortable from "../../components/Doctorstable/Doctortable"
import Nursetable from "../../components/Nusrestable/Nursetable"

const Nurselist = () => {
  return (
    <div className="list">
      <div className="listContainer">
        
        <Nursetable />
      </div>
    </div>
  )
}

export default Nurselist