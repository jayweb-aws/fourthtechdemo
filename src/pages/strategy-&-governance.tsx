import React from "react";
import Head from "next/head";
import HomeLayout from "../components/layouts/HomeLayout";
import { AiTwotoneStar } from "react-icons/ai";
import { BsCheckCircle } from "react-icons/bs";

export default function index() {
  return (
    <>
      <Head>
        <title>Strategy & Governance | Fourth IT Academy</title>
      </Head>
      <HomeLayout>
        <div
          className="flex justify-center items-center my-10 
        max-w-[60%]
       mx-auto"
        >
          <div>
            <h1 className="font-bold text-2xl font-nunito text-center">
              Strategy & Governance
            </h1>
            <div className="flex justify-center items-center text-[#C91820] font-bold my-5">
              <div className="">
                <div className=" w-[30px] h-[1px] font-extrabold   border-solid border-2 border-[#C91820]"></div>
              </div>
              <div className="mx-[3px]">
                <AiTwotoneStar className="w-[20px] text-3xl" />
              </div>
              <div>
                <div className=" w-[30px] h-[1px] font-extrabold   border-solid border-2 border-[#C91820]"></div>
              </div>
            </div>
            <div className=" w-[70%] mx-auto ">
              <div>
                <p className="font-nunito">
                  The magnitude and complexity of the Cybersecurity challenges
                  facing organizations today, require a holistic approach to
                  managing Cybersecurity risk, while Successfully deploying
                  technological solutions that are comprehensive and
                  cost-effective. From inception to delivery, FITA experienced
                  subject matter experts combine Cybersecurity risk management
                  with project risk management, and strategic planning to
                  produce holistic Cybersecurity solutions. For any technology
                  solution to be effectively deployed, participation and
                  coordination between key stakeholders across the organization
                  is essential. A well thought out and comprehensive IT and
                  Cybersecurity strategy facilitates open communication between
                  key stakeholders and enables both IT and business objectives
                  to align.
                </p>
              </div>
              <div className="my-[20px]">
                <p className="font-nunito">
                  At FITA, we are committed to helping our clients design,
                  develop, and deploy a comprehensive IT and Cybersecurity
                  strategy that will enable the organization to strengthen its
                  security posture, as well as align its IT activities to the
                  overall business strategy. We also help our clients develop an
                  enterprise-wide IT governance and security framework that
                  allows for effective management of disparate IT assets and
                  security appliances implemented throughout the organization.
                </p>
              </div>
              <div>
                <p className="my-[10px">FITA’s expertise include:</p>
                <br />
                <p className="flex items-center">
                  <BsCheckCircle className="text-[#C91820] mr-[5px]" /> IT
                  Strategy
                </p>
                <p className="flex items-center">
                  <BsCheckCircle className="text-[#C91820] mr-[5px]" />{" "}
                  Policies, Standards, and Processes
                </p>
                <p className="flex items-center">
                  <BsCheckCircle className="text-[#C91820] mr-[5px]" /> Virtual
                  CISO Services
                </p>
                <p className="flex items-center">
                  <BsCheckCircle className="text-[#C91820] mr-[5px]" /> Program
                  Management
                </p>
                <p className="flex items-center">
                  <BsCheckCircle className="text-[#C91820] mr-[5px]" /> Vendor
                  Management
                </p>
                <p className="flex items-center">
                  <BsCheckCircle className="text-[#C91820] mr-[5px]" /> Supply
                  Chain Risk Management
                </p>
                <p className="flex items-center">
                  <BsCheckCircle className="text-[#C91820] mr-[5px]" /> CPIC
                </p>
              </div>
            </div>
          </div>
        </div>
      </HomeLayout>
    </>
  );
}
