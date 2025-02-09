import * as React from "react";
import { Box, Button, Card, Menu, MenuItem, Typography } from "@mui/material";
import Img from "../../assets/1.png";
import Img1 from "../../assets/2.png";
import Img2 from "../../assets/3.png";
import Img3 from "../../assets/4.png";
import Img4 from "../../assets/5.png";
import Img5 from "../../assets/6.png";
import Img6 from "../../assets/7.png";
import Img7 from "../../assets/8.png";

import { FaCaretDown, FaRegBell, FaWhatsapp } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import TickPlacementBars from "../chart/chart";
import StatsCard from "../statsCard/statsCard";
import DashboardTable from "../tables/dashboardable";
const Dashboard = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="border rounded-[20px] bg-[#f4f5fd] py-4 px-6 h-[100%] overflow-y-auto">
      {" "}
      <Box className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-[24px] font-bold">Dashboard - NADRA</h1>
          <p className="text-[#a7abc3] text-normal">
            Statistical Overview of Complaints Lodged in NADRA Department.
          </p>
        </div>

        <Box className="flex gap-2">
          <button className="bg-[#004512] flex items-center gap-3 text-white px-4 py-2 text-sm  font-semibold rounded">
            Actions <FaCaretDown />
          </button>
          <div>
          <button className="bg-[#004512] text-white px-4 py-2 text-sm rounded font-semibold">
            Search Complaint
          </button>
          </div>
         
        </Box>
      </Box>
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-1 mb-8">
        <div className="py-4 px-6 bg-white rounded-md flex justify-between flex-col">
          <h1 className="text-center font-semibold text-[17px]">
            Total Complaints
          </h1>
          <Box className="flex items-center justify-center gap-2">
            <div className="rounded-full p-1 bg-[#cad1f6] mt-2">
              <img className="w-7 h-7" src={Img} alt="icon" />
            </div>
            <h1 className="text-[22px] font-bold">554</h1>
          </Box>
          <Box className="flex items-center justify-between gap-2 mt-2">
            <div className="flex gap-2 items-center">
              <div className="rounded-full p-1 bg-[#c2f0da] mt-2">
                <FaWhatsapp className="w-5 h-5 text-[#34cd86]" />
              </div>
              <h1 className="text-[18px] font-semibold">554</h1>
            </div>
            <div className="flex gap-2 items-center">
              <div className="rounded-full p-1 bg-[#c2f0da] mt-2">
                <FaRegBell className="w-5 h-5 text-[#34cd86]" />
              </div>
              <h1 className="text-[18px] font-semibold">554</h1>
            </div>
          </Box>
          <p className="text-xs mt-4 font-[500]">
            Total Complaints Lodged by Customers in NADRA Department.
          </p>
        </div>

        <div className="py-4 px-6 bg-white rounded-md flex justify-between flex-col">
          <h1 className="text-center font-semibold text-[17px]">
            Complaints Resolved
          </h1>
          <Box className="flex items-center justify-center gap-2">
            <div className="rounded-full p-1 bg-[#c2f0da] mt-2">
              <img className="w-8 h-8" src={Img1} alt="icon" />
            </div>
            <h1 className="text-[22px] font-bold">16.43 %</h1>
          </Box>

          <p className="text-xs mt-4 font-[500]">
            Complaints Resolved by NADRA Department Successfully.
          </p>
        </div>

        <div className="py-4 px-4 bg-white rounded-md  flex justify-between flex-col">
          <h1 className="text-center font-semibold text-[17px]">
            Active Complaints
          </h1>
          <Box className="flex items-center justify-center flex-col gap-2">
            <div className="rounded-full p-1 bg-[#c0ebfe] mt-2">
              <img className="w-7 h-7" src={Img2} alt="icon" />
            </div>
            <h1 className="text-[22px] font-bold">10.47 %</h1>
          </Box>

          <p className="text-xs mt-4 font-[500]">
            Active Complaints are In-Progress.
          </p>
        </div>

        <div className="py-4 px-6 bg-white rounded-md  flex justify-between flex-col">
          <h1 className="text-center font-semibold text-[17px]">
            Pending Complaints
          </h1>
          <Box className="flex items-center justify-center flex-col gap-2">
            <div className="rounded-full p-1 bg-[#fff0c5] mt-2">
              <img className="w-7 h-7" src={Img3} alt="icon" />
            </div>
            <h1 className="text-[22px] font-bold">8.3 %</h1>
          </Box>

          <p className="text-xs mt-4 font-[500]">
            Pending Complaints Need to Resolve.
          </p>
        </div>

        <div className="py-4 px-6 bg-white rounded-md  flex justify-between flex-col">
          <h1 className="text-center font-semibold text-[17px]">
            Active Complaints
          </h1>
          <Box className="flex items-center justify-center flex-col gap-2">
            <div className="rounded-full p-1 bg-[#ffc5d3] mt-2">
              <img className="w-7 h-7" src={Img4} alt="icon" />
            </div>
            <h1 className="text-[22px] font-bold">10.47 %</h1>
          </Box>

          <p className="text-xs mt-4 font-[500]">
            Active Complaints are In-Progress.
          </p>
        </div>
      </div>
      {/* CHART START */}
      <div className="p-4 rounded bg-white">
        <div className="flex justify-between">
          <div>
            <h1 className="mb-4 font-bold text-[18px]">
              Monthly Complaints' Status
            </h1>
            <h1 className="text-gray-400 mb-4 text-[16px]">
              Check How NADRA's Performance for Current Month.
            </h1>
          </div>
          <div>
            <Button onClick={handleClick}>
              <HiOutlineDotsHorizontal className="w-5 h-5 text-black" />
            </Button>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem sx={{ px: 6 }} onClick={handleClose}>
                Monthly
              </MenuItem>
              <MenuItem sx={{ px: 6 }} onClick={handleClose}>
                Weekly
              </MenuItem>
            </Menu>
          </div>
        </div>
        {/* CHART */}
        <div>
          <TickPlacementBars />
        </div>
      </div>
      {/* More Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-8">
        <div className="py-4 px-6 bg-white rounded-md flex justify-between flex-col">
          <h1 className="text-center font-semibold text-[17px]">
            Today Complaints
          </h1>
          <Box className="flex items-center justify-center gap-2">
            <div className="rounded-full p-1 bg-[#95d085] mt-2">
              <img className="w-10 h-10" src={Img5} alt="icon" />
            </div>
            <h1 className="text-[25px] font-bold">1</h1>
          </Box>
          <Box className="flex items-center justify-between gap-2 mt-1">
            <div className="flex gap-2 items-center">
              <div className="rounded-full p-1 bg-[#c2f0da] mt-2">
                <FaWhatsapp className="w-8 h-8 text-[#34cd86]" />
              </div>
              <h1 className="text-[18px] font-semibold">0</h1>
            </div>
            <div className="flex gap-2 items-center">
              <div className="rounded-full p-1 bg-[#c2f0da] mt-2">
                <FaRegBell className="w-8 h-8 text-[#34cd86]" />
              </div>
              <h1 className="text-[18px] font-semibold">1</h1>
            </div>
          </Box>
          <p className="text-xs mt-4 font-[500]">
            Today Complaints Lodged by Customers in NADRA Department.
          </p>
        </div>
        <div className="py-4 px-6 bg-white rounded-md flex justify-between flex-col">
          <h1 className="text-center font-semibold text-[17px]">
            Last Week Complaints
          </h1>
          <Box className="flex items-center justify-center gap-2">
            <div className="rounded-full p-1 bg-[#95d085] mt-2">
              <img className="w-10 h-10" src={Img6} alt="icon" />
            </div>
            <h1 className="text-[25px] font-bold">1</h1>
          </Box>
          <Box className="flex items-center justify-between gap-2 mt-1">
            <div className="flex gap-2 items-center">
              <div className="rounded-full p-1 bg-[#c2f0da] mt-2">
                <FaWhatsapp className="w-8 h-8 text-[#34cd86]" />
              </div>
              <h1 className="text-[18px] font-semibold">0</h1>
            </div>
            <div className="flex gap-2 items-center">
              <div className="rounded-full p-1 bg-[#c2f0da] mt-2">
                <FaRegBell className="w-8 h-8 text-[#34cd86]" />
              </div>
              <h1 className="text-[18px] font-semibold">1</h1>
            </div>
          </Box>
          <p className="text-xs mt-4 font-[500]">
            Today Complaints Lodged by Customers in NADRA Department.
          </p>
        </div>
        <div className="py-4 px-6 bg-white rounded-md flex justify-between flex-col">
          <h1 className="text-center font-semibold text-[17px]">
            Last Month Complaints
          </h1>
          <Box className="flex items-center justify-center gap-2">
            <div className="rounded-full p-1 bg-[#95d085] mt-2">
              <img className="w-10 h-10" src={Img7} alt="icon" />
            </div>
            <h1 className="text-[25px] font-bold">24</h1>
          </Box>
          <Box className="flex items-center justify-between gap-2 mt-1">
            <div className="flex gap-2 items-center">
              <div className="rounded-full p-1 bg-[#c2f0da] mt-2">
                <FaWhatsapp className="w-8 h-8 text-[#34cd86]" />
              </div>
              <h1 className="text-[18px] font-semibold">17</h1>
            </div>
            <div className="flex gap-2 items-center">
              <div className="rounded-full p-1 bg-[#c2f0da] mt-2">
                <FaRegBell className="w-8 h-8 text-[#34cd86]" />
              </div>
              <h1 className="text-[18px] font-semibold">7</h1>
            </div>
          </Box>
          <p className="text-xs mt-4 font-[500]">
            Today Complaints Lodged by Customers in NADRA Department.
          </p>
        </div>
      </div>
      {/* STATS CARD */}
      <StatsCard />
      {/* LAST CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-1 mb-8 mt-4">
        <div className="py-4 px-6 bg-white rounded-md flex justify-between flex-col">
          <h1 className="text-center font-semibold text-[17px]">
            Total Complaints this Month
          </h1>
          <Box className="flex items-center justify-center gap-2">
            <h1 className="text-[22px] font-bold">554</h1>
          </Box>

          <p className="text-xs mt-4 font-[500] text-center">
            This chart shows total Complaints in the current month.
          </p>
        </div>

        <div className="py-4 px-6 bg-white rounded-md flex justify-between flex-col">
          <h1 className="text-center font-semibold text-[17px]">
            Resolved Complaints in this Month
          </h1>
          <Box className="flex items-center justify-center gap-2">
            <h1 className="text-[22px] font-bold">16.43 %</h1>
          </Box>

          <p className="text-xs mt-4 font-[500] text-center">
            This chart shows Resolved Complaints in the current Month.
          </p>
        </div>

        <div className="py-4 px-4 bg-white rounded-md  flex justify-between flex-col">
          <h1 className="text-center font-semibold text-[17px]">
            Active Complaints
          </h1>
          <Box className="flex items-center justify-center flex-col gap-2">
            <h1 className="text-[22px] font-bold">1</h1>
          </Box>

          <p className="text-xs mt-4 font-[500] text-center">
            This chart shows Active Complaints in the current Month.
          </p>
        </div>

        <div className="py-4 px-6 bg-white rounded-md  flex justify-between flex-col">
          <h1 className="text-center font-semibold text-[17px]">
            Pending Complaints
          </h1>
          <Box className="flex items-center justify-center flex-col gap-2">
            <h1 className="text-[22px] font-bold">2</h1>
          </Box>

          <p className="text-xs mt-4 font-[500] text-center">
            This chart shows Pending Complaints in the current Month.
          </p>
        </div>

        <div className="py-4 px-6 bg-white rounded-md  flex justify-between flex-col">
          <h1 className="text-center font-semibold text-[17px]">
            Closed Complaints
          </h1>
          <Box className="flex items-center justify-center flex-col gap-2">
            <h1 className="text-[22px] font-bold">0</h1>
          </Box>

          <p className="text-xs mt-4 font-[500]">
            This chart shows Closed Complaints in the current Month.
          </p>
        </div>
      </div>
      <DashboardTable/>
      {/* ENDS */}
    </div>
  );
};

export default Dashboard;
