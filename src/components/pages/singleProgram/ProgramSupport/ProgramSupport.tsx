import React, { useState } from 'react';
import Image from 'next/image';
import { sProgramSupportArr } from '../../../../constant/constant';

const faqData = [
    {
        question: "When Will I Have Access To The Lectures And Assignments?",
        answer: `Access to lectures and assignments depends on your type of enrollment. If you take a course in audit mode, you will be able to see most course materials for free. 
      To access graded assignments and to earn a Certificate, you will need to purchase the Certificate experience, during or after your audit. If you don't see the audit option:`,
        points: [
            "The course may not offer an audit option. You can try a Free Trial instead, or apply for Financial Aid.",
            "The course may offer 'Full Course, No Certificate' instead. This option lets you see all course materials, submit required assessments, and get a final grade. This also means that you will not be able to purchase a Certificate experience.",
        ],
    },
    {
        question: "What Will I Get If I Subscribe To This Specialization?",
        answer: "You will get access to all course materials and additional resources.",
    },
    {
        question: "What Is The Refund Policy?",
        answer: "You can request a refund within 14 days of purchase.",
    },
];

const ProgramSupport = () => {

    const [expanded, setExpanded] = useState<number | null>(0);

    const toggleSection = (index: any) => {
        setExpanded(expanded === index ? null : index);
    };
    return (
        <div className='container '>
            <div className="mx-5 md:mx-10">
                <div className="lg:flex gap-x-[20px] mt-24">
                    <p className='text-[#232323] font-poppins text-[23px] font-medium leading-[23px] capitalize'>Frequently asked questions</p>
                </div>
                <div className=" max-w- mt-8 flex flex-col md:flex-row gap-6">
                    {/* Course Curriculum */}
                    <div className="bg-white text-black rounded-3xl overflow-hidden border border-[#F0EBEE] w-full md:w-2/3">
                        {faqData.map((faq, index) => (
                            <div key={index} className="border-b border-[#F0EBEE]">
                                <div
                                    className={`flex justify-between items-center p-6 cursor-pointer text-[#232323] font-poppins text-[18px] font-medium leading-[16px] capitalize ${expanded === index ? "bg-[rgba(240,65,82,0.10)]" : "bg-white"
                                        }`}
                                    onClick={() => toggleSection(index)}
                                >
                                    <div className="flex items-center gap-4">
                                        {expanded === index ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 min-w-[24px] min-h-[24px]" viewBox="0 0 24 24" fill="none">
                                                <path d="M6 15L12 9L18 15" stroke="#40424B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 min-w-[24px] min-h-[24px]" viewBox="0 0 24 24" fill="none">
                                                <path d="M6 9L12 15L18 9" stroke="#40424B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        )}
                                        <span className="font-medium leading-normal">{faq.question}</span>
                                    </div>
                                </div>
                                {expanded === index && (
                                    <div className="p-6  text-[#6F6F6F] font-poppins text-[16px] font-normal leading-[22px]">
                                        <p>{faq.answer}</p>
                                        {faq.points && (
                                            <ul className="mt-4 space-y-2 list-disc list-inside pl-4 ">
                                                {faq.points.map((point, idx) => (
                                                    <li key={idx} className="text-[#6F6F6F] font-poppins text-[16px] font-normal leading-[22px]">
                                                        {point}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    {/* Instructor Card */}
                    <div className=" text-[#232323] p-6 rounded-3xl border border-[#F0EBEE] w-full md:w-1/3  h-[150px] ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#40424B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9.08984 9.00057C9.32495 8.33224 9.789 7.76868 10.3998 7.4097C11.0106 7.05073 11.7287 6.91951 12.427 7.03928C13.1253 7.15906 13.7587 7.52209 14.2149 8.0641C14.6712 8.6061 14.9209 9.29209 14.9198 10.0006C14.9198 12.0006 11.9198 13.0006 11.9198 13.0006" stroke="#40424B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 17H12.01" stroke="#40424B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <h3 className="text-[#232323] font-poppins text-[23px] font-medium leading-[23px] capitalize mt-4">More questions</h3>
                        <p className='text-[#F04152] font-poppins text-[14px] font-medium leading-[21px] underline mt-3'>Visit the learner help center</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgramSupport;

// import React from 'react';
// import Image from 'next/image';
// import { sProgramSupportArr } from '../../../../constant/constant';

// const ProgramSupport = () => {
//     return (
//         <div>
//             <div className="container px-[30px] 2xl:px-0 lg:flex gap-x-[20px]">
//                 <div className='max-w-[400px] mb-[30px] lg:mb-0'>
//                     <h3 className='text-[20px] sm:text-[24px] lg:text-[34px] xl:text-[38px] leading-[40px] font-semibold text-dark mb-[20px] lg:mb-[40px]'>Support When You Need It</h3>
//                     <p className='mb-[20px] lg:mb-[40px]'>Our dedicated team of instructors and mentors is committed to your success. Whether you're grappling with a challenging concept or need clarification on a topic, we're here to guide you every step of the way.</p>

//                     <button className='p-[15px] sm:p-[15px_20px] lg:p-[20px_42px] text-[14px] lg:text-[16px] text-white font-medium bg-secondary'>
//                         Apply Today
//                     </button>
//                 </div>

//                 <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-[15px] w-full'>
//                     {
//                         sProgramSupportArr?.map((item, i) => (
//                             <div className='bg-[#3B3A3A] rounded-[10px] mb-[40px] text-white p-[30px_17px] text-center' key={i}>
//                                 <div className='bg-[#B9E0FE] w-[95px] h-[95px] rounded-full mx-auto mb-[20px]'>
//                                     <Image
//                                         src={item?.img}
//                                         alt='support'
//                                     />
//                                 </div>

//                                 <div>
//                                     <h4 className='text-[20px] font-semibold text-grey-100 mb-[10px]'>{item?.title}</h4>
//                                     <p className='text-[14px]'>{item?.description}</p>
//                                 </div>
//                             </div>
//                         ))
//                     }
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProgramSupport;