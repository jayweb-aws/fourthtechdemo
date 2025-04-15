import React from 'react';

type Props = {
    title: string,
    classNames?: string
}
const SectionTitle = ({ title, classNames }: Props) => {
    return (
        <div className={`text-center`}>
            <h3 className={`font-poppins inline-block lg:text-[40px] md:text-[30px] sm:text-[24px] text-[18px] md:leading-[60px] leading-[40px] font-semibold  text-secondary relative before:absolute before:w-full lg:before:h-[4px] before:h-[2px] before:bg-secondary before:bottom-0 before:rounded-[21px] ${classNames}`}>
                {title}
            </h3>
        </div>
    );
};

export default SectionTitle;    