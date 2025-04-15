import { useEffect } from "react";
import { useAppSelector } from "../../../../../app/hooks";
import Admindashboardcard from "../../dashboardcard/Admindashboardcard";
import OverView from "../overview/OverView";
import CompletedLesson from "./CompletedLesson";
import GroupDiscussion from "./GroupDiscussion";
import NewEnrollmentTable from "./NewEnrollmentTable";
import PopularTopicsChart, { EarningsChart } from "./NextClass";
import NextClass from "./NextClass";
import NoticeBoard from "./NoticeBoard";
import StudyStatistics from "./StudyStatistics";
import { useGetOverViewStarQuery } from "../../../../../feature/api/dashboardApi";

function Home() {

  const { firstName, lastName, _id, roles } = useAppSelector((state) => state.auth.user);
  const { isError, data, error, isLoading, isSuccess } = useGetOverViewStarQuery({});
  console.log("🚀 ~ Home ~ data:sdsd", data)
  useEffect(() => {
    console.log("Data updated:", data);
  }, [data]);

  return (
    <>
    <Admindashboardcard title={`Hello ${firstName} ${lastName}!`} subTitle="We are on a mission to help developers like you to build beautiful projects for free." data={data?.data}/>
    <div className="grid grid-cols-12 gap-4 font-nunito bg-gray-bg px-5 md:px-9 py-8">
      <div className="col-span-12 lg:col-span-8">
        {/* <OverView /> */}
        <StudyStatistics />

        {/* <NextClass /> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-8 w-full">
  <div className="w-full">
    <PopularTopicsChart />
  </div>
  <div className="w-full">
    <EarningsChart />
  </div>
</div>
    <NewEnrollmentTable />
      </div>
      <div className="col-span-12 lg:col-span-4">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12 md:col-span-6 lg:col-span-12">
            <CompletedLesson />
          </div>
          {/* <div className="col-span-12 md:col-span-6 lg:col-span-12">
            <NoticeBoard />
          </div> */}
          <div className="col-span-12 md:col-span-6 lg:col-span-12">
            <GroupDiscussion />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;
