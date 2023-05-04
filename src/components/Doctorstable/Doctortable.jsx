import "./doctortable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs , deleteDoc, doc, onSnapshot} from "firebase/firestore";
import { db } from "../../firebase";
import { Button } from "@mui/material";
const Doctortable = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    //   const fetchData = async () =>{
    //     let list = []
    //     try{
    //     const querySnapshot = await getDocs(collection(db, "users"));
    //     querySnapshot.forEach((doc) => {
    //       list.push({id: doc.id, ...doc.data()});
    //     });
    //     setData(list);
    //   } catch(err){
    //     console.log(err);
    //   }
    // };
    // fetchData();
    
    //listen realtime
    const unsub = onSnapshot(collection(db, "doctors"), (snapshot) => {
      let list = [];
      snapshot.docs.forEach((doc) =>{
        list.push({ id: doc.id, ...doc.data()}) ;
      });
      setData(list);
  },
  (error) => {
    console.log(error);
   }
  );
      return () =>{
        unsub();
      };
  }, []);

  const handleDelete = async (id) => {
    try{
      await deleteDoc(doc(db, "doctors", id));
      setData(data.filter((item) => item.id !== id));
    }catch(err){
      console.log(err);
    }
    
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
            <div
              className="viewButton"
              
              > 
             <Link to={`/doctors/${params.row.id}`} className="link">
                View
             </Link>
              
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <Link to={-1} >
      <Button className="button" >Back</Button>
      </Link>
      <div className="datatableTitle">
        List Of Doctors
        <Link to="/doctors/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Doctortable;
