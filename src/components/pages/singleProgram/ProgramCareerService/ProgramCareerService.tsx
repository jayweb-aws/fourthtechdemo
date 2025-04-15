import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Title from '../../../common/Title/Title';
import ProgramInsideSingleTab from './ProgramInsideSingleTab'
import { sProgramCareerServiceTabs } from '../../../../constant/constant';
import alumniImg from '../../../../assets/single-program/alumni.png';
import tickImg from '../../../../assets/single-program/tick.png';

const ProgramCareerService = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [activeChildTab, setActiveChildTab] = useState(0);

    const handleTabClick = (index: any) => {
        setActiveTab(index);
        setActiveChildTab(0);
    };
    useEffect(() => {
        setActiveTab(0);
    }, []);

    return (
        <div className='pt-[71px]'>
            <Title title="Career Service" />

            <div className='container px-[30px] 2xl:px-0 mt-[48px]'>
                <div className='flex md:block'>
                    {
                        sProgramCareerServiceTabs?.map((item, i) => (
                            <button
                                onClick={() => handleTabClick(i)}
                                key={i}
                                className={`bg-secondary text-white rounded-t-[20px] p-[10px_20px] md:p-[25px_44px] text-[14px] md:text-[16px] font-semibold mr-[21px] ${activeTab === i && "!bg-[#B9E0FE] !text-lightdark"}`}
                            >
                                {item?.tabName}
                            </button>
                        ))
                    }
                </div>

                <div className='bg-[#B9E0FE] px-[10px] md:px-[30px] lg:px-[72px] py-[30px] md:py-[55px]'>
                    {sProgramCareerServiceTabs[activeTab].id === 1 ? <div>
                        <p>
                            {sProgramCareerServiceTabs[activeTab]?.body}
                        </p>
                        <ProgramInsideSingleTab tabArray={sProgramCareerServiceTabs[activeTab]?.content} />
                    </div> :
                        <div className='grid lg:grid-cols-2 gap-x-[50px]'>
                            <div>
                                <Image
                                    src={alumniImg}
                                    alt='alumni'
                                />
                            </div>

                            <div>
                                <div className='mt-[34px]'>
                                    <h4 className='text-[18px] md:text-[20px] font-semibold mb-[5px]'>Fourth Academy Alumni
                                    </h4>
                                    <p className='text-[14px]'>Being a part of the Fourth Academy community offers lifelong benefits, ensuring you stay at the forefront of the cybersecurity landscape.
                                    </p>
                                    <h4 className='text-[16px] font-semibold mb-[5px] mt-[34px]'>Milestone include: </h4>

                                    <ul>
                                        {sProgramCareerServiceTabs[activeTab].content[0]?.lists?.map((item: any, i: any) => (
                                            <li key={i} className='flex items-center gap-x-[15px] mb-[5px] last:mb-0'>
                                                <Image
                                                    src={tickImg}
                                                    alt='tick'
                                                />
                                                <span className='text-[14px]'>{item?.title}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                    }
                </div>
            </div>
        </div>
    );
};

export default ProgramCareerService;