import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";

import Image from "next/image";
import logo from "../../assets/logo.png";
import Link from "next/link";

import {
  AiOutlineBars,
  AiOutlineClose,
  AiOutlinePoweroff,
} from "react-icons/ai";
import { IoIosArrowDown, IoMdCart } from "react-icons/io";
import { useAppSelector } from "../../app/hooks";
import UserMenu from "./UserMenu";
import { isAuthorized } from "../../utils/auth";

const menu: {
  name: string;
  url?: string;
  submenus?: {
    name: string;
    url: string;
  }[];
}[] = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About Us",
      url: "/about",
    },

    {
      name: "Services",
      url: "/services",
    },
    {
      name: "Bootcamps",
      url: "/bootcamps",
    },

    {
      name: "Consulting",
      url: "/consulting",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ];

function classNames(...classes: any[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const {
    user: { email, avatar, firstName },
    refresh,
  } = useAppSelector((state) => state.auth);

  return (
    <Popover className="relative bg-white font-nunito z-[999]">
      <div className="mx-auto lg:max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start basis-1/2 lg:w-0 sm:basis-1/12">
            <Link href="/">
              <div className="flex gap-2 items-center min-w-max">
                <Image
                  width={40}
                  height={40}
                  className="h-6 w-6"
                  src={logo}
                  alt=""
                />
                <span className="min-w-max font-bold">Fourth IT Academy</span>
              </div>
            </Link>
          </div>
          <div className="-my-2 pr-2 lg:hidden basis-[100%] flex justify-end">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <AiOutlineBars className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="lg:flex lg:flex-1 lg:justify-center">
            <Popover.Group
              as="nav"
              className="hidden space-x-10 md:hidden lg:flex"
            >
              {menu.map((menuItem, idx) => (
                <Fragment key={idx}>
                  {menuItem.submenus ? (
                    <DropDown subMenus={menuItem} />
                  ) : (
                    <Link href={menuItem?.url ? menuItem?.url : "#"}>
                      <span className=" text-gray-500 hover:text-blue-600 cursor-pointer">
                        {menuItem.name}
                      </span>
                    </Link>
                  )}
                </Fragment>
              ))}
            </Popover.Group>
          </div>

          <div className="hidden lg:flex items-center gap-2">
            {!isAuthorized(email, refresh) ? (
              <Link href="/signin">
                <a className="px-4 py-1 bg-black text-white flex items-center gap-2 rounded">
                  Sign in
                </a>
              </Link>
            ) : (
              <UserMenu
                userEmail={email}
                username={firstName}
                avatar={avatar}
              />
            )}
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition lg:hidden z-50"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center min-w-max">
                  <Image height={45} width={45} src={logo} alt="Your Company" />
                  <span className="min-w-max font-bold">Fourth IT Academy</span>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <AiOutlineClose className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="space-y-6  py-6 px-5">
              <div className="grid grid-cols-1 gap-y-4 gap-x-8">
                {menu.map((menuItem, idx) => (
                  <Link
                    key={idx}
                    href={menuItem.url ? menuItem.url : ""}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {menuItem.name}
                  </Link>
                ))}
              </div>

              <div className="  flex items-center justify-between gap-2">
                {!isAuthorized(email, refresh) ? (
                  <Link href="/signin">
                    <a className="px-4 py-1 bg-black text-white flex items-center gap-2 rounded">
                      <AiOutlinePoweroff />
                      Sign in
                    </a>
                  </Link>
                ) : (
                  <UserMenu
                    userEmail={email}
                    username={firstName}
                    avatar={avatar}
                  />
                )}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

const DropDown = ({
  subMenus,
}: {
  subMenus: {
    name: string;
    url?: string | undefined;
    submenus?: {
      name: string;
      url: string;
    }[];
  };
}) => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={
              "text-gray-500 group inline-flex items-center  bg-white text-base font-medium hover:text-gray-900 focus:outline-none "
            }
          >
            <span>{subMenus.name}</span>
            <IoIosArrowDown
              className={classNames(
                open ? "text-gray-600" : "text-gray-400",
                "ml-2 mt-1 h-4 w-4 group-hover:text-gray-500"
              )}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-max transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  {subMenus?.submenus?.map((item) => (
                    <Link
                      key={item.name}
                      href={item.url}
                      className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                    >
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          {item.name}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};
