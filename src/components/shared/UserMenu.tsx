/* eslint-disable react-hooks/exhaustive-deps */
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect } from "react";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
import Link from "next/link";
import { useLogoutMutation } from "../../feature/api/authApi";
import { useAppDispatch } from "../../app/hooks";
import { logout as logoutAction } from "../../feature/auth/authSlice";
import toast from 'react-hot-toast';
import Router from "next/router";
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
type UserMenuProps = {
  username?: string;
  avatar?: string;
  userEmail?: string;
};

const UserMenu = (props: UserMenuProps) => {
  const { username, avatar, userEmail } = props;

  const [logout, { isSuccess, isError, error }] = useLogoutMutation();
  const dispatch = useAppDispatch();

  const logoutHandler = () => {
    logout({});
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(logoutAction());
      toast.success("Logged out Successfully!");
      setTimeout(() => {
        Router.push("/");
      }, 1500);
    } else if (isError) {
      toast.error("Something went wrong while logging out!");
      // console.log("logout error", error);
    }
  }, [isSuccess, isError]);

  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="w-full justify-center rounded-full   text-white hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <div className="relative w-[40px] h-[40px] rounded-full overflow-hidden mr-1">
              <Image src={avatar} alt={username} width={40} height={40} />
            </div>
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
          <Menu.Items className="absolute right-[-25px] lg:right-0 xl:right-0 mt-2 w-[280px] z-10 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="p-[15px_10px]">
              <Menu.Item>
                <Link href="/dashboard">
                  <div className="flex w-full items-center text-sm font-medium text-black hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 cursor-pointer">
                    <div className="relative min-w-[40px] min-h-[40px] rounded-full overflow-hidden ">
                      <Image
                        src={avatar}
                        alt={username}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="ml-2">
                      <p className="text-lg font-bold capitalize">{username}</p>
                      <p className="text-[0.700rem] ">{userEmail}</p>
                    </div>
                    {/* <FaAngleDown className="ml-1 h-5 w-5 text-white" /> */}
                  </div>
                </Link>
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (

                  <Link href="/dashboard">
                    <a
                      className={`hover:bg-secondary hover:text-white duration-300 group mt-2 inline-block w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Dashboard

                    </a>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link href="/dashboard/my-account">
                    <a
                      className={`hover:bg-secondary hover:text-white duration-300 group inline-block w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Profile
                    </a>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active ? "bg-secondary text-white" : "text-gray-900"
                      } group flex w-full duration-300 items-center rounded-md px-2 py-2 text-sm`}
                    onClick={() => logoutHandler()}
                  >
                    Logout
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default UserMenu;
