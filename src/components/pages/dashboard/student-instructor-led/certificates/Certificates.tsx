import Link from "next/link";
import { useAppSelector } from "../../../../../app/hooks";
import Certificateimg from "../../../../../assets/certificate.png";
import { useGetCertificatesQuery } from "../../../../../feature/api/dashboardApi";
import Loading from "../../../../common/Loading";

const Certificates = () => {
  const { _id } = useAppSelector((state) => state.auth.user);
  const { isError, data, error, isLoading, isSuccess } =
    useGetCertificatesQuery({ student: _id });

  return (
    <div>
      <h4 className="text-[28px] font-semibold px-[10px] mb-[30px]">
        Certificates
      </h4>
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : isSuccess && data?.data?.certificates?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {data?.data?.certificates?.map((val: any) => (
            <Link href={`/dashboard/certificates/${val?._id}`}>
              <div className="bg-white rounded-md cursor-pointer">
                <h3 className="text-center font-semibold py-2 ">
                  {val?.course?.title}
                </h3>
                <img src={Certificateimg?.src} className="rounded-xl" />
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="h-[50vh] flex justify-center items-center">
          <p>No data available!</p>
        </div>
      )}
    </div>
  );
};

export default Certificates;
