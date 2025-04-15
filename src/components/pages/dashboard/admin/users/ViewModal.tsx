import Image from "next/image";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import awardImg from "../../../../../assets/dashboard/award.png";
import bookImg from "../../../../../assets/dashboard/book.png";
import jobImg from "../../../../../assets/dashboard/briefcase.png";
import callImg from "../../../../../assets/dashboard/call.png";
import locationImg from "../../../../../assets/dashboard/location.png";
import printImg from "../../../../../assets/dashboard/printer.png";
import questionImg from "../../../../../assets/dashboard/question.png";
import emailImg from "../../../../../assets/dashboard/sms.png";
import { useGetSingleUsersQuery } from "../../../../../feature/api/dashboardApi";
import Loading from "../../../../common/Loading";
import ViewModalInfoCard from "./ViewModalInfoCard";

const ViewModal = ({ closeModal, id, data: course }: any) => {
  const componentPdf = useRef<any>();
  const { isError, data, error, isLoading, isSuccess } = useGetSingleUsersQuery(
    { id: id }
  );
  // console.log(data?.data?.user?.roles[0]);
  const generatePDF = useReactToPrint({
    content: () => componentPdf.current,
    documentTitle: "user-information",
    onAfterPrint: () => alert("Data saved in PDF"),
  });
  return (
    <div className="px-1" ref={componentPdf}>
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        isSuccess && (
          <>
            <div className="flex items-center gap-x-[40px]">
              <Image
                src={data?.data?.user?.avatar}
                alt="user"
                width={100}
                height={100}
              />
              <div>
                <h4 className="text-[30px] font-semibold text-dark tracking-[2%]">
                  {data?.data?.user?.firstName} {data?.data?.user?.lastName}
                </h4>
                <p className="text-[#858585]">{data?.data?.user?.email}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 pt-[30px]">
              <ViewModalInfoCard
                img={callImg}
                git
                title="Contact Number"
                subTitle={data?.data?.user?.phone}
              />
              <ViewModalInfoCard
                img={emailImg}
                title="Email"
                subTitle={data?.data?.user?.email}
              />
              <ViewModalInfoCard
                img={locationImg}
                title="Location"
                subTitle={data?.data?.user?.state}
              />
              <ViewModalInfoCard
                img={jobImg}
                title="Current Job"
                subTitle={data?.data?.user?.currentJob}
              />
              <ViewModalInfoCard
                img={bookImg}
                title="Learning Type"
                subTitle={data?.data?.user?.studentType}
              />
              {data?.data?.user?.roles[0] !== "student" &&
                <div className="w-full !mb-3">
                  <div className="flex mb-3 items-center gap-x-[10px]">
                    <Image src={bookImg} alt="icon" width={24} height={24} />
                    <h4 className="font-semibold text-[18px]">{`Courses`}</h4>
                  </div>
                  <select className="bg-white rounded-lg border  border-[#858585] text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 lg:w-full xl:w-full md:w-full sm:w-full xsm:w-3/4 xl:p-2.5 lg:p-2.5 md:p-2.5 sm:p-2.5 xsm:p-2">
                    <option value={""}>{"All Courses"}</option>
                    {course?.courses.map((item: any, id: any) => (
                      <option value={item?.title} key={id}>
                        {item?.title}
                      </option>
                    ))}
                  </select>
                </div>}
            </div>

            <div className="grid grid-cols-2">
              <ViewModalInfoCard
                img={awardImg}
                title="Highest Education Level"
                subTitle={data?.data?.user?.highestStudy}
              />

              {data?.data?.user?.roles[0] !== "student" &&
                <div>
                  <div className="flex mb-3 items-center gap-x-[10px]">
                    <Image src={jobImg} alt="icon" width={24} height={24} />
                    <h4 className="font-semibold text-[18px]">{`Earnings`}</h4>
                  </div>
                  <p className='text-[#858585] mt-[10px]'>$ {data?.data?.user?.nEarning}</p>
                </div>}
            </div>

            <ViewModalInfoCard
              img={questionImg}
              title="How Did You Hear About Us"
              subTitle={data?.data?.user?.knowFrom}
            />

            <button
              onClick={generatePDF}
              className="bg-primary flex items-center text-white p-[12px_20px] rounded-[5px] gap-x-[10px]"
            >
              <Image src={printImg} alt="print" width={20} height={20} />
              Print
            </button>
          </>
        )
      )}
    </div>
  );
};

export default ViewModal;
