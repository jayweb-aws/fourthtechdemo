import React from "react";
import Head from "next/head";
import HomeLayout from "../components/layouts/HomeLayout";
import { AiTwotoneStar } from "react-icons/ai";
import { BsCheckCircle } from "react-icons/bs";

export default function index() {
  return (
    <>
      <Head>
        <title>Digital Transformation | Fourth IT Academy</title>
      </Head>
      <HomeLayout>
        <div
          className="flex justify-center items-center my-10 
        max-w-[60%]
       mx-auto"
        >
          <div>
            <h1 className="font-bold text-2xl font-nunito text-center">
              Digital Transformation
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
                  It is well-known that digital transformation is a journey, not
                  a destination. Companies are in various stages of the life
                  cycle and need to modernize their legacy applications and move
                  those dynamic workloads through hybrid cloud environments
                  while ensuring security, scalability and performance. FITA’s
                  application lifecycle management platform eases the
                  development, operations and management of all aspects of your
                  containerized applications. To run modern applications in
                  production, enterprises now need to operate an increasingly
                  complex Kubernetes infrastructure and manage the lifecycle of
                  containerized applications on K8s. And across both,
                  enterprises need a new level of automation, security,
                  visibility and governance capabilities. Our platform
                  streamlines Kubernetes operations and Kubernetes application
                  lifecycle management — all in a single platform. Our customers
                  can take the digital transformation leap by accelerating their
                  application modernization journey.
                </p>
              </div>
              <div className="my-[20px]">
                <p className="font-nunito">
                  Enterprise and Security Architecture Services Application
                  Lifecycle Management (Kubernetes)
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
