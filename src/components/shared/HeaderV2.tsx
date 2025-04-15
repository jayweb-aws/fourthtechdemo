import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, forwardRef } from "react";
import { useAppSelector } from "../../app/hooks";
import AngleDownIcon from "../../assets/icons/AngleDownIcon";
import CloseIcon from "../../assets/icons/CloseIcon";
import MenubarIcon from "../../assets/icons/MenubarIcon";
import LogoImg from "../../assets/logov2.png";
import { navItemsArray } from "../../constant/constant";
import { isAuthorized } from "../../utils/auth";
import MobileNav from "./MobileNav";
import TopHeader from "./TopHeader";
import UserMenu from "./UserMenu";

const Header = () => {
  const {
    user: { email, avatar, firstName },
    refresh,
  } = useAppSelector((state) => state.auth);

  const [open, setOpen] = useState(false);
  const router = useRouter();

  let timer: any;
  const mouseOver = (index: any) => {
    clearTimeout(timer);
  };
  const mouseLeave = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      // setDropdown(null)
    }, 200);
  };

  const LogoWrap = forwardRef<HTMLAnchorElement>((props, ref) => {
    return (
        <a {...props} ref={ref}>
            <Image width={186} height={32} src={LogoImg} alt="image" />
        </a>
    )
  })
  
  return (
    <div className="bg-white relative">
      {/* <TopHeader /> */}
      <div className="flex justify-between items-center p-[0_20px] z-20 bg-white h-[95px] sticky font-poppins container">
        <div className="logo w-[110px] xl:w-[200px] inline-block cursor-pointer">
          <Link href="/" passHref>
            <LogoWrap/>
          </Link>

          {/* Mobile Nav  */}
          {open && <MobileNav open={open} setOpen={setOpen} />}
        </div>
        <div className="flex justify-center items-center">
          {navItemsArray?.map((item, i) => {
            return (
              <div
                onMouseEnter={() => mouseOver(i)}
                onMouseLeave={() => mouseLeave()}
                key={i}
                className="relative duration-300 text-deepDark font-semibold hidden lg:block"
              >
                <span
                  className={classNames(
                    item.url === router.pathname && "text-secondary",
                    "flex items-center text-[16px] leading-[25.6px] font-medium gap-x-[4px] mr-[20px] xl:mr-[30px] hover:text-secondary group duration-300 cursor-pointer"
                  )}
                >
                  <Link href={item.url} passHref>
                    <span className="flex">
                      {item.title}
                      {item?.subMenu && <AngleDownIcon />}
                    </span>
                  </Link>
                </span>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-end space-x-[20px]">
          {!isAuthorized(email, refresh) ? (
            <div className="flex items-center space-x-[12px]">
              <Link href="/signin">
                <button className="hidden lg:block text-black font-medium text-[16px] lg:text-[18px] p-[6px_20px] lg:p-[10px_30px]">
                  Login
                </button>
              </Link>
              <Link href="/registration">
                <button className="text-black border border-black font-medium text-[16px] lg:text-[18px] p-[6px_20px] lg:p-[10px_30px] rounded-full">
                  Sign Up
                </button>
              </Link>
            </div>
          ) : (
            <UserMenu userEmail={email} username={firstName} avatar={avatar} />
          )}

          {/* Mobile Nav  */}
          <div className="lg:hidden">
            {!open ? (
              <span onClick={() => setOpen(true)}>
                <MenubarIcon />
              </span>
            ) : (
              <span onClick={() => setOpen(false)}>
                <CloseIcon />
              </span>
            )}
          </div>
        </div>


      </div>
    </div>
  );
};

export default Header;
