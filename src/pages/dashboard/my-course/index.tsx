import dynamic from "next/dynamic";
import Head from "next/head";
import { useAppSelector } from "../../../app/hooks";
import DashboardLayout from "../../../components/layouts/DashboardLayout";
import MyCourses from "../../../components/pages/dashboard/student-instructor-led/student-dashboard/StudentDashboard";
import AccessTemplate from "../../../templates/AccessTemplate";
import PrivateTemplate from "../../../templates/PrivateTemplate";

const Student = () => {
  const { roles, firstName } = useAppSelector((state) => state.auth.user);

  return (
    <PrivateTemplate>
      <AccessTemplate accessRole={["student"]}>
        <Head>
          <title>{firstName} | My Courses</title>
        </Head>
        <DashboardLayout>
          <MyCourses />
        </DashboardLayout>
      </AccessTemplate>
    </PrivateTemplate>
  );
};

export default dynamic(() => Promise.resolve(Student), { ssr: false });
