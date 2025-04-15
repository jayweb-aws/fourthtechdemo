import { useEffect, useState } from "react";
import { ICommon } from "../../interfaces/ICommon";
import AsideBar from "./Admin/AsideBar";
import Footer from "./Admin/Footer";
import Header from "./Admin/Header";
import DashboardHeadDetails from "./DashboardHeadDetails";
import Admindashboardcard from "../pages/dashboard/dashboardcard/Admindashboardcard";
import { useAppSelector } from "../../app/hooks";
import Studentdashboardcard from "../pages/dashboard/dashboardcard/Studentdashboardcard";

const dashboardComponent: any = {
  "admin" : Admindashboardcard,
  "student" : Studentdashboardcard,
  "instructor": Admindashboardcard
}

const DashboardLayout = ({ children }: ICommon) => {
  const [show, setShow] = useState(true);
  console.log("🚀 ~ DashboardLayout ~ show:", show)
  const [isMobile, setIsMobile] = useState(false);
  const { roles } = useAppSelector((state) => state.auth.user);
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768; 
      setIsMobile(mobile);
      setShow(!mobile);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const mainPadding = isMobile ? 'pl-0' : show ? 'pl-[260px]' : 'pl-[70px]';

  const RenderDashboardCard: any = dashboardComponent[`${roles[0]}`]
  return (
    <>
      <div className="flex !font-nunito min-h-screen">
        <div className="z-50">
          <AsideBar setShow={setShow} show={show} />
        </div>
        <div className={`relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden ${mainPadding}`}>
          <div className="sticky top-0 bg-white z-40 shadow">
          <Header show={show} setShow={setShow} />
          </div>
          {/* <DashboardHeadDetails /> */}
          {/* <Admindashboardcard /> */}
          {/* {RenderDashboardCard && <RenderDashboardCard />} */}
          <main className="bg-[#F9F9F9] h-full">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
