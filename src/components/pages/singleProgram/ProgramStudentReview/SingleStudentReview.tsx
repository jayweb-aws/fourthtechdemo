import React from 'react';

type Props = {
    item: {
        id: number,
        review: string,
        name: string,
        designation: string,
        date: string
    }
    className?: string
}
const SingleStudentReview = ({ className, item }: Props) => {
    return (
        <div className={`max-w-[345px] ${className}`}>
            <p className='bg-secondary text-white p-[15px] rounded-[10px]'>{item?.review}</p>
            <h4 className='font-semibold mt-[10px]'>{item?.name}, {item?.designation}, <span className='font-normal text-[14px]'>{item?.date}</span></h4>
        </div>
    );
};

export default SingleStudentReview;