import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      imageTobeChecked: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      patient: "John Smith",
      dateOfApointment: "1 March",
      
      status: "Approved",
    },
    {
      id: 2235235,
      imageToBeCheked: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      patient: "Michael Doe",
      dateOfApointment: "1 March",
     
      
      status: "Pending",
    },
    {
      id: 2342353,
      imageToBeCheked: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      patient: "John Smith",
      dateOfApointment: "1 March",
      
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      imageToBeCheked: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      patient: "Jane Smith",
      dateOfApointment: "1 March",
      
      status: "Approved",
    },
    {
      id: 2342355,
      imageToBeCheked: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      patient: "Harold Carol",
      dateOfApointment: "1 March",
      
      
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Image to be Checked</TableCell>
            <TableCell className="tableCell">Patient name</TableCell>
            <TableCell className="tableCell">Date of Apointment</TableCell>
            
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.patient}</TableCell>
              <TableCell className="tableCell">{row.dateOfApointment}</TableCell>
              
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
