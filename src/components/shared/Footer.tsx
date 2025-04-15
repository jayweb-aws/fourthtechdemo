import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { GrTwitter } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";

const menu: {
  name: string;
  url: string;
}[] = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Services",
    url: "/services",
  },
  {
    name: "Bootcamps",
    url: "/bootcamps",
  },
  {
    name: "Consulting",
    url: "/consulting",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];
const menuTwo: {
  name: string;
  url: string;
}[] = [
  {
    name: "Refund",
    url: "/",
  },
  {
    name: "Cancellation Policy",
    url: "/terms-of-use",
  },
  {
    name: "Accessiblity",
    url: "/",
  },
  {
    name: "Help Admission",
    url: "/",
  },
  {
    name: "Privacy",
    url: "/privacy-policy",
  },
  {
    name: "Terms of use",
    url: "/terms-of-use",
  },
];
const menuThree: {
  name: string;
  url: string;
}[] = [
  {
    name: "Blog",
    url: "/",
  },
  {
    name: "Became an Instructor",
    url: "/",
  },
];

const Footer = () => {
  return (
    <div className="bg-black py-10 text-white font-nunito">
      <div className="container mb-16 px-4 xl:px-0 ">
        <h3 className="font-bold text-2xl my-10 text-center">
          Opportunity, Dedication and Excellence in IT.
        </h3>
        <div className="flex justify-center gap-4">
          <button className="btn-white lg:px-10 md:px-10 sm:px-10 xsm:px-7">
            Sponsor A Student
          </button>
          <button className="btn-black lg:px-10 md:px-10 sm:px-10 xsm:px-7">
            Recruit A Student
          </button>
        </div>
      </div>

      <div className="container flex flex-wrap sm:flex-nowrap px-4 sm:px-4 justify-center md:px-8 gap-5">
        <ul className="basis-full sm:basis-1/3">
          <li className="text-white font-semibold text-lg list-none">
            NAVIGATION
          </li>
          {menu.map((item, idx) => (
            <Link href={item.url} key={idx}>
              <li className="text-sm my-1 text-white hover:underline  cursor-pointer">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>

        <ul className="basis-full sm:basis-1/3">
          <li className="text-white font-semibold text-lg list-none">MORE</li>
          {menuTwo.map((item, idx) => (
            <Link href={item.url} key={idx}>
              <li className="text-sm my-1 text-white hover:underline  cursor-pointer">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>

        <ul className="basis-full sm:basis-1/3">
          <li className="text-white font-semibold text-lg list-none">
            COMMUNITY
          </li>
          {menuThree.map((item, idx) => (
            <li
              key={idx}
              className="text-sm my-1 text-white hover:underline  cursor-pointer"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="container mt-5">
        <hr />
      </div>

      <div className="container mt-3 px-4 xl:px-0 flex flex-col sm:flex-row gap-2 justify-between">
        <p className="font-bold text-white text-xl">Fourth IT Academy</p>
        <p className=" text-white">
          Copyright &#169;{" "}
          <span className="font-bold">All Rights Reserved. FITA</span>
        </p>
        <div className="flex gap-2">
          <BsLinkedin className="border-2 rounded-full border-gray-200 text-4xl p-2" />

          <FaFacebookF className="border-2 rounded-full border-gray-200 text-4xl p-2" />
          <a
            href={
              "https://twitter.com/fourthacademy?s=21&t=7BeZzMkJe3T19o1pzr0Gow "
            }
            target="_blank"
            rel="noreferrer"
          >
            <GrTwitter className="border-2 rounded-full border-gray-200 text-4xl p-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
