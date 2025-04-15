import Image from "next/image";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import chat from "../../../../../../../../assets/Chat.png";
import ArrowIcon from "../../../../../../../../assets/arrowdown.png";
import arrow from "../../../../../../../../assets/arrowup.png";
import { useCreateQuestionCourseMutation } from "../../../../../../../../feature/api/dashboardApi";
import { InputErrorMessage } from "../../../../../../../utils/error";
import ButtonLoader from "../../../../../../../utils/loaders/ButtonLoader";

type props = {
  name: string;
  email: string;
  question: string;
};

export default function index({ enrollmentData }: { enrollmentData: any }) {
  const [createQuestionCourse, { error, data, isLoading, isSuccess, isError }] =
    useCreateQuestionCourseMutation();
  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<props>({
    // resolver: zodResolver(registrationFirstStepFromSchema)
    defaultValues: {
      name: "",
      email: "",
      question: "",
    },
  });
  const questionSubmit = async (data: props) => {
    await createQuestionCourse({
      name: data.name,
      email: data.email,
      question: data.question,
      course: enrollmentData.course.id,
    });
  };
  useEffect(() => {
    if (isError) {
      toast.error("Question Submit has added error");
      //console.log(error);
    } else if (isSuccess) {
      toast.success("Question Submit Successfully!");
      // console.log(data);
    }
  }, [isError, isSuccess]);
  return (
    <>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-12">
          <div>
            <div className="flex justify-between flex-col lg:flex-row">
              <input
                type="search"
                placeholder="Search"
                className="w-full lg:w-[43%] border border-[#E9ECEF] bg-[#F9F9F9] text-[#ADB5BD] rounded-md"
              />
              <div className="flex gap-4 flex-col lg:flex-row xsm:mt-3 lg:mt-0">
                <button className="bg-[#FFFFFF] border rounded px-4 py-2 gap-2 border-black flex items-center justify-center border-none">
                  All Lectures <Image src={ArrowIcon} />{" "}
                </button>
                <button className="bg-[#FFFFFF] border gap-2 px-4 py-2 border-black  flex items-center justify-center border-none">
                  Sort by most recent <Image src={ArrowIcon} />{" "}
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2 my-4">
              <h3 className="font-normal text-[18px]">
                Questions in this course
              </h3>
              <span className="text-[#8A92A6]">
                ({enrollmentData.course.QA.length})
              </span>
            </div>
            <div className="pt-3">
              {enrollmentData?.course?.QA?.map((item: any) => (
                <div className="flex gap-4 mb-7 w-full" key={item?._id}>
                  <div>
                    <Image
                      src={item.user.avatar}
                      alt=""
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <div className="w-full">
                    <h3 className="font-normal text-[18px]">{item.name}</h3>
                    <p className="text-[#8A92A6] font-normal text-sm pt-4 pb-4">
                      {item.question}
                    </p>
                    <p className="text-[#8A92A6] font-normal text-sm">
                      {item.user.firstName} | chapter 2 | 2 weeks ago
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-2 items-center text-[#8A92A6]">
                      <span>32</span>
                      <Image src={arrow} alt="" width="27px" height="29px" />
                    </div>
                    <div className="flex gap-2 items-center text-[#8A92A6]">
                      <span>32</span>
                      <Image src={chat} alt="" width="24px" height="24px" />
                    </div>
                  </div>
                </div>
              ))}
              <button className="bg-[#3A57E8] text-white px-6 py-2 rounded">
                See More
              </button>
            </div>
            <div className="bg-white p-5 rounded mt-5">
              <h3 className="font-medium text-[22px]">Ask A Question</h3>
              <form onSubmit={handleSubmit(questionSubmit)}>
                <div className="flex gap-5 pt-4">
                  <div className="flex-col flex w-[50%]">
                    <label className="pb-2">First Name</label>
                    <input
                      {...register("name", { required: true })}
                      type="text"
                      placeholder="Jhone"
                      className="border-none text-sm py-3 bg-[#F9F9F9] text-[#8A92A6] rounded"
                    />
                    <div>
                      {errors.name && (
                        <InputErrorMessage message={"Enter Name"} />
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col w-[50%]">
                    <label className="pb-2">Email Id</label>
                    <input
                      {...register("email", { required: true })}
                      type="email"
                      placeholder="xyz@gmail.com"
                      className="border-none text-sm py-3 bg-[#F9F9F9] text-[#8A92A6] rounded"
                    />
                    <div>
                      {errors.email && (
                        <InputErrorMessage message={"Enter Email"} />
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mt-5">
                  <label className="pb-2">Enter Your Question</label>
                  <input
                    {...register("question", { required: true })}
                    type="text"
                    name="question"
                    placeholder="Lorem Ipsum dolor sit amet, adipsiclint iet"
                    className="border-none text-sm py-3 bg-[#F9F9F9] text-[#8A92A6] rounded"
                  />
                  <div>
                    {errors.question && (
                      <InputErrorMessage message={"Enter question"} />
                    )}
                  </div>
                </div>
                <div className="flex gap-2 items-center py-5">
                  <input type="checkbox" />
                  <label className="font-normal text-sm text-[#8A92A6]">
                    Save my name and email in this browder for the next time
                  </label>
                </div>

                <button
                  disabled={isLoading}
                  type="submit"
                  className="flex justify-center bg-[#3A57E8] text-white rounded px-6 py-2"
                >
                  {isLoading ? <ButtonLoader /> : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
