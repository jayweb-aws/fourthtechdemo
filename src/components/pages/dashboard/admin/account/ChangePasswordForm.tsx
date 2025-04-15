/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "flowbite-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { useChangePasswordMutation } from "../../../../../feature/api/userApi";
import { InputErrorMessage } from "../../../../utils/error";
import ButtonLoader from "../../../../utils/loaders/ButtonLoader";

type ChangePasswordFormData = {
  currentPassword: string;
  password: string;
  passwordConfirm: string;
};

const ChangePasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePasswordFormData>();
  const [
    changePassword,
    {
      error: changePasswordError,
      isLoading: isChangePasswordLoading,
      isSuccess: isChangePasswordSuccess,
      isError: isChangePasswordError,
    },
  ] = useChangePasswordMutation();

  const handlePasswordChange = (data: ChangePasswordFormData) => {
    changePassword(data);
  };

  useEffect(() => {
    if (isChangePasswordError) {
      toast.error((changePasswordError as any).data.message);
    } else if (isChangePasswordSuccess) {
      toast.success("Password has been changed Successfully!");
    }
  }, [isChangePasswordSuccess, isChangePasswordError]);

  return (
    <form onSubmit={handleSubmit(handlePasswordChange)}>
      <div className="my-5">
        <h2 className="text-[#232D42] text-lg md:text-2xl font-medium mb-6">
          Change your password
        </h2>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6 space-y-2">
            <label className="block text-[#232D42]" htmlFor={"currentPassword"}>
              Current Password
            </label>
            <input
              className="block w-full bg-[#F9F9F9]  rounded-md px-2.5 py-1.5 text-[#8A92A6] border-0"
              type="password"
              id="currentPassword"
              {...register("currentPassword", { required: true })}
            />
            {errors.currentPassword && (
              <InputErrorMessage message={"Enter your current password!"} />
            )}
          </div>
          <div className="col-span-12 lg:col-span-6 space-y-2">
            <label className="block text-[#232D42]" htmlFor={"password"}>
              New Password
            </label>
            <input
              className="block w-full bg-[#F9F9F9]  rounded-md px-2.5 py-1.5 text-[#8A92A6] border-0"
              type="password"
              id="password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <InputErrorMessage message={"Enter a new password!"} />
            )}
          </div>
          <div className="col-span-12 lg:col-span-6 space-y-2">
            <label className="block text-[#232D42]" htmlFor={"passwordConfirm"}>
              Confirm New Password
            </label>
            <input
              className="block w-full bg-[#F9F9F9]  rounded-md px-2.5 py-1.5 text-[#8A92A6] border-0"
              type="password"
              id="passwordConfirm"
              {...register("passwordConfirm", { required: true })}
            />
            {errors.passwordConfirm && (
              <InputErrorMessage message={"Confirm your new password!"} />
            )}
          </div>
        </div>
      </div>
      <Button className="min-w-[10rem] my-5" type="submit">
        {isChangePasswordLoading ? <ButtonLoader /> : "Change Password"}
      </Button>
    </form>
  );
};

export default ChangePasswordForm;
