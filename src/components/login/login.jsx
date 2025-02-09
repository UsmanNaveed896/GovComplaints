import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  TextField,
  Typography,
  Paper,
  InputLabel,
} from "@mui/material";
import Img from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [focusedField, setFocusedField] = useState(null);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#064b12", // Dark green background
      }}
    >
      <Paper
        elevation={2}
        sx={{
          width: "100%",
          maxWidth: 430,
          p: 6,
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        <Box sx={{ mb: 2, display: "flex", justifyContent: "center" }}>
          <img
            src={Img}
            alt="Logo"
            style={{ width: "135px", height: "170px" }}
          />
        </Box>

        <Typography
          sx={{ my: 5, fontWeight: "bold", color: "#01411c", fontSize: "17px" }}
        >
          Sign in to AllDepartments Portal
        </Typography>

        {/* Username Field */}
        <Box sx={{ textAlign: "left", mb: 2 }}>
          <input
            className="w-full p-2 rounded border border-[black] text-sm focus:bg-[#e5e5c5]"
            placeholder="Username"
          />
        </Box>

        {/* Password Field */}
        <Box sx={{ textAlign: "left", mb: 1 }}>
          <input
            className="w-full p-2 rounded border border-[black] text-sm focus:bg-[#e5e5c5]"
            placeholder="Password"
          />
        </Box>

        <Box sx={{ display: "flex", gap: 1, alignItems: "center", my: 3 }}>
          <input
            type="checkbox"
            className="w-4 h-4 border border-[black] rounded-sm focus:bg-[#e5e5c5] checked:bg-[#e5e5c5] cursor-pointer"
          />
          <Typography variant="body2">Remember me</Typography>
        </Box>

        <Button
          onClick={() => navigate("/dashboard")}
          fullWidth
          variant="contained"
          sx={{
            fontWeight: "700",
            bgcolor: "#397248",
            "&:hover": { bgcolor: "#1b4d27" },
          }}
        >
          <span style={{ textTransform: "capitalize" }}>Sign In</span>
        </Button>
      </Paper>
    </Box>
  );
};

export default Login;
