import { sProgramUpcomingCourseArr } from "../../../../../constant/constant";
import Title from "../../../../common/Title/Title";

const ProgramUpcomingCourse = () => {
  return (
    <div className="pt-[90px]">
      <Title title="Upcoming Course Dates" />

      <div className="container px-[30px] grid grid-cols-1 lg:grid-cols-2 mt-[34px] pb-[50px]">
        {sProgramUpcomingCourseArr?.map((item, i) => (
          <div
            className="flex flex-col sm:flex-row gap-x-[20px] mb-[44px] last:mb-0"
            key={i}
          >
            <div className="w-[140px] sm:w-[150px] lg:w-[190px] h-[150px] lg:h-[190px] bg-secondary rounded-full flex flex-col justify-center items-center">
              <h4 className="text-[34px] lg:text-[40px] font-semibold">
                {item?.day}
              </h4>
              <h4>{item?.month}</h4>
            </div>
            <div className="max-w-[340px] pt-[30px]">
              <p>{item?.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramUpcomingCourse;
