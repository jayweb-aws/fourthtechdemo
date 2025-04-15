import { useRouter } from "next/router";
import { useAppSelector } from "../../../../../../app/hooks";
import { useGetSingleCourseQuery } from "../../../../../../feature/api/dashboardApi";
import Loading from "../../../../../common/Loading";
import AllLessons from "./all-lessons";
import Singlelesson from "./single-lesson";

export default function Courselayout() {
  const router = useRouter();
  const courseId = router.query.id as any;
  //redux state get user id
  const { _id } = useAppSelector((state) => state.auth.user);
  //enrollment get
  const { isError, data, error, isLoading, isSuccess } =
    useGetSingleCourseQuery(courseId);
  //all complete action get

  return (
    <>
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className="grid grid-cols-12 gap-4 font-nunito bg-gray-bg">
          <div className="col-span-12 lg:col-span-8">
            {isSuccess && data?.data?.course ? (
              <>
                <Singlelesson enrollmentData={data?.data} />
              </>
            ) : (
              <div>Not found</div>
            )}
          </div>
          <div className="col-span-12 lg:col-span-4">
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-12 md:col-span-6 lg:col-span-12">
                {isSuccess && data?.data?.course ? (
                  <>
                    <AllLessons enrollmentData={data?.data} />
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
