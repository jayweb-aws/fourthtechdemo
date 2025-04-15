import React from 'react';
import Image from 'next/image';

const ViewModalInfoCard = ({ img, title, subTitle }: any) => {
    return (
        <div className='mb-[40px]'>
            <div className='flex items-center gap-x-[10px]'>
                <Image
                    src={img}
                    alt='icon'
                    width={24}
                    height={24}
                />
                <h4 className='font-semibold text-[18px]'>{title}</h4>
            </div>
            <p className='text-[#858585] mt-[10px]'>{subTitle}</p>
        </div>
    );
};

export default ViewModalInfoCard;