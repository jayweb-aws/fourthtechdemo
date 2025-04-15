import Calendar from "../../../../../assets/icons/Calendar.png";
import Chart from "../../../../../assets/icons/Chart.png";
import Paper from "../../../../../assets/icons/Paper.png";
import certificate from "../../../../../assets/icons/certificate.png";
import { useGetOverViewStarQuery } from "../../../../../feature/api/dashboardApi";
import TopCard from "./Topcard";

const Overview = () => {
  const { isError, data, error, isLoading, isSuccess } =
    useGetOverViewStarQuery({});
  return (
    <div>
      <div className="grid grid-cols-1 gap-5 pt-8 pb-5 sm:grid-cols-2 md:grid-cols-4">
        <TopCard
          icon={Calendar}
          bg={"#3A57E8"}
          title={data?.data?.courseInProgress}
          name="Course in progress"
        />
        <TopCard
          icon={certificate}
          bg={`#369BFF`}
          name="Certificates Achieved"
          title={data?.data?.totalCertificates}
        />
        <TopCard
          icon={Chart}
          bg={`#08B1BA`}
          name="Total Enroll"
          title={data?.data?.totalEnrollment}
        />
        <TopCard
          icon={Paper}
          bg={`#0048B2`}
          name="Completed Courses"
          title={data?.data?.completedCourse}
        />
      </div>
    </div>
  );
};

export default Overview;
