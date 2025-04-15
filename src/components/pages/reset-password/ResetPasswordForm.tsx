/* eslint-disable react-hooks/exhaustive-deps */
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Label, TextInput } from "flowbite-react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import * as z from "zod";
import { useResetPasswordMutation } from "../../../feature/api/authApi";
import { InputErrorMessage } from "../../utils/error";
import ButtonLoader from "../../utils/loaders/ButtonLoader";
import { EyeIcon } from "@heroicons/react/24/outline";
import ClosedEye from "../../../assets/homev2/ClosedEye.svg"
import Image from 'next/image';

const signinFormSchema = z
  .object({
    password: z.string(),
    confirmPassword: z.string(),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password.length === 0) {
      ctx.addIssue({
        code: "custom",
        message: "Enter your password!",
        path: ["password"],
      });
    }
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "confirm password not matched!",
        path: ["confirmPassword"],
      });
    }
  });

type SigninFormData = {
  password: string;
  confirmPassword?: string;
};

const ResetPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormData>({
    resolver: zodResolver(signinFormSchema),
  });
  const [resetPassword, { error, data, isLoading, isSuccess, isError }] =
    useResetPasswordMutation();

  const router = useRouter();
  const token =
    typeof router.query.token === "string" ? router.query.token : "";

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword((prev) => !prev);

  const handleSignin = (data: SigninFormData) => {
    delete data.confirmPassword;
    resetPassword({ password: data.password, token: token });
  };

  useEffect(() => {
    if (isError) {
      toast.error((error as any).data.message);
    } else if (isSuccess) {
      toast.success("Your password reset Successfully!");
      setTimeout(() => {
        Router.push("/signin");
      }, 1500);
    }
  }, [isError, isSuccess]);

  return (
    <form
      className="rounded-lg space-y-6 w-full mx-1 sm:mx-5 max-w-md bg-white p-7 font-nunito"
      onSubmit={handleSubmit(handleSignin)}
    >
      <div className="text-left">
        <h3 className="text-3xl font-[500] text-gray-900">Reset your password</h3>
        <p className="text-sm mt-2 text-gray-600">
        Choose a passphrase of 8 characters or a password of 8 characters, including letters and numbers.
        </p>
      </div>
      <div className="w-full relative">
        <div className="mb-2 block">
          <Label htmlFor="password" value="Password" />
        </div>
        <TextInput id="password" placeholder="Password" type={showPassword ? "text" : "password"} {...register("password")} />
        <div className="w-5 h-5 absolute right-3 top-11 cursor-pointer" onClick={togglePasswordVisibility}>
          <Image
            src={ClosedEye}
            alt="Arrow Right"
            width={20}
            height={20}
            />
        </div>
        {errors.password && (
          <InputErrorMessage message={errors.password?.message || ""} />
        )}
      </div>
      <div className="w-full relative">
        <div className="mb-2 block">
          <Label htmlFor="confirmPassword" value="Confirm Password" />
        </div>
        <TextInput
          id="confirmPassword"
          placeholder="Confirm Password"
          type={showConfirmPassword ? "text" : "password"}
          {...register("confirmPassword")}
        />

        <div className="w-5 h-5 absolute right-3 top-11 cursor-pointer" onClick={toggleConfirmPasswordVisibility}>
          <Image
            src={ClosedEye}
            alt="Arrow Right"
            width={20}
            height={20}
            />
        </div>
        {errors.confirmPassword && (
          <InputErrorMessage message={errors.confirmPassword?.message || ""} />
        )}
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="w-full py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {isLoading ? <ButtonLoader /> : "Reset password"}
          </button>
          <p className="mt-2 text-sm text-gray-900">
          Don’t have an account?
          <Link href="/registration">
          <a className="text-blue-600 hover:underline ml-1">Sign Up</a>
          </Link>
          </p>
      </div>

    </form>
  );
};

export default ResetPasswordForm;
