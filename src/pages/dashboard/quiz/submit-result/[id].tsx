import React from "react";
import Head from "next/head";
import DashboardLayout from "../../../../components/layouts/DashboardLayout";
import QuizResult from "../../../../components/pages/dashboard/stundent-self/quiz/submit-result";
import PrivateTemplate from "../../../../templates/PrivateTemplate";
import AccessTemplate from "../../../../templates/AccessTemplate";

export default function overview() {
  return (
    <PrivateTemplate>
      <AccessTemplate accessRole={["student"]}>
        <Head>
          <title>Instructor | Fourth IT Academy</title>
        </Head>
        <DashboardLayout>
          <QuizResult />
        </DashboardLayout>
      </AccessTemplate>
    </PrivateTemplate>
  );
}
