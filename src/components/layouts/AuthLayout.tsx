// components/AuthLayout.js
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../assets/logov3.png";
import SignInSide from "../../assets/homev2/SignInSide.svg";
import MenubarIcon from "../../assets/icons/MenubarIcon";
import GeneralStyles from "../../../styles/GeneralStyles.module.css";

const AuthLayout = ({ children }: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-[#F5F6FA] relative">
      <header className="flex items-center justify-between p-4">
        <Link href="/">
          <a className="flex items-center gap-1">
            <Image src={logo} alt="logo" width={150} height={40} />
          </a>
        </Link>
        <div className="lg:hidden">
          <span onClick={toggleMenu}>
            <MenubarIcon />
          </span>
        </div>
      </header>

      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:h-[90vh] bg-white overflow-auto lg:overflow-hidden">
        <div className="flex flex-col items-center justify-start mt-0 md:mt-14 p-0 lg:p-6 flex-grow">
          {children}
        </div>

        <div className="flex items-center justify-center p-0 lg:p-6 overflow-hidden lg:h-auto">
          <Image
            src={SignInSide}
            alt="Dashboard Preview"
            layout="intrinsic"
            objectFit="contain"
            className="rounded-lg w-[80%] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full"
          />
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg p-4 absolute top-16 right-0 w-48 rounded-lg">
          <Link href="/">
            <a className="block py-2 text-gray-700 hover:bg-gray-100 rounded">
              Dashboard
            </a>
          </Link>
          <Link href="/">
            <a className="block py-2 text-gray-700 hover:bg-gray-100 rounded">
              My Courses
            </a>
          </Link>
          <Link href="/">
            <a className="block py-2 text-gray-700 hover:bg-gray-100 rounded">
              Messages
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default AuthLayout;
