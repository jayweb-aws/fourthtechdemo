import React from 'react';

type Props = {
    title: string,
    className?: string
}
const Title = ({ title, className }: Props) => {
    return (
        <h3 className={`text-center text-[24px] sm:text-[30px] lg:text-[38px] font-semibold font-poppins max-w-[600px] px-[30px] mx-auto text-[#222222] ${className}`}>
            {title}
        </h3>
    );
};

export default Title;