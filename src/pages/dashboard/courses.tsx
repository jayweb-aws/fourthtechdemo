import type { NextPage } from "next";
import Head from "next/head";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import CourseComponent from "../../components/pages/dashboard/admin/courses";
import AccessTemplate from "../../templates/AccessTemplate";
import PrivateTemplate from "../../templates/PrivateTemplate";

const Courses: NextPage = () => {
  return (
    <PrivateTemplate>
      <AccessTemplate accessRole={["admin", "instructor"]}>
        <Head>
          <title>Courses | Fourth IT Academy</title>
        </Head>
        <DashboardLayout>
          <CourseComponent />
        </DashboardLayout>
      </AccessTemplate>
    </PrivateTemplate>
  );
};

export default Courses;
