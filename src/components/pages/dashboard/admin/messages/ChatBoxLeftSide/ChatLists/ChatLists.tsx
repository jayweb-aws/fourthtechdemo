import { Spinner } from "flowbite-react";
import _ from "lodash";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../../../../../app/hooks";
import {
  useGetChatGroupQuery,
  useGetChatPeopleQuery,
} from "../../../../../../../feature/api/dashboardApi";
import SingleGroup from "./SingleGroup/SingleGroup";
import SingleUser from "./SingleUser/SingleUser";

const ChatLists = ({
  setmsg,
  setuserIdforchat,
  setloading,
  socket,
  setmembers,
  setopenConversation,
  setchatid,
  setavatar,
  setname,
  setisGroupChat,
  latestmsg,
}: {
  setmsg: any;
  setuserIdforchat: any;
  latestmsg: any;
  setloading: any;
  socket: any;
  setmembers: any;
  setisGroupChat: any;
  setname: any;
  setavatar: any;
  setopenConversation: Function;
  setchatid: any;
}) => {
  const [chatAndGroup, setChatAndGroup] = useState<boolean>(false);
  const { id, roles } = useAppSelector((state) => state.auth.user);
  const [active, setActive] = useState<number>(1);
  const {
    data = [],
    isSuccess,
    isError,
    isLoading,
  } = useGetChatPeopleQuery({});
  const {
    data: groupData,
    isSuccess: groupSuccess,
    isError: groupError,
    isLoading: groupLoading,
  } = useGetChatGroupQuery({});
  const [activeClass, setactiveClass] = useState("");
  const [socketUser, setsocketUser] = useState<any>([]);
  const [socketgroup, setsocketgroup] = useState<any>([]);

  const handleChatAndGroup = (id: number) => {
    setChatAndGroup(!chatAndGroup);
    setActive(id);
  };

  //console.log(data)

  useEffect(() => {
    if (socket.current) {
      socket.current
        .off("get_single_people_chat_list_recieved")
        .on("get_single_people_chat_list_recieved", (chatInfo: any) => {
          const array =
            socketUser?.length > 0
              ? [...socketUser, chatInfo?.data]
              : data?.data?.length
              ? [...data?.data, chatInfo?.data]
              : [chatInfo?.data];

          const unique = _.uniqBy(array, (item) => {
            return item?._id;
          });
          // return unique

          setsocketUser(unique);
        });
      roles.includes("student") && setActive(2);
    }
    if (socket.current) {
      socket.current
        .off("get_group_chat_list_recieved")
        .on("get_group_chat_list_recieved", (chatInfo: any) => {
          const array =
            socketgroup?.length > 0
              ? [...socketgroup, chatInfo?.data]
              : groupData?.data?.length
              ? [...groupData?.data, chatInfo?.data]
              : [chatInfo?.data];

          const unique = _.uniqBy(array, (item) => {
            return item?._id;
          });
          // return unique

          setsocketgroup(unique);
        });
    }
  });
  //console.log(socket)
  // console.log(`get user chat people ${data}`);
  // console.log( groupData.data.length)

  // console.log(socketUser)
  return (
    <div>
      <div className="flex justify-between mb-5 border-b border-gray-200">
        {!roles.includes("student") && (
          <h4
            onClick={() => handleChatAndGroup(1)}
            className={`${
              active === 1 && "border-b-[2px] border-[#232D42]"
            } cursor-pointer font-nunito`}
          >
            Private
          </h4>
        )}
        <h4
          onClick={() => handleChatAndGroup(2)}
          className={`${
            active === 2 && "border-b-[2px] border-[#232D42]"
          } cursor-pointer font-nunito`}
        >
          Groups
        </h4>
      </div>
      <div>
        <div className="overflow-auto chat-scroll w-full px-1 rounded h-[calc(100vh_-_129px)]">
          {!roles.includes("student") && active === 1 && (
            <div>
              {isLoading ? (
                <div className="flex justify-center items-center">
                  <Spinner aria-label="Default status example" />
                </div>
              ) : socketUser?.length > 0 ? (
                socketUser
                  .sort((a: any, b: any) => {
                    a.createdAt - b.createdAt;
                  })
                  .map((val: any) => (
                    <SingleUser
                      latestmsg={latestmsg}
                      setloading={setloading}
                      setmsg={setmsg}
                      setuserIdforchat={setuserIdforchat}
                      socket={socket}
                      key={val?._id}
                      setisGroupChat={setisGroupChat}
                      setactiveClass={setactiveClass}
                      activeClass={activeClass}
                      data={val}
                      setopenConversation={setopenConversation}
                      setchatid={setchatid}
                      setavatar={setavatar}
                      setname={setname}
                    />
                  ))
              ) : data?.data?.length > 0 ? (
                data?.data?.map((val: any) => (
                  <SingleUser
                    latestmsg={latestmsg}
                    setloading={setloading}
                    setmsg={setmsg}
                    setuserIdforchat={setuserIdforchat}
                    socket={socket}
                    key={val._id}
                    setisGroupChat={setisGroupChat}
                    setactiveClass={setactiveClass}
                    activeClass={activeClass}
                    data={val}
                    setopenConversation={setopenConversation}
                    setchatid={setchatid}
                    setavatar={setavatar}
                    setname={setname}
                  />
                ))
              ) : (
                <div className="h-[50vh] flex justify-center items-center">
                  <p>No data available!</p>
                </div>
              )}
            </div>
          )}
          {active === 2 && (
            <div>
              {groupLoading ? (
                <div className="flex justify-center items-center">
                  <Spinner aria-label="Default status example" />
                </div>
              ) : socketgroup?.length > 0 ? (
                socketgroup.map((val: any) => (
                  <SingleGroup
                    setloading={setloading}
                    setmsg={setmsg}
                    setuserIdforchat={setuserIdforchat}
                    socket={socket}
                    key={val._id}
                    setmembers={setmembers}
                    setisGroupChat={setisGroupChat}
                    setactiveClass={setactiveClass}
                    activeClass={activeClass}
                    data={val}
                    setopenConversation={setopenConversation}
                    setchatid={setchatid}
                    setavatar={setavatar}
                    setname={setname}
                  />
                ))
              ) : groupData?.data?.length > 0 ? (
                groupData?.data?.map((val: any) => (
                  <SingleGroup
                    setloading={setloading}
                    setmsg={setmsg}
                    setuserIdforchat={setuserIdforchat}
                    socket={socket}
                    key={val._id}
                    setmembers={setmembers}
                    setisGroupChat={setisGroupChat}
                    setactiveClass={setactiveClass}
                    activeClass={activeClass}
                    data={val}
                    setopenConversation={setopenConversation}
                    setchatid={setchatid}
                    setavatar={setavatar}
                    setname={setname}
                  />
                ))
              ) : (
                <div className="h-[50vh] flex justify-center items-center">
                  <p>No data available!</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatLists;
