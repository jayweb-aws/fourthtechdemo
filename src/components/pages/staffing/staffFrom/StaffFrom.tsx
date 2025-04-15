import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { InputErrorMessage } from "../../../utils/error"; // Assuming this is correctly implemented
import PhoneNumberField from "../../../common/forms/PhoneNumberField";

interface StaffFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  areaOfInterest: string;
  currentJob: string;
  staffingNeeds: string;
  message: string;
}

const StaffForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<StaffFormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      areaOfInterest: "",
      currentJob: "",
      staffingNeeds: "",
      message: "",
    },
  });

  const [countryCode, setCountryCode] = useState("+1");

  const onSubmit = (data: StaffFormData) => {
    const fullPhoneNumber = `${countryCode}${data.phone}`; // Combine country code with phone number
    const payload = {
      ...data,
      phone: fullPhoneNumber,
    };
    console.log("Form Payload:", payload);
    // Add your API call here if needed
  };

  return (
    <div className="container font-nunito">
      <div className="p-0 md:p-[2rem] bg-white container md:max-w-[1080px] mb-2 rounded-xl">
        <div className="">
          <div className="flex justify-center items-center">
            <h1 className="text-4xl font-semibold">Staffing</h1>
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center items-center flex-wrap gap-5">
            <div className="basis-full sm:basis-[49%]">
              <div className="flex flex-col">
                <label className="mb-1 text-small-text-color">First Name</label>
                <input
                  className="border-[0.5px] border-gray-200 rounded-3xl px-[16px] py-[13px]"
                  type="text"
                  placeholder="First name"
                  {...register("firstName", { required: "First name is required" })}
                />
                {errors.firstName && (
                  <InputErrorMessage message={errors.firstName.message} />
                )}
              </div>
            </div>
            <div className="basis-full sm:basis-[49%]">
              <div className="flex flex-col">
                <label className="mb-1 text-small-text-color">Last Name</label>
                <input
                  className="border-[0.5px] border-gray-200 rounded-3xl px-[16px] py-[13px]"
                  type="text"
                  placeholder="Last name"
                  {...register("lastName", { required: "Last name is required" })}
                />
                {errors.lastName && (
                  <InputErrorMessage message={errors.lastName.message} />
                )}
              </div>
            </div>
            <div className="basis-full sm:basis-[49%]">
              <div className="flex flex-col">
                <label className="mb-1 text-small-text-color">Email</label>
                <input
                  className="border-[0.5px] border-gray-200 rounded-3xl px-[16px] py-[13px]"
                  type="email"
                  placeholder="Email address"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <InputErrorMessage message={errors.email.message} />
                )}
              </div>
            </div>
            <div className="basis-full sm:basis-[49%]">
            <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <PhoneNumberField
                      className="basis-full sm:basis-[49%]"
                      label="Phone number"
                      name="phone"
                      register={register}
                      errors={errors}
                      placeholder="(555) 000-000"
                    />
                  )}
                />
            </div>
            <div className="basis-full sm:basis-[49%]">
              <SelectOptions
                label="Area of Interest"
                byDefault="Please Select"
                name="areaOfInterest"
                options={["Instructor", "HR", "Sponsor", "Consulting"]}
                register={register("areaOfInterest", { required: "Area of interest is required" })}
              />
              {errors.areaOfInterest && (
                <InputErrorMessage message={errors.areaOfInterest.message} />
              )}
            </div>
            <div className="basis-full sm:basis-[49%]">
              <SelectOptions
                label="Current Job"
                byDefault="Please Select"
                name="currentJob"
                options={["Instructor", "HR", "Sponsor", "Consulting"]}
                register={register("currentJob", { required: "Current job is required" })}
              />
              {errors.currentJob && (
                <InputErrorMessage message={errors.currentJob.message} />
              )}
            </div>
          </div>
          <div className="my-4">
            <SelectOptions
              label="Staffing Needs"
              byDefault="Please Select"
              className="w-[100%]"
              name="staffingNeeds"
              options={["Instructor", "HR", "Sponsor", "Consulting"]}
              register={register("staffingNeeds", { required: "Staffing needs is required" })}
            />
            {errors.staffingNeeds && (
              <InputErrorMessage message={errors.staffingNeeds.message} />
            )}
          </div>
          <div className="my-4">
            <p className="mb-2 text-small-text-color">Message to Hiring Manager</p>
            <textarea
              placeholder="Type here..."
              aria-label="Message"
              rows={2}
              cols={85}
              className="border-[0.5px] border-gray-200 rounded-3xl w-full px-[16px] py-[13px]"
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && (
              <InputErrorMessage message={errors.message.message} />
            )}
          </div>
          <div className="mx-1 my-8 flex flex-col sm:flex-row items-center w-full md:w-auto mt-11 gap-4 sm:gap-5">
            <button
              type="submit" // Changed to "submit" to trigger form submission
              className="w-[100%] bg-[#FF4D4F] text-white text-[15px] font-poppins font-semibold leading-[24px] text-center px-4 md:px-8 py-4 md:py-4 rounded-full hover:bg-[#e04345] h-[54px] md:h-[54px] shadow-lg transition-all duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

interface SelectOptionsProps {
  label?: string;
  name: string;
  byDefault: string;
  options: string[];
  register: any;
  className?: string;
}

const SelectOptions = ({ label, name, byDefault, options, register, className }: SelectOptionsProps) => {
  return (
    <div className={`${className} rounded-l-[0.25rem] rounded-r-[0.25rem]`}>
      <label htmlFor={name} className="block text-small-text-color">
        {label}
      </label>
      <select
        id={name}
        className="border-[0.5px] border-gray-200 rounded-3xl text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full px-[16px] py-[13px]"
        {...register}
      >
        <option value="">{byDefault}</option>
        {options.map((item, id) => (
          <option value={item} key={id}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StaffForm;