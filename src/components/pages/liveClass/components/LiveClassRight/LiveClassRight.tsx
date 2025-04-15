import React, { useState } from 'react';
import Messages from '../../partials/Messages';
import MessageSendOption from '../../partials/MessageSendOption';

const LiveClassRight = () => {
    const [chatAndGroup,setChatAndGroup] = useState<boolean>(false)
    const [active,setActive] = useState<number>(1)

    const handleChatAndGroup=(id:number)=>{
        setChatAndGroup(!chatAndGroup)
        setActive(id)
    }
    return (
        <div className='bg-white px-8 py-5 mb-[200px]'>
            <div className='flex justify-between mb-5 border-b border-gray-200'>
                <h4 onClick={()=>handleChatAndGroup(1)} className={`${active===1 && "border-b-[3px] border-primary text-primary"} cursor-pointer text-small-text-color text-[23px] font-medium`}>Class Conversation</h4>  
                <h4 onClick={()=>handleChatAndGroup(2)} className={`${active===2 && "border-b-[3px] border-primary text-primary"} cursor-pointer text-small-text-color text-[23px] font-medium`}>Private Message</h4>
            </div>
            <div>
                {!chatAndGroup ? <Messages/> : <Messages/>}
                <MessageSendOption/>
            </div>
        </div>
    );
};

export default LiveClassRight;