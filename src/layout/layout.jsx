import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Collapse,
} from "@mui/material";
import Dashboard from "../components/dashboard/dashboard";
import Img from "../assets/logo2.png";
import { CiClock2 } from "react-icons/ci";
import { LuClock3 } from "react-icons/lu";
import { GrNotes } from "react-icons/gr";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdOutlineMail } from "react-icons/md";
import { FaCheck, FaRegBell } from "react-icons/fa";
import { IoChatbubblesOutline, IoClose } from "react-icons/io5";
import { RiRecycleLine } from "react-icons/ri";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import "./layout.css";
import ReusableTable from "../components/tables/tableReusable";
import AllComplaints from "../pages/allComplaints";
import { Routes, Route, useNavigate } from "react-router-dom";
import ActiveComplaints from "../pages/activeComplaints";
import PendingComplaints from "../pages/pendingComplaints";
import ResolvedComplaints from "../pages/resolvedComplaints";
import ClosedComplaints from "../pages/closed";
import ReopenComplaints from "../pages/reOpen";
import ComplaintResponse from "../pages/complaintResponse";
import EditComplaint from "../components/editComplaint/editComplaint";
import ViewComplaint from "../components/viewComplaint/viewComplaint";

// BellofHope
import BellofHopeAllComplaints from "../pages//bellOfHope/allComplaints";
import BellofHopeActiveComplaints from "../pages/bellOfHope/activeComplaints";
import BellofHopePendingComplaints from "../pages/bellOfHope/pendingComplaints";
import BellofHopeResolvedComplaints from "../pages/bellOfHope/resolvedComplaints";
import BellofHopeClosedComplaints from "../pages/bellOfHope/closed";
import BellofHopeReopenComplaints from "../pages/bellOfHope/reOpen";
import AccountMenu from "../components/menus/settings";

const DRAWER_WIDTH = 272;
const FOOTER_HEIGHT = 40;
const HEADER_HEIGHT = 60;

const scrollbarStyles = {
  "&::-webkit-scrollbar": {
    width: "8px",
    backgroundColor: "#004512",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "#004512",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#004512",
    "&:hover": {
      backgroundColor: "rgba(156, 163, 175, 0.7)",
    },
  },
};

const DashboardLayout = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const style = {
    width: "10px",
    height: "10px",
    backgroundColor: "white",
    opacity: 0.75,
    borderRadius: "50%",
    marginRight: "5px",
    animation: "notify-pulse 1s infinite", // Reference to CSS animation
  };
  const sidebarItems = [
    { text: "Dashboard", icon: <LuClock3 />, path: "/dashboard" },
    {
      text: "All Complaints",
      icon: <GrNotes />,
      path: "/dashboard/complaints",
    },
    {
      text: "Active Complaints",
      icon: <HiOutlineMailOpen />,
      path: "/dashboard/active",
    },
    {
      text: "Pending Complaints",
      icon: <MdOutlineMail />,
      path: "/dashboard/pending",
    },
    {
      text: "Resolved Complaints",
      icon: <FaCheck className="w-4 h-4" />,
      path: "/dashboard/resolved",
    },
    { text: "Closed Complaints", icon: <IoClose />, path: "/dashboard/closed" },
    {
      text: "Reopen Complaints",
      icon: <RiRecycleLine />,
      path: "/dashboard/reopen",
    },
    {
      text: "Complaints Response",
      icon: <IoChatbubblesOutline />,
      path: "/dashboard/response",
    },
    {
      text: "Bellofhope Complaints",
      icon: <FaRegBell />,
      expandable: true,
      subItems: [
        {
          text: "All Complaints",
          icon: <GrNotes />,
          path: "/dashboard/bellofhope/complaints",
        },
        {
          text: "Active Complaints",
          icon: <HiOutlineMailOpen />,
          path: "/dashboard/bellofhope/active",
        },
        {
          text: "Pending Complaints",
          icon: <MdOutlineMail />,
          path: "/dashboard/bellofhope/pending",
        },
        {
          text: "Resolved Complaints",
          icon: <FaCheck className="w-4 h-4" />,
          path: "/dashboard/bellofhope/resolved",
        },
        {
          text: "Closed Complaints",
          icon: <IoClose />,
          path: "/dashboard/bellofhope/closed",
        },
        {
          text: "Reopen Complaints",
          icon: <RiRecycleLine />,
          path: "/dashboard/bellofhope/reopen",
        },
      ],
    },
    {
      text: "Complaints Report",
      icon: <HiOutlineClipboardDocumentCheck />,
      path: "/dashboard/report",
    },
  ];

  const drawer = (
    <>
      <Box
        className="h-full bg-[#004512] text-white"
        sx={[scrollbarStyles, { bgcolor: "#004512" }]}
      >
        <List sx={{ bgcolor: "#004512" }}>
          {sidebarItems.map((item) => (
            <div key={item.text}>
              <ListItem
                button
                onClick={() => {
                  if (item.expandable) {
                    setOpen(!open);
                  } else {
                    navigate(item.path); // Navigate to the respective route
                  }
                }}
                sx={{
                  "&:hover": { backgroundColor: "#266135" },
                  cursor: "pointer",
                  color: "#ffffffd9",
                  backgroundColor:
                    item.expandable && open ? "#266135" : "transparent",
                }}
              >
                <ListItemIcon
                  sx={{
                    color: "#ffffffd9",
                    fontSize: "20px",
                    minWidth: "32px",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                />
                {item.expandable && (
                  <ListItemIcon
                    sx={{
                      color: "#ffffffd9",
                      fontSize: "20px",
                      minWidth: "25px",
                    }}
                  >
                    {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
                  </ListItemIcon>
                )}
              </ListItem>

              {item.expandable && (
                <Collapse
                  in={open}
                  timeout="auto"
                  unmountOnExit
                  sx={{
                    backgroundColor: "#004512",
                    "& .MuiListItem-root": {
                      paddingLeft: "32px",
                      backgroundColor: "#004512",
                      "&:hover": {
                        backgroundColor: "#2d733f",
                      },
                    },
                  }}
                >
                  <List component="div" disablePadding>
                    {item.subItems.map((subItem) => (
                      <ListItem
                        button
                        key={subItem.text}
                        onClick={() => navigate(subItem.path)}
                        sx={{
                          "&:hover": { backgroundColor: "#266135" },
                          cursor: "pointer",
                          color: "#ffffffd9",
                          backgroundColor:
                            item.expandable && open ? "#266135" : "transparent",
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            color: "#ffffffd9",
                            fontSize: "18px",
                            minWidth: "40px",
                          }}
                        >
                          {subItem.icon}
                        </ListItemIcon>
                        <ListItemText
                          primary={subItem.text}
                          primaryTypographyProps={{
                            fontSize: "14px",
                            fontWeight: "400",
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </div>
          ))}
        </List>
      </Box>
    </>
  );

  // Rest of the component remains the same
  return (
    <Box className="flex h-screen overflow-hidden">
      <AppBar
        position="fixed"
        sx={{
          boxShadow: "none",
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
          ml: { sm: `${DRAWER_WIDTH}px` },
          bgcolor: "#004512",
          height: HEADER_HEIGHT,
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            onClick={() => setMobileOpen(!mobileOpen)}
            sx={{ mr: 2, display: { sm: "none" } }}
          />
          <Box className="flex-1">
            <Box className="flex-1 flex items-center gap-2 relative">
              <div className="w-6 h-6 absolute left-3 top-[17px]">
                <div style={style}></div>
              </div>
              <select className="bg-[#266135] border-2 text-white px-8 py-2 rounded-full  border-white font-bold">
                <option>Select Department</option>
              </select>
            </Box>
          </Box>

         <AccountMenu/>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{
          width: { sm: DRAWER_WIDTH },
          flexShrink: { sm: 0 },
          height: "100vh",
          position: "relative",
          zIndex: (theme) => theme.zIndex.drawer,
        }}
      >
        {/* Mobile Drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: DRAWER_WIDTH,
              height: `calc(100% - ${FOOTER_HEIGHT}px)`,
              ...scrollbarStyles,
            },
          }}
        >
          {drawer}
        </Drawer>

        {/* Desktop Drawer */}
        <Box className=" flex items-center pl-6 relative z-[9999] bg-[#004512] ">
          <img src={Img} alt="Logo" className="w-[100px] h-[120px]" />
        </Box>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: DRAWER_WIDTH,
              borderRight: "none",
              boxShadow: "none",
              height: `calc((100% - 120px) - ${FOOTER_HEIGHT}px)`,
              ...scrollbarStyles,
              mt: 15,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
          height: "100vh",
          bgcolor: "#004512",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Box
          sx={{
            height: `calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px)`,
            mt: `${HEADER_HEIGHT}px`,
            overflowY: "hidden",
            px: 1,
            py: 1,
          }}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />

            {/* All Complaints */}
            <Route path="complaints" element={<AllComplaints />} />
            <Route path="complaints/edit/:id" element={<EditComplaint />} />
            <Route path="complaints/view/:id" element={<ViewComplaint />} />

            {/* Active Complaints */}
            <Route path="active" element={<ActiveComplaints />} />
            <Route path="active/edit/:id" element={<EditComplaint />} />
            <Route path="active/view/:id" element={<ViewComplaint />} />

            {/* Pending Complaints */}
            <Route path="pending" element={<PendingComplaints />} />
            <Route path="pending/edit/:id" element={<EditComplaint />} />
            <Route path="pending/view/:id" element={<ViewComplaint />} />

            {/* Resolved Complaints */}
            <Route path="resolved" element={<ResolvedComplaints />} />
            <Route path="resolved/edit/:id" element={<EditComplaint />} />
            <Route path="resolved/view/:id" element={<ViewComplaint />} />

            {/* Closed Complaints */}
            <Route path="closed" element={<ClosedComplaints />} />
            <Route path="closed/edit/:id" element={<EditComplaint />} />
            <Route path="closed/view/:id" element={<ViewComplaint />} />

            {/* Reopen Complaints */}
            <Route path="reopen" element={<ReopenComplaints />} />
            <Route path="reopen/edit/:id" element={<EditComplaint />} />
            <Route path="reopen/view/:id" element={<ViewComplaint />} />

            {/* Complaint Response */}
            <Route path="response" element={<ComplaintResponse />} />

                               {/* BELL OF HOPE */}
            {/* All Complaints */}
            <Route path="/bellofhope/complaints" element={<BellofHopeAllComplaints />} />
            <Route path="complaints/edit/:id" element={<EditComplaint />} />
            <Route path="complaints/view/:id" element={<ViewComplaint />} />

            {/* Active Complaints */}
            <Route path="/bellofhope/active" element={<BellofHopeActiveComplaints />} />
            <Route path="active/edit/:id" element={<EditComplaint />} />
            <Route path="active/view/:id" element={<ViewComplaint />} />

            {/* Pending Complaints */}
            <Route path="/bellofhope/pending" element={<BellofHopePendingComplaints />} />
            <Route path="pending/edit/:id" element={<EditComplaint />} />
            <Route path="pending/view/:id" element={<ViewComplaint />} />

            {/* Resolved Complaints */}
            <Route path="/bellofhope/resolved" element={<BellofHopeResolvedComplaints />} />
            <Route path="resolved/edit/:id" element={<EditComplaint />} />
            <Route path="resolved/view/:id" element={<ViewComplaint />} />

            {/* Closed Complaints */}
            <Route path="/bellofhope/closed" element={<BellofHopeClosedComplaints />} />
            <Route path="closed/edit/:id" element={<EditComplaint />} />
            <Route path="closed/view/:id" element={<ViewComplaint />} />

            {/* Reopen Complaints */}
            <Route path="/bellofhope/reopen" element={<BellofHopeReopenComplaints />} />
            <Route path="reopen/edit/:id" element={<EditComplaint />} />
            <Route path="reopen/view/:id" element={<ViewComplaint />} />
          </Routes>
        </Box>

        <AppBar
          position="fixed"
          sx={{
            top: "auto",
            bottom: 0,
            bgcolor: "#004512",
            height: FOOTER_HEIGHT,
            width: "100%",
            zIndex: (theme) => theme.zIndex.drawer + 2,
          }}
        >
          {/* <Toolbar className="mt-[-14px] w-[100%]"> */}
          <div className="flex mt-3">
            <div className="w-[350px]"></div>
            <div className="flex justify-between w-[98%] pr-3">
              <p className="text-xs text-[#80a172] uppercase">
                © 2025 Governor Info & Complaint Cell - Softologics
              </p>
              <p className="text-xs text-end text-[#80a172] uppercase">
                Governor Info & Complaint Cell - v2.1.3 (2e8c67d1)
              </p>
            </div>
          </div>
          {/* </Toolbar> */}
        </AppBar>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
