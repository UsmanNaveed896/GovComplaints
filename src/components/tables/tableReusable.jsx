import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, IconButton, Tooltip } from "@mui/material";
import { CiEdit } from "react-icons/ci";
import { IoIosAdd, IoIosClose, IoIosSearch, IoIosSend } from "react-icons/io";
import {
  MdDeleteOutline,
  MdGetApp,
  MdHistory,
  MdOutlineEmail,
  MdOutlineVisibility,
} from "react-icons/md";
import { CgAdd } from "react-icons/cg";
import { BiPrinter } from "react-icons/bi";
import { styled } from "@mui/material/styles";
import { FaFolderOpen } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
const ReusableTable = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [rows, setRows] = useState([
    {
      id: 10982,
      source: "WhatsApp Complaints",
      department: "NADRA",
      userName: "Fatima",
      userNumber: "923421079209",
      status: "Pending",
      createdDate: "24/01/1025 - 15:08",
      lastResponseDate: "24/01/1025 - 15:08",
      file: "No File Found",
    },
    {
      id: 10973,
      source: "WhatsApp Complaints",
      department: "NADRA",
      userName: "Farah naz",
      userNumber: "923435836153",
      status: "Pending",
      createdDate: "22/01/1025 - 20:14",
      lastResponseDate: "22/01/1025 - 20:14",
      file: "No File Found",
    },
    {
      id: 10982,
      source: "WhatsApp Complaints",
      department: "NADRA",
      userName: "Fatima",
      userNumber: "923421079209",
      status: "Pending",
      createdDate: "24/01/1025 - 15:08",
      lastResponseDate: "24/01/1025 - 15:08",
      file: "No File Found",
    },
    {
      id: 10973,
      source: "WhatsApp Complaints",
      department: "NADRA",
      userName: "Farah naz",
      userNumber: "923435836153",
      status: "Pending",
      createdDate: "22/01/1025 - 20:14",
      lastResponseDate: "22/01/1025 - 20:14",
      file: "No File Found",
    },
    {
      id: 10973,
      source: "WhatsApp Complaints",
      department: "NADRA",
      userName: "Farah naz",
      userNumber: "923435836153",
      status: "Pending",
      createdDate: "22/01/1025 - 20:14",
      lastResponseDate: "22/01/1025 - 20:14",
      file: "No File Found",
    },
    {
      id: 10982,
      source: "WhatsApp Complaints",
      department: "NADRA",
      userName: "Fatima",
      userNumber: "923421079209",
      status: "Pending",
      createdDate: "24/01/1025 - 15:08",
      lastResponseDate: "24/01/1025 - 15:08",
      file: "No File Found",
    },
    {
      id: 10973,
      source: "WhatsApp Complaints",
      department: "NADRA",
      userName: "Farah naz",
      userNumber: "923435836153",
      status: "Pending",
      createdDate: "22/01/1025 - 20:14",
      lastResponseDate: "22/01/1025 - 20:14",
      file: "No File Found",
    },
    // Add other rows similarly
  ]);

  const StyledDataGrid = styled(DataGrid)({
    "& .MuiDataGrid-columnHeaders": {
      fontSize: "12px",
      fontWeight: "bold",
      color: "#a7abc3",
    },
  });
  const columns = [
    {
      field: "actions",
      headerName: "ACTIONS",
      width: 200,
      renderCell: (params) => (
        <div className="flex  mt-2">
          <Tooltip title="Edit Complaint" placement="top">
            <IconButton
              size="small"
              onClick={() => handleNavigate(params.id, "edit")}
            >
              <CiEdit className="h-4 w-4" />
            </IconButton>
          </Tooltip>
          <Tooltip title="View Complaint" placement="top">
            <IconButton size="small">
              <MdOutlineVisibility
                className="h-4 w-4"
                onClick={() => handleNavigate(params.id, "view")}
              />
            </IconButton>
          </Tooltip>
          <Tooltip title="Resolved Complaint" placement="top">
            <IconButton size="small">
              <MdOutlineEmail className="h-4 w-4" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Close Complaint" placement="top">
            <IconButton size="small">
              <IoIosClose className="h-4 w-4" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Response Complaint" placement="top">
            <IconButton size="small">
              <IoIosSend className="h-4 w-4" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Check logs" placement="top">
            <IconButton size="small">
              <MdHistory className="h-4 w-4" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Reopen Complaint" placement="top">
            <IconButton size="small">
              <FaFolderOpen className="h-4 w-4" />
            </IconButton>
          </Tooltip>
        </div>
      ),
    },
    { field: "id", headerName: "COMPLAINT NO", width: 130 },
    { field: "source", headerName: "SOURCE", width: 180 },
    { field: "department", headerName: "DEPARTMENT", width: 130 },
    { field: "userName", headerName: "USER NAME", width: 150 },
    { field: "userNumber", headerName: "USER NUMBER", width: 160 },
    { field: "status", headerName: "STATUS", width: 120 },
    { field: "createdDate", headerName: "COMPLAINT CREATED DATE", width: 200 },
    { field: "lastResponseDate", headerName: "LAST RESPONSE DATE", width: 200 },
    {
      field: "file",
      headerName: "FILE",
      width: 150,
      renderCell: (params) =>
        params.value === "No File Found" ? (
          <span className="text-gray-500">No File Found</span>
        ) : (
          <Button variant="contained" color="primary">
            View Media File
          </Button>
        ),
    },
  ];

  const handleNavigate = (id, mode) => {
    const basePath = location.pathname;
    if (mode == "edit") {
      navigate(`${basePath}/edit/${id}`);
    } else if (mode == "view") {
      navigate(`${basePath}/view/${id}`);
    }
  };
  return (
    <div className="">
      <StyledDataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        // checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default ReusableTable;
