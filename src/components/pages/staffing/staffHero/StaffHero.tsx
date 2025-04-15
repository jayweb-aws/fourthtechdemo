import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'
import Link from 'next/link';
import conversation1 from '../../../../assets/homev2/conversation1.svg'
import conversation2 from '../../../../assets/homev2/conversation2.svg'
import ArrowLeft from '../../../../assets/homev2/ArrowLeft.svg'
import aerrow from '../../../../assets/homev2/aerrow.png'
import saffingtitle from '../../../../assets/homev2/saffingtitle.png'
import contactHeroStyle from "../../../../styles/ContactStyle.module.css"
const StaffHero = ({ handleShowForm }) => {
    return (
        <div className="container relative z-10 px-4 sm:px-6 md:px-7 lg:px-8 xl:px-9 py-10 sm:py-12 md:py-14">

            <div className="absolute top-0 left-4 sm:left-6 md:left-7 lg:left-8 xl:left-9 flex items-center">
                <Link href="/consultation" passHref>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image
                            src={ArrowLeft}
                            width={21}
                            height={21}
                            alt="Back Arrow"
                            className="object-contain"
                        />
                        <span className="text-[#FF4D4F] font-poppins font-semibold text-sm sm:text-base hover:underline">
                            Back
                        </span>
                    </div>
                </Link>
            </div>

            <div className="flex flex-col lg:flex-row items-start gap-8">
                {/* Text Content */}
                <motion.div
                    className="max-w-2xl text-left md:text-left mx-0"
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                >

                    <h2 className="text-[36px] lg:text-[58px] font-semibold leading-tight sm:leading-snug md:leading-[55px] xl:leading-[60px] text-black font-poppins">
                        Staffing
                    </h2>
                    <p className="text-[16px] leading-relaxed sm:leading-8 md:leading-[34.1px] text-gray-600 mt-5 sm:mt-6 md:mt-9 mb-5 sm:mb-6 md:mb-10 font-poppins max-w-3xl mx-0">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-start md:justify-start items-start md:items-start">
                        {/* <Link href="/registration" passHref> */}
                        <button
                            onClick={handleShowForm}
                            className="font-poppins font-semibold py-3 px-6 sm:px-8 transition-all duration-300 flex items-center justify-center gap-3 bg-[#FF4D4F] text-white rounded-full hover:bg-[#e04345] w-52 text-sm sm:text-base"
                        >Book Now
                        </button>
                        {/* </Link> */}
                    </div>
                </motion.div>

                {/* Image Section */}
                <div className="w-full lg:w-auto flex justify-center lg:justify-end">
                    <Image
                        src={saffingtitle}
                        width={617}
                        height={361}
                        alt="Consultation Illustration"
                        className="w-[335px] !important h-[315px] !important lg:w-auto lg:h-auto lg:max-w-[500px] object-contain"
                        priority
                    />
                </div>
            </div>

            <div className='relative z-10 pb-0 md:py-[120px]'>
                <div className="container flex flex-col md:flex-row justify-between gap-3 items-center pt-[50px]">
                    {/* Left Side: Text and Button */}
                    <motion.div
                        className="max-w-2xl text-left md:text-left mx-0"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                    >
                        <h3 className="text-sm text-gray-500 font-semibold mb-2">WHY FOURTH IT</h3>
                        <h2 className="text-[20px] md:text-[30px] xl:text-[40px] 2xl:text-[46px] font-semibold leading-[1.4] text-black font-poppins">
                            Optimizing Cybersecurity <br /> and Risk Management
                        </h2>
                        <p className="text-[16px] md:text-[18px] leading-[30px] text-gray-600 max-w-full md:max-w-[600px] mt-4 mb-6 font-poppins">
                            Fourth IT is your trusted partner for optimizing cybersecurity and risk management strategies, ensuring robust protection and compliance at every stage of your business growth.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-start md:justify-start items-start md:items-start">
                            {/* <Link href="/registration" passHref> */}
                            <button
                                className="font-poppins font-semibold py-3 px-6 sm:px-8 transition-all duration-300 flex items-center justify-center gap-3 bg-[#FF4D4F] text-white rounded-full hover:bg-[#e04345] w-auto text-sm sm:text-base"
                            >Join the Open House
                            </button>
                            {/* </Link> */}
                        </div>
                    </motion.div>

                    {/* Right Side: Image Section */}
                    <div className="relative w-full max-w-[540px]  overflow-hidden">
                        {/* Background Shape */}
                        <div className="absolute top-0 right-0 w-[80%] h-full bg-[#FFB39B] rounded-tl-[200px] rounded-br-[200px] z-0" />
                        {/* Animated Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative z-10 w-full"
                        >
                            <Image
                                width={544}
                                height={461}
                                src={conversation1}
                                alt="Cybersecurity Protection"
                                className="w-full h-auto"
                            />
                        </motion.div>
                    </div>

                </div>
            </div>

            <div className='relative z-10 pb-0 md:pb-[120px]'>
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 pt-[50px]">
                        {/* Left Side - Image Section */}
                        <div className="w-full md:w-1/2 relative">
                            <div className="relative w-full max-w-[540px] mx-auto mt-8">
                                <div className="absolute top-0 right-0 w-[80%] h-full bg-[#FFB39B] rounded-tl-[200px] rounded-br-[200px] hidden md:block" />
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="relative z-10 w-full max-w-[544px]"
                                >
                                    <Image
                                        width={544}
                                        height={461}
                                        src={conversation2}
                                        alt="Cybersecurity Protection"
                                        className="w-full h-auto"
                                    />
                                </motion.div>
                            </div>
                        </div>

                        {/* Right Side - Content Section */}
                        <motion.div
                            className="w-full md:w-1/2 md:text-left text-left"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                        >
                            <h3 className="text-sm text-gray-500 font-semibold mb-2">WHY FOURTH IT</h3>
                            <h2 className="text-[20px] md:text-[30px] xl:text-[40px] 2xl:text-[46px] font-semibold leading-[1.4] text-black font-poppins">
                                Optimizing Cybersecurity <br /> and Risk Management
                            </h2>
                            <p className="text-[16px] md:text-[18px] leading-[30px] text-gray-600 mt-4 mb-6 font-poppins">
                                Fourth IT is your trusted partner for optimizing cybersecurity and risk management strategies, ensuring robust protection and compliance at every stage of your business growth.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-start md:justify-start items-start md:items-start">
                                {/* <Link href="/registration" passHref> */}
                                <button
                                    className="font-poppins font-semibold py-3 px-6 sm:px-8 transition-all duration-300 flex items-center justify-center gap-3 bg-[#FF4D4F] text-white rounded-full hover:bg-[#e04345] w-auto text-sm sm:text-base"
                                >Join the Open House
                                </button>
                                {/* </Link> */}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StaffHero;