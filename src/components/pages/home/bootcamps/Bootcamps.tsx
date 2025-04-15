import CardImage3 from "../../../../assets/ServicesImages/servicesImage/167774282_m.jpg";
import CardImage2 from "../../../../assets/ServicesImages/servicesImage/177095938_m.jpg";
import CardImage1 from "../../../../assets/ServicesImages/servicesImage/Risk_Management+Framework(bootcamp).jpg";

import { useGetAllActiveCourseQuery } from "../../../../feature/api/dashboardApi";
import BootCampsCard from "../../bootcamps/bootCampsCard/BootCampsCard";

const Bootcamps = () => {
  const { data, isSuccess, isError, isLoading } = useGetAllActiveCourseQuery(
    {}
  );
  // console.log(data);
  return (
    <div className="mx-auto font-nunito my-12 md:my-20">
      <div className="max-w-3xl mx-auto space-y-4 my-8">
        <h4 className="text-xl md:text-2xl font-medium text-blue-500 text-center">
          Fourth IT Academy
        </h4>
        <h3 className="text-2xl px-2 md:text-4xl font-bold text-center">
          How our bootcamps compare to other training providers.
        </h3>
      </div>

      <div
        className=" mx-auto container px-5 md:px-6 lg:px-7 xl:px-0 grid grid-cols-1 gap-4 lg:gap-3  xl:gird-cols-3 lg:grid-cols-3 md:grid-cols-2 md:gap-x-5   xl:gap-7  md:gap-y-4 
      "
      >
        {isSuccess &&
          data?.data?.courses?.length > 0 &&
          data.data.courses
            .slice(0, 3)
            .map(
              (item: {
                _id: string;
                title: string;
                price: number;
                level: string;
                courseImage: string;
                durationInMinutes: number;
                modules: [];
                discountPrice: number;
              }) => (
                <BootCampsCard
                  key={item._id}
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
                />
              )
            )}
      </div>
    </div>
  );
};

export default Bootcamps;
