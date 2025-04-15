import { Dropdown, Spinner } from "flowbite-react";
import { AiFillStar } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { FaPenSquare } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { useAppSelector } from "../../../../../app/hooks";
import { useGetOverViewStarQuery } from "../../../../../feature/api/dashboardApi";
import OverViewCard from "../../../../common/overviewCard/OverViewCard";

const OverView = () => {
  const { firstName, lastName, _id, roles } = useAppSelector(
    (state) => state.auth.user
  );
  const { isError, data, error, isLoading, isSuccess } =
    useGetOverViewStarQuery({});

  const allCatagory = [
    {
      id: 0,
      name: "Course in progress",
      number: isLoading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        data?.data?.courseInProgress
      ),
      logo: FaPenSquare,
    },
    {
      id: 0,
      name: "Completed Courses",
      number: isLoading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        data?.data?.completedCourse
      ),
      logo: TiTick,
    },
    {
      id: 2,
      name: "Student Enroll",
      number: isLoading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        data?.data?.totalEnrollment
      ),
      logo: BiTime,
    },
    {
      id: 4,
      name: "Certificates Achieved",
      number: isLoading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        data?.data?.totalCertificates
      ),
      logo: AiFillStar,
    },
  ];

  return (
    <div className="mb-5">
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-bold text-2xl">Overview</h1>
        <div>
          <Dropdown label="Monthly" dismissOnClick={false}>
            <Dropdown.Item>Days</Dropdown.Item>
            <Dropdown.Item>Weeks</Dropdown.Item>
            <Dropdown.Item>Months</Dropdown.Item>
            <Dropdown.Item>Year</Dropdown.Item>
          </Dropdown>
        </div>
      </div>
      <div className="grid grid-cols-12  md:gap-x-8 lg:gap-x-8 xl:gap-x-8 sm:gap-x-0 xsm:gap-x-0 md:gap-y-8 lg:gap-y-8 xl:gap-y-8 sm:gap-y-5 xsm:gap-y-5">
        {/* {allCatagory.map((catagory, idx) => (
          <OverViewCard key={idx} catagory={catagory} />
        ))} */}
      </div>
    </div>
  );
};

export default OverView;
