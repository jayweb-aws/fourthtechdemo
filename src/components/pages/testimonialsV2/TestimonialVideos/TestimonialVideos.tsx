import TestimonialVideoGrid from './TestimonialVideoGrid'
import SectionTitle from '../../../common/SectionTitle/SectionTitle';
import Image from 'next/image';
import video from '../../../../assets/testimonials/video.svg' 


const TestimonialVideos = () => {
    return (
                <div className="md:my-36 my-14">
        <div className="lg:mb-[90px] text-center md:mb-20 mb-11 flex flex-col items-center">
            <p className="tracking-wide font-poppins text-[#40424B] text-center text-[14px] font-semibold leading-[20px] uppercase">
            Customers
            </p>
            <p className="text-[#40424B] text-center font-poppins text-[36px] font-semibold leading-[52px] mt-6">
            Don’t Just Take Our Word For It
            </p>
        </div>

        <div className="container px-[30px] flex justify-center">
            <Image
            src={video}
            alt="Customer video"
            className="w-full md:w-auto h-auto md:h-full object-cover"
            priority
            />
        </div>
        </div>
    );
};

export default TestimonialVideos;
