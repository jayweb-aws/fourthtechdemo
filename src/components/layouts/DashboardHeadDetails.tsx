import AttemptSvg from "../../assets/icons/AttemptSvg";
import CallenderSvg from "../../assets/icons/CallenderSvg";
import CertificateSvg from "../../assets/icons/CertificateSvg";
import LevelSvg from "../../assets/icons/LevelSvg";
import styles from "../../styles/GeneralStyles.module.css";
const DashboardHeadDetails = () => {
  const data: any = [
    {
      title: "Weeks Practiced",
      number: "55",
      icon: CallenderSvg,
    },
    {
      title: "Certificates",
      number: "55",
      icon: CertificateSvg,
    },
    {
      title: "Completion Level",
      number: "55",
      icon: LevelSvg,
    },
    {
      title: "Mock Test Attempt",
      number: "55",
      icon: AttemptSvg,
    },
  ];
  return (
    <div className={`${styles.newBannerImg} p-[36px]`}>
      <div>
        <h1 className="text-[30px] font-medium leading-[30px]">
          Hello John Doe!
        </h1>
        <p className="text-[16px] text-[#5578A0] leading-[20px] pt-2">
          We are on a mission to help developers like you to build beautiful
          projects for free.
        </p>
      </div>
      <div className="grid gap-5 grid-cols-12 pt-[30px] ">
        {data.map((Val: any) => (
          <div className="col-span-12 sm:col-span-6 2xl:col-span-3">
            <div className="bg-[#F7F8FD] rounded-[16px] flex flex-col  border-[1px] border-[#E8ECEE]">
              <div className="p-[20px]">
                <div className="flex justify-between items-center ">
                  <h1 className="text-[#5578A0] text-[12px] leading-[12px]">
                    {Val.title}
                  </h1>
                  <div className="">
                    <Val.icon />
                  </div>
                </div>
                <div className="mt-[20px]">
                  <p className="text-[28px] leading-[28px] text-[#293642] font-semibold">
                    {Val.number}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardHeadDetails;
