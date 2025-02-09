import React from "react";
import { GoBell } from "react-icons/go";
import { FaWhatsapp } from "react-icons/fa";

const StatsCard = () => {
  return (
    <div className="grid grid-cols-2 gap-4 py-4">
      {/* Statistics Card */}
      <div className="bg-white shadow-md rounded-lg p-4 ">
        <h2 className="text-lg font-semibold mb-4">Statistics</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-black font-semibold">Total</span>
            <span className="font-bold text-[18px] text-blue-600">2</span>
          </div>
          <div className="text-xs text-black border-b pb-3">
            Weekly Total Complaints reports
          </div>

          <div className="flex justify-between">
            <span className="text-black font-semibold">Resolved</span>
            <span className="font-bold text-green-600">1</span>
          </div>
          <div className="text-xs text-gray-500 border-b pb-3">
            Weekly Resolved Complaints reports
          </div>

          <div className="flex justify-between">
            <span className="text-black font-semibold">Active</span>
            <span className="font-bold text-yellow-600">1</span>
          </div>
          <div className="text-xs text-gray-500 border-b pb-3">
            Weekly Active Complaints reports
          </div>

          <div className="flex justify-between">
            <span className="text-black font-semibold">Pending</span>
            <span className="font-bold text-[#FFCE3E] ">0</span>
          </div>
          <div className="text-xs text-gray-500 border-b pb-3">
            Weekly Pending Complaints reports
          </div>

          <div className="flex justify-between">
            <span className="text-black font-semibold">Closed</span>
            <span className="font-bold text-[#FF3E6C]">0</span>
          </div>
          <div className="text-xs text-gray-500">
            Weekly Closed Complaints reports
          </div>
        </div>
      </div>

      {/* Annual Complaints' Reports Card */}
      <div className="bg-white shadow-md rounded-lg p-4 ">
        <h2 className="text-lg font-semibold mb-4 text-center">
          Annual Complaints' Reports
        </h2>
        <div className="text-center">
          <p className="text-gray-400 mb-2 text-xs border-b pb-3">
            Current year's statistics for lodged complaints in NADRA Department
          </p>
          <div className="text-4xl font-bold text-black mb-4">25</div>

          <div className="flex justify-center space-x-8 mb-4">
            <div>
              <span className="ml-2 text-gray-400 text-sm">
                Whatsapp Complaint's
              </span>
              <div className="flex items-center justify-center mt-2">
                <FaWhatsapp className="mr-2 text-green-500 w-10 h-10 bg-[#c2f0da] rounded-full p-1" />
                <span className="font-semibold text-xl">17</span>
              </div>
            </div>

            <div>
              <span className="ml-2 text-gray-400 text-sm">
                Bellofhope Complaint's
              </span>
              <div className="flex items-center justify-center mt-2">
                <GoBell className="mr-2 text-green-500 w-10 h-10 bg-[#c2f0da] rounded-full p-1" />
                <span className="font-semibold text-xl">8</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center border-t pt-4">
            <div>
              <span className="block text-black text-sm font-bold">
                Monthly report
              </span>
              <div className="flex gap-32 mt-3">
                <div>
                  <span className="text-gray-400 text-sm block">Current month</span>
                  <span className="text-black font-semibold">1</span>
                </div>
                <div>
                  <span className="text-gray-400 text-sm block">Last year</span>
                  <span className="text-black font-semibold">34</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
