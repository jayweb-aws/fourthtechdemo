/* eslint-disable react-hooks/exhaustive-deps */
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Modal, Select } from "flowbite-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import * as z from "zod";
import { useAddUserMutation } from "../../../../../feature/api/dashboardApi";
import { InputErrorMessage } from "../../../../utils/error";
import { FormTextInput } from "../../../../utils/form/Inputs";
import ButtonLoader from "../../../../utils/loaders/ButtonLoader";

const Schema = z.object({
  firstName: z.string().min(1, "First name is required!"),
  lastName: z.string().min(1, "Last name is required!"),
  email: z.string().email("Email is required!"),
  phone: z.string().min(1, "Phone number is required!"),
  roles: z.string().min(1, "Role is required!"),
  state: z.string().min(1, "State is required!"),
  country: z.string().min(1, "Country is required!"),
  studentType: z.string().min(1, "Type is required!"),
  highestStudy: z.string().min(1, "Highest Study is required!"),
  knowFrom: z.string().min(1, "Knowfrom is required!"),
  currentJob: z.string().min(1, "Current job is required!"),
  password: z
    .string()
    .min(8, "Password is required and must be at least 8 characters"),
});
// .superRefine(({ password }, ctx) => {
//   if (password.length === 0) {
//     ctx.addIssue({
//       code: "custom",
//       message: "Enter your password!",
//       path: ["password"]
//     })
//   }
// });

type FormData = z.infer<typeof Schema>;

type props = {
  show: boolean;
  handleClose: () => void;
};

const AddUsersModal = (props: props) => {
  const { show, handleClose } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(Schema),
  });
  const [addUser, { error, isLoading, isSuccess, isError }] =
    useAddUserMutation();
  const addUserHandler = (data: FormData) => {
    addUser(data);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("User added Successfully!");
      handleClose();
    } else if (isError) {
      toast.error((error as any).data.message);
    }
  }, [isSuccess, isError]);

  return (
    <Modal show={show} size="md" popup={true} onClose={handleClose}>
      <Modal.Header />
      <Modal.Body>
        <form onSubmit={handleSubmit(addUserHandler)} className="font-nunito">
          <div className="space-y-2 px-4 pb-4 sm:pb-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Add User
            </h3>
            <FormTextInput
              name="firstName"
              register={register}
              error={errors.firstName?.message}
              placeholder="First name"
              // label="First name"
            />
            <FormTextInput
              name="lastName"
              register={register}
              error={errors.lastName?.message}
              placeholder="Last name"
              // label="Last name"
            />
            <FormTextInput
              name="email"
              register={register}
              error={errors.email?.message}
              placeholder="email address"
              // label="Email address"
            />
            <FormTextInput
              name="phone"
              register={register}
              error={errors.phone?.message}
              placeholder="Phone number"
              // label="Phone number"
            />
            <div className="w-full !mb-3">
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
              placeholder="Please enter current job"
            />
            <div className="w-full !mb-3">
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
              <select
                {...register("knowFrom", { required: true })}
                id="media"
                className="bg-white rounded-lg border  border-[#858585] text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 lg:w-full xl:w-full md:w-full sm:w-full xsm:w-3/4 xl:p-2.5 lg:p-2.5 md:p-2.5 sm:p-2.5 xsm:p-2"
              >
                <option value={""}>{"How Did You Hear About Us?"}</option>
                {["Twitter", "Facebook", "Linkedin", "Others"].map(
                  (item, id) => (
                    <option value={item} key={id}>
                      {item}
                    </option>
                  )
                )}
              </select>
              {errors.knowFrom && (
                <InputErrorMessage
                  message={"Select how did you hear about us"}
                />
              )}
            </div>

            <div>
              {/* <div className="mb-2 block">
                <Label
                  htmlFor="role"
                  value="User role"
                />
              </div> */}
              <Select
                id="role"
                {...register("roles")}
                helperText={errors.roles?.message ? errors.roles.message : ""}
                color={errors.roles?.message ? "failure" : ""}
              >
                <option value="">Select user role</option>
                {["instructor", "admin", "student"].map((role, i) => (
                  <option key={i} value={role}>
                    {role}
                  </option>
                ))}
              </Select>
            </div>
            <FormTextInput
              name="password"
              type="password"
              register={register}
              error={errors.password?.message}
              placeholder="Password"
              // label="Password"
            />
            <div className="w-full flex flex-wrap gap-2">
              <div>
                <Button type="submit">
                  {isLoading ? <ButtonLoader /> : "Add User"}
                </Button>
              </div>
              <div>
                <Button onClick={handleClose} color="failure">
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AddUsersModal;
