import Image from 'next/image';
import SingleTestimonialCard from './SingleTestimonialCard';
import { testimonialReviewArr } from '../../../../constant/constant';
import testImg from '../../../../assets/testimonials/test4.png';
import { leftToRightInit, leftToRightAnimation } from '../../../../utils/animation';
import { motion } from 'framer-motion';
import cardPerson from '../../../../assets/testimonials/card-person.svg'
import Logo from '../../../../assets/testimonials/Logo.svg'

const TestimonialSimple = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center rounded-[40px] mx-5 p-6 py-14 md:py-0">
            {/* Text Section */}
            <div className="text-center md:mb-16 mb-11 flex flex-col items-center">
                <p className="tracking-wide text-white font-poppins text-[14px] font-semibold leading-[20px] uppercase">
                    Testimonials
                </p>
                <h2 className="text-white font-poppins text-[36px] font-semibold leading-[52px] mt-6 md:mt-0">
                    Here’s What Our Users Think!
                </h2>
            </div>

            {/* Testimonial Card */}
            <div className="flex flex-col md:flex-row items-center  w-full max-w-5xl shadow-lg rounded-lg overflow-hidden gap-12 md:gap-16">
                {/* Image Section - Full Width on Mobile, Half on Desktop */}
                <div className="w-full md:w-1/2 flex items-center justify-center">
                    <Image
                        src={cardPerson}
                        alt="User Image"
                        className="w-full h-auto md:h-full object-cover"
                        priority
                    />
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 flex flex-col p-6 md:p-8">
                    {/* Logo at the Top */}
                    <div className="items-start md:mb-6 mb-12 mt-2">
                        <Image
                            src={Logo}
                            alt="User Image"
                            className="w-auto h-auto object-contain"
                            priority
                        />
                    </div>

                    {/* Testimonial Text (Pushes to Bottom) */}
                    <div className="flex-grow flex flex-col justify-end">
                        <p className="text-white font-poppins text-[24px] italic font-medium leading-[40px]">
                            “After taking courses at Fourth IT Academy, not only has my understanding deepened, but my daily tasks have become more streamlined. The knowledge I gained has been invaluable in my role.”
                        </p>

                        <div className="mt-4 uppercase tracking-[0.8px] font-poppins">
                            <p className="text-white text-[14px] font-semibold leading-[24px]">Jamal Carter</p>
                            <p className="text-[#C1C3C9] text-[12px] font-medium">Information Security Analyst</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSimple;