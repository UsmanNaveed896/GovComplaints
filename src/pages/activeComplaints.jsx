import React from "react";
import ReusableTable from "../components/tables/tableReusable";
import { IoIosAdd, IoIosSearch } from "react-icons/io";
import { Button } from "@mui/material";
import { BiPrinter } from "react-icons/bi";
import { MdGetApp } from "react-icons/md";
const ActiveComplaints = () => {
  return (
    <div className="p-4 bg-white rounded-2xl h-[100%] overflow-y-auto">
      <div className="flex justify-between items-center py-4 pr-3">
        <h1 className="text-lg font-semibold">Active Complaints</h1>
        <Button
          variant="contained"
          color="primary"
          size="small"
          startIcon={<IoIosSearch className="h-4 w-4" />}
          sx={{
            minWidth: "30px",
            padding: "6px 6px",
            fontSize: "0.55rem",
            bgcolor: "#004512",
          }}
        >
          Search Complaint
        </Button>
      </div>
      <div className="flex justify-between p-2 bg-[#f0f0f0] border">
        <Button
          variant="contained"
          color="primary"
          size="small"
          startIcon={<IoIosAdd className="h-4 w-4" />}
          sx={{ minWidth: "30px", padding: "2px 6px", fontSize: "0.55rem" }}
        >
          Add Complaint
        </Button>

        <div>
          <Button
            variant="contained"
            sx={{
              minWidth: "30px",
              padding: "2px 8px",
              fontSize: "0.55rem",
              mr: 1,
              bgcolor: "#dd44a7",
            }}
            color="secondary"
            startIcon={<BiPrinter className="h-4 w-4" />}
            className="mr-2"
          >
            Print
          </Button>
          <Button
            variant="contained"
            sx={{
              minWidth: "30px",
              padding: "2px 8px",
              fontSize: "0.55rem",
              bgcolor: "#dd44a7",
            }}
            color="success"
            startIcon={<MdGetApp className="h-4 w-4" />}
          >
            Export
          </Button>
        </div>
      </div>

      <ReusableTable />
    </div>
  );
};

export default ActiveComplaints;
