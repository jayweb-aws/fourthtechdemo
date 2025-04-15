import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from 'recharts';

  const data = [
    {
      name: 'Jan',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Feb',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Mar',
      uv: 2000,
      pv: 8800,
      amt: 2290,
    },
    {
      name: 'Apr',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'May',
      uv: 1890,
      pv: 6100,
      amt: 2181,
    },
    {
      name: 'Jun',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Jul',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Jul',
      uv: 3490,
      pv: 7600,
      amt: 2100,
    },
    {
      name: 'Aug',
      uv: 3490,
      pv: 6000,
      amt: 2100,
    },
    {
      name: 'Sep',
      uv: 3490,
      pv: 3200,
      amt: 2100,
    },
    {
      name: 'Oct',
      uv: 3490,
      pv: 1000,
      amt: 2100,
    },
  ];

const StudentEnrollmentChart = () => {
    return (
        <div className='bg-white p-5'>
            <div className='mb-5 flex justify-between'>
              <h4 className='text-[23px] text-[#232D42] font-semibold leading-9'>Students Enrollment</h4>
              <div>
                  <span className='mr-3 text-[16px] text-[#ADB5BD]'>Sort by:</span>
                  <select className='bg-[#3A57E8] text-white px-[28px] py-[8px] rounded focus:outline-none'>
                    <option value="">Year</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                  </select>
              </div>
            </div>
            <div className="student-enrollment-chart">
            <ResponsiveContainer width="100%" height={200}>
                <LineChart
                    width={500}
                    height={200}
                    data={data}
                    syncId="anyId"
                    margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                    }}
                >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="linear" dataKey="pv" strokeWidth={2} stroke="#3A57E8" fill="#fff" />
          </LineChart>
        </ResponsiveContainer>
            </div>
        </div>
    );
};

export default StudentEnrollmentChart;