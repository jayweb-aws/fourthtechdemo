import React, { useState } from 'react';
import Image from 'next/image';
import Title from '../../../common/Title/Title';
import { sProgramTeamArr } from '../../../../constant/constant';
import logo from '../../../../assets/programs/logo.svg';
import { PlayCircleIcon } from "@heroicons/react/24/solid";

const courseDetails = [
  "4 sections",
  "127 lectures",
  "26h 38m total length",
];

const courseData = [
  {
    title: "Welcome To The Drawing Course",
    lectures: [
      { title: "Welcome to the Drawing Masterclass! | Drawing Course", duration: "02:55" },
      { title: "How to Get the Most Out of this Course | Drawing Course", duration: "00:28" },
      { title: "Download the Course Workbook | Drawing Course", duration: "00:06" },
      { title: "Start Drawing - Instantly Draw a Better Head | Drawing Course", duration: "08:21" },
      { title: "Action Item - Post Your Sketch | Drawing Course", duration: "00:17" },
      { title: "Tips to Improve Your Course Taking Experience | Drawing Course", duration: "01:06" },
    ],
    totalLectures: 6,
    totalDuration: "13min",
  },
  {
    title: "Warm-Up Sketching Exercises",
    lectures: [
      { title: "Welcome to the Drawing Masterclass! | Drawing Course", duration: "02:55" },
      { title: "How to Get the Most Out of this Course | Drawing Course", duration: "00:28" },
      { title: "Download the Course Workbook | Drawing Course", duration: "00:06" },
    ],
    totalLectures: 6,
    totalDuration: "26min",
  },
  {
    title: "The Basics: Art Fundamentals",
    totalLectures: 9,
    totalDuration: "1hr",
  },
  {
    title: "Recommended Tools For Drawing",
    totalLectures: 8,
    totalDuration: "42min",
  },
  {
    title: "Shading",
    totalLectures: 4,
    totalDuration: "1hr 10min",
  },
];

const instructorData = {
  name: "Fourth IT Academy",
  rating: 4.7,
  totalRatings: 124,
  courses: 2,
  learners: "162,601",
};
const ProgramTeam = () => {

  const [expanded, setExpanded] = useState(null);

  const toggleSection = (index: any) => {
    setExpanded(expanded === index ? null : index);
  };
  return (
    <div className='container mb-24 '>
      <div className="mx-5 md:mx-10">
        <div>
          <p className='text-[#232323] font-poppins text-[23px] font-medium leading-[23px] capitalize'>There are 4 modules in this course</p>
          <ul className="mt-4 grid grid-cols-2 md:flex md:flex-wrap gap-y-2">
            {courseDetails.map((detail, index) => (
              <li
                key={index}
                className={`flex items-center text-[#40424B] font-poppins text-[16px] font-normal leading-[22px] ${index % 3 === 2 ? "col-span-2 text-center" : ""}`}
              >
                {index > 0 && <span className="mx-2">•</span>}
                {detail}
              </li>
            ))}
          </ul>
        </div>

        <div className="max-w- mt-8 flex flex-col md:flex-row gap-6">
          {/* Course Curriculum */}
          <div className="bg-white text-black rounded-3xl overflow-hidden border border-[#F0EBEE] w-full md:w-2/3">
            {courseData.map((section, index) => (
              <div key={index} className="border-b border-[#F0EBEE]">
                <div
                  className={`p-6 cursor-pointer text-[#232323] font-poppins text-[18px] font-medium leading-[16px] capitalize 
    ${expanded === index ? "bg-[rgba(240,65,82,0.10)]" : "bg-white"}`}
                  onClick={() => toggleSection(index)}
                >
                  {/* Title & SVG Centered */}
                  <div className="flex md:flex-row flex-col items- justify-between text-start md:text-left">
                    {/* SVG & Title */}
                    <div className="flex items-center gap-4">
                      {expanded === index ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 min-w-[24px] min-h-[24px]" viewBox="0 0 24 24" fill="none">
                          <path d="M6 15L12 9L18 15" stroke="#40424B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 min-w-[24px] min-h-[24px]" viewBox="0 0 24 24" fill="none">
                          <path d="M6 9L12 15L18 9" stroke="#40424B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                      <span className="font-medium leading-[22px]">{section.title}</span>
                    </div>

                    {/* Time Section - Moves Below in Mobile */}
                    <div className="mt-2 md:mt-0 w-full md:w-auto flex ml-9 md:ml-0 md:justify-end">
                      <span className="text-[#40424B] font-poppins text-[16px] font-normal leading-[22px]">
                        {section.totalLectures} lectures • {section.totalDuration}
                      </span>
                    </div>
                  </div>
                </div>
                {/* Lectures List */}
                {expanded === index && section.lectures && (
                  <ul className="px-6 bg-white">
                    {section.lectures.map((lecture, idx) => (
                      <li key={idx} className="py-4 text-[#40424B] font-poppins text-base font-normal leading-[22px]">
                        <div className="flex md:flex-row flex-col md:justify-between items- md:items-start">
                          {/* Lecture Title & Icon */}
                          <div className="flex items-center gap-3">
                            <PlayCircleIcon className="w-6 h-6 min-w-[24px] text-[#F04152]" />
                            <span className="text-[16px] font-medium">{lecture.title}</span>
                          </div>
                          {/* Lecture Duration (Below Title in Mobile) */}
                          <span className="md:ml-4 text-gray-500 md:text-right mt-1 md:mt-0 ml-9">
                            {lecture.duration}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          {/* Instructor Card */}
          <div className=" text-[#232323] p-6 rounded-3xl border border-[#F0EBEE] w-full md:w-1/3  h-[190px] ">
            <h3 className="text-[#232323] font-poppins text-[23px] font-medium leading-[23px]">Instructor</h3>
            <p className=" text-[#6F6F6F] font-poppins text-[16px] font-normal leading-[22px] mt-3">
              Instructor ratings <span className="text-[#232323]">{instructorData.rating} ⭐</span> ({instructorData.totalRatings} ratings)
            </p>
            <div className='border mt-4'></div>
            <div className="mt-4 flex items-center gap-4">
              <div className=" w-12 h-12 flex items-center justify-center rounded-full">
                <Image src={logo} width={38} height={38} alt="Instructor Icon" />
              </div>
              <div>
                <p className="text-[#40424B] font-['Open_Sans'] text-[16px] font-semibold leading-[16px]">{instructorData.name}</p>
                <p className=" text-sm text-[#40424B] font-['Poppins']  font-normal mt-2">{instructorData.courses} Courses • {instructorData.learners} learners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramTeam;

// import React from 'react';
// import Image from 'next/image';
// import Title from '../../../common/Title/Title';
// import { sProgramTeamArr } from '../../../../constant/constant';

// const ProgramTeam = () => {
//     return (
//         <div>
//             <div className='relative z-10 before:absolute before:w-full before:h-full before:bg-secondary before:z-[-1] before:skew-y-[-4deg] my-[60px] md:my-[100px]'>
//                 <div className="container px-[30px] 2xl:px-0 pt-[60px] pb-[60px] lg:pb-[100px]">
//                     <Title title='Meet the Team' className='text-white' />


//                     <div className='grid sm:grid-cols-2 lg:grid-cols-4 mt-[37px]'>
//                         {
//                             sProgramTeamArr?.map((item, i) => (
//                                 <div className='text-center text-white mb-[30px] lg:mb-0' key={i}>
//                                     <div>
//                                         <Image
//                                             src={item?.img}
//                                             alt='team'
//                                         />
//                                     </div>

//                                     <div>
//                                         <h4 className='text-[18px] font-semibold'>{item?.title}</h4>
//                                         <span className='text-[16px]'>{item?.designation}</span>
//                                     </div>
//                                 </div>
//                             ))
//                         }
//                     </div>
//                 </div>
//             </div>


//             <div className='text-center'>
//                 <button className='text-lightdark underline'>View all the members of the Team</button>
//             </div>
//         </div>
//     );
// };

// export default ProgramTeam;