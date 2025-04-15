import React from "react";
import Head from "next/head";
import DashboardLayout from "../../../../components/layouts/DashboardLayout";
import EditPage from "../../../../components/pages/dashboard/instructor/page-creation/main edit/wrapperedit";
import PrivateTemplate from "../../../../templates/PrivateTemplate";
import AccessTemplate from "../../../../templates/AccessTemplate";

export default function index() {
  return (
    <PrivateTemplate>
      <AccessTemplate accessRole={["instructor", "student"]}>
        <Head>
          <title>Pages | Fourth IT Academy</title>
        </Head>
        <DashboardLayout>
          <EditPage />
        </DashboardLayout>
      </AccessTemplate>
    </PrivateTemplate>
  );
}
