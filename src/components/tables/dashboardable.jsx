import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FaCaretDown } from "react-icons/fa";
const DashboardTable = () => {
  const [pageSize, setPageSize] = useState(10);

  const columns = [
    { field: "complaintNo", headerName: "COMPLAINT NO", flex: 1 },
    { field: "userNo", headerName: "USER NO", flex: 1 },
    { field: "department", headerName: "DEPARTMENT", flex: 1 },
    { field: "status", headerName: "STATUS", flex: 1 },
    { field: "date", headerName: "DATE", flex: 1 },
  ];
  const StyledDataGrid = styled(DataGrid)({
    "& .MuiDataGrid-columnHeaders": {
      fontSize: "12px",
      fontWeight: "bold",
      color: "#a7abc3",
    },
  });
  const rows = []; // Empty array since no data is available

  return (
    <div className="py-4 px-4 bg-white rounded">
      <div className="flex justify-between">
        <div>
          <h1 className="mb-4 font-bold text-[18px]">
            Monthly Complaints' Status
          </h1>
         
        </div>
        <div>
          <button className="bg-[#004512] flex items-center gap-3 text-white px-4 py-2 text-sm  font-semibold rounded">
            Select Value <FaCaretDown />
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm">Show</span>
          <Select
            sx={{ p: 0, height: "25px", width: "65px" }}
            value={pageSize}
            onChange={(e) => setPageSize(e.target.value)}
            variant="outlined"
            size="small"
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={25}>25</MenuItem>
            <MenuItem value={50}>50</MenuItem>
          </Select>
          <span>entries</span>
        </div>
        <div className="flex items-center space-x-2">
          <div>
            <span className="text-sm pr-2">Search:</span>
            <input className="border border-gray-400 rounded py-1 px-6" />
          </div>
        </div>
      </div>

      <StyledDataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        rowsPerPageOptions={[10, 25, 50]}
        disableSelectionOnClick
        localeText={{
          noRowsLabel: "No data available in table",
        }}
      />
    </div>
  );
};

export default DashboardTable;
