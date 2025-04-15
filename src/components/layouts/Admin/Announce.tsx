import { useState } from "react";
import Mike from "../../../Icon/Mike";
import { useGetAnnouncementCountQuery } from "../../../feature/api/dashboardApi";
import styles from "../../../styles/GeneralStyles.module.css";
import AnnouncementModal from "../../common/announcement/AnnounceModal";

import { useAppSelector } from "../../../app/hooks";

export default function Announce() {
  const [show, setShow] = useState<boolean>(false);
  const handleClose = () => {
    setShow(false);
  };
  const { data, isSuccess, isError, isLoading } =
    useGetAnnouncementCountQuery<any>({});
  const {
    user: { roles, studentType, email },
    refresh,
  } = useAppSelector((state) => state.auth);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <>
      <div
        className={`${styles.dashboardTopBg} w-full py-[29px] px-2 font-nunito`}
      >
        <div className=" flex xsm:flex-col sm:flex-row lg:flex-row md:flex-row xl:flex-row justify-between xsm:px-[5px] sm:px-10 md:px-10 lg:px-10 xl:px-10  xsm:py-[5px] sm:py-5 md:py-5 lg:py-5 xl:py-5">
          <div>
            <h1 className="text-4xl mb-1 font-extrabold text-white">
              Welcome !{" "}
            </h1>
            <p className="text-white text-sm">
              The Fourth IT Academy has everything you need to succeed in your
              career
            </p>
          </div>
          <div className="relative w-fit">
            <div className="bg-red-600 right-[5px] top-[-14px] absolute w-4 h-4 rounded-full text-white flex justify-center items-center p-3">
              {data?.data?.counts}
            </div>
            <button
              onClick={() => handleClick()}
              className="p-4 flex justify-between items-center text-white bg-blue-700 xsm:mt-[5px] sm:mt-0 lg:mt-0 md:mt-0 xl:mt-0"
            >
              Announcements
              <div>
                <Mike />
              </div>
            </button>
          </div>
        </div>
      </div>
      {<AnnouncementModal show={show} handleClose={handleClose} />}
    </>
  );
}
