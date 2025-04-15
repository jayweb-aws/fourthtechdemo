import {
  BellIcon,
  ChevronRightIcon,
  InboxIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../app/hooks";
import logo from "../../../assets/logo.png";
import user from "../../../assets/user.png";

import { Disclosure } from "@headlessui/react";
import {
  AiFillSetting,
  AiOutlineAppstore,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineInfoCircle,
  AiOutlineLogout,
  AiOutlineTeam,
  AiOutlineUser,
  AiOutlineUserAdd,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import { BiGroup } from "react-icons/bi";
import { BsFillChatLeftDotsFill, BsMenuButton } from "react-icons/bs";
import { ImFilesEmpty } from "react-icons/im";
import {
  MdNoteAdd,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
  MdQuiz,
} from "react-icons/md";
import { SiPagekit } from "react-icons/si";
import { TfiDashboard } from "react-icons/tfi";
import { VscDeviceCameraVideo, VscPreview } from "react-icons/vsc";
import toast from 'react-hot-toast';
import { useAppDispatch } from "../../../app/hooks";
import { useLogoutMutation } from "../../../feature/api/authApi";
import { logout as logoutAction } from "../../../feature/auth/authSlice";
const MobileAsideBar = () => {
  const [show, setShow] = useState(false);
  let width = "w-[260px]";
  if (!show) {
    width = "-translate-x-[240px] w-0";
  }
  const { avatar, firstName, lastName, userName, roles, studentType } =
    useAppSelector((state) => state.auth.user);
  const router = useRouter();
  const [logout, { isSuccess, isError, error }] = useLogoutMutation();
  const dispatch = useAppDispatch();
  const logoutHandler = () => {
    logout({});
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Logged out Successfully!");
      setTimeout(() => {
        Router.push("/");
        dispatch(logoutAction());
      }, 1500);
    } else if (isError) {
      toast.error("Something went wrong while logging out!");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, isError]);
  return (
    <>
      <div className="z-50">
        {show && (
          <div
            className={`${width} absolute lg:hidden  bg-white z-[1000] h-full `}
          >
            <div
              className={`${width} fixed no-scrollbar h-[100vh] overflow-y-scroll bg-white`}
            >
              <div className="flex justify-center items-center gap-2 mt-5 ">
                <Image
                  src={logo}
                  width={35}
                  height={35}
                  className="h-5 w-6"
                  alt={"logo"}
                />
                <h3 className="uppercase font-semibold text-2xl">FITA </h3>
              </div>
              {/* profile section  */}
              <div className="p-5 flex flex-col gap-2 items-center">
                <div className="border border-blue-600 p-1 rounded-md">
                  <Image
                    src={avatar ? avatar : user}
                    width={60}
                    height={60}
                    alt={"user"}
                    className=""
                  />
                </div>
                <div className="">
                  <h3 className="text-[#001F4D] font-medium text-center">
                    {firstName + " " + lastName}
                  </h3>
                  <Link href={"/profile"}>
                    <p className="text-sm text-[#8A92A6] text-center">
                      @{userName}
                    </p>
                  </Link>
                </div>

                <div className="flex items-center gap-2 mt-4">
                  <button
                    type="button"
                    className="rounded-full bg-[#3A57E8] p-3 text-white hover:text-white focus:outline-none "
                  >
                    <span className="sr-only">View notifications</span>
                    <InboxIcon className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    className="rounded-full bg-[#3A57E8] p-3 text-white hover:text-white focus:outline-none "
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    className="rounded-full bg-[#3A57E8] p-3 text-white hover:text-white focus:outline-none "
                  >
                    <span className="sr-only">View notifications</span>
                    <MapPinIcon className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
                <div className="border-b mt-4 w-full"></div>
              </div>
              {/* menu section  */}
              <div className="flex flex-col gap-3 font-nunito">
                {roles.includes("admin")
                  ? [
                      {
                        name: "Dashboard",
                        id: 1,
                        url: "/dashboard",
                        icon: AiOutlineAppstore,
                        active:
                          router.pathname == "/dashboard"
                            ? "!border-[#3A57E8] !text-[#3A57E8]"
                            : "",
                      },
                      {
                        name: "Users",
                        id: 2,
                        url: "/dashboard/users",
                        icon: AiOutlineUser,
                        active:
                          router.pathname == "/dashboard/users"
                            ? "!border-[#3A57E8] !text-[#3A57E8]"
                            : "",
                      },
                      {
                        name: "Messages",
                        id: 3,
                        url: "/dashboard/messages",
                        icon: BsFillChatLeftDotsFill,
                        active:
                          router.pathname == "/dashboard/messages"
                            ? "!border-[#3A57E8] !text-[#3A57E8]"
                            : "",
                      },
                      {
                        name: "Courses",
                        id: 4,
                        url: "/dashboard/courses",
                        icon: BsMenuButton,
                        active:
                          router.pathname === "/dashboard/courses" ||
                          router.pathname === "/dashboard/course/creation" ||
                          router.pathname === "/dashboard/course/edit/[editId]"
                            ? "!border-[#3A57E8] !text-[#3A57E8]"
                            : "",
                      },
                      {
                        name: "Students",
                        id: 5,
                        url: "/dashboard/students",
                        icon: AiOutlineTeam,
                        active:
                          router.pathname == "/dashboard/students"
                            ? "!border-[#3A57E8] !text-[#3A57E8]"
                            : "",
                      },
                      {
                        name: "Instructors",
                        id: 6,
                        url: "/dashboard/instructors",
                        icon: AiOutlineUsergroupAdd,
                        active:
                          router.pathname == "/dashboard/instructors"
                            ? "!border-[#3A57E8] !text-[#3A57E8]"
                            : "",
                      },
                      {
                        name: "Reviews",
                        id: 7,
                        url: "/dashboard/review",
                        icon: VscPreview,
                        active:
                          router.pathname == "/dashboard/review"
                            ? "!border-[#3A57E8] !text-[#3A57E8]"
                            : "",
                      },
                      {
                        name: "Enrollment",
                        id: 5,
                        url: "/dashboard/enrollment",
                        icon: BsMenuButton,
                        active:
                          router.pathname == "/dashboard/enrollment"
                            ? "!border-[#3A57E8] !text-[#3A57E8]"
                            : "",
                      },
                      {
                        name: "Fourth IT",
                        id: 6,
                        url: "/dashboard/assignment/all-assignments",
                        icon: TfiDashboard,
                        active:
                          router.pathname ==
                          "/dashboard/assignment/all-assignments",
                        children: [
                          {
                            name: "Resources",
                            url: "/dashboard/fourthit/resource",
                            active:
                              router.pathname == "/dashboard/fourthit/resource"
                                ? "!border-[#3A57E8] !text-[#3A57E8]"
                                : "",
                          },
                          {
                            name: "Types",
                            url: "/dashboard/fourthit/types",
                            active:
                              router.pathname == "/dashboard/fourthit/types"
                                ? "!border-[#3A57E8] !text-[#3A57E8]"
                                : "",
                          },
                          {
                            name: "Partners",
                            url: "/dashboard/fourthit/partners",
                            active:
                              router.pathname == "/dashboard/fourthit/partners"
                                ? "!border-[#3A57E8] !text-[#3A57E8]"
                                : "",
                          },
                          {
                            name: "Managements",
                            url: "/dashboard/fourthit/managements",
                            active:
                              router.pathname ==
                              "/dashboard/fourthit/managements"
                                ? "!border-[#3A57E8] !text-[#3A57E8]"
                                : "",
                          },
                        ],
                      },
                      {
                        name: "My Account",
                        id: 8,
                        url: "/dashboard/my-account",
                        icon: AiOutlineUserAdd,
                        active:
                          router.pathname == "/dashboard/my-account"
                            ? "!border-[#3A57E8] !text-[#3A57E8]"
                            : "",
                      },
                    ].map((single, idx) => <Item key={idx} item={single} />)
                  : roles.includes("instructor")
                  ? [
                      {
                        name: "Dashboard",
                        id: 1,
                        url: "/dashboard",
                        icon: AiOutlineAppstore,
                        active:
                          router.pathname == "/dashboard"
                            ? "!border-[#3A57E8] !text-[#3A57E8]"
                            : "",
                      },
                      {
                        name: "My Courses",
                        id: 2,
                        url: "/dashboard/courses",
                        icon: AiOutlineUser,
                        active:
                          router.pathname == "/dashboard/courses" ||
                          router.pathname == "/dashboard/course/creation" ||
                          router.pathname == "/dashboard/course/edit/[editId]"
                            ? "!border-[#3A57E8] !text-[#3A57E8]"
                            : "",
                      },
                      {
                        name: "Quiz",
                        id: 3,
                        url: "/dashboard/quiz",
                        icon: MdQuiz,
                        active:
                          router.pathname == "/dashboard/quiz/all-quiz" ||
                          router.pathname == "/dashboard/quiz/quiz-creation" ||
                          router.pathname == "/dashboard/quiz"
                            ? "!border-[#3A57E8] !text-[#3A57E8]"
                            : "",
                        children: [
                          {
                            name: "All Quiz",
                            url: "/dashboard/quiz",
                            active:
                              router.pathname == "/dashboard/quiz"
                                ? "!border-[#3A57E8] !text-[#3A57E8]"
                                : "",
                          },
                          {
                            name: "Add Quiz",
                            url: "/dashboard/quiz/quiz-creation",
                            active:
                              router.pathname == "/dashboard/quiz/quiz-creation"
                                ? "!border-[#3A57E8] !text-[#3A57E8]"
                                : "",
                          },
                          {
                            name: "Quiz Result",
                            url: "/dashboard/quiz/quiz-result",
                            active:
                              router.pathname == "/dashboard/quiz/quiz-result"
                                ? "!border-[#3A57E8] !text-[#3A57E8]"
                                : "",
                          },
                        ],
                      },
                      {
                        name: "Messages",
                        id: 4,
                        url: "/dashboard/messages",
                        icon: BsFillChatLeftDotsFill,
                        active:
                          router.pathname == "/dashboard/messages"
                            ? "!border-[#3A57E8] text-[#3A57E8]"
                            : "",
                      },
                      {
                        name: "Students",
                        id: 5,
                        url: "/dashboard/students",
                        icon: BsMenuButton,
                        active:
                          router.pathname == "/dashboard/students"
                            ? "!border-[#3A57E8] !text-[#3A57E8]"
                            : "",
                      },
                      {
                        name: "Assignments",
                        id: 6,
                        url: "/dashboard/assignment/all-assignments",
                        icon: AiOutlineTeam,
                        active:
                          router.pathname ==
                            "/dashboard/assignment/all-assignments" ||
                          router.pathname ===
                            "/dashboard/assignment-creation" ||
                          router.pathname ===
                            "/dashboard/assignment/submitassignment" ||
                          router.pathname ===
                            "/dashboard/assignmentmarking/[id]" ||
                          router.pathname ===
                            "/dashboard/assignment/edit/[id]" ||
                          router.pathname ===
                            "/dashboard/assignments/[singleAssignment]"
                            ? "!border-[#3A57E8] !text-[#3A57E8]"
                            : "",
                      },

                      {
                        name: "Live Class",
                        id: 7,
                        url: "/dashboard/live-class-with-screen",
                        icon: VscDeviceCameraVideo,
                        active:
                          router.pathname == "/dashboard/live-class-with-screen"
                            ? "!border-[#3A57E8] !text-[#3A57E8]"
                            : "",
                      },
                      {
                        name: "Files",
                        id: 8,
                        url: "/dashboard/files",
                        icon: ImFilesEmpty,
                        active:
                          router.pathname == "/dashboard/files"
                            ? "!border-[#3A57E8] !text-[#3A57E8]"
                            : "",
                      },
                      {
                        name: "Grades",
                        id: 9,
                        url: "/dashboard/grades",
                        icon: MdNoteAdd,
                        active:
                          router.pathname == "/dashboard/grades"
                            ? "!border-[#3A57E8] !text-[#3A57E8]"
                            : "",
                        children: [
                          {
                            name: "All Grade",
                            url: "/dashboard/grades",
                            active:
                              router.pathname == "/dashboard/grades"
                                ? "!border-[#3A57E8] !text-[#3A57E8]"
                                : "",
                          },
                          {
                            name: "Grade",
                            url: "/dashboard/student/all",
                            active:
                              router.pathname == "/dashboard/student/all"
                                ? "!border-[#3A57E8] !text-[#3A57E8]"
                                : "",
                          },
                        ],
                      },
                      {
                        name: "Reviews",
                        id: 10,
                        url: "/dashboard/review",
                        icon: VscPreview,
                        active:
                          router.pathname == "/dashboard/review"
                            ? "!border-[#3A57E8] !text-[#3A57E8]"
                            : "",
                      },
                      {
                        name: "Page",
                        id: 11,
                        url: "/dashboard/page",
                        icon: SiPagekit,
                        active:
                          router.pathname == "/dashboard/page" ||
                          router.pathname == "/dashboard/page-overview/[id]" ||
                          router.pathname == "/dashboard/page/edit/[id]"
                            ? "!border-[#3A57E8] !text-[#3A57E8]"
                            : "",
                      },

                      {
                        name: "My Account",
                        id: 12,
                        url: "/dashboard/my-account",
                        icon: AiFillSetting,
                        active:
                          router.pathname == "/dashboard/my-account"
                            ? "!border-[#3A57E8] !text-[#3A57E8]"
                            : "",
                      },
                    ].map((single, idx) => <Item key={idx} item={single} />)
                  : roles.includes("student") && studentType === "self-pace"
                  ? [
                      {
                        name: "Dashboard",
                        id: 1,
                        url: "/dashboard",
                        icon: AiOutlineAppstore,
                        active:
                          router.pathname == "/dashboard"
                            ? "!border-[#3A57E8] !text-[#3A57E8]"
                            : "",
                      },
                      {
                        name: "My Courses",
                        id: 2,
                        url: "/dashboard/my-course",
                        icon: AiOutlineUser,
                        active:
                          router.pathname == "/dashboard/my-course" ||
                          router.pathname === "/dashboard/my-course/[id]"
                            ? "!border-[#3A57E8] !text-[#3A57E8]"
                            : "",
                      },
                      {
                        name: "Files",
                        id: 5,
                        url: "/dashboard/files",
                        icon: ImFilesEmpty,
                        active:
                          router.pathname == "/dashboard/files"
                            ? "!border-[#3A57E8] !text-[#3A57E8]"
                            : "",
                      },
                      {
                        name: "Messages",
                        id: 6,
                        url: "/dashboard/messages",
                        icon: BsFillChatLeftDotsFill,
                        active:
                          router.pathname == "/dashboard/messages"
                            ? "!border-[#3A57E8] !text-[#3A57E8]"
                            : "",
                      },
                      {
                        name: "My Account",
                        id: 7,
                        url: "/dashboard/my-account",
                        icon: AiFillSetting,
                        active:
                          router.pathname == "/dashboard/my-account"
                            ? "!border-[#3A57E8] !text-[#3A57E8]"
                            : "",
                      },
                    ].map((single, idx) => <Item key={idx} item={single} />)
                  : roles.includes("student") &&
                    studentType === "instructor-led" &&
                    [
                      {
                        name: "Dashboard",
                        id: 1,
                        url: "/dashboard",
                        icon: AiOutlineAppstore,
                      },
                      {
                        name: "My Courses",
                        id: 2,
                        url: "/dashboard/my-course",
                        icon: AiOutlineUser,
                        active:
                          router.pathname == "/dashboard/my-course"
                            ? "!border-[#3A57E8] !text-[#3A57E8]"
                            : "",
                      },
                      {
                        name: "Assignment",
                        id: 3,
                        url: "/dashboard/assignment/all-assignments",
                        icon: BiGroup,
                        active:
                          router.pathname ==
                            "/dashboard/assignment/all-assignments" ||
                          router.pathname ==
                            "/dashboard/assignment/[courseId]/[id]" ||
                          router.pathname ==
                            "/dashboard/assignment-submission/[courseId]/[assignmentId]"
                            ? "!border-[#3A57E8] !text-[#3A57E8]"
                            : "",
                      },
                      {
                        name: "Quiz",
                        id: 4,
                        url: "/dashboard/quiz/all-quizes",
                        icon: MdQuiz,
                        active:
                          router.pathname == "/dashboard/quiz/all-quizes"
                            ? "!border-[#3A57E8] !text-[#3A57E8]"
                            : "",
                      },
                      {
                        name: "Messages",
                        id: 5,
                        url: "/dashboard/messages",
                        icon: BsFillChatLeftDotsFill,
                        active:
                          router.pathname == "/dashboard/messages"
                            ? "!border-[#3A57E8] !text-[#3A57E8]"
                            : "",
                      },
                      {
                        name: "Files",
                        id: 6,
                        url: "/dashboard/files",
                        icon: ImFilesEmpty,
                        active:
                          router.pathname == "/dashboard/files"
                            ? "!border-[#3A57E8] !text-[#3A57E8]"
                            : "",
                      },
                      {
                        name: "Live Class",
                        id: 7,
                        url: "/dashboard/my-account",
                        icon: VscDeviceCameraVideo,
                      },
                      {
                        name: "Grades",
                        id: 8,
                        url: "/dashboard/grades",
                        icon: MdNoteAdd,
                      },
                      {
                        name: "My Account",
                        id: 10,
                        url: "/dashboard/my-account",
                        icon: AiFillSetting,
                        active:
                          router.pathname == "/dashboard/my-account"
                            ? "!border-[#3A57E8] !text-[#3A57E8]"
                            : "",
                      },
                    ].map((single, idx) => <Item key={idx} item={single} />)}
              </div>
              <div className="border-b mt-4 w-full px-5"></div>
              <div className="px-5 pt-3">
                <h3 className="text-[#232D42] font-semibold uppercase">
                  Other
                </h3>
              </div>
              <div className="">
                {[
                  {
                    name: "Sign Out",
                    id: 1,
                    Icons: AiOutlineLogout,
                    clickHandler: logoutHandler,
                  },
                  { name: "Help", id: 2, Icons: AiOutlineInfoCircle },
                ].map(({ name, id, Icons, clickHandler }) => (
                  <div
                    key={id}
                    className="border-l-2 border-[#8A92A6] hover:border-[#3A57E8] px-10 py-2 flex justify-between items-center text-[#8A92A6] hover:text-[#3A57E8] group/item"
                  >
                    <div
                      className="flex items-center gap-2 cursor-pointer"
                      onClick={clickHandler}
                    >
                      <Icons className="h-5 w-5" />
                      <h4 className="text-[16px] font-medium  ">{name}</h4>
                    </div>
                    <ChevronRightIcon className="h-5 w-5  group-hover/item:text-gray-700 invisible group-hover/item:visible" />
                  </div>
                ))}
              </div>
              <div
                onClick={() => setShow(!show)}
                className={`absolute top-3 ${
                  !show ? "right-10" : "right-0"
                } rounded-full bg-blue-800 text-white p-3 cursor-pointer`}
              >
                <AiOutlineArrowLeft className="text-lg" />
              </div>
            </div>
          </div>
        )}
      </div>
      {!show && (
        <button
          onClick={() => setShow(!show)}
          className="rounded-full bg-blue-800 text-white text-center items-center justify-center flex w-10 h-10 font-semibold mt-3 fixed left-2 cursor-pointer lg:hidden"
        >
          <AiOutlineArrowRight className="text-lg inline-block" />
        </button>
      )}
    </>
  );
};

export default MobileAsideBar;

const Item = ({ item }: any) => {
  const [show, setShow] = useState(false);
  return item.children ? (
    <IlearnDropdown dropdowns={item.children} option={item} />
  ) : (
    <Link href={item.url}>
      <a
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className={`${item.active} border-l-2 border-[#fff] hover:border-[#3A57E8] px-10 py-2 flex justify-between items-center text-[#8A92A6] hover:text-[#3A57E8] group/item cursor-pointer`}
      >
        <div className="flex items-center gap-2">
          <item.icon className="w-5 h-5" />
          <h4 className="text-[16px] font-medium  ">{item.name}</h4>
        </div>
        {show && <ChevronRightIcon className="h-5 w-5" />}
      </a>
    </Link>
  );
};
export const IlearnDropdown = (props: {
  dropdowns: { name: string; url: string; active: string }[];
  option: { name: string; url: string; id: number; icon: any; active: string };
}) => {
  const { dropdowns, option } = props;
  return (
    <Disclosure as="div" className="">
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full  justify-between items-center  text-left text-[#8A92A6] hover:text-[#3A57E8] cursor-pointer px-10 py-2">
            <div className="flex justify-between items-center  gap-2">
              <option.icon className="w-5 h-5" />

              <h1 className=" ">{option.name}</h1>
            </div>
            <span className=" ">
              {open ? (
                <MdOutlineKeyboardArrowDown className="w-6 h-6" />
              ) : (
                <MdOutlineKeyboardArrowUp className="w-6 h-6" />
              )}
            </span>
          </Disclosure.Button>
          <Disclosure.Panel className=" flex flex-col justify-center items-left w-full pl-[70px] text-[#8A92A6] hover:text-[#3A57E8]cursor-pointer mt-[10px]">
            {dropdowns.map((dropdown) => (
              <div
                className={`${dropdown?.active} mb-[10px] text-[#8A92A6] hover:text-[#3A57E8] cursor-pointer text-[14px]`}
                key={dropdown.name}
              >
                <Link href={dropdown.url}>{dropdown.name}</Link>
              </div>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
