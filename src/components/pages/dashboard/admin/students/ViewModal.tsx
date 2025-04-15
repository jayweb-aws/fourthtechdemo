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
import ViewModalInfoCard from "../users/ViewModalInfoCard";

const ViewModal = ({ closeModal, id }: any) => {
  const componentPdf = useRef<any>();
  const { isError, data, error, isLoading, isSuccess } = useGetSingleUsersQuery(
    { id: id }
  );
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
            </div>

            <ViewModalInfoCard
              img={awardImg}
              title="Highest Education Level"
              subTitle={data?.data?.user?.highestStudy}
            />
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
