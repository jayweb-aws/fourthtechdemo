/* eslint-disable react-hooks/exhaustive-deps */
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Label, TextInput } from "flowbite-react";
import Link from "next/link";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import * as z from "zod";
import { useForgetPasswordRequestMutation } from "../../../feature/api/authApi";
import { InputErrorMessage } from "../../utils/error";
import ButtonLoader from "../../utils/loaders/ButtonLoader";

const signinFormSchema = z.object({
  email: z.string().email("Enter a valid email address!"),
});

type SigninFormData = z.infer<typeof signinFormSchema>;

const ForgetPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormData>({
    resolver: zodResolver(signinFormSchema),
  });
  const [
    forgetPasswordRequest,
    { error, data, isLoading, isSuccess, isError },
  ] = useForgetPasswordRequestMutation();

  const handleRequest = (data: SigninFormData) => {
    forgetPasswordRequest(data);
  };

  // console.log("error", error);
  // console.log("data", data.user);
  // console.log("loading", isLoading, "isError", isError);
  useEffect(() => {
    if (isError) {
      toast.error((error as any).data.message);
      // toast.error(error?.data?.message);
    } else if (isSuccess) {
      toast.success(
        "Please check your email for further instructions with a link to set a new password. If you don't see the email within a few minutes, check your spam or junk folder."
      );
    }
  }, [isError, isSuccess]);

  return (
    <form
      className="rounded-lg space-y-6 w-full mx-1 sm:mx-5 max-w-md bg-white p-7 font-nunito"
      onSubmit={handleSubmit(handleRequest)}
    >
      <div className="text-left">
        <h3 className="text-3xl font-[500] text-gray-900">Forgot password?</h3>
        <p className="text-sm mt-2 text-gray-600">
        Enter the email address you used when you joined and we’ll send you instructions to reset your password
        </p>
      </div>
      <div className="w-full">
        <div className="mb-2 block">
          <Label htmlFor="email" value="Email" />
        </div>
        <TextInput
          id="email"
          type="email"
          placeholder="name@flowbite.com"
          {...register("email")}
        />
        {errors.email && (
          <InputErrorMessage message={errors.email?.message || ""} />
        )}
      </div>
      {/* <div>
        <p>
          Remember your password?
          <Link href="/signin">
            <a className="text-blue-600"> Try to sign in</a>
          </Link>
        </p>
      </div> */}
      {/* <div className="mx-auto">
        <Button className="min-w-[10rem]" type="submit">
          {isLoading ? <ButtonLoader /> : "Next"}
        </Button>
      </div> */}

      <div className="text-center">
          <button
            type="submit"
            className="w-full py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {isLoading ? <ButtonLoader /> : "Send Link"}
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

export default ForgetPasswordForm;
