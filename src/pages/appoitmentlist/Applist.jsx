import React, { useEffect, useState } from 'react';
import { db } from "../../firebase";
import { Link } from 'react-router-dom';
import { collection, getDocs , deleteDoc, doc, onSnapshot} from "firebase/firestore";
import { appointmentColumns } from '../../datatablesourse2';
import { DataGrid } from "@mui/x-data-grid";
import { Button } from '@mui/material';


const Applist = () => {
  const [appointments, setAppointments] = useState([]);

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
    const unsub = onSnapshot(collection(db, "appointments"), (snapshot) => {
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
      await deleteDoc(doc(db, "appointments", id));
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
        Add New Appointment
        <Link to="new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={appointmentColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Applist;
