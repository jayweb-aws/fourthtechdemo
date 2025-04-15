import React, { useState } from "react";
import { UseFormRegister } from "react-hook-form";
interface PhoneNumberFieldProps {
  className?: string;
  label?: string;
  name?: string;
  register: UseFormRegister<any>;
  errors?: any;
  placeholder?: string;
}

const PhoneNumberField: React.FC<PhoneNumberFieldProps> = ({
  className,
  label,
  name,
  register,
  errors,
  placeholder,
}) => {
  const [selectedCode, setSelectedCode] = useState("+1");

  const countryCodes = [
    { code: "+1", flag: "https://flagcdn.com/us.svg" },
    { code: "+44", flag: "https://flagcdn.com/gb.svg" },
    { code: "+91", flag: "https://flagcdn.com/in.svg" },
    { code: "+81", flag: "https://flagcdn.com/jp.svg" },
    { code: "+61", flag: "https://flagcdn.com/au.svg" },
  ];

  const selectedCountry = countryCodes.find((c) => c.code === selectedCode);

  return (
    <div className={className}>
      <label className="mb-1 font-nunito text-small-text-color">
        {label || "Phone Number:"}
      </label>

      <div className="relative focus-within:ring-2 focus-within:ring-blue-500 flex items-center border border-gray-300 rounded-[25px]">
        <div className="flex items-center bg-white relative rounded-l-[25px]">
          <select
            className="pl-8 pr-7 py-[13px] appearance-none bg-transparent focus:outline-none rounded-l-[25px]"
            value={selectedCode}
            onChange={(e) => setSelectedCode(e.target.value)}
          >
            {countryCodes.map((country) => (
              <option key={country.code} value={country.code}>
                {country.code}
              </option>
            ))}
          </select>

          {selectedCountry?.flag && (
            <img
              src={selectedCountry.flag}
              alt="Flag"
              className="w-5 h-5 absolute left-2"
            />
          )}
        </div>

        <input
          className="px-[16px] py-[13px] border-l-0 w-full focus:outline-none rounded-r-[25px]"
          type="tel"
          placeholder={placeholder || "Enter phone number"}
          {...register(name, {
            required: "Phone number is required",
            pattern: {
              value: /^[0-9]{9,15}$/,
              message: "Please enter a valid phone number (9-15 digits)",
            },
          })}
        />
      </div>
      {errors[name] && (
        <span className="text-red-500 text-sm mt-1">
          {errors[name].message}
        </span>
      )}
    </div>
  );
};

export default PhoneNumberField;
