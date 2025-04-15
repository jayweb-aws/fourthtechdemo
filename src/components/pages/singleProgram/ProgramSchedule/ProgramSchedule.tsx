import React from 'react';
import Image from 'next/image';
import Title from '../../../common/Title/Title';
import { sProgramScheduleLeftArr, sProgramScheduleRightArr } from '../../../../constant/constant';
import moneyImg from "../../../../assets/homev2/blog/Vector.png";
import clockImg from "../../../../assets/homev2/blog/clock.png";
import frame from "../../../../assets/homev2/blog/frame.svg";
import layerImg from "../../../../assets/homev2/blog/layer.png";
import Link from 'next/link';
import card1 from "../../../../assets/programs/card-1.svg";
import card2 from "../../../../assets/programs/card-2.svg";
import card3 from "../../../../assets/programs/card-3.svg";

const bootcamps = [
    {
        id: 1,
        title: "What Product Managers Do?",
        image: card1, 
        duration: "52h 8m",
        category: "Strategic Product Manager",
        price: "$3000",
        modules: 9,
        time: "1 h 20m",
        level: "Beginner",
    },
    {
        id: 2,
        title: "CyberSec ‘24",
        image: card2,
        duration: "8h 15m",
        category: "Bug vs Feature",
        price: "$3000",
        modules: 11,
        time: "1 h 20m",
        level: "Beginner",
    },
    {
        id: 3,
        title: "CyberSec Spring ‘24",
        image: card3,
        duration: "64h 8m",
        category: "How to Write Release Notes",
        price: "$3000",
        modules: 12,
        time: "1 h 20m",
        level: "Beginner",
    },
];


const ProgramSchedule = () => {
    return (
        <div className='container pb-36 '>
            <div className='mx-5 md:mx-10'>
                <div className='pb-8 mt-24'>
                    <p className='text-[#232323] font-poppins text-[23px] font-medium leading-[23px] capitalize'>Recommended for you</p>
                </div>

                <div className="gap-6 justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10">
                    {bootcamps.map((bootcamp) => (
                        <div
                            key={bootcamp.id}
                            className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-300 p-2"
                        >
                            {/* Image Section */}
                            <div className=" relative max-w-full rounded-[12px]">
                                <Image
                                    src={bootcamp.image}
                                    alt={bootcamp.title}
                                    layout="responsive"
                                    className="rounded-xl"
                                    width={370}
                                    height={180}
                                />
                                <span className="absolute top-3 right-3 bg-opacity-5 bg-black text-black text-xs px-2 py-1 rounded-md">
                                    {bootcamp.duration}
                                </span>
                            </div>

                            {/* Content Section */}
                            <div className="pt-4 px-2 pb-2 font-poppins">
                                <h4 className="text-[20px] font-semibold text-lightdark capitalize">
                                    {bootcamp.title}
                                </h4>
                                <div className="grid grid-cols-2 gap-3 mb-6 mt-3 overflow-hidden text-[#40424B] text-ellipsis whitespace-nowrap font-poppins text-[14px] font-medium leading-[14px]">
                                    <div className="flex items-center gap-2  ">
                                        <Image src={moneyImg} width={20} height={20} alt='money image' />
                                        <span>{bootcamp.price}</span>
                                    </div>
                                    <div className="flex items-center gap-x-2">
                                        <Image src={layerImg} width={20} height={20} alt="layerimg" />
                                        <span>{bootcamp.modules} modules</span>
                                    </div>
                                    <div className="flex items-center gap-x-2">
                                        <Image src={clockImg} width={20} height={20} alt="clock" />
                                        <span>{bootcamp.time}</span>
                                    </div>
                                    <div className="flex items-center gap-x-2 capitalize">
                                        <Image src={frame} width={20} height={20} alt="frame" />
                                        <span>{bootcamp.level}</span>
                                    </div>
                                </div>

                                <Link href="/single-program">
                                    <a className="text-[#D53535] text-center font-poppins text-[16px] font-medium leading-[16px]">
                                        View Bootcamp
                                    </a>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProgramSchedule;

// import React from 'react';
// import Image from 'next/image';
// import Title from '../../../common/Title/Title';
// import { sProgramScheduleLeftArr, sProgramScheduleRightArr } from '../../../../constant/constant';

// const ProgramSchedule = () => {
//     return (
//         <div className='pb-[60px] md:pb-[80px] lg:pb-[122px]'>
//             <Title title="An Example Day’s Schedule in Part-Time Program" />


//             <div className='mt-[60px] container px-[30px] 2xl:px-0 flex flex-col md:flex-row justify-center gap-x-[50px] lg:gap-x-[100px]'>
//                 <div className='relative before:absolute before:left-[60px] before:top-[50px] before:w-[10px] before:h-[280px] before:bg-secondary mb-[30px] md:mb-0'>
//                     {
//                         sProgramScheduleLeftArr?.map((item, i) => (
//                             <div key={i} className='flex items-center gap-x-[25px] mb-[40px] last:mb-0'>
//                                 <div className='relative before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-[111px] before:h-[111px] before:bg-secondary before:rounded-full'>
//                                     <Image
//                                         src={item?.img}
//                                         alt='schedule'
//                                     />
//                                 </div>
//                                 <div className='max-w-[160px]'>
//                                     <h4 className='text-[16px] md:text-[18px] font-semibold'>{item?.title}</h4>
//                                     <p className='text-[14px] md:text-[16px]'>{item?.body}</p>
//                                 </div>
//                             </div>
//                         ))
//                     }
//                 </div>

//                 <div>
//                     {
//                         sProgramScheduleRightArr?.map((item, i) => (
//                             <div key={i} className='max-w-[360px] mb-[24px] last:mb-0'>
//                                 <h4 className='text-[16px] md:text-[18px] font-semibold mb-[5px]'>{item?.title}</h4>
//                                 <p className='text-[14px] md:text-[16px]'>{item?.body}</p>
//                             </div>
//                         ))
//                     }
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProgramSchedule;