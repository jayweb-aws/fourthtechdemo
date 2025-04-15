import React,{useState} from 'react';
import { FaEdit } from 'react-icons/fa';
import {AiOutlineUsergroupAdd} from "react-icons/ai"
import { BsSearch } from 'react-icons/bs';
import CreateChat from "./CreateChat";
import CreateGroup from "./CreateGroup";
import { useAppSelector } from "../../../../../../../app/hooks";

const ChatHeader = ({socket}:any) => {
    const [show, setshowModal] = useState(false);
    const { id, roles } = useAppSelector((state) => state.auth.user);
    const [groupShow, setgroupShow] = useState(false)
   
    return (
        <div>       
            <CreateChat
            show={show}
            socket={socket}
            setShowModal={setshowModal}
            />
            <CreateGroup 
               show={groupShow}
               setShowModal={setgroupShow}
               socket={socket}
            />
            <div className='flex justify-between items-center mb-5'>
                <h4 className='text-[23px] text-[#232D42] font-medium'>Chat Room</h4>
             {
                !roles.includes("student") &&
               <div className='flex items-center gap-2'>
                <button className='text-[#8A92A6]' onClick={() => setshowModal(!show)}><FaEdit/></button>
                <button className='text-[#8A92A6]' onClick={() => setgroupShow(!show)}><AiOutlineUsergroupAdd className='text-[18px]'/></button>
               </div> 
              }
            </div>
        </div>
    );
};

export default ChatHeader;