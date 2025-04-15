'use client';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend
} from 'recharts';
import Calendar from '../../../../../assets/Calendar.svg'
import graphdot from '../../../../../assets/graphdot.svg'
import graphdot2 from '../../../../../assets/graphdot2.svg'
const data1 = [
  { topic: 'AI', Completed: 65, Interrupted: 40 },
  { topic: 'Compliance', Completed: 80, Interrupted: 65 },
  { topic: 'Cloud', Completed: 50, Interrupted: 45 },
  { topic: 'Blockchain', Completed: 35, Interrupted: 55 },
  { topic: 'Development', Completed: 45, Interrupted: 30 },
  { topic: 'Privacy', Completed: 60, Interrupted: 75 },
  { topic: 'Security', Completed: 70, Interrupted: 60 },
];

export default function PopularTopicsChart() {
  return (
    <div>
      <div className='flex h-[26px] px-[6px] justify-between items-center self-stretch mb-4'>
              <p className="text-[#293642] font-medium text-[21px] leading-[26px] font-[Poppins]">Popular Topics</p>
              <button className="flex h-9 px-3 py-1.5 items-center gap-2 rounded-lg bg-white hover:bg-gray-100 text-[#293642] font-medium text-[14px] leading-[16px] font-[Poppins] cursor-pointer transition-all shadow-sm border border-[#ECF1F3]">
                <Image src={Calendar} alt="Calendar" width={18} height={18} />
                <span>Last 7 days</span>
              </button>
            </div>
    <div className="bg-white rounded-2xl shadow p-4 w-full">
    

      <ResponsiveContainer width="100%" height={300}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data1}>
          <PolarGrid stroke="#E5E7EB" strokeWidth={1} />
          <PolarAngleAxis
            dataKey="topic"
            tick={{ fill: '#5578A0', fontSize: 12, fontFamily: 'Poppins' }}
          />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />

          <Radar
            name="Completed"
            dataKey="Completed"
            stroke="#3B38F2"
            fill="#3B38F2"
            fillOpacity={0.2}
            strokeWidth={2}
            dot={({ cx, cy }) => {
              return (
                <circle
                  cx={cx}
                  cy={cy}
                  r={4}
                  fill="#3B38F2"
                  stroke="#fff"
                  strokeWidth={1}
                />
              );
            }}
          />
          <Radar
            name="Interrupted"
            dataKey="Interrupted"
            stroke="#FBBF24"
            fill="#FBBF24"
            fillOpacity={0.2}
            strokeWidth={2}
            dot={({ cx, cy }) => {
              return (
                <circle
                  cx={cx}
                  cy={cy}
                  r={4}
                  fill="#FBBF24"
                  stroke="#fff"
                  strokeWidth={1}
                />
              );
            }}
          />
        </RadarChart>
      </ResponsiveContainer>

      <div className="flex justify-center gap-8 mt-4">
        <div className="flex items-center gap-2">
          {/* <span className="w-3 h-3 rounded-full bg-[#3B38F2]" /> */}
          <Image src={graphdot} alt="Calendar" width={18} height={6} />
          <span className="text-[#293642] text-sm font-[Poppins]">Completed</span>
        </div>
        <div className="flex items-center gap-2">
          {/* <span className="w-3 h-3 rounded-full bg-[#FBBF24]" /> */}
          <Image src={graphdot2} alt="Calendar" width={18} height={6} />
          <span className="text-[#293642] text-sm font-[Poppins]">Interrupted</span>
        </div>
      </div>
    </div>
    </div>
  );
}




'use client';
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid
} from 'recharts';
import { useState } from 'react';
import Image from 'next/image';

const data = [
  { name: 'Sunday', earnings: 420 },
  { name: 'Monday', earnings: 510 },
  { name: 'Tuesday', earnings: 380 },
  { name: 'Wednesday', earnings: 390 },
  { name: 'Thursday', earnings: 570 },
  { name: 'Friday', earnings: 675.51 },
  { name: 'Saturday', earnings: 610 },
];

export  function EarningsChart() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div>
      <div className='flex h-[26px] px-[6px] justify-between items-center self-stretch mb-4'>
              <p className="text-[#293642] font-medium text-[21px] leading-[26px] font-[Poppins]">Earnings</p>
              <button className="flex h-9 px-3 py-1.5 items-center gap-2 rounded-lg bg-white hover:bg-gray-100 text-[#293642] font-medium text-[14px] leading-[16px] font-[Poppins] cursor-pointer transition-all shadow-sm border border-[#ECF1F3]">
                <Image src={Calendar} alt="Calendar" width={18} height={18} />
                <span>Last 7 days</span>
              </button>
            </div>
    <div className="bg-white rounded-2xl shadow p-4 w-full">
    <p className="text-[#293642] font-[Poppins] text-[38px] font-semibold leading-[38px] not-italic">
  <span className="text-[#8EABCC] text-[21px] font-medium leading-[26px] not-italic">
    $
  </span>{' '}
  2,682.52
</p>
<p className="flex items-center gap-1 mt-1 text-sm font-[Poppins]">
  <span className="text-[#EF4444] text-base">⬊</span>
  <span className="text-[#EF4444] font-medium">7.6%</span>
  <span className="text-[#5578A0] font-normal">than last week</span>
</p>

      <ResponsiveContainer width="100%" height={270}>
        <AreaChart
          data={data}
          margin={{ top: 40, right: 0, left: 0, bottom: 0 }}
          onMouseMove={(state) => setActiveIndex(state?.activeTooltipIndex ?? null)}
        >
          <defs>
            <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4339F2" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#4339F2" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="name"
            hide
          />
          <YAxis hide />
          <CartesianGrid stroke="#E5E7EB" strokeDasharray="6 6" vertical={false} />
          
          <Tooltip
  content={({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white rounded-xl border border-[#E6EFF5] px-4 py-2 flex items-center justify-between gap-6 w-fit shadow-sm">
          <p className=" text-[#5578A0] font-[Poppins] text-[12px] font-normal leading-[12px]">
            {label}
          </p>
          <p className="text-[#293642] font-[Poppins] text-[12px] font-medium leading-[12px]">
            ${payload[0].value}
          </p>
        </div>
      );
    }
    return null;
  }}
  cursor={{ stroke: '#4339F2', strokeWidth: 1, strokeDasharray: '3 3' }}
/>


          <Area
            type="monotone"
            dataKey="earnings"
            stroke="#4339F2"
            strokeWidth={2}
            fill="url(#blueGradient)"
            activeDot={{ r: 6, stroke: '#fff', strokeWidth: 2 }}
            dot={({ cx, cy, index }) => {
              const isActive = index === activeIndex;
              return (
                <circle
                  cx={cx}
                  cy={cy}
                  r={isActive ? 6 : 4}
                  fill="#4339F2"
                  stroke="#fff"
                  strokeWidth={2}
                />
              );
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
    </div>
  );
}



// import React from "react";
// import { useState } from "react";
// import Calendar from "react-calendar";
// import { HiOutlineDotsHorizontal } from "react-icons/hi";
// import { RiArrowDropDownLine } from "react-icons/ri";

// const NextClass = () => {
//   const [value, onChange] = useState(new Date());
//   const [selected, setSelected] = useState(false);
//   return (
//     <>
//       <div className=" mt-10 w-full grid grid-cols-12 p-3 gap-x-5 font-nunito rounded-lg bg-white content-center h-auto">
//         <div className="col-span-12 sm:col-span-6">
//           <h1 className="text-xl text-black mb-3 font-bold">
//             Upcoming Classes
//           </h1>
//           <Calendar onChange={onChange} value={value} className="mx-auto" />
//         </div>

//         <div className="col-span-12 sm:col-span-6 mt-10 py-5">
//           {[1, 2].map((idx) => (
//             <div
//               key={idx}
//               className={`flex flex-col items-start py-4 px-0 justify-between  border rounded-lg shadow-md md:flex-row md:max-w-xl  bg-gray-bg ${
//                 idx === 1 ? "mb-4" : "mb-0"
//               }`}
//               onClick={() => setSelected(true)}
//             >
//               <div className="flex">
//                 <div
//                   className={`${
//                     idx === 1 ? "bg-violet-500" : "bg-transparent"
//                   } w-1 h-11 rounded-t-xl rounded-b-xl mt-4  `}
//                 ></div>
//                 <div className="flex flex-col justify-between px-2  leading-normal">
//                   <h1 className="text-small-text-color text-sm ">
//                     Section 3: Chapter 4
//                   </h1>
//                   <h5 className="my-2 font-bold tracking-normal text-gray-500 dark:text-white">
//                     Practice What you learn and apply for test
//                   </h5>
//                   <p className=" text-sm font-normal  text-small-text-color">
//                     09:00 am- 10:30 am
//                   </p>
//                 </div>
//               </div>
//               <div className="px-4">
//                 <HiOutlineDotsHorizontal />
//               </div>
//             </div>
//           ))}

//           {/* <p>{value.toDateString()}</p> */}
//           <div className="flex items-center justify-center mt-5">
//             <div className="w-7 h-7 rounded-full bg-arrow-btn-bg flex items-center justify-center">
//               <RiArrowDropDownLine className="text-arrow-btn w-7 h-7" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default NextClass;

