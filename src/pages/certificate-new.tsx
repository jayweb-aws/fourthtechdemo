import React from 'react';
import Image from 'next/image';
import Logo from '../assets/logov2.png';
import shapeTopImg from '../assets/certificate/shape-top.png';
import shapeBottomImg from '../assets/certificate/shape-bottom.png';
import courseImg from '../assets/certificate/course.png';

const CertificateNew = () => {
    return (
        <div className={`h-[630px] max-w-[1300px] mx-auto overflow-hidden z-10 c-border p-[50px] font-poppins relative before:absolute before:left-[15px] before:top-[72%] before:bg-[url('../assets/certificate/shape-bottom1.png')] before:z-[-9] before:w-full before:h-full before:bg-no-repeat after:absolute after:left-[685px] after:top-[15px] after:bg-[url('../assets/certificate/shape-top1.png')] after:bg-no-repeat after:w-full after:h-full after:z-[-9]`}>
            <div>
                <Image
                    src={Logo}
                    alt='logo'
                />
            </div>

            <div className='max-w-[700px] mx-auto text-center relative'>
                <h2 className='uppercase text-[#29A5FE] text-[70px] leading-normal font-semibold'>
                    Certificate
                </h2>
                <h4 className='uppercase text-[40px]'>of  completion</h4>
                <button className='uppercase tracking-[10px] bg-dark text-white p-[5px_100px]'>awarded to</button>


                <div className='relative mt-[100px] before:absolute before:w-[340px] before:h-[1px] before:bg-darkgrey before:left-1/2 before:-translate-x-1/2 before:top-[-10px]'>
                    <h4 className='uppercase'>FOR SUCCESSFUL COMPLETION OF</h4>
                    <h4 className='font-semibold  uppercase'>CyberSecurity GRC MASTERCLASS</h4>
                </div>

                <div className='flex justify-center gap-x-[300px] mt-[50px]'>
                    <div className='relative uppercase before:absolute before:w-[200px] before:h-[1px] before:bg-darkgrey before:top-[-5px] before:left-1/2 before:-translate-x-1/2'>
                        Date
                    </div>
                    <div className='relative uppercase before:absolute before:w-[200px] before:h-[1px] before:bg-darkgrey before:top-[-5px] before:left-1/2 before:-translate-x-1/2'>
                        EMMANUEL OWUSU - KYEREKO
                    </div>
                </div>

                <div className='absolute top-1/2 -translate-y-1/2 right-0 w-[110px] h-[110px]'>
                    <Image
                        src={courseImg}
                        alt='course certificate'
                    />
                </div>
            </div>
        </div>
    );
};

export default CertificateNew;