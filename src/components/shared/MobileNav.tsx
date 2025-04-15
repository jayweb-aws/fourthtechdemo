import React, { useRef, useState } from 'react';
import { navItemsArray } from '../../constant/constant';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';

const MobileNav = ({ open, setOpen }: any) => {
    const [toggleId, setToggleId] = useState<any>(1);
    const router = useRouter()

    const handleDropdown = (id: any) => {
        if (toggleId === id) {
            return setToggleId(null)
        }
        setToggleId(id)
    }

    return (
        <div className={classNames('lg:hidden z-[999999]')}>
            <div className={classNames('bg-white absolute w-full h-[45vh] top-[95px] shadow-xl lg:h-[calc(100vh-94px)] z-[9999] knowledge overflow-y-auto duration-300 transition-all ease-in-out',
                open ? "right-0" : "right-[-300px]"
            )}>
                <ul className="flex flex-col items-center">
                    {navItemsArray?.map((item: any, i) => (
                        <li onClick={() => handleDropdown(item.id)} key={i} className="w-full text-center">
                        <Link href={item?.url} passHref>
                            <span
                            className={classNames(
                                router.pathname === item.url ? "text-secondary font-semibold" : "text-gray-700",
                                "py-4 block text-[16px] font-medium cursor-pointer",
                            )}
                            >
                            {item?.title}
                            </span>
                        </Link>
                        </li>
                    ))}
                    <li className="w-full text-center">
                        <Link href="/signin" passHref>
                        <span className="py-4 block text-[16px] font-medium cursor-pointer text-gray-700">Login</span>
                        </Link>
                    </li>
                    </ul>
            </div>
        </div>
    );
};

export default MobileNav;