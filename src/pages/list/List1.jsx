import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import Nursetable from "../../components/Nusrestable/Nursetable"

const List1 = () => {
  return (
    <div className="list">
      <div className="listContainer">
        <Nursetable/>
      </div>
    </div>
  )
}

export default List1