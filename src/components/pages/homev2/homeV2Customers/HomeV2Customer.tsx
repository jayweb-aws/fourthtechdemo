import Image from 'next/image';
import { motion } from 'framer-motion';
import image from "../../../../assets/homev2/Img (1).svg"
import { bannerTextBottomAnimation, bannerTextBottomInit } from '../../../../utils/animation';

const HomeV2Customer = () => {
  return (
     <div className='relative z-10 pb-0 md:pb-[120px]'>
            <div className="container px-[30px] md:flex justify-between items-center pt-[50px]">
             
      
              <div className="relative w-full max-w-[540px]">
                <div className="absolute top-0 right-0 w-[80%] h-full rounded-tl-[200px] rounded-br-[200px]" />
                <motion.div 
                  initial={{ opacity: 0, x: -50 }} 
                  whileInView={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6 }}
                  className="relative z-10">
                  <Image 
                    width={544} 
                    height={461} 
                    src={image} 
                    alt="Cybersecurity Protection" 
                  />
                </motion.div>
              </div>
              <motion.div
                initial={bannerTextBottomInit}
                whileInView={bannerTextBottomAnimation}
                className="max-w-[682px]"
              >
                <h3 className="text-sm mb-6 font-semibold text-[#40424B] font-poppins uppercase mt-[32px] ">Customers</h3>
                <h2 className="font-poppins text-[36px] font-semibold leading-[52px] text-[#40424B] font-poppins ">
                Customers Building Trust <br /> with Leading Organizations
                </h2>
                <p className=" text-[16px] leading-[24px] text-gray-600 max-w-[528px] mt-4 mb-10 font-poppins">
                We pride ourselves on building trust and long-lasting  relationships with leading organizations, providing them with tailored solutions that  optimize their cybersecurity and risk management strategies.
                </p>
              </motion.div>
            </div>
          </div>
  )
}

export default HomeV2Customer;