import React from "react";
import Head from "next/head";
import DashboardLayout from "../../../components/layouts/DashboardLayout";
import AllAssingments from "../../../components/pages/dashboard/instructor/all-assignments/index";
import PrivateTemplate from "../../../templates/PrivateTemplate";
import AccessTemplate from "../../../templates/AccessTemplate";

export default function index() {
  return (
    <PrivateTemplate>
      <AccessTemplate accessRole={["instructor", "student"]}>
        <Head>
          <title>All Assignments | Fourth IT Academy</title>
        </Head>
        <DashboardLayout>
          <AllAssingments />
        </DashboardLayout>
      </AccessTemplate>
    </PrivateTemplate>
  );
}
