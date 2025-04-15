import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
    {
        name: 'Q 1',
        Attendees: 40,
        Average: 24,
    },
    {
        name: 'Q 2',
        Attendees: 30,
        Average: 13,
    },
    {
        name: 'Q 3',
        Attendees: 20,
        Average: 38,
    },
    {
        name: 'Q 4',
        Attendees: 27,
        Average: 19,
    },
    {
        name: 'Q 5',
        Attendees: 18,
        Average: 38,
    },
    {
        name: 'Q 6',
        Attendees: 23,
        Average: 28,
    },
    {
        name: 'Q 7',
        Attendees: 34,
        Average: 13,
    },
];

const StudentPerformance = () => {
    return (
        <div className='bg-white rounded p-5'>
            <div className="flex justify-between md:items-center flex-col md:flex-row">
                <h3 className='font-semibold text-[24px] xl:text-[28px] font-nunito'>Student Performance</h3>
                <div className="flex gap-4 xl:ml-0 lg:ml-0 md:ml-0 sm:ml-0 xsm:ml-2">
                    <p className='leading-7 text-base font-normal text-[#8A92A6] font-nunito'>Average Performance: Good</p>
                    <p className='leading-7 text-base font-normal text-[#8A92A6] font-nunito'>Specific Subject: Good</p>
                </div>
            </div>

            <div className="py-5">
                <div className="w-full h-80">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                            <defs>
                                <linearGradient id="colorAttendees" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorAverage" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Legend verticalAlign="top" align='left' height={36} iconType="circle" />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Area type="monotone" dataKey="Attendees" stroke="#8884d8" fillOpacity={1} fill="url(#colorAttendees)" />
                            <Area type="monotone" dataKey="Average" stroke="#82ca9d" fillOpacity={1} fill="url(#colorAverage)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

        </div>
    );
};

export default StudentPerformance;