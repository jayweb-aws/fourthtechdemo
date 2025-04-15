import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from '../../../common/SectionTitle/SectionTitle';
import ButtonV2 from '../../../common/ButtonV2/ButtonV2';
import { consultationServicesArr } from '../../../../constant/constant';
import PandaImg from '../../../../assets/consultation/panda-hifi.png';
import { motion } from 'framer-motion';
import { bottomToTopInit, bottomToTopAnimation, pandaAnimationInit, pandaAnimation } from '../../../../utils/animation';
import ExpendText from '../../../common/ExpandText/ExpandText';

const ConSultServices = () => {
    return (
        <div className='py-[120px]'>
            <SectionTitle title='Fourth IT Academy' />

            <div className='bg-lightblue py-[50px] mt-[40px] md:mt-[74px]'>
                <div className="container px-[30px] relative">
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{
                            scale: [0.8, 0.9, 0.8],
                        }}
                        transition={{
                            type: "tween",
                            repeat: Infinity,
                            repeatType: "mirror",
                            duration: 4,
                            ease: "easeInOut",
                        }}
                        className='absolute left-0 top-[-100px] sm:top-[-150px] lg:top-[-180px] 2xl:top-[-200px] w-[160px] sm:w-[200px] lg:w-auto'>
                        <Image
                            src={PandaImg}
                            alt='panda'
                        />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[28px] z-10">
                        {
                            consultationServicesArr?.map((item, i) => (
                                <motion.div
                                    initial={bottomToTopInit}
                                    whileInView={bottomToTopAnimation}
                                    key={i} className='bg-white rounded-[10px] shadow-[0_1px_24px_0_#0000001A] mb-[30px] flex flex-col justify-between'>
                                    <div>
                                        <Image
                                            src={item?.img}
                                            alt='consultation'
                                            layout='responsive'
                                        />

                                        <div className='p-[15px_16px_20px_26px] font-poppins'>
                                            <h4 className='text-[20px] xl:text-[26px] font-semibold text-dark mb-[8px]'>{item?.title}</h4>
                                            <div className='text-[16px] lg:text-[18px] text-grey mb-[20px]'>
                                                <ExpendText color="#5BB1F2" maxChars={150}>
                                                    {item?.description}
                                                </ExpendText>
                                            </div>
                                        </div>
                                    </div>
                                    <Link href={item?.url}>
                                        <a className='px-[20px] pb-[20px]'>
                                            <ButtonV2 text='Learn More' className='w-full' />
                                        </a>
                                    </Link>
                                </motion.div>
                            ))
                        }
                    </div>
                </div>


            </div>
        </div >
    );
};

export default ConSultServices;