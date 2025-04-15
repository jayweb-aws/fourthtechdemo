import React from "react";
import Head from "next/head";
import DashboardLayout from "../../../components/layouts/DashboardLayout";
import Quiz from "../../../components/pages/dashboard/instructor/quiz/index";
import PrivateTemplate from "../../../templates/PrivateTemplate";
import AccessTemplate from "../../../templates/AccessTemplate";
function index() {
  return (
    <PrivateTemplate>
      <AccessTemplate accessRole={["instructor"]}>
        <Head>
          <title>Instructor | Fourth IT Academy</title>
        </Head>
        <DashboardLayout>
          <Quiz />
        </DashboardLayout>
      </AccessTemplate>
    </PrivateTemplate>
  );
}

export default index;
