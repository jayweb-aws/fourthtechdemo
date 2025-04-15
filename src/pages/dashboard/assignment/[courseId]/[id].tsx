import React from "react";

import Head from "next/head";
import DashboardLayout from "../../../../components/layouts/DashboardLayout";
import OnePageAssignment from "../../../../components/pages/dashboard/instructor/one-page-assignment/index";
import PrivateTemplate from "../../../../templates/PrivateTemplate";
import AccessTemplate from "../../../../templates/AccessTemplate";

export default function index() {
  return (
    <PrivateTemplate>
      <AccessTemplate accessRole={["instructor", "student"]}>
        <Head>
          <title>One Page Assignment | Fourth IT Academy</title>
        </Head>
        <DashboardLayout>
          <OnePageAssignment />
        </DashboardLayout>
      </AccessTemplate>
    </PrivateTemplate>
  );
}
