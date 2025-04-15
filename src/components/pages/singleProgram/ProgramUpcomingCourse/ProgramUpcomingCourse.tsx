import React, { useState } from 'react';
import Image from "next/image";
import checkIcon from "../../../../assets/programs/checkIcon.svg";
import Videoimage from "../../../../assets/programs/Videoimage.svg";
import checkIconred from "../../../../assets/programs/checkiconred.svg";
import File from "../../../../assets/programs/File.svg";
import infinity from "../../../../assets/programs/infinity.svg";
import Smartphone from "../../../../assets/programs/Smartphone.svg";

const ProgramUpcomingCourse = () => {
    const tabs = ["About", "Courses", "Modules", "Recommendations", "Testimonials"];
    const [activeTab, setActiveTab] = useState(0);

    const checklistItems = [
        "Learn Drawing, Art, Sketching, Illustration, Character Design, Digital Drawing, Pencil Drawing, Figure",
        "Understand drawing fundamentals and concepts like a pro",
        "Draw using shading and light to improve your art",
        "Complete your drawings with color",
        "Become confident at drawing, even if you’re a complete beginner",
        "Draw any kind of art from your imagination",
        "Draw shapes and add perspective to your artwork",
        "Draw gestures that look natural and realistic",
        "Know how to use composition in your drawing",
    ];

    const courseIncludes = [
        { image: Videoimage, description: "26.5 hours on-demand video" },
        { image: Smartphone, description: "Access on mobile and TV" },
        { image: File, description: "8 articles" },
        { image: infinity, description: "Full lifetime access" },
        { image: checkIconred, description: "Certificate of completion" },
    ];

    return (
        <div className="container">
            <div className="mx-5 md:mx-10">
                {/* Tabs Navigation */}
                <div className="mt-16 w-full overflow-x-auto">
                    <div className="flex md:w-[50%] min-w-max border-b border-gray-300 tracking-wide gap-x-6 text-[#40424B] text-center font-poppins text-[16px] font-medium leading-[20px] sm:w-full">
                        {tabs.map((tab, index) => (
                            <div
                                key={index}
                                className={`relative flex-1 cursor-pointer text-center px-1 pb-3 whitespace-nowrap ${index === activeTab ? "text-black" : "text-gray-500"}`}
                                onClick={() => setActiveTab(index)}
                            >
                                <span className="inline-block">{tab}</span>
                                <div className={`absolute bottom-0 left-0 w-full h-1 ${index === activeTab ? "bg-red-500" : "bg-transparent"}`}></div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Tab Content */}
                <div className="mt-10">
                    {activeTab === 0 && (
                        <>
                            <p className='text-[#232323] font-poppins text-[23px] font-medium leading-[23px] capitalize'>What you will learn</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 text-[#D1D5DB] text-[18px] mt-8">
                                {checklistItems.map((item, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="w-[22px] h-[22px] flex-shrink-0">
                                            <Image src={checkIcon} width={22} height={22} alt="Check" className="w-full h-full object-contain" priority={index === 0} />
                                        </div>
                                        <span className="text-[#40424B] font-poppins text-[16px] font-normal leading-[22px]">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                    {activeTab === 1 && <p className="text-[#232323] font-poppins text-[18px] mb-16">Courses content coming soon...</p>}
                    {activeTab === 2 && <p className="text-[#232323] font-poppins text-[18px] mb-16">Modules details coming soon...</p>}
                    {activeTab === 3 && <p className="text-[#232323] font-poppins text-[18px] mb-16">Recommendations will be added soon...</p>}
                    {activeTab === 4 && <p className="text-[#232323] font-poppins text-[18px] mb-16">Testimonials section coming soon...</p>}
                </div>

                {/* Course Includes */}
                {activeTab === 0 && (
                    <div className='my-24'>
                        <p className="text-[#232323] font-poppins text-[23px] font-medium leading-[23px] capitalize">This course includes</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 text-[#D1D5DB] text-[18px] mt-8">
                            {courseIncludes.map((item, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="w-[22px] h-[22px] flex-shrink-0">
                                        <Image src={item.image} width={22} height={22} alt="Icon" className="w-full h-full object-contain" priority={index === 0} />
                                    </div>
                                    <span className="text-[#40424B] font-poppins text-[16px] font-normal leading-[22px]">{item.description}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProgramUpcomingCourse;

// import React from 'react';
// import Title from '../../../common/Title/Title';
// import { sProgramUpcomingCourseArr } from '../../../../constant/constant';

// const ProgramUpcomingCourse = () => {
//     return (
//         <div className='pt-[90px]'>
//             <Title title="Upcoming Course Dates" />

//             <div className="container px-[30px] 2xl:px-0 grid grid-cols-1 lg:grid-cols-2 mt-[34px] pb-[50px]">
//                 {
//                     sProgramUpcomingCourseArr?.map((item, i) => (
//                         <div className='flex flex-col sm:flex-row gap-x-[20px] mb-[44px] last:mb-0' key={i}>
//                             <div className='w-[140px] sm:w-[150px] lg:w-[190px] h-[150px] lg:h-[190px] bg-secondary rounded-full flex flex-col justify-center items-center'>
//                                 <h4 className='text-[34px] lg:text-[40px] font-semibold'>{item?.day}</h4>
//                                 <h4>{item?.month}</h4>
//                             </div>
//                             <div className='max-w-[340px] pt-[30px]'>
//                                 <p>{item?.body}</p>
//                             </div>
//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//     );
// };

// export default ProgramUpcomingCourse;