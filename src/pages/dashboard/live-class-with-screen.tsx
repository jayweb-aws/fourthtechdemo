import type { NextPage } from "next";
import Head from "next/head";

import LiveClass from "../../components/pages/dashboard/instructor/live-class-with-screen/LiveClass";
import AccessTemplate from "../../templates/AccessTemplate";
import PrivateTemplate from "../../templates/PrivateTemplate";
import DashboardLayout from "../../components/layouts/DashboardLayout";
const Students: NextPage = () => {
  return (
    <PrivateTemplate>
      <AccessTemplate accessRole={["student", "instructor", "admin"]}>
        <Head>
          <title>Screen Live Class | Fourth IT Academy</title>
        </Head>
        <DashboardLayout>
          <LiveClass />
        </DashboardLayout>
      </AccessTemplate>
    </PrivateTemplate>
  );
};

export default Students;
