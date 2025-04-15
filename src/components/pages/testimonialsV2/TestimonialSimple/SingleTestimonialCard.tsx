import Image from 'next/image';
import { bottomToTopInit, bottomToTopAnimation } from '../../../../utils/animation';
import { motion } from 'framer-motion';

const SingleTestimonialCard = ({ item }: any) => {
    return (
        <motion.div
            initial={bottomToTopInit}
            whileInView={bottomToTopAnimation}
            className='rounded-[10px]'>
            <div className='bg-lightblue rounded-[10px] mx-auto text-center pt-3'>
                <Image
                    src={item?.img}
                    alt={item?.name}
                />
            </div>
            <div className='p-[15px] font-poppins'>
                <h4 className='text-[20px] md:text-[26px] font-semibold text-dark'>{item?.name}</h4>
                <h4 className='text-[14px] text-gray-400 mb-[15px]'>{item?.designation}</h4>
                <p className='text-grey'>{item?.description}</p>
            </div>
        </motion.div>
    );
};

export default SingleTestimonialCard;