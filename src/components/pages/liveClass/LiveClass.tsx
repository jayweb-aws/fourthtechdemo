import React from 'react';
import LiveClassFooter from './components/LiveClassFooter';
import LiveClassLeft from './components/LiveClassLeft';
import LiveClassRight from './components/LiveClassRight';

const LiveClass = () => {
    return (
        <div className='bg-[#F9F9F9]'>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="col-span-1 lg:col-span-2">
                 <LiveClassLeft/>
                </div>
                <LiveClassRight/>
            </div>
        </div>
    );
};

export default LiveClass;