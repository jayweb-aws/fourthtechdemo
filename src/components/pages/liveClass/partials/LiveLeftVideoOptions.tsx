import React from 'react';
import mic from '../../../../assets/liveclass/mic.svg';
import Video from '../../../../assets/liveclass/Video.svg';
import attendie from '../../../../assets/liveclass/attendie.svg';
import screenShare from '../../../../assets/liveclass/screen-share 1.svg';
import record from '../../../../assets/liveclass/record.svg';
import Image from 'next/image';

const LiveLeftVideoOptions = () => {
    return (
        <div className='pt-[100px] pb-[100px] lg:pb-[150px] flex justify-center space-x-5'>
            <div className='text-center'>
                <div className="bg-white p-3 rounded-xl shadow-xl flex items-center mb-2 cursor-pointer">
                    <Image
                    src={mic}
                    width={20}
                    height={20}
                    />
                </div>
                <p className='text-[#5F5F60] font-medium'>Mic</p>
            </div>
            <div className='text-center'>
                <div className="bg-white p-3 rounded-xl shadow-xl flex items-center mb-2 cursor-pointer">
                    <Image
                    src={Video}
                    width={20}
                    height={20}
                    />
                </div>
                <p className='text-[#5F5F60] font-medium'>Cam</p>
            </div>
            <div className='text-center'>
                <div className="bg-white p-3 rounded-xl shadow-xl flex justify-center items-center mb-2 cursor-pointer">
                    <Image
                    src={attendie}
                    width={20}
                    height={20}
                    />
                </div>
                <p className='text-[#5F5F60] font-medium'>Attendee</p>
            </div>
            <div className='text-center'>
                <div className="bg-white p-3 rounded-xl shadow-xl flex items-center mb-2 cursor-pointer">
                    <Image
                    src={screenShare}
                    width={20}
                    height={20}
                    />
                </div>
                <p className='text-[#5F5F60] font-medium'>Share</p>
            </div>
            <div className='text-center'>
                <div className="bg-white p-3 rounded-xl shadow-xl flex items-center mb-2 cursor-pointer">
                    <Image
                    src={record}
                    width={20}
                    height={20}
                    />
                </div>
                <p className='text-[#5F5F60] font-medium'>Rec</p>
            </div>
        </div>
    );
};

export default LiveLeftVideoOptions;