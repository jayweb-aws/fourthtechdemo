import React, { Fragment, useEffect, useState } from 'react';
import { BiDotsVerticalRounded, BiPhoneCall, BiVideo } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import { toast } from "react-toastify"
import { Menu, Transition } from '@headlessui/react';
import { AiOutlineDelete, AiOutlineUserAdd } from "react-icons/ai";
import { useDeleteChatMutation } from '../../../../../../../feature/api/dashboardApi';
import Member from "./Member";
import { useAppSelector } from "../../../../../../../app/hooks";
import moment from "moment"

const ChatRightHeader = ({ setopenConversation, isGroupChat, userIdforchat, socket, members, name, avatar, chatid }: { setopenConversation: any; isGroupChat: any; userIdforchat: any; socket: any; members: any; name: string; avatar: string; chatid: string }) => {
  const [deleteChat, { isError, error, isLoading, isSuccess }] = useDeleteChatMutation();
  const [showModal, setshowModal] = useState(false);
  const { user: { roles } }: any = useAppSelector((state) => state.auth);
  const [info, setinfo] = useState<any>({})

  const DeleteChatHandler = async () => {
    //   console.log(chatid)
    await deleteChat(chatid)
  };
  useEffect(() => {
    if (isError) {
      toast.error((error as any).data.message);
      // console.log(error);
    } else if (isSuccess) {
      setopenConversation(false)
      toast.success("Deleted successfully!");

    }
  }, [isError, isSuccess])
  const MemberHandler = () => {
    setshowModal(true)
  }
  const chatMenu = [
    !roles.includes("student") && { name: 'Delete', href: '#', clickHandler: DeleteChatHandler, icon: <AiOutlineDelete /> },
    isGroupChat && { name: 'Member', href: '#', icon: <AiOutlineUserAdd />, clickHandler: MemberHandler },
  ];

  // console.log(members)


  useEffect(() => {
    socket.current.emit("online_check", userIdforchat)
  }, [userIdforchat])


  if (socket.current) {
    socket.current.on("online_check", (userInfo: any) => { setinfo(userInfo) })
  }

  //  console.log(info?.lastOnline)
  return (
    <div className='grid grid-cols-2 gap-4 border-b pb-3 items-center  '>
      <Member
        show={showModal}
        setShowModal={setshowModal}
        members={members}
        chatid={chatid}
        socket={socket}
      />
      <div className='md:flex md:space-x-4 py-3'>
        <img src={avatar} alt="user" className='rounded-full w-[30px] h-[30px] md:w-[45px] md:h-[45px]' />
        <div>
          <h4 className='text-[19px] text-[#3A57E8]'>{name}</h4>
          <p className='text-[#8A92A6] text-[16px]'>   {!isGroupChat && (info?.online ? (<div><span className='w-2 h-2 bg-green-500 rounded-full inline-block'></span> Online</div>) : <div>Last online {moment(info?.lastOnline).calendar() === "Invalid date" ? "Offline" : moment(info?.lastOnline).calendar()} </div>)} </p>
        </div>
      </div>
      <div className='flex items-center justify-end'>

        <div className='flex space-x-2'>
          <button className='bg-[#3A57E8] p-2 rounded-full text-xl'><BiPhoneCall className='text-white' /></button>
          <button className='bg-[#3A57E8] p-2 rounded-full text-xl'><BiVideo className='text-white' /></button>
          {/* chat dropdown */}
          <Menu as="div" className="relative ">
            <div>
              <Menu.Button
                className="rounded-full bg-[#3A57E8] p-3 text-white hover:text-white focus:outline-none ">
                <span className="sr-only">Open chat menu</span>
                <BiDotsVerticalRounded className="h-4 w-4" aria-hidden="true" />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {chatMenu.map((item) => (
                  <Menu.Item key={item.name}>
                    {({ active }) => (
                      <a
                        onClick={item.clickHandler}
                        className={`bg-gray-100  cursor-pointer block px-4 py-2 text-sm text-gray-700`}
                      >
                        <div className='flex gap-1 items-center'>
                          {item.icon}   {item.name}
                        </div>
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default ChatRightHeader;
