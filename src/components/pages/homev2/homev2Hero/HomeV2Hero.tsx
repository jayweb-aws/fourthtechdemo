import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import whiteDotImg from '../../../../assets/homev2/white-dot.png';
import personimage1 from '../../../../assets/homev2/personimage.png';
import personimage2 from '../../../../assets/homev2/pattern_main2.png';
import personimage3 from '../../../../assets/homev2/personimage3.png';
import personimage4 from '../../../../assets/homev2/personimage4.png';
import stripeLogo from '../../../../assets/homev2/stripeLogo.png';
import aerrowRight from '../../../../assets/homev2/aerrowRight.png';
import google from '../../../../assets/homev2/google.png';
import visa from '../../../../assets/homev2/visa.png';
import linkedin from '../../../../assets/homev2/linkedin.png';
import samsung from '../../../../assets/homev2/samsung.png';
import zoomLogo from '../../../../assets/homev2/zoomLogo.png';
import spotify from '../../../../assets/homev2/spotify.png';
import women from "../../../../assets/homev2/women.png";
import fallbackImage from "../../../../assets/homev2/women.png";
import type { StaticImageData } from 'next/image';

type SectionProps = {
    title: string;
    highlightedWord: string | null;
    description: string;
    buttonText: string;
    image?: StaticImageData;
    secondaryButtonText?: string;
    primaryButtonText?: string;
    isSpecialSlide?: boolean;
};

const Section: React.FC<SectionProps> = ({
    title,
    highlightedWord,
    description,
    buttonText,
    secondaryButtonText,
    primaryButtonText,
    image,
    isSpecialSlide
}) => {
    if (isSpecialSlide) {
        return (
            <div className="container relative z-10 flex flex-col justify-center items-center min-h-[730px] w-full">
                <div className="absolute top-5 left-5 right-5 bottom-5 border border-white rounded-[40px] p-6 md:py-6 px-5 py-10 md:px-20 pointer-events-none flex items-end mx-4 md:mx-28 pb-10 md:pb-28">
                    <div className="absolute top-4 left-4 z-10 flex space-x-2 py-10 md:px-6 md:py-2 md:left-6">
                        <span className="w-3 h-3 rounded-full bg-[#D9D9D9]"></span>
                        <span className="w-3 h-3 rounded-full bg-[#D9D9D9]"></span>
                        <span className="w-3 h-3 rounded-full bg-[#D9D9D9]"></span>
                    </div>
                    <div className="w-full text-center flex flex-col items-center z-10">
                        <div>
                            <h1 className="text-white font-poppins text-[42px] sm:text-[38px] md:text-[93px] font-bold leading-[110%] tracking-[-1px] sm:tracking-[-1.5px] md:tracking-[-2.88px] flex flex-wrap items-center">
                                <span className="flex items-center gap-2 sm:gap-4">
                                    Build your
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] md:w-[61px] md:h-[61px]" viewBox="0 0 61 61" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M30.4989 61C47.2985 61 61 47.2994 61 30.5011C61 13.7027 47.2985 -3.8147e-06 30.4989 -3.8147e-06C13.7015 -3.8147e-06 0 13.7027 0 30.5011C0 47.2994 13.7015 61 30.4989 61Z" fill="#CBBABC" />
                                        <path d="M42.8728 19.1207L20.2383 41.7568" stroke="#F04152" strokeWidth="4" strokeMiterlimit="22.926" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M19 19.1201H42.88V43" stroke="#F04152" strokeWidth="4" strokeMiterlimit="22.926" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <span className="block">career today</span>
                            </h1>
                            <p className="text-white font-poppins text-[14px] sm:text-[15px] md:text-[16px] pt-3 font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] max-w-[600px] mx-auto md:mx-0 text-center md:text-left">
                                We are a career growth platform focused on providing equal access to educational resources and mentors to empower your future with cutting-edge education Tech Courses across the world.
                            </p>
                            <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4 mt-10 gap-2">
                                <Link href="/registration" className="w-full md:w-auto">
                                    <button className="bg-[#FF4D4F] text-white text-lg font-poppins font-semibold py-3 px-8 rounded-[24px] hover:bg-[#e04345] transition w-full md:w-[240px] flex items-center justify-center cursor-pointer">
                                        Get Started
                                    </button>
                                </Link>
                                <Link href="/login" className="w-full md:w-auto">
                                    <button className="font-poppins py-3 px-8 rounded-full border border-white hover:bg-white hover:text-black transition text-white text-[18px] font-medium leading-normal flex w-full md:w-[240px] justify-center items-center gap-[10px] hover:cursor-pointer">
                                        Log In
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-[682px] md:text-left">
            <h2 className="md:text-[58px] 2xl:leading-[60px] max-w-[682px] font-poppins text-[36px] font-semibold leading-[130.5%] text-[#40424B] font-poppins">
                {highlightedWord ? (
                    <>
                        {title.split(highlightedWord)[0]}
                        <span className="bg-[#FF4D4F] px-2 text-[36px] md:text-[58px] font-semibold leading-[130.5%] text-white font-poppins">{highlightedWord}</span>
                        {title.split(highlightedWord)[1]}
                    </>
                ) : title}
            </h2>
            <p className="max-w-[488px] md:m-[36px_0_39px] m-[32px_0] font-poppins text-left md:text-left text-[16px] font-medium leading-[26px] text-[#6F6F6F] font-poppins">
                {description}
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start md:items-start">
                <Link href={'/registration'}>
                    <a>
                        <button
                            className={`font-poppins font-semibold py-3 px-3 transition flex items-center justify-center gap-3 ${primaryButtonText ? "w-[164px]" : "w-[256px]"} ${
                                secondaryButtonText
                                    ? 'bg-[#FF4D4F] text-white rounded-bl-[10px] rounded-tr-[50px] rounded-br-[50px] rounded-[50px] hover:bg-[#e04345]'
                                    : 'bg-[#FF4D4F] text-white rounded-[89px] hover:bg-[#e04345] h-[54px]'
                            }`}
                        >
                            <span>{buttonText}</span>
                            {buttonText !== 'Start Today' && buttonText !== 'Registration' && highlightedWord !== "Limitless" && highlightedWord != null && (
                                <Image
                                    src={aerrowRight}
                                    alt="Arrow Right"
                                    width={20}
                                    height={20}
                                    className="pl-6"
                                />
                            )}
                        </button>
                    </a>
                </Link>
                {secondaryButtonText && (
                    <Link href={'/registration'}>
                        <a>
                            <button className="bg-[#FFE6E6] w-full md:w-[164px] text-[#FF4D4F] font-poppins font-semibold py-3 px-6 rounded-tl-[50px] rounded-bl-[50px] rounded-tr-[50px] rounded-br-[10px] hover:bg-[#ffd6d6] transition">
                                {secondaryButtonText}
                            </button>
                        </a>
                    </Link>
                )}
            </div>
        </div>
    );
};

const HomeV2Hero = () => {
    const sections = [
        {
            title: 'Unlock Boundless Opportunities in Tech',
            highlightedWord: 'Boundless',
            description: 'We are career growth platform focused on providing equal access to educational resources and mentors for empower your future with cutting-edge education Tech Courses across the world.',
            buttonText: 'Find Best Tech Courses',
            image: personimage1
        },
        {
            title: 'Discover Limitless Potential in Tech',
            highlightedWord: 'Limitless',
            description: 'We are career growth platform focused on providing equal access to educational resources and mentors for empower your future with cutting-edge education Tech Courses across the world.',
            buttonText: 'Find Best Tech Courses',
            image: personimage2
        },
        {
            title: 'Build your career today',
            highlightedWord: null,
            description: 'We are a career growth platform focused on providing equal access to educational resources and mentors to empower your future with cutting-edge education Tech Courses across the world.',
            buttonText: 'Get Started',
            secondaryButtonText: 'Log In',
            isSpecialSlide: true
        },
        {
            title: 'Learn Today Lead Tomorrow',
            highlightedWord: null,
            description: 'We are career growth platform focused on providing equal access to educational resources and mentors for empower your future with cutting-edge education Tech Courses across the world.',
            buttonText: 'Find Best Tech Courses',
            image: personimage3
        },
        {
            title: 'Discover the Power of Lifelong Learning',
            highlightedWord: 'Learning',
            description: 'We are career growth platform focused on providing equal access to educational resources and mentors for empower your future with cutting-edge education Tech Courses across the world.',
            buttonText: 'Start Today',
            secondaryButtonText: 'Registration',
            image: personimage4,
            primaryButtonText: 'Start Today'
        },
    ];

    const row1 = [stripeLogo, google, visa];
    const row2 = [linkedin, samsung];
    const row3 = [zoomLogo, spotify];

    const [activeSection, setActiveSection] = useState(3);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSection((prev) => (prev + 1) % sections.length);
        }, 50000000);
        return () => clearInterval(interval);
    }, [sections.length]);

    return (
        <div className='relative z-10 pb-0 bg-[#f6f8f9]' style={activeSection === 2 ? { backgroundImage: `url(${women.src})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}>
            {sections[activeSection].isSpecialSlide ? (
                <div className="w-full">
                    <Section {...sections[activeSection]} />
                </div>
            ) : (
                <div className="container px-4 md:px-[30px] flex flex-col md:flex-row justify-between items-center pt-14">
                    <div className="w-full md:w-auto">
                        <Section {...sections[activeSection]} />
                    </div>
                    <div className="relative md:mt-0 mt-[60px] md:pb-0">
                        <Image
                            width={540}
                            height={516}
                            src={sections[activeSection].image || fallbackImage}
                            alt="Person"
                            className="w-full max-w-[540px] h-auto"
                        />
                    </div>
                </div>
            )}
            <div className="container px-5 md:px-[30px] mt-[60px] py-[30px]">
                <div className="hidden md:flex justify-between items-center gap-x-10 flex-wrap">
                    {[...row1, ...row2, ...row3].map((logo, index) => (
                        <div key={index} className="grayscale opacity-70 hover:opacity-100 transition-opacity w-[120px] h-auto">
                            <Image src={logo} alt="Logo" width={120} height={40} className="object-contain" />
                        </div>
                    ))}
                </div>
                <div className="md:hidden flex flex-col gap-y-[79px]">
                    <div className="grid grid-cols-3 gap-4 place-items-center">
                        {row1.map((logo, index) => (
                            <div key={index} className="w-[90px] h-auto">
                                <Image src={logo} alt="Logo" width={90} height={40} className="object-contain" />
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-2 gap-4 place-items-center">
                        {row2.map((logo, index) => (
                            <div key={index} className="w-[90px] h-auto">
                                <Image src={logo} alt="Logo" width={90} height={40} className="object-contain" />
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-2 gap-4 place-items-center">
                        {row3.map((logo, index) => (
                            <div key={index} className="w-[90px] h-auto">
                                <Image src={logo} alt="Logo" width={90} height={40} className="object-contain" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeV2Hero;