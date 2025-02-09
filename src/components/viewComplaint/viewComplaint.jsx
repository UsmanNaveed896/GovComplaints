import React from "react";
import { Paper, Typography, Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useNavigate } from "react-router-dom";

const ViewComplaint = () => {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate(-1);
  };
  return (
    <div className="p-4 bg-white rounded-2xl h-[100%] overflow-y-auto">
      {/* Header */}
      <Box className="bg-dark-green text-white p-4 flex justify-between items-center">
        <Typography variant="h6">Complaints</Typography>
        <Box className="space-x-2">
          <Button variant="contained" color="success">
            Print
          </Button>
          <Button variant="contained" color="success">
            Search Complaint
          </Button>
        </Box>
      </Box>

      {/* Main Content */}
      <Paper className="m-4 p-4">
        <Box className="bg-gray-100 p-3 border-b flex justify-between items-center">
          <Typography variant="h6">Record Complaint</Typography>
        </Box>

        <Box className="p-4">
          <Grid container spacing={2}>
            {[
              { label: "Complaint no:", value: "10977" },
              { label: "Department:", value: "Police" },
              { label: "Source:", value: "WhatsApp Complaints" },
              { label: "Status:", value: "Active" },
              { label: "User number:", value: "923181032243" },
              { label: "Telephone number:", value: "" },
              { label: "Updated by:", value: "Police" },
              { label: "User Name:", value: "Muhammad Moiz Ahmed Khan" },
              { label: "Date:", value: "2025-01-28 17:05:59" },
              { label: "Cnic:", value: "4230120737025" },
              {
                label: "Address:",
                value: "H-146/6 Nishter Square Malir Colony Karachi",
              },

              // Note and Last Update Remarks - Full Width
              {
                label: "Note:",
                value:
                  "Sir Karachi Malir ka Area mai bohot kidnapping Ka issue horahay hain abhi mere Ghar ke 1 Bachay ko Cheen ne ki koshish kri hai",
                fullWidth: true,
              },
              {
                label: "Last Update Remarks:",
                value:
                  "Dear Citizen, I'd like to inform you that the complaint is under process and forwarded to the DIGP East Zone|Karachi, vide letter No. IGP/ CMS / Governor Sindh/ 305 dated: 28-01-2025 for taking necessary action and report.",
                fullWidth: true,
              },
            ].map((item, index) => (
              <Grid key={index} size={{ xs: 12, md: item.fullWidth ? 12 : 6 }}>
                <Box className="bg-gray-50 p-2">
                  <Typography variant="subtitle2" fontWeight="bold">
                    {item.label}
                  </Typography>
                  <Typography variant="body2">{item.value}</Typography>
                </Box>
              </Grid>
            ))}
            <Grid
              size={{ xs: 12, md: 12 }}
              display="flex"
              justifyContent="space-between"
            >
              

              <Button
                vvariant="outlined"
                color="primary"
                size="small"
                sx={{
                  minWidth: "30px",
                  padding: "6px 6px",
                  fontSize: "0.75rem",
                  bgcolor: "#f4f5fd",
                }}
                onClick={handleCancel}
              >
                Back to List
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </div>
  );
};

export default ViewComplaint;
