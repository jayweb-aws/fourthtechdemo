import Image from 'next/image';
import { motion } from 'framer-motion'
import Link from 'next/link';
import consultation1 from '../../../../assets/homev2/consultation1.svg'
import profile1 from '../../../../assets/homev2/profile1.svg'
import profile2 from '../../../../assets/homev2/profile2.svg'
import profile3 from '../../../../assets/homev2/profile3.svg'
import profile4 from '../../../../assets/homev2/profile4.svg'
import profile5 from '../../../../assets/homev2/profile5.svg'
import profile6 from '../../../../assets/homev2/profile6.svg'
import aerrow from '../../../../assets/homev2/aerrow.png'
import ArrowLeft from '../../../../assets/homev2/ArrowLeft.svg'
import ProfileSection from '../../../../assets/homev2/ProfileSection.png'

const ProfessionalProfileOptHero = ({ handleShowForm }) => {
      const programs = [
          {
              number: '01',
              title: 'Guy Hawkins',
              description: 'A comprehensive guide on essential cybersecurity practices to safeguard digital assets.',
              image: profile1,
              route: '/bootcamps', // Route for Bootcamps
          },
          {
              number: '02',
              title: 'Guy Hawkins',
              description: 'A comprehensive guide on essential cybersecurity practices to safeguard digital assets.',
              image: profile2,
              route: '/staffing', // Route for Staffing
          },
          {
              number: '03',
              title: 'Guy Hawkins',
              description: 'A comprehensive guide on essential cybersecurity practices to safeguard digital assets.',
              image: profile3,
              route: '/mentoring', // Route for Mentoring & Coaching
          },
          {
              number: '04',
              title: 'Guy Hawkins',
              description: 'A comprehensive guide on essential cybersecurity practices to safeguard digital assets.',
              image: profile4,
              route: '/guidance-support', // Route for Guidance & Support
          },
          {
              number: '05',
              title: 'Guy Hawkins',
              description: 'A comprehensive guide on essential cybersecurity practices to safeguard digital assets.',
              image: profile5,
              route: '/interview-preparation', // Route for Interview Preparation
          },
          {
              number: '06',
              title: 'Guy Hawkins',
              description: 'A comprehensive guide on essential cybersecurity practices to safeguard digital assets.',
              image: profile6,
              route: '/professional-profile-optimization', // Route for Profile Optimization
          },
      ];
      
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
                    Profile Optimization
                        <br />
                        & Job Application
                    </h2>
                    <p className="text-[16px] leading-relaxed sm:leading-8 md:leading-[34.1px] text-gray-600 mt-5 sm:mt-6 md:mt-9 mb-5 sm:mb-6 md:mb-10 font-poppins max-w-3xl mx-0">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.                    </p>
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
                        src={ProfileSection}
                        width={494}
                        height={465}
                        alt="Consultation Illustration"
                        className="w-[335px] !important h-[315px] !important lg:w-auto lg:h-auto lg:max-w-[500px] object-contain"
                        priority
                    />
                </div>
            </div>

            {/* Section: Programs - Fourth IT Academy */}
            <div className="mt-10 sm:mt-12 md:mt-14">
                <p className="text-[14px] font-semibold text-gray-600 font-poppins mb-2">
                Team
                </p>
                <h3 className="text-[36px] lg:text-[52px] font-semibold leading-tight sm:leading-snug md:leading-[55px] xl W:leading-[60px] text-black font-poppins">
                Our Leader Members
                </h3>
                <p className="text-[16px] leading-relaxed sm:leading-8 md:leading-[34.1px] text-gray-600 mt-5 sm:mt-6 md:mt-9 mb-5 sm:mb-6 md:mb-10 font-poppins max-w-3xl mx-0">
                Explore companies aligned with your goals and values, offering growth and career potential.                </p>
            </div>

            {/* New Section: Program Cards */}
            <div className="mt-10 sm:mt-12 md:mt-14">
                <div className="flex justify-start lg:justify-end">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full lg:w-[75%]">
                        {programs.map((program, index) => {
                        // console.log("🚀 ~ {programs.map ~ program:", program.route)

                            return (
                            <div className="flex flex-col items-start bg-white rounded-lg cursor-pointer transition-shadow">
                                    {/* Image with Number */}
                                    <div className="w-full flex justify-center ">
                                        <Image
                                            src={program.image}
                                            width={335}
                                            height={234}
                                            alt={`${program.title} Illustration`}
                                            className="w-[335px] h-[306px] lg:w-[256px] lg:h-[234px] object-contain rounded-t-lg"
                                        />
                                    </div>
                                   
                                    <div className="p-4">
                                        <div className="flex items-center justify-between w-full">
                                            <h4 className="text-[20px] font-semibold text-black font-poppins">
                                                {program.title}
                                            </h4>
                                        </div>
                                        <p className="text-[14px] leading-relaxed text-gray-600 mt-2 font-poppins">
                                            {program.description}
                                        </p>
                                    </div>
                                </div>
                         )
                        })}
                    </div>
                </div>
            </div>
        </div>
  );
};

export default ProfessionalProfileOptHero;
