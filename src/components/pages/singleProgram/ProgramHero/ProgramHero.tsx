import React, { useState } from 'react';
import Image from 'next/image';
import heroBgImg from '../../../../assets/single-program/cybersecurity-vietnam.jpg';
import downloadImg from '../../../../assets/single-program/download.png';
import { sProgramHeroLists } from '../../../../constant/constant';
import RegistrationForm from '../../registration/TopFormRegistration';
import { isAuthorized } from "../../../../utils/auth";
import { useAppSelector } from "../../../../app/hooks";
import Link from 'next/link';
import ArrowLeft from '../../../../assets/homev2/ArrowLeft.svg'

const ProgramHero = () => {
    const [isApplyActive, setIsApplyActive] = useState(false);
    const {
        user: { email },
        refresh,
    } = useAppSelector((state) => state.auth);

    return (
        <div className='container'>
            <div className='mx-5 md:mx-10  relative z-10 py-10 mt-12 '>
                <div className="grid md:grid-cols-2">
                    {!isApplyActive ? <div className='mb-[30px] md:mb-0'>
                        <div className="absolute top-0  flex items-center">
                            <Link href="/programs" passHref>
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
                        <h3 className='text-[36px] leading-[50px] font-semibold max-w-[511px] mb-[20px] md:mb-[32px]'>
                            Cybersecurity Online Bootcamp
                        </h3>
                        <ul>
                            {
                                sProgramHeroLists?.map((item, i) => (
                                    <div key={i}>
                                        <li className='text-[16px] lg:text-[18px] text-[#222] mb-[12px] flex items-center gap-x-[12px]'>
                                            <Image
                                                src={item?.img}
                                                alt={item?.title}
                                            />
                                            <span>{item?.title}</span>
                                        </li>
                                    </div>
                                ))
                            }
                        </ul>

                        <div className='mt-[16px] flex items-center gap-x-[10px] sm:gap-x-[20px] lg:gap-x-[40px]'>
                            <button disabled={isAuthorized(email, refresh)} onClick={() => setIsApplyActive(true)} className='font-poppins font-semibold py-3 px-8 transition-all duration-300 flex items-center justify-center gap-3 bg-[#FF4D4F] text-white rounded-full hover:bg-[#e04345] min-w-[190px] text-sm'>
                                Apply Today
                            </button>
                            <a href={"/Fourth Academy Student Packet .pdf"} download="Fourth Academy Student Packet .pdf" className='flex items-center gap-x-[8px]'>
                                <button className='w-[30px] lg:w-auto'>
                                    <Image
                                        src={downloadImg}
                                        alt='download'
                                        className='cursor-pointer'
                                    />
                                </button>
                                <button className='max-w-[132px] font-semibold text-left text-[14px] lg:text-[16px]'>Download Course Packet</button>
                            </a>
                        </div>
                    </div> :
                        <RegistrationForm />
                    }

                    {/* Right Side Img  */}
                    <div className={`${isApplyActive && "mt-[30px] md:mt-0"}`}>
                        <Image
                            src={heroBgImg}
                            alt="hero"
                            layout='responsive'
                        />

                        {
                            isApplyActive && <a href={"/Fourth Academy Student Packet .pdf"} download="Fourth Academy Student Packet .pdf" className='flex items-center gap-x-[8px]  mt-[40px]'>
                                <button className='w-[30px] lg:w-auto'>
                                    <Image
                                        src={downloadImg}
                                        alt='download'
                                        className='cursor-pointer'
                                    />
                                </button>
                                <button className='max-w-[132px] font-semibold text-left text-[14px] lg:text-[16px]'>Download Course Packet</button>
                            </a>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgramHero;