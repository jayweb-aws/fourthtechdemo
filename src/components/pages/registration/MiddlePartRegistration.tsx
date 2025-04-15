/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import { Disclosure } from "@headlessui/react";

import { HiOutlinePlusSm } from "react-icons/hi";
import { HiMinusSm } from "react-icons/hi";

const MiddlePartRegistration = () => {
  const bottomTable = [
    {
      title: "Time to complete	",
      time: "8 weeks",
    },
    {
      title: "Live online classes",
      time: "4 hrs/week",
      isYellow: true,
      needPad: true,
    },
    {
      title: "Group Meetings",
      time: "3 hrs/week",
      needPad: true,
    },

    {
      title: "Class Schedule",
      timeDay: "Saturday Morning Thursday Evening",
      timeHour: "(3 hrs/class)",
      isYellow: true,
    },
    {
      title: "Personal Study	",
      time: "4 hrs/day",
    },
  ];
  return (
    <>
      <div className=" font-nunito">
        <div className=" p-20 container grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2  ">
          <div>
            <Image
              src={require("../../../assets/img_suppor_registration.jpg")}
              width={420}
              height={420}
              alt=""
            />
          </div>
          <div className="">
            <h1 className="font-bold text-5xl text-orange-800  ">
              The Support you need is the - Your path to GRC
            </h1>
            <p className="mt-5 leading-10 text-lg">
              When people think of cybersecurity, they automatically start
              thinking about coding, programming, or applying technical skills
              and whilst those sectors of cybersecurity are in high in demand so
              is the non-technical part. These are equally financially rewarding
              and even more than the technical aspect as you start from
              mid-level. This is much easier for you to understand in order to
              transition into tech because it involves reading, understanding,
              and explaining what you have read to an audience who are not
              technically inclined.
            </p>
            <div className="">
              <div className="flex">
                <p className="text-orange-800 font-bold text-3xl">&#x2022;</p>
                <p className="pt-2">
                  Cybersecurity is important because it protects all categories
                  of data from harm and damage.
                </p>
              </div>

              <div className="flex my-4 ">
                <p className="text-orange-800 font-bold text-3xl">&#x2022;</p>
                <p className="pt-2">
                  This includes sensitive data, personally identifiable
                  information (PII), protected health information (PHI).
                </p>
              </div>

              <div className="flex ">
                <p className="text-orange-800 font-bold text-3xl">&#x2022;</p>
                <p className="pt-2">
                  Personal information, intellectual property, data, and
                  governmental and industry information systems.
                </p>
              </div>

              <div className="flex my-4">
                <p className="text-orange-800 font-bold text-3xl">&#x2022;</p>
                <p className="pt-2">
                  Well, this is why we are here to help you to make the right
                  decision and transition into the right career.
                </p>
              </div>
              <div className="flex">
                <p className="text-orange-800 font-bold text-3xl">&#x2022;</p>
                <p className="pt-2">
                  Breaking into any technical field requires determination and
                  consistency.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container my-8 lg:p-5 md:p-5 xsm:p-5 sm:p-5">
          <h1 className="font-bold md:text-5xl text-3xl lg:text-5xl text-orange-800 ">
            Modern, Comprehensive and Personalized Curriculum
          </h1>
          <p className="my-4 text-lg">
            In 24 weeks, ASU Cybersecurity Boot Camp will prepare you with the
            technical skills you need to protect digital environments. Through
            an immersive hands-on curriculum, you will not only learn
            fundamental cybersecurity methods but also put them into action
            through practical exercises.
          </p>
          <p className="text-lg">
            The curriculum is delivered through live, online classes and
            high-quality coursework. Our instructors are fully vetted by the
            university and offer 1-on-1 virtual guidance to learners throughout
            the program.
          </p>
        </div>
        <div className="container">
          <div className="w-full p-8">
            <div className=" w-full  bg-white">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full px-4 py-2 justify-between items-center  bg-slate-700 text-left font-bold text-lg text-white hover:bg-red-800  focus:outline-none focus:bg-red-800 ">
                      <span>Module 1: Cybersecurity Overview</span>
                      <span className=" text-white">
                        {open ? (
                          <HiMinusSm className="w-12 h-12" />
                        ) : (
                          <HiOutlinePlusSm className="w-12 h-12" />
                        )}
                      </span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-5 py-5 bg-slate-200">
                      <p>
                        Learn the basics of Cybersecurity and computer
                        networking
                      </p>
                      <p className="font-bold my-4">What you will learn:</p>
                      <div className="grid grid-cols-3">
                        <div>
                          <div className="flex ">
                            <p className="text-orange-800 font-bold text-3xl">
                              &#x2022;
                            </p>
                            <p className="pt-2">CIA triad</p>
                          </div>
                        </div>
                        <div>
                          <div className="flex ">
                            <p className="text-orange-800 font-bold text-3xl">
                              &#x2022;
                            </p>
                            <p className="pt-2"> Compliance</p>
                          </div>
                        </div>
                        <div>
                          <div className="flex ">
                            <p className="text-orange-800 font-bold text-3xl">
                              &#x2022;
                            </p>
                            <p className="pt-2"> Framework </p>
                          </div>
                        </div>
                        <div>
                          <div className="flex ">
                            <p className="text-orange-800 font-bold text-3xl">
                              &#x2022;
                            </p>
                            <p className="pt-2"> SDLC</p>
                          </div>
                        </div>
                        <div>
                          <div className="flex ">
                            <p className="text-orange-800 font-bold text-3xl">
                              &#x2022;
                            </p>
                            <p className="pt-2">Information Classification</p>
                          </div>
                        </div>
                        <div>
                          <div className="flex ">
                            <p className="text-orange-800 font-bold text-3xl">
                              &#x2022;
                            </p>
                            <p className="pt-2">AAA Protocols</p>
                          </div>
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="border-t-2 border-white">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full px-4 py-2 justify-between items-center  bg-slate-700 text-left font-bold text-lg text-white hover:bg-red-800  focus:outline-none focus:bg-red-800 ">
                      <span>
                        Module 2: Security & Risk Assessment Fundamentals
                      </span>
                      <span className=" text-white">
                        {open ? (
                          <HiMinusSm className="w-12 h-12" />
                        ) : (
                          <HiOutlinePlusSm className="w-12 h-12" />
                        )}
                      </span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-5 py-5 bg-slate-200">
                      <p>
                        Understand some of the foundational terminologies in
                        Information Security
                      </p>
                      <p className="font-bold my-4">What you will learn:</p>
                      <div className="grid grid-cols-3">
                        <div>
                          <div className="flex ">
                            <p className="text-orange-800 font-bold text-3xl">
                              &#x2022;
                            </p>
                            <p className="pt-2"> Risk Analysis</p>
                          </div>
                        </div>
                        <div>
                          <div className="flex ">
                            <p className="text-orange-800 font-bold text-3xl">
                              &#x2022;
                            </p>
                            <p className="pt-2"> Risk Assessment</p>
                          </div>
                        </div>
                        <div>
                          <div className="flex ">
                            <p className="text-orange-800 font-bold text-3xl">
                              &#x2022;
                            </p>
                            <p className="pt-2"> Risk Management </p>
                          </div>
                        </div>
                        <div>
                          <div className="flex ">
                            <p className="text-orange-800 font-bold text-3xl">
                              &#x2022;
                            </p>
                            <p className="pt-2">System Interconnection </p>
                          </div>
                        </div>
                        <div>
                          <div className="flex ">
                            <p className="text-orange-800 font-bold text-3xl">
                              &#x2022;
                            </p>
                            <p className="pt-2">Vulnerabilities/Threat/ Risk</p>
                          </div>
                        </div>
                        <div>
                          <div className="flex ">
                            <p className="text-orange-800 font-bold text-3xl">
                              &#x2022;
                            </p>
                            <p className="pt-2">Risk Decisions</p>
                          </div>
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="border-t-2 border-white">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full px-4 py-2 justify-between items-center  bg-slate-700 text-left font-bold text-lg text-white hover:bg-red-800  focus:outline-none focus:bg-red-800 ">
                      <span>
                        Module 3: Risk Management Framework Overview
                        (Categorization)
                      </span>
                      <span className=" text-white">
                        {open ? (
                          <HiMinusSm className="w-12 h-12" />
                        ) : (
                          <HiOutlinePlusSm className="w-12 h-12" />
                        )}
                      </span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-5 py-5 bg-slate-200">
                      <p>
                        Risk Management Framework (RMF) provides the guidelines
                        for complying with the FISMA regulations.
                      </p>
                      <p className="font-bold my-4">What you will learn:</p>
                      <div className="grid grid-cols-3">
                        <div>
                          <div className="flex ">
                            <p className="text-orange-800 font-bold text-3xl">
                              &#x2022;
                            </p>
                            <p className="pt-2">
                              Network architecture, operations and security
                            </p>
                          </div>
                        </div>
                        <div>
                          <div className="flex ">
                            <p className="text-orange-800 font-bold text-3xl">
                              &#x2022;
                            </p>
                            <p className="pt-2">History of RMF</p>
                          </div>
                        </div>
                        <div>
                          <div className="flex ">
                            <p className="text-orange-800 font-bold text-3xl">
                              &#x2022;
                            </p>
                            <p className="pt-2"> Categorization</p>
                          </div>
                        </div>
                        <div>
                          <div className="flex ">
                            <p className="text-orange-800 font-bold text-3xl">
                              &#x2022;
                            </p>
                            <p className="pt-2"> NIST Publications</p>
                          </div>
                        </div>
                        <div>
                          <div className="flex ">
                            <p className="text-orange-800 font-bold text-3xl">
                              &#x2022;
                            </p>
                            <p className="pt-2">PTA/PIA </p>
                          </div>
                        </div>
                        <div>
                          <div className="flex ">
                            <p className="text-orange-800 font-bold text-3xl">
                              &#x2022;
                            </p>
                            <p className="pt-2"> E-Authentication</p>
                          </div>
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="border-t-2 border-white">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full px-4 py-2 justify-between items-center  bg-slate-700 text-left font-bold text-lg text-white hover:bg-red-800  focus:outline-none focus:bg-red-800 ">
                      <span>
                        Module 4: Control (Control Selection & Control
                        Tailoring)
                      </span>
                      <span className=" text-white">
                        {open ? (
                          <HiMinusSm className="w-12 h-12" />
                        ) : (
                          <HiOutlinePlusSm className="w-12 h-12" />
                        )}
                      </span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-5 py-5 bg-slate-200">
                      <p>
                        Dive into selection of the controls and how to implement
                        those controls.
                      </p>
                      <p className="font-bold my-4">What you will learn:</p>
                      <div className="grid grid-cols-3">
                        <div>
                          <div className="flex ">
                            <p className="text-orange-800 font-bold text-3xl">
                              &#x2022;
                            </p>
                            <p className="pt-2">Tailoring of Controls </p>
                          </div>
                        </div>
                        <div>
                          <div className="flex ">
                            <p className="text-orange-800 font-bold text-3xl">
                              &#x2022;
                            </p>
                            <p className="pt-2"> Classification of Controls </p>
                          </div>
                        </div>
                        <div>
                          <div className="flex ">
                            <p className="text-orange-800 font-bold text-3xl">
                              &#x2022;
                            </p>
                            <p className="pt-2"> Control Families</p>
                          </div>
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="border-t-2 border-white">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full px-4 py-2 justify-between items-center  bg-slate-700 text-left font-bold text-lg text-white hover:bg-red-800  focus:outline-none focus:bg-red-800 ">
                      <span>
                        Module 5: Policies and Procedures (Control
                        Implementation)
                      </span>
                      <span className=" text-white">
                        {open ? (
                          <HiMinusSm className="w-12 h-12" />
                        ) : (
                          <HiOutlinePlusSm className="w-12 h-12" />
                        )}
                      </span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-5 py-5 bg-slate-200">
                      <p>
                        Write and describe how the controls are implemented,
                        installed, or used within the system
                      </p>
                      <p className="font-bold my-4">What you will learn:</p>
                      <div className="grid grid-cols-3">
                        <div>
                          <div className="flex ">
                            <p className="text-orange-800 font-bold text-3xl">
                              &#x2022;
                            </p>
                            <p className="pt-2">
                              {" "}
                              How to write implementation statement
                            </p>
                          </div>
                        </div>
                        <div>
                          <div className="flex ">
                            <p className="text-orange-800 font-bold text-3xl">
                              &#x2022;
                            </p>
                            <p className="pt-2">
                              Develop Policy and Procedures
                            </p>
                          </div>
                        </div>
                        <div>
                          <div className="flex ">
                            <p className="text-orange-800 font-bold text-3xl">
                              &#x2022;
                            </p>
                            <p className="pt-2"> System Security Plan </p>
                          </div>
                        </div>
                        <div>
                          <div className="flex ">
                            <p className="text-orange-800 font-bold text-3xl">
                              &#x2022;
                            </p>
                            <p className="pt-2">
                              {" "}
                              Configuration management Plan{" "}
                            </p>
                          </div>
                        </div>
                        <div>
                          <div className="flex ">
                            <p className="text-orange-800 font-bold text-3xl">
                              &#x2022;
                            </p>
                            <p className="pt-2">Contingency Plan</p>
                          </div>
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="border-t-2 border-white">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full px-4 py-2 justify-between items-center  bg-slate-700 text-left font-bold text-lg text-white hover:bg-red-800  focus:outline-none focus:bg-red-800 ">
                      <span>
                        Module 6: Assessment / Auditing (Assessment,
                        Authorization & Continuous Monitoring)
                      </span>
                      <span className=" text-white">
                        {open ? (
                          <HiMinusSm className="w-12 h-12" />
                        ) : (
                          <HiOutlinePlusSm className="w-12 h-12" />
                        )}
                      </span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-5 py-5 bg-slate-200">
                      <p>
                        Gain hands-on experience on how assessment and auditing
                        is done.
                      </p>
                      <p className="font-bold my-4">What you will learn:</p>

                      <div className="grid grid-cols-3">
                        <div>
                          <div className="flex ">
                            <p className="text-orange-800 font-bold text-3xl">
                              &#x2022;
                            </p>
                            <p className="pt-2"> Security Assessment Plan</p>
                          </div>
                        </div>
                        <div>
                          <div className="flex ">
                            <p className="text-orange-800 font-bold text-3xl">
                              &#x2022;
                            </p>
                            <p className="pt-2">Security Assessment Report</p>
                          </div>
                        </div>
                        <div>
                          <div className="flex ">
                            <p className="text-orange-800 font-bold text-3xl">
                              &#x2022;
                            </p>
                            <p className="pt-2"> Plan of Action Milestone </p>
                          </div>
                        </div>
                        <div>
                          <div className="flex ">
                            <p className="text-orange-800 font-bold text-3xl">
                              &#x2022;
                            </p>
                            <p className="pt-2"> Authorization</p>
                          </div>
                        </div>
                        <div>
                          <div className="flex ">
                            <p className="text-orange-800 font-bold text-3xl">
                              &#x2022;
                            </p>
                            <p className="pt-2">Continuous Monitoring</p>
                          </div>
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="border-t-2 border-white">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full px-4 py-2 justify-between items-center  bg-slate-700 text-left font-bold text-lg text-white hover:bg-red-800  focus:outline-none focus:bg-red-800 ">
                      <span>Module 7: Other Frameworks (FEDRAMP, CMMC)</span>
                      <span className=" text-white">
                        {open ? (
                          <HiMinusSm className="w-12 h-12" />
                        ) : (
                          <HiOutlinePlusSm className="w-12 h-12" />
                        )}
                      </span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-5 py-5 bg-slate-200">
                      <p>Gain a thorough understanding of FEDRAMP, CMMC</p>
                      <p className="font-bold my-4">What you will learn:</p>
                      <div className="grid grid-cols-3">
                        <div>
                          <div className="flex ">
                            <p className="text-orange-800 font-bold text-3xl">
                              &#x2022;
                            </p>
                            <p className="pt-2"> Cloud Computing</p>
                          </div>
                        </div>
                        <div>
                          <div className="flex ">
                            <p className="text-orange-800 font-bold text-3xl">
                              &#x2022;
                            </p>
                            <p className="pt-2">
                              Cybersecurity Maturity Model Certificate
                            </p>
                          </div>
                        </div>
                        <div>
                          <div className="flex ">
                            <p className="text-orange-800 font-bold text-3xl">
                              &#x2022;
                            </p>
                            <p className="pt-2">
                              {" "}
                              Federal Risk and Authorization Management Program
                            </p>
                          </div>
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="border-t-2 border-white">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full px-4 py-2 justify-between items-center  bg-slate-700 text-left font-bold text-lg text-white hover:bg-red-800  focus:outline-none focus:bg-red-800 ">
                      <span>Module 8: Vendor Risk Assessment (ISO 270001)</span>
                      <span className=" text-white">
                        {open ? (
                          <HiMinusSm className="w-12 h-12" />
                        ) : (
                          <HiOutlinePlusSm className="w-12 h-12" />
                        )}
                      </span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-5 py-5 bg-slate-200">
                      <p>
                        Gain a thorough understanding of Third-Party Vendor
                        Assessment
                      </p>
                      <p className="font-bold my-4">What you will learn:</p>
                      <div className="grid grid-cols-3">
                        <div>
                          <div className="flex ">
                            <p className="text-orange-800 font-bold text-3xl">
                              &#x2022;
                            </p>
                            <p className="pt-2"> - ISO STANDARDS</p>
                          </div>
                        </div>
                        <div>
                          <div className="flex ">
                            <p className="text-orange-800 font-bold text-3xl">
                              &#x2022;
                            </p>
                            <p className="pt-2">Vendor Tiering Assessment</p>
                          </div>
                        </div>
                        <div>
                          <div className="flex ">
                            <p className="text-orange-800 font-bold text-3xl">
                              &#x2022;
                            </p>
                            <p className="pt-2"> Vendor Risk Assessment</p>
                          </div>
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
        <div className=" bg-slate-100">
          <div className="container px-10 py-16">
            <div>
              <h1 className="text-5xl font-bold text-orange-800">
                Learn on your schedule
              </h1>
              <p className="my-4">
                This is a{" "}
                <span className="font-bold text-lg mr-1">part-time</span>
                bootcamp designed for working professionals and amateurs like
                you who want to learn cybersecurity to advanced careers, enhance
                skills for a current role or change career paths.
              </p>
            </div>
            <div className="mt-5">
              {bottomTable.map((item, id) => (
                <div
                  className={`px-8 py-4 flex justify-between items-center my-4 ${
                    item.isYellow ? "bg-amber-100" : "bg-white"
                  } ${item.needPad ? "py-7" : ""}`}
                  key={id}
                >
                  <h1 className="font-bold">{item.title}</h1>
                  <p>{item.time}</p>
                  {item.timeDay ? (
                    <div>
                      <p>{item.timeDay}</p>
                      <p>{item.timeHour}</p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiddlePartRegistration;
