import Image from 'next/image';
import { motion } from 'framer-motion';
import Img from '../../../../assets/homev2/Img.svg';
import { bannerTextBottomInit, bannerTextBottomAnimation } from '../../../../utils/animation';

const HomeV2Service = () => {
    return (
        <div className='relative z-10 pb-0 md:pb-[120px] bg-[#F6F8F9] overflow-hidden'>
            <div className="container px-[20px] md:px-[30px] flex flex-col md:flex-row justify-between items-center pt-[50px]">
                <motion.div
                    initial={bannerTextBottomInit}
                    whileInView={bannerTextBottomAnimation}
                    className="max-w-full md:max-w-[682px] mb-10 md:mb-0"
                >
                    <h3 className="text-sm mb-6 font-semibold text-[#40424B] font-poppins uppercase">
                        WHY FOURTH IT
                    </h3>
                    <h2 className="2xl:text-[46px] text-[36px] font-semibold leading-[52px] text-[#40424B] font-poppins">
                        Optimizing Cybersecurity <br /> and Risk Management
                    </h2>
                    <p className="text-[16px] md:text-[18px] leading-[24px] text-[#6F6F6F] max-w-full md:max-w-[600px] mt-4 mb-6 font-poppins">
                        Fourth IT is your trusted partner for optimizing cybersecurity and risk management strategies, ensuring robust protection and compliance at every stage of your business growth.
                    </p>
                </motion.div>

                <div className="relative w-full max-w-full md:max-w-[540px] overflow-hidden">
                    <div className="absolute top-0 right-0 w-[80%] h-full bg-[#FFB39B] rounded-tl-[200px] rounded-br-[200px]" />
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative z-10 w-full"
                    >
                        <Image
                            width={544}
                            height={461}
                            src={Img}
                            alt="Cybersecurity Protection"
                            className="w-full h-auto"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HomeV2Service;