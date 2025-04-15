import { useForm } from "react-hook-form";
import { InputErrorMessage } from "../../../../utils/error";
import { StepProps } from "../firstStep/FirstStep";
import { Label } from "flowbite-react";

type RegistrationSecondStepFromData = {
  state: string;
  country: string;
};

const SecondStep = (props: StepProps) => {
  const { setStep, setFormData, formData } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationSecondStepFromData>({
    defaultValues: {
      state: formData.state,
      country: formData.country,
    },
  });

  const submitSecondStep = (data: RegistrationSecondStepFromData) => {
    console.log("🚀 ~ submitSecondStep ~ data:", data)
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(2);
  };

  return (
    <form id="step-form" onSubmit={handleSubmit(submitSecondStep)} className="w-full max-w-md mx-auto space-y-4 mt-10">
      <div>
        <Label htmlFor="state" value="Region" />
        <select
          {...register("state", { required: "Region is required" })}
          id="state"
          className="w-full border border-gray-300 p-2 rounded-md"
        >
          <option value="">Enter your region</option>
          {["Alabama", "Alaska", "Arizona"].map((item, id) => (
            <option value={item} key={id}>{item}</option>
          ))}
        </select>
        {errors.state && <InputErrorMessage message={errors.state.message?? "An error occurred"} />}
      </div>
      <div>
        <Label htmlFor="country" value="Country (optional)" />
        <select
          {...register("country")}
          id="country"
          className="w-full border border-gray-300 p-2 rounded-md"
        >
          <option value="">Enter Your Country</option>
          {["Afghanistan", "Albania", "Algeria", "Andorra"].map((item, id) => (
            <option value={item} key={id}>{item}</option>
          ))}
        </select>
        {errors.country && <InputErrorMessage message={errors.country.message?? "An error occurred"} />}
      </div>
    </form>
  );
};

export default SecondStep;