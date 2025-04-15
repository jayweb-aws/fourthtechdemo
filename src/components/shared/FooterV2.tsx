import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FooterList from './FooterList';
import ButtonV2 from '../common/ButtonV2/ButtonV2';
import { footerLink1, footerLink2 } from '../../constant/constant';
import foterlogo from '../../assets/homev2/footerlogo.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdCall } from "react-icons/md";

const LogoWrap = React.forwardRef<HTMLAnchorElement>((props, ref) => {
  return (
    <a {...props} ref={ref}>
      <Image src={foterlogo} alt='logo' />
    </a>
  )
})

const FooterV2 = () => {
  return (
    <div className="relative ">
      <div className="relative z-10 mx-5 ">
        <div className="bg-[#FF4D4F] rounded-3xl p-10 md:p-32 flex flex-col md:flex-row items-center justify-between shadow-2xl transform -mb-16 md:h-[412px] ">
          <div className="relative transform  translate-y-2">
            <h2 className="text-white font-poppins text-[40px] font-semibold leading-[52px] tracking-normal ">
            Get started today <br />
            for better future!
            </h2>
            <div className="absolute -top-6 -left-6  md:-left-10 md:-top-10 w-20 h-20  md:w-24 md:h-24 bg-white opacity-40 rounded-tl-full"></div>

          </div>

          <div className="flex flex-col sm:flex-row items-center w-full md:w-auto sm:mt-10 sm:gap-5 gap-4 ">
  <input
    type="email"
    placeholder="Enter Your Email"
    className="w-full md:w-[300px] h-[56px] px-6 py-4 mt-[60px] md:mt-0 rounded-full text-gray-600 focus:outline-none placeholder-gray-400 shadow-lg  transition-all duration-300"
  />
  <button
    className="bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 w-full md:w-[172px]  shadow-lg  transition-all duration-300 mt-4 sm:mt-0"
  >
    Get Started
  </button>
</div>
        </div>
      </div>


<div className='relative z-0 pt-32  bg-[#202123]'>
      <div className="container">
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-[55px_30px_65px_30px] lg:px-[75px] lg:flex lg:justify-between'>
          <div className="footer-logo  w-[200px] lg:w-[300px] 2xl:w-[300px] inline-block cursor-pointer ">
            <Link href="/" passHref className='mb-6'>
              <LogoWrap />
            </Link>
            <p className="text-[#F6F8F9] font-[DM Sans] text-[18px] font-normal leading-[30px] tracking-normal mb-6 "
            >Power Your Future with Adaptive Tech Knowledge</p>

            <div className="flex gap-4 ">
              <Link href="#" className="text-gray-400 hover:text-white">
                <FaFacebookF width={11} height={19} color='rgba(255, 255, 255, 0.64)' />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <FaTwitter width={11} height={19} color='rgba(255, 255, 255, 0.64)' />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <FaInstagram width={11} height={19} color='rgba(255, 255, 255, 0.64)' />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <FaLinkedinIn width={11} height={19} color='rgba(255, 255, 255, 0.64)' />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <FaYoutube width={11} height={19} color='rgba(255, 255, 255, 0.64)' />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-2 lg:flex lg:gap-20 xl:gap-40 mt-[42px] md:mt-0">
            <FooterList title="Product" lists={footerLink1} />
            <FooterList title="Company" lists={footerLink2} />
          </div>

          <div className="mt-[30px] lg:mt-0 lg:flex lg:flex-col lg:items-start">

            <h4 className="text-white font-[Poppins] text-[18px] font-normal leading-[20px] tracking-normal mb-10">Contacts Us</h4>
            <div className="space-y-4 mt-2">
              <div className="flex items-center gap-2 text-gray-300 mb-4">
                <MdEmail size={18} color='rgba(255, 255, 255, 0.64)'/>
                <span>contact@company.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 mb-4">
                <MdCall size={18} color='rgba(255, 255, 255, 0.64)'/>
                <span>(414) 687 - 5892</span>
              </div>
              <div className="flex items-start gap-2 text-gray-300 mb-4">
                <MdLocationOn size={18} className="mt-1" color='rgba(255, 255, 255, 0.64)'/>
                <div>
                  <p>794 Mcallister St</p>
                  <p>San Francisco, 94102</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="border-t border-gray-700">
          <div className="md:container mx-auto flex flex-col md:flex-row justify-between items-center py-6 px-4">
            <p className="text-gray-400 text-sm">Copyright © 2024 Fourth IT</p>
            <div className="flex gap-4 mt-2 md:mt-0">
              <span className="text-gray-400 text-sm">All Rights Reserved | Terms and Conditions | Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FooterV2;
{/* <div className="border-t border-gray-700 w-full">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center py-6 px-4">
<p className="text-gray-400 text-sm">Copyright © 2024 Fourth IT</p>
<div className="flex gap-4 mt-2 md:mt-0">
<span className="text-gray-400 text-sm">All Rights Reserved | Terms and Conditions | Privacy Policy</span>
</div>
</div>
</div> */}