import Image from 'next/image';
import React from 'react';
import teacher from '../../../../assets/liveclass/teacher.svg';
import presenter from '../../../../assets/liveclass/presenter.svg';

const LiveLeftScreen = () => {
    return (
        <div className='pl-5 lg:pl-10 pr-5 lg:pr-0 pt-8'>
            <div className='relative'>
                <Image
                src={teacher}
                />
                <div className='absolute top-5 left-5 bg-white px-3 py-1 rounded flex items-center space-x-2'>
                    <span className='inline-block bg-[#DD0000] w-3 h-3 rounded-full'></span>
                    <span className='text-[19px] font-bold title-clr'>LIVE</span>
                    <span className='text-small-text-color'>20:35</span>
                </div>
                <div className='flex items-center space-x-3 absolute -bottom-6 left-[50%] -translate-x-[50%] bg-white px-5 py-2 shadow rounded'>
                    <div>
                        <Image
                        src={presenter}
                        width={50}
                        height={50}
                        />
                    </div>
                    <div>
                        <h4 className='font-bold text-[23px]'>Cody Fisher</h4>
                        <p className='text-base'>Presenter</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LiveLeftScreen;