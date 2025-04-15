import React from "react";
import Head from "next/head";
import DashboardLayout from "../../../components/layouts/DashboardLayout";
import AllQuiz from "../../../components/pages/dashboard/instructor/all-quiz/index";
import PrivateTemplate from "../../../templates/PrivateTemplate";
import AccessTemplate from "../../../templates/AccessTemplate";

export default function AllQuizes() {
  return (
    <PrivateTemplate>
      <AccessTemplate accessRole={["instructor"]}>
        <Head>
          <title>Instructor | Fourth IT Academy</title>
        </Head>
        <DashboardLayout>
          <AllQuiz />
        </DashboardLayout>
      </AccessTemplate>
    </PrivateTemplate>
  );
}
