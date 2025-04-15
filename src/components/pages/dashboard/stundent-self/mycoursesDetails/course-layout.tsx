import { useRouter } from "next/router";
import { useEffect } from "react";
import toast from 'react-hot-toast';
import { useAppSelector } from "../../../../../app/hooks";
import {
  useGetCompleteCourseQuery,
  useGetEnrollmentQuery,
} from "../../../../../feature/api/dashboardApi";
import Loading from "../../../../common/Loading";
import AllLessons from "./all-lessons";
import Singlelesson from "./single-lesson";

export default function Courselayout() {
  const router = useRouter();
  const id = router.query.id as any;
  //redux state get user id
  const { _id } = useAppSelector((state) => state.auth.user);
  //enrollment get
  const { isError, data, error, isLoading, isSuccess } =
    useGetEnrollmentQuery(id);
  //all complete action get
  const {
    isError: completeIsError,
    data: completeData,
    error: completeError,
    isLoading: completeLoading,
    isSuccess: completeSuccess,
  } = useGetCompleteCourseQuery({ enroll: id, student: _id });

  //success toast
  useEffect(() => {
    if (completeIsError) {
      //   console.log("upload error", uploadError);
      toast.error((completeError as any)?.message);
    } else if (completeSuccess) {
      //  console.log("upload success", uploadData);

      toast.success(completeData?.data?.message);
    }
  }, [completeIsError, completeSuccess]);
  return (
    <>
      {isLoading || completeLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className="grid grid-cols-12 gap-4 font-nunito bg-gray-bg">
          <div className="col-span-12 lg:col-span-8">
            {isSuccess && data?.data?.enrollment?.course ? (
              <>
                <Singlelesson
                  enrollmentData={data?.data?.enrollment}
                  completeData={completeData?.data?.completes}
                />
              </>
            ) : (
              <div>Not found</div>
            )}
          </div>
          <div className="col-span-12 lg:col-span-4">
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-12 md:col-span-6 lg:col-span-12">
                {isSuccess && data?.data?.enrollment?.course ? (
                  <>
                    <AllLessons enrollmentData={data?.data?.enrollment} />
                  </>
                ) : (
                  <div>Not found</div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
