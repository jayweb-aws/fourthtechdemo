import React from 'react';
import ButtonV2 from '../../../common/ButtonV2/ButtonV2';
import Image from 'next/image';
import colorDotImg from '../../../../assets/homev2/color-dot.png';
import whiteDotImg from '../../../../assets/homev2/white-dot.png';
import pandaImg from '../../../../assets/testimonials/panda.png';
import { bannerTextBottomInit, bannerTextBottomAnimation } from '../../../../utils/animation';
import { motion } from 'framer-motion';
import ColorDotBg from '../../homev2/homev2Hero/ColorDotBg';
import { Link } from 'lucide-react';
import testimonials from '../../../../assets/testimonials/testimonials.svg'
import logo1 from '../../../../assets/testimonials/logo-1.svg'
import logo2 from '../../../../assets/testimonials/logo-2.svg'
import logo3 from '../../../../assets/testimonials/logo-3.svg'
import logo4 from '../../../../assets/testimonials/logo-4.svg'
import logo5 from '../../../../assets/testimonials/logo-5.svg'

const TestimonialHero = () => {
    const programs = [
        {
            number: '01',
            title: 'Amazon',
            description: 'SecurityScorecard provides cybersecurity ratings to help organizations manage third-part',
            image: logo1,
            // route: '/bootcamps', // Route for Bootcamps
        },
        {
            number: '02',
            title: 'Amplitude',
            description: 'SecurityScorecard provides cybersecurity ratings to help organizations manage third-part',
            image: logo2,
            // route: '/staffing', // Route for Staffing
        },
        {
            number: '03',
            title: 'AppliancesOnline',
            description: 'SecurityScorecard provides cybersecurity ratings to help organizations manage third-part',
            image: logo3,
            // route: '/mentoring', // Route for Mentoring & Coaching
        },
        {
            number: '04',
            title: 'Atlassian',
            description: 'SecurityScorecard provides cybersecurity ratings to help organizations manage third-part',
            image: logo4,
            // route: '/guidance-support', // Route for Guidance & Support
        },
        {
            number: '05',
            title: 'Inter',
            description: 'SecurityScorecard provides cybersecurity ratings to help organizations manage third-part',
            image: logo5,
            // route: '/interview-preparation', // Route for Interview Preparation
        },
        {
            number: '06',
            title: '',
            description: 'View all 36 partners',
            // image: logo5,
            // route: '/profile-optimization', // Route for Profile Optimization
        },
    ];
    return (

        <div className="container relative z-10 px-4 sm:px-6 md:px-7 lg:px-8 xl:px-9 py-10 sm:py-12 md:py-14">
            <div className="flex flex-col lg:flex-row items-start gap-14 md:gap-24 mb-10 md:mb-20 justify-between">
                {/* Text Content */}
                <motion.div
                    className="max-w-2xl text-left md:text-left mx-0"
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                >
                    <h2 className="text-[36px] lg:text-[58px] font-semibold leading-[46.98px]  md:leading-[75.69px]  text-[#40424B] font-poppins">
                        Customer success
                        <br />
                        is our <span className="bg-[#FF4D4F] text-white px-2 mx-1 inline-block">Success</span>
                    </h2>
                    <p className="text-[16px] leading-[26px] text-[#6F6F6F] my-8 font-poppins max-w-3xl mx-0 font-medium md:w-[544px]">
                        We are career growth platform focused on providing equal access to educational resources and mentors for empower your future with cutting-edge education Tech Courses across the world.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-start md:justify-start items-start md:items-start">
                        <button
                            className="font-poppins font-semibold py-3 px-8 sm:px-8 transition-all duration-300 flex items-center justify-center gap-3 bg-[#FF4D4F] text-white rounded-full hover:bg-[#e04345] w-auto  text-base"
                        >
                            Find Best Tech Courses
                        </button>
                    </div>
                </motion.div>

                {/* Image Section */}
                <div className="w-full lg:w-auto flex justify-center md:justify-end">
                    <Image
                        src={testimonials}
                        width={494}
                        height={465}
                        alt="testimonials"
                        className="w-[335px] !important h-[315px] !important lg:w-auto lg:h-auto lg:max-w-[500px] object-contain"
                        priority
                    />
                </div>
            </div>

            {/* Section: Programs - Fourth IT Academy */}
            <div className="pt-10 sm:mt-12 md:mt-14 ">
                <p className="mb-6 text-[#40424B] font-poppins text-[14px] font-semibold leading-[20px] uppercase">
                    Opportunities
                </p>
                <h3 className=" text-[#40424B] font-poppins text-[36px] font-semibold leading-[52px] max-w-[500px]">
                    Potential Companies to Work For
                </h3>
                <p className="text-[16px] mt-4 mb-16 font-poppins mx-0 text-[#6F6F6F] font-poppins text-base font-normal leading-[24px] max-w-[500px]">
                    Explore companies aligned with your goals and values, offering growth and career potential.
                </p>
            </div>

            {/* New Section: Program Cards */}
            <div className="mt-10 sm:mt-12 md:mt-14">
                <div className="flex justify-start lg:justify-end">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-y-[64px] gap-y-[34px] gap-x-[32px] w-full lg:w-[75%]">
                        {programs.map((program, index) => {
                            const isLastCard = index === programs.length - 1 && programs.length >= 6;

                            return (
                                <div
                                    key={index}
                                    className="flex flex-col items-start pl-4 bg-white border-b border-[#DCE2E5] shadow-sm cursor-pointer hover:shadow-md transition-shadow h-[191px]"
                                    onClick={() => {
                                        if (isLastCard) {
                                            console.log("Redirect to all companies or open modal");
                                        }
                                    }}
                                >
                                    {/* Image with Number */}
                                    <div className="w-full flex justify-start">
                                        {program.image ? (
                                            <Image
                                                src={program.image}
                                                alt={`${program.title} Illustration`}
                                                className="w-auto h-[32px] object-cover rounded-t-lg"
                                            />
                                        ) : (
                                            ""
                                        )}
                                    </div>

                                    <div className="flex flex-col flex-grow justify-end pb-3 h-full">
                                        <p
                                            className={`pr-4 ${isLastCard
                                                    ? 'text-[#40424B] font-poppins text-[20px] not-italic font-medium leading-none'
                                                    : 'text-[14px] leading-[18px] text-[#40424B] font-poppins'
                                                }`}
                                        >
                                            {isLastCard ? 'View all 36 partners' : program.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TestimonialHero;