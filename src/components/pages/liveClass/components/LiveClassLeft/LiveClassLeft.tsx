import React from 'react';
import LiveLeftHeader from '../../partials/LiveLeftHeader';
import LiveLeftScreen from '../../partials/LiveLeftScreen';
import LiveLeftVideoOptions from '../../partials/LiveLeftVideoOptions';

const LiveClassLeft = () => {
    return (
        <div>
            <LiveLeftHeader/>
            <LiveLeftScreen/>
            <LiveLeftVideoOptions/>
        </div>
    );
};

export default LiveClassLeft;