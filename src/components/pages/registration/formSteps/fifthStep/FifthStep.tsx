import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { StepProps } from "../firstStep/FirstStep";
import Router from "next/router";
import toast from 'react-hot-toast';
import { useAppDispatch } from "../../../../../app/hooks";
import { useRegisterMutation } from "../../../../../feature/api/authApi";
import RegistrationSuccess from "../../../../../pages/RegistrationSuccess";

const FifthStep = ({ setStep, setFormData, formData }: StepProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
  });

  const dispatch = useAppDispatch();
  const [registration, { error, data, isLoading, isSuccess, isError }] = useRegisterMutation();
  const [showSuccess, setShowSuccess] = useState(false)

  const submitFifthStep = (data:any) => {
    console.log("🚀 ~ submitFifthStep ~ data:", data)
    const userData = { ...formData, ...data };
    delete userData.agree;
    delete userData.password; 
    delete userData.confirmPassword;
    setFormData((prev) => ({ ...prev, ...data }));
    registration(userData);
    // console.log("🚀 ~ submitFifthStep ~ userData:", userData)
  };

  useEffect(() => {
    if (isError) {
      toast.error((error as any)?.data?.message);
    } else if (isSuccess) {
      toast.success(
        "Registration successful. You will get next instructions via a email soon."
      );
      setShowSuccess(true)
      // setTimeout(() => {
        Router.push(`/RegistrationSuccess?email=${formData.email}`);
        // Router.push("/");
      // }, 1500);
    }
  }, [isError, isSuccess]);

  return (
    <form id="step-form" onSubmit={handleSubmit(submitFifthStep)} className="w-full max-w-md mx-auto space-y-4 mt-10">
      <div className="border rounded-lg p-4 flex items-center justify-between shadow-sm" style={{ borderColor: "#6366f1" }}>
        <div>
          <label className="block text-sm font-bold text-gray-900">Terms Agreement</label>
          <p className="text-gray-600 text-sm">I agree to the Terms and Conditions and Privacy Policy</p>
        </div>
        <input
          type="checkbox"
          {...register("termsAgreement", { required: "You must agree to the terms" })}
          className="form-checkbox h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
        />
      </div>
      {errors.termsAgreement && <p className="text-red-500 text-xs">{errors.termsAgreement.message}</p>}

      <div className="border rounded-lg p-4 flex items-center justify-between shadow-sm" style={{ borderColor: "#e5e7eb" }}>
        <div>
          <label className="block text-sm font-bold text-gray-900">
            Newsletter Subscription <span className="text-gray-500">(optional)</span>
          </label>
          <p className="text-gray-600 text-sm">I would like to receive updates about new courses and special offers</p>
        </div>
        <input
          type="checkbox"
          {...register("newsletterSubscription")}
          className="form-checkbox h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
        />
      </div>
    </form>
  );
};

export default FifthStep;