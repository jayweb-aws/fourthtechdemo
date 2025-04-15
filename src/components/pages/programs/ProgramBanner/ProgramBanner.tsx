import React from 'react';
import Image from 'next/image';
import whiteDotImg from '../../../../assets/white-dot.png';
import pandaImg from '../../../../assets/programs/panda.png';
import { motion } from 'framer-motion';
import ColorDotBg from '../../homev2/homev2Hero/ColorDotBg';
import { bannerTextBottomInit, bannerTextBottomAnimation } from '../../../../utils/animation';
import programsHeader from '../../../../assets/programs/programsHeader.svg'

const ProgramBanner = () => {
    return (
        <div className="container relative z-10 px-4 sm:px-6 md:px-7 lg:px-8 xl:px-9 mt-16">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
                {/* Text Content */}
                <motion.div
                    className="max-w-2xl text-left md:text-left flex-grow"
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                >
                    <h2 className="text-[36px] md:text-[58px] font-semibold leading-tight  md:leading-[75.69px] text-[#40424B] font-poppins">
                        Innovative IT
                        <br />
                        Programs <span className="bg-[#FF4D4F] text-white px-2 mx-1 inline-block">for You</span>
                    </h2>
                    <p className="text-[16px] leading-[26px] text-[#6F6F6F] font-medium mt-5 md:mt-8 mb-5 md:mb-14 font-poppins max-w-lg">
                        At Fourth IT, our curated programs blend technological expertise with hands-on learning, ensuring you are equipped for tomorrow is IT challenges.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            className="font-poppins font-semibold py-3 px-8 transition-all duration-300 flex items-center justify-center gap-3 bg-[#FF4D4F] text-white rounded-full hover:bg-[#e04345] min-w-[190px] text-sm"
                        >
                            Button
                        </button>
                    </div>
                </motion.div>

                {/* Image Section */}
                <div className="w-full lg:w-auto flex justify-center lg:justify-end self-end">
                    <Image
                        src={programsHeader}
                        width={494}
                        height={465}
                        alt="Consultation Illustration"
                        className="w-[335px] h-[315px] lg:w-auto lg:h-auto lg:max-w-[500px] object-contain"
                        priority
                    />
                </div>
            </div>
        </div>

    );
};

export default ProgramBanner;

//  {/* <div className="container">

//                 <div className='pt-[100px] xl:pt-[135px] pb-[80px] md:pb-[100px] xl:pb-[150px] text-center font-poppins relative'>
//                     <motion.h2
//                         initial={bannerTextBottomInit}
//                         whileInView={bannerTextBottomAnimation}
//                         className='text-[22px] md:text-[32px] lg:text-[46px] leading-[32px] md:leading-[48px] lg:leading-[60px] font-semibold text-white mb-[25px]'>Programs</motion.h2>
//                     <motion.p
//                         initial={bannerTextBottomInit}
//                         whileInView={bannerTextBottomAnimation}
//                         className='max-w-[788px] mx-auto text-[18px] md:text-[20px] lg:text-[24px] leading-[34.1px] text-grey-100'>At Fourth IT, our curated programs blend technological expertise with hands-on learning, ensuring you're equipped for tomorrow's IT challenges.</motion.p>

//                     <motion.div
//                         initial={{ scale: 0.8 }}
//                         animate={{
//                             scale: [0.8, 1, 0.8],
//                         }}
//                         transition={{
//                             type: "tween",
//                             repeat: Infinity,
//                             repeatType: "mirror",
//                             duration: 4,
//                             ease: "easeInOut",
//                         }}
//                         className='absolute right-0 top-[-20px] xl:top-[80px] w-[120px] md:w-[200px] xl:w-[260px]'>
//                         <Image
//                             src={pandaImg}
//                             alt='panda'
//                         />
//                     </motion.div>
//                 </div>

//                 <ColorDotBg />
//                 <div className='absolute left-[10%] top-[50%] -translate-y-1/2 z-[-1]'>
//                     <Image
//                         src={whiteDotImg}
//                         alt='white dot'
//                     />
//                 </div>

//             </div> */}