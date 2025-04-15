import Image from "next/image";
import Link from "next/link";
import img from "../../../../../../assets/No_image_.png";
import star from "../../../../../../assets/star.png";

const CourseCard = ({ item }: { item: any }) => {
  // console.log(item);
  return (
    <Link
      href={"/dashboard/my-course/[id]"}
      as={`/dashboard/my-course/${item?.id}`}
    >
      <div className="  cursor-pointer overflow-hidden shadow rounded-lg">
        <div className=" bg-[#FFFFFF] h-full rounded-lg ">
          <div className="!w-full bg-[#FFFFFF]">
            <Image
              src={item ? item?.course?.courseImage : img}
              className="!w-full h-auto"
              width={500}
              height={400}
              objectFit="cover"
              alt="courseImage"
            />
          </div>
          <div className="bg-[#FFFFFF] p-3 ">
            <h4 className="text-lg font-medium  overflow-auto">
              {item == null ? "Empty" : item?.course?.title}
            </h4>
            <div className="">
              <div className="flex justify-between pb-2">
                <span className="text-[#8A92A6]">
                  <Image src={star} />
                  {item == null ? 0 : item?.course?.ratingsAverage}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                <div
                  className="bg-[#1AA053] h-1.5 rounded-full dark:bg-blue-500"
                  style={{ width: item?.completed }}
                ></div>
              </div>
              <span className="text-[#8A92A6]">
                {item?.completed}% Completed
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
