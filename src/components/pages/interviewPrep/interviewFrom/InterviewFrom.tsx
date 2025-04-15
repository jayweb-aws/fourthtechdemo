import React from "react";
import Textfield from "../../../common/forms/Textfield";
import contactLogo from "../../../../assets/contact-us-logo.png";
import Image from "next/image";

const InterviewFrom = () => {
  return (
    <div className="container font-nunito">
      <div className="p-[2rem] mt-[-260px]  lg:mt-[-465px] bg-white container md:max-w-[1080px]  pt-16 mb-20 shadow-slate-300 shadow-xl">
        <div className="">
          <div className="flex justify-center items-center">
            <Image alt="" src={contactLogo} width={50} height={50} />

            <h1 className="text-4xl font-semibold ">Interview Prep</h1>
          </div>
          <div>
            <div className="text-sm flex lg:items-center md:items-center lg:justify-center md:justify-center flex-col my-5 text-gray-400">
              <p className="max-w-[500px] text-center">
                Are you skilled in a specific field in Information Technology
                and interested in teaching and impacting lives with your
                professional experiences? Come join our team!
              </p>
            </div>
          </div>
        </div>
        <div className=" ">
          <div className="flex justify-center items-center flex-wrap gap-3">
            <div className="basis-full sm:basis-[49%]">
              <Textfield className="" label="First Name" name="first name" />
            </div>
            <div className="basis-full sm:basis-[49%]">
              <Textfield
                className="basis-full sm:basis-[49%]"
                label="Last Name"
                name=" Second name"
              />
            </div>
            <div className="basis-full sm:basis-[49%]">
              <Textfield
                className="basis-full sm:basis-[49%]"
                label="Email Address"
                name="Email Address"
                type="email"
              />
            </div>
            <div className="basis-full sm:basis-[49%]">
              <Textfield
                className="basis-full sm:basis-[49%]"
                label="Phone"
                name="phone"
                type="tel"
              />
            </div>

            <div className="basis-full sm:basis-[49%] mt-3">
              <SelectOptions
                byDefault="State"
                name="staffing-need"
                options={["Instructor", "HR", "Sponsor", "Consulting"]}
              />
            </div>
            <div className="basis-full sm:basis-[49%] mt-3">
              <SelectOptions
                byDefault="Country"
                name="staffing-need"
                options={["Instructor", "HR", "Sponsor", "Consulting"]}
              />
            </div>
          </div>
          <div className="my-4 mx-1 ">
            <p className="mb-2">Message to Hiring Manager</p>
            <textarea
              placeholder="Type here..."
              aria-label="Message"
              rows={2}
              cols={85}
              name="Message"
              className="border-2 p-2 border-gray-300 w-full"
            ></textarea>
          </div>
          <div className="mx-1">
            <SelectOptions
              label=" Area of interest"
              byDefault="Instructor"
              className="w-[49%]"
              name="staffing-need"
              options={["HR", "Sponsor", "Consulting"]}
            />
          </div>

          <div className="mx-1 my-8">
            <button
              type="button"
              className="text-white bg-[#0d4cf9] hover:bg-[#5177e0]/90 focus:ring-4 focus:outline-none focus:ring-[#0d4cf9]/50 font-medium rounded-lg text-sm px-14 py-3 text-center inline-flex items-center  mr-2 mb-2"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewFrom;

const SelectOptions = ({
  label,
  name,
  byDefault,
  onChange,
  className,
  options,
}: {
  label?: string | undefined;
  name: string;
  byDefault: string;
  onChange?: any;
  className?: string | undefined;
  options: string[];
}) => {
  return (
    <div className={`${className}`}>
      <label htmlFor="media" className="block  font-bold text-gray-900">
        {label}
      </label>
      <select
        name={name}
        id="media"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option defaultValue={byDefault}>{byDefault}</option>
        {options.map((item, id) => (
          <option value={item} key={id}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
