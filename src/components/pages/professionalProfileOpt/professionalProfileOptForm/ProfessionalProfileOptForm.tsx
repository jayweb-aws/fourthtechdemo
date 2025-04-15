import React, { useEffect, useState } from "react";
import { Spinner } from "flowbite-react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { InputErrorMessage } from "../../../../components/utils/error/index";
import { useCreateOptimizationMutation } from "../../../../feature/api/dashboardApi";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { useSingleFileUploadMutation } from "../../../../feature/api/mediaUploadApi";

interface ProfessionalProfileOptFormProps {
  url: any;
  key: any;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  education: string;
  linkedin: string;
  city: string;
  country: string;
  message: string;
}
const allCountry = [
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
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic (CAR)",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Democratic Republic of the Congo",
  "Republic of the Congo",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
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
  "Kosovo",
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
  "Macedonia (FYROM)",
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
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
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
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
];

const ProfessionalProfileOptForm = () => {
  const [Filename, setFilename] = useState();
  const [filePreview, setFilePreview] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProfessionalProfileOptFormProps>();
  const [mentoringCreate, { error, data, isLoading, isSuccess, isError }] =
    useCreateOptimizationMutation();
  const [
    singleFileupload,
    {
      isLoading: uploadLoading,
      error: uploadError,
      data: uploadData,
      isSuccess: isUploadSuccess,
      isError: isUploadError,
    },
  ] = useSingleFileUploadMutation();

  const FileGet = (e: any) => {
    const file = e.target.files;
    if (file && file.length > 0 && file["0"]) {
      const formData = new FormData();
      formData.append("file", file["0"]);
      setFilename(e.target.files[0].name);
      singleFileupload(formData);
    } else if (
      file &&
      file.length > 0 &&
      file["0"].type.substr(0, 5) !== "file"
    ) {
      toast.error("Select a valid file.");
    }
  };

  useEffect(() => {
    if (isUploadError) {
      // console.log("upload error", uploadError);
      toast.error("file upload failed");
    } else if (isUploadSuccess) {
      // console.log("upload success", uploadData);
      setFilePreview(uploadData.data.fileUrl);
      // setValue("fileUrl",uploadData.data.fileUrl)
      // setValue("key",uploadData.data.key)
      toast.success("upload file success");
    }
  }, [isUploadError, isUploadSuccess]);

  const submitMentoringCoachingForm = (
    data: ProfessionalProfileOptFormProps
  ) => {
    if (
      uploadData?.data.fileUrl !== undefined &&
      uploadData?.data.key !== undefined
    ) {
      const Userdata :any= {
        ...data,
        url: uploadData?.data.fileUrl,
        key: uploadData?.data.key,
      };
      mentoringCreate(Userdata);
    } else if (
      uploadData?.data.fileUrl === undefined &&
      uploadData?.data.key === undefined
    ) {
      toast.error("Upload a file first");
    }
  };
  useEffect(() => {
    if (isError) {
      toast.error(
        "Profile optimization could'nt created, Upload a file first then try again"
      );
    }
    if (isSuccess) {
      toast.success("Profile optimization Created Successfully");
      reset();
    }
  }, [isError, isSuccess]);

  return (
    <div className="container font-nunito">
      <div className="p-0 md:p-[2rem] bg-white container md:max-w-[1080px] mb-2 rounded-xl">
      <div className="">
          <div className="flex justify-center items-center">
            <h1 className="text-4xl font-semibold ">Professional Profile Optimization
            </h1>
          </div>
          <div>
            <div className="text-sm flex lg:items-center md:items-center lg:justify-center md:justify-center flex-col my-5 text-gray-400">
              <p className="max-w-[500px] text-center">
              What is stopping you from landing that interview? Learn how to tailor your resume to match your dream job.              
              </p>
            </div>
          </div>
        </div>
        <div className=" my-3">
          <form onSubmit={handleSubmit(submitMentoringCoachingForm)}>
            <div className="flex justify-center items-center flex-wrap gap-3">
              <div className="basis-full sm:basis-[49%] flex flex-col font-nunito">
                <label className="mb-1 font-nunito text-small-text-color">
                  First Name
                </label>

                <input
                  className="border-[0.5px] border-gray-200  rounded-3xl px-[16px] py-[13px] bg-"
                  type={"text"}
                  placeholder="First Name"
                  // name={name}
                  {...register("firstName", { required: true })}
                />
                {errors.firstName && (
                  <InputErrorMessage message={"Name can't be empty"} />
                )}
              </div>
              <div className="basis-full sm:basis-[49%] flex flex-col font-nunito">
                <label className="mb-1 font-nunito text-small-text-color">
                  Last Name
                </label>

                <input
                  className="border-[0.5px] border-gray-200  rounded-3xl px-[16px] py-[13px] bg-"
                  type={"text"}
                  // placeholder={placeholder}
                  // name={name}
                  {...register("lastName", { required: true })}
                />
                {errors.lastName && (
                  <InputErrorMessage message={"Name can't be empty"} />
                )}
              </div>
              <div className="basis-full sm:basis-[49%] flex flex-col font-nunito">
                <label className="mb-1 font-nunito text-small-text-color">
                  Email
                </label>

                <input
                  className="border-[0.5px] border-gray-200  rounded-3xl px-[16px] py-[13px] bg-"
                  type={"email"}
                  // placeholder={placeholder}
                  // name={name}
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <InputErrorMessage message={"Email can't be empty"} />
                )}
              </div>
              <div className="basis-full sm:basis-[49%] flex flex-col font-nunito">
                <label className="mb-1 font-nunito text-small-text-color">
                  Phone
                </label>

                <input
                  className="border-[0.5px] border-gray-200  rounded-3xl px-[16px] py-[13px] bg-"
                  type={"tel"}
                  // placeholder={placeholder}
                  // name={name}
                  {...register("phone", { required: true })}
                />
                {errors.phone && (
                  <InputErrorMessage message={"Phone can't be empty"} />
                )}
              </div>

              {/* </div> *} */}
              <div className="basis-full sm:basis-[49%] flex flex-col font-nunito w-full">
                <SelectOptions
                  label="Highest Level of Education"
                  byDefault=""
                  className="  "
                  options={[
                    "Some high school",
                    "High school diploma or GED",
                    "Bachelor's degree ",
                    "Some graduate coursework",
                    "Graduate degree",
                  ]}
                  register={{ ...register("education", { required: true }) }}
                />
                {errors.education && (
                  <InputErrorMessage message={"Education can't be empty"} />
                )}
              </div>
              <div className="basis-full sm:basis-[49%] flex flex-col font-nunito ">
                <label className="mb-1 font-nunito text-small-text-color">
                  Linkedin
                </label>

                <input
                  className="border-[0.5px] border-gray-200  rounded-3xl px-[16px] py-[13px] bg-"
                  type={"text"}
                  // placeholder={placeholder}
                  // name={name}
                  {...register("linkedin", { required: true })}
                />
                {errors.linkedin && (
                  <InputErrorMessage message={"Linkedin URL can't be empty"} />
                )}
              </div>
              <div className="basis-full sm:basis-[49%] flex flex-col font-nunito">
                <label className="mb-1 font-nunito text-small-text-color">
                  City, State
                </label>

                <input
                  className="border-[0.5px] border-gray-200 rounded-3xl px-[16px] py-[13px] bg-"
                  type={"text"}
                  // placeholder={placeholder}
                  // name={name}
                  {...register("city", { required: true })}
                />
                {errors.city && (
                  <InputErrorMessage message={"City can't be empty"} />
                )}
              </div>
              <div className="basis-full sm:basis-[49%] flex flex-col font-nunito">
                <SelectOptions
                  label="Country"
                  className=""
                  byDefault=""
                  name="staffing-need"
                  options={allCountry}
                  register={{ ...register("country", { required: true }) }}
                />
                {errors.country && (
                  <InputErrorMessage message={"Country can't be empty"} />
                )}
              </div>
            </div>

            <div className="my-4 mx-1">
              <p className="mb-2  text-small-text-color">
                Message to Hiring Manager
              </p>
              <textarea
                placeholder="Type here..."
                aria-label="Message"
                rows={2}
                cols={85}
                className="border-[0.5px] border-gray-200 rounded-3xl w-full px-[16px] py-[13px] p-2"
                {...register("message", { required: true })}
              ></textarea>
              {errors.message && (
                <InputErrorMessage message={"Message can't be empty"} />
              )}
            </div>
            <div className="mx-1">
              <p className="mb-3 text-small-text-color">Upload Resume</p>
              <div className="flex flex-col lg:flex-row items-center border-[0.5px] border-gray-200 rounded-3xl w-full px-[16px] py-[13px] bg-[#FDF9F9] h-[135px]">
                <div className="flex justify-center mt-1 items-center w-[100%] flex-col">
                  <label className="text-white xsm:w-[7.5rem] lg:w-[9.5rem] justify-center items-center flex gap-3 rounded-lg tracking-wide cursor-pointer">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="32" height="32" rx="16" fill="#F04152" fill-opacity="0.1"/>
                      <path d="M16.4843 19.4428C16.36 19.5788 16.1842 19.6562 16 19.6562C15.8158 19.6562 15.64 19.5788 15.5157 19.4428L12.0157 15.6147C11.7711 15.3472 11.7897 14.9321 12.0572 14.6875C12.3247 14.443 12.7398 14.4616 12.9843 14.7291L15.3438 17.3097V7.625C15.3438 7.26256 15.6376 6.96875 16 6.96875C16.3624 6.96875 16.6563 7.26256 16.6563 7.625V17.3097L19.0157 14.7291C19.2602 14.4616 19.6753 14.443 19.9428 14.6875C20.2103 14.9321 20.2289 15.3472 19.9843 15.6147L16.4843 19.4428Z" fill="#F04152"/>
                      <path d="M8.78125 18.125C8.78125 17.7626 8.48744 17.4688 8.125 17.4688C7.76256 17.4688 7.46875 17.7626 7.46875 18.125V18.173C7.46873 19.3697 7.46872 20.3342 7.57071 21.0928C7.6766 21.8804 7.90313 22.5435 8.42981 23.0702C8.95648 23.5969 9.61962 23.8234 10.4072 23.9293C11.1658 24.0313 12.1303 24.0313 13.327 24.0312H18.673C19.8697 24.0313 20.8342 24.0313 21.5928 23.9293C22.3804 23.8234 23.0435 23.5969 23.5702 23.0702C24.0969 22.5435 24.3234 21.8804 24.4293 21.0928C24.5313 20.3342 24.5313 19.3697 24.5313 18.173V18.125C24.5313 17.7626 24.2374 17.4688 23.875 17.4688C23.5126 17.4688 23.2188 17.7626 23.2188 18.125C23.2188 19.381 23.2174 20.257 23.1285 20.9179C23.0422 21.5599 22.8843 21.9 22.6421 22.1421C22.4 22.3843 22.06 22.5422 21.4179 22.6285C20.757 22.7174 19.881 22.7188 18.625 22.7188H13.375C12.119 22.7188 11.243 22.7174 10.5821 22.6285C9.94005 22.5422 9.60005 22.3843 9.35788 22.1421C9.11572 21.9 8.95783 21.5599 8.8715 20.9179C8.78264 20.257 8.78125 19.381 8.78125 18.125Z" fill="#F04152"/>
                    </svg>
                    <input onChange={FileGet} type="file" className="hidden" />
                  </label>
                  <span className="ml-2">
                    <span className="text-red-500 font-semibold">{Filename ? Filename : "Click to upload"}</span>
                    <span className="text-gray-500"> or drag and drop</span>
                  </span>
                  <span className="text-gray-500 text-sm">Supported format: MP4, WebM, DGG</span>
                </div>
              </div>
              {uploadLoading && (
                <span className="text-bold ">File Uploading...</span>
              )}
            </div>

            <div className="mx-1 my-8 flex flex-col sm:flex-row items-center w-full md:w-auto mt-11 gap-4 sm:gap-5">
              <button
                type="submit"
                className="w-[100%] bg-[#FF4D4F] text-white text-[15px] font-poppins font-semibold leading-[24px] text-center px-4 md:px-8 py-4 md:py-4 rounded-full hover:bg-[#e04345] h-[54px] md:h-[54px] shadow-lg transition-all duration-300"
              >
                {isLoading ? (
                  <>
                    <Spinner /> loading...
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalProfileOptForm;

const SelectOptions = ({
  label,
  name,
  byDefault,
  onChange,
  className,
  options,
  register,
}: {
  label?: string | undefined;
  name?: string;
  byDefault?: string;
  onChange?: any;
  className?: string | undefined;
  options: string[];
  register: any;
}) => {
  return (
    <div className="">
      <label htmlFor="media" className="block mb-2  text-small-text-color">
        {label}
      </label>
      <select
        name={name}
        id="media"
        {...register}
        className="border-[0.5px] border-gray-200 rounded-3xl px-[16px] py-[13px] bg-gray-50 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option disabled={true} value={""}>
          Select an Option
        </option>
        {options.map((item, id) => (
          <option value={item} key={id}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
