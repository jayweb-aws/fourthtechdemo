import Head from "next/head";
import DashboardLayout from "../../../components/layouts/DashboardLayout";
import MycourseDetails from "../../../components/pages/dashboard/student-instructor-led/student-dashboard/mycoursesDetails/index";
import AccessTemplate from "../../../templates/AccessTemplate";
import PrivateTemplate from "../../../templates/PrivateTemplate";

export default function mycourses() {
  return (
    <PrivateTemplate>
      <AccessTemplate accessRole={["student", "instructor", "admin"]}>
        <Head>
          <title>My Courses | Fourth IT Academy</title>
        </Head>

        <DashboardLayout>
          <MycourseDetails />
        </DashboardLayout>
      </AccessTemplate>
    </PrivateTemplate>
  );
}
