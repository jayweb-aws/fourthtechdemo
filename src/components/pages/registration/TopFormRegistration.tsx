import { useState } from "react";
import SecondStep from "./formSteps/secondStep/SecondStep";
import ThirdStep from "./formSteps/thirdStep/ThirdStep";
import FourthStep from "./formSteps/fourthStep/FourthStep";
import FifthStep from "./formSteps/fifthStep/FifthStep";
import FirstStep from "./formSteps/firstStep/FirstStep";
import ArrowLeftIcon from "../../../assets/homev2/ArrowLeftIcon.svg"
import Image from "next/image";

export type InitialFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  state: string;
  country: string;
  currentJob?: string;
  studentType?: string;
  highestStudy?: string;
  knowFrom?: string;
  termsAgreement?: boolean;
  newsletterSubscription?: boolean;
  agree?: boolean;
  message?: string;
};

const initialFormData: InitialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  state: "",
  country: ""
};

const TopFormRegistration = () => {
  const [formData, setFormData] = useState<InitialFormData>(initialFormData);
  const [step, setStep] = useState(0);

  const renderStep = () => {
    switch (step) {
      case 0:
        return <FirstStep setStep={setStep} setFormData={setFormData} formData={formData} />;
      case 1:
        return <SecondStep setStep={setStep} setFormData={setFormData} formData={formData} />;
      case 2:
        return <ThirdStep setStep={setStep} setFormData={setFormData} formData={formData} />;
      case 3:
        return <FourthStep setStep={setStep} setFormData={setFormData} formData={formData} />;
      default:
        return <FifthStep setStep={setStep} setFormData={setFormData} formData={formData} />;
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <div className="mb-6 flex items-center w-[65%] gap-2">
        <div className="w-full bg-gray-200 h-1.5 rounded-full">
          <div 
            className="bg-blue-600 h-1.5 rounded-full" 
            style={{ width: `${(step + 1) * 20}%` }}
          ></div>
        </div>
        <p className="text-right text-gray-500 text-sm mt-1">{step + 1}/5</p>
      </div>

      <div className="text-left">
        <h3 className="text-3xl font-[500] text-gray-900">
        {{
            0: "Enter Personal Details",
            1: "Select Location Information",
            2: "Select Reason for Signing Up",
            3: "Provide Additional Information",
            4: "Agree to Terms and Conditions",
          }[step] || " Agree to Terms and Conditions"}
        </h3>
      </div>

      {renderStep()}

      <div className="flex justify-between items-center mt-6 gap-3">
        <button
          type="button"
          onClick={() => setStep(prev => Math.max(prev - 1, 0))}
          className="w-[15%] flex justify-center items-center py-3 border border-[#c2c2c2] bg-white hover:bg-[#c1c1c1] border-transparent rounded-lg text-sm font-medium text-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Image
            src={ArrowLeftIcon}
            alt="Arrow Right"
            width={20}
            height={20}
            />
        </button>

        <button
          type="submit"
          form="step-form"
          className="w-[85%] py-3 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {step === 4 ? "Submit" : "Next Step"}
        </button>
      </div>

      <p className="flex justify-start text-center mt-4 text-gray-500">
        Already have an account? <a href="signin" className="text-blue-600 ml-1">Sign In</a>
      </p>
    </div>
  );
};

export default TopFormRegistration;