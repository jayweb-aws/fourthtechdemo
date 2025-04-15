import { Disclosure } from "@headlessui/react";
import {
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  AiOutlineInfoCircle,
  AiOutlineLogout,
} from "react-icons/ai";
import toast from 'react-hot-toast';
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import sidebarLogo from "../../../assets/sidebarLogo.svg";
import SidebarOpen from "../../../assets/SidebarOpen.svg";
import { useLogoutMutation } from "../../../feature/api/authApi";
import { logout as logoutAction } from "../../../feature/auth/authSlice";
import MobileAsideBar from "./MobileAsideBar";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { getMenuItemsByRole } from "./menu-config";
import { ChevronDown } from "lucide-react"

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface MenuItem {
  name: string;
  url: string;
  icon: React.ElementType;
  badge?: number;
  children?: Array<{
    name: string;
    url: string;
  }>;
}

interface MenuSection {
  id: number;
  label: string;
  items: MenuItem[];
}

interface MenuItemProps {
  item: MenuItem;
  pathname: string;
  showText: boolean;
}

const AsideBar = ({ show, setShow }: { show: boolean; setShow: any }) => {
  const { avatar, firstName, lastName, userName, roles, studentType } =
    useAppSelector((state) => state.auth.user);

  let width = "w-[260px]";
  if (!show) {
    width = "-translate-x-[240px] w-0";
  }
  const router = useRouter();
  const pathname = window.location.pathname

  const [logout, { isSuccess, isError, error }] = useLogoutMutation();
  const dispatch = useAppDispatch();

  const menuItems = getMenuItemsByRole(roles[0], studentType)
  console.log("🚀 ~ AsideBar ~ menuItems:", menuItems)

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
  }, [isSuccess, isError]);

  function isMenuSection(section: MenuItem | MenuSection): section is MenuSection {
    return 'items' in section;
  }
  return (
    <div
      className={`flex flex-col gap-3 fixed h-full transition-all duration-300 ease-linear bg-white z-50 ${
        show ? 'w-[260px]' : 'w-[70px] -translate-x-[260px]'
      } md:${show ? 'w-[260px]' : 'w-[60px]'} md:translate-x-0`}
    >
      <div className="no-scrollbar h-[100vh] overflow-y-scroll transition-all duration-300">
        {show ?(
          <div className="mt-5 flex justify-between mx-3">
            <Link href="/">
              <a className="flex justify-center items-center gap-2">
                <Image
                  src={sidebarLogo}
                  width={157}
                  height={31}
                  alt="logo"
                />
              </a>
            </Link>
            <div
              onClick={() => setShow(!show)}
              className={`flex top-[21px] ${show ? "right-2" : "right-6"} bg-[#f3f3f3] text-center items-center justify-center rounded-lg w-[30px] h-[30px] z-50 cursor-pointer md:flex`}
            >
              <Image
                src={SidebarOpen}
                width={14.5}
                height={14.5}
                className="h-5 w-6"
                alt="toggle"
              />
            </div>
          </div>
        ):
        <div className="mt-5 flex justify-center ml-3"><div
            onClick={() => setShow(!show)}
            className={`flex bg-[#f3f3f3] text-center items-center justify-center rounded-lg w-[30px] h-[30px] cursor-pointer md:flex`}
          >
            <Image
              src={SidebarOpen}
              width={20}
              height={20}
              className="h-5 w-6"
              alt="toggle"
            />
          </div>
          </div>}

        <div className={`flex flex-col space-y-1 ${!show && "mt-6"}`}>
          {menuItems.map((section, index) => (
            <div key={section.id}>
              {isMenuSection(section) && (
                <>
                  {show && (
                    <div className="p-5 text-sm leading-[18px] text-[#5578A0]">
                      {section.label}
                    </div>
                  )}
                  <div className={`flex flex-col space-y-1 pl-3 ${!show && "mt-6"}`}>
                    {section.items.map((item, itemIndex) => (
                      <MenuItem
                        key={itemIndex}
                        item={item}
                        pathname={pathname}
                        showText={show}
                      />
                    ))}
                  </div>
                  {index < menuItems.length - 1 && show && (
                    <div className="border-b mt-4 w-full px-5"></div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AsideBar;

const MenuItem = ({ item, pathname, showText }: MenuItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isActive = pathname === item.url || (item.children && item.children.some((child) => pathname === child.url));

  const Icon = item.icon;

  useEffect(() => {
    if (isActive && item.children) {
      setIsOpen(true);
    }
  }, [isActive, item.children]);

  if (item.children) {
    return (
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "w-full flex items-center justify-between px-3 py-2.5 hover:bg-gray-50",
            isActive && "bg-blue-50 text-blue-600",
          )}
        >
          <div className="flex items-center gap-3">
            <Icon size={20} className={cn(isActive ? "text-blue-600" : "text-gray-500")} />
            {showText && <span className={cn(isActive ? "text-blue-600" : "text-gray-700")}>{item.name}</span>}
          </div>
          {showText && <ChevronDown size={16} className={cn("transition-transform", isOpen ? "rotate-180" : "")} />}
        </button>

        {isOpen && showText && (
          <div className="ml-12 my-1 flex flex-col space-y-1">
            {item.children.map((child, index) => (
              <Link
                key={index}
                href={child.url}
                className={cn(
                  "py-2 px-3 rounded-md text-sm",
                  pathname === child.url ? "text-blue-600 font-medium" : "text-gray-600 hover:text-gray-900",
                )}
              >
                {child.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link href={item.url}>
      <div
        className={cn(
          "flex items-center px-3 py-2.5 hover:bg-gray-100 rounded cursor-pointer",
          isActive && "bg-[#ECF1F3] text-[#4849E8] rounded"
        )}
      >
        <div className="relative">
          <Icon size={20} className={cn(isActive ? "text-[#4849E8] font-medium" : "text-gray-500")} />
          {item.badge && (
            <span className="absolute -top-1 -right-1 bg-yellow-400 text-xs w-4 h-4 flex items-center justify-center rounded-full">
              {item.badge}
            </span>
          )}
        </div>
        {showText && (
          <span className={cn("ml-3", isActive ? "text-[#4849E8] font-medium" : "text-gray-500")}>
            {item.name}
          </span>
        )}
      </div>
    </Link>
  );
};