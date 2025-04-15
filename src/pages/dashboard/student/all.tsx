import React from "react";
import Head from "next/head";
import DashboardLayout from "../../../components/layouts/DashboardLayout";
import AllStudent from "../../../components/pages/dashboard/instructor/student/AllStudent";
import PrivateTemplate from "../../../templates/PrivateTemplate";
import AccessTemplate from "../../../templates/AccessTemplate";

export default function All() {
  return (
    <PrivateTemplate>
      <AccessTemplate accessRole={["instructor"]}>
        <Head>
          <title>All Student | Fourth IT Academy</title>
        </Head>
        <DashboardLayout>
          <AllStudent />
        </DashboardLayout>
      </AccessTemplate>
    </PrivateTemplate>
  );
}
