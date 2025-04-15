// import { Dropdown } from "flowbite-react";

// import {
//   CartesianGrid,
//   Legend,
//   Line,
//   LineChart,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from "recharts";

// const data = [
//   {
//     name: "Sun",
//     Business: 1500,
//     Branding: 2000,
//     Design: 3000,
//   },
//   {
//     name: "Mon",
//     Business: 2000,
//     Branding: 3000,
//     Design: 2700,
//   },
//   {
//     name: "Tue",
//     Business: 2200,
//     Branding: 4000,
//     Design: 1000,
//   },
//   {
//     name: "Wed",
//     Business: 4000,
//     Branding: 3000,
//     Design: 1000,
//   },
//   {
//     name: "Thur",
//     Business: 1890,
//     Branding: 4800,
//     Design: 4181,
//   },
//   {
//     name: "Fri",
//     Business: 2890,
//     Branding: 3800,
//     Design: 2500,
//   },
//   {
//     name: "Sat",
//     Business: 1490,
//     Branding: 2300,
//     Design: 4100,
//   },
// ];

// export default function StudyStatistics() {
//   return (
//     <>
//       <div className="flex justify-between items-center border-b pb-4">
//         <h3 className="font-semibold text-xl">Study Statistics</h3>
//         <div className="flex gap-2 items-center">
//           <p className="text-gray-300">Short By:</p>
//           <Dropdown label="Monthly" dismissOnClick={false}>
//             <Dropdown.Item>Days</Dropdown.Item>
//             <Dropdown.Item>Weeks</Dropdown.Item>
//             <Dropdown.Item>Months</Dropdown.Item>
//             <Dropdown.Item>Year</Dropdown.Item>
//           </Dropdown>
//         </div>
//       </div>
//       <div className=" w-full h-80">
//         <ResponsiveContainer>
//           <LineChart
//             data={data}
//             margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend
//               verticalAlign="top"
//               align="left"
//               height={30}
//               width={280}
//               iconType="circle"
//             />
//             <Line dataKey="Branding" stroke="#8884d8" activeDot={{ r: 8 }} />
//             <Line dataKey="Design" stroke="#D88ff8" activeDot={{ r: 8 }} />
//             <Line dataKey="Business" stroke="#82ca9d" />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     </>
//   );
// }


// components/ChartCard.tsx
'use client';

import Image from 'next/image';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart
} from 'recharts';
import Calendar from '../../../../../assets/Calendar.svg'
import graphdot from '../../../../../assets/graphdot.svg'
import graphdot2 from '../../../../../assets/graphdot2.svg'

const data = [
  { name: 'Sunday', Instructors: 18, Students: 52 },
  { name: 'Monday', Instructors: 27, Students: 36 },
  { name: 'Tuesday', Instructors: 14, Students: 20 },
  { name: 'Wednesday', Instructors: 29, Students: 34 },
  { name: 'Thursday', Instructors: 22, Students: 10 },
  { name: 'Friday', Instructors: 41, Students: 18 },
  { name: 'Saturday', Instructors: 19, Students: 37 },
];

export default function StudyStatistics() {
  return (
    <div>
      <div className='flex h-[26px] px-[6px] justify-between items-center self-stretch mb-4'>
        <p className="text-[#293642] font-medium text-[21px] leading-[26px] font-[Poppins]">New Users</p>
        <button className="flex h-9 px-3 py-1.5 items-center gap-2 rounded-lg bg-white hover:bg-gray-100 text-[#293642] font-medium text-[14px] leading-[16px] font-[Poppins] cursor-pointer transition-all shadow-sm border border-[#ECF1F3]">
          <Image src={Calendar} alt="Calendar" width={18} height={18} />
          <span>Last 7 days</span>
        </button>
      </div>
      <div className="rounded-2xl bg-white shadow- px-6 pt-6 pb-6 w-full border border-[#E8ECEE]">
        {/* Header */}
        <div className="flex items-start gap-[46px] self-stretch">
          {/* Instructors */}
          <div className="flex items-center gap-2">
            {/* <span className="w-4 h-0.5 bg-indigo-600"></span> */}
            <Image src={graphdot} alt="Calendar" width={18} height={18} />
            <div className="flex flex-col items-start">
              <span className="text-[#293642] font-[Poppins] text-[28px] leading-[28px] font-semibold">521</span>
              <span className=" text-[#5578A0] font-[Poppins] text-[14px] leading-[18px] font-normal">Instructors</span>
            </div>
          </div>

          {/* Students */}
          <div className="flex items-center gap-2">
            {/* <span className="w-4 h-0.5 bg-yellow-400"></span> */}
            <Image src={graphdot2} alt="Calendar" width={18} height={18} />
            <div className="flex flex-col items-start">
              <span className="text-[#293642] font-[Poppins] text-[28px] leading-[28px] font-semibold">82</span>
              <span className="text-[#5578A0] font-[Poppins] text-[14px] leading-[18px] font-normal">Students</span>
            </div>
          </div>
        </div>


        {/* Chart */}
        <div className="mt-6 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 0, right: 0, left: -30, bottom: 0 }}>
              <defs>
                <linearGradient id="colorInstructor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorStudent" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#facc15" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#facc15" stopOpacity={0} />
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" />
              {/* <XAxis dataKey="name" tick={{ fill: '#6b7280' }} /> */}
              <XAxis
                dataKey="name"
                interval={0}
                tickLine={false}

                height={50} // 🔥 Add this to give extra vertical room
                width={50}
                tick={({ x, y, payload, index }) => {
                  const day = payload.value;

                  const linesMap: Record<string, string[]> = {
                    Sunday: ['Sun', 'day'],
                    Monday: ['Mon', 'day'],
                    Tuesday: ['Tues', 'day'],
                    Wednesday: ['Wedn', 'esda', 'y'],
                    Thursday: ['Thurs', 'day'],
                    Friday: ['Fri', 'day'],
                    Saturday: ['Satur', 'day'],
                  };

                  // const lines = linesMap[day] || [day];
                  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
                  const lines = isMobile && linesMap[day] ? linesMap[day] : [day];

                  return (
                    <g transform={`translate(${x},${y + 10})`}>
                      <text
                        textAnchor={index === 0 ? 'middle' : 'end'}
                        fill="#6b7280"
                        fontSize={12}
                        fontFamily="Poppins"
                      >
                        {lines.map((line, index) => (
                          <tspan key={index} x="0" dy={index === 0 ? 0 : 12}>
                            {line}
                          </tspan>
                        ))}
                      </text>
                    </g>
                  );
                }}
              />

              <YAxis />
              <Tooltip
                contentStyle={{ borderRadius: '12px', padding: '10px' }}
                formatter={(value: number, name: string) => [value, name]}
              />
              <Area
                type="monotone"
                dataKey="Instructors"
                stroke="#6366f1"
                fillOpacity={1}
                fill="url(#colorInstructor)"
                activeDot={{ r: 6 }}
              />
              <Area
                type="monotone"
                dataKey="Students"
                stroke="#facc15"
                fillOpacity={1}
                fill="url(#colorStudent)"
                activeDot={{ r: 6 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
