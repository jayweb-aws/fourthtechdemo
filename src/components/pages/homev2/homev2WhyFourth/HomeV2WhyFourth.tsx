import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from '../../../common/SectionTitle/SectionTitle';
import ButtonV2 from '../../../common/ButtonV2/ButtonV2';
import pandaImg from '../../../../assets/homev2/panda-hifi.png';
import whyFourthImg from '../../../../assets/homev2/why-fourth.png';
import { motion } from 'framer-motion'
import { leftToRightInit, leftToRightAnimation, bottomToTopInit, bottomToTopAnimation } from '../../../../utils/animation';
import roundImg from '../../../../assets/homev2/roundImg.png';

const HomeV2WhyFourth = () => {
    return (
        <>

      <div className="relative z-10 mx-5 md:p-[0_0px_150px_0px] p-[0_0px_80px_0px] my-14 md:my-0">
        <div className="bg-[#FF4D4F] rounded-3xl p-10 md:p-32 flex flex-col md:flex-row items-center justify-between shadow-2xl transform -mb-16 w-full mx-auto md:h-[412px] gap-5">
            <div className="relative">
            <h2 className="text-white font-poppins text-[36px] md:text-[36px] font-semibold leading-[52px] md:leading-[52px] text-left">
            Simplify Vendor Risk Management <br className="hidden md:block"/> with Automated Solutions
            </h2>
                <div className="absolute -top-5 -left-5 md:-left-10 md:-top-10 w-16 h-16 md:w-24 md:h-24 bg-white opacity-40 rounded-tl-full"></div>
                </div>
                <div className="flex flex-col sm:flex-row items-center w-full md:w-auto mt-11 md:mt-0 gap-4 sm:gap-5">
                    <button className="bg-[#202123] text-white text-[15px] font-poppins font-semibold leading-[24px] text-center px-4 md:px-8 py-4 md:py-4 rounded-full hover:bg-gray-800 w-[260px] h-[54px] md:h-[54px] shadow-lg transition-all duration-300">
                        Find Best Tech Courses
                    </button>
                </div>

            </div>
        </div>
        </>
    );
};

export default HomeV2WhyFourth;