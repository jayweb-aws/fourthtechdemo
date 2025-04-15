import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import courseImg from "../../../assets/certificate/course.png";
import printImg from "../../../assets/dashboard/printer.png";
import Logo from "../../../assets/logov2.png";
import Loading from "../../../components/common/Loading";
import { useGetSingleCertificatesQuery } from "../../../feature/api/dashboardApi";

const CertificateNew = () => {
  const router = useRouter();
  const componentPdf = useRef<any>();
  const id = router.query.id as any;

  const { isError, data, error, isLoading, isSuccess } =
    useGetSingleCertificatesQuery({ id: id });
  const generatePDF = useReactToPrint({
    content: () => componentPdf.current,
    documentTitle: "certificates",
    onAfterPrint: () => alert("Data saved in PDF"),
  });
  return (
    <>
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div
          ref={componentPdf}
          className={`h-screen overflow-hidden z-10 c-border p-[50px] font-poppins relative before:absolute before:left-[20px] before:top-[72%] before:bg-[url('../assets/certificate/shape-bottom1.png')] before:z-[-9] before:w-full before:h-full before:bg-no-repeat`}
        >
          <div>
            <Image src={Logo} alt="logo" />
          </div>

          <div className="max-w-[700px] mx-auto text-center relative">
            <h2 className="uppercase text-[#29A5FE] text-[70px] leading-normal font-semibold">
              Certificate
            </h2>
            <h4 className="uppercase text-[40px]">of completion</h4>
            <button className="uppercase tracking-[10px] bg-dark text-white p-[5px_100px]">
              awarded to
            </button>

            <div className="relative mt-[100px] before:absolute before:w-[340px] before:h-[1px] before:bg-darkgrey before:left-1/2 before:-translate-x-1/2 before:top-[-10px]">
              <h4 className="uppercase">FOR SUCCESSFUL COMPLETION OF</h4>
              <h4 className="font-semibold  uppercase">
                {data?.data?.certificate?.course?.title}
              </h4>
            </div>

            <div className="flex justify-center gap-x-[300px] mt-[50px]">
              <div className="relative uppercase before:absolute before:w-[200px] before:h-[1px] before:bg-darkgrey before:top-[-5px] before:left-1/2 before:-translate-x-1/2">
                {" "}
                {moment(data?.data?.certificate?.createdAt).format(
                  "MMMM Do YYYY"
                )}
              </div>
              <div className="relative uppercase before:absolute before:w-[200px] before:h-[1px] before:bg-darkgrey before:top-[-5px] before:left-1/2 before:-translate-x-1/2">
                {data?.data?.certificate?.student?.firstName}{" "}
                {data?.data?.certificate?.student?.lastName}
              </div>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[110px] h-[110px]">
              <Image src={courseImg} alt="course certificate" />
            </div>
          </div>
        </div>
      )}
      <div className="flex gap-5 justify-end">
        <Link href={`/dashboard/certificates`}>
          <button className="bg-primary my-2  mb-2 flex items-center text-white p-[12px_20px] rounded-[5px] gap-x-[10px]">
            Back
          </button>
        </Link>
        <button
          onClick={generatePDF}
          className="bg-primary my-2  mb-2 flex items-center text-white p-[12px_20px] rounded-[5px] gap-x-[10px]"
        >
          <Image src={printImg} alt="print" width={20} height={20} />
          Print
        </button>
      </div>
    </>
  );
};

export default CertificateNew;
