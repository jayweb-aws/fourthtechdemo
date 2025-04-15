import type { NextPage } from "next";
import Head from "next/head";
import DashboardLayout from "../../../components/layouts/DashboardLayout";
import AccessTemplate from "../../../templates/AccessTemplate";
import PrivateTemplate from "../../../templates/PrivateTemplate";

import Allquizes from "../../../components/pages/dashboard/student-instructor-led/all-quizes/index";
const Courses: NextPage = () => {
  return (
    <>
      <PrivateTemplate>
        <AccessTemplate accessRole={["student"]}>
          <Head>
            <title>All Quiz | Fourth IT Academy</title>
          </Head>
          <DashboardLayout>
            <Allquizes />
          </DashboardLayout>
        </AccessTemplate>
      </PrivateTemplate>
    </>
  );
};

export default Courses;
