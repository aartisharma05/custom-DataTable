import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "timestamp", headerName: "TIMESTAMP", width: 130 },
  { field: "purchaseid", headerName: "PURCHASE ID",type:"number", width: 130 },
  {field: "email", headerName: "EMAIL", type: "email", width:150},
  {field: "name", headerName: "NAME", type: "string",width: 90},
  {field:"source", headerName: "SOURCE", type: "string",width: 90},
  {field:"status", headerName: "STATUS",type: "string",width:100}
];

const rows = [
  { id: 2, timestamp: "5 minutes ago", purchaseid: 84445, email:"kanish@gmail.com",name:"titan",source:"Friends",status:"failed" },
  { id: 3, timestamp: "4 hours ago", purchaseid: 57455, email: 'rajkiu@gmail.com',name:"uhkseen",source:"coupoun",status:"Completed" },
  { id: 4, timestamp: "10 hours ago", purchaseid: 63572, email: "fitsr33@gmail.com",name:"jamaer" ,source:"refer",status:"pending"},
  { id: 5, timestamp: "9 minutes ago", purchaseid: 645775, email: null,name:"ZAcs",source:"ads",status:"waiting" },
  { id: 6, timestamp: "11 hours ago", purchaseid: null, email: "just12@gmail.com",name:"friends",source:"micro",status:"failed" },
  { id: 7, timestamp: "45 minutes ago", purchaseid: 86575, email: "emails@gmail.com" ,name:"yamnian",source:"shows",status:"failed"},
  { id: 8, timestamp: "5 seconds agonces", purchaseid: 5766, email: "nikah76@gmail.com" ,name:"nameiu",source:"shows",status:"completed"},
  { id: 9, timestamp: "45 minutes ago", purchaseid: 58, email: "najs@gmail.com",name:"kazijasta",source:"micro" ,status:"pending"}
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 }
          }
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
