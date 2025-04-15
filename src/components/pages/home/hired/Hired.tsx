import React from "react";
import jetblue from "../../../../assets/jetblue.png";
import jacobs from "../../../../assets/jacobs.png";
import amazon from "../../../../assets/amazon.png";
import hired from "../../../../assets/homeWord.jpeg";
import Image from "next/image";
const company = [
  amazon,
  jacobs,
  jetblue,
  amazon,
  jacobs,
  jetblue,
  amazon,
  jacobs,
  jetblue,
  amazon,
  jacobs,
  jetblue,
  amazon,
  jacobs,
  jetblue,
  amazon,
  jacobs,
];
const student = [
  "Cyber Security Senior Associate	",
  "Information Security Architect 	",
  "Senior Security Assessor",
  "RMF Senior Consultant	",
  "Information Security Senior Analyst  ",
  "Information Assurance Coordinator",
  "Business Risk Analyst",
  "Information System Security ",
  "Officer	Cyber Risk Management 	",
  "IT Specialist		",
  "Cyber security Engineer 	",
  "IT Auditor		",
  "Information Security Risk Specialist",
  "ATO Support Analyst	Business ",
  "Information Security Analyst		",
  "Technology Risk Manager		",
  "Cyber security Assurance and Compliance Manager		",
  "Third Party Risk Senior Associate		",
  "Vendor Risk Manager		",
  "Security Control Assessor 	",
  "Cyber Security Auditor",
];
const Hired = () => {
  return (
    <div className="my-10">
      <h3 className="text-4xl text-gray-400 text-center my-6 font-nunito">
        Our students have been recruited to work as...
      </h3>
      <div className="container flex justify-center items-center my-5">
        <Image height={"600"} width="700" src={hired} alt="" />
      </div>
    </div>
  );
};

export default Hired;
