import "./userlist.css";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "UserName", headerName: "User Name", width: 200 },
  { field: "Solved", headerName: "Solved", width: 100 },
  {
    field: "Score",
    headerName: "Score",
    type: "number",
    width: 200,
  },
];

const rows = [
  { id: 1, UserName: "Snow", Solved: 35 },
  { id: 2, UserName: "Lannister", Solved: 42 },
  { id: 3, UserName: "Lannister", Solved: 45 },
  { id: 4, UserName: "Stark", Solved: 16 },
  { id: 5, UserName: "Targaryen", Solved: null },
  { id: 6, UserName: "Melisandre", Solved: 150 },
  { id: 7, UserName: "Clifford", Solved: 44 },
  { id: 8, UserName: "Frances", Solved: 36 },
  { id: 9, UserName: "Roxie", Solved: 65 },
];

function Userlist() {
  return (
    <div className="userlist">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

export default Userlist;
