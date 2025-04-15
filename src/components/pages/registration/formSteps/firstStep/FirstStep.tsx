import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { Label, TextInput } from "flowbite-react";
import Image from "next/image";
import ClosedEye from "../../../../../assets/homev2/ClosedEye.svg";
import { InputErrorMessage } from "../../../../utils/error";
import { InitialFormData } from "../../TopFormRegistration";

export type StepProps = {
  setStep: (step: number) => void;
  setFormData: Dispatch<SetStateAction<InitialFormData>>;
  formData: InitialFormData;
};

type RegistrationFirstStepFromData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

const FirstStep = (props: StepProps) => {
  const { setStep, setFormData, formData } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegistrationFirstStepFromData>({
    defaultValues: formData,
  });

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword((prev) => !prev);

  // Watch password field to compare with confirmPassword
  const password = watch("password");

  const submitFirstStep = (data: RegistrationFirstStepFromData) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(1);
  };

  return (
    <form id="step-form" onSubmit={handleSubmit(submitFirstStep)} className="w-full max-w-md mx-auto space-y-4 mt-10">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName" value="First Name" />
          <TextInput id="firstName" placeholder="First Name" {...register("firstName", { required: "First name is required" })} />
          {errors.firstName && <InputErrorMessage message={errors.firstName.message ?? "An error occurred"} />}
        </div>
        <div>
          <Label htmlFor="lastName" value="Last Name" />
          <TextInput id="lastName" placeholder="Last Name" {...register("lastName", { required: "Last name is required" })} />
          {errors.lastName && <InputErrorMessage message={errors.lastName.message ?? "An error occurred"} />}
        </div>
      </div>
      <div>
        <Label htmlFor="email" value="Email Address" />
        <TextInput id="email" placeholder="Email Address" {...register("email", { required: "Email is required" })} />
        {errors.email && <InputErrorMessage message={errors.email.message ?? "An error occurred"} />}
      </div>
      <div>
        <Label htmlFor="phone" value="Phone Number" />
        <TextInput id="phone" placeholder="Phone Number" {...register("phone", { required: "Phone number is required" })} />
        {errors.phone && <InputErrorMessage message={errors.phone.message ?? "An error occurred"} />}
      </div>
      <div className="w-full relative">
        <Label htmlFor="password" value="Create Password" />
        <TextInput
          id="password"
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          {...register("password", { required: "Password is required" })}
        />
        <div className="w-5 h-5 absolute right-3 top-9 cursor-pointer" onClick={togglePasswordVisibility}>
          <Image src={ClosedEye} alt="Toggle Password Visibility" width={20} height={20} />
        </div>
        {errors.password && <InputErrorMessage message={errors.password.message?? "An error occurred"} />}
      </div>
      <div className="w-full relative">
        <Label htmlFor="confirmPassword" value="Confirm Password" />
        <TextInput
          id="confirmPassword"
          placeholder="Confirm Password"
          type={showConfirmPassword ? "text" : "password"}
          {...register("confirmPassword", {
            required: "Confirm password is required",
            validate: (value) => value === password || "Passwords do not match",
          })}
        />
        <div className="w-5 h-5 absolute right-3 top-9 cursor-pointer" onClick={toggleConfirmPasswordVisibility}>
          <Image src={ClosedEye} alt="Toggle Password Visibility" width={20} height={20} />
        </div>
        {errors.confirmPassword && <InputErrorMessage message={errors.confirmPassword.message?? "An error occurred"} />}
      </div>
    </form>
  );
};

export default FirstStep;