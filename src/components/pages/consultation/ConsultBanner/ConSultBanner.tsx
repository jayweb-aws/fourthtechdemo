import Image from 'next/image';
import ColorDotBg from '../../homev2/homev2Hero/ColorDotBg';
import whiteDotImg from '../../../../assets/white-dot.png';
import pandaImg from '../../../../assets/consultation/panda.png';
import { motion } from 'framer-motion'
import Link from 'next/link';
import consultation1 from '../../../../assets/homev2/consultation1.svg'
import imgCompo1 from '../../../../assets/homev2/imgCompo1.svg'
import imgCompo2 from '../../../../assets/homev2/imgCompo2.svg'
import imgCompo3 from '../../../../assets/homev2/imgCompo3.svg'
import imgCompo4 from '../../../../assets/homev2/imgCompo4.svg'
import imgCompo5 from '../../../../assets/homev2/imgCompo5.svg'
import imgCompo6 from '../../../../assets/homev2/imgCompo6.svg'
import aerrow from '../../../../assets/homev2/aerrow.png'
import { bannerTextBottomInit, bannerTextBottomAnimation, rightToLeftInit, rightToLeftAnimation } from '../../../../utils/animation';


const ConSultBanner = () => {
    const programs = [
        {
            number: '01',
            title: 'Bootcamps',
            description: 'Our curriculum is created and taught by Professionals with years of real-world industry experience. Our curriculum is a unique spin on what has been t',
            image: imgCompo1,
            route: '/bootcamps', // Route for Bootcamps
        },
        {
            number: '02',
            title: 'Staffing',
            description: 'Are you skilled in a specific field in Information Technology and interested in teaching and impacting lives with your professional',
            image: imgCompo2,
            route: '/staffing', // Route for Staffing
        },
        {
            number: '03',
            title: 'Mentoring & Coaching',
            description: 'If you have a passion for mentoring, are you looking for a mentor, are you searching for a unique career path, or want to give something back to the c',
            image: imgCompo3,
            // route: '/mentoring', // Route for Mentoring & Coaching
            route: '/mentoring-and-coaching', // Route for Mentoring & Coaching
        },
        {
            number: '04',
            title: 'Guidance & Support',
            description: 'Unlock your teams potential with our specialized IT guidance and unwavering support, fostering growth and enhancing skillsets to fa',
            image: imgCompo4,
            // route: '/guidance-support', // Route for Guidance & Support
            route: '/mentoring-and-coaching',    //open this because in live open this 
        },
        {
            number: '05',
            title: 'Interview Preparation',
            description: 'Equip yourself with Fourth ITs expert strategies and insights, ensuring you stand out in your interviews and make lasting first impressions in the c',
            image: imgCompo5,
            route: '/interview-preparation', // Route for Interview Preparation
        },
        {
            number: '06',
            title: 'Profile Optimization',
            description: 'Land your dream job by optimizing your professional Profile. Studies shows that you are 40 times more likely to get found and receive opportunities wh',
            image: imgCompo6,
            route: '/professional-profile-optimization', // Route for Profile Optimization
        },
    ];
    

    return (
        <div className="container relative z-10 px-4 sm:px-6 md:px-7 lg:px-8 xl:px-9 py-10 sm:py-12 md:py-14">
            <div className="flex flex-col lg:flex-row items-start gap-8">
                {/* Text Content */}
                <motion.div 
                    className="max-w-2xl text-left md:text-left mx-0"
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                >
                    <h2 className="text-[36px] lg:text-[58px] font-semibold leading-tight sm:leading-snug md:leading-[55px] xl:leading-[70px] text-black font-poppins">
                        Empower Your
                        <br />
                        Skills for <span className="bg-[#FF4D4F] text-white px-2 mx-1 inline-block">Success</span>
                    </h2>
                    <p className="text-[16px] leading-relaxed sm:leading-8 md:leading-[34.1px] text-gray-600 mt-5 sm:mt-6 md:mt-9 mb-5 sm:mb-6 md:mb-10 font-poppins max-w-3xl mx-0">
                        Leveraging IT industry expertise, we offer tailored IT consultations, ensuring business challenges harness technological advancements efficiently.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-start md:justify-start items-start md:items-start">
                        {/* <Link href="/registration" passHref> */}
                            <button 
                                className="font-poppins font-semibold py-3 px-6 sm:px-8 transition-all duration-300 flex items-center justify-center gap-3 bg-[#FF4D4F] text-white rounded-full hover:bg-[#e04345] w-auto text-sm sm:text-base"
                            >
                                Find Best Tech Courses
                            </button>
                        {/* </Link> */}
                    </div>
                </motion.div>

                {/* Image Section */}
                <div className="w-full lg:w-auto flex justify-center lg:justify-end">
                    <Image
                        src={consultation1}
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
                    PROGRAMS
                </p>
                <h3 className="text-[36px] lg:text-[52px] font-semibold leading-tight sm:leading-snug md:leading-[55px] xl W:leading-[60px] text-black font-poppins">
                    Fourth IT Academy
                </h3>
                <p className="text-[16px] leading-relaxed sm:leading-8 md:leading-[34.1px] text-gray-600 mt-5 sm:mt-6 md:mt-9 mb-5 sm:mb-6 md:mb-10 font-poppins max-w-3xl mx-0">
                    Your pathway to mastering technology. Fourth IT Academy offers comprehensive courses designed to equip you with in-demand skills, ensuring readiness for today’s tech-driven world.
                </p>
            </div>

            {/* New Section: Program Cards */}
            <div className="mt-10 sm:mt-12 md:mt-14">
                <div className="flex justify-start lg:justify-end">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full lg:w-[75%]">
                        {programs.map((program, index) => {
                        

                            return (

                           
                            
                            <Link key={index} href={program.route}>
                                <div className="flex flex-col items-start bg-white rounded-lg cursor-pointer transition-shadow">
                                    {/* Image with Number */}
                                    <div className="w-full flex justify-center">
                                        <Image
                                            src={program.image}
                                            width={256}
                                            height={234}
                                            alt={`${program.title} Illustration`}
                                            className="w-[335px] h-[306px] lg:w-[256px] lg:h-[234px] object-cover rounded-t-lg"
                                        />
                                    </div>
                                   
                                    <div className="p-4">
                                        <div className="flex items-center justify-between w-full">
                                            <h4 className="text-[20px] font-semibold text-black font-poppins">
                                                {program.title}
                                            </h4>
                                            <Image
                                                src={aerrow}
                                                width={24}
                                                height={24}
                                                alt="Arrow Icon"
                                                className="w-6 h-6"
                                            />
                                        </div>
                                        <p className="text-[14px] leading-relaxed text-gray-600 mt-2 font-poppins">
                                            {program.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                         )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConSultBanner;