import Image from "next/image";
import { useAppSelector } from "../../../../../../../../app/hooks";
import { useGetRoleCertificatesQuery } from "../../../../../../../../feature/api/dashboardApi";
export default function Overview({ enrollmentData }: { enrollmentData: any }) {
  //console.log(enrollmentData);
  const { _id } = useAppSelector((state) => state.auth.user);
  const {
    isError: certificateIsError,
    data: certificateData,
    error: certificateError,
    isLoading: certificateLoading,
    isSuccess: certificateSuccess,
  } = useGetRoleCertificatesQuery({
    student: _id,
    course: enrollmentData?.course?._id,
  });
  return (
    <div>
      <div className="py-1 border-b-2 border-gray-400">
        <h1 className="font-bold text-lg">About This Course</h1>
        <p className="text-small-text-color text-sm py-4 md:py-8">
          {enrollmentData.course.shortDescription}
        </p>
      </div>
      <div className="py-9 border-b-2 border-gray-400 grid grid-cols-2 md:grid-cols-4 gap-x-6">
        <h1 className="font-bold text-lg">About This Course</h1>
        <div className="text-small-text-color text-sm flex flex-col gap-y-1">
          <p>Skill Level: {enrollmentData.course.level}</p>
          <p>Students: 56521</p>
          <p>Languages: {enrollmentData.course.language}</p>
          <p>Captions: Yes</p>
          <p>Lectures: {enrollmentData.course.numberOfLectures}</p>
          <p>
            Videos: {Math.floor(enrollmentData.course.durationInMinutes / 60)}:
            {enrollmentData.course.durationInMinutes % 60} total duration
          </p>
        </div>
      </div>
      <div className="py-9 border-b-2 border-gray-400 grid  grid-cols-2 md:grid-cols-4 gap-x-6">
        <h1 className="font-bold text-lg">Certificate</h1>
        <div className=" text-sm flex flex-col gap-y-1">
          <p className="text-small-text-color">
            Get the Certificate after completing the course
          </p>
        </div>
      </div>
      <div className="py-9 border-b-2 border-gray-400 grid  grid-cols-2 md:grid-cols-4 gap-x-6">
        <h1 className="font-bold text-lg">Features</h1>
        <div className=" text-sm flex flex-col">
          <p className="text-small-text-color">Available on Ios and Android</p>
        </div>
      </div>
      <div className="py-9 border-b-2 border-gray-400 grid  grid-cols-2 md:grid-cols-4 gap-x-6">
        <h1 className="font-bold text-lg">Description</h1>
        <div className=" text-sm flex flex-col gap-y-3">
          <div
            dangerouslySetInnerHTML={{
              __html: enrollmentData.course.description,
            }}
          />
        </div>
      </div>
      <div className="pt-9 border-b-2 border-gray-400 grid grid-cols-4 gap-x-6">
        <h1 className="font-bold text-lg">Instructor</h1>
        <div className=" text-sm flex flex-col gap-y-3">
          {enrollmentData.course.instructors &&
            enrollmentData.course.instructors.map(
              ({
                avatar,
                firstName,
                _id,
              }: {
                avatar: string;
                firstName: string;
                _id: number;
              }) => (
                <div className="flex gap-3 items-center mb-3" key={_id}>
                  <Image
                    src={avatar}
                    objectFit="cover"
                    alt="courseImage"
                    className="rounded-full"
                    width={48}
                    height={48}
                  />
                  <h2 className="text-lg font-bold">{firstName}</h2>
                </div>
              )
            )}
        </div>
      </div>
    </div>
  );
}
