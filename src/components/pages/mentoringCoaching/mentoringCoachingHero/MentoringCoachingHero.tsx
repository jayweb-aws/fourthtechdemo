import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'
import Link from 'next/link';
import staffings from '../../../../assets/homev2/staffings.png'
import staffing1 from '../../../../assets/homev2/staffing1.svg'
import staffing2 from '../../../../assets/homev2/staffing2.svg'
import staffing3 from '../../../../assets/homev2/staffing3.svg'
import staffing4 from '../../../../assets/homev2/staffing4.svg'
import staffing5 from '../../../../assets/homev2/staffing5.svg'
import staffing6 from '../../../../assets/homev2/staffing6.svg'
import RightTik from '../../../../assets/homev2/RightTik.svg'
import ArrowLeft from '../../../../assets/homev2/ArrowLeft.svg'
import aerrow from '../../../../assets/homev2/aerrow.png'
import contactHeroStyle from "../../../../styles/ContactStyle.module.css"

const MentoringCoachingHero = ({ handleShowForm }) => {
  const cards = [
          {
              image: staffing1,
              title: "Online Info Session",
              items: ["120 Interview Question", "120 Interview Question", "120 Interview Question"],
              linkText: "Join the Open House",
              linkHref: "/open-house",
          },
          {
              image: staffing2,
              title: "Admissions Q&A",
              items: ["120 Interview Question", "120 Interview Question", "120 Interview Question"],
              linkText: "Schedule a Call",
              linkHref: "/schedule-call",
          },
          {
              image: staffing3,
              title: "Free Introduction Video",
              items: ["120 Interview Question", "120 Interview Question", "120 Interview Question"],
              linkText: "Schedule",
              linkHref: "/schedule",
          },
          {
              image: staffing4,
              title: "Guidance & Support",
              items: ["120 Interview Question", "120 Interview Question", "120 Interview Question"],
              linkText: "Join the Open House",
              linkHref: "/career-guidance",
          },
          {
              image: staffing5,
              title: "Interview Preparation",
              items: ["120 Interview Question", "120 Interview Question", "120 Interview Question"],
              linkText: "Schedule a Call",
              linkHref: "/mock-interviews",
          },
          {
              image: staffing6,
              title: "Profile Optimization",
              items: ["120 Interview Question", "120 Interview Question", "120 Interview Question"],
              linkText: "Schedule",
              linkHref: "/resume-review",
          },
      ];
  return (
    <div className="container relative z-10 px-4 sm:px-6 md:px-7 lg:px-8 xl:px-9 py-10 sm:py-12 md:py-14 ">

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
                    Mentoring
                        <br />
                        & Coaching
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
                        src={staffings}
                        width={617}
                        height={361}
                        alt="Consultation Illustration"
                        className="w-[335px] !important h-[315px] !important lg:w-auto lg:h-auto lg:max-w-[500px] object-contain"
                        priority
                    />
                </div>
            </div>
            <div className="mt-16">
                <h3 className="text-[28px] md:text-[36px] font-semibold text-black font-poppins text-center">
                    Have Questions?
                </h3>
                <p className="text-[16px] text-gray-600 mt-2 font-poppins text-center">
                    Lorem ipsum dolor sit amet
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 justify-items-center">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="w-[335px] h-[415px] lg:w-[341px] lg:h-[415px] bg-white p-0 md:p-6 text-center"
                        >
                            <div className="relative">
                                <Image
                                    src={card.image}
                                    width={341}
                                    height={181}
                                    alt={`${card.title} Illustration`}
                                    className="w-[335px] h-[181px] lg:w-[341px] lg:h-[181px] mx-auto object-contain"
                                />
                            </div>
                            <h4 className="text-[20px] font-semibold text-black font-poppins mt-4">
                                {card.title}
                            </h4>
                            <ul className="mt-4 space-y-2">
                                {card.items.map((item, itemIndex) => (
                                    <li
                                        key={itemIndex}
                                        className="flex items-center justify-center text-[16px] text-gray-600 font-poppins gap-2"
                                    >
                                        <span className="text-green-500 mr-2 flex">
                                        <Image
                                            src={RightTik}
                                            width={21}
                                            height={21}
                                            alt={`${card.title} Illustration`}
                                            className="w-[335px] h-[181px] lg:w-[341px] lg:h-[181px] mx-auto object-contain"
                                        />
                                        </span> {item}
                                    </li>
                                ))}
                            </ul>
                            {/* <Link href={card.linkHref} passHref> */}
                                <p className="text-[#FF4D4F] font-poppins font-semibold mt-4 cursor-pointer hover:underline flex justify-center gap-1   ">
                                    {card.linkText}<span className='flex'>
                                        <Image
                                            src={aerrow}
                                            width={20}
                                            height={20}
                                            alt={`${card.title} Illustration`}
                                            className="w-[335px] h-[181px] lg:w-[341px] lg:h-[181px] mx-auto object-contain"
                                        />
                                        </span>
                                </p>
                            {/* </Link> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
  );
};

export default MentoringCoachingHero;
