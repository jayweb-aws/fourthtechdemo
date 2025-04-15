import React, { useState, useRef, useEffect } from 'react';
import ChatBoxLeftSide from './ChatBoxLeftSide/ChatBoxLeftSide';
import ChatBoxRightSide from './ChatBoxRightSide/ChatBoxRightSide';
import { io } from 'socket.io-client';
import { useAppSelector } from "../../../../../app/hooks";
//@ts-ignore

const MessagesGrid = () => {
  const { auth }: any = useAppSelector((state) => state);
  const [chatid, setchatid] = useState("")
  const [openConversation, setopenConversation] = useState(false);
  const [name, setname] = useState("");
  const [avatar, setavatar] = useState("");
  const [isGroupChat, setisGroupChat] = useState(null)
  const socket: any = React.useRef();
  const [members, setmembers] = useState([]);
  const [userIdforchat, setuserIdforchat] = useState("")
  const [msg, setmsg] = useState<any>([])
  const [loading, setloading] = useState(false)
  const [latestmsg, setlatestmsg] = useState({})


  //const ab = {process.env.NEXT_PUBLIC_API_BASE_URL}
  //  console.log(process.env.NEXT_PUBLIC_API_BASE_URL)
  React.useEffect(() => {
    //@ts-ignore
    socket.current = io(process.env.NEXT_PUBLIC_API_BASE_URL, {
      auth: {
        data: { user: auth?.user }
      },
      query: auth?.user?._id
    });
    if (auth?.user?._id) {
      socket?.current?.emit("setup", auth?.user);
    }


    return () => { socket.current?.disconnect() };
  }, [auth?.user?.email]);


  useEffect(() => {
    socket.current.emit("online_check", userIdforchat)
  }, [userIdforchat])
  return (
    <div className=''>
      <div className="grid grid-cols-3 ">
        <div className="bg-white p-3 md:p-6 rounded-lg col-span-3 md:col-span-1">
          <ChatBoxLeftSide latestmsg={latestmsg} setloading={setloading} setmsg={setmsg} setuserIdforchat={setuserIdforchat} socket={socket} setmembers={setmembers} setopenConversation={setopenConversation} setchatid={setchatid} setavatar={setavatar} setname={setname} setisGroupChat={setisGroupChat} />
        </div>
        <div className="col-span-3 md:col-span-2 rounded-lg p-6  bg-[#F0F2F5]">
          {
            openConversation ? <ChatBoxRightSide setlatestmsg={setlatestmsg} loading={loading} setloading={setloading} msg={msg} setmsg={setmsg} setopenConversation={setopenConversation} isGroupChat={isGroupChat} userIdforchat={userIdforchat} socket={socket} members={members} chatid={chatid} name={name} avatar={avatar} /> :
              (
                <div className='flex justify-center items-center h-full bg-[#F0F2F5]'>
                  <div>
                    <h2 className='font-nunito lg:text-2xl xl:text-3xl '>Select a chat or start a new conversation</h2>
                  </div>
                </div>
              )
          }
        </div>
      </div>
    </div>
  );
};

export default MessagesGrid;