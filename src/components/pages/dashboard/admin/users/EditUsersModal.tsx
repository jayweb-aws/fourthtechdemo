/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MdEdit } from "react-icons/md";
import toast from 'react-hot-toast';
import * as z from "zod";
import { useUpdateUserMutation } from "../../../../../feature/api/dashboardApi";
import { useSinglePhotoUploadMutation } from "../../../../../feature/api/mediaUploadApi";
import { InputErrorMessage } from "../../../../utils/error";
import { FormTextInput } from "../../../../utils/form/Inputs";
import ButtonLoader from "../../../../utils/loaders/ButtonLoader";

const Schema = z.object({
  firstName: z.string().min(1, "First name is required!"),
  lastName: z.string().min(1, "Last name is required!"),
  email: z.string().email("Email is required!"),
  phone: z.string().min(1, "Phone number is required!"),
  userName: z.string(),
  state: z.string().min(1, "Please select state!"),
  country: z.string().min(1, "Please select country!"),
  studentType: z.string().min(1, "Please select type!"),
  knowFrom: z.string().min(1, "knowFrom is required!"),
  highestStudy: z.string().min(1, "highestStudy is required!"),
  currentJob: z.string().min(1, "Current job is required!"),
});

type FormData = {
  avatar: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  userName: string;
  state: string;
  country: string;
  currentJob: string;
  studentType: string;
  knowFrom: string;
  highestStudy: string;
};

type props = {
  show: boolean;
  handleClose: () => void;
  user: {
    id: string;
    firstName: string;
    lastName: string;
    avatar: string;
    userName: string;
    email: string;
    contact: string;
    status: string;
    state: string;
    country: string;
    currentJob: string;
    studentType: string;
    knowFrom: string;
    highestStudy: string;
  };
};

const EditUserModal = (props: props) => {
  const {
    show,
    handleClose,
    user: {
      avatar,
      id,
      state,
      country,
      firstName,
      lastName,
      userName,
      contact,
      email,
      currentJob,
      studentType,
      knowFrom,
      highestStudy,
    },
  } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(Schema),
    defaultValues: {
      firstName,
      lastName,
      phone: contact,
      email,
      userName,
      state,
      country,
      currentJob,
      studentType,
      knowFrom,
      highestStudy,
    },
  });

  const [
    updateUser,
    {
      error: updateUserError,
      isLoading: isUpdateUserLoading,
      isSuccess: isUpdateUserSuccess,
      isError: isUpdateUserError,
    },
  ] = useUpdateUserMutation();

  const updateUserHandler = (data: FormData) => {
    if (filePreview) {
      data.avatar = filePreview;
    }
    updateUser({ id, user: data });
  };

  const [
    singlePhotoUpload,
    {
      error: uploadError,
      data: uploadData,
      isSuccess: isUploadSuccess,
      isError: isUploadError,
    },
  ] = useSinglePhotoUploadMutation();
  const [filePreview, setFilePreview] = useState("");

  const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;
    if (file && file.length > 0 && file["0"].type.substr(0, 5) === "image") {
      const formData = new FormData();
      formData.append("image", file["0"]);
      singlePhotoUpload(formData);
    } else if (
      file &&
      file.length > 0 &&
      file["0"].type.substr(0, 5) !== "image"
    ) {
      toast.error("Select a valid image.");
      // console.log("img", watch("avatar"));
    }
  };

  useEffect(() => {
    if (isUploadError) {
      // console.log("upload error", uploadError);
      toast.error((uploadError as any).data.message);
    } else if (isUploadSuccess) {
      // console.log("upload success", uploadData);
      setFilePreview(uploadData.data.image);
    }

    if (isUpdateUserError) {
      // console.log("update user error", updateUserError);
      toast.error((updateUserError as any).data.message);
    } else if (isUpdateUserSuccess) {
      // console.log("updated user", updatedUserData);
      toast.success("User Information Updated Successfully!");
      handleClose();
    }
  }, [isUploadError, isUploadSuccess, isUpdateUserError, isUpdateUserSuccess]);

  return (
    <div>
      <form onSubmit={handleSubmit(updateUserHandler)} className="font-nunito">
        <div className="space-y-2 px-4 pb-4 sm:pb-6">
          <div className="mb-5 flex items-center space-x-7">
            <div className="space-y-2">
              <div className="w-[120px] h-[120px] relative rounded border-8 border-[#f9f9f9] bg-[#f9f9f9]">
                <img
                  className="w-full h-full object-cover"
                  src={
                    filePreview && typeof filePreview === "string"
                      ? filePreview
                      : avatar
                  }
                  alt="avatar"
                />
                <div className="w-[30px] h-[30px] absolute top-1 right-[-23px]">
                  <button className="relative w-full h-full text-white bg-[#3A57E8] rounded-full flex items-center justify-center overflow-hidden">
                    <MdEdit />
                    <input
                      className="absolute opacity-0 top-0 left-0 scale-150"
                      type="file"
                      id={"avatar"}
                      onChange={handleAvatarChange}
                    />
                  </button>
                </div>
              </div>
            </div>
            <div>
              <p className="text-[#8A92A6]">
                Allowed file type : png, jpg, jpeg
              </p>
            </div>
          </div>
          <FormTextInput
            name="firstName"
            register={register}
            error={errors.firstName?.message}
            placeholder="First name"
            label="First name"
          />
          <FormTextInput
            name="lastName"
            register={register}
            error={errors.lastName?.message}
            placeholder="Last name"
            label="Last name"
          />
          <FormTextInput
            name="userName"
            register={register}
            error={errors.userName?.message}
            placeholder="Username"
            label="Username"
          />
          <FormTextInput
            name="email"
            register={register}
            error={errors.email?.message}
            placeholder="email address"
            label="Email address"
          />
          <div className="w-full !mb-3">
            <h4 className="mb-2 font-semibold text-[16px]">State</h4>
            <select
              {...register("state", { required: true })}
              id="media"
              className="bg-white rounded-lg @mb-3 border  border-[#858585] text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 lg:w-full xl:w-full md:w-full sm:w-full xsm:w-3/4 xl:p-2.5 lg:p-2.5 md:p-2.5 sm:p-2.5 xsm:p-2"
            >
              <option value={""}>{"Select Your State"}</option>
              {[
                "Alabama",
                "Alaska",
                "Arizona",
                "Arkansas",
                "California",
                "Colorado",
                "Connecticut",
                "Delaware",
                "Florida",
                "Georgia",
                "Hawaii",
                "Idaho",
                "Illinois",
                "Indiana",
                "Iowa",
                "Kansas",
                "Kentucky",
                "Louisiana",
                "Maine",
                "Maryland",
                "Massachusetts",
                "Michigan",
                "Minnesota",
                "Mississippi",
                "Missouri",
                "Montana",
                "Nebraska",
                "Nevada",
                "New Hampshire",
                "New Jersey",
                "New Mexico",
                "New York",
                "North Carolina",
                "North Dakota",
                "Ohio",
                "Oklahoma",
                "Oregon",
                "Pennsylvania",
                "Rhode Island",
                "South Carolina",
                "South Dakota",
                "Tennessee",
                "Texas",
                "Utah",
                "Vermont",
                "Virginia",
                "Washington",
                "West Virginia",
                "Wisconsin",
                "Wyoming",
              ].map((item, id) => (
                <option value={item} key={id}>
                  {item}
                </option>
              ))}
            </select>
            {errors.state && (
              <InputErrorMessage message={"select your state"} />
            )}
          </div>
          <div className="w-full !mb-3">
            <h4 className="mb-2 font-semibold text-[16px]">Country</h4>
            <select
              {...register("country", { required: true })}
              id="media"
              className="bg-white rounded-lg border  border-[#858585] text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 lg:w-full xl:w-full md:w-full sm:w-full xsm:w-3/4 xl:p-2.5 lg:p-2.5 md:p-2.5 sm:p-2.5 xsm:p-2"
            >
              <option value={""}>{"Select Your Country"}</option>
              {[
                "Afghanistan",
                "Albania",
                "Algeria",
                "Andorra",
                "Angola",
                "Antigua and Barbuda",
                "Argentina",
                "Armenia",
                "Australia",
                "Austria",
                "Azerbaijan",
                "Bahamas",
                "Bahrain",
                "Bangladesh",
                "Barbados",
                "Belarus",
                "Belgium",
                "Belize",
                "Benin",
                "Bhutan",
                "Bolivia",
                "Bosnia and Herzegovina",
                "Botswana",
                "Brazil",
                "Brunei",
                "Bulgaria",
                "Burkina Faso",
                "Burundi",
                "Cambodia",
                "Cameroon",
                "Canada",
                "Cape Verde",
                "Central African Republic",
                "Chad",
                "Chile",
                "China",
                "Colombia",
                "Comoros",
                "Congo",
                "Costa Rica",
                "Croatia",
                "Cuba",
                "Cyprus",
                "Czechia",
                "Denmark",
                "Djibouti",
                "Dominica",
                "Dominican Republic",
                "Ecuador",
                "Egypt",
                "El Salvador",
                "Equatorial Guinea",
                "Eritrea",
                "Estonia",
                "Eswatini",
                "Ethiopia",
                "Fiji",
                "Finland",
                "France",
                "Gabon",
                "Gambia",
                "Georgia",
                "Germany",
                "Ghana",
                "Greece",
                "Grenada",
                "Guatemala",
                "Guinea",
                "Guinea-Bissau",
                "Guyana",
                "Haiti",
                "Honduras",
                "Hungary",
                "Iceland",
                "India",
                "Indonesia",
                "Iran",
                "Iraq",
                "Ireland",
                "Israel",
                "Italy",
                "Jamaica",
                "Japan",
                "Jordan",
                "Kazakhstan",
                "Kenya",
                "Kiribati",
                "Kuwait",
                "Kyrgyzstan",
                "Laos",
                "Latvia",
                "Lebanon",
                "Lesotho",
                "Liberia",
                "Libya",
                "Liechtenstein",
                "Lithuania",
                "Luxembourg",
                "Madagascar",
                "Malawi",
                "Malaysia",
                "Maldives",
                "Mali",
                "Malta",
                "Marshall Islands",
                "Mauritania",
                "Mauritius",
                "Mexico",
                "Micronesia",
                "Moldova",
                "Monaco",
                "Mongolia",
                "Montenegro",
                "Morocco",
                "Mozambique",
                "Myanmar (Burma)",
                "Namibia",
                "Nauru",
                "Nepal",
                "Netherlands",
                "New Zealand",
                "Nicaragua",
                "Niger",
                "Nigeria",
                "North Korea",
                "North Macedonia",
                "Norway",
                "Oman",
                "Pakistan",
                "Palau",
                "Panama",
                "Papua New Guinea",
                "Paraguay",
                "Peru",
                "Philippines",
                "Poland",
                "Portugal",
                "Qatar",
                "Romania",
                "Russia",
                "Rwanda",
                "Saint Kitts and Nevis",
                "Saint Lucia",
                "Saint Vincent and the Grenadines",
                "Samoa",
                "San Marino",
                "Sao Tome and Principe",
                "Saudi Arabia",
                "Senegal",
                "Serbia",
                "Seychelles",
                "Sierra Leone",
                "Singapore",
                "Slovakia",
                "Slovenia",
                "Solomon Islands",
                "Somalia",
                "South Africa",
                "South Korea",
                "South Sudan",
                "Spain",
                "Sri Lanka",
                "Sudan",
                "Suriname",
                "Sweden",
                "Switzerland",
                "Syria",
                "Taiwan",
                "Tajikistan",
                "Tanzania",
                "Thailand",
                "Timor-Leste (East Timor)",
                "Togo",
                "Tonga",
                "Trinidad and Tobago",
                "Tunisia",
                "Turkey",
                "Turkmenistan",
                "Tuvalu",
                "Uganda",
                "Ukraine",
                "United Arab Emirates (UAE)",
                "United Kingdom (UK)",
                "United States of America (USA)",
                "Uruguay",
                "Uzbekistan",
                "Vanuatu",
                "Vatican City (Holy See)",
                "Venezuela",
                "Vietnam",
                "Yemen",
                "Zambia",
                "Zimbabwe",
              ].map((item, id) => (
                <option value={item} key={id}>
                  {item}
                </option>
              ))}
            </select>
            {errors.country && (
              <InputErrorMessage message={"select your country"} />
            )}
          </div>
          <FormTextInput
            name="currentJob"
            register={register}
            error={errors.currentJob?.message}
            placeholder=""
            label="Current Job"
          />
          <FormTextInput
            name="phone"
            register={register}
            error={errors.phone?.message}
            placeholder="Phone number"
            label="Phone number"
          />
          <div className="w-full !mb-3">
            <h4 className="mb-2 font-semibold text-[16px]">Student Type</h4>
            <select
              {...register("studentType", { required: true })}
              id="media"
              className="bg-white rounded-lg border  border-[#858585] text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 lg:w-full xl:w-full md:w-full sm:w-full xsm:w-3/4 xl:p-2.5 lg:p-2.5 md:p-2.5 sm:p-2.5 xsm:p-2"
            >
              <option value={""}>{"Select Your Option"}</option>
              {["instructor-led", "self-pace"].map((item, id) => (
                <option value={item} key={id}>
                  {item}
                </option>
              ))}
            </select>
            {errors.studentType && (
              <InputErrorMessage message={"select your type"} />
            )}
          </div>
          <div className="w-full !mb-3">
            <h4 className="mb-2 font-semibold text-[16px]">
              Highest Level Of Education
            </h4>
            <select
              {...register("highestStudy", { required: true })}
              id="media"
              className="bg-white rounded-lg border  border-[#858585] text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 lg:w-full xl:w-full md:w-full sm:w-full xsm:w-3/4 xl:p-2.5 lg:p-2.5 md:p-2.5 sm:p-2.5 xsm:p-2"
            >
              <option value={""}>
                {"Select Highest Level Of Your Education"}
              </option>
              {[
                "Some high school",
                "High school diploma or GED",
                "Bachelor's degree ",
                "Some graduate coursework",
                "Graduate degree",
              ].map((item, id) => (
                <option value={item} key={id}>
                  {item}
                </option>
              ))}
            </select>
            {errors.highestStudy && (
              <InputErrorMessage
                message={"Select highest level of your education"}
              />
            )}
          </div>
          <div className="w-full !mb-3">
            <h4 className="mb-2 font-semibold text-[16px]">
              How Did You Hear About Us?
            </h4>
            <select
              {...register("knowFrom", { required: true })}
              id="media"
              className="bg-white rounded-lg border  border-[#858585] text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 lg:w-full xl:w-full md:w-full sm:w-full xsm:w-3/4 xl:p-2.5 lg:p-2.5 md:p-2.5 sm:p-2.5 xsm:p-2"
            >
              <option value={""}>{"How Did You Hear About Us?"}</option>
              {["Twitter", "Facebook", "Linkedin", "Others"].map((item, id) => (
                <option value={item} key={id}>
                  {item}
                </option>
              ))}
            </select>
            {errors.knowFrom && (
              <InputErrorMessage message={"Select how did you hear about us"} />
            )}
          </div>
          <div className="w-full !pt-2 flex flex-wrap gap-4">
            <div>
              <button
                type="submit"
                className="bg-primary flex items-center text-white p-[12px_20px] rounded-[5px] gap-x-[10px]"
              >
                {isUpdateUserLoading ? <ButtonLoader /> : "Save"}
              </button>
            </div>
            <div>
              <button
                className="bg-red-800 flex items-center text-white p-[12px_20px] rounded-[5px] gap-x-[10px]"
                onClick={handleClose}
                color="failure"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditUserModal;
