import PopularCourseCard from "./PopularCourseCard";
import { useGetPopularCourseQuery } from "../../../../../../feature/api/dashboardApi";

const PopularCourses = () => {
  const { data, isSuccess, isError, isLoading } = useGetPopularCourseQuery({});
  console.log("🚀 ~ PopularCourses ~ data:", data);

  const courses = [
    {
      id: 1,
      name: "UI/UX Design",
      text: "30+ Courses",
    },
    {
      id: 2,
      name: "UI/UX Design",
      text: "30+ Courses",
    },
    {
      id: 3,
      name: "UI/UX Design",
      text: "30+ Courses",
    },
  ];
  return (
    <div>
      <h2 className="text-[#232D42] font-semibold text-xl">Popular Courses</h2>
      <div className="mt-4 space-y-3">
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error...</div>
        ) : isSuccess && data.data.courses.length > 0 ? (
          data.data.courses.map(
            ({ title, id }: { id: string; title: string }) => {
              return <PopularCourseCard key={id} course={title} />;
            }
          )
        ) : (
          <div>Popular Course Not Found</div>
        )}
      </div>
    </div>
  );
};

export default PopularCourses;
