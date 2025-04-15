import React from "react";
import Head from "next/head";
import HomeLayout from "../components/layouts/HomeLayout";
import { AiTwotoneStar } from "react-icons/ai";
import { BsCheckCircle } from "react-icons/bs";

export default function index() {
  return (
    <>
      <Head>
        <title>Risk Management Services | Fourth IT Academy</title>
      </Head>
      <HomeLayout>
        <div
          className="flex justify-center items-center my-10 
        max-w-[60%]
       mx-auto"
        >
          <div>
            <h1 className="font-bold text-4xl font-nunito text-center">
              Risk Management Services
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
                  At Fourth IT Academy, our expert Cybersecurity and IT Risk
                  Management professionals help make the compliance process a
                  means to your ultimate goal – effective risk management and
                  strengthening your organization’s security posture. We provide
                  both compliance and risk management by automating the
                  compliance process and providing risk management workflows to
                  guide you through the mazes of regulations, relevant
                  procedures, and applicable policies on your path to risk
                  management. We will help you meet the latest OMB mandates and
                  FISMA requirements, following updated Federal directives and
                  NIST guidelines. Additionally, we help our non-government and
                  commercial clients achieve compliance with stipulated
                  regulations that impact them directly, such as, SOX, NERC,
                  ICFR, ISO, ITIL, PCI DSS etc. Our approach to risk management
                  and compliance is comprehensive, flexible, and cost-effective.
                  Our approach entails streamlining and automating business and
                  IT processes, as well as designing and implementing effective
                  control and risk management frameworks to gain maximum
                  efficiency.
                </p>
              </div>
              <div className="my-[20px]">
                <p className="font-nunito">
                  All our service offerings build up to comprehensive solutions
                  that enable you to meet continuous monitoring requirements
                  with real-time reporting. From vulnerability assessments to
                  Governance, Risk Management, and Compliance (GRC), from threat
                  modeling to continuous monitoring, FITA is your trusted risk
                  management advisor. Let us help you protect your agency and
                  bring the same level of defense we’ve shared with the rest of
                  the Federal Government.
                </p>
              </div>
              <div>
                <p className="my-[10px">FITA’s expertise include:</p>
                <br />
                <p className="flex items-center">
                  <BsCheckCircle className="text-[#C91820] mr-[5px]" />
                  ATO Services
                </p>
                <p className="flex items-center">
                  <BsCheckCircle className="text-[#C91820] mr-[5px]" />{" "}
                  Assessment & Authorization
                </p>
                <p className="flex items-center">
                  <BsCheckCircle className="text-[#C91820] mr-[5px]" />
                  IV&V
                </p>
                <p className="flex items-center">
                  <BsCheckCircle className="text-[#C91820] mr-[5px]" />
                  Continuous Monitoring
                </p>
                <p className="flex items-center">
                  <BsCheckCircle className="text-[#C91820] mr-[5px]" />
                  Continuous Diagnostic and Mitigation (CDM)
                </p>
                <p className="flex items-center">
                  <BsCheckCircle className="text-[#C91820] mr-[5px]" />
                  FISMA/FISCAM Compliance
                </p>
                <p className="flex items-center">
                  <BsCheckCircle className="text-[#C91820] mr-[5px]" />
                  Audit Defense
                </p>
                <p className="flex items-center">
                  <BsCheckCircle className="text-[#C91820] mr-[5px]" />
                  Vulnerability Assessments SD
                </p>
                <p className="flex items-center">
                  <BsCheckCircle className="text-[#C91820] mr-[5px]" />
                  Patch Management
                </p>
                <p className="flex items-center">
                  <BsCheckCircle className="text-[#C91820] mr-[5px]" />
                  Security Training
                </p>
                <p className="flex items-center">
                  <BsCheckCircle className="text-[#C91820] mr-[5px]" />
                  Disaster Recovery / COOP
                </p>
              </div>
            </div>
          </div>
        </div>
      </HomeLayout>
    </>
  );
}
