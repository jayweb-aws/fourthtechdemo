import React from "react";
import Head from "next/head";
import PrivateTemplate from "../../../templates/PrivateTemplate";
import DashboardLayout from "../../../components/layouts/DashboardLayout";
import Grades from "../../../components/pages/dashboard/instructor/grades/index";
import AccessTemplate from "../../../templates/AccessTemplate";

export default function grades() {
  return (
    <>
      <PrivateTemplate>
        <AccessTemplate accessRole={["instructor"]}>
          <Head>
            <title>Instructor Grades | Fourth IT Academy</title>
          </Head>

          <DashboardLayout>
            <Grades />
          </DashboardLayout>
        </AccessTemplate>
      </PrivateTemplate>
    </>
  );
}
