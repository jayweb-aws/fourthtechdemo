import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "../../../../common/Loading";

//component
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks";
import { useGetSingleCourseQuery } from "../../../../../feature/api/dashboardApi";
import { EditCourse } from "../../../../../feature/course/courseSlice";
import CourseEditWrapper from "./CourseEditWrapper";
import CourseCreationSuccessful from "./steps/CourseCreationSuccessful";

const CourseEditMain = () => {
  const router = useRouter();
  const id = router.query.editId as any;
  const dispatch = useAppDispatch();
  const { isError, data, error, isLoading, isSuccess } =
    useGetSingleCourseQuery(id);

  useEffect(() => {
    if (isError) {
      // console.log("upload error", isError);
    } else if (isSuccess) {
      const {
        title,
        shortDescription,
        category,
        language,
        durationInMinutes,
        price,
        level,
        featured,
        numberOfLectures,
        discountPrice,
        isDiscount,
        description,
        courseImage,
        videoUrl,
        messageToReviewer,
        tags,
      } = data.data.course;
      dispatch(
        EditCourse({
          title,
          shortDescription,
          category,
          courseImage,
          description,
          discountPrice,
          durationInMinutes,
          featured,
          isDiscount,
          language,
          level,
          messageToReviewer,
          numberOfLectures,
          price,
          tags,
          videoUrl,
        })
      );
    }
  }, [isError, isSuccess]);

  const {
    courseEdit: { title, shortDescription },
    refresh,
  } = useAppSelector((state) => state.course);

  const [step, setStep] = useState(1);
  // console.log(data)

  const onNext = () => {
    setStep(step + 1);
  };

  const onPrev = () => {
    setStep(step - 1);
  };

  return (
    <>
      <div
        className="course_creation sm:p-3 xsm:p-[2px] lg:p-5 md:p-5 md:bg-[red]"
        style={{ background: "#fff" }}
      >
        {step === 5 ? (
          <CourseCreationSuccessful onPrev={onPrev} onNext={onNext} />
        ) : (
          <div className="step-indicator flex items-center ">
            <div className="flex items-center flex-col z-10 relative">
              <div className={`${step === 1 ? "activeBorder" : ""}`}>
                <div
                  className={`${
                    step === 1 ? "activeBg" : ""
                  }  m-[2px] sm:m-1 w-[35px] h-[35px] sm:w-[39px] sm:h-[39px] lg:w-[54px] lg:h-[54px] text-center relative text-[#8A92A6] rounded-full bg-[#EBEEFD] flex items-center justify-center text-[27px] font-semibold`}
                >
                  1
                </div>
              </div>
              <p className="text-[10px] sm:text-[12px]  lg:text-base font-medium mt-2">
                Course Details
              </p>
            </div>
            <div className="indicator-line  w-[100%] h-[1px] bg-[#ADB5BD] flex-1 mb-5"></div>
            <div className="flex items-center flex-col z-10 relative">
              <div className={`${step === 2 ? "activeBorder" : ""}`}>
                <div
                  className={`${
                    step === 2 ? "activeBg" : ""
                  } m-[2px] sm:m-1 w-[35px] h-[35px] sm:w-[39px] sm:h-[39px] lg:w-[54px] lg:h-[54px] text-center relative text-[#8A92A6] rounded-full bg-[#EBEEFD] flex items-center justify-center text-[27px] font-semibold`}
                >
                  2
                </div>
              </div>
              <p className="text-[10px] sm:text-[12px]  lg:text-base font-medium mt-2">
                Course Media
              </p>
            </div>
            <div className="indicator-line  w-[100%] h-[1px] bg-[#ADB5BD] flex-1 mb-5"></div>
            <div className="flex items-center flex-col z-10 relative">
              <div className={`${step === 3 ? "activeBorder" : ""}`}>
                <div
                  className={`${
                    step === 3 ? "activeBg" : ""
                  }  m-[2px] sm:m-1 w-[35px] h-[35px] sm:w-[39px] sm:h-[39px] lg:w-[54px] lg:h-[54px] text-center relative text-[#8A92A6] rounded-full bg-[#EBEEFD] flex items-center justify-center text-[27px] font-semibold`}
                >
                  3
                </div>
              </div>
              <p className="text-[10px] sm:text-[12px]  lg:text-base font-medium mt-2">
                Curriculum
              </p>
            </div>
            <div className="indicator-line  w-[100%] h-[1px] bg-[#ADB5BD] flex-1 mb-5"></div>
            <div className="step step3  flex items-center flex-col z-10 relative">
              <div className={`${step === 4 ? "activeBorder" : ""}`}>
                <div
                  className={`${
                    step === 4 ? "activeBg" : ""
                  }  m-[2px] sm:m-1 w-[35px] h-[35px] sm:w-[39px] sm:h-[39px] lg:w-[54px] lg:h-[54px] text-center relative text-[#8A92A6] rounded-full bg-[#EBEEFD] flex items-center justify-center text-[27px] font-semibold`}
                >
                  4
                </div>
              </div>
              <p className="text-[10px] sm:text-[12px]  lg:text-base font-medium mt-2">
                Additional Information
              </p>
            </div>
          </div>
        )}
        {isLoading ? (
          <div>
            <Loading />
          </div>
        ) : isError ? (
          <div>Error...</div>
        ) : (
          isSuccess &&
          refresh && <CourseEditWrapper setStep={setStep} step={step} />
        )}
      </div>
    </>
  );
};

export default CourseEditMain;
