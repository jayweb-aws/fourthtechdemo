import React from "react";
import Head from "next/head";
import PrivateTemplate from "../../../templates/PrivateTemplate";
import DashboardLayout from "../../../components/layouts/DashboardLayout";
import AllGrade from "../../../components/pages/dashboard/instructor/grades/AllGrade";
import AccessTemplate from "../../../templates/AccessTemplate";

export default function grades() {
  return (
    <PrivateTemplate>
      <AccessTemplate accessRole={["instructor"]}>
        <Head>
          <title>Instructor Grades | Fourth IT Academy</title>
        </Head>

        <DashboardLayout>
          <AllGrade />
        </DashboardLayout>
      </AccessTemplate>
    </PrivateTemplate>
  );
}
