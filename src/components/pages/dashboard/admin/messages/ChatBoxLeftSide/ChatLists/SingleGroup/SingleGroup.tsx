import React from 'react';
import Link from "next/link"

const SingleGroup = ({setloading ,setmsg,setuserIdforchat,socket,setmembers,setisGroupChat,setactiveClass,activeClass,setopenConversation,data,setchatid,setavatar,setname}:{setmsg:any;setloading:any;setuserIdforchat:any;socket:any;setmembers:any;setisGroupChat:any;setactiveClass:any;activeClass:any;setname:any;setavatar:any;data:any;setopenConversation:Function,setchatid:any}) => {
  //  console.log(data)
  const chatId = (id:any) => {
    setchatid(id);
    if(socket.current) {
        socket.current.emit("join chat",id)
    }
    setmsg([])
    setactiveClass(id);
    setname(`${data.chatName}`);
    setloading(true);
    setisGroupChat(data.isGroupChat)
    setavatar(data.img);
    setopenConversation(true);
    setmembers(data.members);
    setuserIdforchat(data._id)
   }
  

   

    return (
        <div className={`flex space-x-4 py-3 cursor-pointer transition-all ${activeClass === data?._id && "bg-blue-600 rounded-lg !text-white px-2"}`} onClick={() => chatId(data._id)}>
            <img src={data.img?data.img:"https://i.ibb.co/7bs6r3J/Rectangle-1207-1.png"} alt="user" className='rounded-full w-[45px] h-[45px]' />
            <div>
                <h4 className={`text-[19px] text-[#232D42] font-nunito ${activeClass === data?._id && " !text-white"}`}>{data?.chatName}</h4>
                <p className={`text-[#8A92A6] text-[16px] font-nunito ${activeClass === data?._id && " !text-white"}`}>Members {data?.members?.length}</p>
            </div>
        </div>
    );
};

export default SingleGroup;