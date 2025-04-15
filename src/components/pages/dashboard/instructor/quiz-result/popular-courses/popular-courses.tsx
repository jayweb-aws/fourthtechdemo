import PopularCourseCard from "./courses-card";
import { useGetAllPopularCourseQuery } from "../../../../../../feature/api/dashboardApi";
import { Spinner } from "flowbite-react";
const PopularCourses = () => {
  const { data, isSuccess, isError, isLoading } = useGetAllPopularCourseQuery(
    {}
  );
  return (
    <div className="px-4 py-3 bg-white rounded-lg">
      <h2 className="text-[#232D42] font-semibold text-xl">Popular Courses</h2>
      <div className="mt-4 space-y-3">
        {isLoading ? (
          <div className="flex justify-center items-center">
            <Spinner />
          </div>
        ) : isError ? (
          <div>Network Error...</div>
        ) : (
          isSuccess &&
          data.data.courses.map((val: any) => (
            <PopularCourseCard key={val._id} course={val} />
          ))
        )}
      </div>
    </div>
  );
};

export default PopularCourses;
