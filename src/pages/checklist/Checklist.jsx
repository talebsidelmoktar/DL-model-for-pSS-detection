import React, { useEffect, useState } from 'react';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Checklist = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'checks'));
      const docs = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(docs);
    };
    fetchData();
  }, []);

  const checkColumns = [
    { title: 'ID', field: 'id' , width: 100 },
    { title: 'Image', field: 'image',  renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img}  />
        </div>
      );
    }, width: 230 },
    { title: 'Name', field: 'name', width: 100 },
    { title: 'Email', field: 'email', width: 190 },
    { title: 'Result', field: 'result', width: 100 },
    { title: 'Prescription', field: 'prescription', width: 180 },

    { title: 'Date', field: 'date', width: 150 },
    { title: 'Time', field: 'time' , width: 100},
   
  ];

  

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'checks', id));
    setData(data.filter((item) => item.id !== id));
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
        Add New Check
        <Link to="/checks/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={checkColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Checklist;
