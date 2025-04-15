import { TextInput } from "flowbite-react";
import { UseFormRegister } from "react-hook-form";

type FormTextInputProps = {
  label?: string;
  name: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  register: UseFormRegister<any>;
  error: string | undefined;
  required?: boolean;
};

export const FormTextInput = (props: FormTextInputProps) => {
  const { label, name, type, placeholder, register, error, required } = props;
  return (
    <div className="w-full !mb-3">
      <h4 className="mb-2 font-semibold text-[16px]">{label}</h4>
      <TextInput
        id={name}
        type={type ? type : "text"}
        placeholder={placeholder}
        {...register(name)}
        helperText={error ? error : ""}
        color={error ? "failure" : "#858585"}
      />
    </div>
  );
};
