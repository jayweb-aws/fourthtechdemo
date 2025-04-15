import { useFormik } from "formik";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { HiPlus } from "react-icons/hi";
import "react-quill/dist/quill.snow.css";
import { ClipLoader } from "react-spinners";
import toast from 'react-hot-toast';
import * as Yup from "yup";
import Delete from "../../../../../Icon/Delete";
import {
  useCreateQuizMutation,
  useCreateQuizQuestionMutation,
  useGetAllActiveCourseQuery,
  useGetCategoriesQuery,
} from "../../../../../feature/api/dashboardApi";
import { useUploadCsvMutation } from "../../../../../feature/api/mediaUploadApi";
import ButtonLoader from "../../../../utils/loaders/ButtonLoader";
import QuestionBox from "./QuestionBox";

export default function QuizCreation() {
  const router = useRouter();
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );
  const [multiQuestion, setMultiQuestion] = useState<any>([]);
  // answers
  const [answers, setAnswers] = useState<{ value: string; checked: boolean }[]>(
    []
  );
  const [
    createQuiz,
    { error, data, isLoading: loading, isSuccess: success, isError: iserror },
  ] = useCreateQuizMutation();
  const [
    createQuizQuestion,
    {
      error: QuestionError,
      data: QuestionData,
      isLoading: questionloading,
      isSuccess: Questionsuccess,
      isError: Questioniserror,
    },
  ] = useCreateQuizQuestionMutation<any>();
  //upload csv query
  const [
    uploadCsv,
    {
      isLoading: csvLoading,
      error: csvError,
      data: csvData,
      isSuccess: csvSuccess,
      isError: csvIsError,
    },
  ] = useUploadCsvMutation<any>();

  const {
    data: allcategory,
    isSuccess,
    isError,
    isLoading,
  } = useGetCategoriesQuery({});
  const {
    data: allCourse,
    isSuccess: allCourseSuccess,
    isError: allCourseError,
    isLoading: allCourseLoading,
  } = useGetAllActiveCourseQuery({});

  let singleCategory;
  isLoading ? (
    <div>Loading....</div>
  ) : isError ? (
    <div>Error....</div>
  ) : isSuccess &&
    allcategory?.data?.categories &&
    allcategory?.data?.categories.length > 0 ? (
    (singleCategory = allcategory?.data?.categories)
  ) : (
    <div>No Categories Found</div>
  );
  let singleCourse;
  allCourseLoading ? (
    <div>Loading....</div>
  ) : allCourseError ? (
    <div>Error....</div>
  ) : allCourseSuccess &&
    allCourse?.data?.courses &&
    allCourse?.data?.courses.length > 0 ? (
    (singleCourse = allCourse?.data?.courses)
  ) : (
    <div>No Course Found</div>
  );
  //formik schema
  const validationSchema = Yup.object({
    question: Yup.string().required("Please Enter Question"),
    answer: Yup.string().required("Please add answer"),
    explanation: Yup.string().required("Please add explanation"),
  });
  //formik validation
  const {
    handleChange,
    values,
    errors: formikErrors,
    handleBlur,
    handleSubmit: formikHandleSubmit,
    resetForm,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: {
      question: "",
      answer: "",
      explanation: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      //minimum 3 question option add
      if (answers.length < 3) {
        toast.error("Minimum 3 option add");
      }
      //if quiz undefined
      else if (data === undefined) {
        toast.error("Quiz Not Created");
      } else {
        // console.log(question);
        const quiz = data.data.quiz.id;
        //  console.log({ answers, question,quiz });

        multiQuestion.unshift({
          answers,
          question: values?.question,
          explanation: values?.explanation,
          quiz: quiz,
        });
      }
      //after add question then from reset
      setTimeout(() => {
        resetForm({});
        setAnswers([]);
      }, 500);
    },
  });
  //react-hook-forms
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    createQuiz(data);
  };

  const [inputValue, setInputValue] = useState("");

  const handleAddInput = (e: any) => {
    e.preventDefault();
    setAnswers([...answers, { value: inputValue, checked: false }]);
    setInputValue("");
  };

  const handleDeleteInput = (index: number, e: any) => {
    e.preventDefault();

    const newInputs = [...answers];
    newInputs.splice(index, 1);
    setAnswers(newInputs);
  };

  const handleCheckboxChange = (index: number) => {
    const newInputs = [...answers];
    newInputs[index].checked = !newInputs[index].checked;
    setAnswers(newInputs);
    setFieldValue("answer", "answer");
  };

  // console.log({ ...inputs, value });

  useEffect(() => {
    if (iserror) {
      toast.error("quiz create  error");
    } else if (success) {
      toast.success("Quiz create Successfully!");
    }
  }, [iserror, success]);

  useEffect(() => {
    if (Questioniserror) {
      toast.error(QuestionError?.data?.message);
    } else if (Questionsuccess) {
      setAnswers([]);
      setInputValue("");
      setMultiQuestion([]);
      toast.success("Quiz create question Successfully!");
      router.push("/dashboard/quiz");
    }
  }, [Questioniserror, Questionsuccess]);

  //submit , publish question function
  const submitQuestion = () => {
    if (multiQuestion.length < 1 || csvData?.data?.questions?.length < 1) {
      toast.error("Click on New Question Button");
    } else {
      if (csvSuccess) {
        const xr = csvData?.data?.questions?.map((itm: any) => {
          return {
            ...itm,
            ...{
              ...{
                quiz: data?.data?.quiz?.id,
              },
            },
          };
        });
        createQuizQuestion({ questions: xr });
      } else {
        createQuizQuestion({ questions: multiQuestion });
      }
    }
  };
  //upload csv function
  const uploadCsvFun = (e: any) => {
    const file = e.target.files;
    if (file && file.length > 0 && file["0"]) {
      const formData = new FormData();
      formData.append("file", file["0"]);
      uploadCsv(formData);
    } else if (
      file &&
      file.length > 0 &&
      file["0"].type.substr(0, 5) !== "file"
    ) {
      toast.error("Select a valid file");
    }
  };
  useEffect(() => {
    if (csvIsError) {
      toast.error(csvError?.data?.message);
    } else if (csvSuccess) {
      setMultiQuestion(csvData?.data?.questions);

      toast.success("CSV Upload Successfully");
    }
  }, [csvIsError, csvSuccess]);

  return (
    <div className="grid  lg:grid-cols-12 w-full justify-between gap-x-8 font-nunito">
      <div className="lg:col-span-8 md:col-span-8 col-span-12">
        <div className="flex justify-end">
          <label className="block w-fit cursor-pointer rounded bg-[#3A57E8] py-2.5 px-4 text-sm font-normal capitalize tracking-[0.32px] text-[#fff]">
            Upload CSV
            <input type="file" onChange={uploadCsvFun} className="hidden" />
          </label>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="font-bold">Quiz Title</label>
            <input
              type="text"
              className="mt-3"
              placeholder="Enter Quiz Title"
              {...register("title", { required: true })}
              style={{
                background: " #FFFFFF",
                boxShadow: "0px 1px 15px rgb(0 0 0 / 15%)",
                borderRadius: "8px",
                width: "100%",
                border: "none",
                padding: " 11px 17px",
              }}
            />
            {errors.title && (
              <div className="text-xs text-red-600 font-nunito">
                Enter Quiz title
              </div>
            )}
          </div>
        </form>

        <form onSubmit={formikHandleSubmit}>
          <div>
            <ReactQuill
              theme="snow"
              className="font-nunito"
              value={values?.question}
              onChange={(e) => {
                handleChange(e);
                setFieldValue("question", e);
              }}
            />
            <div>
              <p className="mt-1 text-red-500 text-sm text-danger">
                {formikErrors.question && touched.question
                  ? formikErrors.question
                  : null}
              </p>
            </div>
          </div>

          <div>
            <>
              <div>
                <h1 className="font-bold text-xl text-black font-nunito">
                  Answers
                </h1>
              </div>
              <div className="px-5 shadow py-11 bg-white rounded-lg">
                <div>
                  <div>
                    {answers?.map((input, index) => (
                      <div
                        key={index}
                        className="flex gap-5 items-center mb-3 font-nunito"
                      >
                        <button onClick={(e) => handleDeleteInput(index, e)}>
                          <Delete className="w-9 h-9" />
                        </button>
                        <input
                          type="text"
                          onChange={(e) => (input.value = e.target.value)}
                          className="custom_focus_input grow border-[1px] border-[#3A57E8] outline-none"
                          style={{
                            background: "rgb(255, 255, 255)",
                            boxShadow: " rgba(0, 0, 0, 0.15) 0px 1px 15px",
                            borderRadius: "5px",
                            width: "500px",
                            padding: "11px 17px",
                          }}
                        />
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            checked={input.checked}
                            onChange={() => handleCheckboxChange(index)}
                            className="w-8 h-8 outline-none  border-black font-nunito"
                          />
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className=" mt-10">
                  <button
                    onClick={(e) => handleAddInput(e)}
                    className=" flex items-center"
                  >
                    <HiPlus className="text-[32px] text-[#3A57E8]" />
                    <p className=" gap-2 font-poppins text-lg font-medium text-[#3A57E8]">
                      Add Options
                    </p>
                  </button>
                </div>
                <div className="mt-6">
                  <h1 className="font-nunito mb-3 text-xl font-bold text-black">
                    Explanation:
                  </h1>
                  <input
                    type="text"
                    value={values?.explanation}
                    name="explanation"
                    onChange={handleChange}
                    className="custom_focus_input grow border-[1px] border-[#3A57E8] outline-none"
                    style={{
                      background: "rgb(255, 255, 255)",
                      boxShadow: " rgba(0, 0, 0, 0.15) 0px 1px 15px",
                      borderRadius: "5px",
                      width: "500px",
                      padding: "8px 17px",
                    }}
                  />
                  <p className="mt-1 text-sm text-red-600">
                    {formikErrors.explanation && touched.explanation
                      ? formikErrors.explanation
                      : null}
                  </p>
                </div>
              </div>
              <p className="mt-1 text-red-500 text-sm text-danger">
                {formikErrors.answer && touched.answer
                  ? formikErrors.answer
                  : null}
              </p>
            </>
          </div>
          <div className="py-5">
            {csvSuccess
              ? csvData?.data?.questions.map((val: any, id: any) => (
                  <QuestionBox val={val} key={id} />
                ))
              : multiQuestion?.map((val: any, id: number) => (
                  <QuestionBox val={val} key={id} />
                ))}
          </div>
          <div className="py-5 flex justify-end">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm lg:px-5 px-2  py-2.5 mr-2 mb-2 font-nunito"
            >
              Add New Question
            </button>
            <button
              type="button"
              onClick={submitQuestion}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm lg:px-5 px-2  py-2.5 mr-2 mb-2 font-nunito"
            >
              {questionloading ? <ClipLoader color="#fff" /> : "Publish"}
            </button>
          </div>
        </form>
        <div className="py-5"></div>
      </div>

      <div className="lg:col-span-4 md:col-span-4 col-span-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div></div>
          <div className="bg-white flex mt-5 lg:mt-0 md:mt-0   flex-col px-5 py-3">
            <div className="w-full  ">
              <Category
                label="Category"
                className="font-nunito"
                register={register}
                name="category"
                options={singleCategory}
              />
            </div>
            <div className="w-full  my-4">
              <SelectOptions
                label="Quiz Type"
                className=" font-nunito"
                register={register}
                name="type"
                options={["True false", "Checkbox", "Text"]}
              />
            </div>
            <div className="w-full  ">
              <SelectOptions
                label="Question Attempts"
                className=" font-nunito"
                name="attempts"
                register={register}
                options={[5, 7, 8]}
              />
            </div>
          </div>
          <div className="my-5">
            <div className="bg-white flex   flex-col pb-10 pt-4 px-5">
              <div className="w-full  ">
                <SelectOptions
                  label="Score per question "
                  className=" font-nunito"
                  name="scorePerQuestion"
                  register={register}
                  options={[5, 3, 4]}
                />
              </div>
              <div className="w-full  my-5">
                <SelectOptions
                  label="Question displayed per page"
                  className="font-nunito"
                  name="questionPerPage"
                  register={register}
                  options={[5, 3, 4]}
                />
              </div>
              <div className="w-full  flex justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    {...register("isSort")}
                    className="text-blue-600 w-5 h-5 border-black font-nunito"
                  />
                </label>
                <p className="font-semibold font-nunito lg:ml-3 xl:ml-0 md:ml-0 sm:ml-0 xsm:ml-0">
                  Question sorted randomly
                </p>
              </div>
              <div className="my-5">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    {...register("isRequired")}
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-bold text-gray-900 dark:text-gray-300 font-nunito">
                    Required
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="bg-white flex mt-5  flex-col px-5 py-7 rounded-lg">
            <div className="flex lg:flex-col xl:flex-col sm:flex-row xsm:flex-row justify-between lg:items-baseline sm:items-center xsm:items-center xl:items-baseline">
              <div className="my-8">
                <label
                  htmlFor="startDate"
                  className="font-semibold font-nunito"
                >
                  Start Date
                </label>
                <br />
                <input
                  className="border border-blue-400 rounded-lg px-5 py-2 text-blue-500 font-nunito"
                  type="date"
                  id="startDate"
                  // {...register("startDate", { required: "start date is required" })}
                  {...register("startDate", {
                    required: "Start date is required",
                  })}
                />
                {errors.startDate && (
                  <div className="text-xs text-red-600 font-nunito">
                    start date is required
                  </div>
                )}
              </div>
              <div className=" lg:ml-[-25px] xl:ml-0 md:ml-5 sm:ml-5 xsm:ml-5 lg:mb-4 md:my-0 sm:my-0 xsm:my-0  xl:mb-4">
                <label
                  htmlFor="startTime "
                  className="font-semibold mb-2 font-nunito"
                >
                  Start Time
                </label>
                <br />

                <input
                  className="border border-blue-400 rounded-lg px-5 py-2 text-blue-500 font-nunito"
                  type="time"
                  id="startTime"
                  {...register("startTime", {
                    required: "Start time is required ",
                  })}
                />
                {errors.startTime && (
                  <div className="text-xs text-red-600">
                    start time is required
                  </div>
                )}
              </div>
            </div>
            <div className="w-full">
              <label
                htmlFor="until "
                className="font-semibold mb-2 font-nunito"
              >
                Time Limit (min)
              </label>
              <br />

              <input
                type="number"
                className="border border-blue-400 rounded-lg px-5 py-2 text-blue-500 font-nunito"
                id="timeAllowed"
                {...register("timeAllowed", {
                  required: "Duration time is required",
                })}
              />
              {errors.timeAllowed && (
                <div className="text-xs text-red-600 font-nunito">
                  Duration time is required
                </div>
              )}
            </div>
          </div>
          <div className="mt-5 ">
            {data === undefined && (
              <button
                type="submit"
                className="flex w-full justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-nunito focus:ring-blue-300 font-medium rounded-lg text-sm lg:px-5 px-2  py-2.5 mr-2 mb-2"
              >
                {loading ? <ButtonLoader /> : "Submit"}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
const Category = ({
  label,
  name,
  onChange,
  className,
  register,
  options,
}: {
  label?: string | undefined;
  name: string;
  onChange?: any;
  className?: string | undefined;
  options: any;
  register: any;
}) => {
  return (
    <div className="">
      <label
        htmlFor="category"
        className="block mb-3 font-bold  text-blue-600 font-nunito"
      >
        {label}
      </label>
      <select
        name={name}
        {...register(name, { required: true })}
        id="category"
        className=" bg-gray-50 border rounded-l-[0.25rem] rounded-r-[0.25rem]   border-blue-600 text-sm  focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 flex flex-col justify-between font-nunito "
        defaultValue={options && options?.length > 0 && options[0]._id}
      >
        {options &&
          options?.length > 0 &&
          options?.map((item: any, id: any) => (
            <option
              value={item.id}
              key={id}
              className="p-4 my-3 border border-b-2 border-black font-nunito"
            >
              {item.name}
            </option>
          ))}
      </select>
    </div>
  );
};
const SelectOptions = ({
  label,
  name,
  onChange,
  className,
  register,
  options,
}: {
  label?: string | undefined;
  name: string;
  onChange?: any;
  className?: string | undefined;
  options: any;
  register: any;
}) => {
  return (
    <div className="">
      <label
        htmlFor="media"
        className="block mb-3 font-bold  text-blue-600 font-nunito"
      >
        {label}
      </label>
      <select
        name={name}
        {...register(name)}
        id="media"
        className=" bg-gray-50 border rounded-l-[0.25rem] rounded-r-[0.25rem]   border-blue-600 text-sm  focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 flex flex-col justify-between font-nunito"
        defaultValue={options && options[0]}
      >
        {options &&
          options.map((item: any, id: any) => (
            <option value={item} key={id} className="p-4 my-3">
              {item}
            </option>
          ))}
      </select>
    </div>
  );
};
