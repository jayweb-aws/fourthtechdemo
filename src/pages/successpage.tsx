import React from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Head from "next/head";
import HomeLayout from "../components/layouts/HomeLayout";
import Image from "next/image";
import GeneralStyles from "../styles/GeneralStyles.module.css";
import logo from "../../src/assets/logo.png";
import Link from "next/link";

export default function successPage() {
  return (
    <>
      <Head>
        <title> MailSend | Fourth IT Academy</title>
      </Head>
      <HomeLayout>
        <div className="grid lg:grid-cols-3 grid-cols-2  bg-[#E5E5E5]">
          <div className={GeneralStyles.SigninBg}>
            <div className="flex justify-start ml-4 items-center gap-1 mt-5 ">
              <Image
                src={logo}
                width={35}
                height={35}
                className="h-5 w-6"
                alt={"logo"}
              />
              <h3 className="uppercase font-semibold text-xl">FITA</h3>
            </div>
            {/* <Copy size={30} className="text-red-500" />
          <Video size={30} className=" text-gray-400" /> */}
          </div>
          <div className="col-span-1 lg:col-span-2 mx-auto my-auto px-[0rem] py-[1rem] lg:p-[10.5rem]">
            <div className="flex flex-col gap-4 rounded-lg bg-white max-w-[12rem] lg:max-w-[28rem] lg:p-7 p-2 ">
              <h1 className="lg:text-xl text-lg font-bold">Success !</h1>
              <p className="lg:text-inherit text-sm">
                A email has been send to your email@domain.com. Please check for
                an email from company and click on the included link to reset
                your password.
              </p>
              <div className="mx-auto">
                <Link href="/" className="lg:w-[10rem] w-[0rem] " type="submit">
                  <Button>Go to home</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </HomeLayout>
    </>
  );
}
