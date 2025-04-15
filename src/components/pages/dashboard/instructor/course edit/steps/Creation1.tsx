import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import "react-quill/dist/quill.snow.css";
import { useAppSelector } from "../../../../../../app/hooks";
import { useGetCategoriesQuery } from "../../../../../../feature/api/dashboardApi";
import { InputErrorMessage } from "../../../../../utils/error";
import { InitialFormDataCourse } from "../CourseEditWrapper";

export type StepPropss = {
  setStep: (step: number) => void;
  setFormData: any;
  step: number;
  formData: InitialFormDataCourse;
};

type RegistrationFirstStepFromData = {
  title: string;
  shortDescription: string;
  category: string;
  language: string;
  durationInMinutes: number;
  price: number;
  level: string;
  featured?: boolean;
  numberOfLectures: number;
  discountPrice: number;
  isDiscount?: boolean;
  description: string;
};

const Creation1 = (props: StepPropss) => {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );
  const { setStep, setFormData, formData } = props;
  const { data, isSuccess, isError, isLoading } = useGetCategoriesQuery({});
  const [value, setValuee] = useState("");

  const {
    courseEdit: { title, shortDescription },
    refresh,
  } = useAppSelector((state) => state.course);
  // console.log(title)

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<RegistrationFirstStepFromData>({
    defaultValues: {
      title: formData.title,
      shortDescription: formData.shortDescription,
      category: formData?.category,
      language: formData.language,
      durationInMinutes: formData.durationInMinutes,
      price: formData.price,
      level: formData.level,
      featured: formData.featured,
      numberOfLectures: formData.numberOfLectures,
      discountPrice: formData.discountPrice,
      isDiscount: formData.isDiscount,
      description: formData.description,
    },
    // resolver: zodResolver(registrationFirstStepFromSchema)
  });

  useEffect(() => {
    register("description", { required: true, minLength: 1 });
  }, [register, setValue]);

  const submitFirstStep = async (data: RegistrationFirstStepFromData) => {
    // console.log("first form data", data);
    setFormData((prev: object) => ({ ...prev, ...data }));
    setStep(2);
  };

  // console.log(formData?.level);
  return (
    <>
      <form onSubmit={handleSubmit(submitFirstStep)}>
        <div className="course_creation p-3 mt-5">
          <h2 className="font-semibold text-2xl mb-5">Course details</h2>
          <div className="course_form">
            <div className="form_control mb-5">
              <label className="text-sm font-medium">Course Title</label>
              <br />
              <input
                type="text"
                placeholder="Enter Course Title"
                className="mt-3"
                style={{
                  background: " #FFFFFF",
                  boxShadow: "0px 1px 15px rgb(0 0 0 / 15%)",
                  borderRadius: "8px",
                  width: "100%",
                  border: "none",
                  padding: " 11px 17px",
                }}
                {...register("title", { required: true })}
              />
              <div>
                {errors.title && (
                  <InputErrorMessage message={"Enter your title"} />
                )}
              </div>
            </div>
            <div className="form_textarea mb-5">
              <label className="text-sm font-medium">Short Description</label>
              <br />
              <textarea
                placeholder="Enter Keyword"
                className="mt-3"
                style={{
                  background: " #FFFFFF",
                  boxShadow: "0px 1px 15px rgb(0 0 0 / 15%)",
                  borderRadius: "8px",
                  width: "100%",
                  border: "none",
                  padding: " 11px 17px",
                }}
                {...register("shortDescription", { required: true })}
              ></textarea>
              <div>
                {errors.shortDescription && (
                  <InputErrorMessage message={"Enter your short description"} />
                )}
              </div>
            </div>
            <div className="from_middel lg:flex md:flex gap-7 sm:block">
              <div className="from_lft lg:w-3/6 sm:w-full">
                <div className="form_control h-[7rem]">
                  <label className="text-sm font-medium">Course Category</label>
                  <br />
                  {isSuccess && (
                    <select
                      {...register("category", { required: true })}
                      className="mt-3 text-[#8A92A6]"
                      style={{
                        boxShadow: "0px 1px   15px rgb(0 0 0 / 15%)",
                        borderRadius: "8px",
                        width: "100%",
                        border: "none",
                        padding: " 11px 17px",
                      }}
                    >
                      <option value="">{"Select your Category"}</option>
                    
                      {data.data.categories.map(
                        ({ name, id }: { name: string; id: string }) => (
                          <option
                            value={id}
                            key={id}
                          >
                            {name}
                          </option>
                        )
                      )}
                    </select>)}
                  <div className="">
                    {errors.category && (
                      <InputErrorMessage message={"Enter your category"} />
                    )}
                  </div>
                </div>

                <div className="form_control h-[7rem]">
                  <label className="text-sm font-medium">Language</label>
                  <br />
                  <select
                    {...register("language", { required: true })}
                    className="mt-3 text-[#8A92A6]"
                    style={{
                      boxShadow: "0px 1px 15px rgb(0 0 0 / 15%)",
                      borderRadius: "8px",
                      width: "100%",
                      border: "none",
                      padding: " 11px 17px",
                    }}
                  >
                    <option value={""}>{"Select your language"}</option>
                    {["English", "French", "German", "Hindi"].map(
                      (item, id) => (
                        <option value={item} key={id}>
                          {item}
                        </option>
                      )
                    )}
                  </select>
                  <div className="">
                    {errors.language && (
                      <InputErrorMessage message={"Enter your language"} />
                    )}
                  </div>
                </div>

                <div className="form_control h-[7rem]">
                  <label className="text-sm font-medium">Course Time</label>
                  <br />
                  <input
                    maxLength={2}
                    type="text"
                    className="mt-3"
                    placeholder="Enter course (hours)"
                    style={{
                      background: " #FFFFFF",
                      boxShadow: "0px 1px 15px rgb(0 0 0 / 15%)",
                      borderRadius: "8px",
                      width: "100%",
                      border: "none",
                      padding: " 11px 17px",
                    }}
                    {...register("durationInMinutes", { required: true })}
                  />
                  <div className="">
                    {errors.durationInMinutes && (
                      <InputErrorMessage message={"Enter your time"} />
                    )}
                  </div>
                </div>

                <div className="form_control  h-[7rem]">
                  <label className="text-sm font-medium">Course Price</label>
                  <br />
                  <input
                    type="number"
                    {...register("price", { required: true })}
                    className="mt-3"
                    placeholder="Enter Course Price $"
                    style={{
                      background: " #FFFFFF",
                      boxShadow: "0px 1px 15px rgb(0 0 0 / 15%)",
                      borderRadius: "8px",
                      width: "100%",
                      border: "none",
                      padding: " 11px 17px",
                    }}
                  />
                  <div className="">
                    {errors.price && (
                      <InputErrorMessage message={"Enter Course price $"} />
                    )}
                  </div>
                </div>
              </div>

              <div className="form_right lg:w-3/6 sm:w-full">
                <div className="form_control  h-[7rem]">
                  <label className="text-sm font-medium">Course Level</label>
                  <br />
                  <select
                    {...register("level", { required: true })}
                    className="mt-3 text-[#8A92A6]"
                    style={{
                      boxShadow: "0px 1px 15px rgb(0 0 0 / 15%)",
                      borderRadius: "8px",
                      width: "100%",
                      border: "none",
                      padding: " 11px 17px",
                    }}
                  >
                    <option value={""}>{"Select level"}</option>
                    {["Beginner", "Intermediate", "Advanced"].map(
                      (item, id) => (
                        <option
                          value={item}
                          key={id}
                        >
                          {item}
                        </option>
                      )
                    )}
                  </select>
                  <div className="">
                    {errors.level && (
                      <InputErrorMessage message={"Enter your level"} />
                    )}
                  </div>
                </div>
                <div className="toggle_btn  md:h-[7rem] md:pt-[3rem] xsm:mb-3 xsm:mt-3 md:mt-0 md:mb-0">
                  <label className="inline-flex relative items-center cursor-pointer">
                    <input
                      {...register("featured", { required: false })}
                      type="checkbox"
                      value=""
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Check this for featured course
                    </span>
                  </label>
                </div>
                <div className="form_control  h-[7rem]">
                  <label className="text-sm font-medium">Total Lecture</label>
                  <br />
                  <input
                    maxLength={3}
                    type="number"
                    {...register("numberOfLectures", { required: true })}
                    className="mt-3"
                    placeholder="Enter total lecture"
                    style={{
                      background: " #FFFFFF",
                      boxShadow: "0px 1px 15px rgb(0 0 0 / 15%)",
                      borderRadius: "8px",
                      width: "100%",
                      border: "none",
                      padding: " 11px 17px",
                    }}
                  />
                  <div className="">
                    {errors.numberOfLectures && (
                      <InputErrorMessage message={"Enter your lecture"} />
                    )}
                  </div>
                </div>
                <div className="form_control  h-[6rem]">
                  <label className="text-sm font-medium">Discount Price</label>
                  <br />
                  <input
                    type="number"
                    {...register("discountPrice", { required: false })}
                    className="mt-3"
                    placeholder="Enter Discount Price"
                    style={{
                      background: " #FFFFFF",
                      boxShadow: "0px 1px 15px rgb(0 0 0 / 15%)",
                      borderRadius: "8px",
                      width: "100%",
                      border: "none",
                      padding: " 11px 17px",
                    }}
                  />
                  <div className="">
                    {errors.discountPrice && (
                      <InputErrorMessage
                        message={"Enter your discount price"}
                      />
                    )}
                  </div>
                </div>
                <div className="form-check mt-1 ml-1">
                  <input
                    {...register("isDiscount", { required: false })}
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    id="flexCheckChecked"
                  />
                  <label className="form-check-label inline-block text-gray-800">
                    Enable this Discount
                  </label>
                </div>
              </div>
            </div>

            <div className="form_description mt-4">
              <label className="text-sm font-medium mb-3">
                Add Description
              </label>
              <ReactQuill
                theme="snow"
                value={value ? value : formData.description}
                placeholder="Write a description...."
                onChange={(e) => {
                  setValue("description", e), setValuee(e);
                }}
              />
              <div>
                {errors.description && (
                  <InputErrorMessage message="Enter description" />
                )}
              </div>
            </div>

            <div className="submit_btn mt-7 flex justify-end ">
              <button
                type="submit"
                className="xsm:w-full sm:w-full lg:w-[7rem]  bg-[#3A57E8]"
                style={{ color: " #fff", padding: "9px 23px" }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Creation1;
