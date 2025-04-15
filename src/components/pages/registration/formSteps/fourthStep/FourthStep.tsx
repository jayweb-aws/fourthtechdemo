import { useForm } from "react-hook-form";
import { InputErrorMessage } from "../../../../utils/error";
import { StepProps } from "../firstStep/FirstStep";
import { Label } from "flowbite-react";

type RegistrationFourthStepFromData = {
  studentType: string;
  message: string;
};

const FourthStep = (props: StepProps) => {
  const { setStep, setFormData, formData } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFourthStepFromData>({
    defaultValues: formData,
  });

  const submitFourthStep = (data: RegistrationFourthStepFromData) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(4);
  };

  return (
    <form id="step-form" onSubmit={handleSubmit(submitFourthStep)} className="w-full max-w-md mx-auto space-y-4 mt-10">
      <div>
        <Label htmlFor="Goal for Taking Courses" value="Goal for Taking Courses(optional)" />
        <select
          {...register("studentType")}
          className="border border-gray-300 px-3 py-2 w-full rounded-md"
        >
          <option value="">Select your Goal</option>
          {["self-pace", "instructor-led"].map((item, id) => (
            <option value={item} key={id} className="capitalize">
              {item}
            </option>
          ))}
        </select>
        {errors.studentType && <InputErrorMessage message={errors.studentType.message ?? "An error occurred"} />}
      </div>

      <div>
      <Label htmlFor="How Did You Hear About Us?" value="How Did You Hear About Us?(optional)" />
        <textarea
          placeholder="Type here..."
          aria-label="Message"
          rows={2}
          cols={85}
          className="border-[0.5px] border-gray-300 rounded-md w-full px-[16px] py-[13px] p-2"
          // {...register("message", { required: "This field is required" })}
           {...register("message")}
        ></textarea>
        {/* {errors.message && <InputErrorMessage message={errors.message.message ?? "An error occurred"} />} */}
      </div>
    </form>
  );
};

export default FourthStep;