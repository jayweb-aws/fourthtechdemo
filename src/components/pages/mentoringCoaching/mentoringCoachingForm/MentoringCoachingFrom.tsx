import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { InputErrorMessage } from "../../../../components/utils/error/index";
import { useCreateMentoringMutation } from "../../../../feature/api/dashboardApi";
import toast from 'react-hot-toast';
import { Spinner } from "flowbite-react";
import PhoneNumberField from "../../../common/forms/PhoneNumberField";

interface MentoringData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  interest: string;
  currentJob: string;
  message: string;
}

const MentoringCoachingFrom = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<MentoringData>();
  const [mentoringCreate, { error, data, isLoading, isSuccess, isError }] =
    useCreateMentoringMutation();

    const submitMentoringCoachingForm = (data: MentoringData) => {
      // Combine phone number with country code here if needed
      const fullPhoneNumber = `${data.phone}`; // Country code will be added in the payload
      const payload = {
        ...data,
        phone: fullPhoneNumber, // Map to the expected API field name
      };
      mentoringCreate(payload);
    };

  useEffect(() => {
    if (isError) {
      toast.error("Mentoring couldn't created");
    }
    if (isSuccess) {
      toast.success("Mentoring Created Successfully");
      reset();
    }
  }, [isError, isSuccess]);

  return (
    <div className="container font-nunito">
      <div className="p-0 md:p-[2rem] bg-white container md:max-w-[1080px] mb-2 rounded-xl">
        <div className="">
          <div className="flex justify-center items-center">
            <h1 className="text-4xl font-semibold">Mentoring and Coaching</h1>
          </div>
          <div>
            <div className="text-sm flex lg:items-center md:items-center lg:justify-center md:justify-center flex-col my-5 text-gray-400">
              <p className="max-w-[500px] text-center">
                Passionate about mentoring and coaching?
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <form onSubmit={handleSubmit(submitMentoringCoachingForm)}>
            <div className="flex justify-center items-center flex-wrap gap-5">
              <div className="basis-full sm:basis-[49%]">
                <div className="flex flex-col">
                  <label className="mb-1 text-small-text-color">First Name</label>
                  <input
                    className="border-[0.5px] border-gray-200 rounded-3xl px-[16px] py-[13px]"
                    type="text"
                    placeholder="First name"
                    {...register("firstName", { required: true })}
                  />
                  {errors.firstName && (
                    <InputErrorMessage message={"Name can't be empty"} />
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
                    {...register("lastName", { required: true })}
                  />
                  {errors.lastName && (
                    <InputErrorMessage message={"Name can't be empty"} />
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
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <InputErrorMessage message={"Email can't be empty"} />
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
              {/* <div className="basis-full sm:basis-[49%]">
                <div className="flex flex-col">
                  <label className="mb-1 text-small-text-color">Phone</label>
                  <input
                    className="border-[0.5px] border-gray-200 rounded-3xl px-[16px] py-[13px]"
                    type="tel"
                    placeholder="(555) 000-000"
                    {...register("phone", { required: true })}
                  />
                  {errors.phone && (
                    <InputErrorMessage message={"Phone can't be empty"} />
                  )}
                </div>
              </div> */}
              <div className="basis-full sm:basis-[49%]">
                <SelectOptions
                  label="Area of interest"
                  name="interest"
                  options={["Mentoring", "Coaching"]}
                  register={{ ...register("interest", { required: true }) }}
                  byDefault="Please Select"
                />
                {errors.interest && (
                  <InputErrorMessage message={"Interest can't be empty"} />
                )}
              </div>
              <div className="basis-full sm:basis-[49%]">
                <div className="flex flex-col">
                  <label className="mb-1 text-small-text-color">Current Job</label>
                  <input
                    className="border-[0.5px] border-gray-200 rounded-3xl px-[16px] py-[13px]"
                    type="text"
                    placeholder="Current job"
                    {...register("currentJob", { required: true })}
                  />
                  {errors.currentJob && (
                    <InputErrorMessage message={"Current Job can't be empty"} />
                  )}
                </div>
              </div>
            </div>

            <div className="my-4">
              <p className="mb-2 text-small-text-color">Message to Hiring Manager</p>
              <textarea
                placeholder="Type here..."
                aria-label="Message"
                rows={2}
                cols={85}
                className="border-[0.5px] border-gray-200 rounded-3xl w-full px-[16px] py-[13px]"
                {...register("message", { required: true })}
              />
              {errors.message && (
                <InputErrorMessage message={"Message can't be empty"} />
              )}
            </div>

            <div className="mx-1 my-8 flex flex-col sm:flex-row items-center w-full md:w-auto mt-11 gap-4 sm:gap-5">
              <button
                type="submit"
                className="w-[100%] bg-[#FF4D4F] text-white text-[15px] font-poppins font-semibold leading-[24px] text-center px-4 md:px-8 py-4 rounded-full hover:bg-[#e04345] h-[54px] shadow-lg transition-all duration-300"
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
  );
};

export default MentoringCoachingFrom;

export const SelectOptions = ({
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
        name={name}
        id="media"
        className="border-[0.5px] border-gray-200 rounded-3xl text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full px-[16px] py-[13px]"
        {...register}
      >
        <option value="" disabled>{byDefault}</option>
        {options.map((item, id) => (
          <option value={item} key={id}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};