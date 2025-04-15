import dynamic from "next/dynamic";
import { useGetAllInstructorCourseQuery } from "../../../../../feature/api/dashboardApi";
import CompletedLesson from "../../admin/home/CompletedLesson";
import GroupDiscussion from "../../admin/home/GroupDiscussion";
import NoticeBoard from "../../admin/home/NoticeBoard";
import StudyStatistics from "../../admin/home/StudyStatistics";
import OverView from "../../admin/overview/OverView";
import FilledPositions from "./filled-position/index";
import LatestStudent from "./latest-student/LatestStudent";
import OpenPositions from "./open-position";
import OverviewChart from "./overview-chart/OverviewChart";
function InstructorOverview() {
  const {
    data: instructorCourseData,
    isSuccess: instructorCourseSuccess,
    isError: instructorCourseIsError,
    isLoading: instructorCourseLoading,
    isFetching: instructorFetch,
  } = useGetAllInstructorCourseQuery<any>({
    page: 1,
    limit: 3,
  });
  return (
    <div className="grid grid-cols-12 gap-4 font-nunito bg-gray-bg min-h-max">
      <div className="col-span-12 lg:col-span-8">
        <OverView />
        <StudyStatistics />
        <div className="grid grid-cols-12 gap-x-5 my-8">
          <div className="lg:col-span-6 col-span-12">
            <FilledPositions />
          </div>
          <div className="lg:col-span-6 col-span-12 lg:mt-0 mt-3">
            <OpenPositions />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-x-5">
          <div className="lg:col-span-6 col-span-12">
            <OverviewChart />
          </div>
          <div className="lg:col-span-6 col-span-12 lg:my-0 my-4">
            <LatestStudent />
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-4 ">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12 md:col-span-6 lg:col-span-12">
            <CompletedLesson />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-12 ">
            <NoticeBoard />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-12">
            <GroupDiscussion />
          </div>
        </div>
      </div>
    </div>
  );
}
export default dynamic(() => Promise.resolve(InstructorOverview), {
  ssr: false,
});
