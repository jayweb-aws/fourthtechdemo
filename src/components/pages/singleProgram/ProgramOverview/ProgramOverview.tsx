import React from 'react';
import Image from 'next/image'
import Title from '../../../common/Title/Title';
import overViewImg from '../../../../assets/single-program/overview.png';

const ProgramOverview = () => {

    const courseDetails = {
        modules: { title: "4 modules", subtitle: "Career Credential" },
        rating: { value: 4.0, reviews: 18 },
        level: { title: "Beginner level", subtitle: "Recommended experience" },
        attendance: { title: "Online Attendance", subtitle: "Online 1h 20m Class" },
        price: { value: "$3000", subtitle: "Course Price" }
    };

    return (
        <div className='container'>
            <div
                className="bg-white  text-gray-800 p-8 md:p-6 rounded-2xl mt-6 shadow-md mx-5 md:mx-10 "
                style={{ boxShadow: "0px 0px 13.6px 0px rgba(0, 0, 0, 0.13)" }}
            >
                {/* Desktop View */}
                <div className="hidden lg:flex items-center justify-between">
                    <div className="flex-1 text-center">
                        <p className="text-[#40424B] text-lg font-medium">{courseDetails.modules.title}</p>
                        <p className="text-sm text-gray-500">{courseDetails.modules.subtitle}</p>
                    </div>

                    <div className="flex-1 text-center border-l border-gray-300">
                        <p className="text-[#40424B] text-lg font-medium flex items-center justify-center gap-1">
                            {courseDetails.rating.value} <span className="text-yellow-500">★</span>
                        </p>
                        <p className="text-sm text-gray-500">({courseDetails.rating.reviews} reviews)</p>
                    </div>

                    <div className="flex-1 text-center border-l border-gray-300">
                        <p className="text-[#40424B] text-lg font-medium">{courseDetails.level.title}</p>
                        <p className="text-sm text-gray-500">{courseDetails.level.subtitle}</p>
                    </div>

                    <div className="flex-1 text-center border-l border-gray-300">
                        <p className="text-[#40424B] text-lg font-medium">{courseDetails.attendance.title}</p>
                        <p className="text-sm text-gray-500">{courseDetails.attendance.subtitle}</p>
                    </div>

                    <div className="flex-1 text-center border-l border-gray-300">
                        <p className="text-[#40424B] text-lg font-medium">{courseDetails.price.value}</p>
                        <p className="text-sm text-gray-500">{courseDetails.price.subtitle}</p>
                    </div>
                </div>

                {/* Mobile View */}
                <div className="lg:hidden grid grid-cols-2 gap-y-9">
                    {/* First Row: Modules | Rating */}
                    <div className="border-r border-gray-300 pr-4">
                        <p className="text-[#40424B] font-poppins text-[18px] font-medium leading-[18px]">{courseDetails.modules.title}</p>
                        <p className="font-poppins text-[14px] font-normal leading-[18px] mt-2">{courseDetails.modules.subtitle}</p>
                    </div>

                    <div className='ml-4 border-r border-gray-300'>
                        <p className="flex items-center gap-1 text-[#40424B] font-poppins text-[18px] font-medium leading-[18px]">
                            {courseDetails.rating.value} <span className="text-yellow-500 ">★</span>
                        </p>
                        <p className="text-[#6F6F6F] font-poppins text-[14px] font-normal leading-[18px] mt-2">({courseDetails.rating.reviews} reviews)</p>
                    </div>

                    {/* Second Row: Level (Full Width) */}
                    <div className="col-span-2 border-r border-gray-300">
                        <p className="text-[#40424B] font-poppins text-[18px] font-medium leading-[18px]">{courseDetails.level.title}</p>
                        <p className="text-[#6F6F6F] font-poppins text-[14px] font-normal leading-[18px] mt-2">{courseDetails.level.subtitle}</p>
                    </div>

                    {/* Third Row: Attendance | Price */}
                    <div className="border-r border-gray-300 ">
                        <p className="text-[#40424B] font-poppins text-[18px] font-medium leading-[18px]">{courseDetails.attendance.title}</p>
                        <p className="text-[#6F6F6F] font-poppins text-[14px] font-normal leading-[18px] mt-2">{courseDetails.attendance.subtitle}</p>
                    </div>

                    <div className="ml-4">
                        <p className="text-[#40424B] font-poppins text-[18px] font-medium leading-[18px]">{courseDetails.price.value}</p>
                        <p className="text-[#6F6F6F] font-poppins text-[14px] font-normal leading-[18px] mt-2">{courseDetails.price.subtitle}</p>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default ProgramOverview;
// import React from 'react';
// import Image from 'next/image'
// import Title from '../../../common/Title/Title';
// import overViewImg from '../../../../assets/single-program/overview.png';

// const ProgramOverview = () => {
//     return (
//         <div className='pt-[80px] xl:pt-[110px] pb-[60px] xl:pb-[93px]'>
//             <Title title='Program Overview' />

//             <div className="container px-[30px] 2xl:px-0 grid-cols-1 grid lg:grid-cols-3 mt-[30px] md:mt-[52px] gap-x-[20px]">
//                 <div className='mb-[30px] lg:mb-0'>
//                     <Image
//                         src={overViewImg}
//                         alt='overview'
//                     // layout='responsive'
//                     />
//                 </div>

//                 <div className='col-span-2 max-w-[715px]'>
//                     <p className='text-[16px] text-dark mb-[30px] lg:mb-[44px]'>The ever-evolving digital landscape requires vigilant cybersecurity measures. With the rise in cyber threats, there's a growing need for professionals trained to guard our digital infrastructure. This Cybersecurity Bootcamp is designed to groom the next generation of cybersecurity experts.</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProgramOverview;