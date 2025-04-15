import Image from "next/image";
import { useGetAllAnnouncementQuery } from "../../../../../feature/api/dashboardApi";
import ExpendText from "../../../../common/ExpandText/ExpandText";

const NoticeBoard = () => {
  const { isLoading, data } = useGetAllAnnouncementQuery({});
  return (
    <div className="bg-white rounded-xl py-4 px-3 flex flex-col">
      <h1 className="text-xl text-title-clr mb-3 font-bold">Notice Board</h1>

      <div className="flex flex-col h-[300px] overflow-y-auto custom_scroll">
        {data?.data?.announcements?.map((val: any, idx: any) => (
          <div
            key={idx}
            className="flex flex-col items-center py-3 px-2 bg-transparent rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 "
          >
            <Image
              width={60}
              height={80}
              className="rounded-xl"
              src={val?.createdBy?.avatar}
              alt=""
            />
            <div className="flex flex-col px-3 justify-between leading-normal">
              <h5 className="mb-2 font-bold text-[1.15rem] tracking-normal font-semi-bold text-title-clr">
                {val?.title}
              </h5>
              <div className="mb-3 font-normal text-sm text-small-text-color">
                <ExpendText color={"#1c64f2"} maxChars={60}>
                  {val?.description}
                </ExpendText>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticeBoard;
