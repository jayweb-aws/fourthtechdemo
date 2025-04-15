import { Spinner } from "flowbite-react";
import { useAppSelector } from "../../../../app/hooks";
import AttemptSvg from "../../../../assets/icons/AttemptSvg";
import CallenderSvg from "../../../../assets/icons/CallenderSvg";
import CertificateSvg from "../../../../assets/icons/CertificateSvg";
import LevelSvg from "../../../../assets/icons/LevelSvg";
import { useGetOverViewStarQuery } from "../../../../feature/api/dashboardApi";
import styles from "../../../../styles/GeneralStyles.module.css";
import { FaPenSquare } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { BiTime } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import OverViewCard from "../../../common/overviewCard/OverViewCard";
import { useState } from "react";
import Nav from "../admin/courses/Nav";

export type ActiveTab =
  | "courses-list"
  | "courses-request"
  | "courses-categories";

type propstypes = {
  title: string;
  subTitle: string;
  data?: any; // Made optional with ?
  activeTab?: ActiveTab; // Made optional with ?
  setActiveTab?: (tab: ActiveTab) => void; // Made optional with ?
  Modal?: boolean; // Made optional with ?
  setShowModal?: (show: boolean) => void; // Made optional with ?
};

const Admindashboardcard = ({
  title,
  subTitle,
  data,
  activeTab,
  setActiveTab,
  Modal,
  setShowModal,
}: propstypes) => {
  // Check if navigation props are available
  const hasNavProps = 
    activeTab !== undefined && 
    setActiveTab !== undefined && 
    Modal !== undefined && 
    setShowModal !== undefined;

  console.log("🚀 ~ Admindashboardcard ~ data:", data);

  return (
    <div className={`${styles.newBannerImg}`}>
      {/* Header section - always shown as title and subTitle are required */}
      <div className="p-[36px]">
        <h1 className="text-[30px] leading-[38px] font-medium text-[#293642] font-poppins">
          {title}
        </h1>
        <p className="text-[16px] text-[#5578A0] leading-[20px] pt-2 font-poppins">
          {subTitle}
        </p>
      </div>

      {/* OverviewCard section - shown only if data exists */}
      {data && (
        <div className="px-9 pb-9">
          <OverViewCard />
        </div>
      )}

      {/* Navigation section - shown only if all nav props exist */}
      {hasNavProps && (
        <div>
          <Nav
            activeTab={activeTab as ActiveTab} // Type assertion since we checked existence
            setActiveTab={setActiveTab as (tab: ActiveTab) => void} // Type assertion
            Modal={Modal as boolean} // Type assertion
            setShowModal={setShowModal as (show: boolean) => void} // Type assertion
          />
        </div>
      )}
    </div>
  );
};

export default Admindashboardcard;