import React from 'react';
import Link from 'next/link';

type Props = {
    title: string,
    lists: {
        id: number,
        title: string,
        url: string
    }[]
}

const FooterList = ({ title, lists }: Props) => {
    return (
        <div>
        <h4 className="text-white font-[Poppins] mb-10 text-[18px] font-normal leading-[20px] tracking-normal">{title}</h4>
        <ul>
          {lists.map((list, i) => (
            <li key={i} className='text-[18px] leading-[24px] mb-2 font-medium text-gray-400 cursor-pointer hover:text-secondary duration-300'>
              <Link href={list.url} passHref>
                {list.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
};

export default FooterList;