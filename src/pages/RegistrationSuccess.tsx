import type React from "react"
import { Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image";
import logo from "../assets/logov3.png";
import SignInSide from "../assets/homev2/SignInSide.svg";
import MenubarIcon from "../assets/icons/MenubarIcon";
interface RegistrationSuccessProps {
  email: string
}

const RegistrationSuccess: React.FC<RegistrationSuccessProps> = ({ email }) => {
  return (
    <>
    <header className="flex items-center justify-between p-4">
        <Link href="/">
          <a className="flex items-center gap-1">
            <Image src={logo} alt="logo" width={150} height={40} />
          </a>
        </Link>
        <div className="lg:hidden">
          <span>
            <MenubarIcon />
          </span>
        </div>
      </header>

    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto p-6 space-y-8">
      <div className="bg-indigo-50 rounded-full p-6">
        <Mail className="h-12 w-12 text-indigo-600" />
      </div>

      <div className="text-center space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Check Your Email</h1>

        <p className="text-gray-600">
          We&apos;ve sent an email to <span className="font-medium">{email}</span> with a link to complete your account
          setup.
        </p>

        <p className="text-gray-600 text-sm">
          If you didn&apos;t receive any email, check your spam/ promotions folder, otherwise{" "}
          <Link href="/contact" className="text-indigo-600 hover:text-indigo-800">
            contact us
          </Link>
          .
        </p>
      </div>

      <button
          onClick={() => window.location.href = '/signin'}
          className="w-[100%] py-3 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Back to Login
        </button>
    </div>
    </>
  )
}

export default RegistrationSuccess
