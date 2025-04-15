import CourseTab from "./course-tab";
// import ReactPlayer from 'react-player';
import ReactPlayer from "react-player";
import { useAppSelector } from "../../../../../app/hooks";

export default function Singlelesson({
  enrollmentData,
  completeData,
}: {
  enrollmentData: any;
  completeData: any;
}) {
  const {
    playVideo: { localVideo },
  } = useAppSelector((state) => state.playVideo);

  //console.log("this",enrollmentData.course)
  const config = {};

  return (
    <div className="flex flex-col ">
      <div>
        <h1 className="font-bold text-2xl ">{enrollmentData.course.title}</h1>
      </div>
      <div>
        {" "}
        <div
          className={` w-full  my-5 flex justify-center items-center h-[30rem] rounded-3xl bg-center bg-no-repeat`}
          style={{
            backgroundImage: localVideo
              ? ""
              : `url(${enrollmentData.course.courseImage})`,
            backgroundSize: "100% 100%",
          }}
        >
          {localVideo && (
            <ReactPlayer
              playing={true}
              config={{
                file: {
                  attributes: {
                    onContextMenu: (e: any) => e.preventDefault(),
                    controlsList: "noremoteplayback  nodownload ",
                    disablePictureInPicture: true,
                  },
                },
              }}
              controls
              url={`${localVideo}`}
              width={"100%"}
              height={"100%"}
            />
          )}
        </div>
      </div>
      <div>
        <CourseTab
          enrollmentData={enrollmentData}
          completeData={completeData}
        />
      </div>
    </div>
  );
}
