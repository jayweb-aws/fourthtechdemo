import Head from "next/head";
import React from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import Account from "../../components/pages/dashboard/admin/account";
import PrivateTemplate from "../../templates/PrivateTemplate";

export default function MyAccountPage() {
  return (
    <PrivateTemplate>
      <Head>
        <title>my-account | Fourth IT Academy</title>
      </Head>

      <DashboardLayout>
        <Account />
      </DashboardLayout>
    </PrivateTemplate>
  );
}
