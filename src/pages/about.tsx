/* eslint-disable react/no-unescaped-entities */
// About
import Head from "next/head";
import React from "react";
import HomeLayout from "../components/layouts/HomeLayout";
import aboutBG from "../styles/GeneralStyles.module.css";

const about = () => {
  return (
    <>
      <Head>
        <title>About | Fourth IT Academy</title>
      </Head>
      <HomeLayout>
        <div
          className={` w-full font-nunito  bg-blend-darken h-[500px] font-poppins ${aboutBG.aboutBG}`}
        >
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-white text-4xl mt-[11rem]">
              Fourth IT Academy
            </h1>
            <p className="font-bold text-white text-3xl ">#Get to know us</p>
          </div>
        </div>
        <div className="my-10 container px-[30px] font-nunito">
          <div>
            <h1 className="text-3xl">About Us</h1>
            <div className="text-gray-400">
              <p className="mt-2">
                Fourth IT Academy focuses heavily on the Risk Management
                Framework. The risk management framework creates an effective
                means to help companies select the required security controls
                which are deemed necessary to protect the Organization , its
                team members, as well as all operations and assets of the
                Organization.
              </p>
              <p className="my-4">
                The framework is designed to access all the layers of the
                Organization , understand the goals of each project, and monitor
                all operating systems to identify and analyze any possible risk
                management and mitigation strategies.
              </p>
              <p>
                We maintain newbies to become experts in the Federal Information
                Security Management (FISMA) Risk Management Framework (RMF)
                process.
              </p>
              <p className="my-4">
                You will be trained for roles such as IT Security Analyst,
                Security Control Assessor (SCA), Information System Security
                Officer(ISSO), ISSO Support Analyst, and GRC Analyst,
                Third-Party Risk Assessor.{" "}
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-3xl">Vision</h1>
            <p className="my-4 text-gray-400">
              {" "}
              We are seeking to empower the next generation of tech
              entrepreneurs as a way of overcoming extreme poverty and
              unemployment - while promoting tech knowledge among the least
              privileged. We deliver programs around key tech sectors and
              provide African technology startups with the necessary
              knowledge,tools, and resources they require to go advance in their
              career of propelling their business.
            </p>
          </div>
          <div>
            <h1 className="text-3xl">Mission</h1>
            <p className="my-4 text-gray-400">
              We believe a thriving workforce starts with equitable access to
              education. Our mission is to advanced economic equity through
              rigorous training for tech careers and to connect skilled talent
              to leading business. We're committed to increasing access and
              creating opportunities for individuals who aspire to work in tech
              because the right career changes everything. To increase minority
              affluence within our communities by placing people into fulfilling
              and high paying IT careers. Fourth Academy prepares individuals to
              work in crucial IT roles and equips them with today's most sought
              industry skills and certifications to enter into the tech industry
              Come let's win together!
            </p>
          </div>
        </div>
      </HomeLayout>
    </>
  );
};

export default about;
