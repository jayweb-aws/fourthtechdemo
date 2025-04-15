import React from "react";
import { useForm } from "react-hook-form";
import { InputErrorMessage } from "../../../../utils/error";
import { StepProps } from "../firstStep/FirstStep";
import { Label } from "flowbite-react";

type RegistrationThirdStepFromData = {
  signup_reason: string;
  highestStudy: string;
};

const ThirdStep = ({ setStep, setFormData, formData }: StepProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationThirdStepFromData>({
    defaultValues: formData,
  });

  const submitThirdStep = (data: RegistrationThirdStepFromData) => {
    setStep(3);
    setFormData((prev) => ({ ...prev, ...data }));
  };

  return (
    <form id="step-form" onSubmit={handleSubmit(submitThirdStep)} className="w-full max-w-md mx-auto space-y-4 mt-10">
      <div>
        <Label htmlFor="Reason for Signing Up" value="Reason for Signing Up" />
        <select
          {...register("signup_reason", { required: "Reason is required" })}
          id="signup_reason"
          className="border border-gray-300 px-3 py-2 w-full rounded-md"
        >
          <option value="">Enter your reason</option>
          {["self-pace", "instructor-led"].map((item, id) => (
            <option value={item} key={id} className="capitalize">
              {item}
            </option>
          ))}
        </select>
        {errors.signup_reason && <InputErrorMessage message={errors.signup_reason.message?? "An error occurred"} />}
      </div>

      <div>
      <Label htmlFor="Area of Interest" value="Area of Interest(optional)" />
        
        <select
          {...register("highestStudy")}
          className="border border-gray-300 px-3 py-2 w-full rounded-md"
        >
          <option value="">Enter your Interest</option>
          {["Some high school", "High school diploma or GED", "Bachelor's degree", "Some graduate coursework", "Graduate degree"].map((item, id) => (
            <option value={item} key={id}>
              {item}
            </option>
          ))}
        </select>
        {errors.highestStudy && <InputErrorMessage message={errors.highestStudy.message?? "An error occurred"} />}
      </div>
    </form>
  );
};

export default ThirdStep;