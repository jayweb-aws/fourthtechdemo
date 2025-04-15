import React from "react";
import DashboardLayout from "../../../components/layouts/DashboardLayout";
import CreateAnnouncement from "../../../components/pages/dashboard/admin/announcement/create-announcement/index";
import PrivateTemplate from "../../../templates/PrivateTemplate";
import AccessTemplate from "../../../templates/AccessTemplate";
import Head from "next/head";
export default function index() {
  return (
    <PrivateTemplate>
      <AccessTemplate accessRole={["admin", "instructor"]}>
        <Head>
          <title>Create Announcement | Fourth IT Academy</title>
        </Head>
        <DashboardLayout>
          <CreateAnnouncement />
        </DashboardLayout>
      </AccessTemplate>
    </PrivateTemplate>
  );
}
