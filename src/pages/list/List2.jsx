import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"

const List2 = () => {
  return (
    <div className="list">
      <div className="listContainer">
        <Datatable/>
      </div>
    </div>
  )
}

export default List2