import { useEffect, useState } from "react";
import {
  useGetAllActiveCourseQuery,
  useGetCategoriesQuery,
  useGetCourseByCategoryQuery,
} from "../../../../feature/api/dashboardApi";
import BootCampsCard from "../bootCampsCard/BootCampsCard";

const BootCampsTab = () => {
  const [toggletabs, setToggletabs] = useState("");
  const [activeId, setActiveId] = useState("");
  const {
    data: activeCourse,
    isSuccess: activeCourseSuccess,
    isError: activeCourseError,
    isLoading: activeCourseLoading,
  } = useGetAllActiveCourseQuery({});
  const {
    data: course,
    isSuccess: courseIsSuccess,
    isError: courseError,
    isLoading: courseLoading,
  } = useGetCourseByCategoryQuery(toggletabs);
  const { data, isSuccess, isError, isLoading } = useGetCategoriesQuery({});

  const selected = (index: any) => {
    setActiveId(index);
    setToggletabs(`&category=${index}`);
  };

  const AllcourseHandle = () => {
    setActiveId("all");
    setToggletabs("");
  };

  useEffect(() => {
    setActiveId("all");
  }, [activeCourseSuccess]);

  return (
    <>
      <div className="container mx-auto font-nunito my-5">
        <h1 className="text-2xl text-center font-bold">DISCOVER NEW</h1>
        <h1 className="text-xl text-center mb-6 font-bold">
          Our Top Bootcamps
        </h1>
        <div className="flex flex-col justify-center items-center">
          <div className="p-2">
            <div className="lg:flex grid grid-cols-2 grid-rows-3 gap-3 lg:gap-0 text-sm">
              <button
                onClick={() => AllcourseHandle()}
                className={`lg:px-[12px] font-bold lg:py-[8px] md:px-[12px] md:py-[8px] px-[7px] py-[4px]  ${
                  activeId == "all"
                    ? "bg-black text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                All
              </button>
              {isSuccess &&
                data.data.categories.map(
                  ({ name, id }: { name: string; id: string }) => (
                    <button
                      key={id}
                      onClick={() => selected(id)}
                      className={`lg:px-[12px] font-bold lg:py-[8px] md:px-[12px] md:py-[8px] px-[7px] py-[4px]  ${
                        activeId == id
                          ? "bg-black text-white"
                          : "bg-gray-200 text-black"
                      }`}
                    >
                      {name}
                    </button>
                  )
                )}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 xl:gap-7 p-4">
          {courseLoading ? (
            <div>Loading...</div>
          ) : courseIsSuccess && course.data.courses.length > 0 ? (
            course.data.courses.map((item: any, indx: any) => (
              <BootCampsCard
                key={indx}
                id={item._id}
                name={item.title}
                duration={3}
                cutprice={item.discountPrice}
                price={item.price}
                timeMinute={0}
                imgSrc={item.courseImage}
                timeHour={item.durationInMinutes}
                level={item.level}
                modules={item.modules.length}
                linkTo={item.title}
              ></BootCampsCard>
            ))
          ) : (
            <div className="h-[50vh] flex justify-center items-center">
              <p>No data available!</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BootCampsTab;
