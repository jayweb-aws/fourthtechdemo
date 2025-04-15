import React from "react";
import Head from "next/head";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import PageCreation from "../../components/pages/dashboard/instructor/page-creation/index";
import PrivateTemplate from "../../templates/PrivateTemplate";
import AccessTemplate from "../../templates/AccessTemplate";

export default function index() {
  return (
    <PrivateTemplate>
      <AccessTemplate accessRole={["instructor"]}>
        <Head>
          <title>Instructor | Fourth IT Academy</title>
        </Head>
        <DashboardLayout>
          <PageCreation />
        </DashboardLayout>
      </AccessTemplate>
    </PrivateTemplate>
  );
}
