import ButtonV2 from '../../../common/ButtonV2/ButtonV2';
import { motion } from 'framer-motion';
import { bottomToTopInit, bottomToTopAnimation } from '../../../../utils/animation';

const ConsultCTA = () => {
    return (
        <div className='relative mt-[50px] mb-[120px] before:absolute before:w-full before:h-full before:left-0 before:top-0 before:skew-y-[5deg] before:bg-[linear-gradient(90deg,#5BB1F2_37%,#DEEFFC_97.85%)] before:z-[-1]'>

            <motion.div
                initial={bottomToTopInit}
                whileInView={bottomToTopAnimation}
                className='max-w-[702px] w-full mx-auto px-[30px] font-poppins text-center pt-[100px] pb-[100px]'>
                <h3 className='text-[24px] md:text-[26px] lg:text-[34px] leading-[40px] lg:leading-[55.1px] font-semibold text-white mb-[20px]'>Opportunity, Dedication and Excellence in IT.</h3>
                <div className='flex flex-col md:flex-row justify-center gap-y-[15px] md:gap-y-0 md:gap-x-[30px]'>
                    <ButtonV2 text='Sponsor A Student' isWhiteBtn={true} />
                    <ButtonV2 text='Result A Student' isWhiteBtn={false} className='bg-transparent border-white hover:bg-white hover:!border-white' />
                </div>
            </motion.div>

        </div>
    );
};

export default ConsultCTA;