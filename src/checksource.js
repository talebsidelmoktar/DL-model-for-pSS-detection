
export const checkColumns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "name",
      headerName: "Name",
      width: 230,
      
    },
   
    {
      field: "image",
      headerName: "Image",
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
    {
        field: "result",
        headerName: "Result",
        width: 160,
      },
      {
        field: "checkedBy",
        headerName: "CheckedBy",
        width: 160,
      },
    {
      field: "date",
      headerName: "Date",
      width: 160,
    },
    
    {
      field: "time",
      headerName: "Time",
      width: 160,
      
    },
  ];
  
  