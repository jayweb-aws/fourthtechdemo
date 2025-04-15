import React,{useEffect,useState} from 'react';
import Message from './Message/Message';
import {useGetMessageQuery} from "../../../../../../../feature/api/dashboardApi"
import { useAppSelector } from "../../../../../../../app/hooks";
import { useAppDispatch } from "../../../../../../../app/hooks";
import {Spinner} from "flowbite-react"
import _ from "lodash";
import dashboardApi from "../../../../../../../feature/api/dashboardApi";



const Messages = ({setmsg,
    msg,
    loading,
    setloading,
    msgLoadPost,
    chatid,
    socket,
    setlatestmsg
    }:{msg:any;
        setlatestmsg:any;
        setmsg:any;
        msgLoadPost:any;
        socket:any;chatid:any;
        loading:any;
        setloading:any
    }) => {

    let { data=[], isSuccess,refetch, isError, isLoading=true } = useGetMessageQuery(chatid);
    const { user:{id,title}  } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();
    
   
    

 
   
   
  
 
    useEffect(() => {
        if(socket.current) {
            
            socket.current.off("message_recieved").on("message_recieved",(val:any) => {
               //  console.log(val)
                 setlatestmsg(val)
                const array = (msg?.length > 0 ? [...msg,val] :data?.data?.length? [...data?.data,val]:[val])

                const unique = _.uniqBy(array,(item) => {
                    return item._id
                })
                // return unique
              
                  setmsg(unique)
              
         })
        }
    })
 
    useEffect(() => {
        if(isLoading){
          setloading(true)
        }
        if(loading) {
            refetch()
        }
        if(isSuccess){
            setTimeout(() => {
                setloading(false)
            }, 1500);
        }
     },[isSuccess,isLoading,loading])
    return (

        <div className="relative messages-scroll w-full h-[calc(100vh_-_160px)] p-6 overflow-y-auto flex flex-col-reverse">
            <ul className="space-y-2">
                {
                    loading ? <div className='flex justify-center items-center'><Spinner aria-label="Default status example" /></div>:  
                    
                    (
                        msg?.length > 0  ?  msg.filter((item:any) => (chatid === item?.chat?._id)).map((val:any) =>(
                            <Message justify={val?.sender?.id === id ? "end" : "start"} data={val} key={val?._id}/>
                        )):

                       data?.data?.length > 0 &&  
                        data?.data?.map((val:any) =>(
                            <Message justify={val.sender?.id === id ? "end" : "start"} data={val} key={val?._id}/>
                        ))

                    )
                      
                    
                
                }
                
            </ul>
        </div>
    );
};

export default Messages;