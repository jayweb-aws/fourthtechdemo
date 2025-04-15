"use client"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import Router from "next/router"
import { Fragment, useEffect, useState } from "react"
import { BsSearch } from "react-icons/bs"
import { toast } from "react-toastify"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import BorderSvg from "../../../assets/icons/BorderSvg.svg"
import ListCheckSvg from "../../../assets/icons/ListCheckSvg.svg"
import LogoutSvg from "../../../assets/icons/LogoutSvg.svg"
import NotificationSvg from "../../../assets/icons/notification.svg"
import SettingSvg from "../../../assets/icons/SettingSvg.svg"
import UserSvg from "../../../assets/icons/UserSvg.svg"
import { useLogoutMutation } from "../../../feature/api/authApi"
import { logout as logoutAction } from "../../../feature/auth/authSlice"
import Image from "next/image"
import sidebarLogo from "../../../assets/sidebarLogo.svg"
import dot from "../../../assets/dot.svg"
import hamburger from "../../../assets/icons/hamburger.svg"
import { Book, FileText, Lock, Trophy, List, Settings } from "lucide-react"
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ")
}

export default function Example({ show, setShow }: { show: boolean; setShow: any }) {
  const [logout, { isSuccess, isError }] = useLogoutMutation()
  const dispatch = useAppDispatch()
  const [profileOpen, setProfileOpen] = useState(false)
  const [notificationOpen, setNotificationOpen] = useState(false)

  const logoutHandler = () => {
    logout({})
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success("Logged out Successfully!")
      setTimeout(() => {
        Router.push("/")
        dispatch(logoutAction())
      }, 1500)
    } else if (isError) {
      toast.error("Something went wrong while logging out!")
    }
  }, [isSuccess, isError])

  const {
    user: { email, avatar, firstName, roles },
  } = useAppSelector((state) => state.auth)

  const profileMenuItems = [
    { name: "My Account", href: "#", icon: UserSvg, id: 1 },
    {
      name: "Log out",
      href: "#",
      id: 2,
      clickHandler: logoutHandler,
      icon: LogoutSvg,
    },
  ]

  // Close other dropdown when one is opened
  const handleNotificationClick = () => {
    setNotificationOpen(!notificationOpen)
    if (!notificationOpen) setProfileOpen(false)
  }

  const handleProfileClick = () => {
    setProfileOpen(!profileOpen)
    if (!profileOpen) setNotificationOpen(false)
  }

  const notifications = [
    {
      id: 1,
      icon: <FileText className="w-5 h-5 text-purple-500" />,
      iconBg: "bg-purple-100",
      message: (
        <>
          A new module, <strong>Advanced JavaScript Techniques</strong>, has been added to your course{" "}
          <strong>Full-Stack Development</strong>.
        </>
      ),
      time: "2 min ago",
      isUnread: true,
      actions: null,
    },
    {
      id: 2,
      icon: <Book className="w-5 h-5 text-amber-500" />,
      iconBg: "bg-amber-100",
      message: (
        <>
          A new module, <strong>Advanced JavaScript Techniques</strong>, has been added to your course{" "}
          <strong>Full-Stack Development</strong>.
        </>
      ),
      time: "2 min ago",
      isUnread: false,
      actions: (
        <div className="flex gap-3 mt-2">
          <button className="bg-indigo-500 px-4 py-2 rounded-md  justify-center items-center text-white font-poppins text-[14px] font-medium leading-[20px]">Accept</button>
          <button className="text-red-500 px-4 py-2 rounded-md  justify-center items-center  font-poppins text-[14px] font-medium leading-[20px]">Reject</button>
        </div>
      ),
    },
    {
      id: 3,
      icon: <Lock className="w-5 h-5 text-green-600" />,
      iconBg: "bg-green-100",
      message: (
        <>
          Your assignment for <strong>Web Security Basics</strong> is due in <strong>1 day</strong>. Make sure to
          complete it on time!
        </>
      ),
      time: "12 min ago",
      isUnread: false,
      actions: null,
    },
    {
      id: 4,
      icon: <Trophy className="w-5 h-5 text-amber-500" />,
      iconBg: "bg-amber-100",
      message: (
        <>
          Your results for the <strong>Cybersecurity Awareness</strong> quiz are available. Click here to review your
          performance.
        </>
      ),
      time: "1 h ago",
      isUnread: false,
      actions: null,
    },
  ]

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <div className={`px-5 md:px-9 py-6 md:py-4`}>
          {/* Logo, Active status, and hamburger - visible only on mobile */}
          <div className="flex items-center justify-between md:hidden my-5">
            <Image src={sidebarLogo || "/placeholder.svg"} alt="Logo" className="h-8 w-auto" />
            <div className="rounded-[8px] flex gap-2 items-center border border-[#ECF1F3] py-2 px-4">
              <Image src={dot || "/placeholder.svg"} width={7} height={8} alt="Dot" className="h-[8px] w-[7px]" />
              <span className="overflow-hidden text-[#293642] truncate font-[Poppins] text-sm not-italic font-normal leading-[18px]">
                Active
              </span>
            </div>
            <Disclosure.Button className="md:hidden" onClick={() => setShow(!show)}>
              <Image
                src={hamburger || "/placeholder.svg"}
                width={24}
                height={24}
                alt="hamburger"
                className="h-[24px] w-[24px]"
              />
            </Disclosure.Button>
          </div>

          {/* Main content row - responsive for both mobile and desktop */}
          <div className="flex items-center justify-between">
            {/* Search bar - smaller on mobile, fixed width on desktop */}
            <div className="relative bg-[#F8F9FB] rounded-[8px] w-full md:w-[280px] flex-1 md:flex-none">
              <BsSearch className="absolute left-3 top-3 font-bold text-lg text-[#5578A0]" />
              <input
                type="text"
                placeholder="Search...."
                className="py-2 pl-10 pr-4 w-full text-[#5578A0] bg-[#F8F9FB] border border-[#ECF1F3] outline-none rounded-[8px]"
              />
            </div>

            {/* Right side elements - notification and profile */}
            <div className="flex items-center ml-3 md:ml-0 md:justify-end gap-3 md:gap-4">
              {/* Notification */}
              <Menu as="div" className="relative">
                <Menu.Button
                  className="focus:outline-none flex items-center justify-center"
                  onClick={handleNotificationClick}
                >
                  <div className="w-[36px] h-[36px] flex items-center justify-center">
                    <Image
                      width={36}
                      height={36}
                      src={NotificationSvg || "/placeholder.svg"}
                      alt="Notification"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                  show={notificationOpen}
                >
                  {/* Desktop notification dropdown */}
                  <div className="hidden md:block ">
                    <Menu.Items className="absolute right-0 z-10 mt-3 w-[424px]  origin-top-right bg-white border border-[#E8ECEE] rounded-[16px] py-[9px] ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="flex p-4 items-center justify-between ">
                        <h2 className="text-[#293642] text-[18px] font-medium leading-[18px] font-poppins">
                          Notification
                        </h2>
                        <div className="flex items-center gap-4">
                          <Image
                            width={20}
                            height={20}
                            src={ListCheckSvg || "/placeholder.svg"}
                            alt="ListCheck"
                            className=""
                          />
                          <Image
                            width={20}
                            height={20}
                            src={SettingSvg || "/placeholder.svg"}
                            alt="Setting"
                            className=""
                          />
                        </div>
                      </div>
                      <div className="max-h-[400px] overflow-y-auto">
                        {notifications.map((notification) => (
                          <div
                            key={notification.id}
                            className={`flex gap-3 px-4 pt-4 pb-6 ${notification.id === 1 ? "bg-gray-50" : "bg-white"}`}
                          >
                            {/* Unread indicator */}
                            {notification.isUnread && <div className="w-2 h-2 mt-2 rounded-full bg-indigo-600 flex-shrink-0"></div>}
                            {!notification.isUnread && <div className="w-2 h-2 mt-2 rounded-full flex-shrink-0"></div>}

                            {/* Icon */}
                            <div
                              className={`w-8 h-8 rounded-full ${notification.iconBg} flex items-center justify-center flex-shrink-0`}
                            >
                              {notification.icon}
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                              <p className="text-gray-800 text-base">{notification.message}</p>
                              {notification.actions && <div>{notification.actions}</div>}
                              <p className="mt-2 text-[#5578A0] font-poppins text-[12px] font-normal leading-[12px]">{notification.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Menu.Items>
                  </div>
                </Transition>
              </Menu>

              {/* Border - visible only on desktop */}
              <div className="hidden md:block">
                <Image width={10} height={20} src={BorderSvg || "/placeholder.svg"} alt="Border" className="" />
              </div>

              {/* Profile dropdown */}
              <Menu as="div" className="relative">
                <Menu.Button className="focus:outline-none flex items-center gap-3" onClick={handleProfileClick}>
                  <img src={avatar || "/placeholder.svg"} className="w-[36px] h-[36px] rounded-[8px]" />
                  {/* Profile text - visible only on desktop */}
                  <div className="hidden md:flex flex-col items-start gap-1">
                    <h2 className="font-medium text-[#293642] text-[14px] leading-[16px] font-[Poppins]">
                      {firstName}
                    </h2>
                    <p className="text-[#5578A0] font-[400] text-[12px] leading-[12px] font-[Poppins]">{roles}</p>
                  </div>
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                  show={profileOpen}
                >
                  {/* Desktop profile dropdown */}
                  <div className="hidden md:block">
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right bg-white border border-[#E8ECEE] rounded-[15px] py-[9px] px-[9px] ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {profileMenuItems.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              onClick={(e) => {
                                if (item.clickHandler) {
                                  item.clickHandler()
                                }
                                setProfileOpen(false)
                              }}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                item.id === 1 && "text-[#4849E8] font-[Poppins] font-normal ",
                                "py-2 text-sm hover:bg-[#ECF1F3] rounded-[8px] px-[12px] flex gap-3 font-[Poppins] font-normal text-red-600",
                              )}
                            >
                              {item.id === 1 && (
                                <Image
                                  width={20}
                                  height={20}
                                  src={UserSvg || "/placeholder.svg"}
                                  alt="User"
                                  className=""
                                />
                              )}
                              {item.id === 2 && (
                                <Image
                                  width={20}
                                  height={20}
                                  src={LogoutSvg || "/placeholder.svg"}
                                  alt="Logout"
                                  className=""
                                />
                              )}
                              <div className="">{item.name}</div>
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </div>
                </Transition>
              </Menu>
            </div>
          </div>

          {/* Mobile notification dropdown - inside header */}
          {notificationOpen && (
            <div className="md:hidden mt-4 w-full bg-white border border-[#E8ECEE] rounded-[16px] py-[9px] ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
              <div className="flex px-3 py-3 items-center justify-between">
                <h2 className="text-[#293642] text-[18px] font-medium leading-[18px] font-poppins">Notification</h2>
                <div className="flex items-center gap-3">
                  <Image width={20} height={20} src={ListCheckSvg || "/placeholder.svg"} alt="ListCheck" className="" />
                  <Image width={20} height={20} src={SettingSvg || "/placeholder.svg"} alt="Setting" className="" />
                </div>
              </div>
              <div className="max-h-[200px] overflow-y-auto">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`flex gap-3 px-4 pt-4 pb-6 ${notification.id === 1 ? "bg-gray-50" : "bg-white"}`}
                  >
                    {/* Unread indicator */}
                    {notification.isUnread && <div className="w-2 h-2 mt-2 rounded-full bg-indigo-600 flex-shrink-0"></div>}
                    {!notification.isUnread && <div className="w-2 h-2 mt-2 rounded-full flex-shrink-0"></div>}

                    {/* Icon */}
                    <div
                      className={`w-8 h-8 rounded-full ${notification.iconBg} flex items-center justify-center flex-shrink-0`}
                    >
                      {notification.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <p className="text-gray-800 text-base">{notification.message}</p>
                      {notification.actions && <div>{notification.actions}</div>}
                      <p className="mt-2 text-[#5578A0] font-poppins text-[12px] font-normal leading-[12px]">{notification.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Mobile profile dropdown - inside header */}
          {profileOpen && (
            <div className="md:hidden mt-6 w-full bg-white border border-[#E8ECEE] rounded-[15px] p-[9px] ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
              {profileMenuItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      if (item.clickHandler) {
                        item.clickHandler()
                      }
                      setProfileOpen(false)
                    }}
                    className={classNames(
                      item.id === 1 && "text-[#4849E8] font-[Poppins] font-normal ",
                      " text-sm hover:bg-[#ECF1F3] rounded-[8px] p-3 flex gap-3 font-[Poppins] font-normal text-red-600",
                    )}
                  >
                    {item.id === 1 && (
                      <Image width={20} height={20} src={UserSvg || "/placeholder.svg"} alt="User" className="" />
                    )}
                    {item.id === 2 && (
                      <Image width={20} height={20} src={LogoutSvg || "/placeholder.svg"} alt="Logout" className="" />
                    )}
                    <div className="">{item.name}</div>
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </Disclosure>
  )
}