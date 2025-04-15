import React,{useState,useEffect} from 'react';
import { useAppSelector,useAppDispatch } from "../../../../../../../../app/hooks";
import dashboardApi from "../../../../../../../../feature/api/dashboardApi";


const SingleUser = ({latestmsg,setloading,setmsg,setuserIdforchat,socket, setisGroupChat,setactiveClass,activeClass,setopenConversation,data,setchatid,setavatar,setname}:{latestmsg:any;setloading:any;setmsg:any;setuserIdforchat:any;socket:any; setisGroupChat:any;setactiveClass:any,activeClass:any,setname:any;setavatar:any;data:any;setopenConversation:Function,setchatid:any}) => {
    const { user:{id:userid,title}  } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();
    const a =    data?.members?.filter(
                                      (val: any) =>
                                        val._id !== userid
                                    )
      
    const chatId = (id:any) => {
        //dispatch(dashboardApi.util.updateQueryData);
        setmsg([])
        setloading(true);
        setactiveClass(id)
        if(socket.current) {
            socket.current.emit("join chat",id)
        }
        setchatid(id);
        setisGroupChat(data.isGroupChat)
        setname(`${a.length === 1 && a[0].firstName}  ${a.length === 1 && a[0].lastName}`)
        setavatar(a.length === 1 && a[0].avatar)
        setuserIdforchat(a.length === 1 && a[0]._id)
        setopenConversation(true)
     }
   //  console.log(a)
    // console.log(socket)
   
  //  console.log(data)
    return (
        <div className={`flex space-x-4 py-3 cursor-pointer  mb-2  rounded select-none transition-all ${activeClass === data._id && "bg-blue-600 rounded-lg !text-white px-2"}`} onClick={() => chatId(data._id)}>
            <img src={a?.length === 1 && a[0].avatar} alt="user" className='rounded-full w-[45px] h-[45px]'/>
            <div>
                <h4 className={`text-[19px] text-[#232D42] font-nunito ${activeClass === data?._id && " !text-white"}`} >{a?.length === 1 && a[0]?.firstName} {a?.length === 1 && a[0].lastName}</h4>
                <p className={`text-[#8A92A6] text-[16px] font-nunito ${activeClass === data?._id && " !text-white"}`}>{latestmsg?.chat?._id === data._id ? latestmsg?.content?.text : data?.latestMessage?.content?.text}</p>
            </div>
        </div>
    );
};

export default SingleUser;