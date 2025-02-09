import React from 'react';
import { BarChart } from 'recharts';
import { Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MonthlyComplaintsChart = () => {
  const data = [
    { month: 'Feb', Resolved: 1, Active: 0, Pending: 4, Closed: 0 },
    { month: 'Mar', Resolved: 0, Active: 0, Pending: 7, Closed: 0 },
    { month: 'Apr', Resolved: 0, Active: 0, Pending: 5, Closed: 0 },
    { month: 'May', Resolved: 0, Active: 7, Pending: 7, Closed: 10 },
    { month: 'Jun', Resolved: 0, Active: 0, Pending: 9, Closed: 0 },
    { month: 'Jul', Resolved: 0, Active: 0, Pending: 5, Closed: 0 },
    { month: 'Aug', Resolved: 0, Active: 0, Pending: 9, Closed: 0 },
    { month: 'Sep', Resolved: 0, Active: 0, Pending: 18, Closed: 0 },
    { month: 'Oct', Resolved: 0, Active: 1, Pending: 0, Closed: 27 },
    { month: 'Nov', Resolved: 0, Active: 0, Pending: 10, Closed: 0 },
    { month: 'Dec', Resolved: 0, Active: 1, Pending: 19, Closed: 0 },
    { month: 'Jan', Resolved: 0, Active: 0, Pending: 13, Closed: 0 },
    { month: 'Feb', Resolved: 0, Active: 0, Pending: 14, Closed: 0 }
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-gray-200 shadow-md">
          <p className="text-sm text-gray-500 border-b pb-1 mb-2">{label}</p>
          {payload.map((entry, index) => (
            <div key={`tooltip-item-${index}`} className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              <p className="text-sm">
                {entry.name}: {entry.value} Complaints
              </p>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5
          }}
          
          barSize={10}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="month" tick={{ fontSize: 10 }}/>
          <YAxis
            label={{ 
              value: 'Monthly Complaints',
              angle: -90,
              position: 'insideLeft',
              offset: 25,
              dy:52
              
            }}
            tick={{ fontSize: 10 }}
            ticks={[0, 7, 14, 21, 28]}
            axisLine={false}
          />
          <Tooltip 
            content={<CustomTooltip />}
            cursor={{ fill: 'transparent' }}
          />
          <Legend itemStyle={{ fontSize: '10px' }} />
          <Bar 
            dataKey="Resolved" 
            fill="#00BFF8"
            isAnimationActive={false}
          />
          <Bar 
            dataKey="Active" 
            fill="#00E396"
            isAnimationActive={false}
          />
          <Bar 
            dataKey="Pending" 
            fill="#FEB019"
            isAnimationActive={false}
          />
          <Bar 
          
            dataKey="Closed" 
            fill="#FF4560"
            isAnimationActive={false}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyComplaintsChart;