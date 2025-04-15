import Link from 'next/link';
import React from 'react';

const LiveClassFooter = () => {
    return (
        <div className='p-[5px_20px] text-center block lg:flex justify-between bg-white'>
            <div className="left space-x-3">
                <Link href='#'><span>Privacy Policy</span></Link>
                <Link href='#'><span>Terms of Use</span></Link>
            </div>
            <div>
                <p>© 2022 Hope UI, Made with ❤ by IQONIC Design.</p>
            </div>
        </div>
    );
};

export default LiveClassFooter;