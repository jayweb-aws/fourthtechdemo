import React,{useState} from 'react';
import ChatRightHeader from './ChatRightHeader/ChatRightHeader';
import Messages from './Messages/Messages';
import BottomOptions from './Options/BottomOptions';

const ChatBoxRightSide = ({setlatestmsg,setloading,loading,msg,setmsg, setopenConversation, userIdforchat,socket,members,chatid,avatar,name,isGroupChat}:{setlatestmsg:any;setloading:any;loading:any;msg:any;setmsg:any,setopenConversation:any;userIdforchat:any;socket:any;members:any;isGroupChat:any;chatid:any;avatar:any;name:string}) => {
    //console.log(chatid)
    const [msgLoadPost, setmsgLoadPost] = useState(false)
   // console.log(msgLoadPost)
    return (
        <div>
            <ChatRightHeader setopenConversation={setopenConversation} userIdforchat={userIdforchat} socket={socket} chatid={chatid} name={name} avatar={avatar} isGroupChat={isGroupChat} members={members}/>
            <Messages setlatestmsg={setlatestmsg} loading={loading} setloading={setloading} msg={msg} setmsg={setmsg}  socket={socket} chatid={chatid} msgLoadPost={msgLoadPost}/>
            <BottomOptions socket={socket} chatid={chatid} setmsgLoadPost={setmsgLoadPost} msgLoadPost={msgLoadPost}/>
        </div>
    );
};

export default ChatBoxRightSide;