import React, { useState, useEffect } from 'react';
import Title from '../../../common/Title/Title';
import { sProgramTuitionFinanceTabs } from '../../../../constant/constant';
import Image from 'next/image';

const ProgramTuitionFinance = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index: any) => {
        setActiveTab(index);
    };
    useEffect(() => {
        setActiveTab(0);
    }, []);

    return (
        <div className='pt-[60px] md:pt-[100px] lg:pt-[160px]'>
            <Title title="Tuition and Financing" />

            <div className='container px-[30px] 2xl:px-0 mt-[30px] md:mt-[48px]'>
                <div className='flex flex-col md:flex-row'>
                    {
                        sProgramTuitionFinanceTabs?.map((item, i) => (
                            <button
                                onClick={() => handleTabClick(i)}
                                key={i}
                                className={`bg-secondary text-white rounded-full md:rounded-t-[20px] md:rounded-b-none p-[10px_20px] md:p-[15px_30px] lg:p-[25px_44px] text-[14px] md:text-[16px] font-semibold md:mr-[21px] mb-[10px] md:mb-0 ${activeTab === i && "!bg-[#B9E0FE] !text-lightdark"}`}
                            >
                                {item?.tabName}
                            </button>
                        ))
                    }
                </div>

                <div className='bg-[#B9E0FE] px-[10px] md:px-[30px] lg:px-[72px] py-[30px] md:py-[55px] md:flex gap-x-[105px]'>
                    <div className='w-[312px]'>
                        <Image
                            src={sProgramTuitionFinanceTabs[activeTab]?.img}
                            alt='tuition'
                            layout='responsive'
                        />
                    </div>

                    <div className='w-full'>
                        <h3 className='text-[20px] font-semibold mb-[20px]'>{sProgramTuitionFinanceTabs[activeTab]?.title}</h3>
                        <h4 className='font-medium'>{sProgramTuitionFinanceTabs[activeTab]?.amount}</h4>
                        <p className='text-lightdark mt-[10px]'>{sProgramTuitionFinanceTabs[activeTab]?.body}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProgramTuitionFinance;