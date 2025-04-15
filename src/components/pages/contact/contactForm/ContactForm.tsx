import React, { useEffect } from "react";
import Textfield from "../../../common/forms/Textfield";
import contactLogo from "../../../../assets/contact-us-logo.png";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { InputErrorMessage } from "../../../utils/error/index";
import ImgContainer from "../../../../assets/homev2/ImgContainer.svg"
import {
  useSendContactMutation,
  useGetAllActiveCourseQuery,
} from "../../../../feature/api/dashboardApi";
import toast from 'react-hot-toast';
import { Spinner } from "flowbite-react";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      jobTitle: "",
      phone: "",
      message: "",
      interest: "",
      found: "",
    },
  });
  const [sendContact, { error, data, isLoading, isSuccess, isError }] =
    useSendContactMutation();
  const {
    data: courseData,
    isSuccess: courseSuccess,
    isError: courseIsError,
    isLoading: courseLoading,
  } = useGetAllActiveCourseQuery({});

  const formHandler = (data: any) => {
    sendContact(data);
  };
  useEffect(() => {
    if (isError) {
      toast.error("Email send Errro");
      //   console.log(error);
    } else if (isSuccess) {
      toast.success("Email Send Successfully!");
      reset();
    }
  }, [isError, isSuccess]);

  return (
    <div className="flex flex-col md:flex-row font-nunito gap-10 mb-0 md:mb-14">
      <div className="w-full md:w-[50%] flex justify-end p-4 md:p-0">
        <Image
          src={ImgContainer}
          width={700}
          height={1044}
          alt="Back Arrow"
          className="object-contain"
        />
      </div>
      <div className="w-full md:w-[50%] max-w-[700px]">
        <div className="p-0 md:p-[2rem] bg-white container md:max-w-[1080px] mb-2 rounded-xl">
          <div className="container  ">
            <div className="flex justify-start items-center">
              <h1 className="text-3xl lg:text-4xl font-semibold pt-[20px]">Connect With Us</h1>
            </div>
            <div>
              <div className="text-sm flex lg:items-center md:items-center lg:justify-center md:justify-center flex-col my-5 text-gray-400">
                <p className="w-full">
                For general inquiries, partnerships, or collaborations, please fill out the form below.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-14">
            <form onSubmit={handleSubmit(formHandler)}>
              <div className="flex justify-center items-center flex-wrap gap-3">
                <div className="basis-full sm:basis-[49%]">
                  <div className={"flex flex-col font-nunito "}>
                    <label className="mb-1 font-nunito text-small-text-color">
                      {"First Name"}:
                    </label>
                    <input
                      className="border-[0.5px] border-gray-200 rounded-3xl px-[16px] py-[13px]"
                      type={"text"}
                      {...register("firstName", { required: true })}
                    />
                  </div>
                </div>
                <div className="basis-full sm:basis-[49%]">
                  <div className={"flex flex-col font-nunito "}>
                    <label className="mb-1 font-nunito text-small-text-color">
                      {"Last Name"}:
                    </label>
                    <input
                      className="border-[0.5px] border-gray-200 rounded-3xl px-[16px] py-[13px]"
                      type={"text"}
                      {...register("lastName", { required: true })}
                    />
                  </div>
                </div>
                
              </div>
              <div className="basis-full sm:basis-[49%]">
                  <div className={"flex flex-col font-nunito "}>
                    <label className="mb-1 font-nunito text-small-text-color">
                      {"Email Address"}:
                    </label>
                    <input
                      className="border-[0.5px] border-gray-200 rounded-3xl px-[16px] py-[13px]"
                      type={"email"}
                      {...register("email", { required: true })}
                    />
                  </div>
                </div>
                <div className="basis-full sm:basis-[49%]">
                  <div className={"flex flex-col font-nunito "}>
                    <label className="mb-1 font-nunito text-small-text-color">
                      {"Company"}:
                    </label>
                    <input
                      className="border-[0.5px] border-gray-200 rounded-3xl px-[16px] py-[13px]"
                      type={"text"}
                      {...register("company", { required: true })}
                    />
                  </div>
                </div>
                <div className="basis-full sm:basis-[49%]">
                  <div className={"flex flex-col font-nunito "}>
                    <label className="mb-1 font-nunito text-small-text-color">
                      {"Job Title"}:
                    </label>
                    <input
                      className="border-[0.5px] border-gray-200 rounded-3xl px-[16px] py-[13px]"
                      type={"text"}
                      {...register("jobTitle", { required: true })}
                    />
                  </div>
                </div>
                <div className="basis-full sm:basis-[49%]">
                  <div className={"flex flex-col font-nunito "}>
                    <label className="mb-1 font-nunito text-small-text-color">
                      {"Phone"}:
                    </label>
                    <input
                      className="border-[0.5px] border-gray-200 rounded-3xl px-[16px] py-[13px]"
                      type={"tel"}
                      {...register("phone", { required: true })}
                    />
                  </div>
                </div>
              <div className="my-4 mx-1">
                <p className="mb-2  text-small-text-color">
                  Message to Hiring Manager
                </p>
                <textarea
                  placeholder="Type here..."
                    aria-label="Message"
                    rows={2}
                    cols={85}
                    className="border-[0.5px] border-gray-200 rounded-3xl w-full px-[16px] py-[13px] p-2"
                    {...register("message", { required: true })}
                  ></textarea>
              </div>
              <div className="flex justify-center items-center flex-wrap gap-3">
                <div className="basis-full sm:basis-[49%]">
                  <div className="font-nunito">
                    <label
                      htmlFor="media"
                      className="block mb-1 text-small-text-color"
                    >
                      {"Program of interest"}
                    </label>
                    <select
                      {...register("interest", { required: true })}
                      id="media"
                      className="border-[0.5px] border-gray-200 rounded-3xl px-[16px] py-[13px] bg-gray-50 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                      <option value={""}>{"Select an option"}</option>
                      {courseSuccess &&
                        courseData.data.courses.map((item: any) => (
                          <option value={item.title} key={item._id}>
                            {item.title}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className="basis-full sm:basis-[49%]">
                  <SelectOptions
                    label=" How did you find Fourth IT Academy"
                    byDefault="Select an option"
                    name="found"
                    register={register}
                    options={["Twitter", "Instagram", "Facebook", "Linkedin"]}
                  />
                </div>
              </div>
              <div className="mx-1 my-8 flex flex-col sm:flex-row items-center w-full md:w-auto mt-11 gap-4 sm:gap-5">
                  <button
                      type="submit"
                      className="w-[100%] bg-[#FF4D4F] text-white text-[15px] font-poppins font-semibold leading-[24px] text-center px-4 md:px-8 py-4 md:py-4 rounded-full hover:bg-[#e04345] h-[54px] md:h-[54px] shadow-lg transition-all duration-300"
                      >
                        {isLoading ? (
                          <>
                            <Spinner /> loading...
                          </>
                          ) : (
                            "Submit"
                          )}
                    </button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
const SelectOptions = ({
  label,
  name,
  byDefault,
  onChange,
  className,
  options,
  register,
}: {
  label?: string | undefined;
  name: string;
  byDefault: string;
  onChange?: any;
  className?: string | undefined;
  options: string[];
  register: any;
}) => {
  return (
    <div className="font-nunito">
      <label htmlFor="media" className="block mb-1 text-small-text-color">
        {label}
      </label>
      <select
        {...register(name, { required: true })}
        id="media"
        className="border-[0.5px] border-gray-200 rounded-3xl px-[16px] py-[13px] bg-gray-50 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option value={""}>{byDefault}</option>
        {options.map((item, id) => (
          <option value={item} key={id}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ContactForm;
