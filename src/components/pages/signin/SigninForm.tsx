/* eslint-disable react-hooks/exhaustive-deps */
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useEffect, useState } from "react";
import Router from "next/router";
import { useForm } from "react-hook-form";
// import toast from 'react-hot-toast';
import toast from 'react-hot-toast';
import * as z from "zod";
import { useAppDispatch } from "../../../app/hooks";
import { useLoginMutation } from "../../../feature/api/authApi";
import { signin } from "../../../feature/auth/authSlice";
import ButtonLoader from "../../utils/loaders/ButtonLoader";
import Google from "../../../assets/homev2/Google.svg"
import ClosedEye from "../../../assets/homev2/ClosedEye.svg"
import Image from "next/image";

const signinFormSchema = z
  .object({
    email: z.string().email("Enter a Valid Email Address!"),
    password: z.string(),
  })
  .superRefine(({ password }, ctx) => {
    if (password.length === 0) {
      ctx.addIssue({
        code: "custom",
        message: "Enter your password!",
        path: ["password"],
      });
    }
  });

type SigninFormData = z.infer<typeof signinFormSchema>;

const SigninForm = () => {
    const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormData>({
    resolver: zodResolver(signinFormSchema),
  });
  const [login, { error, data, isLoading, isSuccess, isError }] =
    useLoginMutation();
  const dispatch = useAppDispatch();

  const handleSignin = (data: SigninFormData) => {
    login(data);
  };

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  useEffect(() => {
    if (isError) {
      toast.error((error as any)?.data?.message);
    } else if (isSuccess) {
      const {
        id,
        _id,
        title,
        firstName,
        lastName,
        gender,
        email,
        phone,
        state,
        country,
        currentJob,
        studentType,
        status,
        highestStudy,
        avatar,
        roles = [],
        expertise = "",
        houseOrFlat = "",
        landMark = "",
        streetAddress = "",
        townOrCity = "",
        stateOrCountry = "",
        postalOrZip = "",
        userName = "",
      } = data?.data?.user;

      dispatch(
        signin({
          id,
          _id,
          title,
          firstName,
          lastName,
          gender,
          email,
          phone,
          state,
          country,
          currentJob,
          studentType,
          status,
          highestStudy,
          avatar,
          roles,
          expertise,
          houseOrFlat,
          landMark,
          streetAddress,
          townOrCity,
          stateOrCountry,
          postalOrZip,
          userName,
        })
      );

      toast.success("Sign in Successfully!");
      setTimeout(() => {
        Router.push("/dashboard");
      }, 1500);
    }
  }, [isError, isSuccess]);

  return (
    <form
      className="space-y-6 w-full max-w-md p-7 font-sans"
      onSubmit={handleSubmit(handleSignin)}
    >
      {/* Welcome Text */}
      <div className="text-left">
        <h3 className="text-3xl font-[500] text-gray-900">Welcome Back!</h3>
        <p className="text-sm mt-2 text-gray-600">
          Welcome to a secure, powerful, and private workspace.
        </p>
      </div>

      {/* Continue with Google Button */}
      <button
        type="button"
        className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <Image width={24} height={24} src={Google} alt="image" />
        <span className="ml-2">Continue with Google</span>
      </button>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-[#F5F6FA] text-gray-500">or</span>
        </div>
      </div>

      {/* Email Field */}
      <div className="w-full">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          className="mt-1 w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          {...register("email")}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">
            {(errors.email as any)?.message || ""}
          </p>
        )}
      </div>

      {/* Password Field */}
      <div className="w-full relative">
        <div className="flex justify-between">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
          Password
          </label>
          <Link href="/forget-password">
            <a className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </Link>
        </div>
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          className="mt-1 w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          {...register("password")}
        />
        <div className="w-5 h-5 absolute right-3 top-[2.3rem] cursor-pointer" onClick={togglePasswordVisibility}>
          <Image
            src={ClosedEye}
            alt="Arrow Right"
            width={20}
            height={20}
            />
          </div>
        {errors.password && (
          <p className="mt-1 text-sm text-red-600">
            {(errors.password as any)?.message || ""}
          </p>
        )}
      </div>

      {/* Sign Up Link */}
      <div className="text-center">
      <button
          type="submit"
          className="w-full py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {isLoading ? <ButtonLoader /> : "Sign in"}
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

export default SigninForm;